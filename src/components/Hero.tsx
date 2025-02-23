import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          {/* Title Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="greeting-text">
                <span className="greeting-line" />
                Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] font-display"
            >
              Hi, I'm <span className="text-gradient">Tuyishimire Joyeux Clement</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-zinc-400 max-w-xl leading-relaxed"
            >
              A Graphic Designer specializing in brand identity design and visual storytelling, 
              with expertise in creating engaging digital experiences
            </motion.p>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#contact" className="hero-button">
              Let's work together
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
          className="relative w-64 h-64 lg:w-[450px] lg:h-[450px]"
        >
          <div className="glass-card relative h-full w-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Tuyishimire Joyeux Clement"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
