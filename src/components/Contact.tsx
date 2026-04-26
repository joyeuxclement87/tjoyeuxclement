import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import BoundingBox from "./BoundingBox";

export default function Contact() {
  const [state, handleSubmit] = useForm("xpqkkaoa"); // Placeholder ID - user should replace this

  if (state.succeeded) {
    return (
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center mb-6">
              <BoundingBox className="text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase">
                Success
              </BoundingBox>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold font-display text-[#f0ede5]">Message Sent!</h3>
            <p className="text-[#f0ede5]/80 text-xl font-light">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="text-[#f5b915] uppercase tracking-widest text-xs font-bold hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* ─── Floating accent orbs ─── */}
      <motion.div
        className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(245,185,21,0.06) 0%, transparent 70%)", filter: "blur(80px)" }}
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(0,70,67,0.15) 0%, transparent 70%)", filter: "blur(100px)" }}
        animate={{ y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center">
                <BoundingBox className="text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase">
                  Contact
                </BoundingBox>
              </div>
              <div className="overflow-hidden">
                <motion.h3
                  className="text-5xl md:text-7xl font-bold font-display text-[#f0ede5] tracking-tight leading-none"
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Let&apos;s build <br /> something <span className="text-[#f5b915]">great.</span>
                </motion.h3>
              </div>
              <motion.p
                className="text-[#f0ede5]/80 text-xl font-light max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I&apos;m currently available for freelance projects and collaborations. If you have an idea, let&apos;s talk.
              </motion.p>
            </div>

            <motion.div
              className="space-y-8 pt-8 border-t border-[#f0ede5]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="space-y-2 group">
                <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Email me at</p>
                <a href="mailto:joyeuxclement87@gmail.com" className="text-2xl text-[#f0ede5] hover:text-[#f5b915] transition-all duration-300 font-display tracking-tight inline-block group-hover:translate-x-1">
                  joyeuxclement87@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Socials</p>
                <div className="flex gap-6">
                  {[
                    { name: "Instagram", url: "https://instagram.com/joyeuxclement87" },
                    { name: "Behance", url: "https://behance.net/joyeuxclement" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f0ede5] hover:text-[#f5b915] transition-all duration-300 text-sm uppercase tracking-widest font-bold hover:translate-x-0.5 inline-block"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 hover:border-white/15 transition-colors duration-500 relative overflow-hidden group/form">
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5b915]/0 to-[#f5b915]/0 group-hover/form:from-[#f5b915]/[0.02] group-hover/form:to-transparent transition-all duration-700 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="full-name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#f0ede5]/50 px-1">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#004643] border border-white/10 rounded-xl px-4 py-4 text-[#f0ede5] focus:outline-none focus:border-[#f5b915]/50 focus:shadow-[0_0_20px_rgba(245,185,21,0.1)] transition-all duration-300"
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#f0ede5]/50 px-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#004643] border border-white/10 rounded-xl px-4 py-4 text-[#f0ede5] focus:outline-none focus:border-[#f5b915]/50 focus:shadow-[0_0_20px_rgba(245,185,21,0.1)] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </motion.div>
              </div>

              <motion.div
                className="space-y-2 relative z-10"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#f0ede5]/50 px-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-[#004643] border border-white/10 rounded-xl px-4 py-4 text-[#f0ede5] focus:outline-none focus:border-[#f5b915]/50 focus:shadow-[0_0_20px_rgba(245,185,21,0.1)] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </motion.div>

              {state.errors && (state.errors as any).length > 0 && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-xs text-center mb-6 relative z-10">
                  Something went wrong. Please check the form and try again.
                </div>
              )}

              <div className="relative z-10">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group w-full py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(245,185,21,0.2)] hover:shadow-[0_15px_40px_rgba(245,185,21,0.3)] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  {/* Shine sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  <span className="relative z-10">{state.submitting ? "Sending..." : "Send Message"}</span>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
