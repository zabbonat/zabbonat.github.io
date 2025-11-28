import { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Download, ExternalLink, MapPin, Clock } from 'lucide-react';

const ClassicMode = ({ onSwitchToRPG }) => {
    const [activeTab, setActiveTab] = useState('home');

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
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
                                    Greetings, traveler! I am currently a <strong>Postdoctoral Researcher</strong> at the Department of Culture, Politics and Society, <strong>University of Turin</strong>.
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    My current quest involves "Science technology relationships in the development of AI in the health sector", under the guidance of Prof. Aldo Geuna.
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
                    </div>
                );

            case 'research':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">Research Tools</h3>
                        <div className="grid gap-6">
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

                            <div className="p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                                <h4 className="text-lg font-semibold mb-2">DDI Model</h4>
                                <p className="text-slate-600 mb-4 text-sm">
                                    A fine-tuned transformer model designed to detect Data-Driven Innovation (DDI) concepts in text.
                                </p>
                                <a href="https://huggingface.co/Zabbonat/DDI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
                                    View on Hugging Face <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                );

            case 'publications':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">Publications</h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-semibold text-slate-800 mb-4">Published Papers</h4>
                                <ul className="space-y-4 list-disc pl-5 text-slate-700">
                                    <li>
                                        <strong>Interdisciplinary research in artificial intelligence: Lessons from COVID-19</strong>
                                        <br />
                                        <span className="text-sm text-slate-500">Abbonato, D., Bianchini, S., Gargiulo, F., & Venturini, T. (2024) - Quantitative Science Studies</span>
                                        <br />
                                        <a href="https://doi.org/10.1162/qss_a_00288" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Read Paper</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-800 mb-4">Preprints</h4>
                                <ul className="space-y-4 list-disc pl-5 text-slate-700">
                                    <li>
                                        <strong>Mapping AI’s Labor Impact: A Task Exposure Framework for Occupational Analysis</strong>
                                        <br />
                                        <span className="text-sm text-slate-500">Jurowetzki, R., Squicciarini, M., Abbonato, D. (2025)</span>
                                        <br />
                                        <a href="https://vbn.aau.dk/ws/portalfiles/portal/793096244/361nu7zlk9zt692qz3e8x1rx9hj8au-5.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">PDF</a>
                                    </li>
                                    <li>
                                        <strong>Public sentiments on the fourth industrial revolution: An unsolicited public opinion poll from Twitter</strong>
                                        <br />
                                        <span className="text-sm text-slate-500">Abbonato, D. (2024)</span>
                                        <br />
                                        <a href="https://arxiv.org/abs/2411.14230" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">arXiv</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-800 mb-4">Work in Progress</h4>
                                <ul className="space-y-4 list-disc pl-5 text-slate-700">
                                    <li>
                                        <strong>Partnerships is all you need: The development of transformer technology and its impact on science</strong>
                                        <br />
                                        <span className="text-sm text-slate-500">Abbonato, D., Bianchini, S., Llerena, P. (2024)</span>
                                    </li>
                                    <li>
                                        <strong>Disentangling the Impact of Methodological and Topic Interdisciplinarity on Scientific Performance in Economics</strong>
                                        <br />
                                        <span className="text-sm text-slate-500">Abbonato, D., Guerzoni, M.</span>
                                    </li>
                                    <li>
                                        <strong>Is It What You Say or What You Are? Addressing Endogeneity in Crowdfunding Campaign Analysis Using Large Language Models</strong>
                                        <br />
                                        <span className="text-sm text-slate-500">Abbonato, D., Di Pietro, F., Guerzoni, M.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a href="https://scholar.google.com/citations?user=no8pRaUAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 bg-slate-800 rounded hover:bg-slate-700 text-white transition-colors">
                                Google Scholar <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                );

            case 'teaching':
                const courses = [
                    { date: "03/2025 - 09/2025", title: "Economics for Data Science", context: "Master's in Data Science (Tutor Type A)", location: "University of Milan-Bicocca, Italy", hours: "10h" },
                    { date: "02/2025", title: "Transformer Neural Network", context: "Master's in Data Science for Economics and Business", location: "Université de Strasbourg, France", hours: "10h" },
                    { date: "02/2025", title: "Unsupervised Learning", context: "Master's in Data Science for Economics and Business", location: "Université de Strasbourg, France", hours: "10h" },
                    { date: "09/2024 - 01/2025", title: "Advanced Programming and Data Visualization", context: "Master's in Data Science for Economics and Business", location: "Université de Strasbourg, France", hours: "12h" },
                    { date: "11/07/2024", title: "Transformers and data-driven innovation", context: "Master's in Data Science and Statistics", location: "University of Milan-Bicocca, Italy", hours: "2h" },
                    { date: "2022/2023", title: "Unsupervised Learning", context: "Master's in Data Science for Economics and Business", location: "Université de Strasbourg, France", hours: "24h" },
                    { date: "10/2022", title: "Transformer Neural Networks", context: "Master's in Data Science for Economics and Business", location: "Université de Strasbourg, France", hours: "12h" },
                    { date: "04/2022", title: "Machine Learning Laboratory", context: "Master's in Data Science for Economics and Business", location: "Université de Strasbourg, France", hours: "12h" }
                ];

                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">Teaching</h3>

                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <h4 className="font-semibold text-slate-900 mb-4">Teaching History</h4>
                                <div className="space-y-4">
                                    {courses.map((course, index) => (
                                        <div key={index} className="bg-white p-4 rounded border border-slate-200 hover:border-blue-300 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-slate-800 text-sm">{course.title}</h4>
                                                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap ml-2">
                                                    {course.date}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-600 mb-2">{course.context}</p>
                                            <div className="flex flex-wrap gap-3 text-[10px] text-slate-500">
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={12} />
                                                    <span>{course.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    <span>{course.hours}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
                    </div>
                );

            case 'cv':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">Curriculum Vitae</h3>

                        <div className="grid gap-6">
                            {/* Education */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Education
                                </h4>
                                <ul className="space-y-4">
                                    <li className="pl-4 border-l-2 border-slate-100">
                                        <div className="font-semibold text-slate-800">Ph.D. in Economics</div>
                                        <div className="text-sm text-slate-600">University of Strasbourg (2020-2024)</div>
                                    </li>
                                    <li className="pl-4 border-l-2 border-slate-100">
                                        <div className="font-semibold text-slate-800">M.Sc. in Data Science</div>
                                        <div className="text-sm text-slate-600">Sapienza University of Rome (2018-2020)</div>
                                    </li>
                                    <li className="pl-4 border-l-2 border-slate-100">
                                        <div className="font-semibold text-slate-800">B.Sc. in Statistics</div>
                                        <div className="text-sm text-slate-600">Sapienza University of Rome (2015-2018)</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Experience */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span> Experience
                                </h4>
                                <ul className="space-y-4">
                                    <li className="pl-4 border-l-2 border-slate-100">
                                        <div className="font-semibold text-slate-800">Postdoctoral Researcher</div>
                                        <div className="text-sm text-slate-600">University of Turin (Current)</div>
                                    </li>
                                    <li className="pl-4 border-l-2 border-slate-100">
                                        <div className="font-semibold text-slate-800">Postdoctoral Researcher</div>
                                        <div className="text-sm text-slate-600">University of Milan-Bicocca (2024-2025)</div>
                                    </li>
                                    <li className="pl-4 border-l-2 border-slate-100">
                                        <div className="font-semibold text-slate-800">Visiting Researcher</div>
                                        <div className="text-sm text-slate-600">University of Bremen (2023)</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Skills */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span> Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['R', 'Python', 'SAS', 'Java', 'C++', 'MATLAB', 'SQL', 'Gephi', 'Docker', 'Git', 'LaTeX', 'Torch', 'Tensorflow'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700 border border-slate-200">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-8">
                            <a href="/cv_ABBONATO_Diletta_update1025.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                                <Download size={18} /> Download Full CV
                            </a>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => setActiveTab('home')}>
                        Diletta Abbonato
                    </h1>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        {['Home', 'Research', 'Publications', 'Teaching', 'CV'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveTab(item.toLowerCase())}
                                className={`hover:text-blue-600 transition-colors relative py-2 ${activeTab === item.toLowerCase() ? 'text-blue-600' : ''}`}
                            >
                                {item}
                                {activeTab === item.toLowerCase() && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                                )}
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

            <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
                {renderContent()}
            </main>

            <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-100 mt-auto">
                <p>&copy; {new Date().getFullYear()} Diletta Abbonato. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ClassicMode;
