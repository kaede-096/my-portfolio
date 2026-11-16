import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Cpu } from 'lucide-react';

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="mb-12 text-center sm:text-left">
        <span className="font-mono text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">Expertise</span>
        <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white mt-1">
          Technical Skills & Tools
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS_DATA.map((group, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 space-y-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-500" />
              <h3 className="font-bold text-sm text-slate-900 dark:text-white font-mono">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, sIdx) => (
                <span key={sIdx} className="text-xs font-mono px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-900/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};