"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface SectionHeadingProps {
    number: string;
    titleKey: string;
    subtitleKey?: string;
    align?: 'left' | 'right' | 'center';
}

export const SectionHeading = ({ number, titleKey, subtitleKey, align = 'left' }: SectionHeadingProps) => {
    const { t } = useLanguage();
    const title = t(titleKey);
    const subtitle = subtitleKey ? t(subtitleKey) : undefined;

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const xNeg = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const alignClass = {
        left: 'items-start text-left',
        right: 'items-end text-right',
        center: 'items-center text-center',
    };

    return (
        <div ref={containerRef} className={`relative mb-20 flex flex-col ${alignClass[align]} overflow-hidden`}>
            {/* Background Watermark Number */}
            <motion.span
                style={{ x: align === 'right' ? x : xNeg }}
                className="absolute -top-12 sm:-top-20 text-[6rem] sm:text-[10rem] font-bold text-slate-800/10 select-none z-0 leading-none font-mono"
            >
                {number}
            </motion.span>

            {/* Content */}
            <div className="z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-2"
                >
                    <span className="text-blue-500 font-mono font-bold text-xl tracking-wider">/{number}</span>
                    <div className="h-[1px] w-12 bg-blue-500/50" />
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.05 }
                        }
                    }}
                >
                    {title.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                            }}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className={`text-slate-400 font-light text-lg max-w-lg ${align === 'right' ? 'ml-auto' : ''}`}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};
