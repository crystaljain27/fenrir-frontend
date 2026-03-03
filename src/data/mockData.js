// Dashboard Stats
export const dashboardStats = {
  org: 'Project X',
  owner: 'Nammagiri',
  totalScans: 100,
  scheduled: 1000,
  recons: 100,
  failedScans: 100,
  lastUpdated: '10 mins ago',
  severity: {
    critical: { count: 86, change: '+2%', trend: 'up' },
    high: { count: 16, change: '+0.9%', trend: 'up' },
    medium: { count: 26, change: '-0.9%', trend: 'down' },
    low: { count: 16, change: '+0.9%', trend: 'up' },
  }
};

// Scan List Data
export const scansData = [
  {
    id: 1,
    name: 'Production API Gateway',
    type: 'Greybox',
    status: 'completed',
    progress: 100,
    vulnerabilities: { critical: 2, high: 8, medium: 15, low: 23 },
    lastScan: '2h ago',
  },
  {
    id: 2,
    name: 'Customer Portal',
    type: 'Greybox',
    status: 'completed',
    progress: 100,
    vulnerabilities: { critical: 0, high: 3, medium: 12, low: 18 },
    lastScan: '5h ago',
  },
  {
    id: 3,
    name: 'Internal Dashboard',
    type: 'Blackbox',
    status: 'running',
    progress: 67,
    vulnerabilities: { critical: 1, high: 4, medium: 8, low: 5 },
    lastScan: 'In progress',
  },
  {
    id: 4,
    name: 'Payment Service',
    type: 'Greybox',
    status: 'completed',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '1d ago',
  },
  {
    id: 5,
    name: 'Auth Microservice',
    type: 'Greybox',
    status: 'completed',
    progress: 100,
    vulnerabilities: { critical: 3, high: 7, medium: 14, low: 21 },
    lastScan: '2d ago',
  },
  {
    id: 6,
    name: 'Mobile Backend',
    type: 'Blackbox',
    status: 'completed',
    progress: 100,
    vulnerabilities: { critical: 1, high: 5, medium: 9, low: 12 },
    lastScan: '3d ago',
  },
  {
    id: 7,
    name: 'Staging Environment',
    type: 'Greybox',
    status: 'scheduled',
    progress: 0,
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: 'Scheduled',
  },
  {
    id: 8,
    name: 'CDN Infrastructure',
    type: 'Blackbox',
    status: 'scheduled',
    progress: 0,
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: 'Scheduled',
  },
  {
    id: 9,
    name: 'Legacy API v1',
    type: 'Blackbox',
    status: 'failed',
    progress: 23,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: 'Failed',
  },
  {
    id: 10,
    name: 'Database Cluster',
    type: 'Greybox',
    status: 'failed',
    progress: 15,
    vulnerabilities: { critical: 0, high: 1, medium: 3, low: 2 },
    lastScan: 'Failed',
  },
];

// Active Scan Detail Data
export const activeScanData = {
  id: 'new-scan-001',
  progress: 0,
  status: 'In Progress',
  currentStep: 0, // 0: Spidering, 1: Mapping, 2: Testing, 3: Validating, 4: Reporting
  steps: [
    { name: 'Spidering', icon: 'Spider', active: true, completed: false },
    { name: 'Mapping', icon: 'Map', active: false, completed: false },
    { name: 'Testing', icon: 'TestTube', active: false, completed: false },
    { name: 'Validating', icon: 'CheckCircle', active: false, completed: false },
    { name: 'Reporting', icon: 'FileText', active: false, completed: false },
  ],
  metadata: {
    scanType: 'Grey Box',
    targets: 'google.com',
    startedAt: 'Nov 22, 09:00AM',
    credentials: '2 Active',
    files: 'Control.pdf',
    checklists: { current: 40, total: 350 },
  },
  console: {
    activityLog: [
      { timestamp: '09:00:00', message: "I'll begin a systematic penetration test on ", highlight: 'helpdesk.democorp.com', suffix: ". Let me start with reconnaissance and enumeration." },
      { timestamp: '09:01:00', message: "Good! target is online. Now let me perform port scanning to identify running services." },
      { timestamp: '09:02:00', message: "Excellent reconnaissance results:" },
      { timestamp: '', message: "- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)", indent: true },
      { timestamp: '', message: "Let me probe the web server on target first to understand its structure.", indent: true },
      { timestamp: '09:03:00', message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: ", highlight: '"TODO: Delete the testing account (test:test)"', suffix: ". Let me test this credential. The login redirects to ", highlight2: '/password/test', suffix2: ". Let me follow that path and explore it." },
      { timestamp: '09:04:00', message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to ", highlight: "'#'", suffix: " which means the current page. Let me try a different approach." },
      { timestamp: '09:05:00', message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the ", highlight: 'test:test', suffix: " password directly on other endpoints." },
      { timestamp: '09:06:00', message: "Great! I can access the dashboard using the ", highlight: "'X-UserId: 10032'", suffix: ' header. The dashboard shows "Welcome, John Doe". This suggests an ', highlight2: '**IDOR vulnerability**', suffix2: " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..." },
    ],
    verificationLoops: [
      { timestamp: '09:10:00', message: "Starting verification loop for SQL injection findings..." },
      { timestamp: '09:11:00', message: "Confirmed: Time-based blind SQL injection in /api/users/profile" },
      { timestamp: '09:12:00', message: "Verified: Authentication bypass possible via parameter manipulation" },
    ],
  },
  findings: [
    {
      id: 1,
      severity: 'critical',
      timestamp: '10:45:23',
      title: 'SQL Injection in Authentication Endpoint',
      endpoint: '/api/users/profile',
      description: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.',
    },
    {
      id: 2,
      severity: 'high',
      timestamp: '10:45:23',
      title: 'Unauthorized Access to User Metadata',
      endpoint: '/api/auth/login',
      description: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
    },
    {
      id: 3,
      severity: 'medium',
      timestamp: '10:45:23',
      title: 'Broken Authentication Rate Limiting',
      endpoint: '/api/search',
      description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
    },
  ],
  stats: {
    subAgents: 4,
    parallelExecutions: 2,
    operations: 1247,
    vulnerabilities: { critical: 1, high: 1, medium: 1, low: 0 },
  },
};

// User Data
export const userData = {
  email: 'admin@edu.com',
  role: 'Security Lead',
  avatar: null,
};
