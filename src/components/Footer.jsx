import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/jol-vs-jolco', label: 'JOL vs. JOLCO' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/recent-trends', label: 'Recent Trends' },
    { path: '/active-participants', label: 'Active Participants' },
    { path: '/parties', label: 'Parties' },
    { path: '/economics', label: 'Economics' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/jollogo.png" 
                alt="JOL Logo" 
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold text-white">
                Japanese Operating Lease
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Providing comprehensive information about Japanese Operating Leases and their application in the aviation industry.
            </p>
          </div>

          {/* Quick Links - Two Columns on Medium+ Screens */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-white transition-colors focus:outline-none focus:underline focus:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Japanese Operating Lease - JOL. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#privacy" 
                className="text-sm hover:text-white transition-colors focus:outline-none focus:underline focus:text-white"
              >
                Privacy Policy
              </a>
              <a 
                href="#legal" 
                className="text-sm hover:text-white transition-colors focus:outline-none focus:underline focus:text-white"
              >
                Legal Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

