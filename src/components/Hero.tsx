import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import BoundingBox from "./BoundingBox";

const particles = [
  { top: "15%", left: "10%", duration: 15, delay: 0 },
  { top: "35%", left: "25%", duration: 18, delay: 2 },
  { top: "65%", left: "15%", duration: 12, delay: 5 },
  { top: "85%", left: "30%", duration: 20, delay: 1 },
  { top: "25%", left: "45%", duration: 14, delay: 4 },
  { top: "55%", left: "55%", duration: 16, delay: 3 },
  { top: "75%", left: "40%", duration: 19, delay: 6 },
  { top: "45%", left: "5%", duration: 13, delay: 7 },
  { top: "10%", left: "35%", duration: 17, delay: 8 },
  { top: "90%", left: "20%", duration: 21, delay: 9 },
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#004643] overflow-hidden flex items-center">
      
      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Slight Vignette Effect */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,25,23,0.5)_100%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#f0ede5] rounded-full blur-[1px]"
            style={{ top: p.top, left: p.left }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.3, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Very soft radial glow behind text */}
      <motion.div 
        style={{ y: y2 }}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-[#f0ede5] rounded-full blur-[150px] pointer-events-none z-0" 
      />

      {/* Right Screen Background Image (Desktop) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0">
        <motion.div
          style={{ y: y1, scale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-full"
        >
          <Image
            src="/hero-image.jpg"
            alt="Dramatic Portrait"
            fill
            className="object-cover object-center grayscale contrast-[1.3] brightness-90"
            priority
            sizes="50vw"
          />
          {/* Moody overlays tied to color palette */}
          <div className="absolute inset-0 bg-[#004643]/20 mix-blend-multiply" />
          
          {/* Right -> Left fade gradient */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#004643] via-[#004643]/80 to-transparent" />
          
          {/* Additional edge fades */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#004643] via-[#004643]/50 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#004643] via-[#004643]/30 to-transparent" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full relative z-30 pt-32 pb-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Minimal Content Space */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 pr-0 lg:pr-12 relative"
          >
            {/* Intro Text */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#f0ede5]/20 bg-[#f0ede5]/5 backdrop-blur-sm mb-6 relative z-10">
              <span className="w-2 h-2 rounded-full bg-[#f5b915] animate-pulse" />
              <p className="text-xs md:text-sm text-[#f0ede5]/90 uppercase tracking-[0.2em] font-bold">
                Hello! I'm T. Joyeux Clement
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-[6rem] font-bold font-display leading-[1.05] text-[#f0ede5] tracking-tighter relative z-10 py-2">
              Designing ideas <br className="hidden lg:block" /> into{" "}
              <BoundingBox className="text-[#f5b915] px-5 py-2 mx-1 mt-2 lg:mt-0">
                visuals.
              </BoundingBox>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#f0ede5]/75 tracking-widest uppercase font-medium relative z-10 mt-6">
              Graphic design • Web • Print
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-5 pt-6 relative z-10"
            >
              <a 
                href="/work" 
                className="w-full sm:w-auto px-8 py-4 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">View Work</span>
                <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 border border-[#f0ede5]/20 text-[#f0ede5] hover:border-[#f0ede5]/50 hover:bg-[#f0ede5]/5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3 backdrop-blur-sm group"
              >
                <span className="relative z-10">Contact</span>
                <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile Image Layer */}
          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-[60vh] w-[110%] -ml-[5%] lg:hidden mt-8 z-0"
          >
            <Image
              src="/hero-image.jpg"
              alt="Dramatic Portrait"
              fill
              className="object-cover object-top grayscale contrast-[1.3] brightness-90"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#004643]/20 mix-blend-multiply" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#004643] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#004643] to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
