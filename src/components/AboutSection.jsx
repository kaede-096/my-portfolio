import React, { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEMINARS_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-about-left',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.gsap-seminar-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-seminar-list',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-4 gsap-about-left">
          <span className="font-mono text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">About Me</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Education & Certifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            I am Katrina Lyn J. De Asis, currently pursuing a degree in Computer Engineering specializing in Embedded Systems at PHINMA - University of Pangasinan.
          </p>
          <div className="p-4 rounded-xl border border-indigo-200/50 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/20 space-y-2">
            <p className="text-xs font-semibold text-indigo-900 dark:text-indigo-300 font-mono">Location:</p>
            <p className="text-xs text-slate-600 dark:text-slate-300">Alacan, San Fabian, Pangasinan 2433</p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 gsap-seminar-list">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-500" />
            Seminars & Certificates Attended
          </h3>
          <div className="space-y-4">
            {SEMINARS_DATA.map((sem, idx) => (
              <div key={idx} className="gsap-seminar-card p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 space-y-1.5">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">{sem.title}</h4>
                  <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 shrink-0 ml-2">{sem.date}</span>
                </div>
                <p className="text-xs font-mono text-slate-500">{sem.organization}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">{sem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};