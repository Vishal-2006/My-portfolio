import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Achievement badges - Replace with your actual badges
  const achievements = [
    {
      id: 1,
      title: 'Blockchain Basics',
      issuer: 'Cyfrin Updraft',
      date: '2025',
      image: '/cyfrin/blockchain.png',
      link: 'https://www.linkedin.com/in/vishal-r-b-52352b289/',
      description: 'Fundamental understanding of blockchain technology and its applications'
    },
    {
      id: 2,
      title: 'Advanced Wallet Security',
      issuer: 'Cyfrin Updraft',
      date: '2025',
      image: '/cyfrin/advwal.png',
      link: 'https://www.linkedin.com/in/vishal-r-b-52352b289/',
      description: 'In-depth knowledge of securing digital wallets and private keys'
    },
    {
      id: 3,
      title: 'Zero Knowledge Proofs',
      issuer: 'Cyfrin Updraft',
      date: '2025',
      image: '/cyfrin/zkp.png',
      link: 'https://www.linkedin.com/in/vishal-r-b-52352b289/',
      description: 'Comprehensive understanding of zero knowledge proof concepts and implementations'
    },
    {
      id: 4,
      title: 'Chainlink fundamentals',
      issuer: 'Cyfrin Updraft',
      date: '2026',
      image: '/cyfrin/chainlink.png',
      link: 'https://www.linkedin.com/in/vishal-r-b-52352b289/',
      description: 'Understanding of Chainlink oracles and their role in smart contract development'
    },
    {
      id: 5,
      title: 'Solidity Smart Contract Development',
      issuer: 'Cyfrin Updraft',
      date: '2025',
      image: '/cyfrin/solidity.png',
      link  : 'https://www.linkedin.com/in/vishal-r-b-52352b289/',
        description: 'Proficiency in writing, deploying, and managing smart contracts using Solidity'
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.4,
      rotateY: 90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 bg-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Certifications & Achievements</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cyfrin Updraft Achievements
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Industry-recognized credentials showcasing expertise in blockchain development and smart contract security
          </motion.p>
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="group h-full"
              whileHover={{
                y: -15,
                transition: { type: 'spring', stiffness: 300, damping: 25 },
              }}
            >
              <motion.a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-md overflow-hidden relative hover:border-primary/50 transition-all duration-300 cursor-pointer"
                whileHover={{
                  boxShadow: '0 20px 50px rgba(0, 255, 255, 0.2)',
                }}
              >
                {/* Hover glow background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(0, 128, 255, 0.05) 100%)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full items-center">
                  {/* Badge Image/Icon */}
                  <motion.div
                    className="mb-4 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:border-primary/60 transition-colors overflow-hidden"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%2300ffff"/%3E%3Ctext x="50" y="60" font-size="40" fill="white" text-anchor="middle" font-weight="bold"%3E✓%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm text-primary font-semibold mb-2">
                    {achievement.issuer}
                  </p>

                  {/* Date */}
                  <p className="text-xs text-muted-foreground mb-3">
                    {achievement.date}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground flex-grow mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    {achievement.description}
                  </p>

                  {/* View Certificate Link */}
                  <motion.div
                    className="inline-flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    Visit LinkedIn Badge
                    <ExternalLink className="h-4 w-4" />
                  </motion.div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full w-0 group-hover:w-full transition-all duration-500"
                  />
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '4+', label: 'Certifications Earned' },
              { number: '100+', label: 'Hours of Learning' },
              { number: '500+', label: 'Code Exercises Completed' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + idx * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
