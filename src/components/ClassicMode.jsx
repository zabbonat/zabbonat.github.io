import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Download, ExternalLink } from 'lucide-react';

const ClassicMode = ({ onSwitchToRPG }) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'research', 'publications', 'teaching'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold tracking-tight">Diletta Abbonato</h1>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        {['Home', 'Research', 'Publications', 'Teaching'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`hover:text-blue-600 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-600' : ''}`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={onSwitchToRPG}
                        className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-colors"
                    >
                        RPG Mode
                    </button>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 space-y-24">
                {/* Home / About */}
                <section id="home" className="scroll-mt-32">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-2 border-slate-100 shadow-lg">
                            <img src="/citations.jpg" alt="Diletta Abbonato" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">Diletta Abbonato</h2>
                                <p className="text-lg text-slate-600">Postdoctoral Researcher</p>
                                <p className="text-slate-500">University of Turin</p>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                I am currently a Postdoctoral Researcher at the Department of Culture, Politics and Society, University of Turin.
                                My research focuses on "Science technology relationships in the development of AI in the health sector".
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                My skills lie in Innovation, Industrial Dynamics, and Econometrics. I apply Machine Learning and NLP techniques to investigate diverse realms: Scientometrics, Labor Markets, and Social Phenomena.
                            </p>

                            <div className="flex gap-4 pt-2">
                                <a href="mailto:diletta.abbonato@unito.it" className="text-slate-500 hover:text-blue-600 transition-colors"><Mail size={20} /></a>
                                <a href="https://github.com/zabbonat" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/dilettaabbonato/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
                                <a href="https://scholar.google.com/citations?user=no8pRaUAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors"><FileText size={20} /></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research */}
                <section id="research" className="scroll-mt-32">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-2">Research Projects</h3>
                    <div className="grid gap-6">
                        <div className="p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                            <h4 className="text-lg font-semibold mb-2">DDI Model</h4>
                            <p className="text-slate-600 mb-4 text-sm">
                                A fine-tuned transformer model designed to detect Data-Driven Innovation (DDI) concepts in text.
                            </p>
                            <a href="https://huggingface.co/Zabbonat/DDI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
                                View on Hugging Face <ExternalLink size={14} />
                            </a>
                        </div>
                        <div className="p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                            <h4 className="text-lg font-semibold mb-2">AI Tools Network</h4>
                            <p className="text-slate-600 mb-4 text-sm">
                                Interactive network visualization of AI tools and their relationships.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://zabbonat.github.io/AI-Tools_Network/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
                                    Launch Visualization <ExternalLink size={14} />
                                </a>
                                <a href="https://github.com/zabbonat/AI-Tools_Network" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                                    Source Code <Github size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Publications */}
                <section id="publications" className="scroll-mt-32">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-2">Publications</h3>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-semibold text-slate-800 mb-4">Published Papers</h4>
                            <ul className="space-y-4 list-disc pl-5 text-slate-700">
                                <li>
                                    <strong>Abbonato, D.</strong>, & Geuna, A. (2024). <em>Interdisciplinary research: a systematic review of the literature</em>.
                                    <br />
                                    <span className="text-sm text-slate-500">Scientometrics</span>
                                    <br />
                                    <a href="https://doi.org/10.1007/s11192-024-05188-7" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Read Paper</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-slate-800 mb-4">Preprints</h4>
                            <ul className="space-y-4 list-disc pl-5 text-slate-700">
                                <li>
                                    <strong>Abbonato, D.</strong>, Guerzoni, M., & Piva, M. (2025). <em>Mapping AI’s Labor Impact: A Task Exposure Framework for Occupational Analysis</em>.
                                    <br />
                                    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5136893" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">SSRN</a>
                                </li>
                                <li>
                                    <strong>Abbonato, D.</strong>, et al. <em>Public sentiments and risks of AI: A cross-country analysis</em>.
                                    <br />
                                    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5136906" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">SSRN</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-slate-800 mb-4">Work in Progress</h4>
                            <ul className="space-y-4 list-disc pl-5 text-slate-700">
                                <li><em>Partnerships is all you need: The development of transformer technology and its impact on science</em></li>
                                <li><em>Disentangling the AI revolution: a patent text analysis</em></li>
                                <li><em>Is It What You Say Or How You Say It? The Impact of Textual Complexity on Patent Quality</em></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Teaching */}
                <section id="teaching" className="scroll-mt-32">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-2">Teaching</h3>

                    <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-900 mb-4">Current & Recent Courses</h4>
                            <ul className="space-y-3 text-slate-700 text-sm">
                                <li className="flex justify-between">
                                    <span>Economics for Data Science</span>
                                    <span className="text-slate-500">2025</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Transformer Neural Network</span>
                                    <span className="text-slate-500">2025</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Unsupervised Learning</span>
                                    <span className="text-slate-500">2025</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Advanced Programming and Data Visualization</span>
                                    <span className="text-slate-500">2024-2025</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-between p-6 bg-blue-50 rounded-lg border border-blue-100">
                            <div>
                                <h4 className="font-semibold text-blue-900">Course Materials</h4>
                                <p className="text-sm text-blue-700">Access lecture notes and datasets.</p>
                            </div>
                            <a href="https://github.com/DSS-ML" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors">
                                Visit Repository
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="pt-12 border-t border-slate-200 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Diletta Abbonato. All rights reserved.</p>
                    <a href="/cv_ABBONATO_Diletta_update1025.pdf" target="_blank" className="inline-flex items-center gap-2 mt-4 text-slate-900 font-medium hover:underline">
                        <Download size={14} /> Download CV
                    </a>
                </footer>
            </main>
        </div>
    );
};

export default ClassicMode;
