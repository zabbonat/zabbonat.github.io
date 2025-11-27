import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, CornerDownLeft } from 'lucide-react';

const WorldMap = ({ onNavigate }) => {
    // Avatar position in percentages (x, y)
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [direction, setDirection] = useState('down');
    const [isMoving, setIsMoving] = useState(false);
    const [activeZone, setActiveZone] = useState(null);

    // Zones mapped to user's 'world_map_clean.png'
    // Coordinates adjusted based on user feedback:
    // - Tower (Archives/CV): Upper Left
    // - Alchemist Lab (Research): Right (Laboratory picture)
    // - School (Teaching): Below Right (House with ABC)
    // - Library (Publications): More to the right
    // - Tavern (About): Left/Center (Assumed remaining spot)
    const zones = [
        { id: 'about', name: 'The Tavern', desc: '(About Me)', x: 43.5, y: 42, radius: 10 },
        { id: 'research', name: 'Alchemist Lab', desc: '(Research)', x: 63, y: 22, radius: 10 },
        { id: 'publications', name: 'The Library', desc: '(Publications)', x: 36, y: 63, radius: 10 },
        { id: 'cv', name: 'Archives', desc: '(CV & Resume)', x: 34.5, y: 15, radius: 10 },
        { id: 'teaching', name: 'The Academy', desc: '(Teaching)', x: 66.5, y: 65, radius: 10 },
        { id: 'classic-mode', name: 'Classical View', desc: '(Exit RPG Mode)', x: 94, y: 20, radius: 20 },
    ];

    // Movement speed
    const SPEED = 1.5;

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Prevent default scrolling for arrow keys
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }

            if (e.key === 'Enter') {
                if (activeZone) {
                    onNavigate(activeZone.id);
                }
                return;
            }

            setIsMoving(true);
            setPosition((prev) => {
                let newX = prev.x;
                let newY = prev.y;

                switch (e.key) {
                    case 'ArrowUp':
                    case 'w':
                        newY = Math.max(0, prev.y - SPEED);
                        setDirection('up');
                        break;
                    case 'ArrowDown':
                    case 's':
                        newY = Math.min(100, prev.y + SPEED);
                        setDirection('down');
                        break;
                    case 'ArrowLeft':
                    case 'a':
                        newX = Math.max(0, prev.x - SPEED);
                        setDirection('left');
                        break;
                    case 'ArrowRight':
                    case 'd':
                        newX = Math.min(100, prev.x + SPEED);
                        setDirection('right');
                        break;
                    default:
                        return prev;
                }
                return { x: newX, y: newY };
            });
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
    }, [activeZone, onNavigate]);

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
        <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none">
            {/* Map Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/world_map169.png')",
                    imageRendering: 'pixelated'
                }}
            />

            {/* Instructions Overlay */}
            {!isMoving && !activeZone && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10 pointer-events-none animate-pulse">
                    <div className="bg-black/50 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                        <p className="font-pixel text-xs text-yellow-300 mb-2">Use Arrow Keys to Move</p>
                        <div className="flex justify-center gap-2 text-white">
                            <ArrowLeft size={16} />
                            <div className="flex flex-col gap-1">
                                <ArrowUp size={16} />
                                <ArrowDown size={16} />
                            </div>
                            <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            )}

            {/* Interaction Prompt */}
            {activeZone && (
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
                    <div className="bg-black/80 p-4 rounded-lg border-2 border-yellow-500 text-center shadow-lg">
                        <p className="font-pixel text-sm text-white mb-1">Enter {activeZone.name}?</p>
                        <div className="flex items-center justify-center gap-2 text-yellow-300 font-pixel text-xs">
                            <CornerDownLeft size={16} />
                            <span>Press ENTER</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Welcome Message */}
            <div className="absolute top-4 left-0 right-0 text-center z-10 pointer-events-none">
                <h1 className="font-pixel text-2xl md:text-4xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                    Welcome to Diletta's World
                </h1>
            </div>

            {/* Motorcycle */}
            <img
                src="/hornet750rpg.png"
                alt="Motorcycle"
                className="absolute z-10 w-40 pointer-events-none drop-shadow-lg"
                style={{
                    left: '18%',
                    top: '38%',
                    transform: 'translate(-50%, -50%)'
                }}
            />

            {/* Interactive Zones (Invisible Hitboxes with Labels) */}
            {zones.map((zone) => (
                <div
                    key={zone.id}
                    onClick={() => onNavigate(zone.id)}
                    className="absolute flex items-center justify-center z-0 cursor-pointer group"
                    style={{
                        top: `${zone.y}%`,
                        left: `${zone.x}%`,
                        width: '250px', // Large hit area
                        height: '250px',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'transparent'
                    }}
                >
                    {/* Always visible label */}
                    <div className="bg-black/60 p-2 rounded border border-white/10 backdrop-blur-sm">
                        <p className="font-pixel text-sm text-white text-center whitespace-nowrap drop-shadow-md">
                            {zone.name}
                        </p>
                        <p className="font-pixel text-[10px] text-yellow-300 text-center mt-1">
                            {zone.desc}
                        </p>
                    </div>
                </div>
            ))}


            {/* Player Avatar - Smaller size to make buildings look larger */}
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
                <div className="bg-black/50 px-3 py-1 rounded-full mt-[-10px]">
                    <span className="font-pixel text-xs text-white">You (Lvl 31)</span>
                </div>
            </motion.div>
        </div>
    );
};

export default WorldMap;
