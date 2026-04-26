import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import BoundingBox from "./BoundingBox";
import ProjectModal from "./ProjectModal";
import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';

const localProjects = [
  {
    title: "NovaTech",
    category: "Brand Identity",
    displayCategory: "Brand Identity",
    image: "/project-1.jpg",
    aspect: "aspect-[4/3]",
    line: "A modern visual identity designed for a tech startup. Focused on clean structure, typography, and scalability across platforms.",
    type: "branding"
  },
  {
    title: "Music Event Series",
    category: "Posters",
    displayCategory: "Poster Design",
    image: "/project-2.jpg",
    aspect: "aspect-[3/4]",
    line: "A series of bold posters created for promotional use. Strong typography and contrast used to capture attention quickly.",
    type: "poster"
  },
  {
    title: "Food Delivery App",
    category: "Web Projects",
    displayCategory: "UI Design",
    image: "/project-3.jpg",
    aspect: "aspect-[16/9]",
    line: "Mobile interface design focused on simplicity and smooth user experience.",
    type: "web",
    liveUrl: "https://example.com",
    caseStudyUrl: "#",
    tools: ["Figma", "React", "Tailwind CSS"]
  },
  {
    title: "Logo Design Collection",
    category: "Logos",
    displayCategory: "Logo Design Collection",
    image: "/project-2.jpg",
    aspect: "aspect-[1/1]",
    line: "A set of minimalist logo concepts designed for different brand identities.",
    type: "logo",
    bgColor: "bg-[#f0ede5]"
  }
];

export default function WorkPreview() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [sanityProjects, setSanityProjects] = useState<any[]>([]);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yFast = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(projectsQuery);
        if (data && data.length > 0) {
          const featured = data.filter((p: any) => p.featured);
          setSanityProjects(featured.length >= 4 ? featured.slice(0, 4) : data.slice(0, 4));
        }
      } catch (err) {
        console.error("Error fetching from Sanity:", err);
      }
    };
    fetchProjects();
  }, []);

  const activeProjects = sanityProjects.length > 0 ? sanityProjects : localProjects;

  return (
    <section ref={containerRef} id="work" className="py-32 relative overflow-hidden">
      {/* ─── Floating accent orb ─── */}
      <motion.div
        className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(245,185,21,0.05) 0%, transparent 70%)", filter: "blur(90px)" }}
        animate={{ y: [0, -35, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-28 flex flex-col items-center text-center"
        >
          <div className="flex items-center mb-6">
            <BoundingBox className="text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase">
              Featured Work
            </BoundingBox>
          </div>
          <div className="overflow-hidden">
            <motion.h3
              className="text-5xl md:text-6xl font-bold font-display text-[#f0ede5] mb-6 tracking-tight"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Selected Work
            </motion.h3>
          </div>
          <motion.p
            className="text-xl md:text-2xl text-[#f0ede5]/80 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A curated look at some of my recent projects, focusing on brand identity, digital experiences, and visual storytelling.
          </motion.p>
        </motion.div>

        {/* Masonry Grid - 4 items */}
        <div className="columns-1 md:columns-2 gap-x-12 mb-32">
          {activeProjects.map((project, idx) => (
            <motion.div
              key={idx}
              style={{ y: idx % 2 === 0 ? ySlow : yFast }}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.8, ease: "easeOut" }}
              className="break-inside-avoid group cursor-pointer relative transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-3xl mb-12"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`relative w-full ${project.aspect} overflow-hidden mb-6 rounded-3xl ${project.bgColor || 'bg-white/5'} border border-white/10 group-hover:border-[#f5b915]/20 transition-colors duration-500`}>
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Soft fade overlay */}
                <div className="absolute inset-0 bg-[#004643]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 text-left">
                  <motion.p
                    className="text-[#f0ede5]/90 text-sm font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-all duration-700"
                  >
                    {project.line}
                  </motion.p>
                </div>
                
                {project.type === 'pdf' && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full z-10 shadow-lg">
                    PDF
                  </div>
                )}

                {/* Decorative corner accent */}
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-[#f5b915]/0 group-hover:border-[#f5b915]/40 transition-colors duration-500" />
              </div>
              
                <div className="space-y-1 px-1 transition-all duration-500 group-hover:-translate-y-2">
                  <h4 className="text-[#f0ede5] font-bold text-xl tracking-tight transition-colors group-hover:text-[#f5b915]">{project.title}</h4>
                  <p className="text-[#f0ede5]/60 text-xs uppercase tracking-[0.2em] font-medium">{project.displayCategory}</p>
                </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center"
        >
          <a 
            href="/work" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] relative overflow-hidden"
          >
            {/* Shine sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <span className="relative z-10">View Full Archive</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
