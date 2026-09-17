import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, X, CheckCircle2, ArrowUpRight, Cpu, Blocks, 
  Code2, Server, Terminal, Sparkles, Layers, ShieldCheck, Check
} from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

const FOLDER_CATEGORIES = [
  {
    id: 'llm-engineering',
    title: 'LLM Engineering & GenAI',
    shortTitle: 'LLM',
    skillsCount: 4,
    icon: Cpu,
    themeColor: 'orange',
    folderGradient: 'from-orange-500 via-amber-500 to-orange-600',
    folderBorder: 'border-orange-500/40',
    badgeText: 'text-orange-400',
    badgeBg: 'bg-orange-500/10 border-orange-500/25',
    spotlight: 'rgba(249, 115, 22, 0.15)',
    barGradient: 'from-orange-500 via-amber-400 to-yellow-400',
    papers: ['RAG', 'Gemini', 'LLM'],
    pills: [
      '• LLM Fine-Tuning & Prompting',
      '• Gemini AI Orchestration'
    ],
    verifiedItems: [
      {
        name: 'Gemini API & LLM Orchestration',
        mastery: 95,
        desc: 'Automated market sentiment analyses, dynamic portfolio rebalancing strategies, and generative examination generation.'
      },
      {
        name: 'ChromaDB Vector Embeddings & RAG',
        mastery: 92,
        desc: 'Semantic retrieval architectures, automated document chunking, and similarity ranking for AI educational systems.'
      },
      {
        name: 'Prompt Engineering & Few-Shot Curation',
        mastery: 94,
        desc: 'High-precision system prompts, structured JSON schema outputs, and multi-turn conversational agents.'
      },
      {
        name: 'Automated Knowledge Chunking & Search',
        mastery: 91,
        desc: 'Context-window optimization, hierarchical document indexing, and low-latency embeddings cache.'
      }
    ]
  },
  {
    id: 'computer-vision-ml',
    title: 'Computer Vision & ML',
    shortTitle: 'Computer',
    skillsCount: 4,
    icon: Sparkles,
    themeColor: 'rose',
    folderGradient: 'from-rose-500 via-red-500 to-rose-600',
    folderBorder: 'border-rose-500/40',
    badgeText: 'text-rose-400',
    badgeBg: 'bg-rose-500/10 border-rose-500/25',
    spotlight: 'rgba(244, 63, 94, 0.15)',
    barGradient: 'from-rose-500 via-orange-400 to-amber-400',
    papers: ['YOLO', 'ONNX', 'OpenCV'],
    pills: [
      '• YOLOv8 Object Detection',
      '• ONNX Runtime Edge Inference'
    ],
    verifiedItems: [
      {
        name: 'YOLOv8 Object Detection',
        mastery: 97,
        desc: 'Real-time object detection models fine-tuned on custom industrial edge devices with high frame-rate performance.'
      },
      {
        name: 'ONNX Runtime Edge Inference',
        mastery: 92,
        desc: 'Hardware-accelerated model quantization, TensorRT acceleration, and low-power embedded inference.'
      },
      {
        name: 'PyTorch & OpenCV Pipelines',
        mastery: 95,
        desc: 'Real-time video processing, morphological filtering, feature extraction, and computer vision classification.'
      },
      {
        name: 'Dataset Annotation & Augmentation',
        mastery: 90,
        desc: 'Synthesizing training distributions, bounding-box annotations, and industrial sensor data preprocessing.'
      }
    ]
  },
  {
    id: 'database-storage',
    title: 'Database & Storage Systems',
    shortTitle: 'Database',
    skillsCount: 5,
    icon: Server,
    themeColor: 'emerald',
    folderGradient: 'from-emerald-500 via-teal-500 to-emerald-600',
    folderBorder: 'border-emerald-500/40',
    badgeText: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/25',
    spotlight: 'rgba(16, 185, 129, 0.15)',
    barGradient: 'from-emerald-500 via-teal-400 to-cyan-400',
    papers: ['Postgres', 'Vector', 'Redis'],
    pills: [
      '• PostgreSQL & Relational Schemas',
      '• Redis In-Memory Caching'
    ],
    verifiedItems: [
      {
        name: 'PostgreSQL & Relational Schemas',
        mastery: 94,
        desc: 'Normalized schema modeling, ACID transactions, complex join indexing, and high-concurrency migrations.'
      },
      {
        name: 'Redis In-Memory Caching & Broker',
        mastery: 91,
        desc: 'Sub-millisecond query caching, message broker message queues, and rate-limiting middleware.'
      },
      {
        name: 'Celery Asynchronous Task Queues',
        mastery: 90,
        desc: 'Decoupling heavy AI compute, document parsing, and email workflows into background worker pools.'
      },
      {
        name: 'Pinata IPFS Decentralized Storage',
        mastery: 92,
        desc: 'Immutable metadata pinning, CID content hashing, and decentralized asset availability guarantees.'
      },
      {
        name: 'Vector Database Indexing (ChromaDB)',
        mastery: 89,
        desc: 'HNSW indexing, cosine similarity metrics, and metadata filtering for semantic retrieval.'
      }
    ]
  },
  {
    id: 'fullstack-devops',
    title: 'Full-Stack & Cloud DevOps',
    shortTitle: 'Full-Stack',
    skillsCount: 4,
    icon: Code2,
    themeColor: 'amber',
    folderGradient: 'from-amber-500 via-yellow-500 to-amber-600',
    folderBorder: 'border-amber-500/40',
    badgeText: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 border-amber-500/25',
    spotlight: 'rgba(245, 158, 11, 0.15)',
    barGradient: 'from-amber-500 via-orange-400 to-yellow-400',
    papers: ['Python', 'Docker', 'React'],
    pills: [
      '• Python / FastAPI / Django',
      '• React 19 / Next.js 16'
    ],
    verifiedItems: [
      {
        name: 'Next.js 16 (App Router & SSR)',
        mastery: 96,
        desc: 'Production server components, server actions, route handlers, dynamic parallel routing, and edge hydration.'
      },
      {
        name: 'React 19 & Component Architecture',
        mastery: 95,
        desc: 'Clean hook composition, client-side docx renderers, reactive UI patterns, and zero unnecessary re-renders.'
      },
      {
        name: 'Python & Django REST Framework',
        mastery: 94,
        desc: 'Robust RESTful API design, serializer validation, JWT session security, and role-based permissions.'
      },
      {
        name: 'Docker Containerization & CI/CD',
        mastery: 90,
        desc: 'Multi-stage Dockerfile builds, service composition with docker-compose for dev and production.'
      }
    ]
  },
  {
    id: 'blockchain-architecture',
    title: 'Architecture & Smart Contracts',
    shortTitle: 'Architecture',
    skillsCount: 4,
    icon: Blocks,
    themeColor: 'purple',
    folderGradient: 'from-purple-500 via-indigo-500 to-purple-600',
    folderBorder: 'border-purple-500/40',
    badgeText: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 border-purple-500/25',
    spotlight: 'rgba(168, 85, 247, 0.15)',
    barGradient: 'from-purple-500 via-indigo-400 to-pink-400',
    papers: ['Solidity', 'EVM', 'Viem'],
    pills: [
      '• Smart Contract Architecture',
      '• Soulbound Tokens (SBT)'
    ],
    verifiedItems: [
      {
        name: 'Solidity Smart Contract Architecture',
        mastery: 95,
        desc: 'Production ERC-721, ERC-20, and custom Soulbound token protocols with strict reentrancy guards.'
      },
      {
        name: 'EVM Infrastructure & Gas Optimization',
        mastery: 93,
        desc: 'Storage slot packing, assembly operations, memory vs storage optimizations, and EVM opcodes.'
      },
      {
        name: 'Viem & Web3.js Client Integration',
        mastery: 91,
        desc: 'Type-safe contract interactions, wallet connectors, ABI encoding/decoding, and event listeners.'
      },
      {
        name: 'Hardhat Testing & Deployment Suites',
        mastery: 94,
        desc: 'Comprehensive automated test suites, fork testing against mainnet, and deployment scripts.'
      }
    ]
  }
];

