import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ScanTable from '../components/dashboard/ScanTable';
import { scansData } from '../data/mockData';

const Scans = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const headerActions = [
    {
      label: 'New Scan',
      variant: 'primary',
      icon: Plus,
      onClick: () => alert('Creating new scan...'),
    },
  ];

  return (
    <Layout 
      breadcrumbs={['Scans']}
      actions={headerActions}
    >
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          All Scans
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          View and manage all your security scans in one place.
        </p>
      </div>

      {/* Scan Table */}
      <ScanTable 
        scans={scansData}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </Layout>
  );
};

export default Scans;
