import { motion } from "motion/react";
import Link from "next/link";

const socialLinks = [
  { 
    name: "Behance",
    url: "https://www.behance.net/joyeuxclement",
  },
  { 
    name: "Instagram",
    url: "https://www.instagram.com/joyeuxclement87",
  },
  { 
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tuyishimire-joyeux-clement-32418528a/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/joyeuxclement87",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/joyeuxclement",
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#f0ede5]/10 bg-[#004643] overflow-hidden">
      {/* ─── Floating accent orb ─── */}
      <motion.div
        className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-0"
        style={{ background: "radial-gradient(circle, rgba(245,185,21,0.04) 0%, transparent 70%)", filter: "blur(100px)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-56 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-10"
        >
          <div className="overflow-hidden">
            <motion.h3
              className="text-5xl md:text-8xl font-bold font-display text-[#f0ede5] tracking-tight"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Let&apos;s Work Together
            </motion.h3>
          </div>
          <motion.p
            className="text-xl md:text-2xl text-[#f0ede5]/80 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Have a project in mind? I&apos;m open to freelance work and collaborations.
          </motion.p>
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
             <Link 
              href="/contact" 
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] relative overflow-hidden"
            >
              {/* Shine sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <span className="relative z-10">Contact Me</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f0ede5]/5 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social, i) => (
              <motion.a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.25em] font-bold text-[#f0ede5]/80 hover:text-[#f5b915] transition-all duration-300 hover:-translate-y-0.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {social.name}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            className="flex flex-col md:items-end gap-3 mt-8 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-[#f0ede5]/70 text-[10px] uppercase tracking-[0.3em] font-bold text-center md:text-right">
              © {currentYear} T,joyeux clement. All Rights Reserved.
            </p>
            <p className="text-[#f0ede5]/50 text-[9px] uppercase tracking-[0.2em] text-center md:text-right">
              Designed & Built with focus on clarity, structure, and purpose.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
