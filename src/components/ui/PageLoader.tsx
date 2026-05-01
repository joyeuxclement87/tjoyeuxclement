import { motion, useMotionValue, useTransform, animate } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [percent, setPercent] = useState(0);
  
  useEffect(() => {
    // Animate percentage from 0 to 100 over 1.8s
    const controls = animate(0, 100, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        setPercent(Math.round(value));
      }
    });
    return controls.stop;
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[999999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #001209 0%, #000e0d 50%, #001a18 100%)" }}
    >
      {/* Background ambient glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] bg-[#f5b915]/5 rounded-full blur-[120px] pointer-events-none"
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: "linear-gradient(#f0ede5 1px, transparent 1px), linear-gradient(90deg, #f0ede5 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="relative flex flex-col items-center z-10 w-full max-w-sm px-6">
        
        {/* Logo Image Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-48 md:w-56 flex items-center justify-center mb-10"
        >
          <Image src="/logo.png" alt="T. Joyeux Clement" width={256} height={64} className="w-full h-auto object-contain drop-shadow-2xl" priority />
        </motion.div>
        
        {/* Loading Progress Bar & Percentage */}
        <motion.div 
          className="w-full flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Progress Bar Container */}
          <div className="w-full h-[2px] bg-[#f0ede5]/10 rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#f5b915] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Typography */}
          <div className="w-full flex justify-between items-center text-[#f5b915]">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-70">
              Loading
            </span>
            <span className="font-display text-sm font-bold tracking-widest tabular-nums">
              {percent}%
            </span>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
}
