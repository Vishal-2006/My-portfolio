import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ScrollZoomSection - React Bits inspired scroll-driven zoom in and zoom out animation.
 * Smoothly scales up content as it enters viewport and gently scales down as it exits.
 */
const ScrollZoomSection = ({ children, className = '', id = '' }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Smooth out scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scale: zooms in from 0.93 to 1.0 as it enters, stays at 1.0 in view, zooms out to 0.95 on exit
  const scale = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0.93, 1, 1, 0.95]);

  // Opacity: fades in from 0.4 to 1.0, stays at 1.0 in view, fades to 0.5 on exit
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.5]);

  return (
    <div ref={containerRef} id={id} className={`relative will-change-transform ${className}`}>
      <motion.div
        style={{
          scale,
          opacity
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollZoomSection;
