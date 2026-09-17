import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Cpu, Database, Blocks, Sparkles, Terminal, CheckCircle2, ArrowRight, Layers, TrendingUp, BookOpen, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import SpotlightCard from './ui/SpotlightCard';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const [counters, setCounters] = useState({
    projects: 0,
    contracts: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const duration = 1800;
          const targets = { projects: 8, contracts: 15 };

          Object.keys(targets).forEach((key) => {
            let start = 0;
            const end = targets[key];
            const stepTime = 40;
            const increment = end / (duration / stepTime);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounters((prev) => ({ ...prev, [key]: end }));
                clearInterval(timer);
              } else {
                setCounters((prev) => ({ ...prev, [key]: Math.floor(start) }));
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Cpu,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
      spotlight: 'rgba(192, 132, 252, 0.12)',
      title: 'Machine Learning & Predictive Systems',
      desc: 'Designing end-to-end ML pipelines with XGBoost, ChromaDB vector retrieval architectures, LLM prompt engineering with Gemini API, and OpenCV computer vision.'
    },
    {
      icon: ShieldCheck,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
      spotlight: 'rgba(0, 242, 254, 0.12)',
      title: 'Blockchain & Smart Contract Defense',
      desc: 'Developing gas-optimized Solidity contracts, EVM testnet simulations with Hardhat, decentralized metadata pinning with Pinata (IPFS), and Viem client hooks.'
    },
    {
      icon: Layers,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20',
      spotlight: 'rgba(99, 102, 241, 0.12)',
      title: 'Full-Stack Web & Monorepo Architectures',
      desc: 'Crafting responsive user interfaces in Next.js 16 App Router & React 19, backed by Django REST Framework, Celery asynchronous pipelines, and Redis message brokers.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERING JOURNEY & EVOLUTION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Working & Learning Across Modern Tech
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A continuous journey of adapting, mastering, and converging Artificial Intelligence, Blockchain Systems & Full-Stack Web Apps.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-12">
          
          {/* Main Story Bento Card (7 cols) - Continuous Learning & Tech Evolution */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <SpotlightCard
              spotlightColor="rgba(129, 140, 248, 0.15)"
              borderColor="rgba(129, 140, 248, 0.35)"
              className="p-8 h-full flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Building & Evolving Across the Tech Horizon</h3>
                    <p className="text-xs text-slate-400">Continuous Learning • Hands-On Engineering • Practical Phase-by-Phase Growth</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p>
                    Throughout my engineering journey, I have prioritized <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 font-semibold">working all along with modern technologies</span>, continuously learning and advancing through each developmental phase.
                  </p>
                  <p>
                    Rather than limiting myself to a single vertical, I have proactively pushed into the convergence of <span className="text-purple-400 font-medium">Artificial Intelligence</span>, <span className="text-cyan-400 font-medium">Blockchain Infrastructure</span>, and <span className="text-indigo-400 font-medium">Full-Stack Web Engineering</span>.
                  </p>
                  <p>
                    From developing industrial ML forecasting pipelines reaching <span className="text-purple-300 font-medium">~91% accuracy</span> on sensor data, to writing gas-optimized <span className="text-cyan-300 font-medium">Solidity smart contracts</span> and building production-grade <span className="text-indigo-300 font-medium">Next.js 16 App Router</span> platforms connected to Django REST, my focus remains constant: <span className="text-white font-medium">mastering foundational concepts, implementing real-world architectures, and continuously expanding to the next technological frontier</span>.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Active Learner & Developer • Open to Worldwide Opportunities
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/experience')}
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 text-xs font-semibold p-0"
                >
                  View Experience History <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column Bento Cards (5 cols) - Redesigned to eliminate lonely empty space */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Widget 1: 2x2 Balanced Impact Metrics Grid */}
            <SpotlightCard
              spotlightColor="rgba(0, 242, 254, 0.12)"
              borderColor="rgba(0, 242, 254, 0.3)"
              className="p-6"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  Verified Engineering Metrics
                </span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-[10px] font-mono font-semibold text-cyan-300">
                  Live Stats
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Metric 1 */}
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between text-indigo-400 mb-1">
                    <Layers className="w-4 h-4" />
                    <span className="text-[10px] font-mono text-slate-500">Apps</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300">
                    {counters.projects}+
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    Web & Web3 Projects
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between text-cyan-400 mb-1">
                    <Blocks className="w-4 h-4" />
                    <span className="text-[10px] font-mono text-slate-500">Contracts</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                    {counters.contracts}+
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    Solidity Smart Contracts
                  </div>
                </div>

              </div>
            </SpotlightCard>

            {/* Widget 2: Continuous Learning & Active Specializations */}
            <SpotlightCard
              spotlightColor="rgba(192, 132, 252, 0.12)"
              borderColor="rgba(192, 132, 252, 0.3)"
              className="p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-purple-400" />
                    Active Learning & Next Frontier
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current Phase
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  Deepening expertise in Next.js 16 Server Actions, zero-knowledge smart contract verification, and vector RAG retrieval with ChromaDB.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {['Next.js 16 App Router', 'Zero Knowledge Concepts', 'Vector Embeddings', 'Smart Contract Audits'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-medium text-slate-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Core Pillars 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={pillar.spotlight}
                  className="p-7 h-full flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${pillar.bg} border flex items-center justify-center ${pillar.color} mb-5 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
