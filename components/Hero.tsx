import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { META } from '../constants';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      
      {/* Abstract Background Elements (Parallax) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-[10%] w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-[100px] -z-10 opacity-50"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-[10%] w-72 h-72 md:w-[30rem] md:h-[30rem] bg-indigo-900/20 rounded-full blur-[100px] -z-10 opacity-50"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-medium tracking-wide mb-4">Hello, I'm {META.name}</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight leading-[1.1] mb-8"
          >
            Building <span className="text-secondary/60 font-serif italic">digital</span> <br />
            experiences that <br />
            matter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary max-w-2xl mb-10 leading-relaxed"
          >
            {META.role}. {META.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-orange-600 transition-colors group"
            >
              View Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-primary/20 text-primary rounded-full font-medium hover:bg-primary/10 hover:border-primary/40 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-secondary/50"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <ChevronDown className="animate-bounce w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default Hero;