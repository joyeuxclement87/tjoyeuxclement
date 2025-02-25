import { motion } from "framer-motion";
import Image from "next/image";
import { Palette, Code, Globe, Lightbulb, GraduationCap, Trophy, Heart, PaintBrush } from "@phosphor-icons/react";

const experiences = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Crafting unique brand stories and visual identities that resonate",
    years: "2020 - Present",
    details: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: PaintBrush,
    title: "Visual Design",
    description: "Creating impactful visual experiences across multiple platforms",
    years: "2019 - Present",
    details: ["Digital Design", "Print Design", "Marketing Collateral"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "UI/UX Design",
    description: "Building intuitive and engaging digital experiences",
    years: "2021 - Present",
    details: ["User Interface", "User Experience", "Prototyping"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    description: "Leading design strategy and creative innovation",
    years: "2022 - Present",
    details: ["Project Leadership", "Design Strategy", "Team Collaboration"],
    color: "from-orange-500 to-red-500"
  }
];

const achievements = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "Certified in computer engineering - 2025",
      "Tech A intern UX Design Certificate",
      "Software Development - 2022"
    ]
  },
  {
    icon: Heart,
    title: "Interests",
    items: [
      "Graphic Design",
      "Motion Design",
      "Tech Innovation",
      "Gaming"
    ]
  }
];

const skills = [
  { name: "Brand Design", level: 95, color: "from-blue-500 to-indigo-500" },
  { name: "Visual Design", level: 90, color: "from-purple-500 to-pink-500" },
  { name: "UI/UX Design", level: 85, color: "from-green-500 to-emerald-500" },
  { name: "Print Design", level: 88, color: "from-orange-500 to-red-500" }
];

function ExperienceCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative border-l border-white/10 pl-8 py-6 hover:border-primary transition-all">
        {/* Timeline Dot */}
        <motion.div 
          className="absolute -left-[5px] top-8 w-[10px] h-[10px] rounded-full bg-background 
            border-2 border-white/20 group-hover:border-primary transition-all"
          whileHover={{ scale: 1.2 }}
        />

        {/* Year Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 
          border border-white/10 text-xs tracking-wider text-white/40 mb-4">
          {item.years}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity
              border border-white/10 group-hover:border-white/20"
              style={{ backgroundImage: `linear-gradient(to bottom right, ${item.color})` }}>
              <item.icon weight="light" className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-display text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 mt-1">{item.description}</p>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {item.details.map((detail: string, i: number) => (
              <span key={i} className="px-2 py-1 text-xs rounded bg-white/5 text-white/60
                border border-white/10 group-hover:border-white/20 transition-colors">
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Image & Quick Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 
                translate-x-2 translate-y-2" />
              <Image
                src="/about-image.jpg"
                alt="Profile"
                width={400}
                height={500}
                className="relative z-10 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="border-l-2 border-white/10 pl-6 space-y-6">
              <div>
                <h3 className="text-white/40 text-sm uppercase tracking-wider">Name</h3>
                <p className="text-lg">Tuyishimire Joyeux Clement</p>
              </div>
              <div>
                <h3 className="text-white/40 text-sm uppercase tracking-wider">Location</h3>
                <p className="text-lg">Kigali, Rwanda</p>
              </div>
              <div>
                <h3 className="text-white/40 text-sm uppercase tracking-wider">Focus</h3>
                <p className="text-lg">Brand & Digital Design</p>
              </div>
              <div>
                <h3 className="text-white/40 text-sm uppercase tracking-wider">Experience</h3>
                <p className="text-lg">3+ Years</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-2/3 space-y-12">
            {/* Biography */}
            <div>
              <h2 className="text-3xl font-display mb-6">
                <span className="text-primary">{"{"}</span> Story Mode <span className="text-primary">{"}"}</span>
              </h2>
              <div className="prose prose-lg prose-invert">
                <p>
                  Hey there! I'm a passionate digital designer based in Rwanda, specializing in 
                  creating meaningful digital experiences. With a keen eye for aesthetics and a 
                  deep understanding of user behavior, I help brands connect with their audience 
                  through thoughtful design.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h2 className="text-3xl font-display mb-8 flex items-center gap-3">
                <span className="text-gradient">Quest Log</span>
                <span className="text-sm text-white/40 font-normal ml-2">2019 - Present</span>
              </h2>
              <div className="space-y-2">
                {experiences.map((item, index) => (
                  <ExperienceCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h2 className="text-3xl font-display mb-6">
                <span className="text-primary">[</span> Power Stats <span className="text-primary">]</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-white/10 p-4 hover:border-primary transition-all"
                  >
                    <div className="text-2xl font-bold font-display text-primary mb-1">
                      {skill.level}%
                    </div>
                    <div className="text-sm text-white/60">{skill.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
