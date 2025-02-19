import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if near footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsNearFooter(footerTop - windowHeight < 100);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className={`fixed right-8 p-3 rounded-full bg-blue-500 
                   hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25
                   z-50 transition-all duration-300
                   ${isNearFooter ? 'bottom-32' : 'bottom-12'}`}
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
