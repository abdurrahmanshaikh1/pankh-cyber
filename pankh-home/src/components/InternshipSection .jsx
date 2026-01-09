const InternshipSection = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-[#0F1A2F]/80 to-[#1a2a44]/80 backdrop-blur-xl rounded-3xl border border-[#00E5FF]/20">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00E5FF]/10 via-transparent to-[#0088CC]/10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00E5FF]/30 to-[#0088CC]/30 backdrop-blur-sm rounded-2xl text-sm font-semibold text-[#00E5FF] border border-[#00E5FF]/40 mb-8">
            🚀 Limited Seats Available
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-[#00E5FF] bg-clip-text text-transparent mb-6 leading-tight">
            45-Days
            <span className="block bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent drop-shadow-lg">
              Cybersecurity Internship
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kickstart your career with our intensive 45-Day Online Internship.
            Perfect for B.Tech, BCA, LLB, and commerce students seeking hands-on
            cybersecurity experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Card 1 */}
              <div className="group relative bg-gradient-to-br from-[#0F1A2F]/80 to-[#1a2a44]/80 backdrop-blur-xl p-8 rounded-3xl border border-[#00E5FF]/20 hover:border-[#00E5FF]/40 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF]/20 to-[#0088CC]/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#00E5FF] to-[#0088CC] rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
                    📆
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">7 Weeks</h4>
                  <p className="text-gray-300">Structured learning path</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-gradient-to-br from-[#0F1A2F]/80 to-[#1a2a44]/80 backdrop-blur-xl p-8 rounded-3xl border border-[#00E5FF]/20 hover:border-[#00E5FF]/40 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF]/20 to-[#0088CC]/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#00E5FF] to-[#0088CC] rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
                    🧪
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Hands-On</h4>
                  <p className="text-gray-300">Live projects & labs</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="md:col-span-2 group relative bg-gradient-to-br from-[#0F1A2F]/80 to-[#1a2a44]/80 backdrop-blur-xl p-8 rounded-3xl border border-[#00E5FF]/20 hover:border-[#00E5FF]/40 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF]/20 to-[#0088CC]/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col lg:flex-row items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00E5FF] to-[#0088CC] rounded-2xl flex items-center justify-center shadow-xl">
                    🎓
                  </div>
                  <div className="text-center lg:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      QR Certificate
                    </h4>
                    <p className="text-gray-300 max-w-md">
                      Industry-recognized QR-enabled certificate + CV forwarding
                      for top performers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full">
              <a
                href="#apply"
                className="flex-1 inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-[#00E5FF] to-[#0088CC] text-[#0F1A2F] font-bold text-lg rounded-2xl shadow-xl hover:scale-[1.03] transition"
              >
                Apply Now →
              </a>
              <a
                href="#details"
                className="flex-1 inline-flex items-center justify-center px-8 py-5 border-2 border-[#00E5FF]/50 text-[#00E5FF] font-semibold text-lg rounded-2xl hover:bg-[#00E5FF]/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – Timeline */}
          <div className="relative bg-gradient-to-br from-[#0F1A2F]/90 to-[#1a2a44]/90 backdrop-blur-xl rounded-3xl p-10 lg:p-12 shadow-2xl border border-[#00E5FF]/30">
            <h3 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">
              Your Learning Journey
            </h3>

            <div className="space-y-8">
              {[
                { week: "Week 1-2", title: "Ethical Hacking", icon: "🔒" },
                { week: "Week 3-4", title: "Networking & Forensics", icon: "🌐" },
                { week: "Week 5-6", title: "Bug Bounty", icon: "🪲" },
                { week: "Week 7", title: "Final Project", icon: "🎯" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00E5FF] to-[#0088CC] rounded-2xl flex items-center justify-center text-xl shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <span className="inline-block mb-1 px-3 py-1 text-sm rounded-full bg-[#00E5FF]/20 text-[#00E5FF]">
                      {item.week}
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">
                      Live sessions + practical labs
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-10 border-t border-[#00E5FF]/20 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">
                  100% Online
                </div>
                <p className="text-gray-400 text-sm">Learn anywhere</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">
                  Live Sessions
                </div>
                <p className="text-gray-400 text-sm">Expert mentors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
