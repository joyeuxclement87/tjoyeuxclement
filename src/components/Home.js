import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMapPin, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { BiLogoGithub } from 'react-icons/bi';
import { SiBehance } from 'react-icons/si';
import AnimatedBackground from './AnimatedBackground';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseOver);
      element.addEventListener('mouseleave', handleMouseOut);
    });

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseOver);
        element.removeEventListener('mouseleave', handleMouseOut);
      });
    };
  }, []);

  const socialLinks = [
    { icon: <FiLinkedin size={24} />, url: 'https://www.linkedin.com/in/tuyishimire-joyeux-clement-32418528a/', label: 'LinkedIn', username: '@clemjoyeux' },
    { icon: <BiLogoGithub size={24} />, url: 'https://github.com/joyeuxclement87', label: 'GitHub', username: '@cjoyeux' },
    { icon: <FiInstagram size={24}  />, url: 'https://www.instagram.com/carpricorn_gboy/', label: 'Instagram', username: '@clemjoyeux' },
    { icon: <SiBehance size={24} />, url: 'https://www.behance.net/joyeuxclement', label: 'Behance', username: '@clemjoyeux' }
  ];

  const roles = ['UI/UX Designer', 'Frontend Developer', 'Graphics Designer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const profileAnimations = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const glowAnimations = {
    animate: {
      opacity: [0.5, 0.7, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background dark:bg-background pt-24 md:pt-32">
      <AnimatedBackground />
      
      {/* Updated cursor with better alignment */}
      <div className="hidden md:block">
        {/* Main dot */}
        <motion.div 
          className="fixed w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-400 
                   rounded-full pointer-events-none z-[100]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)'
          }}
          transition={{
            ease: "linear",
            duration: 0
          }}
        />
        
        {/* Outer ring */}
        <motion.div 
          className="fixed w-8 h-8 border-2 border-blue-400/50 rounded-full 
                   pointer-events-none z-[100] backdrop-blur-[1px]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: isHovering ? 1.5 : 1
          }}
          transition={{
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 30
            },
            default: {
              ease: "linear",
              duration: 0
            }
          }}
        />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-48 h-48 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 dark:bg-accent/20 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-8rem)]">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Main Content - Adjusted spacing */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Available for work badge - fixed width */}
                <span className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-primary/10 
                               text-accent text-xs font-medium mb-3 gap-2">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="whitespace-nowrap">Available for work</span>
                </span>
                
                {/* Add greeting animation before name */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg text-blue-400 font-medium mb-2"
                >
                  <motion.span
                    animate={{ rotate: [0, 14, 0] }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    className="inline-block"
                  >
                    👋
                  </motion.span>
                  {" "}
                  <span className="text-gray-300">Hi there, I'm</span>
                </motion.p>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight gradient-accent bg-clip-text text-transparent font-display">
                  Clement
                  <br />
                  Joyeux T.
                </h1>

                {/* Role switcher - updated indicator */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={roles[currentRole]}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="mt-3 flex items-center space-x-3"
                  >
                    <div className="w-8 h-[2px] bg-gradient-to-r from-blue-400 to-blue-500" />
                    <p className="text-lg text-text font-medium">
                      {roles[currentRole]}
                      <motion.div
                        layoutId="roleIndicator"
                        className="h-1 w-full bg-blue-400/20 mt-1 rounded-full"
                      >
                        <motion.div
                          animate={{
                            width: ["0%", "100%"],
                          }}
                          transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                          }}
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                        />
                      </motion.div>
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-base text-dark-700 dark:text-light-300 max-w-lg leading-relaxed">
                  Crafting clean, intuitive, and engaging digital
                  experiences that blend aesthetics with functionality.
                </p>

                {/* Hero buttons  */}
                <div className="flex flex-wrap items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 
                             text-white rounded-lg font-medium shadow-lg shadow-blue-500/25"
                  >
                    Explore Work
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gray-900 text-gray-300 rounded-lg font-medium 
                             border border-gray-800 hover:border-blue-500 transition-colors"
                  >
                    Get in Touch
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Profile Section */}
            <div className="lg:col-span-5 relative">
              <motion.div
                variants={profileAnimations}
                initial="initial"
                animate="animate"
                className="relative max-w-md mx-auto"
              >
                {/* Glow effect */}
                <motion.div
                  variants={glowAnimations}
                  animate="animate"
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 blur-xl"
                />
                
                {/* Profile image container with fixed dimensions */}
                <div className="relative rounded-xl overflow-hidden border border-blue-500/20">
                  <motion.div
                    whileHover={{ 
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    className="relative w-full pb-[100%]"
                  >
                    <img
                      src="/profile.jpg"
                      alt="Clement Joyeux"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"
                      whileHover={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.6,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="absolute -right-3 bottom-6 bg-gray-900/80 backdrop-blur-xl 
                           rounded-lg p-3 border border-gray-800"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-gray-400 text-xs">Experience</p>
                      <p className="text-lg font-semibold text-blue-400">3+ Years</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Projects</p>
                      <p className="text-lg font-semibold text-blue-400">50+</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 py-3 border-t border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-blue-400 text-sm" />
                <span className="text-gray-400 text-sm">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
