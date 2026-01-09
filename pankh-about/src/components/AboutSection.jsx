const AboutSection = () => {
  return (
   <section className="bg-gradient-to-r from-[#0B1220] via-[#06141F] to-[#041019] pt-28 pb-20 px-6 lg:pt-32">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-white/5 backdrop-blur-xl border border-[#00E5FF]/20 rounded-3xl p-8 lg:p-12 inline-block mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">Pankh Cyber Solution</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-200/90 max-w-3xl mx-auto leading-relaxed">
            Empowering India with cybersecurity awareness, investigation support, and protection for individuals, institutions, and businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
