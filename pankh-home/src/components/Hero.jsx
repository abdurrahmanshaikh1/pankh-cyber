const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 flex items-center
      bg-gradient-to-b from-[#0B1220] via-[#0F1A2F] to-[#0B1220]
      overflow-hidden"
    >
      {/* Cyber Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00E5FF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0088CC]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 mb-6
        rounded-full border border-[#00E5FF]/30
        bg-[#0F1A2F]/80 backdrop-blur-md
        text-[#00E5FF] text-sm font-medium">
          🚀 Cyber Security Training Platform
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Secure Your{" "}
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">
            Digital Future
          </span>
          <br />
          With Industry Experts
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg md:text-xl">
          Learn ethical hacking, penetration testing, SOC analysis and
          real-world cyber defense skills with hands-on projects.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#courses"
            className="px-8 py-4 rounded-xl font-semibold
            bg-gradient-to-r from-[#00E5FF] to-[#0088CC]
            text-[#0B1220] shadow-lg
            hover:scale-105 transition-all"
          >
            Explore Courses
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-semibold
            border border-[#00E5FF]/40 text-white
            backdrop-blur-md
            hover:bg-[#00E5FF]/10 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
