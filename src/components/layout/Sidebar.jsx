import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  ScanLine, 
  Calendar, 
  Bell, 
  Settings, 
  HelpCircle,
  ChevronRight,
  X,
  Shield
} from 'lucide-react';

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/projects', icon: FolderKanban, label: 'Projects' },
  { path: '/scans', icon: ScanLine, label: 'Scans' },
  { path: '/schedule', icon: Calendar, label: 'Schedule' },
  { path: '/notifications', icon: Bell, label: 'Notifications' },
  { path: '/settings', icon: Settings, label: 'Settings' },
  { path: '/support', icon: HelpCircle, label: 'Support' },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50
          w-64 h-screen
          bg-white dark:bg-dark-950
          border-r border-slate-200 dark:border-dark-800
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="p-5 flex items-center justify-between border-b border-slate-100 dark:border-dark-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Fenrir</span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => onClose && onClose()}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-2.5 rounded-xl
                  text-sm font-medium
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-dark-800'
                  }
                `}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-3 border-t border-slate-100 dark:border-dark-800">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-50 dark:bg-dark-900 hover:bg-slate-100 dark:hover:bg-dark-800 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-orange-500/25">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                admin@edu.com
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Security Lead
              </p>
            </div>
            <ChevronRight size={16} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
