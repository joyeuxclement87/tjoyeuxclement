import { motion } from "motion/react";
import Image from "next/image";
import BoundingBox from "./BoundingBox";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center mb-4">
            <BoundingBox className="text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase">
              About Me
            </BoundingBox>
          </div>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-[#f0ede5] tracking-tight">
            T. Joyeux Clement
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <Image
                src="/about-image.jpg"
                alt="T. Joyeux Clement"
                fill
                className="object-cover grayscale contrast-[1.2] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#004643]/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f0ede5]/5 rounded-full blur-3xl z-[-1]" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f5b915]/5 rounded-full blur-3xl z-[-1]" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h4 className="text-2xl md:text-3xl text-[#f5b915] font-light italic">
                Crafting digital experiences with purpose.
              </h4>
              <p className="text-xl md:text-2xl text-[#f0ede5]/80 leading-relaxed font-light">
                I’m a graphic designer and web developer focused on building modern visual identities and digital experiences.
              </p>
              <p className="text-xl md:text-2xl text-[#f0ede5]/80 leading-relaxed font-light">
                I design across branding, print, posters, and web — creating work that is clean, structured, and easy to understand.
              </p>
              <p className="text-xl md:text-2xl text-[#f0ede5]/80 leading-relaxed font-light pt-2">
                My goal is simple: turn ideas into <span className="text-[#f5b915]">visuals</span> that communicate clearly and look intentional.
              </p>
            </div>

            {/* Stats/Highlight Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#f0ede5]/10">
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-bold text-[#f0ede5]">05<span className="text-[#f5b915]">+</span></p>
                <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-bold text-[#f0ede5]">50<span className="text-[#f5b915]">+</span></p>
                <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Projects Completed</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
