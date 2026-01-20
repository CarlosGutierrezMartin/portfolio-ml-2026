"use client";
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import { GlaucomaSection } from '@/components/TFGGlaucoma';
import { TFGVideo } from '@/components/TFGVideo';
import { ProjectSplitn } from '@/components/ProjectSplitn';
import { AboutMe } from '@/components/AboutMe';
import { CategoryTitle } from '@/components/CategoryTitle';
import { FloatingLanguageSwitcher } from '@/components/FloatingLanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-20 text-center border-t border-white/5 bg-[#0D111C]">
      <p className="text-slate-600 font-mono text-xs uppercase tracking-widest">
        {t('footer.copyright')}
      </p>
    </footer>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <main className="bg-[#0B0F1A] selection:bg-blue-500/30 overflow-x-hidden">
        <Navbar />

        <HeroSection />

        <AboutMe />

        <CategoryTitle titleKey="category.projects" />

        <ProjectSplitn />

        <CategoryTitle titleKey="category.tfg" />

        <GlaucomaSection />

        <TFGVideo />

        <Footer />

        <FloatingLanguageSwitcher />
      </main>
    </LanguageProvider>
  );
}