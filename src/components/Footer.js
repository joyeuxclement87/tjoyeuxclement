import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiHeart, FiCoffee } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub size={20} />, href: "#", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <FiInstagram size={20} />, href: "#", label: "Instagram" },
    { icon: <SiBehance size={20} />, href: "#", label: "Behance" }
  ];

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-background border-t border-gray-800 py-8 border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display bg-gradient-to-r from-violet-300 via-purple-300 
                     to-indigo-300 bg-clip-text text-transparent"
          >
            <span className="gradient-accent bg-clip-text text-transparent font-bold">CJT.</span>
          </motion.a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors p-2
                         hover:bg-violet-500/10 rounded-lg"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Fun Copyright */}
          <div className="text-center space-y-2">
            <motion.div 
              className="flex items-center justify-center gap-2 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>Crafted with</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 14, -14, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-red-400"
              >
                <FiHeart className="inline" />
              </motion.span>
              <span>and</span>
              <motion.span
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-amber-400"
              >
                <FiCoffee className="inline" />
              </motion.span>
              <span>in Rwanda</span>
            </motion.div>
            <p className="text-xs text-gray-500">
              © {currentYear} Clement Joyeux | Powered by imagination and good vibes ✨
            </p>
          </div>
        </div>
      </div>

      {/* Easter Egg - appears on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1
                 bg-gradient-to-r from-transparent via-violet-500 to-transparent
                 opacity-20"
      />
    </footer>
  );
}

export default Footer;
