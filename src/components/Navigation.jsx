import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Sparkles, User, Briefcase, Cpu, Layers, Mail, 
  FileText, ArrowUpRight 
} from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const navItems = [
  { id: 'hero', path: '/', label: 'Home', icon: Sparkles },
  { id: 'about', path: '/about', label: 'About', icon: User },
  { id: 'experience', path: '/experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', path: '/skills', label: 'Skills', icon: Cpu },
  { id: 'projects', path: '/projects', label: 'Projects', icon: Layers },
  { id: 'contact', path: '/contact', label: 'Contact', icon: Mail }
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Synchronize activeSection with pathname when route changes
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection('hero');
    } else {
      const current = navItems.find((item) => item.path === location.pathname);
      if (current) {
        setActiveSection(current.id);
      }
    }
  }, [location.pathname]);

  // Automatic Scroll Spy: Accurately highlights matching section tab as user scrolls
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only perform in-page scroll detection on the root home page
      if (location.pathname === '/') {
        // If near top of page, always lock to hero
        if (window.scrollY < 120) {
          setActiveSection('hero');
          return;
        }

        // If at bottom of page, lock to contact
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
          setActiveSection('contact');
          return;
        }

        // Calculate based on which section intersects the upper focal line of the viewport
        const focalLine = 220; // 220px below top of viewport
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= focalLine && rect.bottom > focalLine) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === '/') {
      if (item.id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('hero');
      } else {
        const el = document.getElementById(item.id);
        if (el) {
          const navOffset = 85;
          const targetY = el.getBoundingClientRect().top + window.scrollY - navOffset;
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
          setActiveSection(item.id);
        }
      }
    } else {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Monogram & Status (Linear / Dribbble Style) */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('hero');
              }
            }}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-nav hover:border-cyan-400/40 transition-all group"
          >
            {/* Sleek Tech Monogram Squircle */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-sky-500/5 border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.18)] group-hover:border-cyan-400/70 group-hover:scale-105 transition-all">
              <span className="font-mono font-extrabold text-xs tracking-tight bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                VRB
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-white/95 tracking-wide group-hover:text-cyan-300 transition-colors">
                Vishal R B
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                Available
              </span>
            </div>
          </Link>

          {/* Bigger, Unique Animated Floating Nav Pill with Motion Floating Things */}
          <nav 
            onMouseLeave={() => setHoveredSection(null)}
            className="hidden md:flex items-center gap-1 p-2 rounded-full relative bg-[#090b14]/85 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,242,254,0.12),inset_0_1px_1px_rgba(255,255,255,0.15)] group"
          >
            {/* Motion Floating Glow Orb 1 (Cyan) */}
            <motion.div
              animate={{
                x: [-12, 16, -12],
                y: [-3, 3, -3],
                opacity: [0.35, 0.65, 0.35]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-20 h-9 bg-cyan-500/25 rounded-full blur-xl pointer-events-none"
            />

            {/* Motion Floating Glow Orb 2 (Purple/Indigo) */}
            <motion.div
              animate={{
                x: [12, -16, 12],
                y: [3, -3, 3],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-20 h-9 bg-purple-500/25 rounded-full blur-xl pointer-events-none"
            />

            {/* Motion Floating Micro Particles */}
            <motion.div
              animate={{
                y: [-2, 2, -2],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-1 left-10 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f2fe] pointer-events-none"
            />
            <motion.div
              animate={{
                y: [2, -2, 2],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.7
              }}
              className="absolute -bottom-1 right-12 w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc] pointer-events-none"
            />

            {/* Nav Items */}
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredSection === item.id;
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 flex items-center gap-2 z-10 select-none ${
                    isActive
                      ? 'text-cyan-300 drop-shadow-[0_0_12px_rgba(0,242,254,0.6)]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {/* Floating Hover Background Pill */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="hoverNavPill"
                      className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}

                  {/* Active Floating Glowing Capsule */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-indigo-500/20 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,242,254,0.35),inset_0_0_12px_rgba(0,242,254,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}

                  {/* Floating Icon with Motion Lift on Hover */}
                  <motion.span
                    animate={isHovered || isActive ? { y: -2, scale: 1.15 } : { y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className={`relative z-10 transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </motion.span>

                  {/* Item Label */}
                  <span className="relative z-10 tracking-wide font-medium">{item.label}</span>

                  {/* Active Pulsing Beacon Dot */}
                  {isActive && (
                    <span className="relative flex h-1.5 w-1.5 z-10 -mr-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300 shadow-[0_0_6px_#00f2fe]" />
                    </span>
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="/resume/VishalResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full glass-nav text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            <Button
              size="sm"
              onClick={() => handleNavClick(navItems[5])}
              className="rounded-full px-5 py-2 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-sky-500 text-black hover:from-cyan-300 hover:to-sky-400 shadow-lg shadow-cyan-500/25 border-0 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Hire Me
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full glass-nav text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Auto-Scroll Active Section */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden max-w-6xl mx-auto mt-3 pointer-events-auto"
            >
              <div className="rounded-2xl glass-nav p-4 flex flex-col gap-2 border border-white/10 shadow-2xl backdrop-blur-2xl">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                <div className="pt-2 border-t border-white/5 flex flex-col gap-2 mt-1">
                  <a
                    href="/resume/VishalResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5"
                  >
                    <FileText className="w-4 h-4 text-cyan-400" />
                    View Resume PDF
                  </a>
                  <Button
                    onClick={() => handleNavClick(navItems[5])}
                    className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-semibold text-xs py-3 shadow-md shadow-cyan-500/20"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navigation;
