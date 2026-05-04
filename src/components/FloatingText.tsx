import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

interface FloatingTextProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function FloatingText({ children, className = "", depth = 50, direction = 'up' }: FloatingTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  let outputRange;
  switch (direction) {
    case 'up': outputRange = [depth, -depth]; break;
    case 'down': outputRange = [-depth, depth]; break;
    case 'left': outputRange = [depth, -depth]; break;
    case 'right': outputRange = [-depth, depth]; break;
    default: outputRange = [depth, -depth]; break;
  }
  
  const translate = useTransform(scrollYProgress, [0, 1], outputRange);
  const axis = (direction === 'up' || direction === 'down') ? 'y' : 'x';

  return (
    <motion.div
      ref={ref}
      style={{ [axis]: translate }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function TiltHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || window.innerWidth < 768) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out cursor-default perspective-1000 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
