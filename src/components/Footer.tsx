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
    <footer className="relative border-t border-[#f0ede5]/10 bg-[#004643]">
      {/* Main Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-56">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-10"
        >
          <h3 className="text-5xl md:text-8xl font-bold font-display text-[#f0ede5] tracking-tight">
            Let’s Work Together
          </h3>
          <p className="text-xl md:text-2xl text-[#f0ede5]/60 font-light max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I’m open to freelance work and collaborations.
          </p>
          <div className="pt-8">
             <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] group relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f0ede5]/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.25em] font-bold text-[#f0ede5]/60 hover:text-[#f5b915] transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col md:items-end gap-3 mt-8 md:mt-0">
            <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold text-center md:text-right">
              © {currentYear} T,joyeux clement. All Rights Reserved.
            </p>
            <p className="text-[#f0ede5]/30 text-[9px] uppercase tracking-[0.2em] text-center md:text-right">
              Designed & Built with focus on clarity, structure, and purpose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
