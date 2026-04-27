'use client';

import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowRightIcon, CheckCircleIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [state, handleSubmit] = useForm("xpqkkaoa");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative py-40 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #001a18 0%, #000e0d 50%, #001209 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(0,70,67,0.2) 0%, transparent 70%)", filter: "blur(80px)" }} />
          <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(245,185,21,0.05) 0%, transparent 70%)", filter: "blur(100px)" }} />
        </div>
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10 space-y-8">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto rounded-full bg-[#f5b915]/10 border border-[#f5b915]/20 flex items-center justify-center">
            <CheckCircleIcon className="w-10 h-10 text-[#f5b915]" />
          </motion.div>
          <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-display text-[#f0ede5]">
            Message Sent!
          </motion.h3>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="text-[#f0ede5]/60 text-lg font-light">
            Thanks for reaching out. I&apos;ll get back to you as soon as possible.
          </motion.p>
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            onClick={() => window.location.reload()}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <span className="relative z-10">Send Another</span>
          </motion.button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #001a18 0%, #000e0d 55%, #001209 100%)" }}
    >
      {/* ── Background gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-5%] left-[5%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,70,67,0.18) 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[0%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,185,21,0.06) 0%, transparent 70%)", filter: "blur(120px)" }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(#f0ede5 1px, transparent 1px), linear-gradient(90deg, #f0ede5 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#f5b915]/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#f5b915]/70 font-bold">Let&apos;s Connect</span>
            <span className="h-px w-10 bg-[#f5b915]/40" />
          </div>
          <div className="overflow-hidden">
            <motion.h3
              className="text-5xl sm:text-6xl md:text-8xl font-bold font-display text-[#f0ede5] tracking-tighter leading-[0.95]"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Let&apos;s build{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(245,185,21,0.6)" }}>
                something
              </span>
              <br />
              <span className="text-[#f5b915]">great.</span>
            </motion.h3>
          </div>
          <motion.p
            className="text-[#f0ede5]/50 text-lg font-light max-w-lg mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I&apos;m currently available for freelance projects and collaborations. If you have an idea, let&apos;s talk.
          </motion.p>
        </motion.div>

        {/* ── Two columns: Info + Form ── */}
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">

          {/* Left: Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-10"
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Email block */}
            <div className="group space-y-2 p-6 rounded-2xl border border-[#f0ede5]/5 bg-[#f0ede5]/[0.02] hover:border-[#f5b915]/20 hover:bg-[#f5b915]/[0.02] transition-all duration-500">
              <div className="flex items-center gap-2 mb-3">
                <EnvelopeIcon className="w-4 h-4 text-[#f5b915]" />
                <p className="text-[#f0ede5]/40 text-[9px] uppercase tracking-[0.35em] font-bold">Email</p>
              </div>
              <a
                href="mailto:joyeuxclement87@gmail.com"
                className="text-lg md:text-xl text-[#f0ede5] hover:text-[#f5b915] transition-all duration-300 font-display tracking-tight inline-block group-hover:translate-x-1"
              >
                joyeuxclement87@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <p className="text-[#f0ede5]/30 text-[9px] uppercase tracking-[0.35em] font-bold">Socials</p>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Instagram", url: "https://instagram.com/joyeuxclement87" },
                  { name: "Behance",   url: "https://behance.net/joyeuxclement" },
                  { name: "LinkedIn",  url: "https://www.linkedin.com/in/tuyishimire-joyeux-clement-32418528a/" },
                ].map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-[#f0ede5]/50 hover:text-[#f5b915] transition-all duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold">{s.name}</span>
                    <ArrowRightIcon className="w-3 h-3 opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-[#f5b915]/20 bg-[#f5b915]/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5b915] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f5b915]" />
              </span>
              <span className="text-[10px] text-[#f5b915]/80 uppercase tracking-[0.2em] font-bold">Available for projects</span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 relative overflow-hidden rounded-3xl border border-[#f0ede5]/8 p-8 md:p-10"
              style={{ background: "linear-gradient(135deg, rgba(240,237,229,0.03) 0%, rgba(0,70,67,0.08) 100%)" }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#f5b915]/20 rounded-tl-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#f5b915]/20 rounded-br-3xl pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#f0ede5]/35">Full Name</label>
                  <input
                    id="full-name" type="text" name="name" required placeholder="John Doe"
                    className="w-full bg-[#f0ede5]/3 border border-[#f0ede5]/10 rounded-xl px-4 py-3.5 text-[#f0ede5] text-sm placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/40 focus:bg-[#f5b915]/3 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email-contact" className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#f0ede5]/35">Email</label>
                  <input
                    id="email-contact" type="email" name="email" required placeholder="john@example.com"
                    className="w-full bg-[#f0ede5]/3 border border-[#f0ede5]/10 rounded-xl px-4 py-3.5 text-[#f0ede5] text-sm placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/40 focus:bg-[#f5b915]/3 transition-all duration-300"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message-contact" className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#f0ede5]/35">Message</label>
                <textarea
                  id="message-contact" name="message" required rows={5} placeholder="Tell me about your project..."
                  className="w-full bg-[#f0ede5]/3 border border-[#f0ede5]/10 rounded-xl px-4 py-3.5 text-[#f0ede5] text-sm placeholder:text-[#f0ede5]/20 focus:outline-none focus:border-[#f5b915]/40 focus:bg-[#f5b915]/3 transition-all duration-300 resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              {state.errors && (state.errors as any).length > 0 && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-center">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="group w-full py-4 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_40px_rgba(245,185,21,0.15)] hover:shadow-[0_10px_60px_rgba(245,185,21,0.3)] disabled:opacity-50 relative overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative z-10">{state.submitting ? "Sending…" : "Send Message"}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
