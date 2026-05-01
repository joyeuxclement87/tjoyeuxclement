import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { LightBulbIcon, PencilIcon, SparklesIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Approach() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yContent = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const steps = [
    { icon: LightBulbIcon, text: "Understand", sub: "the idea", number: "01" },
    { icon: PencilIcon, text: "Design", sub: "the solution", number: "02" },
    { icon: SparklesIcon, text: "Refine", sub: "for clarity", number: "03" },
    { icon: CheckBadgeIcon, text: "Deliver", sub: "with purpose", number: "04" }
  ];

  return (
    <section ref={containerRef} id="approach" className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001209 0%, #000e0d 50%, #001a18 100%)" }}>

      {/* ─── Floating accent orbs ─── */}
      <motion.div
        style={{ y: y1, background: "radial-gradient(circle, rgba(245,185,21,0.05) 0%, transparent 70%)", filter: "blur(100px)" }}
        className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
      />
      <motion.div
        style={{ y: y2, background: "radial-gradient(circle, rgba(0,70,67,0.15) 0%, transparent 70%)", filter: "blur(120px)" }}
        className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none -z-10"
      />
      {/* Dots pattern overlay (Different from grid) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "radial-gradient(#f0ede5 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px"
      }} />

      <motion.div style={{ y: yContent }} className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-32 flex flex-col items-center gap-6 relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-10 bg-[#f5b915]/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">My Approach</span>
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
              The{" "}
              <span className="text-[#f5b915]">
                Process.
              </span>
            </motion.h2>
          </div>
          <motion.p
            className="text-xl md:text-2xl text-[#f0ede5]/80 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A proven framework for turning concepts into clear, structured digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-24"
        >
          <div className="relative">
            {/* Connecting Line (Desktop) — animated draw-in */}
            <motion.div
              className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-[#f0ede5]/20 to-transparent z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center gap-6 group cursor-default relative z-10"
                >
                  
                  {/* Step Number */}
                  <motion.div
                    className="text-[#f0ede5]/20 font-display font-bold text-4xl group-hover:text-[#f0ede5]/40 transition-colors duration-500"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon Node */}
                  <motion.div
                    className="p-6 rounded-full bg-[#004643] border border-[#f0ede5]/10 transition-all duration-500 group-hover:border-[#f5b915]/40 group-hover:bg-[#f5b915]/5 group-hover:shadow-[0_0_40px_rgba(245,185,21,0.15)] group-hover:scale-110 relative"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <step.icon className="w-8 h-8 text-[#f5b915]" />
                    {/* Ping ring on hover */}
                    <div className="absolute inset-0 rounded-full border border-[#f5b915]/0 group-hover:border-[#f5b915]/30 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
                  </motion.div>

                  {/* Text */}
                  <div className="transition-transform duration-500 group-hover:-translate-y-2">
                    <p className="text-[#f5b915] font-bold text-xl tracking-tight mb-2">{step.text}</p>
                    <p className="text-[#f0ede5]/70 text-xs uppercase tracking-[0.3em] font-bold">{step.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="w-16 h-[1px] mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, rgba(240,237,229,0.2), transparent)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-2xl md:text-4xl text-[#f0ede5] leading-relaxed font-light max-w-4xl mx-auto tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I believe good design should not feel complicated. It should feel{" "}
            <span className="text-[#f5b915] font-medium">clear</span>,{" "}
            <span className="text-[#f5b915] font-medium">direct</span>, and{" "}
            <span className="text-[#f5b915] font-medium">meaningful</span>.
          </motion.p>
        </motion.div>

      </motion.div>
    </section>
  );
}
