import { motion } from 'framer-motion';
import { Book, ScrollText, ExternalLink, PenTool, Hourglass, FileText } from 'lucide-react';

const Publications = () => {
    return (
        <section id="publications" className="min-h-screen p-8 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-3xl md:text-5xl text-blue-400 mb-4 drop-shadow-md">The Library</h2>
                    <p className="font-pixel text-xs md:text-sm text-slate-400">Ancient scrolls and knowledge tomes.</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Published Papers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-slate-800/90 p-6 rounded-lg border-4 border-blue-900/50 shadow-xl flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                            <Book className="text-blue-400" size={24} />
                            <h3 className="font-pixel text-lg text-white">Published</h3>
                        </div>

                        <div className="space-y-4 flex-grow">
                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-blue-500 transition-colors">
                                <h4 className="font-bold text-white text-sm mb-2">Interdisciplinary research in artificial intelligence: Lessons from COVID-19</h4>
                                <p className="text-xs text-slate-400 mb-2">Abbonato, D., Bianchini, S., Gargiulo, F., & Venturini, T. (2024)</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="inline-block px-2 py-1 bg-blue-900/50 text-blue-300 text-[10px] rounded border border-blue-800">Quantitative Science Studies</span>
                                    <a href="https://doi.org/10.1162/qss_a_00288" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Preprints */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-slate-800/90 p-6 rounded-lg border-4 border-emerald-900/50 shadow-xl flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                            <FileText className="text-emerald-400" size={24} />
                            <h3 className="font-pixel text-lg text-white">Preprints</h3>
                        </div>

                        <div className="space-y-4 flex-grow">
                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-emerald-500 transition-colors">
                                <h4 className="font-bold text-white text-sm mb-1">Mapping AI’s Labor Impact: A Task Exposure Framework for Occupational Analysis</h4>
                                <p className="text-xs text-slate-400 mb-2">Jurowetzki, R., Squicciarini, M., Abbonato, D. (2025)</p>
                                <div className="flex justify-end">
                                    <a href="https://vbn.aau.dk/ws/portalfiles/portal/793096244/361nu7zlk9zt692qz3e8x1rx9hj8au-5.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-white transition-colors">
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-emerald-500 transition-colors">
                                <h4 className="font-bold text-white text-sm mb-1">Public sentiments on the fourth industrial revolution: An unsolicited public opinion poll from Twitter</h4>
                                <p className="text-xs text-slate-400 mb-2">Abbonato, D. (2024)</p>
                                <div className="flex justify-end">
                                    <a href="https://arxiv.org/abs/2411.14230" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-white transition-colors">
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Work in Progress */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-slate-800/90 p-6 rounded-lg border-4 border-yellow-900/50 shadow-xl flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                            <Hourglass className="text-yellow-400" size={24} />
                            <h3 className="font-pixel text-lg text-white">Work in Progress</h3>
                        </div>

                        <div className="space-y-4 flex-grow max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-yellow-500 transition-colors">
                                <h4 className="font-bold text-white text-sm mb-1">Partnerships is all you need: The development of transformer technology and its impact on science</h4>
                                <p className="text-xs text-slate-400 mb-2">Abbonato, D., Bianchini, S., Llerena, P. (2024)</p>
                            </div>

                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-yellow-500 transition-colors">
                                <h4 className="font-bold text-white text-sm mb-1">Disentangling the Impact of Methodological and Topic Interdisciplinarity on Scientific Performance in Economics</h4>
                                <p className="text-xs text-slate-400">Abbonato, D., Guerzoni, M.</p>
                            </div>

                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-yellow-500 transition-colors">
                                <h4 className="font-bold text-white text-sm mb-1">Is It What You Say or What You Are? Addressing Endogeneity in Crowdfunding Campaign Analysis Using Large Language Models</h4>
                                <p className="text-xs text-slate-400">Abbonato, D., Di Pietro, F., Guerzoni, M.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <div className="flex justify-center gap-4">
                        <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-slate-800 rounded hover:bg-slate-700 text-white transition-colors border border-slate-600">
                            Google Scholar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
