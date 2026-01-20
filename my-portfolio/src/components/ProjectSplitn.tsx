"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

const screenshots = ['/splitn-1.png', '/splitn-2.png', '/splitn-3.png', '/splitn-4.png'];

// Duplicate for seamless loop
const duplicatedScreenshots = [...screenshots, ...screenshots];

function PhoneFrame({ src, index }: { src: string; index: number }) {
    return (
        <div className="relative flex-shrink-0 w-48 md:w-56 lg:w-64 aspect-[9/19] rounded-[2rem] bg-slate-800 shadow-xl overflow-visible group">
            <div className="absolute inset-2 top-2 rounded-[1.5rem] overflow-hidden bg-black border border-slate-700/50">
                <Image
                    src={src}
                    alt={`Splitn screenshot ${(index % 4) + 1}`}
                    fill
                    className="object-cover"
                />
                {/* Gloss header */}
                <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
            </div>

            {/* Phone Frame details */}
            <div className="absolute top-0 inset-x-0 h-6 mx-auto w-1/3 bg-black rounded-b-xl z-20" />
            <div className="absolute -inset-[1px] rounded-[2.1rem] border-2 border-white/10 pointer-events-none" />
        </div>
    );
}

export const ProjectSplitn = () => {
    const { t } = useLanguage();

    return (
        <section id="proyectos" className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-[#0B0F1A] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20">
                    <SectionHeading
                        number="03"
                        titleKey="splitn.title"
                        subtitleKey="splitn.subtitle"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-4 mt-8"
                    >
                        {['React', 'TypeScript', 'Tailwind', 'Vite', 'Firebase'].map((tech) => (
                            <span key={tech} className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 font-mono text-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Auto-scrolling Carousel */}
                <div className="relative overflow-hidden py-8">
                    {/* Gradient Fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0F1A] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0F1A] to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-8"
                        animate={{ x: [0, -1200] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedScreenshots.map((src, i) => (
                            <PhoneFrame key={i} src={src} index={i} />
                        ))}
                    </motion.div>
                </div>

                {/* Features / Stats - Updated text style */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h3 className="text-xl md:text-2xl text-slate-300 font-light mb-4 leading-relaxed">
                            <span className="text-blue-400 font-semibold underline decoration-blue-500/30 underline-offset-4">{t('splitn.realtimeSync')}</span>
                        </h3>
                        <p className="text-slate-500 font-light">{t('splitn.realtimeSyncDesc')}</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h3 className="text-xl md:text-2xl text-slate-300 font-light mb-4 leading-relaxed">
                            <span className="text-blue-400 font-semibold underline decoration-blue-500/30 underline-offset-4">{t('splitn.ocrIntegrated')}</span>
                        </h3>
                        <p className="text-slate-500 font-light">{t('splitn.ocrIntegratedDesc')}</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h3 className="text-xl md:text-2xl text-slate-300 font-light mb-4 leading-relaxed">
                            <span className="text-blue-400 font-semibold underline decoration-blue-500/30 underline-offset-4">{t('splitn.premiumUx')}</span>
                        </h3>
                        <p className="text-slate-500 font-light">{t('splitn.premiumUxDesc')}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};
