import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Award, TrendingUp, Users } from 'lucide-react';
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
      title: 'NFT Marketplace',
      category: 'Web3',
      description: 'A full-featured NFT marketplace where users can create, buy and sell their NFT tokens. Built with TypeScript for type safety and scalability.',
      image: 'nftmarket.png',
      technologies: ['TypeScript', 'Solidity', 'React', 'Web3.js', 'IPFS'],
      features: ['Create & Mint NFTs', 'Buy & Sell Tokens', 'Wallet Integration', 'IPFS Storage'],
      stats: { users: '50+', volume: '100+', nfts: '200+' },
      links: {
        live: 'https://nft-marketplace-git-main-vishal-r-bs-projects.vercel.app/',
        github: 'https://github.com/Vishal-2006/Nft-Marketplace'
      },
      status: 'Completed',
      featured: true
    },
    {
      id: 2,
      title: 'DAO Governance Protocol',
      category: 'DeFi',
      description: 'A decentralized Staking and Governance protocol where voting power is derived dynamically from staked users. Built with Solidity & React.JS.',
      image: 'Dao.png',
      technologies: ['Solidity', 'Remix'],
      features: ['Dynamic Voting Power', 'Staking Mechanism', 'Governance Proposals', 'Smart Contract'],
      stats: { stakers: '30+', proposals: '15', tvl: '$50K+' },
      links: {
        github: 'https://github.com/Vishal-2006/DAO-Governance',
      },
      status: 'Completed',
      featured: true
    },
    {
      id: 3,
      title: 'DApp Certificate Verify System',
      category: 'Web3',
      description: 'A full stack DApp that tracks Soulbound tokens (SBTs) - digital degrees that are permanent, tamper-proof, and non-transferable.',
      image: 'certif.png',
      technologies: ['TypeScript', 'Solidity', 'React', 'Hardhat', 'IPFS'],
      features: ['Soulbound Tokens', 'Tamper-proof Certificates', 'Smart Contract Verification', 'QR Code Integration'],
      stats: { certificates: '100+', institutions: '5', verified: '95%' },
      links: {
        github: 'https://github.com/yourusername/DApp-Certificate-Verify-System'
      },
      status: 'Beta',
      featured: false
    },
    {
      id: 4,
      title: 'AI NFT Generator',
      category: 'AI & Web3',
      description: 'An NFT minting and marketplace application that bridges the gap between Generative AI and Web3. Generate unique artwork from text prompts.',
      image: 'Nftai.png',
      technologies: ['JavaScript', 'Solidity', 'OpenAI', 'React', 'Web3.js'],
      features: ['AI Art Generation', 'Text-to-Image', 'NFT Minting', 'Marketplace Integration'],
      stats: { generated: '500+', minted: '200+', users: '80+' },
      links: {
        github: 'https://github.com/Vishal-2006/AI-NFT-GENERATOR'
      },
      status: 'Beta',
      featured: false
    },
    {
      id: 5,
      title: 'Staking and Vesting Protocol',
      category: 'DeFi',
      description: 'A comprehensive staking and vesting protocol built on blockchain technology with advanced tokenomics and reward distribution.',
      image: 'vesting.png',
      technologies: ['Solidity', 'Remix'],
      features: ['Token Staking', 'Vesting Schedules', 'Reward Distribution', 'Smart Contract Security'],
      stats: { staked: '$100K+', apr: '12%', users: '40+' },
      links: {
        github: 'https://github.com/Vishal-2006/Staking-and-Vesting-Protocol'
      },
      status: 'Completed',
      featured: false
    },
    {
      id: 6,
      title: 'VotingDApp',
      category: 'Web3',
      description: 'A decentralized voting system based on the blockchain network (Hardhat localhost) ensuring transparent and tamper-proof elections.',
      image: 'voting.png',
      technologies: ['JavaScript', 'Solidity', 'Hardhat', 'React', 'Web3.js'],
      features: ['Decentralized Voting', 'Blockchain Security', 'Real-time Results', 'Voter Verification'],
      stats: { votes: '1000+', polls: '25', participants: '500+' },
      links: {
        github: 'https://github.com/Vishal-2006/VotingDApp'
      },
      status: 'Completed',
      featured: false
    },
    {
      id: 7,
      title: 'Health Chain AI',
      category: 'Healthcare',
      description: 'A blockchain healthcare system uniting patients and doctors on one platform with secure data management and AI-powered diagnostics.',
      image: 'healthchain.png',
      technologies: ['JavaScript', 'Solidity', 'React', 'AI/ML', 'IPFS'],
      features: ['Patient Records', 'Doctor Portal', 'Secure Data Storage', 'AI Diagnostics'],
      stats: { patients: '200+', doctors: '50+', records: '1000+' },
      links: {
        github: 'https://github.com/Vishal-2006/HEALTH-CHAIN-AI'
      },
      status: 'Beta',
      featured: false
    },
    {
      id: 8,
      title: 'Apple Clone Web',
      category: 'Frontend',
      description: 'A pixel-perfect clone of the Apple website showcasing advanced CSS animations and responsive design techniques.',
      image: 'Appleclone.png',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'GSAP'],
      features: ['Smooth Animations', 'Responsive Design', 'Modern UI/UX', 'Performance Optimized'],
      stats: { pages: '5', animations: '20+', responsive: '100%' },
      links: {
        github: 'https://github.com/Vishal-2006/Apple-Clone-web'
      },
      status: 'Completed',
      featured: false
    },
    {
      id: 9,
      title: 'AI Powered Crypto Portfolio',
      category: 'AI & Web Development',
      description: 'An AI-driven crypto portfolio management tool that provides real-time insights and automated trading strategies.',
      image: 'crypto.png',
      technologies: ['typescript', 'Next.js', 'Ollama AI', 'Tailwind CSS'],
      features: ['AI Insights', 'Portfolio Management'],
      stats: { portfolios: '2+', accuracy: '78%', users: '1+' },
      links: {
        github: 'https://github.com/Vishal-2006/AI-Crypto-Portfolio'
      },
      status: 'Beta',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'Web3', label: 'Web3' },
    { key: 'DeFi', label: 'DeFi' },
    { key: 'AI & Web3', label: 'AI & Web3' },
    { key: 'Healthcare', label: 'Healthcare' },
    { key: 'Frontend', label: 'Frontend' },
    { key: 'AI & Web Development', label: 'AI & Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
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
              <Button size="sm" className="flex-1" asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.demo && !project.links.live && (
              <Button size="sm" variant="outline" className="flex-1" asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
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

