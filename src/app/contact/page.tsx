'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import BoundingBox from '@/components/BoundingBox';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function ContactPage() {
  return (
    <main className="min-h-screen text-[#f0ede5] selection:bg-[#f5b915] selection:text-[#001a18]">
      <div className="background-glow" />
      <Navigation activeSection="contact" />

      {/* Header */}
      <section className="pt-44 pb-12 px-6 lg:px-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BoundingBox className="text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase">
              Get In Touch
            </BoundingBox>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-8">Say Hello.</h1>
          <p className="text-xl md:text-2xl text-[#f0ede5]/60 font-light leading-relaxed">
            I'm currently available for freelance work and exciting collaborations. Let's build something great together.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-6 lg:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          
          {/* Direct Contacts Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-1 space-y-12 lg:pt-8"
          >
            <div className="space-y-3">
              <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Email</p>
              <a href="mailto:joyeuxclement87@gmail.com" className="block text-xl md:text-2xl text-[#f0ede5] hover:text-[#f5b915] transition-colors font-display tracking-tight">
                joyeuxclement87@gmail.com
              </a>
            </div>
            
            <div className="space-y-3">
              <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Phone / WhatsApp</p>
              <a href="tel:+250780000000" className="block text-xl md:text-2xl text-[#f0ede5] hover:text-[#f5b915] transition-colors font-display tracking-tight">
                +250 780 000 000
              </a>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#f0ede5]/10">
              <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Socials</p>
              <div className="space-y-3">
                <a href="https://instagram.com/joyeuxclement87" target="_blank" rel="noopener noreferrer" className="block text-lg text-[#f0ede5]/80 hover:text-[#f5b915] transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/in/tuyishimire-joyeux-clement-32418528a/" target="_blank" rel="noopener noreferrer" className="block text-lg text-[#f0ede5]/80 hover:text-[#f5b915] transition-colors">LinkedIn</a>
                <a href="https://twitter.com/joyeuxclement87" target="_blank" rel="noopener noreferrer" className="block text-lg text-[#f0ede5]/80 hover:text-[#f5b915] transition-colors">Twitter</a>
                <a href="https://dribbble.com/joyeuxclement" target="_blank" rel="noopener noreferrer" className="block text-lg text-[#f0ede5]/80 hover:text-[#f5b915] transition-colors">Dribbble</a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#004643]/50 border border-white/10 rounded-full px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 focus:ring-1 focus:ring-[#f5b915]/50 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#004643]/50 border border-white/10 rounded-full px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 focus:ring-1 focus:ring-[#f5b915]/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-[#004643]/50 border border-white/10 rounded-full px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 focus:ring-1 focus:ring-[#f5b915]/50 transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#004643]/50 border border-white/10 rounded-3xl px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 focus:ring-1 focus:ring-[#f5b915]/50 transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end">
                <button 
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] group relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <PaperAirplaneIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer is not needed here as it would be redundant, we can just add a simple bottom bar */}
      <footer className="border-t border-[#f0ede5]/10 py-8">
         <p className="text-[#f0ede5]/30 text-[10px] uppercase tracking-[0.3em] font-bold text-center">
            © {new Date().getFullYear()} T,joyeux clement. All Rights Reserved.
         </p>
      </footer>
    </main>
  );
}
