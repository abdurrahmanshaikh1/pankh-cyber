import { Download, Info } from 'lucide-react'; // Optional: npm i lucide-react

const RudraHeroBanner = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0B1220] to-[#0F1A2F] overflow-hidden min-h-[500px] flex items-center justify-center px-6">
      {/* Subtle cyber grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#00E5FF33_1px,transparent_1px),linear-gradient(#00E5FF33_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24 z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start space-y-8">
          <div className="relative">
            {/* Eye logo matching cyan theme */}
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              className="drop-shadow-2xl filter brightness-110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="90" cy="90" r="80" fill="#00E5FF" opacity="0.9" />
              <circle cx="90" cy="90" r="55" fill="#0088CC" />
              <ellipse cx="68" cy="85" rx="14" ry="18" fill="#0B1220" />
              <ellipse cx="112" cy="85" rx="14" ry="18" fill="#0B1220" />
              <circle cx="64" cy="82" r="5" fill="#00E5FF" />
              <circle cx="116" cy="82" r="5" fill="#00E5FF" />
              <circle cx="90" cy="90" r="85" fill="none" stroke="#00E5FF" strokeWidth="3" opacity="0.6" />
            </svg>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent mb-4 drop-shadow-lg">
              Rudra
            </h1>
            <p className="text-xl font-semibold text-[#00E5FF] uppercase tracking-widest">
              Cyber Guardian
            </p>
          </div>
        </div>

        {/* Content Card - Matches CoursesSection glassmorphism */}
        <div className="group relative bg-gradient-to-br from-[#0F1A2F]/90 to-[#1a2a44]/90 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-[#00E5FF]/30 hover:border-[#00E5FF]/60 hover:-translate-y-2 transition-all duration-500 shadow-2xl max-w-lg mx-auto lg:mx-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Rudra – Cyber Safety App
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Access legal aid instantly. Report cybercrimes and stay protected online. Built by Parnesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.pankh.rudra&pli=1"
              className="group/btn flex-1 bg-gradient-to-r from-[#00E5FF] to-[#0088CC] hover:from-[#00E5FF]/90 hover:to-[#0088CC]/90 text-[#0B1220] font-bold py-4 px-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,229,255,0.3)] flex items-center justify-center gap-3 font-semibold"
            >
              <Download className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" />
              Download Now
            </a>
            <a
              href="#learn"
              className="flex-1 border-2 border-[#00E5FF]/40 hover:border-[#00E5FF]/80 bg-white/5 backdrop-blur-sm text-[#00E5FF] hover:text-white font-semibold py-4 px-8 rounded-2xl text-center transition-all duration-300 hover:bg-[#00E5FF]/10 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <Info className="w-5 h-5" />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RudraHeroBanner;
