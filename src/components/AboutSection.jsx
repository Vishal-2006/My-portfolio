import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Zap, Award, Users, Rocket } from 'lucide-react';
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: "Smart Contract Expert",
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
    <section id="about" ref={sectionRef} className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about revolutionizing the digital landscape through blockchain innovation and AI integration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-primary mb-6">
              My Journey in Blockchain
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Along my journey, I've gained hands-on experience with a wide range of tools and technologies that have shaped my approach to building decentralized applications.
            I started with Solidity for smart contract development, using frameworks like Hardhat and Truffle for writing, testing, and deploying contracts on Ethereum-based blockchains.
            On the backend, I worked with Node.js and Express to build secure and scalable APIs that interact with blockchain networks, while also using Django with Python to develop data-driven dashboards and applications, 
            especially for projects requiring AI integration. For frontend development, I rely on React and Tailwind CSS to craft modern, responsive interfaces, often integrating libraries like web3.js and ethers.js to connect dApps with smart contracts seamlessly. 
            I've incorporated AI technologies using Python libraries such as TensorFlow, OpenCV, and scikit-learn — particularly for tasks like OCR-based certificate verification and intelligent decision-making in DeFi platforms. My development workflow includes containerization with Docker, version control with GitHub, and deployment on platforms like Vercel, Railway, and Heroku. I’ve also used decentralized storage solutions like IPFS and integrated wallets like MetaMask and WalletConnect for secure user authentication. These tools and languages collectively empower me to build secure, scalable, and intelligent blockchain-based solutions.
            </p>
            
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters.experience}+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {counters.projects}+
              </div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {counters.clients}+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
            >
              <Card className="card-hover bg-card/80 border-[#333344]/50 h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Ready to Build the Future?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Let's collaborate on your next blockchain project and create something extraordinary together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

