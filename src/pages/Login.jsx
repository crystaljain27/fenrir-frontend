import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Sun, Moon, Shield, Zap, Lock, ArrowRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Login = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Minimum 8 characters';
    }
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Please accept the terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      setTimeout(() => navigate('/dashboard'), 1000);
    } else {
      setErrors(newErrors);
    }
  };

  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Results in hours, not weeks' },
    { icon: Shield, title: 'Enterprise Ready', desc: 'SOC 2 Type II certified' },
    { icon: Lock, title: 'Zero False Positives', desc: 'Every finding validated' },
  ];

  return (
    <div className="min-h-screen flex bg-white dark:bg-dark-950">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[42%] flex-col relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Gradient Decorations */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute top-32 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-48 right-16 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px]" />
        
        {/* Logo - Fixed Top Left */}
        <div className="absolute top-8 left-10 xl:left-14 z-20 flex items-center gap-3">
          <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-glow">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">Fenrir</span>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between h-full p-10 xl:p-14 pt-24">
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Enterprise Security,
              <br />
              <span className="text-primary">Simplified.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-md">
              Automated penetration testing that delivers validated vulnerabilities in hours. Trusted by security teams worldwide.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{feature.title}</p>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <span>© 2024 Fenrir Security</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-6 lg:p-8">
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center gap-2.5">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">Fenrir</span>
          </div>
          <div className="flex-1" />
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-dark-700 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-6 pb-12 lg:px-16">
          <div className="w-full max-w-[420px]">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Create account
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Already have an account?{' '}
                <button className="text-primary font-semibold hover:underline">
                  Sign in
                </button>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-dark-900 border ${errors.firstName ? 'border-red-500' : 'border-slate-200 dark:border-dark-700'} text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`}
                  />
                  {errors.firstName && <p className="mt-1.5 text-xs text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-dark-900 border ${errors.lastName ? 'border-red-500' : 'border-slate-200 dark:border-dark-700'} text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`}
                  />
                  {errors.lastName && <p className="mt-1.5 text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-dark-900 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-dark-700'} text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Min. 8 characters"
                    className={`w-full px-4 py-3 pr-12 rounded-xl text-sm bg-slate-50 dark:bg-dark-900 border ${errors.password ? 'border-red-500' : 'border-slate-200 dark:border-dark-700'} text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-dark-600 text-primary focus:ring-primary cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-primary font-medium hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-primary font-medium hover:underline">Privacy Policy</a>
                </label>
              </div>
              {errors.agreeToTerms && <p className="text-xs text-red-500 -mt-2">{errors.agreeToTerms}</p>}

              {/* Submit */}
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary-600 focus:ring-4 focus:ring-primary/25 disabled:opacity-60 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Creating account...
                  </>
                ) : (
                  <>
                    Create account
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-dark-700" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-sm text-slate-400 dark:text-slate-500 bg-white dark:bg-dark-950">
                  or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center py-3 rounded-xl border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-900 hover:bg-slate-50 dark:hover:bg-dark-800 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-700 dark:text-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </button>
              <button className="flex items-center justify-center py-3 rounded-xl border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-900 hover:bg-slate-50 dark:hover:bg-dark-800 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button className="flex items-center justify-center py-3 rounded-xl border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-900 hover:bg-slate-50 dark:hover:bg-dark-800 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#F25022" d="M1 1h10v10H1z"/>
                  <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                  <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                  <path fill="#FFB900" d="M13 13h10v10H13z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
