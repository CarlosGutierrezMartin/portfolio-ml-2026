"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const CategoryTitle = ({ titleKey }: { titleKey: string }) => {
    const { t } = useLanguage();
    const title = t(titleKey);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <div ref={containerRef} className="py-32 md:py-48 relative overflow-hidden flex items-center justify-center">
            {/* Background moving text (Parallax) */}
            <motion.div
                style={{ x, opacity: 0.05 }}
                className="absolute inset-0 flex items-center justify-center whitespace-nowrap pointer-events-none select-none"
            >
                <span className="text-[10rem] md:text-[20rem] font-bold font-mono text-white leading-none">
                    {title}
                </span>
            </motion.div>

            {/* Main Title */}
            <motion.div style={{ scale, opacity }} className="relative z-10 text-center px-4">
                <h2 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter hover:tracking-widest transition-all duration-700 cursor-default leading-normal pb-2">
                    {title}
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            </motion.div>
        </div>
    );
};
