import React from "react";

const caseStudies = [
  {
    title: "Online Loan Fraud Busted",
    description:
      "A woman in Gwalior lost ₹75,000 through a fake loan app. Our team traced the scam to a phishing server, submitted digital evidence, and coordinated with local police to resolve the case.",
    tag: "Financial Fraud",
  },
  {
    title: "Instagram Blackmail Case",
    description:
      "A teenager’s private photos were leaked and used for blackmail. Our forensic team identified the anonymous sender and worked with the cyber cell to ensure justice.",
    tag: "Social Media Crime",
  },
  {
    title: "Business Email Compromise Resolved",
    description:
      "A company in Indore lost ₹1.2 lakh due to a spoofed email transaction. We traced the attacker’s IP and secured the system using SPF, DKIM, and DMARC.",
    tag: "Corporate Security",
    fullWidth: true,
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-gradient-to-br from-[#0F1A2F] to-[#0A1120] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Case <span className="text-cyan-400">Studies</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Real-life cyber crime success stories handled by Pankh Cyber Solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border border-cyan-400/20 
              bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 
              transition-all duration-300 hover:-translate-y-2
              ${item.fullWidth ? "md:col-span-2" : ""}`}
            >
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                {item.tag}
              </span>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        <button className="mt-14 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition">
          Read More Stories
        </button>
      </div>
    </section>
  );
};

export default CaseStudies;
