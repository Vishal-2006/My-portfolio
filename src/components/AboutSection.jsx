import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counters
          const duration = 2000;
          const targets = { experience: 1, projects: 2, clients: 0 };
          
          Object.keys(targets).forEach(key => {
            let start = 0;
            const end = targets[key];
            const increment = end / (duration / 50);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounters(prev => ({ ...prev, [key]: end }));
                clearInterval(timer);
              } else {
                setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
              }
            }, 50);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: "Intermediate Smart Contract Writer",
      description: "Specialized in Solidity development with extensive experience in DeFi protocols and NFT marketplaces."
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Pioneering the integration of machine learning models with blockchain technology for intelligent DApps."
    },
    {
      icon: Award,
      title: "Security First",
      description: "Committed to writing secure, audited smart contracts with comprehensive testing frameworks."
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with text reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            My Journey in Blockchain
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate about revolutionizing the digital landscape through blockchain innovation and AI integration
          </motion.p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Along my journey, I've gained hands-on experience with a wide range of tools and technologies that have shaped my approach to building decentralized applications.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I started with Solidity for smart contract development, using frameworks like Hardhat and Truffle for writing, testing, and deploying contracts on Ethereum-based blockchains.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                On the backend, I worked with Node.js and Express to build secure and scalable APIs that interact with blockchain networks, while also using Django with Python to develop data-driven dashboards and applications, especially for projects requiring AI integration.
              </p>
            </div>
          </motion.div>

          {/* Right side - Stats with cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Years Experience', value: counters.experience },
                { label: 'Projects', value: counters.projects },
                { label: 'Happy Clients', value: counters.clients }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-md hover:border-primary/50 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Feature highlight */}
            <motion.div
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 mt-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
            >
              <p className="text-sm md:text-base text-foreground">
                Specializing in secure smart contract development with extensive experience in DeFi protocols, NFT marketplaces, and AI-integrated blockchain solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 md:mt-32"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
          >
            Core Expertise
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-md h-full overflow-hidden relative hover:border-primary/50 transition-all duration-300">
                    {/* Hover gradient background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 128, 255, 0.05) 100%)'
                      }}
                    />

                    <CardContent className="p-6 md:p-8 relative z-10">
                      <motion.div
                        className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-4 group-hover:border-primary/60 transition-colors"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <IconComponent className="h-6 w-6 text-primary" />
                      </motion.div>

                      <h4 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Bottom accent line */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full w-0 group-hover:w-full mt-4 transition-all duration-500"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

