import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PaintBrushIcon, DocumentTextIcon, ComputerDesktopIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yOrb1  = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yOrb2  = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [40, -20]);

  const services = [
    {
      icon: PaintBrushIcon,
      title: "Graphic Design & Branding",
      desc: "A collection of visual designs including branding, logos, and creative concepts. Each piece is designed to communicate clearly and leave a strong visual impact.",
    },
    {
      icon: DocumentTextIcon,
      title: "Print & Poster Design",
      desc: "Designs for promotional posters, flyers, and print materials. Focused on typography, layout, and visual storytelling to capture attention instantly.",
    },
    {
      icon: ComputerDesktopIcon,
      title: "Web Design & Development",
      desc: "Modern and responsive websites built with clean UI/UX principles. Designed to be simple, fast, and user-friendly across all devices.",
    },
    {
      icon: ShareIcon,
      title: "Social Media Design",
      desc: "Engaging visuals for online platforms, created to boost attention, engagement, and brand identity consistency across social channels.",
    }
  ];

  return (
    <section ref={containerRef} id="services" className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001209 0%, #000e0d 50%, #001a18 100%)" }}>
      {/* ─── Floating accent orbs (parallax) ─── */}
      <motion.div
        style={{ y: yOrb1 }}
        className="absolute top-[30%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(245,185,21,0.07) 0%, transparent 70%)", filter: "blur(100px)" }} />
      </motion.div>
      <motion.div
        style={{ y: yOrb2 }}
        className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(0,70,67,0.12) 0%, transparent 70%)", filter: "blur(110px)" }} />
      </motion.div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: "linear-gradient(#f0ede5 1px, transparent 1px), linear-gradient(90deg, #f0ede5 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          style={{ y: yTitle }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#f5b915]/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">Services</span>
            <span className="h-px w-10 bg-[#f5b915]/40" />
          </div>
          <div className="overflow-hidden">
            <motion.h3
              className="text-5xl sm:text-6xl md:text-8xl font-bold font-display text-[#f0ede5] tracking-tighter leading-[0.95]"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              What I{" "}
              <span className="text-[#f5b915]">
                can
              </span>
              <span className="text-[#f5b915]"> Do.</span>
            </motion.h3>
          </div>
          <motion.p
            className="text-[#f0ede5]/50 text-lg font-light max-w-lg mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A comprehensive suite of design services tailored to build clear, cohesive, and impactful visual identities.
          </motion.p>
        </motion.div>

        <div className="border-t border-[#f0ede5]/10 mb-16">
          {services.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.7, ease: "easeOut" }}
              className="group border-b border-[#f0ede5]/10 py-10 md:py-16 px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative overflow-hidden hover:bg-white/[0.03] transition-all duration-500"
            >
              {/* Hover slide-in accent */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-[#f5b915] origin-top"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="text-[#f0ede5]/20 font-display font-bold text-5xl md:text-7xl group-hover:text-[#f5b915] transition-colors duration-500 w-24"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.12, duration: 0.5 }}
              >
                0{idx + 1}
              </motion.div>
              <div className="flex-1 space-y-3">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight group-hover:text-[#f5b915] transition-colors duration-500">{cat.title}</h3>
                <p className="text-[#f0ede5]/80 leading-relaxed font-light text-lg max-w-3xl">{cat.desc}</p>
              </div>
              <div className="p-5 bg-white/5 rounded-full border border-white/10 group-hover:bg-[#f5b915] group-hover:border-[#f5b915] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 self-start md:self-auto hidden md:block">
                <cat.icon className="w-8 h-8 text-[#f5b915] group-hover:text-[#001a18] transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 text-center max-w-2xl mx-auto space-y-6"
        >
          <p className="text-white/80 text-lg">
            Every project is designed with purpose — combining creativity, clarity, and functionality to deliver meaningful visual experiences.
          </p>
          <a 
            href="https://www.behance.net/joyeuxclement" 
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#f0ede5]/20 text-[#f0ede5] hover:border-[#f5b915]/50 hover:bg-[#f5b915]/5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 relative overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Shine sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="relative z-10">View more on Behance</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
