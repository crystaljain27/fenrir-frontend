import React, { useState } from 'react';
import { FileDown, Square, Clock, Building2, User, BarChart3, Calendar, RefreshCcw, AlertCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import StatsBar from '../components/dashboard/StatsBar';
import ScanTable from '../components/dashboard/ScanTable';
import { dashboardStats, scansData } from '../data/mockData';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

  const infoItems = [
    { icon: Building2, label: 'Org', value: dashboardStats.org },
    { icon: User, label: 'Owner', value: dashboardStats.owner },
    { icon: BarChart3, label: 'Total Scans', value: dashboardStats.totalScans },
    { icon: Calendar, label: 'Scheduled', value: dashboardStats.scheduled },
    { icon: RefreshCcw, label: 'Recons', value: dashboardStats.recons },
    { icon: AlertCircle, label: 'Failed Scans', value: dashboardStats.failedScans },
  ];

  return (
    <Layout 
      breadcrumbs={['Scan', 'Private Assets']}
      actions={headerActions}
    >
      {/* Info Bar */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 pb-6 border-b border-slate-200 dark:border-dark-700">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-500 dark:text-slate-400">{item.label}:</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.value}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 ml-auto text-slate-500 dark:text-slate-400">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm">{dashboardStats.lastUpdated}</span>
        </div>
      </div>

      {/* Stats Bar */}
      <StatsBar stats={dashboardStats.severity} />

      {/* Scan Table */}
      <ScanTable 
        scans={scansData}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </Layout>
  );
};

export default Dashboard;
