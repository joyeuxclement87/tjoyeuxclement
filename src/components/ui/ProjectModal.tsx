import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { XMarkIcon, ArrowDownTrayIcon, ArrowTopRightOnSquareIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { Project } from "@/types";

export default function ProjectModal({ project, onClose }: { project: Project, onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 backdrop-blur-md"
      style={{ background: "rgba(0,14,13,0.92)" }}
      onClick={onClose}
    >
      {/* Subtle ambient glow behind modal */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(245,185,21,0.04) 0%, transparent 70%)" }} />

      {/* Close button */}
      <motion.button
        className="absolute top-6 right-6 md:top-10 md:right-10 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-[#f0ede5]/15 text-[#f0ede5]/50 hover:text-[#f5b915] hover:border-[#f5b915]/40 hover:rotate-90 transition-all duration-300"
        style={{ background: "rgba(0,18,9,0.7)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        <XMarkIcon className="w-5 h-5" />
      </motion.button>

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.93, y: 30, filter: "blur(8px)" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-full max-w-6xl w-full flex flex-col md:flex-row gap-0 items-stretch rounded-3xl overflow-hidden shadow-2xl border border-[#f0ede5]/10"
        style={{ background: "linear-gradient(145deg, #001a18 0%, #000e0d 60%, #001209 100%)" }}
      >
        {/* Decorative top-right orb */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none -z-0"
          style={{ background: "radial-gradient(circle, rgba(245,185,21,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />

        {project.type === 'web' ? (
          <>
            {/* Image pane */}
            <motion.div
              className="w-full md:w-1/2 h-[40vh] md:h-auto relative"
              style={{ background: "#000e0d" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image src={project.image} alt={project.title} fill className="object-cover" />
              {/* Gradient blend into content */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-24"
                style={{ background: "linear-gradient(to right, transparent, #001a18)" }} />
            </motion.div>

            {/* Content pane */}
            <div className="w-full md:w-1/2 p-8 md:p-14 space-y-8 flex flex-col justify-center overflow-y-auto max-h-[60vh] md:max-h-full relative z-10">
              {/* Eye-brow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#f5b915]/40" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">
                  {project.displayCategory}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-[#f0ede5] mb-4 tracking-tighter leading-[1.05]">
                  {project.title}
                </h2>
                <p className="text-[#f0ede5]/60 text-lg leading-relaxed font-light">{project.line}</p>
              </motion.div>

              {project.tools && (
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  <p className="text-[#f0ede5]/30 text-[10px] uppercase tracking-[0.3em] font-bold">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool: string, i: number) => (
                      <motion.span
                        key={tool}
                        className="px-3 py-1 rounded-full text-[#f0ede5]/80 text-xs tracking-wider border border-[#f0ede5]/10 bg-[#f0ede5]/5 hover:border-[#f5b915]/30 hover:bg-[#f5b915]/5 hover:text-[#f5b915] transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                className="flex flex-wrap gap-4 pt-6 border-t border-[#f0ede5]/10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-4 bg-[#f5b915] text-[#001a18] rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] relative overflow-hidden"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">View Live Site</span>
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 border border-[#f0ede5]/20 text-[#f0ede5] rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:border-[#f5b915]/40 hover:text-[#f5b915] transition-all duration-300"
                  >
                    <DocumentTextIcon className="w-4 h-4" /> Case Study
                  </a>
                )}
              </motion.div>
            </div>
          </>
        ) : (
          <div className="w-full max-h-[90vh] flex flex-col overflow-y-auto relative z-10">
            {/* Full-width image */}
            <motion.div
              className={`relative w-full h-[50vh] md:h-[65vh] shrink-0 ${project.bgColor || ''}`}
              style={!project.bgColor ? { background: "#000e0d" } : {}}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <Image src={project.image} alt={project.title} fill className="object-contain p-4 md:p-10" />
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                style={{ background: "linear-gradient(to top, #001a18, transparent)" }} />
            </motion.div>

            {/* Meta bar */}
            <motion.div
              className="p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shrink-0 border-t border-[#f0ede5]/8"
              style={{ background: "rgba(0,26,24,0.95)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div>
                <p className="text-[#f5b915]/70 text-[10px] uppercase tracking-[0.4em] font-bold mb-2">
                  {project.displayCategory}
                </p>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-[#f0ede5] mb-2 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-[#f0ede5]/55 text-sm md:text-base max-w-xl font-light">{project.line}</p>
              </div>

              <div className="flex shrink-0 gap-3 flex-wrap">
                {project.type === 'pdf' ? (
                  <>
                    <a href={project.pdfUrl || project.image} target="_blank" rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-6 md:px-8 py-4 bg-[#f5b915] text-[#001a18] rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(245,185,21,0.2)] relative overflow-hidden"
                    >
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Open in Browser</span>
                    </a>
                    <a href={project.pdfUrl || project.image} download
                      className="inline-flex items-center gap-2 px-6 md:px-8 py-4 border border-[#f0ede5]/20 text-[#f0ede5] rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:border-[#f5b915]/40 hover:text-[#f5b915] transition-all duration-300"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4" /> Download PDF
                    </a>
                  </>
                ) : (
                  <a href={project.image} download
                    className="inline-flex items-center gap-2 px-8 py-4 border border-[#f0ede5]/20 text-[#f0ede5] rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:border-[#f5b915]/40 hover:text-[#f5b915] transition-all duration-300"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4" /> Download Image
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
