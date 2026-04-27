'use client';

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const socialLinks = [
  { name: "Behance",   url: "https://www.behance.net/joyeuxclement" },
  { name: "Instagram", url: "https://www.instagram.com/joyeuxclement87" },
  { name: "LinkedIn",  url: "https://www.linkedin.com/in/tuyishimire-joyeux-clement-32418528a/" },
  { name: "Twitter",   url: "https://twitter.com/joyeuxclement87" },
  { name: "TikTok",   url: "https://tiktok.com/@joyeuxclement87" },
  { name: "Facebook", url: "https://facebook.com/joyeuxclement87" },
  { name: "GitHub",   url: "https://github.com/joyeuxclement87" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #001a18 0%, #000e0d 60%, #000a09 100%)" }}>

      {/* ── Dark gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[-10%] left-[15%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,70,67,0.25) 0%, transparent 65%)", filter: "blur(120px)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,185,21,0.06) 0%, transparent 70%)", filter: "blur(100px)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* ── Let's Work Together CTA ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-[#f5b915]/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">Available for Work</span>
          <span className="h-px w-12 bg-[#f5b915]/40" />
        </motion.div>

        {/* Big heading */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold font-display tracking-tighter leading-[0.9]"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#f0ede5]">Let&apos;s Work</span>
            <br />
            <span className="text-[#f5b915]">Together.</span>
          </motion.h2>
        </div>

        <motion.p
          className="text-lg md:text-xl text-[#f0ede5]/50 font-light max-w-xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Have a project in mind? I&apos;m open to freelance work and exciting collaborations. Let&apos;s create something remarkable.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_60px_rgba(245,185,21,0.2)] hover:shadow-[0_0_80px_rgba(245,185,21,0.4)] relative overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <span className="relative z-10">Start a Project</span>
            <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
          <a
            href="mailto:joyeuxclement87@gmail.com"
            className="group inline-flex items-center gap-3 px-10 py-5 border border-[#f0ede5]/15 text-[#f0ede5]/70 hover:text-[#f0ede5] hover:border-[#f5b915]/30 font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 backdrop-blur-sm"
          >
            <span>Say Hello</span>
          </a>
        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#f0ede5]/10 to-transparent" />
      </div>

      {/* ── Bottom Footer Bar ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">

          {/* Col 1: Brand — no logo, just text info */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.35em] font-bold">
              T. Joyeux Clement
            </p>
            <p className="text-[#f0ede5]/30 text-[9px] uppercase tracking-[0.3em] font-bold">
              Portfolio v2.0 // {currentYear}
            </p>
            <p className="text-[#f0ede5]/25 text-[9px] uppercase tracking-[0.25em]">
              Based in Kigali, Rwanda
            </p>
          </motion.div>

          {/* Col 2: Socials */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className="text-[#f0ede5]/30 text-[9px] uppercase tracking-[0.35em] font-bold">Find Me On</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#f0ede5]/50 hover:text-[#f5b915] transition-all duration-300 hover:-translate-y-0.5 inline-block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                >
                  {s.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 3: Copyright */}
          <motion.div
            className="space-y-2 md:text-right"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-[#f0ede5]/30 text-[9px] uppercase tracking-[0.3em] font-bold">
              © {currentYear} T. Joyeux Clement
            </p>
            <p className="text-[#f0ede5]/20 text-[8px] uppercase tracking-[0.2em]">
              Designed & built with clarity,<br />structure, and purpose.
            </p>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}
