'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import BoundingBox from '@/components/ui/BoundingBox';
import Footer from '@/layout/Footer';
import Navigation from '@/layout/Navigation';
import ProjectModal from '@/components/ui/ProjectModal';
import FloatingActions from '@/components/ui/FloatingActions';
import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';

const projects = [
  {
    title: "NovaTech",
    category: "Branding",
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
    title: "Fitness Brand",
    category: "Branding",
    displayCategory: "Social Media Campaign",
    image: "/project-4.jpg",
    aspect: "aspect-[4/5]",
    line: "Visual content system designed to improve engagement and brand consistency across platforms.",
    type: "branding"
  },
  {
    title: "Portfolio Concept",
    category: "Web Projects",
    displayCategory: "Website Design",
    image: "/project-1.jpg",
    aspect: "aspect-[1/1]",
    line: "Modern responsive website design with focus on minimal layout and clean user flow.",
    type: "web",
    liveUrl: "https://example.com",
    tools: ["Next.js", "Framer Motion", "Vercel"]
  },
  {
    title: "Logo Design Collection",
    category: "Logos",
    displayCategory: "Logo Design Collection",
    image: "/project-2.jpg",
    aspect: "aspect-[3/4]",
    line: "A set of minimalist logo concepts designed for different brand identities.",
    type: "logo",
    bgColor: "bg-[#f0ede5]"
  },
  {
    title: "Brand Magazine",
    category: "Print (PDF)",
    displayCategory: "Editorial Print",
    image: "/project-3.jpg",
    aspect: "aspect-[4/3]",
    line: "A 40-page editorial PDF designed for a lifestyle brand.",
    type: "pdf",
    pdfUrl: "/project-3.jpg"
  }
];

const filters = ['All', 'Branding', 'Posters', 'Print (PDF)', 'Web Projects', 'Logos'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [sanityProjects, setSanityProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(projectsQuery);
        if (data && data.length > 0) {
          setSanityProjects(data);
        }
      } catch (err) {
        console.error("Error fetching from Sanity:", err);
      }
    };
    fetchProjects();
  }, []);

  const activeProjects = sanityProjects.length > 0 ? sanityProjects : projects;

  const filteredProjects = activeProjects.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <main className="min-h-screen text-[#f0ede5] selection:bg-[#f5b915] selection:text-[#001a18]" style={{ background: "linear-gradient(160deg, #001209 0%, #000e0d 50%, #001a18 100%)" }}>
      <div className="background-glow" />
      <Navigation activeSection="work" />

      {/* ─── Floating accent orbs ─── */}
      <div
        className="fixed top-[15%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(245,185,21,0.04) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      {/* Header */}
      <section className="pt-44 pb-12 px-6 lg:px-10 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#f5b915]/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">Portfolio</span>
            <span className="h-px w-10 bg-[#f5b915]/40" />
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl font-bold font-display tracking-tighter leading-[0.95] mb-8"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Selected{" "}
              <span className="text-[#f5b915]">
                Works.
              </span>
            </motion.h1>
          </div>
          <motion.p
            className="text-xl md:text-2xl text-[#f0ede5]/60 font-light leading-relaxed mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            A collection of design work across branding, print, posters, and web development. Click any project to view details or open full files.
          </motion.p>
        </motion.div>

        {/* Filter UI */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-6 border-t border-[#f0ede5]/10 pt-8"
        >
          {filters.map((filter, i) => (
            <motion.button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.05, duration: 0.4 }}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all relative py-2 hover:scale-105
                ${activeFilter === filter ? 'text-[#f5b915]' : 'text-[#f0ede5]/30 hover:text-[#f0ede5]'}`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#f5b915]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-32 px-6 lg:px-10 max-w-7xl mx-auto min-h-[600px] relative z-10">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-x-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid group cursor-pointer relative transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-3xl mb-12 lg:mb-16"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative w-full ${project.aspect} overflow-hidden mb-6 rounded-3xl ${project.bgColor || 'bg-white/5'} border border-white/10 group-hover:border-[#f5b915]/20 transition-colors duration-500`}>
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Soft fade overlay */}
                  <div className="absolute inset-0 bg-[#004643]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 text-left">
                    <p className="text-[#f0ede5]/90 text-sm font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                      {project.line}
                    </p>
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
                  <p className="text-[#f0ede5]/40 text-xs uppercase tracking-[0.2em] font-medium">{project.displayCategory}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />

      <FloatingActions show={true} />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}
