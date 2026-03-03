import React from 'react';
import { Bug, Map, TestTube, CheckCircle, FileText, Globe, Clock, Key, File, ListChecks } from 'lucide-react';

const stepIcons = {
  Spider: Bug,
  Map: Map,
  TestTube: TestTube,
  CheckCircle: CheckCircle,
  FileText: FileText,
};

const ProgressTracker = ({ steps, progress, status }) => {
  const activeStepIndex = steps.findIndex(s => s.active);
  
  return (
    <div className="bg-white dark:bg-dark-900 rounded-2xl border border-slate-200 dark:border-dark-700 p-6 mb-6">
      {/* Circular Progress and Steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Circular Progress */}
        <div className="relative flex-shrink-0">
          <svg className="w-28 h-28 transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-slate-100 dark:text-dark-700"
            />
            <circle
              cx="56"
              cy="56"
              r="48"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="8"
              strokeDasharray={`${progress * 3.01} 301`}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0CC8A8" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-primary">{progress}%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{status}</span>
          </div>
        </div>

        {/* Steps */}
        <div className="flex-1 w-full">
          <div className="flex items-center justify-between relative">
            {/* Connecting Line Background */}
            <div className="absolute top-6 left-8 right-8 h-0.5 bg-slate-200 dark:bg-dark-700" />
            {/* Connecting Line Progress */}
            <div 
              className="absolute top-6 left-8 h-0.5 bg-gradient-to-r from-primary to-cyan-500 transition-all duration-500"
              style={{ width: `calc(${(activeStepIndex / (steps.length - 1)) * 100}% - 64px)` }}
            />

            {steps.map((step, index) => {
              const Icon = stepIcons[step.icon];
              const isActive = step.active;
              const isCompleted = step.completed || index < activeStepIndex;

              return (
                <div key={step.name} className="flex flex-col items-center relative z-10">
                  <div 
                    className={`
                      w-12 h-12 rounded-2xl flex items-center justify-center
                      transition-all duration-300 border-2
                      ${isActive 
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-110' 
                        : isCompleted
                          ? 'bg-primary/10 border-primary/30 text-primary'
                          : 'bg-slate-50 dark:bg-dark-800 border-slate-200 dark:border-dark-600 text-slate-400'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span 
                    className={`
                      mt-3 text-xs font-semibold
                      ${isActive 
                        ? 'text-primary' 
                        : isCompleted
                          ? 'text-slate-700 dark:text-slate-300'
                          : 'text-slate-400'
                      }
                    `}
                  >
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Metadata Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-dark-700">
        {[
          { icon: TestTube, label: 'Scan Type', value: 'Grey Box', highlight: false },
          { icon: Globe, label: 'Targets', value: 'google.com', highlight: true },
          { icon: Clock, label: 'Started At', value: 'Nov 22, 09:00AM', highlight: false },
          { icon: Key, label: 'Credentials', value: '2 Active', highlight: false },
          { icon: File, label: 'Files', value: 'Control.pdf', highlight: true },
          { icon: ListChecks, label: 'Checklists', value: '40/350', highlight: true },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-800 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">{item.label}</p>
              <p className={`text-sm font-semibold ${item.highlight ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
