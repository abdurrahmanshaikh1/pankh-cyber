const MissionVision = () => {
  return (
 <section className="bg-gradient-to-br from-[#0B1220] via-[#050F18] to-[#030911] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-xl border border-[#00E5FF]/20 rounded-3xl p-10 hover:border-[#00E5FF]/40 hover:shadow-[#00E5FF]/20 transition-all duration-500 group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#00E5FF] to-[#0088CC] rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-[#00E5FF]/40 group-hover:rotate-6 transition-transform">
              <svg className="w-10 h-10 text-[#0F1A2F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-slate-200 text-lg leading-relaxed">
              Educate and empower every individual in India with knowledge and tools to stay safe online through ethical hacking, cybercrime investigation training, and innovative platforms like Rudra app.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-xl border border-[#00E5FF]/20 rounded-3xl p-10 hover:border-[#00E5FF]/40 hover:shadow-[#00E5FF]/20 transition-all duration-500 group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#00E5FF] to-[#0088CC] rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-[#00E5FF]/40 group-hover:-rotate-6 transition-transform">
              <svg className="w-10 h-10 text-[#0F1A2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-slate-200 text-lg leading-relaxed">
              Building a digitally secure India by nurturing the next generation of cyber warriors and making quality cybersecurity education accessible to all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
