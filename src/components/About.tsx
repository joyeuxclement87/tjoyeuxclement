import { motion } from "framer-motion";
import Image from "next/image";
import { Palette, Code, Globe, Lightbulb, ArrowRight, GraduationCap, Trophy, Heart, PaintBrush } from "@phosphor-icons/react";

const experiences = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Creating memorable and impactful brand identities",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: PaintBrush,
    title: "Visual Design",
    description: "Crafting compelling visual content and marketing materials",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Globe,
    title: "UI/UX Design",
    description: "Designing intuitive digital interfaces and experiences",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Lightbulb,
    title: "Print Design",
    description: "Creating effective print materials and publications",
    color: "from-pink-500/20 to-rose-500/20"
  }
];

const achievements = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "Bachelor in Computer Science - 2023",
      "Google UX Design Certificate",
      "Meta Frontend Development"
    ]
  },
  {
    icon: Trophy,
    title: "Awards",
    items: [
      "Best UI/UX Design - Rwanda ICT Awards 2023",
      "Top Rated Freelancer - Upwork",
      "Featured Designer - Behance"
    ]
  },
  {
    icon: Heart,
    title: "Interests",
    items: [
      "Digital Art & Illustration",
      "Motion Design",
      "Tech Innovation"
    ]
  }
];

const skills = [
  { name: "Brand Design", level: 95, color: "from-blue-500 to-indigo-500" },
  { name: "Visual Design", level: 90, color: "from-purple-500 to-pink-500" },
  { name: "UI/UX Design", level: 85, color: "from-green-500 to-emerald-500" },
  { name: "Print Design", level: 88, color: "from-orange-500 to-red-500" }
];

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-display inline-block relative">
            About Me
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/20 rounded-full blur-xl" />
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences through design innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <motion.div className="lg:col-span-5 lg:sticky lg:top-20 lg:self-start space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl" />
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/about-image.jpg"
                  alt="About Me"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm
                    border border-white/10 text-sm font-medium text-white/80 w-fit mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Available for projects
                  </span>
                  <h3 className="text-2xl font-display mb-2">Tuyishimire Joyeux</h3>
                  <p className="text-white/60">Digital Designer & Developer</p>
                </div>
              </div>
            </div>

            {/* Achievements Cards */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <achievement.icon className="w-6 h-6 text-primary" weight="light" />
                    <h3 className="text-lg font-display">{achievement.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {achievement.items.map((item, i) => (
                      <li key={i} className="text-white/70 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold font-display">
                Crafting Digital Experiences with Purpose
              </h2>
              <div className="prose prose-lg prose-invert">
                <p>
                  Hey there! I'm a passionate digital designer based in Rwanda, specializing in 
                  creating meaningful digital experiences. With a keen eye for aesthetics and a 
                  deep understanding of user behavior, I help brands connect with their audience 
                  through thoughtful design.
                </p>
              </div>
            </motion.div>

            {/* Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} 
                    blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative h-full glass-card p-6 hover:border-white/20 transition-all">
                    <item.icon weight="light" className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-display mb-2">{item.title}</h3>
                    <p className="text-white/60 mb-4">{item.description}</p>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/70 
                      group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <h3 className="text-2xl font-display mb-4">My Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To create digital experiences that not only look beautiful but also solve real problems 
                and bring value to users. I believe in the power of thoughtful design to transform 
                businesses and enhance people's lives.
              </p>
            </motion.div>

            {/* Skills Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <h3 className="text-2xl font-display mb-6">Technical Proficiency</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="text-sm text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
