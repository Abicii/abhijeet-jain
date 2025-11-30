import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="experience" ref={containerRef} className="py-32 relative overflow-hidden bg-surface border-y border-primary/5">
      
      {/* Giant Parallax Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <motion.div style={{ x }} className="whitespace-nowrap text-[12vw] font-bold font-display uppercase leading-none text-primary mt-10">
          Career Journey Experience
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
                <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">My Path</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-primary font-display">Experience</h3>
            </div>
            {/* <p className="text-secondary max-w-md mt-6 md:mt-0">
                A timeline of my professional career.
            </p> */}
        </div>

        <div className="space-y-0">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 group"
            >
                {/* Date Column (Desktop: Left) */}
                <div className="md:col-span-3 md:text-right pt-2 md:pt-1 hidden md:block">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 group-hover:border-accent/50 transition-colors duration-300">
                    <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                      {exp.period}
                    </span>
                  </div>
                </div>

              {/* Content Column with Border */}
              <div className="md:col-span-9 relative md:border-l md:border-primary/10 md:pl-10 pb-16 last:pb-0">
                
                {/* Desktop Dot: Properly aligned with border and text */}
                <div className="hidden md:block absolute -left-[5px] top-[18px] w-2.5 h-2.5 rounded-full bg-surface border-2 border-accent group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                
                {/* Mobile Dot line style */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-primary/10 -ml-4"></div>
                <div className="md:hidden absolute -left-[19px] top-4 w-2 h-2 rounded-full bg-accent"></div>

                <div className="relative">
                    <h4 className="text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors font-display">{exp.role}</h4>
                    <div className="text-primary/60 text-lg mb-6 font-medium">{exp.company}</div>
                    {/* Date for mobile view (below title/company) */}
                    <div className="md:hidden mb-4">
                      <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 group-hover:border-accent/50 transition-colors duration-300">
                        <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    {/* Achievements List */}
                    <ul className="list-disc list-outside ml-4 text-secondary leading-relaxed max-w-3xl text-lg space-y-3 marker:text-accent">
                        {exp.achievements.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;