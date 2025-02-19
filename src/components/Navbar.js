import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Add activeSection state
  useScroll(); // Keep the hook if needed for future use, or remove entirely if not needed

  // Define animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 0 20px rgba(22, 163, 74, 0.5)"
    },
    tap: { scale: 0.95 }
  };

  const glowVariants = {
    initial: { opacity: 0, x: "-100%" },
    hover: { 
      opacity: 0.6,
      x: "100%",
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear"
      }
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'work', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  // Add smooth scroll behavior
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    const offset = 80; // Adjust based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-background/90 backdrop-blur-xl border-b border-primary/10' 
        : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl font-bold sm:text-4xl font-display gradient-accent bg-clip-text text-transparent">
              CJT.
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                whileHover={{ y: -2 }}
                className={`text-base font-medium transition-colors duration-300 relative ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : 'text-text hover:text-primary'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 text-base border border-primary/20 hover:border-primary/50 
                       text-text flex items-center gap-2 rounded-lg bg-background-alt/50"
            >
              <FiDownload size={18} />
              <span>Resume</span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative px-5 py-2.5 bg-[#25D366] hover:bg-[#20BD5A]
                       text-white rounded-lg text-base font-medium
                       shadow-lg shadow-[#25D366]/25 overflow-hidden
                       flex items-center gap-2 group transition-colors duration-200"
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                className="absolute inset-0 bg-gradient-to-r from-transparent 
                         via-white/10 to-transparent skew-x-12"
              />
              <FaWhatsapp size={18} className="relative z-10" />
              <span className="relative z-10">Let's Chat</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark-900 dark:text-light-50 
                     hover:text-accent-main dark:hover:text-accent-light transition-colors"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        className="md:hidden glass-card"
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleClick(e, link.href);
                setIsMobileMenuOpen(false);
              }}
              whileTap={{ scale: 0.95 }}
              className="block text-text hover:text-primary px-3 py-2 text-lg 
                       transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-6 py-3 bg-[#25D366] 
                     hover:bg-[#20BD5A] text-white rounded-lg font-medium 
                     shadow-lg shadow-[#25D366]/25 transition-colors duration-200"
          >
            <FaWhatsapp size={20} className="mr-2" />
            Let's Chat
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
