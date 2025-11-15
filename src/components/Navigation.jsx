import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/jol-vs-jolco', label: 'JOL vs. JOLCO' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/recent-trends', label: 'Recent Trends' },
    { path: '/active-participants', label: 'Active Participants' },
    { path: '/parties', label: 'Parties' },
    { path: '/economics', label: 'Economics' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-lg"
            aria-label="Japanese Operating Lease - Home"
          >
            <img 
              src="/jollogo.png" 
              alt="JOL Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold text-gray-900 hidden sm:block">
              Japanese Operating Lease
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                  isActive(item.path)
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu" 
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                    isActive(item.path)
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;

