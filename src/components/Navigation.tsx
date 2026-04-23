'use client';

import { motion } from "motion/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: 'Home', href: '/#home', id: 'home' },
  { name: 'Work', href: '/work', id: 'work' },
  { name: 'About', href: '/#about', id: 'about' },
  { name: 'Skills', href: '/#skills', id: 'skills' },
  { name: 'Contact', href: '/contact', id: 'contact' },
];

export default function Navigation({ activeSection }: { activeSection?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-[#004643]/80 backdrop-blur-xl border-b border-[#f0ede5]/10"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/#home" 
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img src="/logo.png" alt="T. Joyeux Clement" className="h-8 md:h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const isActive = 
                (pathname === '/work' && item.id === 'work') || 
                (pathname === '/' && activeSection === item.id) ||
                (pathname === '/' && activeSection === 'home' && item.id === 'home');

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-[#f5b915] relative
                    ${isActive ? 'text-[#f5b915]' : 'text-[#f0ede5]/60'}`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f5b915]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              className="text-[#f0ede5] hover:text-[#f5b915] transition-colors p-1" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-[#004643] border-b border-[#f0ede5]/10 p-8 md:hidden z-40 shadow-2xl"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item) => {
                const isActive = 
                  (pathname === '/work' && item.id === 'work') || 
                  (pathname === '/' && activeSection === item.id);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-medium tracking-wide ${isActive ? 'text-[#f5b915]' : 'text-[#f0ede5]/70'}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}
