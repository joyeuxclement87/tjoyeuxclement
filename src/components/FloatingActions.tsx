import { motion } from "motion/react";
import { ArrowUpIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

interface FloatingActionsProps {
  show: boolean;
}

export default function FloatingActions({ show }: FloatingActionsProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.9 }}
      animate={{ opacity: show ? 1 : 0, x: show ? 0 : 20, scale: show ? 1 : 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed right-6 lg:right-10 bottom-10 z-40"
    >
      <div className="flex flex-col gap-3 p-2 bg-[#004643]/80 backdrop-blur-xl border border-[#f0ede5]/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-[#f0ede5]/20 transition-colors duration-500">
        {/* Download CV Button */}
        <a
          href="/cv.pdf"
          download
          className="w-12 h-12 bg-white/5 border border-white/5 rounded-full
            hover:bg-[#f5b915] hover:border-[#f5b915] hover:text-[#004643] transition-all duration-500
            flex items-center justify-center group hover:scale-110 hover:shadow-[0_0_20px_rgba(245,185,21,0.3)]"
          title="Download CV"
        >
          <ArrowDownTrayIcon 
            className="w-5 h-5 text-[#f0ede5] group-hover:text-[#004643] 
              group-hover:-translate-y-0.5 transition-all duration-300" 
          />
        </a>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-white/5 border border-white/5 rounded-full
            hover:bg-[#f5b915] hover:border-[#f5b915] hover:text-[#004643] transition-all duration-500
            flex items-center justify-center group hover:scale-110 hover:shadow-[0_0_20px_rgba(245,185,21,0.3)]"
          title="Back to Top"
        >
          <ArrowUpIcon 
            className="w-5 h-5 text-[#f0ede5] group-hover:text-[#004643] 
              group-hover:-translate-y-1 transition-all duration-300" 
          />
        </button>
      </div>
    </motion.div>
  );
}
