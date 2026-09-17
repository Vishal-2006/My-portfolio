import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ArrowUpRight, Cpu, Layers, Terminal } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Full-Stack Developer — AI Education Platform',
    company: 'QBrainly',
    period: 'Collaborative Project',
    location: 'Remote',
    category: 'Full-Stack & AI',
    icon: Terminal,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/10',
    skills: ['Next.js 16', 'React', 'Django REST Framework', 'Celery', 'Redis', 'ChromaDB', 'Vector Embeddings', 'Tailwind CSS'],
    achievements: [
      'Contributed to a monorepo full-stack platform featuring a Django REST backend and Next.js 16 App Router frontend, supporting role-based access for Superadmins, Faculty, and Students.',
      'Connected Next.js UI components to DRF endpoints using unified API utilities, enforcing secure request handling with CSRF protection and session authentication.',
      'Designed Django serializers and views across role-specific namespaces (/api/students, /api/faculty, /api/superadmin) to ensure strict, clean JSON contract alignment.',
      'Collaborated on asynchronous processing pipelines using Celery and Redis alongside AI-enabled content extraction, chunking, and ChromaDB vector embedding flows.'
    ]
  },
  {
    id: 2,
    role: 'Machine Learning Intern — Mill Residue Prediction System',
    company: 'Ramco Cements',
    period: '3 Months',
    location: 'Rajapalayam, India',
    category: 'Machine Learning & Predictive AI',
    icon: Cpu,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/20',
    bgColor: 'bg-indigo-500/10',
    skills: ['Python', 'XGBoost', 'Pandas', 'NumPy', 'Data Preprocessing', 'Predictive Modeling'],
    achievements: [
      'Developed an end-to-end machine learning pipeline using XGBoost to forecast industrial mill residue levels from operational parameters, reaching ~91% prediction accuracy on validation sets.',
      'Preprocessed, transformed, and cleaned over 10,000 raw industrial sensor and process data records for machine learning model ingestion.',
      'Built predictive analytics workflows that enhanced early detection of residue deviations, reducing manual process monitoring effort by ~30%.',
      'Generated automated predictive control suggestions from model outputs to provide real-time decision support for industrial operations.'
    ]
  },
  {
    id: 3,
    role: 'Frontend Developer — AI Question Paper Generation',
    company: 'Question Paper Generator (QPG)',
    period: '3 Months',
    location: 'Remote',
    category: 'Frontend Engineering',
    icon: Layers,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    bgColor: 'bg-purple-500/10',
    skills: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Django REST API', 'Axios', 'Client-side docx-preview'],
    achievements: [
      'Built responsive web application interfaces and layouts using Next.js 16, React 19, and Tailwind CSS, designing secure token-based session routing to streamline startup UX.',
      'Connected frontend to a Django REST API using Axios, implementing session authentication, CSRF security, and model serialization for exam patterns and generated tests.',
      'Designed interactive feature interfaces and admin views using modular React components and Lucide icons following maintainable project architecture patterns.',
      'Integrated client-side docx-preview capabilities to allow users to inspect rendered question paper files directly in the browser prior to exporting.'
    ]
  }
];

const ExperienceSection = () => {
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

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-semibold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            PROFESSIONAL BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Work Experience & Internships
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering hands-on solutions across full-stack web applications, industrial machine learning pipelines, and AI systems.
          </p>
        </motion.div>

        {/* Experience Timeline Stack */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 242, 254, 0.12)"
                  borderColor="rgba(0, 242, 254, 0.35)"
                  className="rounded-3xl p-7 sm:p-9 relative overflow-hidden group"
                >
                  {/* Header Row: Role & Meta */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${exp.bgColor} border ${exp.borderColor} flex items-center justify-center ${exp.color} shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {exp.company}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-cyan-400">
                            {exp.category}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-300 mt-1">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Period & Location Pills */}
                    <div className="flex flex-wrap items-center gap-3 lg:justify-end text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements List */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mr-1">
                      Technologies:
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-slate-300 group-hover:border-cyan-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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

export default ExperienceSection;
