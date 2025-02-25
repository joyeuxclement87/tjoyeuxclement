import { FaGithub, FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Download, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/joyeuxclement87", label: "GitHub" },
  { icon: FaBehance, href: "https://www.behance.net/joyeuxclement", label: "Behance" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/tuyishimire-joyeux-clement-32418528a/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/carpricorn_gboy/", label: "Instagram" }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 bg-background/50"
    >
      <nav className="relative mx-auto px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              TJ<span className="text-primary">CLEMENT</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/70 hover:text-white md:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-1">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-2 text-white/50 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              <div className="w-px h-6 bg-white/10" />

              {/* Download CV Button */}
              <motion.a
                href="/cv.pdf"
                download
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="download-button"
              >
                <Download weight="bold" />
                <span>Download CV</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2">
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-2 p-2 mb-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-white/50 hover:text-white transition-colors
                          hover:bg-white/5 rounded-lg"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>

                  {/* Download Button */}
                  <a
                    href="/cv.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full p-3
                      text-white/70 hover:text-white transition-colors
                      hover:bg-white/5 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Download weight="bold" />
                    <span>Download CV</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      
      {/* Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 backdrop-blur-sm" />
    </motion.header>
  );
}
