import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            I am always open to discussing new research opportunities, collaborations, or just sharing ideas about Artificial Intelligence & Friends. Feel free to reach out through any of the following channels.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:diletta.abbonato@unito.it" className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg">diletta.abbonato@unito.it</span>
                            </a>

                            <a href="https://www.linkedin.com/in/dilettaabbonato/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                                    <Linkedin size={24} />
                                </div>
                                <span className="text-lg">LinkedIn Profile</span>
                            </a>

                            <a href="https://github.com/zabbonat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                                    <Github size={24} />
                                </div>
                                <span className="text-lg">GitHub Profile</span>
                            </a>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="p-3 bg-slate-800 rounded-lg">
                                    <MapPin size={24} />
                                </div>
                                <span className="text-lg">Turin, Italy</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-500 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-500 transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
