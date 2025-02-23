import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from '@phosphor-icons/react';

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    link: "https://www.behance.net/joyeuxclement",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Mobile App UX Design",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1616469829581-73886d59bc73?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.behance.net/joyeuxclement",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Social Media Campaign",
    category: "Graphics",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1998&auto=format&fit=crop",
    link: "https://www.instagram.com/carpricorn_gboy/",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "E-commerce Website",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1613909671501-f9678fdf8dda?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.behance.net/joyeuxclement",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "Restaurant Menu Design",
    category: "Graphics",
    image: "https://images.unsplash.com/photo-1539683255143-73a6b838b106?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.behance.net/joyeuxclement",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    title: "Corporate Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.behance.net/joyeuxclement",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "NFT Collection Design",
    category: "Graphics",
    image: "https://images.unsplash.com/photo-1646832113672-5349f4961de7?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.behance.net/joyeuxclement",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "Travel App Interface",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.behance.net/joyeuxclement",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Event Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=2069&auto=format&fit=crop",
    link: "https://www.behance.net/joyeuxclement",
    color: "from-red-500/20 to-orange-500/20"
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} 
        blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative bg-white/5 overflow-hidden backdrop-blur-sm
        border border-white/10 transition-all duration-500
        group-hover:border-white/20 group-hover:bg-white/10"
      >
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b 
            from-transparent via-background/50 to-background/95
            opacity-0 group-hover:opacity-100 transition-all duration-500
            flex items-end p-6 backdrop-blur-[2px]"
          >
            <div className="transform translate-y-4 group-hover:translate-y-0 
              transition-transform duration-500 w-full"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary/90 
                  px-3 py-1 rounded-full bg-primary/10 backdrop-blur-md">
                  {project.category}
                </span>
                <ArrowRight className="w-5 h-5 text-white/70 
                  group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {project.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12 text-center"
        >
          <h2 className="text-4xl font-bold font-display">Recent Work</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A curated selection of my recent design projects, showcasing my expertise in branding, UI/UX, and graphic design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="https://www.behance.net/joyeuxclement" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more on Behance
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
