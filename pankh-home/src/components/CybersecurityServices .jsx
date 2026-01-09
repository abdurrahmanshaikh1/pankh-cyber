import { Shield, Gavel, Users, Zap } from 'lucide-react'; 

const CybersecurityServices = () => {
  const services = [
    {
      title: "Penetration Testing",
      description: "Full network and web hacker simulation testing included.",
      icon: Shield,
      color: "from-[#00E5FF] to-[#0088CC]"
    },
    {
      title: "Cyber Crime Investigation",
      description: "Expert digital evidence collection and analysis.",
      icon: Gavel,
      color: "from-[#00E5FF] to-[#0088CC]"
    },
    {
      title: "Security Awareness Training",
      description: "Train your team on phishing, social engineering, and secure browsing habits.",
      icon: Users,
      color: "from-[#00E5FF] to-[#0088CC]"
    },
    {
      title: "Incident Response",
      description: "Quick and effective mitigation of active breaches or attacks with professional teams.",
      icon: Zap,
      color: "from-[#00E5FF] to-[#0088CC]"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#0B1220] to-[#0F1A2F] relative overflow-hidden">
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
              Cybersecurity Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses and individuals with powerful security solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                <div className="w-20 h-20 mx-auto lg:mx-0 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-[#0B1220] drop-shadow-lg" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center lg:text-left leading-tight group-hover:text-[#00E5FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center lg:text-left leading-relaxed group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/20 to-[#0088CC]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CybersecurityServices;
