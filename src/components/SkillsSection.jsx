import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('blockchain');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    blockchain: {
      title: 'Blockchain & Web3',
      color: 'text-primary',
      skills: [
        { name: 'Solidity', level: 95, description: 'Smart contract development and optimization' },
        { name: 'Ethereum', level: 90, description: 'DApp development and deployment' },
        { name: 'Web3.js', level: 88, description: 'Frontend blockchain integration' },
        { name: 'Tron', level: 85, description: 'Development environment and testing' },
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      color: 'text-secondary',
      skills: [
        { name: 'Machine Learning', level: 90, description: 'Advanced ML algorithms and model development' },
        { name: 'Computer Vision', level: 85, description: 'Image processing and visual recognition systems' },
        { name: 'OpenCV', level: 75, description: 'Image processing library' },
        { name:' Python', level: 80, description: 'Machine learning library'}
      ]
    },
    frontend: {
      title: 'Frontend Development',
      color: 'text-accent',
      skills: [
        { name: 'React', level: 94, description: 'Modern component-based development' },
        { name: 'Html&Css', level: 90, description: 'Web development' },
        { name: 'Javascript', level: 88, description: 'Web development' },
        { name: 'Tailwind CSS', level: 85, description: 'Web development' }
      ]
    },
    backend: {
      title: 'Backend & Infrastructure',
      color: 'text-chart-4',
      skills: [
        { name: 'Node.js', level: 90, description: 'Server-side JavaScript development' },
        { name: 'Express.js', level: 88, description: 'RESTful API development' },
        { name: 'MongoDB', level: 85, description: 'NoSQL database management' },
        { name: 'PostgreSQL', level: 82, description: 'Relational database design' },
        { name: 'Django', level: 80, description: 'Python web framework' }
      ]
    }
  };

  const SkillBar = ({ skill, index }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setWidth(skill.level);
        }, index * 200);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index]);

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mb-6 group cursor-pointer"
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex justify-between items-center mb-2">
          <motion.h4 
            className={`text-lg font-semibold transition-colors duration-300 ${
              hoveredSkill === skill.name ? 'text-primary' : 'text-foreground'
            }`}
          >
            {skill.name}
          </motion.h4>
          <motion.span 
            className="text-sm text-primary font-medium"
            animate={{
              scale: hoveredSkill === skill.name ? 1.1 : 1
            }}
          >
            {skill.level}%
          </motion.span>
        </div>
        <p className="text-sm text-muted-foreground mb-3 transition-colors duration-300 group-hover:text-foreground/70">
          {skill.description}
        </p>
        <div className="skill-bar relative overflow-hidden rounded-full bg-[#1a1a2e] border border-[#333344]/30 transition-all duration-300 group-hover:border-primary/50">
          <motion.div 
            className="skill-progress relative h-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-lg shadow-primary/50"
            style={{ width: `${width}%` }}
            animate={{
              boxShadow: hoveredSkill === skill.name 
                ? '0 0 20px rgba(59, 130, 246, 0.8)'
                : '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-glow"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A comprehensive toolkit for building next-generation decentralized applications
          </motion.p>
        </motion.div>

        {/* Category Navigation with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category], idx) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full border transition-all duration-300 relative overflow-hidden ${
                activeCategory === key
                  ? 'border-primary bg-primary/10 text-primary shadow-lg shadow-primary/30'
                  : 'border-[#333344] hover:border-primary/50 text-muted-foreground hover:text-foreground'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {activeCategory === key && (
                <motion.div
                  className="absolute inset-0 bg-primary/5 -z-10"
                  layoutId="activeButton"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display with enhanced animations */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="relative"
            whileHover="hover"
          >
            <Card className="bg-card/80 border-[#333344]/50 backdrop-blur-md overflow-hidden">
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={false}
              />
              <CardContent className="p-8">
                <motion.h3 
                  className={`text-3xl font-bold mb-8 text-center ${skillCategories[activeCategory].color}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {skillCategories[activeCategory].title}
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Technology Badges with stagger effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Additional Technologies
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                }
              }
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {[
              'Git', 'GitHub', 'Vercel', 'Netlify', 'Firebase'
            ].map((tech) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { type: 'spring', stiffness: 200 }
                  }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

