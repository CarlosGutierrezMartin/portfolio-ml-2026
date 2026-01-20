"use client";
import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
    const { t } = useLanguage();

    const { rive, RiveComponent } = useRive({
        src: '/4084-8458-illustration-follow-mouse.riv',
        stateMachines: "State Machine 1",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
    });

    return (
        <section id="inicio" className="h-screen flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#0B0F1A]">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="z-10 relative"
                >
                    {/* Decorative element */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        className="h-1 bg-blue-500 mb-8"
                    />

                    <h2 className="text-blue-400 font-mono mb-6 text-md tracking-wide">
                        {t('hero.tagline')}
                    </h2>

                    {/* Main Name Title - EXTRA LARGE */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">
                        Carlos<br />
                        <span className="text-slate-400">Gutiérrez</span><br />
                        Martín<span className="text-blue-500"></span>
                    </h1>

                    <h3 className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-xl leading-relaxed">
                        {t('hero.subtitle')} <span className="text-blue-400 font-semibold underline decoration-blue-500/30 underline-offset-4">{t('hero.subtitleHighlight')}</span>.
                    </h3>

                    <p className="text-slate-500 max-w-md text-sm md:text-base border-l-2 border-slate-700 pl-4">
                        {t('hero.description')}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-10">
                        <a href="#proyectos" className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-slate-200 transition-colors">
                            {t('hero.cta.projects')}
                        </a>
                        <a href="#sobre-mi" className="px-6 py-3 border border-slate-600 text-white rounded hover:border-blue-500 hover:text-blue-400 transition-all">
                            {t('hero.cta.about')}
                        </a>
                    </div>
                </motion.div>

                {/* Rive Animation */}
                <div className="h-[500px] lg:h-[700px] w-full mix-blend-screen filter invert grayscale opacity-80 lg:opacity-100 absolute lg:relative right-0 lg:right-auto pointer-events-none lg:pointer-events-auto -z-10 lg:z-0">
                    <RiveComponent className="w-full h-full" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
