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
    const [showWelcome, setShowWelcome] = useState(true);

    // Motorcycle State
    const [isRiding, setIsRiding] = useState(false);
    const [bikePosition, setBikePosition] = useState({ x: 10, y: 38 }); // Initial position matching original img style
    const [nearBike, setNearBike] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

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
    const WALK_SPEED = 1.5;
    const BIKE_SPEED = 3.0;
    const currentSpeed = isRiding ? BIKE_SPEED : WALK_SPEED;

    // Movement logic
    const updatePosition = (key) => {
        setPosition((prev) => {
            let newX = prev.x;
            let newY = prev.y;

            switch (key) {
                case 'ArrowUp':
                case 'w':
                    newY = Math.max(0, prev.y - currentSpeed);
                    break;
                case 'ArrowDown':
                case 's':
                    newY = Math.min(100, prev.y + currentSpeed);
                    break;
                case 'ArrowLeft':
                case 'a':
                    newX = Math.max(0, prev.x - currentSpeed);
                    break;
                case 'ArrowRight':
                case 'd':
                    newX = Math.min(100, prev.x + currentSpeed);
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
            if (!activeButton) setIsMoving(false);
        }
        return () => clearInterval(interval);
    }, [activeButton, isRiding]); // Added isRiding to dependency to update speed

    // Toggle Bike Mount/Dismount
    const toggleBike = () => {
        if (isRiding) {
            // Dismount
            setIsRiding(false);
            setBikePosition({ x: position.x, y: position.y });
        } else if (nearBike) {
            // Mount
            setIsRiding(true);
        }
    };

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
                } else if (nearBike || isRiding) {
                    toggleBike();
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
    }, [activeZone, onNavigate, showGame, nearBike, isRiding, position]);

    // Check collisions & Bike Proximity
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

        // Check bike proximity
        if (!isRiding) {
            const dx = position.x - bikePosition.x;
            const dy = position.y - bikePosition.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            // Radius for bike interaction
            setNearBike(distance < 5);
        } else {
            setNearBike(false);
        }

    }, [position, isRiding, bikePosition]);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">

            {/* Scrollable Map Area */}
            <div className="w-full h-full overflow-auto md:overflow-hidden flex items-center justify-center">
                {/* Map Wrapper - Enforces Aspect Ratio & Full Height */}
                <div className="relative h-full aspect-video min-w-[177.78vh] md:min-w-0 md:w-full md:h-auto md:aspect-video shadow-2xl">
                    {/* Map Background */}
                    <div
                        className="absolute inset-0 bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/world_map169.png')",
                            backgroundSize: '100% 100%',
                            imageRendering: 'pixelated'
                        }}
                    />

                    {/* Motorcycle (Static Object) */}
                    {!isRiding && (
                        <img
                            src="/hornet750rpg.png"
                            alt="Motorcycle"
                            className={`absolute z-10 w-40 drop-shadow-lg transition-transform duration-300 ${nearBike ? 'scale-110 brightness-125' : ''}`}
                            style={{
                                left: `${bikePosition.x}%`,
                                top: `${bikePosition.y}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                            onClick={() => {
                                if (nearBike) toggleBike();
                            }}
                            title={nearBike ? "Ride Motorcycle" : "Get closer to ride"}
                        />
                    )}

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
                                width: '20%',
                                height: '35%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'transparent'
                            }}
                        >
                            {/* Always visible label */}
                            {!zone.hidden && (
                                <div className="bg-black/60 p-1 md:p-2 rounded border border-white/10 backdrop-blur-sm">
                                    <p className="font-pixel text-xs md:text-sm text-white text-center whitespace-nowrap drop-shadow-md">
                                        {zone.name}
                                    </p>
                                    <p className="font-pixel text-[8px] md:text-[10px] text-yellow-300 text-center mt-1">
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
                            src={isRiding ? "/hornet750rpg.png" : "/me_rpg.png"}
                            alt="Player"
                            className={`${isRiding ? 'w-48 h-48' : 'w-44 h-44'} md:w-52 md:h-52 object-contain drop-shadow-2xl transition-transform ${direction === 'left' ? 'scale-x-[-1]' : ''}`}
                        />
                    </motion.div>
                </div>
            </div>

            {/* UI LAYOUT (Fixed Overlay) */}

            {/* Welcome Message & Instructions */}
            <AnimatePresence>
                {showWelcome && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-4 left-0 right-0 text-center z-10 pointer-events-none"
                    >
                        <h1 className="font-pixel text-lg md:text-3xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-2">
                            Welcome To My Personal Page, Explore!
                        </h1>
                        <p className="font-pixel text-[10px] md:text-xs text-yellow-300 animate-pulse drop-shadow-md">
                            <span className="hidden md:inline">Use Arrow Keys to Move</span>
                            <span className="md:hidden">Use Controls to Move (Scroll to see full map)</span>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Instructions Overlay (Desktop) */}
            {!isMoving && !activeZone && !showGame && (
                <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10 pointer-events-none animate-pulse">
                    <div className="bg-black/50 p-4 rounded-lg backdrop-blur-sm border border-white/20">
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
            {activeZone && !showGame && (
                <div className="absolute bottom-32 md:bottom-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
                    <div className="bg-black/80 p-4 rounded-lg border-2 border-yellow-500 text-center shadow-lg">
                        <p className="font-pixel text-sm text-white mb-1">Enter {activeZone.name}?</p>
                        <div className="flex items-center justify-center gap-2 text-yellow-300 font-pixel text-xs">
                            <CornerDownLeft size={16} />
                            <span className="hidden md:inline">Press ENTER</span>
                            <span className="md:hidden">Tap ACTION</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Bike Interaction Prompt */}
            {(nearBike || isRiding) && !activeZone && !showGame && (
                <div className="absolute bottom-32 md:bottom-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
                    <div className="bg-black/80 p-4 rounded-lg border-2 border-blue-500 text-center shadow-lg">
                        <p className="font-pixel text-sm text-white mb-1">{isRiding ? "Dismount Bike?" : "Ride Bike?"}</p>
                        <div className="flex items-center justify-center gap-2 text-blue-300 font-pixel text-xs">
                            <CornerDownLeft size={16} />
                            <span className="hidden md:inline">Press ENTER</span>
                            <span className="md:hidden">Tap ACTION</span>
                        </div>
                    </div>
                </div>
            )}

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
                    className={`w-20 h-20 rounded-full border-4 flex items-center justify-center shadow-lg transition-all active:scale-95 ${activeZone ? 'bg-yellow-600 border-yellow-400 animate-pulse' : (nearBike || isRiding) ? 'bg-blue-600 border-blue-400 animate-pulse' : 'bg-slate-800/80 border-slate-600'}`}
                    onClick={() => {
                        if (activeZone) {
                            if (activeZone.id === 'easter-egg') {
                                setShowGame(true);
                            } else {
                                onNavigate(activeZone.id);
                            }
                        } else if (nearBike || isRiding) {
                            toggleBike();
                        }
                    }}
                >
                    <span className="font-pixel text-white text-xs font-bold">
                        {activeZone ? 'ENTER' : (nearBike || isRiding) ? (isRiding ? 'EXIT' : 'RIDE') : 'ACTION'}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default WorldMap;
