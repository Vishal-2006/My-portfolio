import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, 
  ArrowUpRight, Cpu, Layers, Terminal, Milestone, ChevronRight 
} from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import ExperienceTimelineModal from './ExperienceTimelineModal';

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
    ],
    flowTimeline: [
      {
        id: 'qb-1',
        phase: 'Phase 01',
        duration: 'Weeks 1 - 2',
        statusBadge: 'Architecture Complete',
        title: 'System Architecture & Role-Based Auth Schema',
        description: 'Architected monorepo boundary contracts between Django REST backend and Next.js 16 App Router frontend. Built custom role-based permissions separating Superadmin, Faculty, and Student access controls with CSRF-protected session authentication.',
        highlights: [
          'Role-based API namespaces: /api/superadmin, /api/faculty, /api/students',
          'Secure session token exchange and HTTP-only cookie validation protocols',
          'Unified Axios client wrapper with global response error interceptors'
        ],
        tools: ['Django REST', 'Next.js 16', 'TypeScript', 'Session Auth'],
        screenshot: {
          caption: 'Role-Based Dashboard & Architecture Schematic',
          windowTitle: 'qbrainly.internal / auth-routes',
          placeholderTitle: 'Role Auth & Permission Matrix',
          placeholderDesc: 'Visual capture of multi-role login portal and API routing gateway.'
        }
      },
      {
        id: 'qb-2',
        phase: 'Phase 02',
        duration: 'Weeks 3 - 5',
        statusBadge: 'Pipeline Integrated',
        title: 'Asynchronous Workers & ChromaDB Vector Embeddings',
        description: 'Decoupled resource-intensive course processing, document chunking, and AI content analysis using Celery asynchronous task workers backed by Redis broker. Integrated ChromaDB vector store for semantic similarity retrieval and prompt generation.',
        highlights: [
          'Celery background workers for non-blocking document ingestion and text extraction',
          'Redis message broker & sub-millisecond query caching layer',
          'ChromaDB vector embedding index for semantic question matching'
        ],
        tools: ['Celery', 'Redis', 'ChromaDB', 'Python', 'Vector RAG'],
        screenshot: {
          caption: 'Celery Task Worker Flow & Vector Ingestion',
          windowTitle: 'qbrainly.internal / celery-workers',
          placeholderTitle: 'Async Worker & ChromaDB Index',
          placeholderDesc: 'Telemetry flow of background document chunking and vector storage.'
        }
      },
      {
        id: 'qb-3',
        phase: 'Phase 03',
        duration: 'Weeks 6 - 8',
        statusBadge: 'UI Deployed',
        title: 'Next.js 16 App Router UI & Reactive Hydration',
        description: 'Engineered responsive dashboard interfaces using Next.js 16 App Router, React component composition, and Tailwind CSS. Implemented optimistic UI updates, modular data grids, and clean hydration states across all screen viewports.',
        highlights: [
          'App Router parallel routes for dynamic multi-pane student views',
          'Lucide icon integration and glassmorphic telemetry cards',
          'Strict TypeScript typing across all backend DRF response models'
        ],
        tools: ['Next.js 16', 'React', 'Tailwind CSS', 'TypeScript'],
        screenshot: {
          caption: 'Interactive Student & Faculty Dashboard UI',
          windowTitle: 'qbrainly.internal / dashboard-view',
          placeholderTitle: 'Interactive Education Portal UI',
          placeholderDesc: 'High-fidelity view of the student assessment workspace.'
        }
      }
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
    ],
    flowTimeline: [
      {
        id: 'rc-1',
        phase: 'Phase 01',
        duration: 'Month 1',
        statusBadge: 'Data Ingestion Complete',
        title: 'Industrial Telemetry Ingestion & Data Hygiene',
        description: 'Acquired, preprocessed, and sanitized over 10,000 raw industrial sensor and operational process logs from active cement milling operations. Addressed missing records, sensor noise, and multi-variable temporal anomalies.',
        highlights: [
          'Cleaned 10,000+ continuous industrial sensor telemetry records',
          'Z-score outlier detection and rolling-average data imputation',
          'Feature normalization across temperature, feed rate, and motor currents'
        ],
        tools: ['Python', 'Pandas', 'NumPy', 'Industrial Telemetry'],
        screenshot: {
          caption: 'Telemetry Preprocessing & Sensor Cleaning Pipeline',
          windowTitle: 'ramco.ml / telemetry-ingestion',
          placeholderTitle: 'Sensor Data Distribution & Outlier Filtering',
          placeholderDesc: 'Visual charts of raw sensor streams vs normalized operational parameters.'
        }
      },
      {
        id: 'rc-2',
        phase: 'Phase 02',
        duration: 'Month 2',
        statusBadge: 'Model Reached ~91% Acc',
        title: 'Feature Engineering & Predictive XGBoost Modeling',
        description: 'Engineered domain-specific lag features and operational interaction terms. Trained and cross-validated gradient boosted tree models (XGBoost) to forecast mill residue levels, achieving ~91% validation accuracy on test splits.',
        highlights: [
          'Constructed time-series lag parameters and differential feed features',
          'Hyperparameter optimization using Bayesian & grid search techniques',
          'Evaluated RMSE, MAE, and R² scores against historical plant baselines'
        ],
        tools: ['XGBoost', 'Scikit-learn', 'Feature Engineering', 'Model Tuning'],
        screenshot: {
          caption: 'Model Residuals & Validation Accuracy Curve (~91%)',
          windowTitle: 'ramco.ml / model-evaluation',
          placeholderTitle: 'XGBoost Validation Curve & Residual Matrix',
          placeholderDesc: 'Validation accuracy metrics and feature importance rankings.'
        }
      },
      {
        id: 'rc-3',
        phase: 'Phase 03',
        duration: 'Month 3',
        statusBadge: '30% Overhead Reduced',
        title: 'Decision Support & Automated Operational Alerts',
        description: 'Integrated predictive inferences into automated control guidelines, enabling operators to preemptively adjust mill parameters prior to residue threshold violations and reducing manual monitoring requirements by ~30%.',
        highlights: [
          'Reduced manual parameter inspection and monitoring effort by ~30%',
          'Early-warning alert thresholds for mill residue deviations',
          'Generated automated operational recommendation reports for plant engineers'
        ],
        tools: ['Python Analytics', 'Threshold Alerting', 'Operational Control'],
        screenshot: {
          caption: 'Real-Time Predictive Control Dashboard',
          windowTitle: 'ramco.ml / operator-control',
          placeholderTitle: 'Operational Control Telemetry View',
          placeholderDesc: 'Live decision support dashboard with proactive parameter alerts.'
        }
      }
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
    ],
    flowTimeline: [
      {
        id: 'qpg-1',
        phase: 'Phase 01',
        duration: 'Month 1',
        statusBadge: 'Layout Scaffolded',
        title: 'Next.js 16 Layout Architecture & Token Routing',
        description: 'Designed high-performance responsive web layouts with Next.js 16 and React 19. Engineered token-based session routing to streamline startup authentication and provide instant, zero-flicker transitions between configuration screens.',
        highlights: [
          'Next.js 16 App Router navigation structure with layout inheritance',
          'Token session persistence in local encrypted state',
          'Tailwind CSS design token system for exam templates and question cards'
        ],
        tools: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Routing UX'],
        screenshot: {
          caption: 'Exam Template Creator & Blueprint Layout',
          windowTitle: 'qpg.app / exam-creator',
          placeholderTitle: 'Exam Template Generator Interface',
          placeholderDesc: 'UI layout for syllabus weighting, question types, and bloom taxonomy levels.'
        }
      },
      {
        id: 'qpg-2',
        phase: 'Phase 02',
        duration: 'Month 2',
        statusBadge: 'API Handshake Complete',
        title: 'DRF API Integration & Exam Pattern Serialization',
        description: 'Wired frontend views to Django REST API endpoints using Axios. Implemented strict session authentication, CSRF handling, and complex JSON payload serialization for multi-section exam blueprints and question banks.',
        highlights: [
          'Axios HTTP client with CSRF token injection on mutation requests',
          'Dynamic form validation for multi-tiered question schemas',
          'Seamless synchronization between client state and server database'
        ],
        tools: ['Axios', 'Django REST', 'CSRF Security', 'JSON Contracts'],
        screenshot: {
          caption: 'Interactive Question Bank & Generator API View',
          windowTitle: 'qpg.app / api-sync',
          placeholderTitle: 'Question Bank & API Serializer',
          placeholderDesc: 'Live questionnaire preview and dynamic schema builder.'
        }
      },
      {
        id: 'qpg-3',
        phase: 'Phase 03',
        duration: 'Month 3',
        statusBadge: 'Export Engine Verified',
        title: 'Client-Side Docx-Preview & Export Engine',
        description: 'Integrated client-side docx-preview libraries enabling instructors to visually inspect generated exam papers directly in the browser with authentic pagination and styles prior to generating final DOCX/PDF export files.',
        highlights: [
          'Direct in-browser client-side docx-preview rendering without server roundtrips',
          'Print-ready pagination, headers, footers, and table layout styling',
          'One-click multi-format export with customized institutional branding'
        ],
        tools: ['docx-preview', 'Client Rendering', 'PDF/DOCX Export', 'React 19'],
        screenshot: {
          caption: 'In-Browser Docx Exam Preview & Export Workspace',
          windowTitle: 'qpg.app / docx-viewer',
          placeholderTitle: 'In-Browser Docx Renderer Canvas',
          placeholderDesc: 'Live rendered examination sheet with true pagination preview.'
        }
      }
    ]
  }
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
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

        {/* Experience Cards Stack */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                onClick={() => setSelectedExperience(exp)}
                className="cursor-pointer"
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 242, 254, 0.12)"
                  borderColor="rgba(0, 242, 254, 0.35)"
                  className="rounded-3xl p-7 sm:p-9 relative overflow-hidden group hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Header Row: Role & Meta */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${exp.bgColor} border ${exp.borderColor} flex items-center justify-center ${exp.color} shrink-0 group-hover:scale-110 transition-transform`}>
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

                  {/* Interactive Flow Timeline Callout Footer */}
                  <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/90">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span>Interactive execution flow timeline & visual artifacts</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExperience(exp);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold transition-all hover:scale-105 shadow-sm active:scale-95 cursor-pointer"
                    >
                      <span>Inspect Flow Timeline</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Flow Timeline Modal Popup */}
        <ExperienceTimelineModal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          experience={selectedExperience}
        />

      </div>
    </section>
  );
};

export default ExperienceSection;
