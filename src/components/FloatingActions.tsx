import { motion } from "framer-motion";
import { RocketLaunch, Download } from "@phosphor-icons/react";

interface FloatingActionsProps {
  show: boolean;
}

export default function FloatingActions({ show }: FloatingActionsProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: show ? 1 : 0, x: show ? 0 : 20 }}
      className="fixed right-4 top-2/3 -translate-y-1/2 z-40"
    >
      <div className="flex flex-col gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-white/5 border border-white/10
            hover:bg-white/10 hover:border-white/20 transition-all duration-300
            flex items-center justify-center group"
        >
          <RocketLaunch 
            weight="bold"
            className="w-5 h-5 text-white/60 group-hover:text-white 
              transform -rotate 90 transition-colors duration-300" 
          />
        </button>

        {/* Download CV Button */}
        <a
          href="/cv.pdf"
          download
          className="w-10 h-10 bg-white/5 border border-white/10
            hover:bg-white/10 hover:border-white/20 transition-all duration-300
            flex items-center justify-center group"
        >
          <Download 
            weight="bold"
            className="w-5 h-5 text-white/60 group-hover:text-white 
              group-hover:-translate-y-0.5 transition-all duration-300" 
        />
        </a>
      </div>
    </motion.div>
  );
}
