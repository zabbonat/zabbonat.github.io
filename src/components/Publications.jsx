import { motion } from 'framer-motion';
import { Book, ScrollText, PenTool } from 'lucide-react';

const Publications = () => {
    return (
        <section id="publications" className="min-h-screen p-8 flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-3xl md:text-5xl text-blue-400 mb-4 drop-shadow-md">The Library</h2>
                    <p className="font-pixel text-xs md:text-sm text-slate-400">Ancient scrolls and knowledge tomes.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Published Papers */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-slate-800/90 p-6 rounded-lg border-4 border-blue-900/50 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                            <Book className="text-blue-400" size={24} />
                            <h3 className="font-pixel text-lg text-white">Published Tomes</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-blue-500 transition-colors">
                                <h4 className="font-bold text-white mb-2">Interdisciplinary research in artificial intelligence: Lessons from COVID-19</h4>
                                <p className="text-sm text-slate-400 mb-2">Abbonato, D., Bianchini, S., Gargiulo, F., & Venturini, T. (2024)</p>
                                <span className="inline-block px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded border border-blue-800">Quantitative Science Studies</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Work in Progress */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-slate-800/90 p-6 rounded-lg border-4 border-purple-900/50 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                            <ScrollText className="text-purple-400" size={24} />
                            <h3 className="font-pixel text-lg text-white">Unfinished Scrolls</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-purple-500 transition-colors">
                                <h4 className="font-bold text-white text-sm mb-1">Partnerships is all you need: The development of transformer technology...</h4>
                                <p className="text-xs text-slate-500">Forthcoming in Scientometrics</p>
                            </div>

                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-purple-500 transition-colors">
                                <h4 className="font-bold text-white text-sm mb-1">Validation and enrichment of RUNTS with web data</h4>
                                <p className="text-xs text-slate-500">Working Paper</p>
                            </div>

                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-purple-500 transition-colors">
                                <h4 className="font-bold text-white text-sm mb-1">Mapping AI’s Labor Impact</h4>
                                <p className="text-xs text-slate-500">Working Paper</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
