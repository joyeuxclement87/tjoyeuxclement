import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { XMarkIcon, ArrowDownTrayIcon, ArrowTopRightOnSquareIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close button */}
      <motion.button 
        className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white hover:rotate-90 transition-all duration-300 p-2 bg-black/50 hover:bg-black/70 rounded-full z-10"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        <XMarkIcon className="w-8 h-8" />
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.92, y: 30, filter: "blur(8px)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-full max-w-6xl w-full flex flex-col md:flex-row gap-0 items-stretch bg-[#004643] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
      >
        {project.type === 'web' ? (
          <>
            <motion.div
              className="w-full md:w-1/2 h-[40vh] md:h-auto relative bg-white/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </motion.div>
            <div className="w-full md:w-1/2 p-8 md:p-16 space-y-8 flex flex-col justify-center overflow-y-auto max-h-[60vh] md:max-h-full">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{project.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed">{project.line}</p>
              </motion.div>
              
              {project.tools && (
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool: string, i: number) => (
                      <motion.span
                        key={tool}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80 text-xs tracking-wider hover:border-[#f5b915]/30 hover:bg-[#f5b915]/5 transition-colors duration-300"
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
                className="flex flex-wrap gap-4 pt-4 border-t border-white/10 mt-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-4 bg-[#f5b915] text-[#004643] rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(245,185,21,0.2)] relative overflow-hidden">
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 relative z-10" /> <span className="relative z-10">View Live Site</span>
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    <DocumentTextIcon className="w-4 h-4" /> Case Study
                  </a>
                )}
              </motion.div>
            </div>
          </>
        ) : (
          <div className="w-full max-h-[90vh] flex flex-col bg-transparent overflow-y-auto">
            <motion.div
              className={`relative w-full h-[50vh] md:h-[70vh] shrink-0 ${project.bgColor || 'bg-black/50'}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <Image src={project.image} alt={project.title} fill className="object-contain p-4 md:p-8" />
            </motion.div>
            <motion.div
              className="p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#004643] shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 tracking-tight">{project.title}</h2>
                <p className="text-white/60 text-sm md:text-base max-w-xl font-light">{project.line}</p>
              </div>
              
              <div className="flex shrink-0 gap-4">
                {project.type === 'pdf' ? (
                  <>
                    <a href={project.pdfUrl || project.image} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 md:px-8 py-4 bg-[#f5b915] text-[#004643] rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(245,185,21,0.2)] relative overflow-hidden">
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 relative z-10" /> <span className="relative z-10">Open in Browser</span>
                    </a>
                    <a href={project.pdfUrl || project.image} download className="inline-flex items-center gap-2 px-6 md:px-8 py-4 border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                      <ArrowDownTrayIcon className="w-4 h-4" /> Download PDF
                    </a>
                  </>
                ) : (
                  <a href={project.image} download className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/30 transition-all duration-300">
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
