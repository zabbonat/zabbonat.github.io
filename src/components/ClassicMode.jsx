import { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Download, ExternalLink, MapPin, Clock, Lightbulb } from 'lucide-react';

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
                                    I am a Postdoctoral Researcher at the Department of Culture, Politics and Society, University of Turin.
                                </p>
                                <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                                    My research focuses on "Science technology relationships in the development of AI in the health sector", under the guidance of Prof. Aldo Geuna.
                                </p>
                                <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                                    My skills lie in Innovation, Industrial Dynamics, and Econometrics. I apply Machine Learning and NLP techniques to investigate diverse realms: Scientometrics, Labor Markets, and Social Phenomena.
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

                return null;
        }
    };

    return (
        <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-blue-100 transition-colors duration-300`}>
            {/* Header */}
            <header className={`fixed top-0 left-0 w-full ${theme.headerBg} backdrop-blur-md border-b ${theme.border} z-50 transition-colors duration-300`}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleDarkMode}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'}`}
                        >
                            <Lightbulb size={14} className={isDarkMode ? 'fill-yellow-400' : ''} />
                            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        </button>
                        <h1 className="text-xl font-bold tracking-tight cursor-pointer hidden sm:block" onClick={() => setActiveTab('home')}>
                            Diletta Abbonato
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
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
