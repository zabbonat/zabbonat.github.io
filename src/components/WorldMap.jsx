import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DoorOpen, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

const WorldMap = ({ onNavigate }) => {
    // Avatar position in percentages (x, y)
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [direction, setDirection] = useState('down'); // for future sprite animation
    const [isMoving, setIsMoving] = useState(false);

    const zones = [
        { id: 'about', name: 'The Tavern', desc: '(About Me)', x: 20, y: 60, radius: 10, color: 'bg-orange-500/30' },
        { id: 'research', name: 'Alchemist Lab', desc: '(Research)', x: 70, y: 30, radius: 10, color: 'bg-purple-500/30' },
        { id: 'publications', name: 'The Library', desc: '(Publications)', x: 30, y: 20, radius: 10, color: 'bg-blue-500/30' },
        { id: 'cv', name: 'Archives', desc: '(CV & Resume)', x: 70, y: 70, radius: 10, color: 'bg-yellow-500/30' },
    ];

    // Movement speed
    const SPEED = 1.5;

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Prevent default scrolling for arrow keys
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
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
    }, []);

    // Check collisions
    useEffect(() => {
        zones.forEach((zone) => {
            // Simple distance check in percentage units (approximate but works for this scale)
            // Aspect ratio might skew it slightly but acceptable for MVP
            const dx = position.x - zone.x;
            const dy = position.y - zone.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < zone.radius / 2) {
                onNavigate(zone.id);
            }
        });
    }, [position, onNavigate]);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none">
            {/* Map Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: "url('/world_map.png')" }}
            />

            {/* Instructions Overlay (fades out when moving) */}
            {!isMoving && (
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

            {/* Welcome Message (Static at top) */}
            <div className="absolute top-4 left-0 right-0 text-center z-10 pointer-events-none">
                <h1 className="font-pixel text-2xl md:text-4xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                    Welcome to Diletta's World
                </h1>
            </div>

            {/* Interactive Zones (Visuals) */}
            {zones.map((zone) => (
                <div
                    key={zone.id}
                    className={`absolute rounded-full ${zone.color} border-2 border-white/30 backdrop-blur-[2px] flex items-center justify-center z-0`}
                    style={{
                        top: `${zone.y}%`,
                        left: `${zone.x}%`,
                        width: '120px',
                        height: '120px',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max bg-black/80 p-1 rounded border border-white/20 pointer-events-none">
                        <p className="font-pixel text-[10px] text-white text-center whitespace-nowrap">
                            {zone.name}
                        </p>
                    </div>
                </div>
            ))}

            {/* Classical View Door */}
            <motion.button
                onClick={() => onNavigate('classic-mode')}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center group z-20 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="w-16 h-24 bg-slate-800 border-4 border-slate-600 rounded-t-full flex items-center justify-center group-hover:bg-slate-700 group-hover:border-white transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <DoorOpen size={32} className="text-white" />
                </div>
                <div className="mt-2 bg-black/70 px-3 py-1 rounded border border-white/30">
                    <span className="font-pixel text-[10px] text-white">Classical View</span>
                </div>
            </motion.button>

            {/* Player Avatar */}
            <motion.div
                className="absolute z-30 flex flex-col items-center"
                style={{
                    top: `${position.y}%`,
                    left: `${position.x}%`,
                    transform: 'translate(-50%, -50%)' // Centering the avatar on its coordinates
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
                    className={`w-24 h-24 object-contain drop-shadow-lg transition-transform ${direction === 'left' ? 'scale-x-[-1]' : ''}`}
                />
                <div className="bg-black/50 px-2 rounded-full mt-1">
                    <span className="font-pixel text-[8px] text-white">You</span>
                </div>
            </motion.div>
        </div>
    );
};

export default WorldMap;
