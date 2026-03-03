import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Columns, Plus } from 'lucide-react';

const statusConfig = {
  completed: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', label: 'Completed' },
  scheduled: { bg: 'bg-slate-500/10', text: 'text-slate-500', label: 'Scheduled' },
  failed: { bg: 'bg-red-500/10', text: 'text-red-500', label: 'Failed' },
  running: { bg: 'bg-primary/10', text: 'text-primary', label: 'Running', animate: true },
};

const severityColors = {
  critical: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-emerald-500',
};

const VulnerabilityBadge = ({ count, severity }) => {
  if (count === 0) return null;
  return (
    <span className={`inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded text-xs font-semibold text-white ${severityColors[severity]}`}>
      {count}
    </span>
  );
};

const ScanTable = ({ scans, searchQuery, onSearchChange }) => {
  const navigate = useNavigate();

  const filteredScans = scans.filter(scan => 
    scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scan.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-dark-900 rounded-2xl border border-slate-200 dark:border-dark-700 overflow-hidden">
      {/* Toolbar */}
      <div className="p-4 border-b border-slate-200 dark:border-dark-700 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-700 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-700 transition-colors">
            <Columns className="w-4 h-4" />
            Column
          </button>
          <button 
            onClick={() => navigate('/scan/new')}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-600 rounded-xl text-sm font-medium text-white transition-colors shadow-lg shadow-primary/25"
          >
            <Plus className="w-4 h-4" />
            New scan
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 dark:bg-dark-800">
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Scan Name
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Type
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Vulnerability
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Last Scan
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-dark-700">
            {filteredScans.map((scan) => (
              <tr 
                key={scan.id}
                onClick={() => navigate(`/scan/${scan.id}`)}
                className="hover:bg-slate-50 dark:hover:bg-dark-800/50 cursor-pointer transition-colors group"
              >
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {scan.name}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {scan.type}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${statusConfig[scan.status].bg} ${statusConfig[scan.status].text}`}>
                    {statusConfig[scan.status].animate && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                    )}
                    {statusConfig[scan.status].label}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-slate-100 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${scan.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 tabular-nums">
                      {scan.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5">
                    <VulnerabilityBadge count={scan.vulnerabilities.critical} severity="critical" />
                    <VulnerabilityBadge count={scan.vulnerabilities.high} severity="high" />
                    <VulnerabilityBadge count={scan.vulnerabilities.medium} severity="medium" />
                    <VulnerabilityBadge count={scan.vulnerabilities.low} severity="low" />
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-slate-500 dark:text-slate-400">
                  {scan.lastScan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 border-t border-slate-200 dark:border-dark-700 text-sm text-slate-500 dark:text-slate-400">
        Showing {filteredScans.length} of {scans.length} scans
      </div>
    </div>
  );
};

export default ScanTable;
