# Fenrir Frontend

A production-grade React application for Fenrir Security - a B2B SaaS security platform. This project implements a comprehensive security scanning dashboard with dark/light mode support, responsive design, and interactive components.

## Live Demo

[View Live Application](fenrir-frontend-ten.vercel.app)

## Screenshots

The application includes three main screens:

1. **Login Page** - Split-layout authentication screen with social login options
2. **Dashboard** - Security scan overview with stats, filters, and scan management
3. **Scan Detail** - Live console output and vulnerability findings for active scans

## Features

- **Three Connected Screens**: Login → Dashboard → Scan Detail with smooth navigation
- **Dark & Light Mode**: Fully implemented theme toggle with native-feeling color schemes
- **Responsive Design**: Optimized for mobile (375px) and desktop (1280px+)
- **Interactive Components**: 
  - Functional tabs, buttons, and form inputs
  - Search and filter capabilities
  - Toast notifications and state changes
- **Mock Data**: Realistic security scan data and vulnerability findings
- **Professional UI**: Clean typography, consistent spacing, and polished components

## Tech Stack

- **Framework**: React 19.2 with Vite 7.3
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/crystaljain27/fenrir-frontend.git
cd fenrir-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── auth/          # Login form components
│   ├── dashboard/     # Dashboard stats and scan table
│   ├── layout/        # Sidebar, header, layout wrapper
│   ├── scan-detail/   # Progress tracker, console, findings
│   └── ui/            # Reusable UI components (Button, Card, Badge, etc.)
├── pages/
│   ├── Login.jsx      # Authentication screen
│   ├── Dashboard.jsx  # Main dashboard with scan list
│   ├── Scans.jsx      # Scans management page
│   └── ScanDetail.jsx # Active scan detail view
├── hooks/
│   └── useTheme.js    # Dark/light mode toggle hook
├── data/
│   └── mockData.js    # Mock scan and vulnerability data
├── App.jsx            # Main app with routing
└── main.jsx           # Entry point
```

## Design System

### Colors
- **Primary Accent**: Teal (#0CC8A8) - CTAs, active states, progress indicators
- **Severity Colors**:
  - Critical: Red
  - High: Orange
  - Medium: Yellow/Amber
  - Low: Green
- **Dark Mode**: Near-black backgrounds (#0F0F0F to #1A1A1A)
- **Light Mode**: White to light gray (#F5F5F5)

### Typography
- Font: Inter (sans-serif)
- Clear hierarchy with consistent heading and body sizes

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Navigation Flow

1. **Login** → Submit form → Dashboard
2. **Dashboard** → Click scan row → Scan Detail
3. **Scan Detail** → Back button → Dashboard
4. **Theme Toggle** → Available on all screens via header

## Known Limitations

- Mock data is static and does not persist changes
- No real backend integration (as per requirements)
- Social login buttons are UI-only (no actual OAuth)

## Deployment

This project is configured for easy deployment on:
- **Vercel**: Connect GitHub repo and deploy
- **Netlify**: Drag and drop the `dist/` folder or connect repo

Make sure to set the build command to `npm run build` and output directory to `dist`.

## License

This project was created as part of a technical assessment for Fenrir Security Private Limited.
