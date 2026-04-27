import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Code, PaintBrush, Monitor, Icon } from "@phosphor-icons/react";
import BoundingBox from "@/components/ui/BoundingBox";

interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

interface SkillCategory {
  category: string;
  icon: Icon;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: "Design tools",
    icon: PaintBrush,
    items: [
      { name: "Adobe Illustrator", level: 95 },
      { name: "Photoshop", level: 90 },
      { name: "InDesign", level: 85 },
      { name: "After Effects", level: 75 },
      { name: "Figma", level: 95 }
    ]
  },
  {
    category: "Development",
    icon: Code,
    items: [
      { name: "Next.js / React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Motion", level: 80 },
      { name: "Sanity CMS", level: 85 }
    ]
  },
  {
    category: "Specialties",
    icon: Monitor,
    items: [
      { name: "Brand Identity", level: 95 },
      { name: "UI/UX Design", level: 90 },
      { name: "Print Design", level: 95 },
      { name: "Typography", level: 85 },
      { name: "Motion Graphics", level: 75 }
    ]
  }
];

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} id="skills" className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001209 0%, #000e0d 50%, #001a18 100%)" }}>
      {/* ─── Floating accent orbs ─── */}
      <div 
        style={{ y: y1, background: "radial-gradient(circle, rgba(245,185,21,0.07) 0%, transparent 70%)", filter: "blur(100px)" }}
        className="absolute top-10 right-[-5%] w-[500px] h-[500px] rounded-full -z-10 pointer-events-none"
      />
      <div 
        style={{ y: y2, background: "radial-gradient(circle, rgba(0,70,67,0.2) 0%, transparent 70%)", filter: "blur(120px)" }}
        className="absolute bottom-10 left-[-5%] w-[600px] h-[600px] rounded-full -z-10 pointer-events-none"
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">Skills</span>
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
              Arsenal &{" "}
              <span className="text-[#f5b915]">
                Tools.
              </span>
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.15, duration: 0.7 }}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-[#f5b915]/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5b915]/0 via-transparent to-[#f5b915]/0 group-hover:from-[#f5b915]/5 group-hover:to-[#f5b915]/0 transition-all duration-700 pointer-events-none" />

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-[#f5b915]/10 flex items-center justify-center text-[#f5b915] group-hover:bg-[#f5b915]/20 group-hover:scale-110 transition-all duration-500"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon size={24} weight="duotone" />
                </motion.div>
                <h3 className="text-xl font-bold font-display text-[#f0ede5]">{category.category}</h3>
              </div>

              <div className="space-y-6 relative z-10">
                {category.items.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#f0ede5]/85">{item.name}</span>
                      <motion.span
                        className="text-[#f5b915] font-mono"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                      >
                        {item.level}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + (i * 0.12), ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: "linear-gradient(90deg, #f5b915, #f5b915ee)",
                        }}
                      >
                        {/* Shine sweep on skill bar */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "200%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 1.2 + (i * 0.12), ease: "easeOut" }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
