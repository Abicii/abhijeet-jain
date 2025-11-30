import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white cursor-none overflow-x-hidden">
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />

      {/* Floating Download Resume Button */}
      <motion.a
        href="https://drive.google.com/drive/folders/1S4_e4hG0tFTldqKcYC7aUhlobe4kWJW5?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-primary text-background p-4 rounded-full shadow-2xl hover:bg-accent hover:text-white transition-colors duration-300 group flex items-center justify-center overflow-hidden"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
      >
          <Download size={24} className="relative z-10" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
            Resume
          </span>
      </motion.a>
    </div>
  );
};

export default App;