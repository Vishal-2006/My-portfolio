import React from 'react';

const AmbientBackground = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07080d]" 
      aria-hidden="true"
    >
      {/* Subtle Ambient Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)',
        }}
      />

      {/* Top Left Orb: Blockchain / Web3 Cyan */}
      <div 
        className="absolute -top-[15%] left-[20%] w-[600px] h-[500px] rounded-full opacity-20 blur-[135px]"
        style={{
          background: 'radial-gradient(circle, #00f2fe 0%, #38bdf8 50%, transparent 80%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Top Right Orb: AI & Machine Learning Violet/Purple */}
      <div 
        className="absolute top-[10%] -right-[5%] w-[650px] h-[600px] rounded-full opacity-18 blur-[145px]"
        style={{
          background: 'radial-gradient(circle, #c084fc 0%, #8b5cf6 50%, transparent 80%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Mid/Bottom Orb: Full-Stack Web Indigo/Blue */}
      <div 
        className="absolute top-[60%] -left-[10%] w-[650px] h-[650px] rounded-full opacity-16 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #3b82f6 50%, transparent 80%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Vignette Edge Shading */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#07080d_95%)] opacity-85" 
      />
    </div>
  );
};

export default AmbientBackground;
