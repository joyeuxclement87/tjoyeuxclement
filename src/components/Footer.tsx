import { FaGithub, FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-medium tracking-tight">
              TJCLEMENT
            </a>
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>

          <div className="social-links-container">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
