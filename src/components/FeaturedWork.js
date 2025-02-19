import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight, FiInstagram } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import { useState } from 'react';

function FeaturedWork() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A modern dashboard with real-time analytics and inventory management",
      image: "/projects/learnon.png",
      tech: ["React", "TailwindCSS", "Firebase"],
      liveLink: "#",
      githubLink: "#",
      type: "Featured Project",
      color: "violet"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking experience with biometric authentication",
      image: "/projects/log in.png",
      tech: ["React Native", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      type: "Recent Work",
      color: "violet"
    },
    {
      title: "Design System",
      description: "Comprehensive design system for a major tech company",
      image: "/projects/Safety.jpg",
      tech: ["Figma", "Design Systems", "Documentation"],
      liveLink: "#",
      githubLink: "#",
      type: "UI/UX Design",
      color: "violet",
      behanceLink: "#",
      instagramLink: "#"
    },
    {
      title: "AI Content Platform",
      description: "AI-powered content generation and management platform",
      image: "/projects/ai-platform.jpg",
      tech: ["Next.js", "OpenAI", "Python"],
      liveLink: "#",
      githubLink: "#",
      type: "Full Stack Project",
      color: "violet"
    },
    {
      title: "Health & Fitness App",
      description: "Personalized workout and nutrition tracking application",
      image: "/projects/fitness.jpg",
      tech: ["React Native", "Firebase", "Machine Learning"],
      liveLink: "#",
      githubLink: "#",
      type: "Mobile App",
      color: "violet"
    },
    {
      title: "NFT Marketplace",
      description: "Digital marketplace for trading NFT artwork",
      image: "/projects/nft.jpg",
      tech: ["Solidity", "Web3.js", "IPFS"],
      liveLink: "#",
      githubLink: "#",
      type: "Blockchain",
      color: "violet"
    }
  ];

  const getProjectLinks = (project) => {
    if (project.type === "UI/UX Design" || project.type.includes("Design")) {
      return (
        <div className="flex gap-4">
          <motion.a
            href={project.behanceLink || "#"}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600
                     text-white rounded-lg transition-colors shadow-lg shadow-blue-500/25"
          >
            <SiBehance size={18} />
            <span>Behance</span>
          </motion.a>
          <motion.a
            href={project.instagramLink || "#"}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r 
                     from-blue-500 to-blue-400
                     text-white rounded-lg transition-colors shadow-lg shadow-blue-500/25"
          >
            <FiInstagram size={18} />
            <span>Instagram</span>
          </motion.a>
        </div>
      );
    }

    return (
      <div className="flex gap-4">
        <motion.a
          href={project.liveLink}
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 
                   text-white rounded-lg hover:bg-blue-600 transition-colors
                   shadow-lg shadow-blue-500/25"
        >
          <FiExternalLink size={18} />
          <span>View Project</span>
        </motion.a>
        <motion.a
          href={project.githubLink}
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 
                   text-gray-300 rounded-lg hover:text-blue-400 hover:border-blue-500/50
                   border border-gray-700 transition-colors"
        >
          <FiGithub size={18} />
          <span>Source</span>
        </motion.a>
      </div>
    );
  };

  return (
    <section id="work" className="py-20 bg-background relative overflow-hidden"> {/* Added id="work" */}
      {/* Background Glow */}
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
          <motion.span 
            className="text-blue-400 font-medium mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Latest Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto" />
        </motion.div>

        {/* Projects Grid - Updated Layout */}
        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Container */}
              <div className="relative grid grid-cols-12 gap-6 items-center">
                {/* Project Image - 6 columns */}
                <motion.div 
                  className="col-span-12 lg:col-span-6 relative z-10"
                  animate={{
                    scale: hoveredProject === index ? 1.02 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Project Info - 6 columns */}
                <motion.div 
                  className={`col-span-12 lg:col-span-6 relative z-20 -mt-20 lg:mt-0
                            ${index % 2 === 0 ? 'lg:pl-6' : 'lg:pr-6'}`}
                  animate={{
                    x: hoveredProject === index ? (index % 2 === 0 ? 20 : -20) : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-800
                                hover:border-blue-500/30 transition-colors duration-300">
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 
                                   text-sm rounded-full mb-4">
                      {project.type}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-gray-100 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm text-blue-300 bg-blue-500/10 
                                   border border-blue-500/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Dynamic Project Links */}
                    {getProjectLinks(project)}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-background-alt/50 
                     backdrop-blur-lg border border-gray-800 rounded-xl
                     text-gray-200 hover:text-blue-400 hover:border-blue-500/50
                     transition-colors duration-300 group"
          >
            <span>Browse All Projects</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedWork;
