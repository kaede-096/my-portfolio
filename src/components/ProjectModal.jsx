import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

export const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.94, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: 'power2.out' }
      );
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#0a0d14] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-200"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-base text-slate-900 dark:text-white font-display">{project.title}</h3>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Project Summary</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.summary}</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Key Highlights</h4>
              <ul className="space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-300">
                {project.keyHighlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white">Challenge & Solution</h4>
              <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Challenge:</strong> {project.challengeAndSolution.challenge}</p>
              <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Solution:</strong> {project.challengeAndSolution.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};