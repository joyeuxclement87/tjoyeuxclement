import { motion } from "motion/react";
import BoundingBox from "./BoundingBox";
import { LightBulbIcon, PencilIcon, SparklesIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Approach() {
  const steps = [
    { icon: LightBulbIcon, text: "Understand", sub: "the idea", number: "01" },
    { icon: PencilIcon, text: "Design", sub: "the solution", number: "02" },
    { icon: SparklesIcon, text: "Refine", sub: "for clarity", number: "03" },
    { icon: CheckBadgeIcon, text: "Deliver", sub: "with purpose", number: "04" }
  ];

  return (
    <section id="approach" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32 flex flex-col items-center gap-6"
        >
          <div className="flex items-center">
            <BoundingBox className="text-[#f5b915] px-5 py-2 text-sm font-bold tracking-widest uppercase">
              My Approach
            </BoundingBox>
          </div>
          <p className="text-xl md:text-2xl text-[#f0ede5]/60 font-light max-w-2xl mx-auto">
            A proven framework for turning concepts into clear, structured digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-24"
        >
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-[#f0ede5]/20 to-transparent z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-6 group cursor-default relative z-10">
                  
                  {/* Step Number */}
                  <div className="text-[#f0ede5]/20 font-display font-bold text-4xl group-hover:text-[#f0ede5]/40 transition-colors duration-500">
                    {step.number}
                  </div>

                  {/* Icon Node */}
                  <div className="p-6 rounded-full bg-[#004643] border border-[#f0ede5]/10 transition-all duration-500 group-hover:border-[#f5b915]/40 group-hover:bg-[#f5b915]/5 group-hover:shadow-[0_0_40px_rgba(245,185,21,0.15)] group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-[#f5b915]" />
                  </div>

                  {/* Text */}
                  <div className="transition-transform duration-500 group-hover:-translate-y-2">
                    <p className="text-[#f5b915] font-bold text-xl tracking-tight mb-2">{step.text}</p>
                    <p className="text-[#f0ede5]/50 text-xs uppercase tracking-[0.3em] font-bold">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-16 h-[1px] bg-[#f0ede5]/20 mx-auto" />
          
          <p className="text-2xl md:text-4xl text-[#f0ede5] leading-relaxed font-light max-w-4xl mx-auto tracking-tight">
            I believe good design should not feel complicated. It should feel clear, direct, and meaningful.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
