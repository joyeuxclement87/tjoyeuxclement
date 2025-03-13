import { FaGithub, FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Heart, Coffee, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const socialLinks = [
  { 
    name: "Behance",
    icon: FaBehance,
    url: "https://www.behance.net/joyeuxclement",
    color: "hover:bg-[#1769ff]"
  },
  { 
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/joyeuxclement87",
    color: "hover:bg-[#333]"
  },
  { 
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/tuyishimire-joyeux-clement-32418528a/",
    color: "hover:bg-[#0077b5]"
  },
  { 
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/capricon_gboy/",
    color: "hover:bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32">
      {/* Social Links Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex items-center justify-center gap-3 py-6 md:py-8
                border-r border-b border-white/10 
                ${index % 2 === 1 ? 'border-r-0' : ''} 
                ${index >= socialLinks.length - 2 ? 'border-b-0' : ''}
                md:last:border-r-0 md:[&:nth-child(-n+2)]:border-b
                ${social.color} transition-all duration-500`}
            >
              <social.icon size={20} className="text-white/60 group-hover:text-white 
                transition-colors duration-500" />
              <span className="text-xs md:text-sm font-medium text-white/60 group-hover:text-white 
                transition-colors duration-500">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Fun Stats & Copyright */}
      <div className="border-t border-white/10 mt-12">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
            >
              {[
                { icon: Coffee, text: "Powered by coffee", color: "text-primary" },
                { icon: Heart, text: "Made with love", color: "text-red-500" },
                { icon: Sparkle, text: "and a bit of magic", color: "text-yellow-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2 
                  text-white/60 text-xs md:text-sm p-4 bg-white/5 border border-white/10">
                  <item.icon className={item.color} weight="fill" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 
                px-4 py-3 bg-white/5 border border-white/10">
                <span className="text-white/40 text-xs md:text-sm">© {currentYear}</span>
                <span className="text-white/60 text-xs md:text-sm text-center">
                  Built by TJCLEMENT while jamming to music 🎵
                </span>
              </div>
              <p className="text-white/30 text-xs">
                All bugs are features in disguise ✨
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
