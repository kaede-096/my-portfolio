import React from 'react';

export const TimelineSection = () => {
  const TIMELINE_EXPERIENCE = [
    {
      period: '2023 – 2027 (Expected)',
      role: 'BS Computer Engineering (Embedded Systems)',
      description: 'PHINMA - University of Pangasinan. Specializing in embedded systems, hardware-software integration, and full-stack web development.'
    },
    {
      period: 'April 2021',
      role: 'Senior High School Graduate',
      description: 'Archdiocesan School of San Fabian, San Fabian, Pangasinan.'
    }
  ];

  return (
    <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="mb-12 text-center sm:text-left">
        <span className="font-mono text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">Journey</span>
        <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white mt-1">
          Educational Background
        </h2>
      </div>

      <div className="space-y-6">
        {TIMELINE_EXPERIENCE.map((item, index) => (
          <div key={index} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-900/50">
                {item.period}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{item.role}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};