// Interactive 3D Stack Folder Graphic matching user screenshot
const StackFolder3D = ({ folderGradient, papers }) => {
  return (
    <div className="relative w-24 h-20 shrink-0 pointer-events-none select-none">
      {/* 3D Papers Fanning Out from behind the folder pocket */}
      <div className="absolute inset-0">
        {/* Paper 1: Left Angled */}
        <div 
          className="absolute w-12 h-10 -top-1 left-0 rounded-md bg-[#181a24] border border-white/15 shadow-xl flex items-center justify-center -rotate-12 transition-all duration-300 ease-out group-hover:-translate-y-3 group-hover:-rotate-16 group-hover:-translate-x-1"
        >
          <span className="text-[9px] font-mono font-bold text-slate-300 tracking-tight">
            {papers[0] || 'Doc'}
          </span>
        </div>

        {/* Paper 2: Center Upright */}
        <div 
          className="absolute w-12 h-11 -top-3.5 left-6 rounded-md bg-[#1f2230] border border-white/20 shadow-2xl flex items-center justify-center rotate-0 transition-all duration-300 ease-out group-hover:-translate-y-4 group-hover:scale-105"
        >
          <span className="text-[9px] font-mono font-bold text-white tracking-tight">
            {papers[1] || 'Spec'}
          </span>
        </div>

        {/* Paper 3: Right Angled */}
        <div 
          className="absolute w-12 h-10 -top-1 right-0 rounded-md bg-[#181a24] border border-white/15 shadow-xl flex items-center justify-center rotate-12 transition-all duration-300 ease-out group-hover:-translate-y-3 group-hover:rotate-16 group-hover:translate-x-1"
        >
          <span className="text-[9px] font-mono font-bold text-slate-300 tracking-tight">
            {papers[2] || 'Code'}
          </span>
        </div>
      </div>

      {/* Front Folder Body / Flap */}
      <div className="absolute bottom-0 inset-x-0">
        {/* Top tab cutout */}
        <div className={`w-9 h-3 rounded-t-md bg-gradient-to-r ${folderGradient} opacity-95 shadow-sm`} />
        {/* Main folder pouch */}
        <div className={`w-full h-11 rounded-b-xl rounded-tr-xl bg-gradient-to-r ${folderGradient} p-0.5 shadow-[0_10px_25px_rgba(0,0,0,0.6)] border-t border-white/40 flex items-center justify-between px-2.5`}>
          <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
          <div className="h-0.5 w-6 rounded-full bg-black/25" />
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCategory(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Kicker & Section Header - Matching Screenshot Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-500 uppercase font-semibold mb-3">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>05 / STACK & TOOLS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              Technical Arsenal<span className="text-amber-500">.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-md leading-relaxed">
            Click 3D stack folders to trigger paper popouts and inspect full domain specs & competencies.
          </p>
        </div>

        {/* 3D Stack Folders Grid - 4 columns on desktop with 5th card on second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOLDER_CATEGORIES.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="cursor-pointer"
              >
                <SpotlightCard
                  spotlightColor={category.spotlight}
                  className="p-6 h-full flex flex-col justify-between group transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1.5 shadow-xl bg-[#0d0f17]/90 border-white/10"
                >
                  <div>
                    {/* Top Row: Meta Badge + 3D Folder Graphic */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="space-y-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${category.badgeBg} ${category.badgeText}`}>
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{category.skillsCount} Skills</span>
                        </div>
                        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                          {category.title}
                        </h3>
                      </div>

                      {/* 3D Stack Folder with Popout Papers */}
                      <StackFolder3D 
                        folderGradient={category.folderGradient}
                        papers={category.papers}
                        themeColor={category.themeColor}
                      />
                    </div>

                    {/* Middle Pills Preview */}
                    <div className="space-y-2 mb-6">
                      {category.pills.map((pill, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2 truncate shadow-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span className="truncate">{pill.replace('• ', '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Line */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-amber-400/90 group-hover:text-amber-300 transition-colors">
                    <span className="inline-flex items-center gap-1.5 font-semibold">
                      <Folder className="w-3.5 h-3.5" />
                      Open {category.shortTitle} Folder
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* Modal Popup - Matching Screenshot 2 */}
        <AnimatePresence>
          {selectedCategory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCategory(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d0f17] border border-white/15 p-6 sm:p-8 shadow-2xl z-10"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg ${selectedCategory.badgeBg} ${selectedCategory.badgeText}`}>
                      <Folder className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {selectedCategory.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                          {selectedCategory.verifiedItems.length} Verified Items
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-mono mt-1">
                        Technical Breakdown & Proficiency Specs
                      </p>
                    </div>
                  </div>

                  {/* Close 'X' Button */}
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close Modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Verified Proficiency Items List */}
                <div className="space-y-3.5 mb-8">
                  {selectedCategory.verifiedItems.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-2.5"
                    >
                      {/* Top Label & Mastery Pill */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full border border-amber-400/80 flex items-center justify-center text-amber-400 shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                            {item.name}
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-amber-500/10 border border-amber-500/25 text-amber-300">
                          {item.mastery}% Mastery
                        </span>
                      </div>

                      {/* Animated Proficiency Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-900 border border-white/10 overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.mastery}%` }}
                          transition={{ duration: 0.8, delay: 0.15 + idx * 0.05, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${selectedCategory.barGradient} shadow-sm`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Modal Footer Action */}
                <div className="flex justify-end pt-2 border-t border-white/10">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 hover:border-white/30 transition-all shadow-md active:scale-95"
                  >
                    Close Stack Folder
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default SkillsSection;
