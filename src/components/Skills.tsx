import { motion } from "motion/react";
import { Code, PaintBrush, Layout } from "@phosphor-icons/react";

const skills = [
  {
    category: "Design Tools",
    icon: PaintBrush,
    items: ["Adobe Illustrator", "Photoshop", "InDesign", "After Effects", "Figma"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Brand Design",
    icon: Layout,
    items: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Social Media", "Print Design"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    category: "Digital Design",
    icon: Code,
    items: ["UI Design", "Wireframing", "Prototyping", "Design Systems", "Web Design"],
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <h2 className="relative inline-block border border-dashed border-[#f5b915] text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase bg-[#f5b915]/5">
              Skills
              <span className="absolute -top-1 -left-1 w-2 h-2 border border-[#f5b915] bg-[#004643]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 border border-[#f5b915] bg-[#004643]" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 border border-[#f5b915] bg-[#004643]" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border border-[#f5b915] bg-[#004643]" />
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold font-display text-[#f0ede5]">
            Arsenal & Tools
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            The weapons of choice in my creative toolkit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative touch-manipulation"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} 
                blur-2xl opacity-20 sm:opacity-0 
                sm:group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative h-full glass-card p-8
                active:scale-[0.99] sm:active:scale-100"
              >
                <skill.icon weight="thin" className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-display mb-4">{skill.category}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-white/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
