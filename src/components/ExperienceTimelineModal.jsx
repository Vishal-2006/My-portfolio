import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Calendar, MapPin, Sparkles, CheckCircle2, 
  ArrowUpRight, Terminal, Cpu, Layers, Image as ImageIcon,
  ExternalLink, ZoomIn, Check, Milestone, Clock, ChevronRight
} from 'lucide-react';

const ExperienceTimelineModal = ({ isOpen, onClose, experience }) => {
  const [mounted, setMounted] = useState(false);
  const [activeImageZoom, setActiveImageZoom] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeImageZoom) {
          setActiveImageZoom(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, activeImageZoom, onClose]);

  if (!mounted) return null;

  const Icon = experience?.icon || Terminal;

  return createPortal(
    <AnimatePresence>
      {isOpen && experience && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Modal Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Window Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0e17] border border-white/20 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(0,242,254,0.18)] overflow-hidden flex flex-col z-10 backdrop-blur-2xl"
          >
            {/* Top Decorative Ambient Flare */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_#00f2fe]" />
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-white/10 relative bg-white/[0.01]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${experience.bgColor} border ${experience.borderColor} flex items-center justify-center ${experience.color} shrink-0 shadow-lg shadow-cyan-500/10`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        {experience.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                        ✓ Production Verified
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {experience.company}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-0.5">
                      {experience.role}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="self-end sm:self-start p-2.5 rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all shadow-md"
                  aria-label="Close flow timeline"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Meta Ribbon */}
              <div className="flex flex-wrap items-center gap-4 mt-5 text-xs text-slate-400 font-mono">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {experience.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {experience.location}
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-400">
                  <Milestone className="w-3.5 h-3.5 text-purple-400" />
                  <span>{experience.flowTimeline?.length || 3} Engineering Milestones</span>
                </span>
              </div>
            </div>

            {/* Modal Body: Interactive Flow Timeline */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
              <div className="relative">
                {/* Central Glowing Flow Spine / Timeline Guide */}
                <div className="absolute top-4 bottom-8 left-4 sm:left-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 opacity-40 shadow-[0_0_8px_rgba(0,242,254,0.3)]" />

                {/* Timeline Steps */}
                <div className="space-y-10 sm:space-y-12">
                  {experience.flowTimeline?.map((step, index) => {
                    return (
                      <motion.div
                        key={step.id || index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-12 sm:pl-16 group"
                      >
                        {/* Interactive Step Node */}
                        <div className="absolute left-1.5 sm:left-3.5 top-0.5 -translate-x-1/2 flex items-center justify-center">
                          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#0c0e17] border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.5)] group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-300">
                            <span className="text-[10px] font-mono font-bold text-cyan-300">
                              {index + 1}
                            </span>
                          </div>
                        </div>

                        {/* Step Content Card */}
                        <div className="rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 p-5 sm:p-7 shadow-xl transition-all duration-300 hover:shadow-cyan-500/5 hover:-translate-y-1">
                          {/* Step Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                                {step.phase}
                              </span>
                              <span className="text-xs text-slate-500 font-mono">
                                • {step.duration}
                              </span>
                            </div>
                            <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 w-fit">
                              {step.statusBadge || 'Milestone Complete'}
                            </span>
                          </div>

                          {/* Step Title & Description */}
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                            {step.description}
                          </p>

                          {/* Key Technical Highlights Checklist */}
                          {step.highlights && step.highlights.length > 0 && (
                            <div className="space-y-2 mb-5">
                              {step.highlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 stroke-[2.5]" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Interactive Screenshot Showcase Frame */}
                          {step.screenshot && (
                            <div className="mt-5 mb-5">
                              <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                                  <ImageIcon className="w-3.5 h-3.5 text-purple-400" />
                                  {step.screenshot.caption || 'Execution Visual & UI Artifact'}
                                </span>
                                <span className="text-[10px] text-slate-500">
                                  Click frame to inspect
                                </span>
                              </div>

                              {/* Screenshot Frame Container with CSS Transforms & Hover Flare */}
                              <div 
                                onClick={() => step.screenshot.image && setActiveImageZoom(step.screenshot)}
                                className="relative rounded-xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group/shot transition-all duration-500 hover:border-cyan-400/50 hover:shadow-cyan-500/15 cursor-pointer"
                              >
                                {/* Device Window Header Bar */}
                                <div className="flex items-center justify-between px-3 py-2 bg-[#121520] border-b border-white/10 text-[10px] font-mono text-slate-400">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                                    <span className="ml-2 text-[10px] text-slate-400 truncate max-w-[200px]">
                                      {step.screenshot.windowTitle || 'app.vrb.internal / stage-flow'}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1 text-cyan-400">
                                    <ZoomIn className="w-3 h-3" />
                                    <span className="text-[9px]">Inspect</span>
                                  </div>
                                </div>

                                {/* Screenshot Image or Interactive Placeholder Canvas */}
                                {step.screenshot.image ? (
                                  <div className="relative aspect-video overflow-hidden">
                                    <img
                                      src={step.screenshot.image}
                                      alt={step.screenshot.caption || step.title}
                                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/shot:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/shot:opacity-100 transition-opacity flex items-end p-3">
                                      <span className="text-xs text-white font-mono flex items-center gap-1.5">
                                        <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
                                        Click to Expand Full Preview
                                      </span>
                                    </div>
                                  </div>
                                ) : (
                                  /* Aesthetic Blueprint / Device Placeholder Canvas */
                                  <div className="aspect-[16/9] bg-gradient-to-br from-[#0c0f1a] via-[#101424] to-[#0a0d16] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group/canvas">
                                    {/* Grid lines overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
                                    
                                    <div className="relative z-10 space-y-2 max-w-sm">
                                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto shadow-inner group-hover/canvas:scale-110 transition-transform">
                                        <ImageIcon className="w-5 h-5" />
                                      </div>
                                      <p className="text-xs font-mono font-bold text-white">
                                        {step.screenshot.placeholderTitle || 'Screenshot Preview Slot'}
                                      </p>
                                      <p className="text-[11px] text-slate-400 font-mono">
                                        {step.screenshot.placeholderDesc || 'Visual artifact capture of active UI dashboard & data pipeline.'}
                                      </p>
                                      <div className="pt-1">
                                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-300/80 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                                          Ready for screenshot asset
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Tech Tags for this Phase */}
                          {step.tools && step.tools.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
                              <span className="text-[10px] font-mono text-slate-500 mr-1">
                                Stack:
                              </span>
                              {step.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-[#090b12] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-400 font-mono text-center sm:text-left">
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">ESC</kbd> or click outside to dismiss timeline
              </p>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 hover:border-white/30 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Close Flow Timeline
              </button>
            </div>
          </motion.div>

          {/* Lightbox Modal for Full-Resolution Screenshot Zoom */}
          <AnimatePresence>
            {activeImageZoom && (
              <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveImageZoom(null)}
                  className="fixed inset-0 bg-black/95 backdrop-blur-xl cursor-pointer"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative max-w-5xl w-full z-10 space-y-3"
                >
                  <div className="flex items-center justify-between text-white text-sm font-mono px-2">
                    <span>{activeImageZoom.caption}</span>
                    <button
                      type="button"
                      onClick={() => setActiveImageZoom(null)}
                      className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl">
                    <img
                      src={activeImageZoom.image}
                      alt={activeImageZoom.caption}
                      className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                    />
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ExperienceTimelineModal;
