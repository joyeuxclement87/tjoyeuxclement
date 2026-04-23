import { motion } from "motion/react";
import { PaintBrushIcon, DocumentTextIcon, ComputerDesktopIcon, ShareIcon } from '@heroicons/react/24/outline';
import BoundingBox from "./BoundingBox";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BoundingBox className="text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase">
              Services
            </BoundingBox>
          </div>
          <h3 className="text-5xl md:text-6xl font-bold font-display text-[#f0ede5] tracking-tight">
            What I Do
          </h3>
          <p className="text-[#f0ede5]/60 max-w-3xl mx-auto text-xl md:text-2xl font-light pt-4">
            A comprehensive suite of design services tailored to build clear, cohesive, and impactful visual identities.
          </p>
        </motion.div>

        <div className="border-t border-[#f0ede5]/10 mb-16">
          {[
            {
              icon: PaintBrushIcon,
              title: "Graphic Design & Branding",
              desc: "A collection of visual designs including branding, logos, and creative concepts. Each piece is designed to communicate clearly and leave a strong visual impact.",
            },
            {
              icon: DocumentTextIcon,
              title: "Print & Poster Design",
              desc: "Designs for promotional posters, flyers, and print materials. Focused on typography, layout, and visual storytelling to capture attention instantly.",
            },
            {
              icon: ComputerDesktopIcon,
              title: "Web Design & Development",
              desc: "Modern and responsive websites built with clean UI/UX principles. Designed to be simple, fast, and user-friendly across all devices.",
            },
            {
              icon: ShareIcon,
              title: "Social Media Design",
              desc: "Engaging visuals for online platforms, created to boost attention, engagement, and brand identity consistency across social channels.",
            }
          ].map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group border-b border-[#f0ede5]/10 py-10 md:py-16 px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative overflow-hidden hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-[#f0ede5]/20 font-display font-bold text-5xl md:text-7xl group-hover:text-[#f5b915] transition-colors duration-500 w-24">
                0{idx + 1}
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">{cat.title}</h3>
                <p className="text-[#f0ede5]/60 leading-relaxed font-light text-lg max-w-3xl">{cat.desc}</p>
              </div>
              <div className="p-5 bg-[#004643] rounded-full border border-white/10 group-hover:bg-[#f5b915] group-hover:border-[#f5b915] transition-all duration-500 self-start md:self-auto hidden md:block">
                <cat.icon className="w-8 h-8 text-[#f5b915] group-hover:text-[#004643] transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center max-w-2xl mx-auto space-y-6"
        >
          <p className="text-white/80 text-lg">
            Every project is designed with purpose — combining creativity, clarity, and functionality to deliver meaningful visual experiences.
          </p>
          <a 
            href="https://www.behance.net/joyeuxclement" 
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#f0ede5]/20 text-[#f0ede5] hover:border-[#f0ede5]/50 hover:bg-[#f0ede5]/5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more on Behance
          </a>
        </motion.div>
      </div>
    </section>
  );
}
