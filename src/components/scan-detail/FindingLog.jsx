import React from 'react';
import { AlertCircle, ExternalLink } from 'lucide-react';

const severityConfig = {
  critical: { 
    bg: 'bg-red-500/10', 
    text: 'text-red-500', 
    border: 'border-l-red-500',
    icon: 'bg-red-500'
  },
  high: { 
    bg: 'bg-orange-500/10', 
    text: 'text-orange-500', 
    border: 'border-l-orange-500',
    icon: 'bg-orange-500'
  },
  medium: { 
    bg: 'bg-yellow-500/10', 
    text: 'text-yellow-500', 
    border: 'border-l-yellow-500',
    icon: 'bg-yellow-500'
  },
  low: { 
    bg: 'bg-emerald-500/10', 
    text: 'text-emerald-500', 
    border: 'border-l-emerald-500',
    icon: 'bg-emerald-500'
  },
};

const VulnerabilityCard = ({ finding }) => {
  const config = severityConfig[finding.severity];

  return (
    <div className={`
      bg-white dark:bg-dark-800 
      border border-slate-200 dark:border-dark-700 
      border-l-4 ${config.border}
      rounded-xl p-4 mb-3
      hover:shadow-lg hover:border-slate-300 dark:hover:border-dark-600 
      transition-all cursor-pointer group
    `}>
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${config.bg} ${config.text}`}>
          {finding.severity.charAt(0).toUpperCase() + finding.severity.slice(1)}
        </span>
        <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
          {finding.timestamp}
        </span>
      </div>
      
      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
        {finding.title}
      </h4>
      
      <div className="flex items-center gap-1.5 mb-3">
        <code className="text-sm text-primary font-mono bg-primary/5 px-2 py-0.5 rounded">
          {finding.endpoint}
        </code>
        <ExternalLink size={12} className="text-slate-400" />
      </div>
      
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {finding.description}
      </p>
    </div>
  );
};

const FindingLog = ({ findings }) => {
  const criticalCount = findings.filter(f => f.severity === 'critical').length;
  const highCount = findings.filter(f => f.severity === 'high').length;
  
  return (
    <div className="bg-white dark:bg-dark-900 rounded-2xl border border-slate-200 dark:border-dark-700 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-200 dark:border-dark-700 bg-slate-50 dark:bg-dark-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Finding Log
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {criticalCount > 0 && (
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-xs font-semibold text-white bg-red-500">
                {criticalCount}
              </span>
            )}
            {highCount > 0 && (
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-xs font-semibold text-white bg-orange-500">
                {highCount}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 max-h-[500px] overflow-y-auto">
        {findings.map((finding) => (
          <VulnerabilityCard key={finding.id} finding={finding} />
        ))}
      </div>
    </div>
  );
};

export default FindingLog;
