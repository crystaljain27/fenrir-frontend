import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ScanDetail from './pages/ScanDetail';
import Scans from './pages/Scans';

// Placeholder component for other routes
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-slate-50 dark:bg-dark-950 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{title}</h1>
      <p className="text-slate-500 dark:text-slate-400">Coming soon...</p>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scans" element={<Scans />} />
          <Route path="/scan/:id" element={<ScanDetail />} />
          <Route path="/scan/new" element={<ScanDetail />} />
          <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
          <Route path="/schedule" element={<PlaceholderPage title="Schedule" />} />
          <Route path="/notifications" element={<PlaceholderPage title="Notifications" />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          <Route path="/support" element={<PlaceholderPage title="Support" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
