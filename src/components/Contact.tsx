import { motion } from "framer-motion";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            <span className="text-primary">&lt;/</span>
            Let's Connect
            <span className="text-primary">&gt;</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to start a conversation? Reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg prose-invert">
              <p>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll do my best 
                to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: EnvelopeSimple,
                  label: "Email",
                  value: "joyeuxclement87@gmail.com",
                  href: "mailto:joyeuxclement87@gmail.com"
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+250 790 478 265",
                  href: "tel:+250790478265"
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Kigali, Rwanda",
                  href: "#"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-4 glass-card">
                    <item.icon className="w-6 h-6 text-primary" weight="light" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="text-white group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="glass-card p-4 bg-transparent outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="glass-card p-4 bg-transparent outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="glass-card p-4 w-full bg-transparent outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="glass-card p-4 w-full bg-transparent outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="hero-button w-full justify-center"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
