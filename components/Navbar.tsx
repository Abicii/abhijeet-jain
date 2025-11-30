import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Scroll handler
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Check theme preference
    const storedTheme = localStorage.getItem('theme');
    
    // Default to dark mode if no preference is stored
    if (storedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const offset = 100; // Height of navbar + padding
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash manually without jump
      window.history.pushState(null, '', href);
    } else {
        console.warn(`Element with id ${targetId} not found`);
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
        <motion.nav
          initial={false}
          animate={scrolled ? "scrolled" : "top"}
          variants={{
            top: { 
              width: "100%", 
              maxWidth: "1280px", 
              borderRadius: "0px",
              backgroundColor: "rgba(0,0,0,0)",
              border: "1px solid rgba(255,255,255,0)",
              padding: "1rem 1.5rem",
              backdropFilter: "blur(0px)"
            },
            scrolled: { 
              width: "90%", 
              maxWidth: "800px", 
              borderRadius: "9999px",
              backgroundColor: "rgba(var(--bg-surface), 0.7)",
              border: "1px solid rgba(var(--text-primary), 0.08)",
              padding: "0.75rem 2rem",
              backdropFilter: "blur(20px) saturate(180%)",
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
            }
          }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center justify-between pointer-events-auto"
        >
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-xl font-bold tracking-tighter text-primary z-50 mix-blend-difference"
          >
            AJ<span className="text-accent">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button 
                onClick={toggleTheme}
                className="text-primary hover:text-accent transition-colors p-2 rounded-full hover:bg-primary/5"
                aria-label="Toggle Theme"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className={`px-5 py-2 text-sm font-bold text-background bg-primary rounded-full hover:bg-primary/90 transition-colors ${scrolled ? 'scale-95' : 'scale-100'}`}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="flex items-center gap-4 md:hidden z-50 pointer-events-auto">
            <button 
                onClick={toggleTheme}
                className="text-primary hover:text-accent transition-colors"
                aria-label="Toggle Theme"
            >
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
                onClick={toggleMenu}
                className="text-primary focus:outline-none"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // Close on background click
            className="fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden z-40"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-3xl font-display font-bold text-primary hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-3 text-xl font-bold text-background bg-primary rounded-full hover:bg-primary/90 transition-colors mt-4"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;