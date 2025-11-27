import { motion } from 'framer-motion';
import { FlaskConical, Network, Github, Brain } from 'lucide-react';

const Research = () => {
    return (
        <section id="research" className="min-h-screen p-8 flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-3xl md:text-5xl text-purple-500 mb-4 drop-shadow-md">Alchemist Lab</h2>
                    <p className="font-pixel text-xs md:text-sm text-slate-400">Experimental projects and potions.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="group relative bg-slate-900 rounded-xl overflow-hidden border-4 border-purple-900 hover:border-purple-500 transition-all"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />

                        {/* Project Preview (Placeholder or Iframe if needed, but static for now) */}
                        <div className="h-48 bg-slate-800 flex items-center justify-center">
                            <Network size={64} className="text-purple-500/50 group-hover:text-purple-400 transition-colors" />
                        </div>

                        <div className="relative z-20 p-6">
                            <h3 className="font-pixel text-xl text-white mb-2">AI Tools Network</h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Interactive network visualization of AI tools and their relationships.
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href="https://zabbonat.github.io/AI-Tools_Network/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-pixel text-xs rounded transition-colors"
                                >
                                    <FlaskConical size={16} />
                                    Launch Experiment
                                </a>
                                <a
                                    href="https://github.com/zabbonat/AI-Tools_Network"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-pixel text-xs rounded transition-colors"
                                >
                                    <Github size={16} />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* DDI Model Project */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group relative bg-slate-900 rounded-xl overflow-hidden border-4 border-purple-900 hover:border-purple-500 transition-all"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />

                        <div className="h-48 bg-slate-800 flex items-center justify-center">
                            <Brain size={64} className="text-purple-500/50 group-hover:text-purple-400 transition-colors" />
                        </div>

                        <div className="relative z-20 p-6">
                            <h3 className="font-pixel text-xl text-white mb-2">DDI Model</h3>
                            <p className="text-slate-300 text-sm mb-4">
                                A fine-tuned transformer model designed to detect Data-Driven Innovation (DDI) concepts in text.
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href="https://huggingface.co/Zabbonat/DDI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-pixel text-xs rounded transition-colors"
                                >
                                    <FlaskConical size={16} />
                                    View Model
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Research;
