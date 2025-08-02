import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, X } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Blockchain Developer',
    'Web3 Full-Stack Developer', 
    'AI Enthusiast'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative particle-bg gradient-bg">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 border-2 border-primary/30 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-16 h-16 border-2 border-secondary/30"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-12 h-12 bg-primary/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent/20 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-glow"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            VISHAL R B
          </motion.h1>

          {/* Typing animation for titles */}
          <div className="h-20 flex items-center justify-center">
            <motion.h2
              className="text-2xl md:text-4xl font-semibold text-primary"
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Building the future of decentralized applications with cutting-edge AI integration
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              size="lg"
              className="px-8 py-4 text-lg glow-effect border-glow"
              onClick={() => scrollToSection('projects')}
            >
              View My Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-primary hover:bg-primary/10"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.a
              href="https://github.com/vishal-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#333344] rounded-full hover:border-primary transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vishal-r-b-52352b289/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#333344] rounded-full hover:border-primary transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://x.com/Vishal_17890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#333344] rounded-full hover:border-primary transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            className="h-8 w-8 text-primary cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

