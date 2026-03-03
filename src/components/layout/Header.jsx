import React from 'react';
import { Menu, Sun, Moon, ChevronRight, Home } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Header = ({ onMenuClick, breadcrumbs = [], actions = [] }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 px-4 lg:px-6 flex items-center justify-between bg-white dark:bg-dark-950 border-b border-slate-200 dark:border-dark-800">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-dark-800 transition-colors"
        >
          <Menu size={20} />
        </button>
        
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm">
            <Home size={14} className="text-slate-400" />
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight size={14} className="text-slate-300 dark:text-slate-600" />
                <span 
                  className={`
                    ${index === breadcrumbs.length - 1 
                      ? 'text-slate-900 dark:text-white font-semibold' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer'
                    }
                  `}
                >
                  {crumb}
                </span>
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 dark:bg-dark-800 hover:bg-slate-200 dark:hover:bg-dark-700 transition-colors"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Actions */}
        {actions.map((action, index) => {
          const variant = action.variant || 'primary';
          const baseClasses = 'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all';
          
          const variantClasses = {
            primary: 'bg-primary hover:bg-primary-600 text-white shadow-lg shadow-primary/25',
            secondary: 'bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-700',
            danger: 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25',
          };

          return (
            <button
              key={index}
              onClick={action.onClick}
              className={`${baseClasses} ${variantClasses[variant]}`}
            >
              {action.icon && <action.icon size={16} />}
              {action.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
