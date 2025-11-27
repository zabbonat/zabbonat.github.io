import { motion } from 'framer-motion';
import { GraduationCap, Github, Calendar, Clock, MapPin } from 'lucide-react';

const Teaching = () => {
    const courses = [
        {
            date: "03/2025 - 09/2025",
            title: "Economics for Data Science",
            context: "Master's in Data Science (Tutor Type A)",
            location: "University of Milan-Bicocca, Italy",
            hours: "10h"
        },
        {
            date: "02/2025",
            title: "Transformer Neural Network",
            context: "Master's in Data Science for Economics and Business",
            location: "Université de Strasbourg, France",
            hours: "10h"
        },
        {
            date: "02/2025",
            title: "Unsupervised Learning",
            context: "Master's in Data Science for Economics and Business",
            location: "Université de Strasbourg, France",
            hours: "10h"
        },
        {
            date: "09/2024 - 01/2025",
            title: "Advanced Programming and Data Visualization",
            context: "Master's in Data Science for Economics and Business",
            location: "Université de Strasbourg, France",
            hours: "12h"
        },
        {
            date: "11/07/2024",
            title: "Transformers and data-driven innovation",
            context: "Master's in Data Science and Statistics",
            location: "University of Milan-Bicocca, Italy",
            hours: "2h"
        },
        {
            date: "2022/2023",
            title: "Unsupervised Learning",
            context: "Master's in Data Science for Economics and Business",
            location: "Université de Strasbourg, France",
            hours: "24h"
        },
        {
            date: "10/2022",
            title: "Transformer Neural Networks",
            context: "Master's in Data Science for Economics and Business",
            location: "Université de Strasbourg, France",
            hours: "12h"
        },
        {
            date: "04/2022",
            title: "Machine Learning Laboratory",
            context: "Master's in Data Science for Economics and Business",
            location: "Université de Strasbourg, France",
            hours: "12h"
        }
    ];

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
                        className="bg-slate-800/90 p-6 rounded-lg border-4 border-green-900/50 shadow-xl max-h-[600px] overflow-y-auto custom-scrollbar"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4 sticky top-0 bg-slate-800/95 z-10">
                            <GraduationCap className="text-green-400" size={24} />
                            <h3 className="font-pixel text-lg text-white">Teaching History</h3>
                        </div>

                        <div className="space-y-4">
                            {courses.map((course, index) => (
                                <div key={index} className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-green-500 transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white text-sm group-hover:text-green-400 transition-colors">{course.title}</h4>
                                        <span className="text-[10px] font-pixel text-green-500 bg-green-900/20 px-2 py-1 rounded whitespace-nowrap ml-2">
                                            {course.date}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-300 mb-2">{course.context}</p>
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="bg-slate-800/90 p-6 rounded-lg border-4 border-emerald-900/50 shadow-xl">
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                                <Github className="text-emerald-400" size={24} />
                                <h3 className="font-pixel text-lg text-white">Course Materials</h3>
                            </div>

                            <div className="bg-slate-900/50 p-6 rounded border border-slate-700 text-slate-300 leading-relaxed text-center">
                                <p className="mb-6">
                                    Access the complete collection of my teaching materials, code repositories, lecture notes, and datasets.
                                </p>
                                <a
                                    href="https://github.com/DSS-ML"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-pixel text-sm px-6 py-3 rounded border-2 border-emerald-500/50 hover:border-emerald-400 transition-all group"
                                >
                                    <Github size={18} className="group-hover:scale-110 transition-transform" />
                                    <span>Visit DSS-ML Repository</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Teaching;
