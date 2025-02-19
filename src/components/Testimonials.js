import { motion } from 'framer-motion';
import { RiDoubleQuotesL } from 'react-icons/ri';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "https://i.pravatar.cc/150?img=1",
      text: "Working with Clement was an absolute game-changer for our brand. His innovative approach and attention to detail exceeded our expectations.",
      category: "Brand Design",
    },
    {
      name: "Michael Chen",
      role: "Product Lead at DesignCo",
      image: "https://i.pravatar.cc/150?img=2",
      text: "The level of creativity and technical expertise Clement brings to each project is remarkable. A true professional who delivers excellence.",
      category: "Development",
    },
    {
      name: "Emma Davis",
      role: "Creative Director",
      image: "https://i.pravatar.cc/150?img=3",
      text: "Clement's ability to transform concepts into stunning digital experiences is unmatched. He's become our go-to for all design projects.",
      category: "UI/UX Design",
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      image: "https://i.pravatar.cc/150?img=4",
      text: "An exceptional talent who brings both creativity and strategic thinking to the table. Our product wouldn't be the same without his input.",
      category: "Strategy",
    }
  ];

  return (
    <section className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 -translate-x-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-medium mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Trusted by Amazing People
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800
                            hover:border-violet-500/50 transition-all duration-300
                            group hover:-translate-y-1">
                {/* Quote Icon */}
                <RiDoubleQuotesL className="text-4xl text-violet-400/20 absolute top-6 right-8
                                          group-hover:text-violet-400/40 transition-colors duration-300" />

                {/* Category Tag */}
                <span className="inline-block px-3 py-1 bg-violet-500/10 text-violet-400
                               text-xs rounded-full mb-4">
                  {testimonial.category}
                </span>

                {/* Quote Text */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet-400/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-100 font-medium">{testimonial.name}</h4>
                    <p className="text-violet-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 text-gray-400"
          >
            <span className="w-8 h-[1px] bg-gray-700" />
            <span className="text-sm">Testimonials from real clients</span>
            <span className="w-8 h-[1px] bg-gray-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
