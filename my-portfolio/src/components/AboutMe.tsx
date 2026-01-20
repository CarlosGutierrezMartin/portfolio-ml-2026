"use client";
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Download, Mail, Linkedin, Github, Code2, BrainCircuit, BarChart3, Terminal, Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AboutMe = () => {
    const { t } = useLanguage();

    return (
        <section id="sobre-mi" className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-[#0B0F1A] relative overflow-hidden flex items-center">
            {/* Decorative blobs */}
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full">
                <SectionHeading
                    number="02"
                    titleKey="about.title"
                    subtitleKey="about.subtitle"
                />

                <div className="grid grid-cols-1 gap-12 mt-16 items-start">

                    {/* BIO TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-6 text-slate-400 text-lg leading-relaxed"
                    >
                        <p>
                            {t('about.bio1')} <strong className="text-white">{t('about.bio1.name')}</strong>{t('about.bio1.rest')}
                        </p>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            {t('about.bio2')} <span className="text-blue-400 font-semibold underline decoration-blue-500/30 underline-offset-4">{t('about.bio2.cv')}</span> {t('about.bio2.and')} <span className="text-blue-400 font-semibold underline decoration-blue-500/30 underline-offset-4">{t('about.bio2.dl')}</span>{t('about.bio2.rest')}
                        </p>
                        <p>
                            {t('about.bio3')}
                        </p>

                        {/* PROMINENT CONTACT SECTION - Centered */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center gap-6 py-12 mt-8 bg-gradient-to-b from-slate-900/50 to-transparent rounded-2xl border border-slate-800/50"
                        >
                            <h3 className="text-lg font-medium text-slate-300 tracking-wide uppercase font-mono">Get in Touch</h3>

                            {/* Social Links - Larger */}
                            <div className="flex gap-4">
                                <a href="https://github.com/CarlosGutierrezMartin" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-700 rounded-xl text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all group" aria-label="GitHub">
                                    <Github size={24} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.linkedin.com/in/carlos-guti%C3%A9rrez-mart%C3%ADn-2895481b7" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-700 rounded-xl text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all group" aria-label="LinkedIn">
                                    <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="mailto:carlosgutmartin@gmail.com" className="p-4 bg-slate-900 border border-slate-700 rounded-xl text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all group" aria-label="Email">
                                    <Mail size={24} className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>

                            {/* CV Button - Animated Outline Style */}
                            <a
                                href="/CV_Carlos_Gutierrez_Martin_2026.pdf"
                                download
                                className="relative group/cv overflow-hidden"
                            >
                                <div className="relative flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-blue-500 text-blue-400 font-mono text-base rounded-sm transition-all duration-300 group-hover/cv:bg-blue-500 group-hover/cv:text-white group-hover/cv:shadow-[0_17px_18px_-14px_rgba(59,130,246,0.3)]">
                                    {/* Icon slides in on hover */}
                                    <Download
                                        size={18}
                                        className="absolute left-4 opacity-0 -translate-y-2 group-hover/cv:opacity-100 group-hover/cv:translate-y-0 transition-all duration-300 delay-100"
                                    />
                                    {/* Text shifts right on hover */}
                                    <span className="relative transition-all duration-300 group-hover/cv:translate-x-4">
                                        {t('about.downloadCv')}
                                    </span>
                                </div>
                                {/* Animated particles on hover */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover/cv:opacity-60"
                                            style={{
                                                left: `${10 + i * 12}%`,
                                                top: i % 2 === 0 ? '-10%' : '110%',
                                            }}
                                            animate={{
                                                y: i % 2 === 0 ? [0, 30] : [0, -30],
                                                opacity: [0, 0.6, 0],
                                            }}
                                            transition={{
                                                duration: 0.7,
                                                repeat: Infinity,
                                                delay: i * 0.1,
                                                ease: "linear",
                                            }}
                                        />
                                    ))}
                                </div>
                            </a>
                        </motion.div>

                        {/* Stack & Languages Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">

                            {/* Tech Stack */}
                            <div className="space-y-6">
                                <h3 className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed flex items-center gap-2">
                                    <Code2 size={20} className="text-blue-500" />
                                    <span className="text-blue-400 font-semibold underline decoration-blue-500/30 underline-offset-4">{t('about.techStack')}</span>
                                </h3>

                                <div className="space-y-6">
                                    {/* Data & ML - Enhanced */}
                                    <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-2xl border border-blue-500/20 relative overflow-visible">
                                        {/* Glow effect */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

                                        <div className="text-lg font-semibold text-blue-400 mb-4 uppercase tracking-wider flex items-center gap-3 relative z-10">
                                            <BrainCircuit size={20} className="text-blue-400" />
                                            <span className="underline decoration-blue-500/30 underline-offset-4">{t('about.dataML')}</span>
                                            <span className="text-xs font-normal text-blue-500/60 ml-2">★ Primary Focus</span>
                                        </div>
                                        <div className="flex flex-wrap gap-3 relative z-10">
                                            {/* Python with floating bubbles on hover */}
                                            <div className="relative group/python">
                                                <span className="px-4 py-2 bg-blue-500/20 border-2 border-blue-400/40 rounded-lg text-base text-blue-100 font-semibold cursor-pointer transition-all group-hover/python:bg-blue-500/40 group-hover/python:border-blue-400 group-hover/python:shadow-lg group-hover/python:shadow-blue-500/30 group-hover/python:scale-105">
                                                    Python
                                                </span>
                                                {/* Floating bubbles ABOVE on hover */}
                                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 flex flex-wrap justify-center gap-2 w-[320px] opacity-0 group-hover/python:opacity-100 translate-y-2 group-hover/python:translate-y-0 transition-all duration-300 pointer-events-none z-50">
                                                    {['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'XGBoost', 'HuggingFace'].map((lib, i) => (
                                                        <motion.span
                                                            key={lib}
                                                            className="px-3 py-1.5 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-md border border-slate-600/50 rounded-full text-xs text-slate-200 font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.4)]"
                                                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                            transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                                                        >
                                                            {lib}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                            {['R', 'SQL', 'LLMs', 'OpenCV'].map((tech) => (
                                                <span key={tech} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-base text-blue-200/90 hover:bg-blue-500/20 hover:border-blue-400/40 transition-colors cursor-default">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>


                                    {/* Business Intelligence */}
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                                            <BarChart3 size={14} /> {t('about.bi')}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {['PowerBI', 'Tableau', 'Looker Studio', 'Excel', 'Access'].map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-purple-500/5 border border-purple-500/10 rounded-md text-sm text-purple-200/80 hover:bg-purple-500/10 hover:border-purple-500/30 transition-colors cursor-default">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Development */}
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                                            <Terminal size={14} /> {t('about.development')}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {['Java', 'Git', 'React', 'Next.js', 'TypeScript'].map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-green-500/5 border border-green-500/10 rounded-md text-sm text-green-200/80 hover:bg-green-500/10 hover:border-green-500/30 transition-colors cursor-default">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="space-y-6">
                                <h3 className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed flex items-center gap-2">
                                    <Languages size={20} className="text-green-500" />
                                    <span className="text-green-400 font-semibold underline decoration-green-500/30 underline-offset-4">{t('about.languages')}</span>
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center justify-between group hover:border-green-500/30 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">🇪🇸</span>
                                            <div>
                                                <div className="text-slate-200 font-medium">{t('about.spanish')}</div>
                                                <div className="text-xs text-slate-500">{t('about.native')}</div>
                                            </div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                    </div>

                                    <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">🇺🇸</span>
                                            <div>
                                                <div className="text-slate-200 font-medium">{t('about.english')}</div>
                                                <div className="text-xs text-slate-500">{t('about.advanced')}</div>
                                            </div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                    </div>

                                    <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center justify-between group hover:border-orange-500/30 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">🇫🇷</span>
                                            <div>
                                                <div className="text-slate-200 font-medium">{t('about.french')}</div>
                                                <div className="text-xs text-slate-500">{t('about.basicIntermediate')}</div>
                                            </div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-orange-400/80" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
