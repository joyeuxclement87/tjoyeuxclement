import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import BoundingBox from "./BoundingBox";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <BoundingBox className="text-[#f5b915] px-4 py-1 text-xs font-bold tracking-widest uppercase">
              About Me
            </BoundingBox>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#f0ede5]">
            T. Joyeux Clement
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-white/5">
              <Image
                src="/about-image.jpg"
                alt="T. Joyeux Clement"
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Simple Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f5b915]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-[#f5b915] font-light italic">
                Crafting digital experiences with purpose.
              </p>
              <p className="text-lg text-[#f0ede5]/80 leading-relaxed font-light">
                I’m a graphic designer and web developer focused on building modern visual identities and digital experiences. 
                I design across branding, print, posters, and web — creating work that is clean, structured, and easy to understand.
              </p>
              <p className="text-lg text-[#f0ede5]/80 leading-relaxed font-light">
                My goal is simple: turn ideas into visuals that communicate clearly and look intentional. 
                Whether it's a logo, a poster, or a complex website, I ensure every detail serves a purpose.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#f0ede5]/10">
              <div className="space-y-1">
                <p className="text-3xl font-display font-bold text-[#f0ede5]">05<span className="text-[#f5b915]">+</span></p>
                <p className="text-[#f0ede5]/60 text-[10px] uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-display font-bold text-[#f0ede5]">50<span className="text-[#f5b915]">+</span></p>
                <p className="text-[#f0ede5]/60 text-[10px] uppercase tracking-widest font-bold">Projects Done</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
