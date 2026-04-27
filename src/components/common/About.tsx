import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

/* ─── Stagger orchestrator ─── */
const stagger = {
  badge:   { delay: 0.1, duration: 0.7 },
  heading: { delay: 0.25, duration: 0.8 },
  image:   { delay: 0.15, duration: 1.0 },
  text:    { delay: 0.35, duration: 0.7 },
  stats:   { delay: 0.5,  duration: 0.6 },
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);

  return (
    <section ref={containerRef} id="about" className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001a18 0%, #000e0d 50%, #001209 100%)" }}>

      {/* ─── Floating accent orbs ─── */}
      <div
        className="absolute -top-20 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(245,185,21,0.06) 0%, transparent 70%)", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(0,70,67,0.15) 0%, transparent 70%)", filter: "blur(120px)" }}
      />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: "linear-gradient(#f0ede5 1px, transparent 1px), linear-gradient(90deg, #f0ede5 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#f5b915]/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">About Me</span>
            <span className="h-px w-10 bg-[#f5b915]/40" />
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-5xl sm:text-6xl md:text-8xl font-bold font-display text-[#f0ede5] tracking-tighter leading-[0.95]"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              T. Joyeux{" "}
              <span className="text-[#f5b915]">
                Clement.
              </span>
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: stagger.image.duration, delay: stagger.image.delay }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-white/5 group">
              <motion.div className="relative w-full h-full" style={{ scale: imgScale }}>
                <Image
                  src="/about-image.jpg"
                  alt="T. Joyeux Clement"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#f5b915]/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#f5b915]/30" />
            </div>
            
            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full -z-10"
              style={{ background: "radial-gradient(circle, rgba(245,185,21,0.12) 0%, transparent 70%)", filter: "blur(30px)" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Decorative vertical line */}
            <motion.div
              className="absolute -right-8 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#f5b915]/20 to-transparent hidden lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: stagger.text.duration, delay: stagger.text.delay }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                className="text-xl md:text-2xl text-[#f5b915] font-light italic"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stagger.text.delay, duration: 0.6 }}
              >
                Crafting digital experiences with purpose.
              </motion.p>
              <motion.p
                className="text-lg text-[#f0ede5]/80 leading-relaxed font-light"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stagger.text.delay + 0.1, duration: 0.6 }}
              >
                I&apos;m a graphic designer and web developer focused on building modern visual identities and digital experiences. 
                I design across branding, print, posters, and web — creating work that is clean, structured, and easy to understand.
              </motion.p>
              <motion.p
                className="text-lg text-[#f0ede5]/80 leading-relaxed font-light"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stagger.text.delay + 0.2, duration: 0.6 }}
              >
                My goal is simple: turn ideas into visuals that communicate clearly and look intentional. 
                Whether it&apos;s a logo, a poster, or a complex website, I ensure every detail serves a purpose.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8 pt-8 border-t border-[#f0ede5]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stagger.stats.delay, duration: stagger.stats.duration }}
            >
              {[
                { number: "05", suffix: "+", label: "Years Experience" },
                { number: "50", suffix: "+", label: "Projects Done" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1 group cursor-default">
                  <div className="flex items-baseline gap-0.5">
                    <motion.p
                      className="text-3xl font-display font-bold text-[#f0ede5] group-hover:text-[#f5b915] transition-colors duration-500"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: stagger.stats.delay + (i * 0.15), duration: 0.5, ease: "easeOut" }}
                    >
                      {stat.number}
                    </motion.p>
                    <span className="text-[#f5b915] text-2xl font-bold">{stat.suffix}</span>
                  </div>
                  <p className="text-[#f0ede5]/60 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
