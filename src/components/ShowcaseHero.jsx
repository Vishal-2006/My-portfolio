import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, FileText, Github, Linkedin, X, ArrowRight, ShieldCheck, Sparkles, Terminal, Code2, Cpu, Blocks, Layers } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import SpotlightCard from './ui/SpotlightCard';
import DecryptedText from './ui/DecryptedText';

const ROLES = [
  'AI & Machine Learning Engineer',
  'Blockchain & Smart Contract Developer',
  'Full-Stack Web Developer (Next.js & Django)',
  'AI × Web3 Systems Architect'
];

const ShowcaseHero = () => {
  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting && currentText === targetRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timer);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return undefined;
    }

    timer = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting ? targetRole.slice(0, prev.length - 1) : targetRole.slice(0, prev.length + 1)
      );
    }, isDeleting ? 35 : 85);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen pt-28 md:pt-36 pb-16 flex items-center justify-center relative px-4 sm:px-6">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Availability Badge (AI + Web3 + Full-Stack Hybrid) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-purple-500/5 backdrop-blur-md mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-semibold tracking-wide bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
            AI/ML ENGINEER • BLOCKCHAIN ARCHITECT • FULL-STACK DEVELOPER
          </span>
        </motion.div>

        {/* Main Hero Headline with Grand Name Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl space-y-4 mb-8"
        >
          {/* Prominent Name Font Display with DecryptedText Cipher Animation */}
          <div className="relative inline-block group">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight sm:tracking-wider uppercase select-none">
              <DecryptedText
                text="VISHAL R B"
                speed={95}
                maxIterations={20}
                sequential={true}
                revealDirection="center"
                animateOn="view"
                characters="!@#$%^&*()_+{}|:<>?~0123456789ABCDEF"
                parentClassName="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-400 drop-shadow-[0_0_35px_rgba(0,242,254,0.35)] select-none"
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-400"
                encryptedClassName="text-cyan-400 font-mono drop-shadow-[0_0_15px_rgba(0,242,254,0.9)]"
              />
            </h1>
            <div className="h-1 w-36 sm:w-56 mx-auto mt-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full opacity-80 group-hover:w-64 transition-all duration-500" />
          </div>

          {/* Dynamic Typist Tagline with Hybrid Gradient */}
          <div className="h-9 flex items-center justify-center gap-2 text-xl sm:text-3xl font-bold pt-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 min-w-[240px]">
              {currentText}
              <span className="animate-pulse ml-0.5 text-cyan-300">|</span>
            </span>
          </div>

          {/* Convergence Subheading */}
          <p className="text-base sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed pt-1">
            Converging <span className="text-purple-400 font-semibold">Artificial Intelligence</span>, <span className="text-cyan-400 font-semibold">Blockchain Systems</span> & <span className="text-indigo-400 font-semibold">Modern Web Apps</span>
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Engineering scalable full-stack web platforms, gas-optimized smart contracts, and predictive machine learning workflows.
          </p>
        </motion.div>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
        >
          <Button
            size="lg"
            onClick={() => navigate('/projects')}
            className="rounded-full px-7 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-white hover:opacity-95 shadow-xl shadow-cyan-500/20 border-0 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/contact')}
            className="rounded-full px-7 py-3 text-sm font-semibold border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-md transition-all"
          >
            Get In Touch
            <Mail className="w-4 h-4 ml-2 text-cyan-400" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full px-6 py-3 text-sm font-semibold border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-md transition-all"
          >
            <a href="/resume/VishalResume.pdf" target="_blank" rel="noopener noreferrer">
              Resume <FileText className="w-4 h-4 ml-2 text-purple-400" />
            </a>
          </Button>
        </motion.div>

        {/* Social Links Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-16"
        >
          <a
            href="https://github.com/vishal-2006"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-r-b-52352b289/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 hover:text-indigo-400 hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/Vishal_17890"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 hover:text-purple-400 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all shadow-sm"
            aria-label="Twitter / X Profile"
          >
            <X className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Bento Highlight Cards - 3 Equal Pillars (AI/ML + Blockchain + Full-Stack) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full text-left"
        >
          {/* Card 1: AI & Machine Learning */}
          <SpotlightCard
            spotlightColor="rgba(192, 132, 252, 0.15)"
            borderColor="rgba(192, 132, 252, 0.35)"
            className="p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white mb-1.5">AI & Machine Learning</h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Predictive pipelines with XGBoost (~91% accuracy), Gemini API integrations, ChromaDB vector embeddings, and OpenCV computer vision.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['XGBoost', 'Gemini API', 'ChromaDB', 'OpenCV', 'Python'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-slate-300 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card 2: Blockchain & Smart Contracts */}
          <SpotlightCard
            spotlightColor="rgba(0, 242, 254, 0.15)"
            borderColor="rgba(0, 242, 254, 0.35)"
            className="p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white mb-1.5">Blockchain & Web3</h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Gas-optimized Solidity contracts, EVM infrastructure, Soulbound token protocols, Pinata IPFS decentralized storage, and Viem/Web3 integration.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['Solidity', 'Hardhat', 'EVM', 'Viem', 'IPFS'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-slate-300 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card 3: Full-Stack Web Development */}
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.15)"
            borderColor="rgba(99, 102, 241, 0.35)"
            className="p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white mb-1.5">Full-Stack Web Engineering</h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Modern responsive web architectures with Next.js 16 App Router, React 19, Django REST Framework, Celery asynchronous queues, and Redis.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {['Next.js 16', 'React 19', 'Django DRF', 'Celery', 'Tailwind'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-slate-300 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
};

export default ShowcaseHero;
