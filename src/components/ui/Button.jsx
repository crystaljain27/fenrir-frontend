import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  gradient = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: gradient 
      ? 'text-white focus:ring-primary hover:opacity-90 hover:shadow-lg hover:shadow-primary/25' 
      : 'bg-primary text-white hover:opacity-90 focus:ring-primary dark:focus:ring-offset-dark-surface',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary dark:border-primary dark:text-primary',
    ghost: 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const gradientStyle = variant === 'primary' && gradient ? {
    background: 'linear-gradient(135deg, #0CC8A8 0%, #0891B2 100%)'
  } : {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={gradientStyle}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
