import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, CornerDownLeft } from 'lucide-react';
import TenureRoadGame from './TenureRoadGame';

const WorldMap = ({ onNavigate }) => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [direction, setDirection] = useState('down');
    const [isMoving, setIsMoving] = useState(false);
    const [activeZone, setActiveZone] = useState(null);
    const [showGame, setShowGame] = useState(false);

    // Zones mapped to user's 'world_map_clean.png'
    const zones = [
        { id: 'about', name: 'The Tavern', desc: '(About Me)', x: 45.5, y: 42, radius: 10 },
        { id: 'research', name: 'Alchemist Lab', desc: '(Research)', x: 63, y: 22, radius: 10 },
        { id: 'publications', name: 'The Library', desc: '(Publications)', x: 36, y: 63, radius: 10 },
        { id: 'cv', name: 'Archives', desc: '(CV & Resume)', x: 34.5, y: 15, radius: 10 },
        { id: 'teaching', name: 'The Academy', desc: '(Teaching)', x: 66.5, y: 65, radius: 10 },
        { id: 'classic-mode', name: 'Classical View', desc: '(Exit RPG Mode)', x: 94, y: 20, radius: 20 },
        { id: 'easter-egg', name: 'Easter Egg', desc: '(Tenure Road)', x: 10, y: 36, radius: 10, hidden: true },
    ];

    // Movement speed
    const SPEED = 1.5;

    // Movement logic
    const updatePosition = (key) => {
        setPosition((prev) => {
            let newX = prev.x;
            let newY = prev.y;

            switch (key) {
                case 'ArrowUp':
                case 'w':
                    newY = Math.max(0, prev.y - SPEED);
                    break;
                case 'ArrowDown':
                case 's':
                    newY = Math.min(100, prev.y + SPEED);
                    break;
                case 'ArrowLeft':
                case 'a':
                    newX = Math.max(0, prev.x - SPEED);
                    break;
                case 'ArrowRight':
                case 'd':
                    newX = Math.min(100, prev.x + SPEED);
                    break;
                default:
                    return prev;
            }
            return { x: newX, y: newY };
        });
    };

    const handleMoveInput = (key) => {
        if (['ArrowUp', 'w'].includes(key)) setDirection('up');
        if (['ArrowDown', 's'].includes(key)) setDirection('down');
        if (['ArrowLeft', 'a'].includes(key)) setDirection('left');
        if (['ArrowRight', 'd'].includes(key)) setDirection('right');

        updatePosition(key);
    };

    // D-pad state
    const [activeButton, setActiveButton] = useState(null);

    // D-pad loop
    useEffect(() => {
        let interval;
        if (activeButton) {
            setIsMoving(true);
            handleMoveInput(activeButton); // Initial move
            interval = setInterval(() => {
                handleMoveInput(activeButton);
            }, 50); // Repeat every 50ms
        } else {
            // Only stop moving if no key is pressed (handled by keyup for keyboard)
            // For touch, we stop immediately when button is released
            // We need to be careful not to conflict with keyboard isMoving state
            // But since this is mobile-focused, it's likely fine.
            // Actually, let's just let the keyUp handler handle keyboard and this handle touch.
            if (!activeButton) setIsMoving(false);
        }
        return () => clearInterval(interval);
    }, [activeButton]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Prevent default scrolling for arrow keys
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }

            if (e.key === 'Enter') {
                if (activeZone) {
                    if (activeZone.id === 'easter-egg') {
                        setShowGame(true);
                    } else {
                        onNavigate(activeZone.id);
                    }
                }
                return;
            }

            // Disable movement if game is open
            if (showGame) return;

            setIsMoving(true);
            handleMoveInput(e.key);
        };

        const handleKeyUp = () => {
            setIsMoving(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [activeZone, onNavigate, showGame]);

    // Check collisions
    useEffect(() => {
        let foundZone = null;
        zones.forEach((zone) => {
            const dx = position.x - zone.x;
            const dy = position.y - zone.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < zone.radius) {
                foundZone = zone;
            }
        });
        setActiveZone(foundZone);
    }, [position]);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none touch-none">
            {/* Map Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/world_map169.png')",
                    imageRendering: 'pixelated'
                }}
            />

            {/* Motorcycle (Easter Egg) */}
            <img
                src="/hornet750rpg.png"
                alt="Motorcycle"
                className="absolute z-10 w-40 drop-shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
                style={{
                    left: '10%',
                    top: '38%',
                    transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setShowGame(true)}
                title="Start Engine?"
            />

            {/* Easter Egg Indicator */}
            <img
                src="/easter_egg.png"
                alt="Easter Egg"
                className="absolute z-10 w-60 drop-shadow-md cursor-pointer animate-float hover:scale-110 transition-transform duration-300"
                style={{
                    left: '10%',
                    top: '34%',
                    transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setShowGame(true)}
                title="Click me!"
            />

            {/* Interactive Zones */}
            {zones.map((zone) => (
                <div
                    key={zone.id}
                    onClick={() => onNavigate(zone.id)}
                    className="absolute flex items-center justify-center z-0 cursor-pointer group"
                    style={{
                        top: `${zone.y}%`,
                        left: `${zone.x}%`,
                        width: '250px',
                        height: '250px',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'transparent'
                    }}
                >
                    {/* Always visible label */}
                    {!zone.hidden && (
                        <div className="bg-black/60 p-2 rounded border border-white/10 backdrop-blur-sm">
                            <p className="font-pixel text-sm text-white text-center whitespace-nowrap drop-shadow-md">
                                {zone.name}
                            </p>
                            <p className="font-pixel text-[10px] text-yellow-300 text-center mt-1">
                                {zone.desc}
                            </p>
                        </div>
                    )}
                </div>
            ))}

            {/* Player Avatar */}
            <motion.div
                className="absolute z-30 flex flex-col items-center pointer-events-none"
                style={{
                    top: `${position.y}%`,
                    left: `${position.x}%`,
                    transform: 'translate(-50%, -50%)'
                }}
                animate={{
                    y: isMoving ? [0, -5, 0] : 0,
                }}
                transition={{
                    y: { duration: 0.2, repeat: isMoving ? Infinity : 0 }
                }}
            >
                <img
                    src="/me_rpg.png"
                    alt="Player"
                    className={`w-44 h-44 md:w-52 md:h-52 object-contain drop-shadow-2xl transition-transform ${direction === 'left' ? 'scale-x-[-1]' : ''}`}
                />
            </motion.div>

            {/* UI LAYOUT (Overlaying the screen) */}

            {/* Welcome Message & Instructions */}
            <div className="absolute top-4 left-0 right-0 text-center z-10 pointer-events-none">
                <h1 className="font-pixel text-xl md:text-4xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-2">
                    Diletta's World
                </h1>
                <p className="font-pixel text-xs md:text-sm text-yellow-300 animate-pulse drop-shadow-md">
                    <span className="hidden md:inline">Use Arrow Keys to Move</span>
                    <span className="md:hidden">Use Controls to Move</span>
                </p>
            </div>

            {/* Tenure Road Game Overlay */}
            <AnimatePresence>
                {showGame && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50"
                    >
                        <TenureRoadGame onClose={() => setShowGame(false)} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Controls (D-Pad & Action) */}
            <div className="md:hidden absolute bottom-8 left-8 z-50">
                <div className="relative w-32 h-32 bg-black/30 rounded-full backdrop-blur-sm border border-white/10">
                    {/* Up */}
                    <button
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-slate-800/80 rounded-t-lg border border-slate-600 active:bg-blue-600 flex items-center justify-center"
                        onPointerDown={() => setActiveButton('ArrowUp')}
                        onPointerUp={() => setActiveButton(null)}
                        onPointerLeave={() => setActiveButton(null)}
                    >
                        <ArrowUp size={20} className="text-white" />
                    </button>
                    {/* Down */}
                    <button
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-slate-800/80 rounded-b-lg border border-slate-600 active:bg-blue-600 flex items-center justify-center"
                        onPointerDown={() => setActiveButton('ArrowDown')}
                        onPointerUp={() => setActiveButton(null)}
                        onPointerLeave={() => setActiveButton(null)}
                    >
                        <ArrowDown size={20} className="text-white" />
                    </button>
                    {/* Left */}
                    <button
                        className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-slate-800/80 rounded-l-lg border border-slate-600 active:bg-blue-600 flex items-center justify-center"
                        onPointerDown={() => setActiveButton('ArrowLeft')}
                        onPointerUp={() => setActiveButton(null)}
                        onPointerLeave={() => setActiveButton(null)}
                    >
                        <ArrowLeft size={20} className="text-white" />
                    </button>
                    {/* Right */}
                    <button
                        className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-slate-800/80 rounded-r-lg border border-slate-600 active:bg-blue-600 flex items-center justify-center"
                        onPointerDown={() => setActiveButton('ArrowRight')}
                        onPointerUp={() => setActiveButton(null)}
                        onPointerLeave={() => setActiveButton(null)}
                    >
                        <ArrowRight size={20} className="text-white" />
                    </button>
                    {/* Center Decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-700 rounded-full border border-slate-500" />
                </div>
            </div>

            {/* Action Button */}
            <div className="md:hidden absolute bottom-8 right-8 z-50">
                <button
                    className={`w-20 h-20 rounded-full border-4 flex items-center justify-center shadow-lg transition-all active:scale-95 ${activeZone ? 'bg-yellow-600 border-yellow-400 animate-pulse' : 'bg-slate-800/80 border-slate-600'}`}
                    onClick={() => {
                        if (activeZone) {
                            if (activeZone.id === 'easter-egg') {
                                setShowGame(true);
                            } else {
                                onNavigate(activeZone.id);
                            }
                        }
                    }}
                >
                    <span className="font-pixel text-white text-xs font-bold">
                        {activeZone ? 'ENTER' : 'ACTION'}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default WorldMap;
