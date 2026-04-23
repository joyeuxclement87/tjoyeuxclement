import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Code, PaintBrush, Monitor, Icon } from "@phosphor-icons/react";
import BoundingBox from "./BoundingBox";

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
    <section ref={containerRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-10 right-[-5%] w-64 h-64 bg-[#f5b915]/5 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-10 left-[-5%] w-96 h-96 bg-[#004643]/20 rounded-full blur-3xl -z-10" 
      />

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
              Skills
            </BoundingBox>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#f0ede5]">
            Arsenal & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#f5b915]/10 flex items-center justify-center text-[#f5b915]">
                  <category.icon size={24} weight="duotone" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#f0ede5]">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#f0ede5]/85">{item.name}</span>
                      <span className="text-[#f5b915] font-mono">{item.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-[#f5b915]"
                      />
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
