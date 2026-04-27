'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: 'Home',    href: '/#home',    id: 'home' },
  { name: 'Work',    href: '/work',     id: 'work' },
  { name: 'About',   href: '/#about',   id: 'about' },
  { name: 'Skills',  href: '/#skills',  id: 'skills' },
  { name: 'Contact', href: '/contact',  id: 'contact' },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-6 flex items-center justify-center relative">
      <motion.span
        animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-5 h-[1.5px] bg-[#f0ede5] block rounded-full"
      />
      <motion.span
        animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-5 h-[1.5px] bg-[#f0ede5] block rounded-full"
      />
    </div>
  );
}

export default function Navigation({ activeSection }: { activeSection?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 50);
  });

  const isItemActive = (item: typeof navItems[0]) =>
    (pathname === '/work'    && item.id === 'work')    ||
    (pathname === '/contact' && item.id === 'contact') ||
    (pathname === '/'        && activeSection === item.id) ||
    (pathname === '/'        && !activeSection && item.id === 'home');

  return (
    <>
      {/* ── Floating Navbar ── */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto w-full"
        >
          <motion.div
            animate={{
              maxWidth: scrolled ? 780 : 1280,
              marginTop: scrolled ? 14 : 32,
              borderRadius: scrolled ? 999 : 0,
              paddingLeft: scrolled ? 20 : 32,
              paddingRight: scrolled ? 20 : 32,
              paddingTop: scrolled ? 12 : 28,
              paddingBottom: scrolled ? 12 : 28,
              backgroundColor: scrolled
                ? "rgba(0,70,67,0.88)"
                : "rgba(0,25,23,0.0)",
              boxShadow: scrolled
                ? "0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(240,237,229,0.07)"
                : "none",
              backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex items-center justify-between"
          >
            {/* Logo */}
            <Link
              href="/#home"
              className="flex-shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-80"
            >
              <img
                src="/logo.png"
                alt="T. Joyeux Clement"
                className="h-7 md:h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => {
                const active = isItemActive(item);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300
                        ${active ? 'text-[#004643]' : 'text-[#f0ede5]/70 hover:text-[#f0ede5]'}`}
                    >
                      {active && (
                        <motion.span
                          layoutId="navPill"
                          className="absolute inset-0 rounded-full bg-[#f5b915]"
                          transition={{ type: "spring", stiffness: 380, damping: 38 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Hire Me CTA — styled like the hero buttons */}
            <div className="hidden md:flex items-center">
              <motion.a
                href="mailto:joyeuxclement87@gmail.com"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="group relative px-6 py-2.5 rounded-full bg-[#f5b915] text-[#004643] font-bold text-[10px] uppercase tracking-[0.2em] overflow-hidden hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(245,185,21,0.15)] hover:shadow-[0_0_50px_rgba(245,185,21,0.35)] flex items-center gap-2"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative z-10">Hire Me</span>
                <ArrowRightIcon className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#f0ede5]/15 bg-[#f0ede5]/5 hover:border-[#f5b915]/40 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <HamburgerIcon open={isMobileMenuOpen} />
              </button>
            </div>
          </motion.div>
        </motion.nav>
      </div>

      {/* ── Full-screen Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#001a18]/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="flex flex-col items-center gap-7"
              onClick={(e) => e.stopPropagation()}
            >
              <img src="/logo.png" alt="logo" className="h-9 w-auto opacity-50 mb-6" />

              {navItems.map((item, i) => {
                const active = isItemActive(item);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[2.6rem] font-bold font-display tracking-tight transition-all duration-300 hover:text-[#f5b915]
                        ${active ? 'text-[#f5b915]' : 'text-[#f0ede5]/70'}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Hire Me */}
              <motion.a
                href="mailto:joyeuxclement87@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.45 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group mt-6 px-8 py-3.5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] flex items-center gap-2.5 relative overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative z-10">Hire Me</span>
                <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 relative z-10" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
