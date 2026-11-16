import React, { useEffect, useRef } from 'react';
import { X, FileText, Download, GraduationCap, Briefcase, Award, Cpu } from 'lucide-react';
import gsap from 'gsap';

export const ResumeModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.94, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: 'power2.out' }
      );
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Direktang tinatawag ang totoong PDF file na nasa public folder mo
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Katrina_Lyn_De_Asis_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0a0d14] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-500" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white font-display">Curriculum Vitae / Resume</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body with Complete CV Details */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Personal Info */}
          <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-4">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">Katrina Lyn J. De Asis</h4>
            <p className="text-indigo-600 dark:text-indigo-400 font-mono font-semibold">BS Computer Engineering (Embedded Systems)</p>
            <p className="text-slate-500 font-mono">Alacan, San Fabian, Pangasinan 2433 | katrinalyndeasis@gmail.com | +63 929 0133 896[cite: 13]</p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h5 className="font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono text-xs flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-500" /> Education
            </h5>
            <div className="space-y-1.5 text-slate-600 dark:text-slate-300 pl-5">
              <p><strong>PHINMA – University of Pangasinan</strong> (Dagupan City, Pangasinan)[cite: 13]<br />BS Computer Engineering, with a specialization in Embedded Systems — <em>Expected Graduation: 2027</em>[cite: 13]</p>
              <p><strong>Archdiocesan School of San Fabian</strong> (San Fabian, Pangasinan)[cite: 13]<br />Senior High School Graduate — <em>April 2021</em>[cite: 13]</p>
            </div>
          </div>

          {/* Project */}
          <div className="space-y-2">
            <h5 className="font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono text-xs flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-indigo-500" /> Projects (2023 – 2026)[cite: 13]
            </h5>
            <div className="space-y-2 text-slate-600 dark:text-slate-300 pl-5">
              <p><strong>Integrated Web and Embedded Systems Project</strong>[cite: 13]</p>
              <ul className="list-disc space-y-1">
                <li><strong>Secure Full-Stack Web Applications:</strong> Developed a web-based dashboard using React.js and integrated Firebase Authentication to manage secure user login and data persistence[cite: 13].</li>
                <li><strong>Student Information Portal (UI/UX):</strong> Architected a conceptual student portal by applying UI/UX design principles, focusing on user-centered navigation and intuitive interface layout[cite: 13].</li>
                <li><strong>Themed Frontend Development:</strong> Created a PlayStation-inspired interactive website using React.js, demonstrating proficiency in responsive design, CSS styling, and component-based logic[cite: 13].</li>
              </ul>
            </div>
          </div>

          {/* Seminars */}
          <div className="space-y-2">
            <h5 className="font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono text-xs flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-500" /> Seminars Attended
            </h5>
            <div className="space-y-3 text-slate-600 dark:text-slate-300 pl-5">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Blockchain and Finance 101: Understanding the Basics <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 float-right">January 5, 2026</span>[cite: 13]</p>
                <p className="text-xs">Ethel Programming Computer Programming Services. Gained foundational knowledge on blockchain technology and its practical applications in the financial sector[cite: 13].</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Cybersecurity 101: 1-Hour Webinar Event <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 float-right">January 4, 2026</span>[cite: 13]</p>
                <p className="text-xs">Ethel Programming Computer Programming Services. Explored fundamental principles of digital security and best practices for protecting information in an online environment[cite: 13].</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Introduction to Internet of Things (IoT): 1-Hour Webinar Event <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 float-right">January 4, 2026</span>[cite: 13]</p>
                <p className="text-xs">Ethel Programming Computer Programming Services. Learned core concepts of IoT connectivity and how smart devices communicate, complementing my Embedded Systems specialization[cite: 13].</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h5 className="font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono text-xs flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-500" /> Skills & Interests
            </h5>
            <div className="space-y-1.5 text-slate-600 dark:text-slate-300 pl-5 text-xs">
              <p><strong>Technical:</strong> Frontend & Web Development: HTML/CSS, JavaScript, React.js, Next.js, Tailwind CSS, Sass | Backend & Database: APIs, Basic MongoDB, Basic Firebase | Tools: VS Code, UI/UX Design[cite: 13]</p>
              <p><strong>Languages:</strong> English, Filipino[cite: 13]</p>
              <p><strong>Interests:</strong> Attending technical webinars, interface design, Internet of Things (IoT) and Software Development[cite: 13]</p>
            </div>
          </div>
        </div>

        {/* Footer Download */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md shadow-indigo-600/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};