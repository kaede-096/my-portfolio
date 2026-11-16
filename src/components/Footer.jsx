import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/60 text-center text-xs text-slate-500 font-mono">
      <p>© {new Date().getFullYear()} Katrina Lyn J. De Asis. All rights reserved.</p>
    </footer>
  );
};