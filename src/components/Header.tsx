import { FaGithub, FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <nav className="relative px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-medium tracking-tight hover:text-accent transition-colors">
          TJCLEMENT
        </a>

        {/* Center Items */}
        <div className="flex items-center gap-6">
          <div className="status-badge">
            <span className="status-indicator" />
            Available for brand design projects
          </div>
          <div className="h-4 w-px bg-zinc-800/50"></div>
          <a href="/cv.pdf" download className="download-button">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="social-links-container"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
            className="social-link">
            <FaGithub size={18} />
          </a>
          <a href="https://www.behance.net/joyeuxclement" target="_blank" rel="noopener noreferrer"
            className="social-link">
            <FaBehance size={18} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
            className="social-link">
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://www.instagram.com/carpricorn_gboy/" target="_blank" rel="noopener noreferrer"
            className="social-link">
            <FaInstagram size={18} />
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
