import { ArrowRight, Download } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex items-center py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 
                hover:border-white/20 transition-all duration-300"
            >
              <span className="status-indicator" />
              <span className="text-sm text-white/70">Available for freelance work</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative space-y-4"
            >
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <h1 className="relative text-5xl md:text-7xl font-bold font-display leading-tight">
                Creative
                <span className="text-gradient"> Designer</span>
                <br />& Developer
              </h1>
              <p className="relative text-lg md:text-xl text-white/60 max-w-lg">
                Transforming ideas into extraordinary digital experiences through 
                innovative design and development solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a href="#contact" className="hero-button group">
                Let's talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 md:gap-8 pt-6"
            >
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "30+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-xl space-y-1 hover:bg-white/5 transition-colors">
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-gradient">
                    {stat.number}
                  </h3>
                  <p className="text-xs md:text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              {/* Main Image */}
              <Image
                src="/hero-image.jpg"
                alt="Hero Image"
                fill
                className="object-cover z-10"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Subtle Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 
                mix-blend-overlay z-20" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 
                to-transparent opacity-40 z-30" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl z-0"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
