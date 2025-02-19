import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiAward, FiCoffee } from 'react-icons/fi';
import { SiFigma, SiReact, SiTailwindcss, SiTypescript, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

function About() {
  const experiences = [
    {
      year: "2025",
      role: "Graphics designer",
      company: "Heza country Tours & Global engineering Agency",
      description: "Leading Graphics design projects and managing design teams."
    },
    {
      year: "2024",
      role: "Graphics designer",
      company: "Sign enginenringE.A",
      description: "working on digital printing designs such as flyer, banner and business cards. and more.."
    },
    {
      year: "2023",
      role: "UI/UX Designer",
      company: "Freelance",
      description: "Creating user-interface designs for mobiles and other devices."
    }
  ];

  const skills = [
    { name: "UI/UX Design", icon: <SiFigma />, level: 90 },
    { name: "Photoshop", icon: <SiAdobephotoshop />, level: 85 },
    { name: "Illustrator", icon: <SiAdobeillustrator />, level: 82 },
    { name: "React.js", icon: <SiReact />, level: 85 },
    { name: "TailwindCSS", icon: <SiTailwindcss />, level: 88 },
    { name: "TypeScript", icon: <SiTypescript />, level: 82 }
  ];

  const certifications = [
    {
      year: "2025",
      title: "12 Months of software engineering with specialization in front-end development",
      issuer: "ALX-Africa",
      credential: <a href="https://intranet.alxswe.com/certificates/NS5n2FYz7L">Click to view</a>,
      description: "Mastering modern design principles and creative team leadership"
    },
    {
      year: "2024",
      title: "UI/UX Design", 
      issuer: "Tech A intern",
      credential: <a href="https://drive.google.com/file/d/1qDTt3l6TZtDcjmMDfU8FxOCPrJ-k6bkN/view?usp=sharing">Click to view</a>,
      description: "Advanced web design and creating seamless user experiences"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium mb-4 block">About Me</span>
          <h2 className="text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-6">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 p-6 rounded-xl bg-background-alt/50 border border-blue-500/10"
          >
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">My Journey</h3>
              <p className="text-gray-400 leading-relaxed">
                With over 3 years of experience in Graphics design and development, 
                I've cultivated a passion for creating seamless user experiences. 
                Based in Kigali, I bring a unique perspective to every project, 
                combining East African creativity with global design standards.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <FiCoffee className="text-blue-400" size={20} />
                  <span>500+ Coffee Cups</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FiCode className="text-blue-400" size={20} />
                  <span>50+ Projects</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FiAward className="text-blue-400" size={20} />
                  <span>10+ Awards</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FiBookOpen className="text-blue-400" size={20} />
                  <span>Always Learning</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background-alt/30 rounded-lg p-4 border border-blue-500/10
                       hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">{skill.icon}</span>
                      <span className="text-gray-200">{skill.name}</span>
                    </div>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden border border-blue-500/20"
            >
              <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-500/20" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 pb-8"
                >
                  <div className="absolute left-0 w-8 h-8 bg-background rounded-full border-2 
                           border-blue-400 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  </div>
                  
                  <div className="bg-background-alt/50 backdrop-blur-lg rounded-xl p-6 
                           border border-blue-500/10 hover:border-blue-500/30 
                           transition-colors duration-300">
                    <span className="text-blue-400 font-medium">{exp.year}</span>
                    <h4 className="text-xl font-bold text-gray-100 mt-1">{exp.role}</h4>
                    <p className="text-gray-400 mt-1">{exp.company}</p>
                    <p className="text-gray-500 mt-2">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Full-width Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-100">Professional Certifications</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-background-alt/50 backdrop-blur-lg rounded-xl p-6 
                         border border-blue-500/10 hover:border-blue-500/30 
                         transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-100">{cert.title}</h4>
                    <p className="text-blue-400 mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-400 text-sm px-3 py-1 bg-blue-500/10 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <FiAward className="text-blue-400" size={16} />
                  <span className="text-sm">certificate preview: {cert.credential}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
