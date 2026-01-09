const WhoWeAreSection = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-[#0F1A2F] to-[#0A1421]"
    >
      {/* Floating background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 -left-32 w-72 h-72 bg-[#00E5FF]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 -right-32 w-96 h-96 bg-[#0088CC]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-[#00E5FF] font-semibold border border-[#00E5FF]/30 bg-gradient-to-r from-[#00E5FF]/20 to-[#0088CC]/20 backdrop-blur-sm">
              ⚡ India’s Cybersecurity Pioneers
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Who We
              </span>{" "}
              <span className="block bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">
                Are
              </span>
            </h2>

            <div className="rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-[#0F1A2F]/90 to-[#1a2a44]/90 backdrop-blur-xl border border-[#00E5FF]/20 shadow-2xl">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
                <span className="font-bold text-[#00E5FF]">Pankh Cyber Solution</span> is a
                next-gen cybersecurity company based in{" "}
                <span className="font-semibold text-white">Gwalior, Madhya Pradesh</span>,
                founded by expert <span className="font-bold text-white">Utkarsh Agrawal</span>.
              </p>

              {/* FEATURES */}
              <div className="space-y-6">
                <Feature
                  title="Real-World Impact"
                  desc="Worked with law enforcement, businesses, and students to solve real cybercrime cases."
                />
                <Feature
                  title="Innovation First"
                  desc="RUDRA App – India’s first cyber-safety & legal emergency platform."
                />
              </div>

              <div className="mt-10 pt-10 border-t border-[#00E5FF]/20">
                <a
                  href="#courses"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-[#0F1A2F] bg-gradient-to-r from-[#00E5FF] to-[#0088CC] shadow-xl hover:scale-[1.03] transition"
                >
                  Explore Our Courses →
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE + STATS */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-[#0F1A2F]/90 to-[#1a2a44]/90 backdrop-blur-xl border border-[#00E5FF]/30 shadow-2xl">

              {/* IMAGE */}
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10">
                <img
                  src="https://pankhs.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-4.10.30-PM.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#0088CC] text-[#0F1A2F] shadow-xl">
                  <h3 className="font-bold text-lg">Utkarsh Agrawal</h3>
                  <p className="text-sm font-semibold">Founder & Cybersecurity Expert</p>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-6 text-center">
                <Stat value="50+" label="Cyber Cases Solved" />
                <Stat value="10K+" label="Students Trained" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* COMPONENTS */
const Feature = ({ title, desc }) => (
  <div className="flex gap-4 p-4 rounded-2xl bg-[#00E5FF]/10 border-l-4 border-[#00E5FF]">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#0088CC] flex items-center justify-center font-bold text-[#0F1A2F]">
      ✓
    </div>
    <div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  </div>
);

const Stat = ({ value, label }) => (
  <div>
    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">
      {value}
    </div>
    <p className="text-gray-400 text-sm uppercase tracking-wider mt-2">{label}</p>
  </div>
);

export default WhoWeAreSection;
