'use client';

import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import { PaperAirplaneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import BoundingBox from '@/components/ui/BoundingBox';
import Navigation from '@/layout/Navigation';
import FloatingActions from '@/components/ui/FloatingActions';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xpqkkaoa");

  if (state.succeeded) {
    return (
      <main className="min-h-screen text-[#f0ede5] selection:bg-[#f5b915] selection:text-[#001a18] flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(160deg, #001209 0%, #000e0d 50%, #001a18 100%)" }}>
        <div className="background-glow" />
        <Navigation activeSection="contact" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          className="space-y-8 max-w-2xl"
        >
          <motion.div
            className="w-20 h-20 bg-[#f5b915]/10 rounded-full flex items-center justify-center mx-auto text-[#f5b915]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircleIcon className="w-12 h-12" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold font-display">Message Sent!</h1>
          <p className="text-xl md:text-2xl text-[#f0ede5]/60 font-light leading-relaxed">
            Thank you for reaching out. I&apos;ve received your message and will get back to you as soon as possible.
          </p>
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button 
              onClick={() => window.location.reload()}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <span className="relative z-10">Send Another Message</span>
            </button>
          </motion.div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-[#f0ede5] selection:bg-[#f5b915] selection:text-[#001a18]" style={{ background: "linear-gradient(160deg, #001209 0%, #000e0d 50%, #001a18 100%)" }}>
      <div className="background-glow" />
      <Navigation activeSection="contact" />

      {/* ─── Floating accent orbs ─── */}
      <motion.div
        className="fixed top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(245,185,21,0.04) 0%, transparent 70%)", filter: "blur(80px)" }}
        animate={{ y: [0, -35, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed bottom-[10%] left-[-5%] w-[350px] h-[350px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,70,67,0.12) 0%, transparent 70%)", filter: "blur(100px)" }}
        animate={{ y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Header */}
      <section className="pt-44 pb-12 px-6 lg:px-10 max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#f5b915]/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">Get In Touch</span>
            <span className="h-px w-10 bg-[#f5b915]/40" />
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl font-bold font-display tracking-tighter leading-[0.95] mb-8"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Say{" "}
              <span className="text-[#f5b915]">
                Hello.
              </span>
            </motion.h1>
          </div>
          <motion.p
            className="text-xl md:text-2xl text-[#f0ede5]/80 font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            I&apos;m currently available for freelance work and exciting collaborations. Let&apos;s build something great together.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-6 lg:px-10 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          
          {/* Direct Contacts Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-1 space-y-12 lg:pt-8"
          >
            <div className="space-y-3 group">
              <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Email</p>
              <a href="mailto:joyeuxclement87@gmail.com" className="block text-xl md:text-2xl text-[#f0ede5] hover:text-[#f5b915] transition-all duration-300 font-display tracking-tight group-hover:translate-x-1">
                joyeuxclement87@gmail.com
              </a>
            </div>
            
            <div className="space-y-3">
              <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Socials</p>
              <div className="space-y-3">
                {[
                  { name: "Instagram", url: "https://instagram.com/joyeuxclement87" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/tuyishimire-joyeux-clement-32418528a/" },
                  { name: "Behance", url: "https://behance.net/joyeuxclement" },
                ].map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-[#f0ede5]/80 hover:text-[#f5b915] transition-all duration-300 uppercase tracking-widest font-bold hover:translate-x-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/15 transition-colors duration-500 relative overflow-hidden group/form"
          >
            {/* Subtle hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5b915]/0 to-[#f5b915]/0 group-hover/form:from-[#f5b915]/[0.02] group-hover/form:to-transparent transition-all duration-700 pointer-events-none" />

            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <label htmlFor="name" className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#004643]/50 border border-white/10 rounded-full px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 focus:shadow-[0_0_20px_rgba(245,185,21,0.1)] transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="email" className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Email</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#004643]/50 border border-white/10 rounded-full px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 focus:shadow-[0_0_20px_rgba(245,185,21,0.1)] transition-all duration-300"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 ml-4" />
                </motion.div>
              </div>
              
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <label htmlFor="message" className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#004643]/50 border border-white/10 rounded-3xl px-6 py-4 text-[#f0ede5] placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/50 focus:shadow-[0_0_20px_rgba(245,185,21,0.1)] transition-all duration-300 resize-none"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 ml-4" />
              </motion.div>

              {state.errors && (state.errors as any).length > 0 && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-xs text-center mb-6">
                  Something went wrong. Please check the form and try again.
                </div>
              )}

              <motion.div
                className="pt-4 flex justify-end"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button 
                  type="submit"
                  disabled={state.submitting}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(245,185,21,0.2)] hover:shadow-[0_0_60px_rgba(245,185,21,0.4)] relative overflow-hidden disabled:opacity-50"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  <span className="relative z-10">{state.submitting ? "Sending..." : "Send Message"}</span>
                  <PaperAirplaneIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      <FloatingActions show={true} />

      <footer className="border-t border-[#f0ede5]/10 py-8 relative z-10">
         <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold text-center">
            © {new Date().getFullYear()} T,joyeux clement. All Rights Reserved.
         </p>
      </footer>
    </main>
  );
}
