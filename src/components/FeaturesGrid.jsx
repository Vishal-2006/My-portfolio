import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Code, Rocket, Brain, Lock } from 'lucide-react';

const FeaturesGrid = () => {
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

  // Feature data with different grid positions
  const features = [
    {
      id: 1,
      title: 'Lightning Fast',
      description: 'Optimized performance with instant load times',
      icon: Zap,
      gridClass: 'md:col-span-2 md:row-span-2',
      color: 'from-primary to-primary/50',
    },
    {
      id: 2,
      title: 'Secure & Audited',
      description: 'Bank-level security for your smart contracts',
      icon: Shield,
      gridClass: 'md:col-span-1 md:row-span-1',
      color: 'from-secondary to-secondary/50',
    },
    {
      id: 3,
      title: 'Full Stack',
      description: 'Complete development solution',
      icon: Code,
      gridClass: 'md:col-span-1 md:row-span-1',
      color: 'from-accent to-accent/50',
    },
    {
      id: 4,
      title: 'AI Powered',
      description: 'Intelligent automation & ML integration',
      icon: Brain,
      gridClass: 'md:col-span-1 md:row-span-2',
      color: 'from-primary/80 to-primary/30',
    },
    {
      id: 5,
      title: 'Scalable',
      description: 'Grows with your needs',
      icon: Rocket,
      gridClass: 'md:col-span-1 md:row-span-1',
      color: 'from-secondary/80 to-secondary/30',
    },
    {
      id: 6,
      title: 'Privacy First',
      description: 'Your data, your control',
      icon: Lock,
      gridClass: 'md:col-span-2 md:row-span-1',
      color: 'from-accent/80 to-accent/30',
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Item animation variants with spring physics
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 35,
        duration: 0.6,
      },
    },
  };

  // Hover animation
  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      {/* Background animated elements */}
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build next-generation decentralized applications
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={feature.id}
                className={`${feature.gridClass} group relative`}
                variants={itemVariants}
                whileHover="hover"
                variants={{
                  ...itemVariants,
                  ...hoverVariants,
                }}
              >
                {/* Card */}
                <motion.div
                  className="relative h-full p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/2 overflow-hidden z-0 transition-all duration-300 group-hover:z-10 group-hover:shadow-2xl group-hover:shadow-primary/20"
                  whileHover="hover"
                  variants={hoverVariants}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${feature.color} blur-2xl -z-10`}
                  />

                  {/* Animated border glow on hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    style={{
                      background: `linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(0, 128, 255, 0.1) 50%, rgba(0, 255, 255, 0) 100%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      className="mb-4 inline-flex"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:border-primary/60 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground flex-grow group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Bottom accent bar */}
                    <motion.div
                      className="mt-4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full w-0 group-hover:w-full transition-all duration-500"
                    />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ready to explore these powerful features?
          </p>
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-foreground font-semibold border border-primary/50 hover:border-primary transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
