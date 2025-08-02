import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('blockchain');
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
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
          <span className="text-sm text-primary font-medium">{skill.level}%</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
        <div className="skill-bar">
          <div 
            className="skill-progress"
            style={{ width: `${width}%` }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building next-generation decentralized applications
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === key
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-[#333344] hover:border-primary/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-card/80 border-[#333344]/50">
            <CardContent className="p-8">
              <h3 className={`text-3xl font-bold mb-8 text-center ${skillCategories[activeCategory].color}`}>
                {skillCategories[activeCategory].title}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Git', 'GitHub', 'Vercel', 'Netlify', 'Firebase'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

