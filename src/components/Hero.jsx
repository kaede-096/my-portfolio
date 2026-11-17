import React, { useEffect, useRef } from 'react';
import { Mail, ArrowRight, Sun, Moon, Download, Globe } from 'lucide-react';
import gsap from 'gsap';
import katImage from '../assets/kat.png';

export const Hero = ({ onOpenContact, onOpenResume, isDarkMode, onToggleTheme }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-hero-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.gsap-hero-card',
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, delay: 0.3, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-12 gsap-hero-item">
        <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
          Katrina Lyn J. De Asis
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-105 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
          
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-mono rounded-lg border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-all duration-200 flex items-center gap-1.5 hover:scale-105 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV / Resume</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="gsap-hero-item inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-xs font-mono text-slate-600 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            BS Computer Engineering (Embedded Systems)
          </div>
          <h1 className="gsap-hero-item text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
            Frontend Developer & Embedded Systems Student
          </h1>
          <p className="gsap-hero-item text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Computer Engineering student at PHINMA - University of Pangasinan. Specializing in integrated web applications, embedded systems, and responsive user interfaces.
          </p>
          <div className="gsap-hero-item flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-600/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kaede-096"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 text-xs font-mono hover:scale-105"
              >
                <Globe className="w-4 h-4 text-indigo-500" />
                <span>GitHub</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=katrinalyndeasis@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Send Email via Gmail"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center gsap-hero-card">
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent p-5 shadow-xl flex flex-col space-y-4">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-md bg-slate-100 dark:bg-slate-900">
              <img 
                src={katImage} 
                alt="Katrina Lyn J. De Asis" 
                className="w-full h-full object-cover object-top" 
              />
            </div>

            <div className="space-y-4 pt-1">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                  Profile Overview
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Katrina Lyn J. De Asis
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Alacan, San Fabian, Pangasinan
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 text-xs font-mono">
                <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                  <span>Specialization:</span>
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">Embedded Systems</span>
                </div>
                <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                  <span>Status:</span>
                  <span className="font-semibold">Graduating 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};