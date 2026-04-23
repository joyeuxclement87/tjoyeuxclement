import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import BoundingBox from "./BoundingBox";

export default function Contact() {
  const [state, handleSubmit] = useForm("xpqkkaoa"); // Placeholder ID - user should replace this

  if (state.succeeded) {
    return (
      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center space-y-8">
          <div className="flex items-center justify-center mb-6">
            <BoundingBox className="text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase">
              Success
            </BoundingBox>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-display text-[#f0ede5]">Message Sent!</h3>
          <p className="text-[#f0ede5]/80 text-xl font-light">Thanks for reaching out. I'll get back to you as soon as possible.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-[#f5b915] uppercase tracking-widest text-xs font-bold hover:underline"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center">
                <BoundingBox className="text-[#f5b915] px-4 py-1 text-sm font-bold tracking-widest uppercase">
                  Contact
                </BoundingBox>
              </div>
              <h3 className="text-5xl md:text-7xl font-bold font-display text-[#f0ede5] tracking-tight leading-none">
                Let’s build <br /> something <span className="text-[#f5b915]">great.</span>
              </h3>
              <p className="text-[#f0ede5]/80 text-xl font-light max-w-md leading-relaxed">
                I’m currently available for freelance projects and collaborations. If you have an idea, let's talk.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-[#f0ede5]/10">
              <div className="space-y-2">
                <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Email me at</p>
                <a href="mailto:joyeuxclement87@gmail.com" className="text-2xl text-[#f0ede5] hover:text-[#f5b915] transition-colors font-display tracking-tight">
                  joyeuxclement87@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-[#f0ede5]/50 text-[10px] uppercase tracking-[0.3em] font-bold">Socials</p>
                <div className="flex gap-6">
                  <a href="https://instagram.com/joyeuxclement87" target="_blank" rel="noopener noreferrer" className="text-[#f0ede5] hover:text-[#f5b915] transition-colors text-sm uppercase tracking-widest font-bold">Instagram</a>
                  <a href="https://behance.net/joyeuxclement" target="_blank" rel="noopener noreferrer" className="text-[#f0ede5] hover:text-[#f5b915] transition-colors text-sm uppercase tracking-widest font-bold">Behance</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#f0ede5]/50 px-1">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#004643] border border-white/10 rounded-xl px-4 py-4 text-[#f0ede5] focus:outline-none focus:border-[#f5b915]/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#f0ede5]/50 px-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#004643] border border-white/10 rounded-xl px-4 py-4 text-[#f0ede5] focus:outline-none focus:border-[#f5b915]/50 transition-colors"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#f0ede5]/50 px-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-[#004643] border border-white/10 rounded-xl px-4 py-4 text-[#f0ede5] focus:outline-none focus:border-[#f5b915]/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              {state.errors && (state.errors as any).length > 0 && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-xs text-center mb-6">
                  Something went wrong. Please check the form and try again.
                </div>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-5 bg-[#f5b915] text-[#004643] font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(245,185,21,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
