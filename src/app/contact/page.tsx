'use client';

import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowLeftIcon, PaperAirplaneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import BoundingBox from '@/components/BoundingBox';
import Navigation from '@/components/Navigation';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xpqkkaoa");

  if (state.succeeded) {
    return (
      <main className="min-h-screen text-[#f0ede5] selection:bg-[#f5b915] selection:text-[#001a18] flex flex-col items-center justify-center text-center px-6">
        <div className="background-glow" />
        <Navigation activeSection="contact" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-8 max-w-2xl"
        >
          <div className="w-20 h-20 bg-[#f5b915]/10 rounded-full flex items-center justify-center mx-auto text-[#f5b915]">
            <CheckCircleIcon className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display">Message Sent!</h1>
          <p className="text-xl md:text-2xl text-[#f0ede5]/60 font-light leading-relaxed">
            Thank you for reaching out. I've received your message and will get back to you as soon as possible.
          </p>
          <div className="pt-8">
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500"
            >
              Send Another Message
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

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
          <p className="text-xl md:text-2xl text-[#f0ede5]/80 font-light leading-relaxed">
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
              <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Socials</p>
              <div className="space-y-3">
                <a href="https://instagram.com/joyeuxclement87" target="_blank" rel="noopener noreferrer" className="block text-lg text-[#f0ede5]/80 hover:text-[#f5b915] transition-colors uppercase tracking-widest font-bold text-xs">Instagram</a>
                <a href="https://www.linkedin.com/in/tuyishimire-joyeux-clement-32418528a/" target="_blank" rel="noopener noreferrer" className="block text-lg text-[#f0ede5]/80 hover:text-[#f5b915] transition-colors uppercase tracking-widest font-bold text-xs">LinkedIn</a>
                <a href="https://behance.net/joyeuxclement" target="_blank" rel="noopener noreferrer" className="block text-lg text-[#f0ede5]/80 hover:text-[#f5b915] transition-colors uppercase tracking-widest font-bold text-xs">Behance</a>
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
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#004643]/50 border border-white/10 rounded-full px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Email</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#004643]/50 border border-white/10 rounded-full px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 transition-all"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 ml-4" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#004643]/50 border border-white/10 rounded-3xl px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 transition-all resize-none"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 ml-4" />
              </div>

              {state.errors && (state.errors as any).length > 0 && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-xs text-center mb-6">
                  Something went wrong. Please check the form and try again.
                </div>
              )}

              <div className="pt-4 flex justify-end">
                <button 
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] group relative overflow-hidden disabled:opacity-50"
                >
                  <span className="relative z-10">{state.submitting ? "Sending..." : "Send Message"}</span>
                  <PaperAirplaneIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#f0ede5]/10 py-8">
         <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold text-center">
            © {new Date().getFullYear()} T,joyeux clement. All Rights Reserved.
         </p>
      </footer>
    </main>
  );
}
