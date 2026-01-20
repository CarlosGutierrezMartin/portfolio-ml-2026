"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const navKeys = [
    { id: 'inicio', labelKey: 'nav.home', fullLabelKey: 'nav.full.home' },
    { id: 'sobre-mi', labelKey: 'nav.aboutMe', fullLabelKey: 'nav.full.aboutMe' },
    { id: 'proyectos', labelKey: 'nav.projects', fullLabelKey: 'nav.full.projects' },
    { id: 'glaucoma', labelKey: 'nav.glaucoma', fullLabelKey: 'nav.full.glaucoma' },
    { id: 'video', labelKey: 'nav.video', fullLabelKey: 'nav.full.video' },
];

export const Navbar = () => {
    const { t } = useLanguage();

    return (
        <>
            {/* 1. NEW TOP HEADER (Minimalist & Full Width) */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-[#0B0F1A]/80 backdrop-blur-md border-b border-white/5">

                {/* Left: Brand Name */}
                <a href="#inicio" className="text-slate-200 font-sans tracking-tight text-sm md:text-base font-medium select-none cursor-pointer hover:text-white transition-colors">
                    .CarlosGutierrezMartin
                </a>

                {/* Right: Navigation Links */}
                <ul className="hidden md:flex gap-8 text-xs md:text-sm font-mono text-slate-400">
                    {navKeys.map((sec) => (
                        <li key={sec.id} className="hover:text-white transition-colors cursor-pointer group">
                            <a href={`#${sec.id}`} className="relative py-2">
                                {t(sec.labelKey)}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 2. SIDE RIGHT DOTS NAVIGATION (Keeping as requested) */}
            <nav className="fixed top-1/2 -translate-y-1/2 right-10 z-40 hidden lg:block">
                <ul className="flex flex-col gap-6">
                    {navKeys.map((sec) => (
                        <li key={sec.id} className="text-right">
                            <a href={`#${sec.id}`} className="group flex items-center justify-end gap-4 relative py-2">
                                {/* Text Label on Hover */}
                                <span className="absolute right-12 px-3 py-1 bg-slate-900/90 backdrop-blur rounded text-xs font-mono text-blue-400 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-blue-500/20 shadow-xl">
                                    {t(sec.fullLabelKey)}
                                </span>

                                {/* Dot */}
                                <div className="w-2 h-2 rounded-full bg-slate-600/50 group-hover:bg-blue-500 group-hover:scale-150 transition-all duration-300 shadow-[0_0_0_0px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
