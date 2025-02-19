import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/yourusername',
      color: 'hover:bg-sky-500'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/yourusername',
      color: 'hover:bg-pink-600'
    }
  ];

  return (
    <footer className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media Cards - Grid on desktop, stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm
                        transition-all duration-300 ${social.color} group`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <social.icon className="text-3xl text-gray-400 group-hover:text-white transition-colors" />
                <div>
                  <h3 className="text-lg font-medium text-gray-200 group-hover:text-white">{social.name}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-200">Follow me on {social.name}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-gray-400">Made with</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="text-red-500 text-xl"
              >
                ❤️
              </motion.span>
              <span className="text-gray-400">and lots of</span>
              <span className="text-yellow-500">☕</span>
            </motion.div>
            
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Clement • All bugs reserved 🐛
            </p>
            
            <motion.p 
              className="text-gray-500 text-xs italic"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              If you're reading this, you should probably hire me! 😉
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
