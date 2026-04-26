import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import BoundingBox from "./BoundingBox";

/* ─── Floating accent orbs (replace tiny particles with rich blurred shapes) ─── */
const orbs = [
  { color: "#f5b915", top: "10%", left: "5%",  size: 320, blur: 120, duration: 18, delay: 0 },
  { color: "#004643", top: "60%", left: "20%", size: 400, blur: 160, duration: 22, delay: 3 },
  { color: "#f5b915", top: "30%", left: "55%", size: 260, blur: 100, duration: 16, delay: 6 },
  { color: "#f0ede5", top: "75%", left: "70%", size: 350, blur: 140, duration: 20, delay: 2 },
];

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
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imgX = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#004643] overflow-hidden flex items-center"
    >
      {/* ─── Noise texture ─── */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── Vignette ─── */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,25,23,0.5)_100%)]" />

      {/* ─── Floating gradient orbs ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: orb.top,
              left: orb.left,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.color}30 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>

      {/* ─── Soft radial glow behind text ─── */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{ y: y2, background: "radial-gradient(circle, #f0ede5 0%, transparent 60%)" }}
      />

      {/* ═══════════════════════════════════════════════════
          DESKTOP IMAGE — cinematic reveal with ken-burns
          ═══════════════════════════════════════════════════ */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0">
        <motion.div
          style={{ y: y1, scale, x: imgX }}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: stagger.image.duration, delay: stagger.image.delay, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/hero-image.png"
            alt="Dramatic Portrait"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          {/* Moody color overlay */}
          <div className="absolute inset-0 bg-[#004643]/15 mix-blend-multiply" />

          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#004643] via-[#004643]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#004643] via-[#004643]/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#004643] via-[#004643]/25 to-transparent" />

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
      <div className="max-w-7xl mx-auto px-4 lg:px-16 w-full relative z-30 pt-32 pb-12 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ─── Left Column ─── */}
          <motion.div
            style={{ opacity }}
            className="space-y-6 pr-0 lg:pr-12 relative"
          >
            {/* Badge / Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: stagger.badge.delay, duration: stagger.badge.duration, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#f0ede5]/15 bg-[#f0ede5]/5 backdrop-blur-md relative z-10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5b915] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f5b915]" />
              </span>
              <p className="text-xs md:text-sm text-[#f0ede5]/90 uppercase tracking-[0.2em] font-bold">
                Hello! I&apos;m T. Joyeux Clement
              </p>
            </motion.div>

            {/* Main Heading — word-by-word reveal */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: stagger.heading.delay, duration: 0.01 }}
              className="text-[3.2rem] leading-[1] md:text-6xl lg:text-[6rem] md:leading-[1.05] font-bold font-display text-[#f0ede5] tracking-tighter relative z-10 py-2"
            >
              <span className="overflow-hidden inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: stagger.heading.delay, duration: stagger.heading.duration, ease: [0.22, 1, 0.36, 1] }}
                >
                  Designing
                </motion.span>
              </span>{" "}
              <span className="overflow-hidden inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: stagger.heading.delay + 0.1, duration: stagger.heading.duration, ease: [0.22, 1, 0.36, 1] }}
                >
                  ideas
                </motion.span>
              </span>
              <br className="hidden lg:block" />{" "}
              <span className="overflow-hidden inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: stagger.heading.delay + 0.2, duration: stagger.heading.duration, ease: [0.22, 1, 0.36, 1] }}
                >
                  into
                </motion.span>
              </span>{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: stagger.heading.delay + 0.4, duration: 0.6, ease: "easeOut" }}
              >
                <BoundingBox className="text-[#f5b915] px-5 py-2 mx-1 mt-2 lg:mt-0">
                  visuals.
                </BoundingBox>
              </motion.span>
            </motion.h1>

            {/* ─── Animated discipline marquee ─── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: stagger.marquee.delay, duration: stagger.marquee.duration }}
              className="relative z-10 overflow-hidden py-4 max-w-md"
            >
              <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {[...disciplines, ...disciplines].map((d, i) => (
                  <span
                    key={i}
                    className="text-sm text-[#f0ede5]/50 uppercase tracking-[0.15em] font-medium flex items-center gap-3 shrink-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5b915]/60" />
                    {d}
                  </span>
                ))}
              </div>
              {/* Fade edges */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#004643] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#004643] to-transparent z-10 pointer-events-none" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stagger.cta.delay, duration: stagger.cta.duration }}
              className="flex flex-col sm:flex-row items-center gap-5 pt-4 relative z-10"
            >
              <a
                href="/work"
                className="group w-full sm:w-auto px-8 py-4 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] flex items-center justify-center gap-3 relative overflow-hidden"
              >
                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative z-10">View Work</span>
                <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="/contact"
                className="group w-full sm:w-auto px-8 py-4 border border-[#f0ede5]/20 text-[#f0ede5] hover:border-[#f5b915]/50 hover:bg-[#f5b915]/5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3 backdrop-blur-sm"
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
            className="relative h-[45vh] w-full lg:hidden mt-4 z-0 rounded-3xl overflow-hidden"
          >
            <Image
              src="/hero-image.png"
              alt="Dramatic Portrait"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#004643]/15 mix-blend-multiply" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#004643] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#004643] to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
