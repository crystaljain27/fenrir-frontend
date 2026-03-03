import React from 'react';

const ProgressBar = ({ 
  progress, 
  size = 'md',
  showPercentage = false,
  className = '' 
}) => {
  const sizes = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center gap-2">
        <div className={`flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${sizes[size]}`}>
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${clampedProgress}%` }}
          />
        </div>
        {showPercentage && (
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-[40px]">
            {clampedProgress}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
