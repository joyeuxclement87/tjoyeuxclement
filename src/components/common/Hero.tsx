import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import BoundingBox from "@/components/ui/BoundingBox";

/* ─── Floating accent orbs matched to other sections ─── */

/* ─── Discipline items that scroll horizontally ─── */
const disciplines = [
  "Brand Identity",
  "Visual Design",
  "Web Design",
  "Print Design",
  "UI/UX",
  "Typography",
  "Illustration",
  "Motion Graphics",
];

/* ─── Stagger orchestrator ─── */
const stagger = {
  badge:   { delay: 0.2, duration: 0.7 },
  heading: { delay: 0.4, duration: 0.8 },
  sub:     { delay: 0.7, duration: 0.6 },
  cta:     { delay: 0.9, duration: 0.7 },
  marquee: { delay: 1.1, duration: 0.8 },
  image:   { delay: 0.3, duration: 1.4 },
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imgX = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "linear-gradient(160deg, #001209 0%, #000e0d 50%, #001a18 100%)" }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10" style={{
        backgroundImage: "linear-gradient(#f0ede5 1px, transparent 1px), linear-gradient(90deg, #f0ede5 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      {/* ─── Vignette ─── */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,18,9,0.7)_100%)]" />

      {/* ─── Floating accent orbs ─── */}
      <div
        className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(245,185,21,0.05) 0%, transparent 70%)", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(0,70,67,0.15) 0%, transparent 70%)", filter: "blur(120px)" }}
      />



      {/* ═══════════════════════════════════════════════════
          DESKTOP IMAGE — cinematic reveal with ken-burns
          ═══════════════════════════════════════════════════ */}
      <div 
        className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0"
        style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%)", maskImage: "linear-gradient(to right, transparent 0%, black 20%)" }}
      >
        <motion.div
          style={{ y: y1, scale, x: imgX }}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: stagger.image.duration, delay: stagger.image.delay, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {/* Backlight glow behind transparent image */}
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#f5b915]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          <Image
            src="/hero-image.png"
            alt="Dramatic Portrait"
            fill
            className="object-cover object-center relative z-0"
            priority
            sizes="50vw"
          />

          {/* Decorative diagonal line on the image */}
          <motion.div
            className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#f5b915]/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          DECORATIVE VERTICAL LINE + SCROLL INDICATOR (Desktop)
          ═══════════════════════════════════════════════════ */}
      <div className="hidden lg:flex absolute left-8 top-0 bottom-0 z-30 flex-col items-center pointer-events-none">
        <motion.div
          className="w-px flex-1 bg-gradient-to-b from-transparent via-[#f0ede5]/15 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <motion.div
          className="flex flex-col items-center gap-3 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <span className="text-[10px] text-[#f0ede5]/40 uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-[#f5b915]/60"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "bottom" }}
          />
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          MAIN CONTENT
          ═══════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full relative z-30 pt-24 sm:pt-28 lg:pt-20 pb-10 lg:pb-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center justify-center min-h-[calc(100dvh-5rem)] lg:h-screen">
          {/* ─── Left Column ─── */}
          <motion.div
            style={{ opacity }}
            className="space-y-4 lg:space-y-6 pr-0 lg:pr-12 relative"
          >
            {/* Badge / Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: stagger.badge.delay, duration: stagger.badge.duration, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#f0ede5]/15 bg-[#f0ede5]/5 backdrop-blur-md relative z-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5b915] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f5b915]" />
              </span>
              <p className="text-[10px] sm:text-xs text-[#f0ede5]/90 tracking-[0.2em] font-bold">
                Hello! I&apos;m T. Joyeux Clement
              </p>
            </motion.div>

            {/* Main Heading — two line reveal */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: stagger.heading.delay, duration: 0.01 }}
              className="text-[2.1rem] leading-[1.15] xs:text-[2.5rem] sm:text-5xl lg:text-[5.5rem] xl:text-[6rem] lg:leading-[1.1] font-bold font-display text-[#f0ede5] tracking-tighter relative z-10 py-1 lg:py-2"
            >
              {/* Line 1: Designing ideas */}
              <div className="block overflow-hidden pb-1">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: stagger.heading.delay, duration: stagger.heading.duration, ease: [0.22, 1, 0.36, 1] }}
                >
                  Designing ideas
                </motion.div>
              </div>

              {/* Line 2: into visuals. */}
              <div className="block overflow-visible">
                <motion.div
                  className="flex items-center gap-[0.2em]"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: stagger.heading.delay + 0.15, duration: stagger.heading.duration, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>into</span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: stagger.heading.delay + 0.4, duration: 0.6, ease: "easeOut" }}
                    className="inline-flex"
                  >
                    <BoundingBox className="text-[#f5b915] px-3 py-1 lg:px-5 lg:py-2 mx-0 mt-0">
                      visuals.
                    </BoundingBox>
                  </motion.span>
                </motion.div>
              </div>
            </motion.h1>

            {/* ─── Animated discipline marquee ─── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: stagger.marquee.delay, duration: stagger.marquee.duration }}
              className="relative z-10 overflow-hidden py-2 max-w-[280px] sm:max-w-sm md:max-w-md"
            >
              <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {[...disciplines, ...disciplines].map((d, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-xs text-[#f0ede5]/50 uppercase tracking-[0.15em] font-medium flex items-center gap-3 shrink-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5b915]/60" />
                    {d}
                  </span>
                ))}
              </div>
              {/* Fade edges */}
              {/* <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#001209] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#001a18] to-transparent z-10 pointer-events-none" /> */}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stagger.cta.delay, duration: stagger.cta.duration }}
              className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 pt-2 relative z-10"
            >
              <a
                href="/work"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#f5b915] text-[#004643] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] flex items-center justify-center gap-2.5 relative overflow-hidden"
              >
                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative z-10">View Work</span>
                <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="/contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 border border-[#f0ede5]/20 text-[#f0ede5] hover:border-[#f5b915]/50 hover:bg-[#f5b915]/5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2.5 backdrop-blur-sm"
              >
                <span className="relative z-10">Contact</span>
                <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* ─── Mobile Image ─── */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative h-[35vh] sm:h-[42vh] w-full lg:hidden mt-1 z-0 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Glow behind mobile image */}
            <div className="absolute inset-0 bg-[#f5b915]/25 blur-[100px] -z-10" />
            
            <Image
              src="/hero-image.png"
              alt="Dramatic Portrait"
              fill
              className="object-cover object-top relative z-0"
              priority
              sizes="100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
