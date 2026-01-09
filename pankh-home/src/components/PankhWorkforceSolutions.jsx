import { Users, Briefcase, FileText, Building2 } from 'lucide-react'; // Optional: npm i lucide-react

const PankhWorkforceSolutions = () => {
  const solutions = [
    {
      title: "Talent Acquisition",
      description: "End-to-end recruitment & non-technical hiring.",
      icon: Users,
      color: "from-[#00E5FF] to-[#0088CC]"
    },
    {
      title: "Payroll & Compliance",
      description: "Accurate payroll processing with compliance support.",
      icon: FileText,
      color: "from-[#00E5FF] to-[#0088CC]"
    },
    {
      title: "HR Operations",
      description: "Policies and organizational structuring.",
      icon: Briefcase,
      color: "from-[#00E5FF] to-[#0088CC]"
    },
    {
      title: "Employee Engagement",
      description: "Retention and development programs.",
      icon: Building2,
      color: "from-[#00E5FF] to-[#0088CC]"
    }
  ];

  return (
    <section id="workforce" className="py-24 bg-gradient-to-b from-[#0B1220] to-[#0F1A2F] relative overflow-hidden">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#00E5FF22_1px,transparent_1px),linear-gradient(#00E5FF22_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">
              Workforce Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategic HR solutions for growing businesses. Parnesh Workforce Consulting builds and retains the right talent with structured, compliant, and scalable workforce solutions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`
                  group relative
                  bg-gradient-to-br from-[#0F1A2F]/90 to-[#1a2a44]/90
                  backdrop-blur-xl rounded-3xl p-8 lg:p-10
                  border border-[#00E5FF]/20 hover:border-[#00E5FF]/50
                  hover:-translate-y-4 hover:shadow-[0_25px_50px_rgba(0,229,255,0.15)]
                  transition-all duration-500 cursor-pointer
                  hover:bg-[#00E5FF]/5
                `}
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto lg:mx-0 mb-6 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-[#0B1220] drop-shadow-lg" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center lg:text-left leading-tight group-hover:text-[#00E5FF] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 text-center lg:text-left leading-relaxed group-hover:text-gray-200 transition-colors">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
       <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center max-w-2xl mx-auto">
  <a
    href="#explore"
    className="flex-1 lg:flex-none w-full lg:w-auto bg-gradient-to-r from-[#00E5FF] to-[#0088CC] hover:from-[#00E5FF]/90 hover:to-[#0088CC]/90 text-[#0B1220] font-bold py-5 px-12 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,229,255,0.3)] text-center font-semibold"
  >
    Explore Workforce Solutions
  </a>
  <a
    href="#hiring"
    className="flex-1 lg:flex-none w-full lg:w-auto border-2 border-[#00E5FF]/40 hover:border-[#00E5FF]/80 bg-white/5 backdrop-blur-sm text-[#00E5FF] hover:text-white font-semibold py-5 px-12 rounded-2xl text-lg transition-all duration-300 hover:bg-[#00E5FF]/10 hover:shadow-xl text-center"
  >
    Request Hiring
  </a>
</div>

      </div>
    </section>
  );
};

export default PankhWorkforceSolutions;
