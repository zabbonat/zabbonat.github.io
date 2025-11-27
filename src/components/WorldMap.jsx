import { motion } from 'framer-motion';

const WorldMap = ({ onNavigate }) => {
    const zones = [
        { id: 'about', name: 'The Tavern', desc: '(About Me)', top: '60%', left: '20%', color: 'bg-orange-500/30' },
        { id: 'research', name: 'Alchemist Lab', desc: '(Research)', top: '30%', left: '70%', color: 'bg-purple-500/30' },
        { id: 'publications', name: 'The Library', desc: '(Publications)', top: '20%', left: '30%', color: 'bg-blue-500/30' },
        { id: 'cv', name: 'Archives', desc: '(CV & Resume)', top: '70%', left: '70%', color: 'bg-yellow-500/30' },
    ];

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
            {/* Map Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: "url('/world_map.png')" }}
            />

            {/* Title Overlay */}
            <div className="absolute top-10 left-0 right-0 text-center z-10 pointer-events-none">
                <h1 className="font-pixel text-4xl md:text-6xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                    Diletta's World
                </h1>
                <p className="font-pixel text-sm md:text-base text-yellow-300 mt-4 animate-pulse">
                    Click a location to explore
                </p>
            </div>

            {/* Interactive Zones */}
            {zones.map((zone) => (
                <motion.button
                    key={zone.id}
                    onClick={() => onNavigate(zone.id)}
                    className={`absolute w-32 h-32 md:w-48 md:h-48 rounded-full ${zone.color} border-4 border-white/50 backdrop-blur-sm flex items-center justify-center group cursor-pointer hover:border-white transition-colors`}
                    style={{ top: zone.top, left: zone.left }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded backdrop-blur-sm">
                        <span className="font-pixel text-xs md:text-sm text-white text-center drop-shadow-md">
                            {zone.name}
                        </span>
                        <span className="font-pixel text-[10px] text-yellow-300 mt-1">
                            {zone.desc}
                        </span>
                    </div>
                </motion.button>
            ))}
        </div>
    );
};

export default WorldMap;
