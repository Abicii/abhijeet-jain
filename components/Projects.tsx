import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Subtle Parallax for the container instead of the image to avoid clipping issues
  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex flex-col gap-6"
    >
      {/* Image Container - Explicit White Background */}
      <div 
        style={{ y }}
        className="relative h-[300px] w-full overflow-hidden rounded-sm bg-white border border-primary/10 shadow-sm"
      >
        <div className="w-full h-full p-6 flex items-center justify-center bg-white">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {/* Subtle inner border for depth */}
        <div className="absolute inset-0 border border-black/5 pointer-events-none z-10" />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-baseline border-b border-primary/10 pb-4 mb-4">
          <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors font-display tracking-tight">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-accent tracking-wider uppercase hidden sm:inline-block">{project.category}</span>
        </div>
        <p className="text-secondary mb-6 line-clamp-3 leading-relaxed flex-grow">{project.description}</p>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs font-medium text-secondary bg-surface border border-primary/10 px-2 py-1 rounded">#{tag}</span>
            ))}
          </div>
          {/* Action Buttons - Always Visible */}
          <div className="flex gap-4">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-background text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-primary/20 text-primary text-sm font-bold rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Github size={16} /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
                <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Selected Work</h2>
                <h3 className="text-5xl md:text-7xl font-bold text-primary font-display tracking-tighter">
                    Featured <br /> Projects<span className="text-accent">.</span>
                </h3>
            </div>
            <div className="mt-8 md:mt-0 text-right">
                <p className="text-secondary text-lg max-w-sm ml-auto">
                    A selection of projects bridging the gap between complex functionality and premium aesthetics.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-24 text-center">
             <a 
                href="https://github.com/Abicii" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-primary/30 text-primary pb-1 hover:text-accent hover:border-accent transition-colors text-lg uppercase tracking-widest font-bold group"
             >
                View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;