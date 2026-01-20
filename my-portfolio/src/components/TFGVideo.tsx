"use client";
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

export const TFGVideo = () => {
    const { t } = useLanguage();

    return (
        <section id="video" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-[#0D111C]">
            <div className="max-w-6xl mx-auto">

                <SectionHeading
                    number="05"
                    titleKey="video.title"
                    subtitleKey="video.subtitle"
                    align="right"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12"
                >
                    {/* Mockup de la interfaz de IA - Ahora a la izquierda para variar el layout */}
                    <div className="bg-slate-900 rounded-xl p-4 border border-white/5 shadow-2xl order-2 lg:order-1">
                        <div className="aspect-video bg-black rounded flex items-center justify-center mb-4 relative overflow-hidden group">
                            <span className="text-slate-700 font-mono text-sm group-hover:opacity-0 transition-opacity">{t('video.preview')}</span>

                            {/* Scanning Effect */}
                            <motion.div
                                className="absolute top-0 bottom-0 w-[2px] bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)] z-10"
                                animate={{ left: ["0%", "100%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Fake detected boxes */}
                            <motion.div
                                className="absolute top-10 left-10 w-20 h-20 border border-green-500/50 rounded"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                        </div>

                        <div className="h-16 w-full bg-slate-800 rounded relative overflow-hidden flex items-end pb-0">
                            {/* Waveform fake */}
                            <div className="flex items-end gap-[2px] w-full h-full opacity-30">
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex-1 bg-blue-400"
                                        initial={{ height: "10%" }}
                                        animate={{ height: `${Math.random() * 80 + 10}%` }}
                                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                    />
                                ))}
                            </div>

                            {/* Marcadores de la IA */}
                            {[20, 45, 70, 85].map((pos, i) => (
                                <motion.div
                                    key={pos}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: '100%' }}
                                    transition={{ delay: i * 0.2 }}
                                    className="absolute bottom-0 w-0.5 bg-yellow-400 z-20 shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                                    style={{ left: `${pos}%` }}
                                >
                                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full" />
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">{t('video.timeline')}</p>
                            <span className="text-[10px] text-green-500 font-mono">CONFIDENCE: 98.4%</span>
                        </div>
                    </div>

                    <div className="space-y-8 order-1 lg:order-2 text-right">
                        <p className="text-slate-400 text-lg leading-relaxed">
                            {t('video.p1.part1')} <span className="text-white">{t('video.p1.highlight')}</span>{t('video.p1.part2')}
                        </p>
                        <p className="text-slate-500">
                            {t('video.p2')}
                        </p>

                        {/* Etiquetas con diseño alineado a la derecha */}
                        <div className="flex flex-wrap gap-3 justify-end">
                            {["LSTM Attention", "Shot Boundary", "Sentiment Analysis", "PyTorch"].map(tag => (
                                <span key={tag} className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-mono rounded hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
