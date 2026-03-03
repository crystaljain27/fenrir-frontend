import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    
    // Severity badges
    critical: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    high: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    low: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    
    // Status badges
    completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    scheduled: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    failed: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    running: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    
    // Severity solid (for vulnerability counts)
    'critical-solid': 'bg-severity-critical text-white',
    'high-solid': 'bg-severity-high text-white',
    'medium-solid': 'bg-severity-medium text-white',
    'low-solid': 'bg-severity-low text-white',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-xs',
    lg: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
