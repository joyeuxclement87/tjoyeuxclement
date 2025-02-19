import { motion } from 'framer-motion';

export function Section({ children, className = '' }) {
  return (
    <section className={`relative min-h-screen py-24 bg-gradient-to-b from-navy-900 to-navy-950 
                        font-body ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-coral/5 via-transparent to-transparent opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`text-5xl md:text-6xl font-display tracking-wider uppercase 
                   bg-gradient-to-r from-coral to-electric-blue bg-clip-text 
                   text-transparent ${className}`}>
      {children}
    </h2>
  );
}

export function Card({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-navy-800/20 backdrop-blur-sm border border-mint-100/10 
                 rounded-2xl overflow-hidden transition-all duration-300 
                 hover:border-coral/30 ${className}`}
    >
      {children}
    </motion.div>
  );
}
