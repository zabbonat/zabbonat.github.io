import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700">
                            {/* Placeholder for profile image */}
                            <div className="w-full h-full flex items-center justify-center text-slate-500">
                                Profile Image Placeholder
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-2xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-accent">Passionate Researcher</h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            I am a dedicated Postdoc Researcher with a focus on [Your Research Area].
                            My journey in academia has been driven by a curiosity to understand [Specific Topic].
                            I have worked on various projects involving [Key Technologies/Methods].
                        </p>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            My goal is to contribute meaningful insights to the scientific community and
                            collaborate with like-minded professionals to solve complex problems.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                <h4 className="text-accent font-bold text-xl mb-1">5+</h4>
                                <p className="text-sm text-slate-400">Years Experience</p>
                            </div>
                            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                <h4 className="text-accent font-bold text-xl mb-1">10+</h4>
                                <p className="text-sm text-slate-400">Publications</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
