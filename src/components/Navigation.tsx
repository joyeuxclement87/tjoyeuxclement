import { motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

const navItems = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation({ isFixed, activeSection }: { isFixed: boolean; activeSection: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`w-full flex justify-center ${!isFixed ? 'px-4' : ''} relative z-50`}>
      <motion.nav
        className={`transition-all duration-500
          ${isFixed 
            ? 'fixed top-0 left-0 w-full bg-background/80 backdrop-blur-lg border-b border-white/5 py-0' 
            : 'relative w-fit border border-white/10 bg-background/40 backdrop-blur-sm py-1 rounded-full'
          }`}
      >
        <div className={`mx-auto px-4 ${isFixed ? 'max-w-2xl w-full' : 'w-auto'}`}>
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center h-14">
            <div className="flex items-center gap-1 p-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300
                    hover:text-white group ${isFixed ? 'rounded-lg' : 'rounded-full'}`}
                >
                  <span className={`relative z-10 ${
                    activeSection === item.href.slice(1) ? 'text-white' : 'text-white/50'
                  }`}>
                    {item.name}
                  </span>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 bg-white/5 -z-0 ${isFixed ? 'rounded-lg' : 'rounded-full'}`}
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className={`absolute inset-0 bg-white/0 group-hover:bg-white/5 
                    transition-colors duration-300 -z-0 ${isFixed ? 'rounded-lg' : 'rounded-full'}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between h-14">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 -ml-2 text-white/70 hover:text-white transition-colors
                  ${isMobileMenuOpen ? 'bg-white/5 rounded-lg' : ''}`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
              </button>
              <span className="text-sm font-medium text-white/70">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </span>
              <div className="w-8" />
            </div>

            {/* Mobile Menu */}
            <motion.div
              initial={false}
              animate={{
                height: isMobileMenuOpen ? 'auto' : 0,
                opacity: isMobileMenuOpen ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className={`overflow-hidden ${!isFixed ? 'pb-1' : ''}`}
            >
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 transition-colors
                      ${activeSection === item.href.slice(1)
                        ? 'bg-white/10 text-white'
                        : 'text-white/50 hover:bg-white/5 hover:text-white'
                      } ${isFixed ? 'rounded-lg' : 'rounded'}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
