import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { META, SOCIAL_LINKS } from '../constants';
import { ArrowUpRight, X, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    
    // Open email client
    window.location.href = `mailto:abhijeettt.9876@gmail.com?subject=${subject}&body=${body}`;
    
    // Close form after a short delay
    setTimeout(() => setIsFormOpen(false), 1000);
  };

  return (
    <footer id="contact" className="bg-background pt-24 pb-12 border-t border-primary/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-primary mb-8 tracking-tight"
          >
            Let's build something <br />
            <span className="font-serif italic text-accent">extraordinary.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary mb-10"
          >
            Always open to discussing product design, enterprise frontend architecture, or just chatting about nice chairs.
          </motion.p>
          
          <motion.button 
             onClick={() => setIsFormOpen(true)}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             whileHover={{ scale: 1.05 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center px-8 py-4 bg-primary text-background text-lg font-medium rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:shadow-primary/10"
          >
            Say Hello <ArrowUpRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>

        <div className="border-t border-primary/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
                <a 
                    key={link.platform} 
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-accent transition-colors p-2 bg-primary/5 rounded-full hover:bg-primary/10"
                    aria-label={link.platform}
                >
                    <link.icon size={20} />
                </a>
            ))}
          </div>
          
          <div className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} {META.name}. All rights reserved.
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-surface border border-primary/10 rounded-2xl p-8 shadow-2xl"
            >
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-primary mb-2">Get in Touch</h3>
              <p className="text-secondary mb-6 text-sm">Fill out the form to open your default email client with a pre-filled message.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-primary/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-primary/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-primary/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-background font-bold py-4 rounded-lg hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2 mt-4"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Contact;