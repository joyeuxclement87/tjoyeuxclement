import { motion } from "framer-motion";
import { Code, PaintBrush, Layout, Svg, FigmaLogo, Database } from "@phosphor-icons/react";

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
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-display">Skills & Tools</h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to bring ideas to life
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
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} 
                blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative h-full glass-card p-8">
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
