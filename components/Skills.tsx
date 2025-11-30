import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { SkillCategory } from '../types';

const SkillCard: React.FC<{ category: SkillCategory; delay: number; className?: string }> = ({ category, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay }}
    className={`bg-primary/5 backdrop-blur-sm border border-primary/10 p-6 rounded-2xl hover:bg-primary/10 transition-colors h-full flex flex-col ${className}`}
  >
    <h4 className="text-xl font-semibold mb-4 text-primary border-b border-primary/10 pb-2">{category.title}</h4>
    <ul className="space-y-3 flex-grow">
      {category.skills.map((skill) => (
        <li key={skill} className="flex items-center text-secondary text-sm">
          <CheckCircle2 size={16} className="text-accent mr-2 shrink-0" />
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const CombinedSkillCard: React.FC<{ categories: SkillCategory[]; delay: number; className?: string }> = ({ categories, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay }}
    className={`bg-primary/5 backdrop-blur-sm border border-primary/10 p-6 rounded-2xl hover:bg-primary/10 transition-colors h-full flex flex-col ${className}`}
  >
    {categories.map((category, index) => (
        <div key={category.title} className={`${index > 0 ? "mt-6" : ""} ${index === categories.length - 1 ? "flex-grow" : ""}`}>
            <h4 className="text-xl font-semibold mb-4 text-primary border-b border-primary/10 pb-2">{category.title}</h4>
            <ul className="space-y-3">
            {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-secondary text-sm">
                <CheckCircle2 size={16} className="text-accent mr-2 shrink-0" />
                {skill}
                </li>
            ))}
            </ul>
        </div>
    ))}
  </motion.div>
);

const Skills: React.FC = () => {
  // Assuming strict order from constants: 0: Languages, 1: Methodologies, 2: Frontend, 3: Tools
  const languages = SKILLS[0];
  const methodologies = SKILLS[1];
  const frontend = SKILLS[2];
  const tools = SKILLS[3];

  return (
    <section id="skills" className="py-24 bg-surface text-primary relative overflow-hidden border-t border-primary/5">
        {/* Decorative background text */}
        <div className="absolute top-0 right-0 text-primary/5 text-[20rem] font-bold leading-none select-none pointer-events-none -translate-y-1/2 translate-x-1/4">
            EXP
        </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
            >
                Technical <br /> <span className="text-accent">Expertise</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-secondary text-lg"
            >
                My stack is modern, scalable, and focused on performance. I don't just use tools; I understand how they work under the hood.
            </motion.p>
        </div>

        {/* Skills Grid - 3 Columns Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Column 1: Combined Lang/Method */}
            <CombinedSkillCard categories={[languages, methodologies]} delay={0.1} />

            {/* Column 2: Frontend */}
            {frontend && <SkillCard category={frontend} delay={0.2} />}
            
            {/* Column 3: Tools */}
            {tools && <SkillCard category={tools} delay={0.3} />}

        </div>
      </div>
    </section>
  );
};

export default Skills;