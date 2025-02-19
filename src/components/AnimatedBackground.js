import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-dark-950">
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1rem 1rem, ${`#ffffff05`} 2px, transparent 2px)`,
          backgroundSize: '3rem 3rem'
        }} 
      />
      
      {/* Minimal accent glow */}
      <motion.div
        animate={{
          opacity: [0.02, 0.04, 0.02],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full 
                 bg-accent-main/5 blur-3xl"
      />
    </div>
  );
};

export default AnimatedBackground;
