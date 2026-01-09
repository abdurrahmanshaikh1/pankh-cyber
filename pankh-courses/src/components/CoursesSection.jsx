import React from 'react';

const CEHIcon = () => (
  <svg className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M7 13L9 15L11 13" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="5" y="16" width="14" height="5" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="18.5" r="1.5" fill="currentColor"/>
  </svg>
);

const CyberLawIcon = () => (
  <svg className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M15 15L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 4L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M14 8L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BeginnersIcon = () => (
  <svg className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H15V19C15 17.9 14.1 17 13 17H11C9.9 17 9 17.9 9 19V21Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8V4C10 2.9 10.9 2 12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M7 8H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

const PentestIcon = () => (
  <svg className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8L18 6L12 2L6 6L9 8L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 17V21M12 21L10 19M12 21L14 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="16" cy="10" r="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="8" cy="14" r="1.5" fill="currentColor"/>
  </svg>
);

const courses = [
  { title: "Certified Ethical Hacker (CEH)", price: "₹18,000", subtitle: "Industry Certified", icon: <CEHIcon /> },
  { title: "Cyber Crime & Cyber Law in India", price: "₹18,000", subtitle: "Industry Certified", icon: <CyberLawIcon /> },
  { title: "Ethical Hacking for Beginners", price: "₹18,000", subtitle: "Industry Certified", icon: <BeginnersIcon /> },
  { title: "Web Pentesting (WP & WT)", price: "₹18,000", subtitle: "Industry Certified", icon: <PentestIcon /> },
];

const CoursesSection = () => {
  return (
    <section className="bg-gradient-to-tr from-[#0B1220] via-[#04121D] to-[#020811] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 inline-block">
            Our <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Certified by Industry Experts in Cyber Security
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-[#00E5FF]/20 rounded-3xl p-8 h-full hover:border-[#00E5FF]/50 hover:shadow-2xl hover:shadow-[#00E5FF]/25 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* Floating Icon Circle */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-[#00E5FF] to-[#0088CC] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#00E5FF]/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10">
                {course.icon}
              </div>

              {/* Card Content */}
              <div className="pt-16 text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">{course.subtitle}</p>
                </div>
                
                {/* Price & Button */}
                <div className="space-y-4">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">
                    {course.price}
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#00E5FF] to-[#0088CC] text-black font-semibold py-3 px-6 rounded-2xl hover:from-[#00B8D4] hover:to-[#0066A8] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00E5FF]/30">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
