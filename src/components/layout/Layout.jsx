import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children, breadcrumbs = [], actions = [] }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 flex">
      {/* Fixed Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        {/* Fixed Header */}
        <Header 
          onMenuClick={() => setSidebarOpen(true)}
          breadcrumbs={breadcrumbs}
          actions={actions}
        />
        
        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6 bg-slate-50 dark:bg-dark-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
