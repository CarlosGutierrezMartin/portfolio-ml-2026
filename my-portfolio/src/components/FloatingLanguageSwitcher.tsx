"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const FloatingLanguageSwitcher = () => {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <motion.button
            onClick={toggleLanguage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 hover:border-blue-500/50 rounded-full shadow-xl text-slate-300 hover:text-white transition-all group"
            aria-label={t('lang.switchTo')}
        >
            <Globe size={18} className="text-blue-400 group-hover:rotate-[20deg] transition-transform" />
            <AnimatePresence mode="wait">
                <motion.span
                    key={language}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="font-mono text-sm font-bold tracking-wider"
                >
                    {t('lang.switch')}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    );
};
