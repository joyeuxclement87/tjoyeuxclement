import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

import { FaWhatsapp } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-950 overflow-hidden"> {/* Added id="contact" */}
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 translate-x-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Let's Create Something Amazing
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-500/10 rounded-lg">
                    <FiMail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:contact@clement.com" 
                       className="text-gray-200 hover:text-blue-400 transition-colors">
                      contact@clement.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-500/10 rounded-lg">
                    <FaWhatsapp className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">WhatsApp</p>
                    <a href="https://wa.me/YOUR_NUMBER" 
                       className="text-gray-200 hover:text-blue-400 transition-colors">
                      +250 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-500/10 rounded-lg">
                    <FiMapPin className="text-blue-400 hover:text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-gray-200">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
              {/* Updated Availability Schedule */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-gray-200 font-medium mb-4">Availability Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-blue-400 font-medium">24hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-blue-400 font-medium">24hrs</span>
                  </div>
                  <div className="px-4 py-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-green-400 text-sm">Currently Available</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">
                      Average response time: ~2 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-gray-400 mb-2 text-sm" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background-alt/50 border border-blue-500/20 
                             rounded-lg focus:outline-none focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-500/20 text-gray-200
                             placeholder-gray-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-gray-400 mb-2 text-sm" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background-alt/50 border border-blue-500/20 
                             rounded-lg focus:outline-none focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-500/20 text-gray-200
                             placeholder-gray-500 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-gray-400 mb-2 text-sm" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-background-alt/50 border border-blue-500/20 
                           rounded-lg focus:outline-none focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-500/20 text-gray-200
                           placeholder-gray-500 transition-colors"
                  placeholder="Project Discussion"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-400 mb-2 text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-background-alt/50 border border-blue-500/20 
                           rounded-lg focus:outline-none focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-500/20 text-gray-200
                           placeholder-gray-500 transition-colors resize-none"
                  placeholder="Your message here..."
                  required
                />
              </motion.div>

              {/* Updated Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500
                         text-white rounded-lg font-medium shadow-lg shadow-blue-500/25
                         hover:shadow-blue-500/40 transition-all flex items-center 
                         justify-center gap-2 border border-blue-500/20"
              >
                <FiSend className="text-lg" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;