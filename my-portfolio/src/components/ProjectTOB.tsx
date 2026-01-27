"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

const screenshots = ['/tob-1.png', '/tob-2.png', '/tob-3.png', '/tob-4.png', '/tob-5.png'];

// Duplicate for seamless loop
const duplicatedScreenshots = [...screenshots, ...screenshots];

function PhoneFrame({ src, index }: { src: string; index: number }) {
    return (
        <div className="relative flex-shrink-0 w-48 md:w-56 lg:w-64 aspect-[9/19] rounded-[2rem] bg-gradient-to-br from-amber-100 to-amber-50 shadow-xl overflow-visible group">
            <div className="absolute inset-2 top-2 rounded-[1.5rem] overflow-hidden bg-[#f5f2ed] border border-amber-200/50">
                <Image
                    src={src}
                    alt={`TOB screenshot ${(index % 5) + 1}`}
                    fill
                    className="object-cover"
                />
                {/* Gloss header */}
                <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
            </div>

            {/* Phone Frame details */}
            <div className="absolute top-0 inset-x-0 h-6 mx-auto w-1/3 bg-black rounded-b-xl z-20" />
            <div className="absolute -inset-[1px] rounded-[2.1rem] border-2 border-amber-200/30 pointer-events-none" />
        </div>
    );
}

export const ProjectTOB = () => {
    const { t } = useLanguage();

    return (
        <section id="tob" className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-[#0B0F1A] relative overflow-hidden">
            {/* Background Decor - warm amber tones to match TOB branding */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 flex-wrap">
                        <SectionHeading
                            number="04"
                            titleKey="tob.title"
                            subtitleKey="tob.subtitle"
                        />
                        {/* In Progress Badge */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-400 font-mono text-sm uppercase tracking-wider"
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            {t('tob.inProgress')}
                        </motion.span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-4 mt-8"
                    >
                        {['React', 'TypeScript', 'Supabase', 'Vercel', 'PWA'].map((tech) => (
                            <span key={tech} className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 font-mono text-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    {/* Try Prototype Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8"
                    >
                        <a
                            href="https://tob-mu.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold text-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {t('tob.tryPrototype')}
                        </a>
                    </motion.div>
                </div>

                {/* Auto-scrolling Carousel */}
                <div className="relative overflow-hidden py-8">
                    {/* Gradient Fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0F1A] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0F1A] to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-8"
                        animate={{ x: [0, -1500] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedScreenshots.map((src, i) => (
                            <PhoneFrame key={i} src={src} index={i} />
                        ))}
                    </motion.div>
                </div>

                {/* Features / Stats */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-amber-500/30 transition-colors">
                        <h3 className="text-xl md:text-2xl text-slate-300 font-light mb-4 leading-relaxed">
                            <span className="text-amber-400 font-semibold underline decoration-amber-500/30 underline-offset-4">{t('tob.lateralThinking')}</span>
                        </h3>
                        <p className="text-slate-500 font-light">{t('tob.lateralThinkingDesc')}</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-amber-500/30 transition-colors">
                        <h3 className="text-xl md:text-2xl text-slate-300 font-light mb-4 leading-relaxed">
                            <span className="text-amber-400 font-semibold underline decoration-amber-500/30 underline-offset-4">{t('tob.fermiEstimation')}</span>
                        </h3>
                        <p className="text-slate-500 font-light">{t('tob.fermiEstimationDesc')}</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-amber-500/30 transition-colors">
                        <h3 className="text-xl md:text-2xl text-slate-300 font-light mb-4 leading-relaxed">
                            <span className="text-amber-400 font-semibold underline decoration-amber-500/30 underline-offset-4">{t('tob.gamification')}</span>
                        </h3>
                        <p className="text-slate-500 font-light">{t('tob.gamificationDesc')}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};
