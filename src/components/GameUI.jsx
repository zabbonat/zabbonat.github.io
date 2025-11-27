import { motion } from 'framer-motion';
import { Heart, Zap, Backpack, Settings } from 'lucide-react';

const GameUI = ({ onInventoryClick, onSettingsClick }) => {
    return (
        <div className="fixed top-0 left-0 w-full pointer-events-none z-40 p-4 flex justify-between items-start">
            {/* Player Stats */}
            <div className="flex flex-col gap-2 pointer-events-auto">
                <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded border-2 border-slate-600">
                    <div className="bg-red-500 p-1 rounded">
                        <Heart size={16} className="text-white fill-current" />
                    </div>
                    <div className="w-32 h-4 bg-slate-700 rounded overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-red-500"
                        />
                    </div>
                    <span className="font-pixel text-[10px] text-white">HP</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded border-2 border-slate-600">
                    <div className="bg-blue-500 p-1 rounded">
                        <Zap size={16} className="text-white fill-current" />
                    </div>
                    <div className="w-32 h-4 bg-slate-700 rounded overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '80%' }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="h-full bg-blue-500"
                        />
                    </div>
                    <span className="font-pixel text-[10px] text-white">MP</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pointer-events-auto">
                <button
                    onClick={onInventoryClick}
                    className="p-3 bg-slate-900/80 border-2 border-slate-600 rounded hover:bg-slate-800 hover:border-yellow-500 transition-colors group relative"
                >
                    <Backpack size={24} className="text-white" />
                    <span className="absolute top-full right-0 mt-2 bg-black text-white text-[10px] font-pixel p-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                        Inventory (CV)
                    </span>
                </button>
                <button
                    onClick={onSettingsClick}
                    className="p-3 bg-slate-900/80 border-2 border-slate-600 rounded hover:bg-slate-800 hover:border-slate-400 transition-colors"
                >
                    <Settings size={24} className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default GameUI;
