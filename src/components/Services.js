import { motion } from 'framer-motion';
import { FiMonitor, FiLayout, FiCode, FiPenTool, FiFeather, FiShare2 } from 'react-icons/fi';

function Services() {
  const services = [
    {
      icon: <FiLayout size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences with modern design principles",
      highlight: "50+ Designs Delivered"
    },
    {
      icon: <FiCode size={24} />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies",
      highlight: "30+ Websites Built"
    },
    {
      icon: <FiFeather size={24} />,
      title: "Graphics Design",
      description: "Creating stunning visual designs and illustrations for digital and print media",
      highlight: "100+ Designs Created"
    },
    {
      icon: <FiPenTool size={24} />,
      title: "Brand Identity",
      description: "Crafting unique and memorable brand identities that stand out",
      highlight: "25+ Brands Created"
    },
    {
      icon: <FiMonitor size={24} />,
      title: "Web Design",
      description: "Designing beautiful and functional websites that convert",
      highlight: "40+ Sites Designed"
    },
    {
      icon: <FiShare2 size={24} />,
      title: "Social Media Management",
      description: "Strategic social media planning, content creation, and community engagement",
      highlight: "20+ Brands Managed"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-medium mb-4 block">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">My Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto" />
        </motion.div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-alt/50 backdrop-blur-lg rounded-xl p-6 
                       border border-blue-500/10 hover:border-blue-500/30 
                       transition-all duration-300 group"
            >
              <div className="p-4 bg-blue-500/10 rounded-lg w-fit mb-4 
                           group-hover:bg-blue-500/20 transition-colors">
                <span className="text-blue-400">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <div className="pt-4 border-t border-blue-500/10">
                <span className="text-blue-400 text-sm font-medium">
                  {service.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
