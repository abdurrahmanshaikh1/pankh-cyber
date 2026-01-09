import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#0B1220]/95 backdrop-blur-xl border-b border-[#00E5FF]/20'
        : 'bg-[#0B1220]/80 backdrop-blur-xl'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-11 h-11 rounded-xl overflow-hidden 
border border-[#00E5FF]/30 
shadow-[0_0_20px_rgba(0,229,255,0.25)]
group-hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]
transition-all">
                <img
                  src={logo}
                  alt="Pankh Cyber Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Pankh Cyber
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-[#00E5FF] font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E5FF] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-[#00E5FF] font-medium transition-colors duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E5FF] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#courses" className="text-gray-300 hover:text-[#00E5FF] font-medium transition-colors duration-200 relative group">
              Courses
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E5FF] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#app" className="text-gray-300 hover:text-[#00E5FF] font-medium transition-colors duration-200 relative group">
              Rudra App
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E5FF] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="text-gray-300 hover:text-[#00E5FF] font-medium transition-colors duration-200 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E5FF] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#00E5FF] font-medium transition-colors duration-200 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E5FF] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#0088CC] text-[#0F1A2F] font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-200 shadow-lg hover:from-[#00E5FF]/90"
            aria-label="Get started with cybersecurity training"
          >
            Start Learning
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-1 ml-2 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] rounded-lg"
            aria-label="Toggle menu"
            aria-expanded="false"
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
