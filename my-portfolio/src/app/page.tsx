"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ChevronDown, Brain, Database } from 'lucide-react';
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';

function HeroSection() {
  // 1. Cargamos tu archivo local desde la carpeta /public
  const { rive, RiveComponent } = useRive({
    src: '/4084-8458-illustration-follow-mouse.riv',
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // Nota: Este archivo Rive nuevo no tiene inputs 'xAxis'/'yAxis' expuestos,
  // por lo que no incluimos la lógica de seguimiento del ratón.

  return (
    <section className="h-screen flex items-center px-10 md:px-24 relative overflow-hidden bg-[#0B0F1A]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="z-10"
        >
          <h2 className="text-blue-400 font-mono mb-4 italic">{"<MachineLearning />"}</h2>
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tighter">
            Haciendo que los datos <span className="text-blue-500 underline">te miren.</span>
          </h1>
          <p className="text-slate-400 max-w-md mb-8 text-lg">
            Desarrollador especializado en Computer Vision y modelos de Deep Learning con interfaces interactivas.
          </p>
        </motion.div>

        {/* El componente de Rive con tu archivo */}
        <div className="h-[600px] w-full mix-blend-screen filter invert grayscale opacity-90">
          <RiveComponent className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {

  // Variantes para animaciones al hacer scroll
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-[#0B0F1A] text-slate-200 min-h-screen selection:bg-blue-500/30">

      {/* 1. NAVEGACIÓN (ÍNDICE) */}
      <nav className="fixed top-0 right-0 p-8 z-50">
        <ul className="flex flex-col gap-4 text-sm font-mono text-blue-400/70 items-end">
          {['Inicio', 'Proyectos', 'TFG', 'Sobre mí'].map((item, i) => (
            <li key={item} className="hover:text-blue-400 transition-colors cursor-pointer group">
              <a href={`#${item.toLowerCase()}`}>
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">0{i + 1}.</span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <HeroSection />

      {/* 3. SECCIÓN DE PROYECTOS (ESTRUCTURA PARA TFG) */}
      <section id="proyectos" className="py-24 px-10 md:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold mb-16 flex items-center gap-4">
            <span className="text-blue-500 font-mono text-xl">02.</span> Proyectos Destacados
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Tarjeta de Proyecto TFG 1 */}
            <div className="group relative bg-slate-900/50 p-8 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all">
              <div className="flex justify-between items-start mb-6">
                <Brain className="text-blue-500" size={40} />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Deep Learning</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Detección de Glaucoma</h4>
              <p className="text-slate-400 mb-6">
                Modelo de redes neuronales convolucionales para el apoyo en el diagnóstico médico mediante imágenes del nervio óptico.
              </p>
              <ul className="flex gap-4 text-xs font-mono text-blue-400/70">
                <li>Python</li>
                <li>PyTorch</li>
                <li>Computer Vision</li>
              </ul>
            </div>

            {/* Tarjeta de Proyecto TFG 2 */}
            <div className="group relative bg-slate-900/50 p-8 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all">
              <div className="flex justify-between items-start mb-6">
                <Database className="text-green-500" size={40} />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">AI Video Analysis</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">Optimización de Publicidad</h4>
              <p className="text-slate-400 mb-6">
                Detección automática de momentos narrativos clave en video para mejorar el impacto publicitario mediante IA.
              </p>
              <ul className="flex gap-4 text-xs font-mono text-green-400/70">
                <li>NLP</li>
                <li>PyTorch</li>
                <li>Marketing Tech</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}