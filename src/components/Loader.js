import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
    >
      <div className="relative">
        {/* Outer circle */}
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500
                   rounded-full"
        />
        
        {/* Inner circle */}
        <motion.div
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-8 h-8 border-4 border-blue-400/20 border-t-blue-400
                        rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
