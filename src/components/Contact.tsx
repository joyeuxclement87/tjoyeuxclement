import { motion } from "motion/react";
import BoundingBox from "./BoundingBox";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BoundingBox className="text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase">
              Contact
            </BoundingBox>
          </div>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-[#f0ede5] tracking-tight">
            Let’s Work Together
          </h3>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h4 className="text-3xl md:text-4xl text-[#f0ede5] font-light tracking-tight">Have an idea or project?</h4>
            <p className="text-[#f0ede5]/60 text-xl md:text-2xl font-light max-w-xl mx-auto leading-relaxed">
              I’m open to freelance work and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[#f0ede5]/5">
            <div className="space-y-3">
              <p className="text-[#f0ede5]/30 text-[10px] uppercase tracking-[0.3em] font-bold">Email</p>
              <a 
                href="mailto:joyeuxclement87@gmail.com" 
                className="text-xl md:text-2xl text-[#f0ede5] hover:text-[#f5b915] transition-colors font-display tracking-tight"
              >
                joyeuxclement87@gmail.com
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-[#f0ede5]/30 text-[10px] uppercase tracking-[0.3em] font-bold">Instagram / Socials</p>
              <a 
                href="https://instagram.com/joyeuxclement87" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl text-[#f0ede5] hover:text-[#f5b915] transition-colors font-display tracking-tight"
              >
                @joyeuxclement87
              </a>
            </div>
          </div>

          <div className="pt-8">
            <motion.a 
              href="mailto:joyeuxclement87@gmail.com" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] group relative overflow-hidden"
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start a Project</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
