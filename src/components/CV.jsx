import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Sword, Shield, Scroll, Zap } from 'lucide-react';

const CV = () => {
    return (
        <section id="cv" className="min-h-screen p-8 flex items-center justify-center">
            <div className="max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-3xl md:text-5xl text-yellow-500 mb-4 drop-shadow-md">The Archives</h2>
                    <p className="font-pixel text-xs md:text-sm text-slate-400">Inspect your inventory and collected scrolls.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-800/90 rounded-lg border-4 border-slate-600 p-8 shadow-2xl"
                >
                    {/* Inventory Grid Header */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 border-b-2 border-slate-700 pb-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-slate-900 border-2 border-yellow-600 rounded flex items-center justify-center">
                                <Scroll size={32} className="text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="font-pixel text-lg text-white mb-2">Master Scroll (CV)</h3>
                                <p className="font-sans text-slate-400 text-sm">Level 31 Item. Contains full career history.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="/cv_ABBONATO_Diletta_update1025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-slate-700 border-2 border-slate-500 hover:border-white text-white font-pixel text-xs rounded transition-all"
                            >
                                <ExternalLink size={14} />
                                Inspect
                            </a>
                            <a
                                href="/cv_ABBONATO_Diletta_update1025.pdf"
                                download
                                className="flex items-center gap-2 px-4 py-2 bg-yellow-600 border-2 border-yellow-400 hover:bg-yellow-500 text-white font-pixel text-xs rounded transition-all shadow-[0_4px_0_rgb(161,98,7)] hover:shadow-[0_2px_0_rgb(161,98,7)] hover:translate-y-[2px]"
                            >
                                <Download size={14} />
                                Loot PDF
                            </a>
                        </div>
                    </div>

                    {/* Inventory Slots */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Slot 1: Education */}
                        <div className="bg-slate-900 p-4 rounded border-2 border-slate-700 hover:border-blue-500 transition-colors group">
                            <div className="flex items-center gap-3 mb-3">
                                <Sword size={20} className="text-blue-500" />
                                <h4 className="font-pixel text-sm text-blue-400">Education Tree</h4>
                            </div>
                            <ul className="space-y-3 font-sans text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">►</span>
                                    <span>Ph.D. in Economics <span className="text-xs text-slate-500 block">Univ. of Strasbourg (2020-2024)</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">►</span>
                                    <span>M.Sc. in Data Science <span className="text-xs text-slate-500 block">Sapienza Univ. of Rome (2018-2020)</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">►</span>
                                    <span>B.Sc. in Statistics <span className="text-xs text-slate-500 block">Sapienza Univ. of Rome (2015-2018)</span></span>
                                </li>
                            </ul>
                        </div>

                        {/* Slot 2: Experience */}
                        <div className="bg-slate-900 p-4 rounded border-2 border-slate-700 hover:border-green-500 transition-colors group">
                            <div className="flex items-center gap-3 mb-3">
                                <Shield size={20} className="text-green-500" />
                                <h4 className="font-pixel text-sm text-green-400">Quest History</h4>
                            </div>
                            <ul className="space-y-3 font-sans text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">►</span>
                                    <span>Postdoc Researcher <span className="text-xs text-slate-500 block">Univ. of Turin (Current)</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">►</span>
                                    <span>Postdoc Researcher <span className="text-xs text-slate-500 block">Univ. of Milan-Bicocca (2024-2025)</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">►</span>
                                    <span>Visiting Researcher <span className="text-xs text-slate-500 block">Univ. of Bremen (2023)</span></span>
                                </li>
                            </ul>
                        </div>

                        {/* Slot 3: Skills */}
                        <div className="bg-slate-900 p-4 rounded border-2 border-slate-700 hover:border-purple-500 transition-colors group">
                            <div className="flex items-center gap-3 mb-3">
                                <Zap size={20} className="text-purple-500" />
                                <h4 className="font-pixel text-sm text-purple-400">Abilities</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['R', 'Python', 'SAS', 'Java', 'C++', 'MATLAB', 'SQL', 'Gephi', 'Docker', 'Git', 'LaTeX', 'Torch', 'Tensorflow'].map((skill) => (
                                    <span key={skill} className="px-2 py-1 bg-slate-800 border border-slate-600 rounded text-xs text-purple-300 font-pixel">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CV;
