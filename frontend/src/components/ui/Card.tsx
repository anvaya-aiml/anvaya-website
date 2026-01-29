import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const baseStyles = 'rounded-xl p-6 backdrop-blur-sm transition-all duration-300';
  
  if (hover) {
    return (
      <motion.div
        whileHover={{ 
          y: -8, 
          boxShadow: '0 20px 40px -10px rgba(93, 163, 213, 0.3)'
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </motion.div>
    );
  }
  
  return <div className={`${baseStyles} ${className}`}>{children}</div>;
};

export default Card;
