import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ArrowUpRight, Layers, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import SpotlightCard from './ui/SpotlightCard';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'web3', label: 'Blockchain & Web3' }
];

const PROJECTS = [
  {
    id: 1,
    title: 'AI-Powered Crypto Portfolio Tracker',
    category: 'ai',
    badge: 'AI × Web3 Full-Stack',
    description: 'Full-stack application using Next.js and TypeScript with Server-Side Rendering (SSR). Integrated Gemini API for automated market sentiment analyses and portfolio rebalancing.',
    image: '/crypto.png',
    technologies: ['Next.js', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Web3'],
    highlights: ['Gemini API Sentiment AI', 'Server-Side Rendering (SSR)', 'Multi-Wallet Asset Tracking', 'Automated Rebalancing'],
    links: {
      github: 'https://github.com/Vishal-2006'
    },
    featured: true
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    category: 'web3',
    badge: 'Flagship Web3',
    description: 'A full-featured decentralized NFT marketplace enabling users to mint, buy, and trade ERC-721 tokens with IPFS metadata integration and wallet connection.',
    image: '/nftmarket.png',
    technologies: ['TypeScript', 'Solidity', 'React', 'Web3.js', 'IPFS'],
    highlights: ['Decentralized Minting', 'IPFS Metadata Pinning', 'MetaMask Wallet Integration', 'Gas Optimized'],
    links: {
      live: 'https://nft-marketplace-git-main-vishal-r-bs-projects.vercel.app/',
      github: 'https://github.com/Vishal-2006/Nft-Marketplace'
    },
    featured: true
  },
  {
    id: 3,
    title: 'AI NFT Generative Studio',
    category: 'ai',
    badge: 'AI × Web3',
    description: 'Generative AI artwork generator bridging machine learning models with on-chain NFT minting, transforming text prompts into verified digital assets.',
    image: '/Nftai.png',
    technologies: ['Generative AI', 'Solidity', 'React', 'Web3.js', 'Python'],
    highlights: ['Text-to-Art Pipeline', 'Instant On-Chain Minting', 'Automated IPFS Upload', 'AI Prompt Curation'],
    links: {
      github: 'https://github.com/Vishal-2006/AI-NFT-GENERATOR'
    },
    featured: false
  },
  {
    id: 4,
    title: 'DApp Certificate Verify System',
    category: 'web3',
    badge: 'Soulbound Tokens',
    description: 'A cryptographic credentials verification protocol issuing Soulbound Tokens (SBTs) as permanent, non-transferable academic degrees and certifications.',
    image: '/certif.png',
    technologies: ['Solidity', 'Hardhat', 'TypeScript', 'React', 'IPFS'],
    highlights: ['Soulbound Non-Transferable SBTs', 'Tamper-Proof Verification', 'QR Code Validations', 'Smart Contract Registry'],
    links: {
      github: 'https://github.com/Vishal-2006/DApp-Certificate-Verify-System'
    },
    featured: false
  },
  {
    id: 5,
    title: 'Decentralized Voting System 2.0',
    category: 'web3',
    badge: 'Blockchain & Web3',
    description: 'A transparent election protocol built with Next.js 15, Viem, and Solidity smart contracts, featuring Pinata IPFS metadata storage for immutable election records.',
    image: '/voting.png',
    technologies: ['Next.js 15', 'Solidity', 'Viem', 'Pinata IPFS', 'Tailwind CSS'],
    highlights: ['Viem Smart Contract Integration', 'Pinata IPFS Storage', 'Single-Vote Enforcement', 'Tamper-Proof Ballot Registry'],
    links: {
      github: 'https://github.com/Vishal-2006/VotingDApp'
    },
    featured: false
  },
  {
    id: 6,
    title: 'Health Chain AI',
    category: 'ai',
    badge: 'Healthcare & ML',
    description: 'A secure healthcare management platform bringing patient records on-chain with decentralized storage and AI-powered diagnostic classification.',
    image: '/healthchain.png',
    technologies: ['Solidity', 'React', 'AI/ML', 'IPFS', 'Node.js'],
    highlights: ['Decentralized Patient Records', 'Physician Portal Auth', 'AI Diagnostic Analysis', 'Encrypted File Storage'],
    links: {
      github: 'https://github.com/Vishal-2006/HEALTH-CHAIN-AI'
    },
    featured: false
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            FEATURED PORTFOLIO WORK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI, Blockchain & Full-Stack Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production applications spanning intelligent machine learning pipelines, verified smart contract protocols, and modern full-stack web platforms.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-lg shadow-cyan-500/20 scale-[1.02]'
                    : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 242, 254, 0.12)"
                  borderColor="rgba(129, 140, 248, 0.35)"
                  className="rounded-3xl overflow-hidden flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Image Preview Banner */}
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900 border-b border-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      
                      {/* Top overlay badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                          {project.badge}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/20 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
                            ★ Featured
                          </span>
                        )}
                      </div>

                      {/* Gradient shade at bottom of image */}
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0e111a] via-[#0e111a]/60 to-transparent" />
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-medium text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex items-center gap-3">
                    {project.links.live && (
                      <Button
                        size="sm"
                        asChild
                        className="rounded-xl px-4 py-2 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-sky-500 text-black hover:from-cyan-300 hover:to-sky-400 shadow-md shadow-cyan-500/20 border-0"
                      >
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                        </a>
                      </Button>
                    )}

                    {project.links.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="rounded-xl px-4 py-2 text-xs font-semibold border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-white/20"
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                          Code Repository
                        </a>
                      </Button>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repository Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 glass-card rounded-3xl p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h3 className="text-lg font-bold text-white">More Open Source Repositories on GitHub</h3>
            <p className="text-xs text-slate-400 mt-1">
              Explore machine learning models, smart contracts, Web3 protocols, and Next.js frontends.
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="rounded-full px-6 py-2.5 text-xs font-semibold border-white/10 bg-white/5 text-white hover:bg-white/10 shrink-0"
          >
            <a href="https://github.com/Vishal-2006" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 text-cyan-400" />
              Visit @Vishal-2006
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
