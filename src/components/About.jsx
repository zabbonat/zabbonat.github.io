import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen p-8 flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-3xl md:text-5xl text-yellow-500 mb-4 drop-shadow-md">The Tavern</h2>
                    <p className="font-pixel text-xs md:text-sm text-slate-400">Rest by the fire and learn about the adventurer.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-800/80 p-8 rounded-lg border-4 border-yellow-600 shadow-2xl backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-lg overflow-hidden border-4 border-slate-600 bg-slate-900 relative">
                            <img
                                src="/citations.jpg"
                                alt="Diletta Abbonato"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 border-4 border-yellow-500/20 pointer-events-none" />
                        </div>

                        {/* RPG Stats Card */}
                        <div className="mt-6 bg-slate-900 p-4 rounded border-2 border-slate-600">
                            <h3 className="font-pixel text-yellow-500 text-sm mb-4 border-b border-slate-700 pb-2">Character Stats</h3>
                            <div className="space-y-2 font-pixel text-xs">
                                <div className="flex justify-between text-slate-300">
                                    <span>Class:</span>
                                    <span className="text-white">Postdoc Researcher</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Affiliation:</span>
                                    <span className="text-white">University of Turin</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Intelligence:</span>
                                    <span className="text-blue-400">99</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Wisdom:</span>
                                    <span className="text-purple-400">85</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-sans"
                    >
                        <div className="bg-yellow-900/20 p-6 rounded border border-yellow-700/50 mb-6">
                            <h3 className="font-pixel text-xl text-yellow-500 mb-4">Quest Log</h3>
                            <p className="text-slate-300 mb-4 leading-relaxed">
                                Greetings, traveler! I am currently a <strong>Postdoctoral Researcher</strong> at the Department of Culture, Politics and Society, <strong>University of Turin</strong>.
                            </p>
                            <p className="text-slate-300 mb-4 leading-relaxed">
                                My current quest involves "Science technology relationships in the development of AI in the health sector", under the guidance of Prof. Aldo Geuna.
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                My skills lie in <strong>Innovation and Macroeconomic Dynamics</strong>, <strong>Industrial Dynamics</strong>, and <strong>Econometrics</strong>. I specialize in analyzing the impact of AI on growth and inequalities.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-900 rounded border-2 border-slate-700 text-center group hover:border-yellow-500 transition-colors">
                                <h4 className="font-pixel text-yellow-500 text-lg mb-1">5+</h4>
                                <p className="font-pixel text-[10px] text-slate-400">Years XP</p>
                            </div>
                            <div className="p-4 bg-slate-900 rounded border-2 border-slate-700 text-center group hover:border-yellow-500 transition-colors">
                                <h4 className="font-pixel text-yellow-500 text-lg mb-1">Ph.D.</h4>
                                <p className="font-pixel text-[10px] text-slate-400">Economics</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
