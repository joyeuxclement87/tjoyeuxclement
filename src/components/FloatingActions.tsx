import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Rocket } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface FloatingActionsProps {
  show: boolean;
}

export default function FloatingActions({ show }: FloatingActionsProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      className="fixed right-4 bottom-20 sm:bottom-8 z-40 flex flex-col gap-3"
    >
      {/* Back to Top Button with Progress Circle */}
      <button
        onClick={scrollToTop}
        className="w-12 h-12 relative group"
      >
        {/* Circular Progress */}
        <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            className="stroke-white/5"
            strokeWidth="5"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            className="stroke-primary"
            strokeWidth="5"
            fill="none"
            strokeDasharray="251.2"
            style={{
              strokeDashoffset: scaleX.get() * 251.2
            }}
          />
        </svg>

        {/* Button Content */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10
          hover:bg-white/10 hover:border-white/20 transition-all duration-300
          flex items-center justify-center text-white/70 hover:text-white
          group-hover:scale-105 active:scale-95">
          <ArrowUp weight="bold" className="w-5 h-5" />
        </div>
      </button>

      {/* Download CV Button */}
      <a
        href="/cv.pdf"
        download
        className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10
          hover:bg-white/10 hover:border-white/20 transition-all duration-300
          flex items-center justify-center text-white/70 hover:text-white
          hover:scale-105 active:scale-95 relative overflow-hidden group"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300"
        />
        <Rocket className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}
