import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  const blockCount = 12;
  const radius = 60;

  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const blockVariants = {
    start: (angle) => ({
      rotate: angle,
      opacity: 0.3,
    }),
    end: (angle) => ({
      rotate: angle + 360,
      opacity: 1,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background/50 to-background">
      <div className="text-center space-y-8">
        <motion.div
          className="flex justify-center items-center relative w-40 h-40"
          variants={containerVariants}
          initial="start"
          animate="end"
        >
          {Array.from({ length: blockCount }).map((_, index) => {
            const angle = (index / blockCount) * 360;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                custom={angle}
                variants={blockVariants}
                className="absolute w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-sm"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [x, x],
                  y: [y, y],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            );
          })}

          {/* Center glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-bold text-foreground">Building Your Experience</h2>
          <p className="text-muted-foreground">Initializing blockchain components...</p>
          
          {/* Loading dots */}
          <div className="flex justify-center gap-2 pt-4">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: dot * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
