import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const Teaching = () => {
    return (
        <section id="teaching" className="min-h-screen p-8 flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-3xl md:text-5xl text-green-400 mb-4 drop-shadow-md">The Academy</h2>
                    <p className="font-pixel text-xs md:text-sm text-slate-400">Sharing knowledge with the next generation.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-slate-800/90 p-6 rounded-lg border-4 border-green-900/50 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                            <GraduationCap className="text-green-400" size={24} />
                            <h3 className="font-pixel text-lg text-white">Current Courses</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-green-500 transition-colors">
                                <h4 className="font-bold text-white mb-2">Macroeconomics</h4>
                                <p className="text-sm text-slate-400 mb-2">University of Turin</p>
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Users size={14} />
                                    <span>Undergraduate Level</span>
                                </div>
                            </div>

                            <div className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-green-500 transition-colors">
                                <h4 className="font-bold text-white mb-2">Innovation Economics</h4>
                                <p className="text-sm text-slate-400 mb-2">University of Turin</p>
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Users size={14} />
                                    <span>Graduate Level</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-slate-800/90 p-6 rounded-lg border-4 border-emerald-900/50 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                            <BookOpen className="text-emerald-400" size={24} />
                            <h3 className="font-pixel text-lg text-white">Teaching Philosophy</h3>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded border border-slate-700 text-slate-300 leading-relaxed">
                            <p className="mb-4">
                                I believe in an interactive approach to teaching economics, combining theoretical foundations with real-world applications.
                            </p>
                            <p>
                                My goal is to empower students with the analytical tools needed to understand complex economic dynamics, particularly in the context of technological change and innovation.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Teaching;
