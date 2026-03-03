import React from 'react';
import { FileDown, Square, Cpu, Layers, Activity, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ProgressTracker from '../components/scan-detail/ProgressTracker';
import LiveConsole from '../components/scan-detail/LiveConsole';
import FindingLog from '../components/scan-detail/FindingLog';
import { activeScanData } from '../data/mockData';

const ScanDetail = () => {
  const headerActions = [
    {
      label: 'Export Report',
      variant: 'secondary',
      icon: FileDown,
      onClick: () => alert('Exporting report...'),
    },
    {
      label: 'Stop Scan',
      variant: 'danger',
      icon: Square,
      onClick: () => alert('Stopping scan...'),
    },
  ];

  const stats = [
    { icon: Cpu, label: 'Sub-agents', value: activeScanData.stats.subAgents },
    { icon: Layers, label: 'Parallel Executions', value: activeScanData.stats.parallelExecutions },
    { icon: Activity, label: 'Operations', value: activeScanData.stats.operations.toLocaleString() },
  ];

  const vulnCounts = [
    { color: 'bg-red-500', count: activeScanData.stats.vulnerabilities.critical },
    { color: 'bg-orange-500', count: activeScanData.stats.vulnerabilities.high },
    { color: 'bg-yellow-500', count: activeScanData.stats.vulnerabilities.medium },
    { color: 'bg-emerald-500', count: activeScanData.stats.vulnerabilities.low },
  ];

  return (
    <Layout 
      breadcrumbs={['Scan', 'Private Assets', 'New Scan']}
      actions={headerActions}
    >
      {/* Progress Tracker */}
      <ProgressTracker 
        steps={activeScanData.steps}
        progress={activeScanData.progress}
        status={activeScanData.status}
      />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Live Console */}
        <div className="lg:col-span-2">
          <LiveConsole 
            activityLog={activeScanData.console.activityLog}
            verificationLoops={activeScanData.console.verificationLoops}
          />
        </div>

        {/* Right Column - Finding Log */}
        <div className="lg:col-span-1">
          <FindingLog findings={activeScanData.findings} />
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="mt-6 flex flex-wrap items-center gap-6 p-5 bg-white dark:bg-dark-900 rounded-2xl border border-slate-200 dark:border-dark-700">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-800 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-dark-700" />
            )}
          </React.Fragment>
        ))}
        
        <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-dark-700" />
        
        {/* Vulnerability Counts */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-800 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Vulnerabilities</p>
            <div className="flex items-center gap-2 mt-1">
              {vulnCounts.map((vuln, index) => (
                <div key={index} className="flex items-center gap-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${vuln.color}`} />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {vuln.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScanDetail;
