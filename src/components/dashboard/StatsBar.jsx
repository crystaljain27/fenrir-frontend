import React from 'react';
import { AlertCircle, AlertTriangle, Shield, Info, TrendingUp, TrendingDown } from 'lucide-react';

const severityConfig = {
  critical: {
    label: 'Critical Severity',
    icon: AlertCircle,
    gradient: 'from-red-500/10 to-red-500/5',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  high: {
    label: 'High Severity',
    icon: AlertTriangle,
    gradient: 'from-orange-500/10 to-orange-500/5',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  medium: {
    label: 'Medium Severity',
    icon: Shield,
    gradient: 'from-yellow-500/10 to-yellow-500/5',
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  low: {
    label: 'Low Severity',
    icon: Info,
    gradient: 'from-emerald-500/10 to-emerald-500/5',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
};

const StatsBar = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {Object.entries(stats).map(([key, data]) => {
        const config = severityConfig[key];
        const Icon = config.icon;
        const TrendIcon = data.trend === 'up' ? TrendingUp : TrendingDown;
        const trendColor = key === 'critical' || key === 'high' 
          ? (data.trend === 'up' ? 'text-red-500' : 'text-emerald-500')
          : (data.trend === 'up' ? 'text-emerald-500' : 'text-red-500');

        return (
          <div 
            key={key}
            className={`relative bg-gradient-to-br ${config.gradient} dark:from-dark-800 dark:to-dark-900 rounded-2xl p-5 border ${config.border} dark:border-dark-700 hover:shadow-lg transition-all group`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {config.label}
              </span>
              <div className={`${config.iconBg} p-2 rounded-xl group-hover:scale-110 transition-transform`}>
                <Icon className={`w-4 h-4 ${config.iconColor}`} />
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
                {data.count}
              </span>
              <div className={`flex items-center gap-1 text-xs font-medium ${trendColor}`}>
                <TrendIcon className="w-3.5 h-3.5" />
                <span>{data.change}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
              {data.trend === 'up' ? 'increase' : 'decrease'} than yesterday
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBar;
