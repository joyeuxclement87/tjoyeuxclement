'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import ProjectModal from "@/components/ui/ProjectModal";
import { Project } from "@/types";
import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sanityProjects, setSanityProjects] = useState<Project[]>([]);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const sectionRef  = useRef<HTMLElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);

  // Section-level parallax (orbs)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(projectsQuery);
        if (data && data.length > 0) {
          const featured = data.filter((p: Project) => p.featured);
          setSanityProjects(featured.length >= 4 ? featured.slice(0, 6) : data.slice(0, 6));
        }
      } catch (err) {
        console.error("Error fetching from Sanity:", err);
      }
    };
    fetchProjects();
  }, []);

  const activeProjects = sanityProjects.length > 0 ? sanityProjects : localProjects;

  // Track scroll arrows state
  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener('scroll', updateArrows);
  }, [activeProjects]);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'right' ? 480 : -480, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #001a18 0%, #000e0d 50%, #001209 100%)" }}
    >
      {/* ─── Parallax orbs ─── */}
      <motion.div style={{ y: yOrb1 }}
        className="absolute top-[10%] left-[-5%] w-[550px] h-[550px] rounded-full pointer-events-none -z-10"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(245,185,21,0.06) 0%, transparent 70%)", filter: "blur(110px)" }} />
      </motion.div>
      <motion.div style={{ y: yOrb2 }}
        className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(0,70,67,0.18) 0%, transparent 70%)", filter: "blur(120px)" }} />
      </motion.div>
      {/* Dots pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "radial-gradient(#f0ede5 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px"
      }} />

      {/* ─── Section header ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#f5b915]/40" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">Featured Work</span>
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
                Selected{" "}
                <span className="text-[#f5b915]">Work.</span>
              </motion.h2>
            </div>
          </div>

          {/* Arrow controls */}
          <motion.div
            className="flex items-center gap-3 shrink-0 self-end md:self-auto mt-4 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#f0ede5]/15 flex items-center justify-center text-[#f0ede5]/50 hover:border-[#f5b915]/50 hover:text-[#f5b915] hover:bg-[#f5b915]/5 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#f0ede5]/15 flex items-center justify-center text-[#f0ede5]/50 hover:border-[#f5b915]/50 hover:text-[#f5b915] hover:bg-[#f5b915]/5 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Horizontal scroll track ─── */}
      <div className="relative">
        {/* Left fade edge */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-16 z-10"
          style={{ background: "linear-gradient(to right, #000e0d, transparent)" }} />
        {/* Right fade edge */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-16 z-10"
          style={{ background: "linear-gradient(to left, #000e0d, transparent)" }} />

        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 overflow-x-auto px-[7.5vw] md:px-8 pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {activeProjects.map((project, idx) => (
            <motion.div
              key={idx}
              data-cursor="view"
              initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
              style={{ flexShrink: 0 }}
              className="w-[85vw] sm:w-[380px] lg:w-[440px] group cursor-pointer snap-center md:snap-start"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image card */}
              <div className={`relative w-full aspect-[4/5] overflow-hidden rounded-3xl ${project.bgColor || 'bg-white/5'} border border-white/10 group-hover:border-[#f5b915]/25 transition-colors duration-500 mb-5 shadow-lg`}>
                {typeof project.image === 'string' && project.image.trim() !== '' ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                    sizes="440px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[#f0ede5]/20 font-display font-bold">Image Pending</span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a18]/90 via-[#001a18]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7">
                  <p className="text-[#f0ede5]/90 text-sm font-light leading-relaxed translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    {project.line}
                  </p>
                  {/* "Click to open" hint */}
                  <div className="flex items-center gap-2 mt-4 text-[#f5b915] text-[10px] font-bold uppercase tracking-[0.2em] translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <span>Click to open</span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </div>
                </div>

                {/* PDF badge */}
                {project.type === 'pdf' && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#001a18]/80 backdrop-blur-md border border-[#f5b915]/30 text-[#f5b915] text-[9px] font-bold uppercase tracking-[0.2em] rounded-full z-10">
                    PDF
                  </div>
                )}

                {/* Gold corner accent */}
                <div className="absolute bottom-3 right-3 w-7 h-7 border-r border-b border-[#f5b915]/0 group-hover:border-[#f5b915]/50 transition-colors duration-500" />
              </div>

              {/* Meta */}
              <div className="px-1 space-y-1 transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-[#f0ede5]/40 text-[10px] uppercase tracking-[0.25em] font-bold">{project.displayCategory}</p>
                <h3 className="text-[#f0ede5] font-bold text-xl tracking-tight group-hover:text-[#f5b915] transition-colors duration-400">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center mt-16"
      >
        <a
          href="/work"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#001a18] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] relative overflow-hidden"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <span className="relative z-10">View Full Archive</span>
          <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
        </a>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
