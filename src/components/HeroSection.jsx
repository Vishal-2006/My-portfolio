import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, X } from 'lucide-react';
import { Button } from './ui/button';
import { useParallax } from '../hooks/useScrollAnimations';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const parallaxOffset = useParallax(0.5);
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

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative particle-bg gradient-bg overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ y: parallaxOffset * 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ y: parallaxOffset * 0.2 }}
      />

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
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1
              className="text-6xl md:text-8xl font-bold text-glow"
              style={{
                y: parallaxOffset * 0.2,
              }}
            >
              VISHAL R B
            </h1>
          </motion.div>

          {/* Typing animation for titles */}
          <motion.div variants={itemVariants} className="h-20 flex items-center justify-center">
            <motion.h2
              className="text-2xl md:text-4xl font-semibold text-primary"
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
              <motion.span
                className="animate-pulse"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Building the future of decentralized applications with cutting-edge AI integration
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="px-8 py-4 text-lg glow-effect border-glow"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/vishal-2006', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vishal-r-b-52352b289/', label: 'LinkedIn' },
              { icon: X, href: 'https://x.com/Vishal_17890', label: 'X' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#333344] rounded-full hover:border-primary transition-colors duration-300 group"
                whileHover={{ 
                  scale: 1.15, 
                  y: -8,
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <social.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            onClick={() => scrollToSection('about')}
            className="cursor-pointer"
          >
            <ChevronDown
              className="h-8 w-8 text-primary pulse-glow"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;