import React, { useRef, useEffect, useState } from 'react';

const TenureRoadGame = ({ onClose }) => {
    const canvasRef = useRef(null);
    const [gameState, setGameState] = useState('MENU'); // MENU, PLAYING, GAMEOVER
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(localStorage.getItem('tenureRoadHighScore') || 0);
    const [message, setMessage] = useState('');

    // Game constants
    const GRAVITY = 0.6;
    const JUMP_STRENGTH = -10;
    const DOUBLE_JUMP_STRENGTH = -8;
    const SPEED_INITIAL = 5;
    const SPEED_INCREMENT = 0.001;

    // Game state refs (for loop)
    const stateRef = useRef({
        player: {
            x: 50,
            y: 0, // Will be set based on canvas height
            width: 60,
            height: 40,
            vy: 0,
            grounded: true,
            jumps: 0,
            rotation: 0
        },
        obstacles: [],
        collectibles: [],
        particles: [],
        speed: SPEED_INITIAL,
        distance: 0,
        frameCount: 0,
        lastObstacleTime: 0,
        gameLoopId: null
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = Math.min(window.innerWidth * 0.9, 800);
            canvas.height = Math.min(window.innerHeight * 0.6, 400);
            // Reset player y if resizing
            if (stateRef.current.player.y === 0) {
                stateRef.current.player.y = canvas.height - 50;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Input handling
        const handleInput = (e) => {
            if (e.type === 'keydown' && e.code !== 'Space') return;
            if (e.type === 'keydown') e.preventDefault(); // Prevent scrolling

            const state = stateRef.current;

            if (gameState === 'MENU' || gameState === 'GAMEOVER') {
                startGame();
            } else if (gameState === 'PLAYING') {
                jump();
            }
        };

        window.addEventListener('keydown', handleInput);
        canvas.addEventListener('touchstart', handleInput);
        canvas.addEventListener('mousedown', handleInput);

        // Game Loop
        const loop = () => {
            if (gameState === 'PLAYING') {
                update(canvas);
            }
            draw(ctx, canvas);
            stateRef.current.gameLoopId = requestAnimationFrame(loop);
        };

        stateRef.current.gameLoopId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('keydown', handleInput);
            canvas.removeEventListener('touchstart', handleInput);
            canvas.removeEventListener('mousedown', handleInput);
            cancelAnimationFrame(stateRef.current.gameLoopId);
        };
    }, [gameState]);

    const startGame = () => {
        const canvas = canvasRef.current;
        stateRef.current = {
            ...stateRef.current,
            player: {
                x: 50,
                y: canvas.height - 60,
                width: 60,
                height: 40,
                vy: 0,
                grounded: true,
                jumps: 0,
                rotation: 0
            },
            obstacles: [],
            collectibles: [],
            particles: [],
            speed: SPEED_INITIAL,
            distance: 0,
            frameCount: 0,
            lastObstacleTime: 0
        };
        setScore(0);
        setMessage('');
        setGameState('PLAYING');
    };

    const jump = () => {
        const player = stateRef.current.player;
        if (player.grounded) {
            player.vy = JUMP_STRENGTH;
            player.grounded = false;
            player.jumps = 1;
            createParticles(player.x, player.y + player.height, 5, '#fff');
            // Audio placeholder: playJumpSound();
        } else if (player.jumps < 2) {
            player.vy = DOUBLE_JUMP_STRENGTH;
            player.jumps = 2;
            createParticles(player.x, player.y + player.height, 5, '#ffcc00');
        }
    };

    const createParticles = (x, y, count, color) => {
        for (let i = 0; i < count; i++) {
            stateRef.current.particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                life: 1.0,
                color
            });
        }
    };

    const update = (canvas) => {
        const state = stateRef.current;
        const player = state.player;

        // Speed progression
        state.speed += SPEED_INCREMENT;
        state.distance += state.speed;
        setScore(Math.floor(state.distance / 10));

        // Milestones
        if (Math.floor(state.distance) % 5000 < 20 && Math.floor(state.distance) > 100) {
            // Logic to show milestone message could go here
        }

        // Player Physics
        player.vy += GRAVITY;
        player.y += player.vy;

        // Ground collision
        const groundLevel = canvas.height - 20;
        if (player.y + player.height > groundLevel) {
            player.y = groundLevel - player.height;
            player.vy = 0;
            player.grounded = true;
            player.jumps = 0;
            player.rotation = 0;
        } else {
            // Rotate while jumping
            player.rotation = Math.min(player.rotation + 0.05, 0.5);
        }

        // Spawn Obstacles
        if (state.frameCount - state.lastObstacleTime > 100 + Math.random() * 100) { // Random interval
            const type = Math.random();
            let obstacle = {
                x: canvas.width,
                y: groundLevel - 40,
                width: 40,
                height: 40,
                type: 'box',
                emoji: '📦'
            };

            if (type < 0.3) {
                obstacle.emoji = '😠'; // Reviewer 2
                obstacle.name = "Reviewer 2";
            } else if (type < 0.6) {
                obstacle.emoji = '🚧'; // Major Revisions
                obstacle.name = "Major Revisions";
            } else if (type < 0.8) {
                obstacle.emoji = '📋'; // Rejection
                obstacle.name = "Rejection";
                obstacle.height = 60;
                obstacle.y = groundLevel - 60;
            } else {
                obstacle.emoji = '🕳️'; // Gap (Visual only for now, or implement pit logic)
                obstacle.name = "Gap";
                obstacle.y = groundLevel - 20;
            }

            state.obstacles.push(obstacle);
            state.lastObstacleTime = state.frameCount;

            // Spawn Collectible (sometimes)
            if (Math.random() > 0.5) {
                state.collectibles.push({
                    x: canvas.width + 50 + Math.random() * 100,
                    y: groundLevel - 80 - Math.random() * 60,
                    width: 30,
                    height: 30,
                    emoji: Math.random() > 0.8 ? '🏆' : (Math.random() > 0.5 ? '⭐' : '📄'),
                    value: 100 // Points
                });
            }
        }

        // Update Obstacles
        for (let i = state.obstacles.length - 1; i >= 0; i--) {
            let obs = state.obstacles[i];
            obs.x -= state.speed;

            // Collision Detection
            if (
                player.x < obs.x + obs.width - 10 &&
                player.x + player.width > obs.x + 10 &&
                player.y < obs.y + obs.height - 10 &&
                player.y + player.height > obs.y + 10
            ) {
                gameOver(obs.name);
            }

            if (obs.x + obs.width < 0) {
                state.obstacles.splice(i, 1);
            }
        }

        // Update Collectibles
        for (let i = state.collectibles.length - 1; i >= 0; i--) {
            let col = state.collectibles[i];
            col.x -= state.speed;

            // Collection
            if (
                player.x < col.x + col.width &&
                player.x + player.width > col.x &&
                player.y < col.y + col.height &&
                player.y + player.height > col.y
            ) {
                state.distance += 500; // Bonus distance/score
                createParticles(col.x, col.y, 10, '#FFD700');
                state.collectibles.splice(i, 1);
            }

            if (col.x + col.width < 0) {
                state.collectibles.splice(i, 1);
            }
        }

        // Update Particles
        for (let i = state.particles.length - 1; i >= 0; i--) {
            let p = state.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.05;
            if (p.life <= 0) state.particles.splice(i, 1);
        }

        state.frameCount++;
    };

    const gameOver = (cause) => {
        setGameState('GAMEOVER');
        let msg = "Game Over";
        if (cause === "Reviewer 2") msg = "Reviewer 2 wins... this time.";
        if (cause === "Rejection") msg = "Buried in Rejection Letters!";
        if (cause === "Major Revisions") msg = "Stuck in Major Revisions!";
        if (cause === "Gap") msg = "Funding Gap!";
        setMessage(msg);

        const currentScore = Math.floor(stateRef.current.distance / 10);
        if (currentScore > highScore) {
            setHighScore(currentScore);
            localStorage.setItem('tenureRoadHighScore', currentScore);
        }
    };

    const draw = (ctx, canvas) => {
        // Clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background (Sky)
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#1a2a6c');
        gradient.addColorStop(1, '#b21f1f');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Ground
        ctx.fillStyle = '#333';
        ctx.fillRect(0, canvas.height - 20, canvas.width, 20);

        // Road Lines
        ctx.strokeStyle = '#fff';
        ctx.setLineDash([20, 20]);
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 10);
        ctx.lineTo(canvas.width, canvas.height - 10);
        ctx.stroke();
        ctx.setLineDash([]);

        // Player (Motorcycle)
        const player = stateRef.current.player;
        ctx.save();
        ctx.translate(player.x + player.width / 2, player.y + player.height / 2);
        ctx.rotate(player.rotation);
        ctx.scale(-1, 1); // Flip horizontally
        // Draw Motorcycle (Placeholder or Image)
        // For now, simple shape + emoji
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🏍️', 0, 0);
        ctx.restore();

        // Obstacles
        stateRef.current.obstacles.forEach(obs => {
            ctx.font = '30px Arial';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillText(obs.emoji, obs.x, obs.y);
        });

        // Collectibles
        stateRef.current.collectibles.forEach(col => {
            ctx.font = '25px Arial';
            ctx.fillText(col.emoji, col.x, col.y);
        });

        // Particles
        stateRef.current.particles.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.life;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1.0;
        });

        // UI Overlay
        ctx.fillStyle = '#fff';
        ctx.font = '16px "Press Start 2P", cursive';
        ctx.textAlign = 'left';

        if (gameState === 'PLAYING') {
            ctx.fillText(`Score: ${Math.floor(stateRef.current.distance / 10)}`, 20, 30);
            ctx.fillText(`HI: ${highScore}`, 20, 55);
        } else if (gameState === 'MENU') {
            ctx.fillStyle = 'rgba(0,0,0,0.7)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.font = '30px "Press Start 2P", cursive';
            ctx.fillText("TENURE ROAD", canvas.width / 2, canvas.height / 2 - 40);
            ctx.font = '14px "Press Start 2P", cursive';
            ctx.fillText("Press SPACE or TAP to Start", canvas.width / 2, canvas.height / 2 + 10);
            ctx.fillText("Jump: SPACE/TAP | Double Jump: TAP x2", canvas.width / 2, canvas.height / 2 + 40);
        } else if (gameState === 'GAMEOVER') {
            ctx.fillStyle = 'rgba(0,0,0,0.7)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.font = '24px "Press Start 2P", cursive';
            ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 50);
            ctx.font = '12px "Press Start 2P", cursive';
            ctx.fillText(message, canvas.width / 2, canvas.height / 2 - 10);
            ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
            ctx.fillText("Press SPACE to Try Again", canvas.width / 2, canvas.height / 2 + 60);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-4xl">
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white hover:text-red-400 font-bold"
                >
                    CLOSE [X]
                </button>
                <canvas
                    ref={canvasRef}
                    className="w-full h-auto border-4 border-white rounded shadow-2xl bg-gray-900"
                />
                <div className="text-center mt-4 text-gray-400 text-xs font-mono">
                    Avoid Reviewer 2. Collect Citations. Get Tenure.
                </div>
            </div>
        </div>
    );
};

export default TenureRoadGame;
