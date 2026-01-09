const CoursesSection = () => {
  const courses = [
    {
      title: "Certified Ethical Hacker (CEH) Masterclass",
      duration: "4 Months",
      price: "₹9,999",
      description: "Learn in-depth ethical hacking tools, methodologies, and penetration testing with real-world simulations.",
      icon: "🔒"
    },
    {
      title: "Cyber Crime Investigation & Law in India",
      duration: "1 Month",
      price: "₹1,999",
      description: "Master Indian cyber laws, digital evidence, FIR processes, and investigation frameworks.",
      icon: "⚖️"
    },
    {
      title: "Website Penetration Testing Bootcamp",
      duration: "2 Months",
      price: "₹2,999",
      description: "Hands-on SQLi, XSS, CSRF and OWASP Top 10 vulnerabilities.",
      icon: "🛡️"
    },
    {
      title: "Ethical Hacking for Beginners",
      duration: "2 Months",
      price: "₹2,999",
      description: "Ethical hacking fundamentals, Linux basics, Nmap & Wireshark.",
      icon: "🚀"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-[#0B1220] to-[#0F1A2F]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white">
            Courses That{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088CC] bg-clip-text text-transparent">
              Transform Careers
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="
                group relative
                bg-gradient-to-br from-[#0F1A2F]/80 to-[#1a2a44]/80
                backdrop-blur-xl
                rounded-3xl
                p-10
                border border-[#00E5FF]/20
                hover:border-[#00E5FF]/50
                hover:-translate-y-4
                transition-all duration-500
              "
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl
                bg-gradient-to-br from-[#00E5FF] to-[#0088CC]
                flex items-center justify-center text-3xl text-[#0F1A2F]">
                {course.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {course.title}
              </h3>

              <p className="text-gray-300 text-center mb-6">
                {course.description}
              </p>

              <div className="flex justify-between items-center border-t border-[#00E5FF]/20 pt-6">
                <span className="text-[#00E5FF]">⏳ {course.duration}</span>
                <span className="text-2xl font-bold text-[#00E5FF]">{course.price}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
