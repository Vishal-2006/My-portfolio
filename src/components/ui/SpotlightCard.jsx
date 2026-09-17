import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

/**
 * SpotlightCard - React Bits inspired component
 * Produces an illuminated cursor spotlight gradient on mouse hover.
 */
const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(0, 242, 254, 0.15)',
  borderColor = 'rgba(0, 242, 254, 0.35)',
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl glass-card transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Spotlight Radial Illumination */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useMotionTemplate`
            radial-gradient(
              380px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `
        }}
      />

      {/* Spotlight Outer Border Highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 border"
        style={{
          opacity: isHovered ? 1 : 0,
          borderColor: borderColor,
          maskImage: useMotionTemplate`
            radial-gradient(
              280px circle at ${mouseX}px ${mouseY}px,
              black 30%,
              transparent 80%
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              280px circle at ${mouseX}px ${mouseY}px,
              black 30%,
              transparent 80%
            )
          `
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
