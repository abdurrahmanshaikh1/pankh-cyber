const FounderSection = () => {
  return (
   <section className="bg-gradient-to-br from-[#0B1220] via-[#071827] to-[#051019] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Photo - Cyber glow effect */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00E5FF]/20 to-[#0088CC]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-[#00E5FF]/30 p-[3px] shadow-2xl shadow-[#00E5FF]/25 group-hover:shadow-[#00E5FF]/50">
                <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-8 lg:px-10 lg:py-12 flex items-center justify-center border border-[#00E5FF]/10">
                  <img
                    src="https://pankhs.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-4.10.30-PM.jpeg"
                    alt="Utkarsh Agrawal - Founder"
                    className="h-72 w-56 lg:h-80 lg:w-64 object-cover rounded-2xl shadow-2xl shadow-black/50 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-12 space-y-6">
            <div className="bg-white/3 backdrop-blur-xl border border-[#00E5FF]/20 rounded-2xl p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Meet Our <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">Founder</span>
              </h2>
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#00E5FF] mb-6">Utkarsh Agrawal</h3>
              
              <div className="space-y-4 text-slate-200 leading-relaxed mb-8">
                <p>A Certified Ethical Hacker (CEH), Cyber Crime Investigator, and founder of Pankh Cyber Solution.</p>
                <p>Trained hundreds of students and professionals in cybersecurity and digital forensics.</p>
                <p>Passionate about empowering youth to fight cyber crime and build a nation of cyber-literate citizens.</p>
              </div>

              <button className="w-full lg:w-auto bg-gradient-to-r from-[#00E5FF] to-[#0088CC] text-[#0F1A2F] py-4 px-8 rounded-2xl font-semibold text-lg shadow-xl shadow-[#00E5FF]/30 hover:shadow-[#00E5FF]/50 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                🔗 Connect with Utkarsh
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
