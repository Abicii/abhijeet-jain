import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display tracking-tight leading-tight">
              Design-driven Engineer. <br />
              Engineering-minded Designer.
            </h3>
            <div className="space-y-6 text-secondary text-lg leading-relaxed font-sans">
              <p>
                I thrive in the gray area between design and development. With a background in building enterprise products from 0 to 1, I understand that great software isn't just about clean code—it's about empathy, usability, and the tiny details that make a product feel "premium".
              </p>
              <p>
                My approach is simple: <strong>User First. Performance Always.</strong> Whether I'm architecting a complex React component system or fine-tuning a micro-interaction in Figma, I aim for excellence.
              </p>
              <p className="italic text-primary/80 border-l-4 border-accent pl-4">
                "Fun Fact: When I'm not pushing pixels, I design physical products. From ergonomic tech tools to modern concrete ashtrays, I love making useful things beautiful."
              </p>
            </div>
          </motion.div>

          {/* Image/Visual Content with Parallax */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            <motion.div
              style={{ y }}
              className="relative w-full max-w-md aspect-[4/5] md:aspect-square bg-surface rounded-sm overflow-hidden shadow-2xl z-10 border border-primary/5 group"
            >
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20"></div>
                <img 
                    src="https://picsum.photos/800/800?grayscale" 
                    alt="Abhijeet Jain Workspace" 
                    className="w-full h-full object-cover grayscale contrast-125 hover:contrast-100 transition-all duration-700"
                />
            </motion.div>
            
            {/* Background Geometric Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-accent/20 rounded-full opacity-20" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;