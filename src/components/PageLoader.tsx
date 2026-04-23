import { motion } from "motion/react";

export default function PageLoader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[100] bg-[#004643] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background ambient glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[400px] h-[400px] bg-[#f5b915]/10 rounded-full blur-[100px]"
      />

      <div className="relative flex flex-col items-center z-10">
        
        {/* Logo Image Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-48 md:w-64 flex items-center justify-center mb-8"
        >
          <img src="/logo.png" alt="T. Joyeux Clement" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>
        
        {/* Simple elegant pulsing dots instead of numbers */}
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full bg-[#f5b915]"
            />
          ))}
        </div>
        
      </div>
    </motion.div>
  );
}
