'use client';

import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-40 py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Subtle decorative element or empty since Navigation has the name */}
        <div className="text-[10px] uppercase tracking-[0.4em] text-[#f0ede5]/20 font-bold">
          Portfolio v2.0 // 2026
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-[#f0ede5]/20 font-bold">
          Based in Paris
        </div>
      </div>
    </header>
  );
}
