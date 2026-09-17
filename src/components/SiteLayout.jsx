import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navigation from './Navigation';
import AmbientBackground from './backgrounds/AmbientBackground';
import { Github, Linkedin, X, Mail, Heart, ArrowUp } from 'lucide-react';

const SiteLayout = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-foreground relative bg-[#07080d] selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Zero GPU Ambient Light Background */}
      <AmbientBackground />

      {/* Floating Modern Header */}
      <Navigation />

      {/* Main Routed Page Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Sleek Modern Footer (Mobbin/Dribbble Inspired) */}
      <footer className="relative z-10 border-t border-white/5 bg-[#07080d]/80 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 text-lg">
              VISHAL R B
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-xs text-muted-foreground">
              AI/ML Engineer • Blockchain Architect • Full-Stack Web Developer
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
            <Link to="/experience" className="hover:text-cyan-400 transition-colors">Experience</Link>
            <Link to="/skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
            <Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/vishal-2006" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-muted-foreground hover:text-cyan-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vishal-r-b-52352b289/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-muted-foreground hover:text-cyan-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com/Vishal_17890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-muted-foreground hover:text-cyan-400 transition-all"
              aria-label="Twitter / X"
            >
              <X className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-muted-foreground hover:text-cyan-400 transition-all ml-2"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
