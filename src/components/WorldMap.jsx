import { motion } from 'framer-motion';
import { DoorOpen } from 'lucide-react';

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

            {/* Central Avatar & Welcome Message */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img
                        src="/me_rpg.png"
                        alt="Diletta RPG Avatar"
                        className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    />
                </motion.div>
                <div className="mt-4 bg-black/60 p-4 rounded-lg border-2 border-white/50 backdrop-blur-sm text-center">
                    <h1 className="font-pixel text-xl md:text-2xl text-white text-shadow">
                        Welcome to Diletta's World
                    </h1>
                    <p className="font-pixel text-[10px] md:text-xs text-yellow-300 mt-2 animate-pulse">
                        Choose your destination
                    </p>
                </div>
            </div>

            {/* Classical View Door (Right Side) */}
            <motion.button
                onClick={() => onNavigate('classic-mode')}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center group z-20"
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

            {/* Interactive Zones */}
            {zones.map((zone) => (
                <motion.button
                    key={zone.id}
                    onClick={() => onNavigate(zone.id)}
                    className={`absolute w-24 h-24 md:w-32 md:h-32 rounded-full ${zone.color} border-2 border-white/30 backdrop-blur-[2px] flex items-center justify-center group cursor-pointer hover:border-white hover:bg-white/10 transition-all z-20`}
                    style={{ top: zone.top, left: zone.left }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 p-2 rounded border border-white/20 pointer-events-none">
                        <p className="font-pixel text-xs text-white text-center whitespace-nowrap">
                            {zone.name}
                        </p>
                        <p className="font-pixel text-[8px] text-yellow-300 text-center mt-1">
                            {zone.desc}
                        </p>
                    </div>
                </motion.button>
            ))}
        </div>
    );
};

export default WorldMap;
