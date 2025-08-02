import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github2, Play, Award, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'AI Certificate Verification with Blockchain',
      category: 'Certificate Verification',
      description: 'A blockchain-based certificate verification system that allows users to verify the authenticity of a certificate by scanning a QR code.',
      image: 'images (1).jpeg',
      technologies: ['Solidity', 'React', 'Node.js', 'Python'],
      features: ['Blockchain-based Certificate Verification', 'Smart Contract Integration', 'User Authentication'],
      stats: { users: '1', volume: '1' },
      links: {
        
      },
      status: 'Under Development',
      featured: true
    },
    {
      id: 2,
      title: 'AI Powered Voting System with Blockchain',
      category: 'Voting System',
      description: 'A blockchain-based voting system that allows users to vote on a topic by uploading their proofs and connecting their wallet.',
      image: 'images.jpeg',
      technologies: ['Solidity', 'Next.js', 'IPFS', 'PyTorch', 'Web3.js'],
      features: ['Blockchain-based Voting System', 'Smart Contract Integration', 'User Authentication'],
      stats: { volume: '1', nfts: '1', creators: '1' },
      links: {
        
      },
      status: 'Under Development',
      featured: true
    },
    
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`${project.featured ? 'md:col-span-2' : ''}`}
    >
              <Card className="card-hover bg-card/80 border-[#333344]/50 h-full overflow-hidden">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge 
              variant={project.status === 'Live' ? 'default' : project.status === 'Beta' ? 'secondary' : 'outline'}
              className="bg-background/80 backdrop-blur-sm"
            >
              {project.status}
            </Badge>
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary/80 text-primary-foreground">
                <Award className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
            <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/20 rounded-lg">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.live && (
              <Button size="sm" className="flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
            {project.links.demo && !project.links.live && (
              <Button size="sm" variant="outline" className="flex-1">
                <Play className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
            {project.links.github && (
              <Button size="sm" variant="outline">
                                        <Github2 className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative blockchain solutions that push the boundaries of what's possible in Web3
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-[#333344] hover:border-primary/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Let's discuss how we can bring your blockchain vision to life with cutting-edge technology.
            </p>
            <Button size="lg" className="glow-effect">
              Start a Conversation
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

