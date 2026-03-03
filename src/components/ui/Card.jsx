import React from 'react';

const Card = ({ 
  children, 
  className = '',
  padding = 'md',
  shadow = true 
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div 
      className={`
        bg-white dark:bg-dark-surface
        border border-gray-200 dark:border-dark-border
        rounded-xl
        ${shadow ? 'shadow-sm dark:shadow-none' : ''}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
