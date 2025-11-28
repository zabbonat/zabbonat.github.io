import { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Download, ExternalLink, MapPin, Clock, Lightbulb, Menu, X } from 'lucide-react';

const ClassicMode = ({ onSwitchToRPG }) => {
    const [activeTab, setActiveTab] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const theme = {
        bg: isDarkMode ? 'bg-slate-950' : 'bg-white',
        text: isDarkMode ? 'text-slate-100' : 'text-slate-900',
        textSecondary: isDarkMode ? 'text-slate-400' : 'text-slate-600',
        textMuted: isDarkMode ? 'text-slate-500' : 'text-slate-500',
        border: isDarkMode ? 'border-slate-800' : 'border-slate-200',
        cardBg: isDarkMode ? 'bg-slate-900' : 'bg-white',
        cardBgAlt: isDarkMode ? 'bg-slate-900' : 'bg-slate-50',
        accent: 'text-blue-600',
        accentHover: 'hover:text-blue-500',
        buttonBg: isDarkMode ? 'bg-blue-600' : 'bg-slate-800',
        buttonHover: isDarkMode ? 'hover:bg-blue-500' : 'hover:bg-slate-700',
        headerBg: isDarkMode ? 'bg-slate-950/90' : 'bg-white/90',
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className={`w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} shadow-lg`}>
                                <img src="/citations.jpg" alt="Diletta Abbonato" className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h2 className={`text-3xl font-bold ${theme.text}`}>Diletta Abbonato</h2>
                                    <p className={`text-lg ${theme.textSecondary}`}>Postdoctoral Researcher</p>
                                    <p className={theme.textMuted}>University of Turin</p>
                                </div>
                                <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                                    I am a Postdoctoral Researcher at the Department of Culture, Politics and Society, University of Turin, working under the supervision of Prof. Aldo Geuna.
                                </p>
                                <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                                    My research focuses on science-technology relationships in the development of AI in the healthcare sector.
                                </p>
                                <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                                    My expertise spans Innovation Economics, Industrial Dynamics, and Econometrics. I apply Machine Learning and NLP techniques to investigate diverse domains, including Scientometrics, Labor Markets, and Social Phenomena.
                                </p>

                                <div className="flex gap-4 pt-2">
                                    <a href="mailto:diletta.abbonato@unito.it" className={`${theme.textMuted} ${theme.accentHover} transition-colors`}><Mail size={20} /></a>
                                    <a href="https://github.com/zabbonat" target="_blank" rel="noopener noreferrer" className={`${theme.textMuted} ${theme.accentHover} transition-colors`}><Github size={20} /></a>
                                    <a href="https://www.linkedin.com/in/dilettaabbonato/" target="_blank" rel="noopener noreferrer" className={`${theme.textMuted} ${theme.accentHover} transition-colors`}><Linkedin size={20} /></a>
                                    <a href="https://scholar.google.com/citations?user=no8pRaUAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className={`${theme.textMuted} ${theme.accentHover} transition-colors`}><FileText size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'research':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <h3 className={`text-2xl font-bold ${theme.text} border-b ${theme.border} pb-2`}>Research Tools</h3>
                        <div className="grid gap-6">
                            <div className={`p-6 rounded-lg border ${theme.border} hover:border-blue-300 hover:shadow-md transition-all ${theme.cardBg}`}>
                                <h4 className={`text-xl font-semibold mb-2 ${theme.text}`}>AI Tools Network</h4>
                                <p className={`${theme.textSecondary} mb-4 text-lg`}>
                                    Interactive network visualization of AI tools and their relationships.
                                </p>
                                <div className="flex gap-4">
                                    <a href="https://zabbonat.github.io/AI-Tools_Network/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-lg ${theme.accent} hover:underline`}>
                                        Launch Visualization <ExternalLink size={16} />
                                    </a>
                                    <a href="https://github.com/zabbonat/AI-Tools_Network" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-lg ${theme.textSecondary} hover:${theme.text}`}>
                                        Source Code <Github size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className={`p-6 rounded-lg border ${theme.border} hover:border-blue-300 hover:shadow-md transition-all ${theme.cardBg}`}>
                                <h4 className={`text-xl font-semibold mb-2 ${theme.text}`}>DDI Model</h4>
                                <p className={`${theme.textSecondary} mb-4 text-lg`}>
                                    A fine-tuned transformer model designed to detect Data-Driven Innovation (DDI) concepts in text.
                                </p>
                                <a href="https://huggingface.co/Zabbonat/DDI" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-lg ${theme.accent} hover:underline`}>
                                    View on Hugging Face <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                );

            case 'publications':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <h3 className={`text-2xl font-bold ${theme.text} border-b ${theme.border} pb-2`}>Publications</h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} mb-4`}>Published Papers</h4>
                                <ul className={`space-y-4 list-disc pl-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} text-lg`}>
                                    <li>
                                        <strong>Interdisciplinary research in artificial intelligence: Lessons from COVID-19</strong>
                                        <br />
                                        <span className={`text-base ${theme.textMuted}`}>Abbonato, D., Bianchini, S., Gargiulo, F., & Venturini, T. (2024) - Quantitative Science Studies</span>
                                        <br />
                                        <a href="https://doi.org/10.1162/qss_a_00288" target="_blank" rel="noopener noreferrer" className={`text-base ${theme.accent} hover:underline`}>Read Paper</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} mb-4`}>Preprints</h4>
                                <ul className={`space-y-4 list-disc pl-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} text-lg`}>
                                    <li>
                                        <strong>Mapping AI’s Labor Impact: A Task Exposure Framework for Occupational Analysis</strong>
                                        <br />
                                        <span className={`text-base ${theme.textMuted}`}>Jurowetzki, R., Squicciarini, M., Abbonato, D. (2025)</span>
                                        <br />
                                        <a href="https://vbn.aau.dk/ws/portalfiles/portal/793096244/361nu7zlk9zt692qz3e8x1rx9hj8au-5.pdf" target="_blank" rel="noopener noreferrer" className={`text-base ${theme.accent} hover:underline`}>PDF</a>
                                    </li>
                                    <li>
                                        <strong>Public sentiments on the fourth industrial revolution: An unsolicited public opinion poll from Twitter</strong>
                                        <br />
                                        <span className={`text-base ${theme.textMuted}`}>Abbonato, D. (2024)</span>
                                        <br />
                                        <a href="https://arxiv.org/abs/2411.14230" target="_blank" rel="noopener noreferrer" className={`text-base ${theme.accent} hover:underline`}>arXiv</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} mb-4`}>Work in Progress</h4>
                                <ul className={`space-y-4 list-disc pl-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} text-lg`}>
                                    <li>
                                        <strong>Partnerships is all you need: The development of transformer technology and its impact on science</strong>
                                        <br />
                                        <span className={`text-base ${theme.textMuted}`}>Abbonato, D., Bianchini, S., Llerena, P. (2024)</span>
                                    </li>
                                    <li>
                                        <strong>Disentangling the Impact of Methodological and Topic Interdisciplinarity on Scientific Performance in Economics</strong>
                                        <br />
                                        <span className={`text-base ${theme.textMuted}`}>Abbonato, D., Guerzoni, M.</span>
                                    </li>
                                    <li>
                                        <strong>Is It What You Say or What You Are? Addressing Endogeneity in Crowdfunding Campaign Analysis Using Large Language Models</strong>
                                        <br />
                                        <span className={`text-base ${theme.textMuted}`}>Abbonato, D., Di Pietro, F., Guerzoni, M.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a href="https://scholar.google.com/citations?user=no8pRaUAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-2 ${theme.buttonBg} rounded ${theme.buttonHover} text-white transition-colors text-lg`}>
                                Google Scholar <ExternalLink size={16} />
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
                        <h3 className={`text-2xl font-bold ${theme.text} border-b ${theme.border} pb-2`}>Teaching</h3>

                        <div className="space-y-6">
                            <div className={`${theme.cardBgAlt} p-6 rounded-lg border ${theme.border}`}>
                                <h4 className={`font-semibold ${theme.text} mb-4 text-xl`}>Teaching History</h4>
                                <div className="space-y-4">
                                    {courses.map((course, index) => (
                                        <div key={index} className={`${theme.cardBg} p-4 rounded border ${theme.border} hover:border-blue-300 transition-colors`}>
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} text-lg`}>{course.title}</h4>
                                                <span className={`text-sm font-medium ${theme.accent} ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} px-2 py-1 rounded whitespace-nowrap ml-2`}>
                                                    {course.date}
                                                </span>
                                            </div>
                                            <p className={`text-base ${theme.textSecondary} mb-2`}>{course.context}</p>
                                            <div className={`flex flex-wrap gap-3 text-sm ${theme.textMuted}`}>
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={14} />
                                                    <span>{course.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    <span>{course.hours}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`flex items-center justify-between p-6 ${isDarkMode ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-100'} rounded-lg border`}>
                                <div>
                                    <h4 className={`font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-900'} text-lg`}>Course Materials</h4>
                                    <p className={`text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Access lecture notes and datasets.</p>
                                </div>
                                <a href="https://github.com/DSS-ML" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded hover:bg-blue-700 transition-colors">
                                    Visit Repository
                                </a>
                            </div>
                        </div>
                    </div>
                );

            case 'cv':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <h3 className={`text-2xl font-bold ${theme.text} border-b ${theme.border} pb-2`}>Curriculum Vitae</h3>

                        <div className="grid gap-6">
                            {/* Education */}
                            <div className={`${theme.cardBg} p-6 rounded-lg border ${theme.border} shadow-sm`}>
                                <h4 className={`font-bold ${theme.text} mb-4 flex items-center gap-2 text-xl`}>
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Education
                                </h4>
                                <ul className="space-y-4">
                                    <li className={`pl-4 border-l-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                        <div className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} text-lg`}>Ph.D. in Economics</div>
                                        <div className={`text-base ${theme.textSecondary}`}>University of Strasbourg (2020-2024)</div>
                                    </li>
                                    <li className={`pl-4 border-l-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                        <div className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} text-lg`}>M.Sc. in Data Science</div>
                                        <div className={`text-base ${theme.textSecondary}`}>Sapienza University of Rome (2018-2020)</div>
                                    </li>
                                    <li className={`pl-4 border-l-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                        <div className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} text-lg`}>B.Sc. in Statistics</div>
                                        <div className={`text-base ${theme.textSecondary}`}>Sapienza University of Rome (2015-2018)</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Experience */}
                            <div className={`${theme.cardBg} p-6 rounded-lg border ${theme.border} shadow-sm`}>
                                <h4 className={`font-bold ${theme.text} mb-4 flex items-center gap-2 text-xl`}>
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span> Experience
                                </h4>
                                <ul className="space-y-4">
                                    <li className={`pl-4 border-l-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                        <div className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} text-lg`}>Postdoctoral Researcher</div>
                                        <div className={`text-base ${theme.textSecondary}`}>University of Turin (Current)</div>
                                    </li>
                                    <li className={`pl-4 border-l-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                        <div className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} text-lg`}>Postdoctoral Researcher</div>
                                        <div className={`text-base ${theme.textSecondary}`}>University of Milan-Bicocca (2024-2025)</div>
                                    </li>
                                    <li className={`pl-4 border-l-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                        <div className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} text-lg`}>Visiting Researcher</div>
                                        <div className={`text-base ${theme.textSecondary}`}>University of Bremen (2023)</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Skills */}
                            <div className={`${theme.cardBg} p-6 rounded-lg border ${theme.border} shadow-sm`}>
                                <h4 className={`font-bold ${theme.text} mb-4 flex items-center gap-2 text-xl`}>
                                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span> Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['R', 'Python', 'SAS', 'Java', 'C++', 'MATLAB', 'SQL', 'Gephi', 'Docker', 'Git', 'LaTeX', 'Torch', 'Tensorflow'].map((skill) => (
                                        <span key={skill} className={`px-3 py-1 ${isDarkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'} rounded-full text-sm font-medium border`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-8">
                            <a href="/cv_ABBONATO_Diletta_update1025.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-lg">
                                <Download size={20} /> Download Full CV
                            </a>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-blue-100 transition-colors duration-300`}>
            {/* Header */}
            <header className={`fixed top-0 left-0 w-full ${theme.headerBg} backdrop-blur-md border-b ${theme.border} z-50 transition-colors duration-300`}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <button
                            onClick={toggleDarkMode}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'}`}
                        >
                            <Lightbulb size={14} className={isDarkMode ? 'fill-yellow-400' : ''} />
                            <span className="hidden sm:inline">{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                        </button>
                        <h1 className="text-xl font-bold tracking-tight cursor-pointer hidden sm:block" onClick={() => setActiveTab('home')}>
                            Diletta Abbonato
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8 text-xl font-medium text-slate-600">
                            {[
                                { id: 'home', label: 'Home' },
                                { id: 'research', label: 'Research Tools' },
                                { id: 'publications', label: 'Publications' },
                                { id: 'teaching', label: 'Teaching' },
                                { id: 'cv', label: 'CV' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`hover:text-blue-600 transition-colors relative py-2 ${activeTab === item.id ? 'text-blue-600' : isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
                                >
                                    {item.label}
                                    {activeTab === item.id && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </nav>

                        <button
                            onClick={onSwitchToRPG}
                            className={`px-4 py-2 ${isDarkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-900 text-white hover:bg-slate-800'} text-xs font-bold rounded-full transition-colors`}
                        >
                            RPG Mode
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Overlay */}
                {isMenuOpen && (
                    <div className={`md:hidden absolute top-16 left-0 w-full ${theme.bg} border-b ${theme.border} shadow-lg animate-in slide-in-from-top-5`}>
                        <nav className="flex flex-col p-4 space-y-2">
                            {[
                                { id: 'home', label: 'Home' },
                                { id: 'research', label: 'Research Tools' },
                                { id: 'publications', label: 'Publications' },
                                { id: 'teaching', label: 'Teaching' },
                                { id: 'cv', label: 'CV' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === item.id
                                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                        : `${theme.text} hover:bg-slate-100 dark:hover:bg-slate-800`
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
                {renderContent()}
            </main>

            <footer className={`py-8 text-center ${theme.textMuted} text-xs border-t ${theme.border} mt-auto transition-colors duration-300`}>
                <p>&copy; {new Date().getFullYear()} Diletta Abbonato. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ClassicMode;
