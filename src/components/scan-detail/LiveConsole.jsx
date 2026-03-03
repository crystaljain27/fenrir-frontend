import React, { useState } from 'react';
import { Minimize2, Maximize2, X } from 'lucide-react';

const LogEntry = ({ entry }) => {
  const renderMessage = () => {
    if (!entry.highlight && !entry.highlight2) {
      return <span className="text-slate-600 dark:text-slate-300">{entry.message}</span>;
    }

    return (
      <span className="text-slate-600 dark:text-slate-300">
        {entry.message}
        {entry.highlight && (
          <span className="text-primary font-semibold">{entry.highlight}</span>
        )}
        {entry.suffix}
        {entry.highlight2 && (
          <span className="text-primary font-semibold">{entry.highlight2}</span>
        )}
        {entry.suffix2}
      </span>
    );
  };

  return (
    <div className={`font-mono text-sm leading-relaxed ${entry.indent ? 'pl-6 border-l-2 border-slate-200 dark:border-dark-600 ml-4' : ''}`}>
      {entry.timestamp && (
        <span className="text-slate-400 dark:text-slate-500">[{entry.timestamp}] </span>
      )}
      {renderMessage()}
    </div>
  );
};

const LiveConsole = ({ activityLog, verificationLoops }) => {
  const [activeTab, setActiveTab] = useState('activity');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  const logs = activeTab === 'activity' ? activityLog : verificationLoops;

  return (
    <div className={`bg-white dark:bg-dark-900 rounded-2xl border border-slate-200 dark:border-dark-700 overflow-hidden transition-all duration-300 ${isMinimized ? 'h-14' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-dark-700 bg-slate-50 dark:bg-dark-800">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">Live Scan Console</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            Running...
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-700 transition-colors"
          >
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
          <button 
            onClick={() => setIsClosed(true)}
            className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-900">
            <button
              onClick={() => setActiveTab('activity')}
              className={`
                px-5 py-3 text-sm font-medium border-b-2 transition-colors
                ${activeTab === 'activity'
                  ? 'border-primary text-primary bg-primary/5'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                }
              `}
            >
              Activity Log
            </button>
            <button
              onClick={() => setActiveTab('verification')}
              className={`
                px-5 py-3 text-sm font-medium border-b-2 transition-colors
                ${activeTab === 'verification'
                  ? 'border-primary text-primary bg-primary/5'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                }
              `}
            >
              Verification Loops
            </button>
          </div>

          {/* Log Content */}
          <div className="p-4 h-80 overflow-y-auto bg-slate-50 dark:bg-dark-950 font-mono text-sm space-y-3">
            {logs.map((entry, index) => (
              <LogEntry key={index} entry={entry} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LiveConsole;
