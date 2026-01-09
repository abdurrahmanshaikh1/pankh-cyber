import React from 'react';

const FoundationIcon = () => (
  <svg className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L8 8H16L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <rect x="7" y="8" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    <path d="M9 8H15" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const CollaborationsIcon = () => (
  <svg className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="2,2"/>
    <path d="M6 12H10M14 12H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8 14L10 12L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const TrainingIcon = () => (
  <svg className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20V15C4 12 6 10 9 10H15C18 10 20 12 20 15V20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 4L9 8H15L12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="10" cy="16" r="1" fill="currentColor"/>
    <circle cx="14" cy="16" r="1" fill="currentColor"/>
    <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
  </svg>
);

const AppLaunchIcon = () => (
  <svg className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    <path d="M12 3L15 9L18 7L12 3L6 7L9 9L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="14" r="1.5" fill="currentColor"/>
    <path d="M12 17L14 21L12 19L10 21L12 17Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
);


const journeyData = [
  {
    year: "2022",
    title: "Foundation of Pankh Cyber Solution",
    description: "Started in Gwalior with the mission to promote cybersecurity awareness and training.",
    icon: <FoundationIcon />,
  },
  {
    year: "2023",
    title: "National Collaborations",
    description: "Partnered with institutions and authorities for cyber awareness campaigns.",
    icon: <CollaborationsIcon />,
  },
  {
    year: "2024",
    title: "1000+ Students Trained",
    description: "Delivered top‑tier training on CEH, Cyber Law, and ethical hacking.",
    icon: <TrainingIcon />,
  },
  {
    year: "2025",
    title: "Launch of Rudra App",
    description: "Launched our cyber safety app to help citizens report incidents and get help quickly.",
    icon: <AppLaunchIcon />,
  },
];


const JourneyTimeline = () => {
  return (
    <section className="bg-gradient-to-tr from-[#0B1220] via-[#04121D] to-[#020811] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 inline-block">
            Our <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00E5FF]/30 to-[#0088CC]/30"></div>
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div key={item.year} className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'}`}>
                  <div className="bg-white/5 backdrop-blur-xl border border-[#00E5FF]/20 rounded-2xl p-8 hover:border-[#00E5FF]/40 hover:shadow-[#00E5FF]/20 transition-all duration-300 group relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-[#00E5FF] to-[#0088CC] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00E5FF]/40 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    
                    <div className="pt-12">
                      <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">{item.year}</h3>
                      <h4 className="text-lg font-bold text-[#00E5FF] mb-3">{item.title}</h4>
                      <p className="text-slate-200 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
