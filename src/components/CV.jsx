import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

const CV = () => {
    return (
        <section id="cv" className="py-20 bg-secondary/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Curriculum Vitae</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-accent/10 rounded-full text-accent">
                                <FileText size={40} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Full CV</h3>
                                <p className="text-slate-400">View or download my complete resume</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="/cv_ABBONATO_Diletta_update1025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-medium"
                            >
                                <ExternalLink size={18} />
                                View
                            </a>
                            <a
                                href="/cv_ABBONATO_Diletta_update1025.pdf"
                                download
                                className="flex items-center gap-2 px-6 py-3 bg-accent text-primary hover:bg-accent/90 rounded-lg transition-colors font-bold"
                            >
                                <Download size={18} />
                                Download PDF
                            </a>
                        </div>
                    </div>

                    {/* Optional: Preview or Key Highlights */}
                    <div className="mt-12 grid md:grid-cols-3 gap-6 border-t border-slate-700 pt-8">
                        <div>
                            <h4 className="text-accent font-semibold mb-2">Education</h4>
                            <ul className="text-slate-300 text-sm space-y-2">
                                <li>• Ph.D. in [Subject]</li>
                                <li>• M.Sc. in [Subject]</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-accent font-semibold mb-2">Experience</h4>
                            <ul className="text-slate-300 text-sm space-y-2">
                                <li>• Postdoc at [Institution]</li>
                                <li>• Researcher at [Lab]</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-accent font-semibold mb-2">Skills</h4>
                            <ul className="text-slate-300 text-sm space-y-2">
                                <li>• [Skill 1]</li>
                                <li>• [Skill 2]</li>
                                <li>• [Skill 3]</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CV;
