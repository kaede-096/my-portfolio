import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import gsap from 'gsap';

export const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-contact-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">Contact</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Have a question or interested in collaborating on a project? Feel free to reach out through my direct links below.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="mailto:katrinalyndeasis@gmail.com"
              className="gsap-contact-card p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center space-y-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-1 font-mono">Email</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 break-all">katrinalyndeasis@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+639290133896"
              className="gsap-contact-card p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center space-y-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-1 font-mono">Contact No.</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">+63 929 0133 896</p>
              </div>
            </a>

            <a
              href="https://github.com/kaede-096"
              target="_blank"
              rel="noopener noreferrer"
              className="gsap-contact-card p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center space-y-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-1 font-mono">GitHub</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">kaede-096</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};