"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

const CompareSlider = () => {
    const { t } = useLanguage();
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-700 select-none group">

            {/* Background Image (Original) */}
            <div className="absolute inset-0">
                <Image
                    src="/glaucoma_fundus.png"
                    alt="Fondo de Ojo Original"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md border border-white/10 z-10">
                    <span className="text-xs font-mono text-white">{t('glaucoma.originalInput')}</span>
                </div>
            </div>

            {/* Foreground Image (Mask) - Clipped */}
            <div
                className="absolute inset-0 bg-black/90"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src="/glaucoma_mask.png"
                    alt="Segmentación IA"
                    fill
                    className="object-cover opacity-90 mix-blend-screen"
                    priority
                />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md border border-green-500/30 z-10">
                    <span className="text-xs font-mono text-green-400 font-bold">{t('glaucoma.aiSegmentation')}</span>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-blue-500 cursor-ew-resize z-30 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border border-white/20">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" /></svg>
                </div>
            </div>

            {/* Invisible Input for interaction */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 focus:outline-none"
                aria-label="Comparar imagen original con segmentación"
            />

            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur px-4 py-1 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <span className="text-[10px] text-slate-300 font-mono tracking-widest uppercase">{t('glaucoma.dragToCompare')}</span>
            </div>
        </div>
    );
};

export const GlaucomaSection = () => {
    const { t } = useLanguage();

    return (
        <section id="glaucoma" className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    number="04"
                    titleKey="glaucoma.title"
                    subtitleKey="glaucoma.subtitle"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-slate-400 space-y-6">
                        <p className="text-lg leading-relaxed">
                            {t('glaucoma.p1')}
                        </p>
                        <p>
                            {t('glaucoma.p2')}
                        </p>

                        <div className="p-6 bg-slate-900/50 rounded-xl border border-white/5">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full" /> {t('glaucoma.techStack')}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "PyTorch", "OpenCV", "Scikit-Learn", "Docker"].map(tech => (
                                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono border border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <CompareSlider />
                </div>

                {/* Model Output Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                {t('glaucoma.modelOutput')}
                            </h3>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent" />
                    </div>

                    {/* Output Card */}
                    <div className="relative group">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-2xl border border-green-500/20 overflow-hidden">
                            {/* Top Bar */}
                            <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-green-500/10">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="text-xs font-mono text-slate-400">glaucoma_risk_analysis.py</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 text-[10px] font-mono bg-green-500/20 text-green-400 rounded border border-green-500/30">
                                        AI OUTPUT
                                    </span>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="p-6">
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5">
                                    <Image
                                        src="/glaucoma_output.png"
                                        alt="Glaucoma Risk Analysis - AI Model Output"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-contain"
                                        priority
                                    />

                                    {/* Overlay Label */}
                                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-green-500/30">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-sm font-mono text-green-400 font-semibold">LIVE INFERENCE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description Box */}
                            <div className="px-6 pb-6">
                                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {t('glaucoma.modelOutputDesc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
