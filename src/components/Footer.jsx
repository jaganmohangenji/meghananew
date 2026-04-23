import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-dark)] text-white pt-16 pb-8 border-t-4 border-[var(--color-orange)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center p-1 shrink-0 overflow-hidden">
                <img
                  src="/assets/logos/mt-logo.png"
                  alt="Meghana Technologies Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-poppins font-bold text-xl tracking-tight">
                Meghana Tech
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-[var(--color-tech-blue)] pl-3">
              Providing defense-grade hardware and software solutions since 2010. Specializing in RFID, Biometrics, and Custom Application Development.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-tech-blue)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-tech-blue)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-tech-blue)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div> */}
            <div className="flex flex-col gap-3">

              {/* Row 1 → Phones */}
              <div className="flex flex-col sm:flex-row gap-4">

                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  📞 <span>9553902123</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  📞 <span>8688118023</span>
                </div>

              </div>

              {/* Row 2 → Email */}
              <div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-fit">
                  ✉️ <span>contact@meganatechnologies.com</span>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6 text-white inline-block border-b-2 border-[var(--color-tech-blue)] pb-1">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-sm flex items-center"><span className="text-[var(--color-tech-blue)] mr-2">•</span> Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-sm flex items-center"><span className="text-[var(--color-tech-blue)] mr-2">•</span> About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-sm flex items-center"><span className="text-[var(--color-tech-blue)] mr-2">•</span> Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-sm flex items-center"><span className="text-[var(--color-tech-blue)] mr-2">•</span> Naval Projects</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6 text-white inline-block border-b-2 border-[var(--color-tech-blue)] pb-1">Core Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/security-systems" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-sm">Security Systems</Link></li>
              <li><Link to="/services/software-development" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-sm">RFID Solutions</Link></li>
              <li><Link to="/services/software-development" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-sm">Custom Software</Link></li>
              <li><Link to="/services/security-systems" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-sm">Biometric Integration</Link></li>
              <li><Link to="/services/civil-works" className="text-gray-400 hover:text-[var(--color-orange)] transition-colors text-sm">Infrastructure Civil Works</Link></li>
            </ul>
          </div>

          {/* Newsletter / Working Hours */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6 text-white inline-block border-b-2 border-[var(--color-tech-blue)] pb-1">Business Hours</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Monday - Saturday:</span>
                <span className="text-white">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sunday:</span>
                <span className="text-[var(--color-orange)]">Closed</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Emergency Support:</span>
                <span className="text-[var(--color-tech-blue)] font-bold">24 / 7</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Meghana Technologies. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
