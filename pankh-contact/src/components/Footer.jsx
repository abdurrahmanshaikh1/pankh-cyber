const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A1421]/80 backdrop-blur-xl border-t border-[#00E5FF]/20 pt-20 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-[#00E5FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-64 h-64 bg-[#0088CC]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00E5FF] to-[#0088CC] rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-[#0F1A2F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Pankh Cyber
                </h3>
                <p className="text-gray-400 text-sm">Securing India's Digital Future</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Cutting-edge cybersecurity solutions from Gwalior, empowering students, businesses,
              and law enforcement with ethical hacking and cybercrime investigation expertise.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/pankh.digitalguard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#00E5FF]/20 hover:bg-[#00E5FF]/40 rounded-xl flex items-center justify-center text-[#00E5FF] hover:scale-110 transition-all duration-200" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 011.784 1.048 4.92 4.92 0 011.048 1.784c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.922 4.922 0 01-1.048 1.784 4.922 4.922 0 01-1.784 1.048c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.922 4.922 0 01-1.784-1.048 4.922 4.922 0 01-1.048-1.784c-.163-.457-.347-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 011.048-1.784 4.92 4.92 0 011.784-1.048c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.176 0-3.554.012-4.805.069-1.03.048-1.588.218-1.956.362a3.042 3.042 0 00-1.107.728 3.042 3.042 0 00-.728 1.107c-.144.368-.314.926-.362 1.956-.057 1.251-.069 1.629-.069 4.805s.012 3.554.069 4.805c.048 1.03.218 1.588.362 1.956.17.416.402.772.728 1.107.335.326.691.558 1.107.728.368.144.926.314 1.956.362 1.251.057 1.629.069 4.805.069s3.554-.012 4.805-.069c1.03-.048 1.588-.218 1.956-.362a3.042 3.042 0 001.107-.728 3.042 3.042 0 00.728-1.107c.144-.368.314-.926.362-1.956.057-1.251.069-1.629.069-4.805s-.012-3.554-.069-4.805c-.048-1.03-.218-1.588-.362-1.956a3.042 3.042 0 00-.728-1.107 3.042 3.042 0 00-1.107-.728c-.368-.144-.926-.314-1.956-.362-1.251-.057-1.629-.069-4.805-.069zm0 3.677a5.34 5.34 0 110 10.68 5.34 5.34 0 010-10.68zm0 1.838a3.502 3.502 0 100 7.004 3.502 3.502 0 000-7.004zm5.406-2.01a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
              </a>


              {/* YouTube */}
              <a href="https://www.youtube.com/@pankhcybersolution" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#00E5FF]/20 hover:bg-[#00E5FF]/40 rounded-xl flex items-center justify-center text-[#00E5FF] hover:scale-110 transition-all duration-200" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.998 2.998 0 00-2.116-2.117C19.417 3.5 12 3.5 12 3.5s-7.417 0-9.382.569a2.998 2.998 0 00-2.116 2.117A31.013 31.013 0 000 12a31.013 31.013 0 00.502 5.814 2.998 2.998 0 002.116 2.117c1.965.569 9.382.569 9.382.569s7.417 0 9.382-.569a2.998 2.998 0 002.116-2.117A31.013 31.013 0 0024 12a31.013 31.013 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>  


              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/pankh-cyber-solution/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#00E5FF]/20 hover:bg-[#00E5FF]/40 rounded-xl flex items-center justify-center text-[#00E5FF] hover:scale-110 transition-all duration-200" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#courses" className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 block py-1 hover:translate-x-2">Courses</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 block py-1 hover:translate-x-2">Services</a></li>
              <li><a href="#app" className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 block py-1 hover:translate-x-2">Rudra App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 block py-1 hover:translate-x-2">Internship</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 block py-1 hover:translate-x-2">Blog</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 block py-1 hover:translate-x-2">CEH Masterclass</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 block py-1 hover:translate-x-2">Penetration Testing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 block py-1 hover:translate-x-2">Cyber Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-200 block py-1 hover:translate-x-2">Ethical Hacking</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#00E5FF]/20 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p>Gwalior, Madhya Pradesh</p>
                  <p className="text-sm text-gray-500">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#00E5FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:support@pankhs.com" className="hover:text-[#00E5FF] transition-colors duration-200">support@pankhs.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#00E5FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+918839739085" className="hover:text-[#00E5FF] transition-colors duration-200">+91 88397 39085</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#00E5FF]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Pankh Cyber Solution. All rights reserved. | Built with ❤️ for India's digital safety.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 justify-center md:justify-end">
            <a href="#" className="hover:text-[#00E5FF] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
