const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The CEH Masterclass was a game changer. The sessions were practical and helped me land a job in cyber forensics.",
      name: "Cyber Forensics Student",
    },
    {
      quote:
        "Pankh’s investigation support helped us recover ₹2.5 lakh in a cyber scam. Truly grateful!",
      name: "Corporate Client",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0F1A2F] to-[#0A1120] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          What Our <span className="text-cyan-400">Students & Clients</span> Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Real feedback from learners and clients who trusted Pankh Cyber
          Solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <figure
              key={index}
              className="relative rounded-2xl p-8 border border-cyan-400/20
                         bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20
                         transition-all duration-300 hover:-translate-y-2"
            >
              <blockquote className="text-gray-200 text-lg leading-relaxed italic mb-6">
                “{item.quote}”
              </blockquote>
              <figcaption className="text-cyan-300 font-semibold">
                {item.name}
              </figcaption>
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 hover:opacity-100 transition" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
