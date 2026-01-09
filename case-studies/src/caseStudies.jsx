import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Added HardDrive to imports
import {
  Shield,
  Lock,
  X,
  ArrowRight,
  UserCheck,
  AlertCircle,
  Search,
  UserX,
  Image as ImageIcon,
  HardDrive,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// 1. Create an Icon Map to link the string names to the actual components
const iconMap = {
  Lock: Lock,
  UserCheck: UserCheck,
  ImageIcon: ImageIcon,
  Shield: Shield,
  HardDrive: HardDrive,
  Search: Search,
  UserX: UserX,
  AlertCircle: AlertCircle,
};

const SocialIcon = ({ icon, link }) => (
  <a 
    href={link || "#"} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
  >
    {icon}
  </a>
);

const socials = [
  { icon: <Instagram size={20} />, link: "https://www.instagram.com/pankh.digitalguard/" },
  { icon: <Linkedin size={20} />, link: "https://in.linkedin.com/company/pankh-cyber-solution" },
];

const cases = [
  {
    id: 1,
    title: "Online Scam Recovery",
    category: "Financial Fraud",
    summary:
      "A Gwalior-based entrepreneur was scammed ₹5 lakhs. We traced the digital trail and coordinated with cyber police to recover the amount within 3 weeks.",
    story:
      "A Gwalior-based entrepreneur was scammed out of ₹5 lakhs through an online fraudulent scheme. Our team immediately started tracing the digital trail by analyzing transaction logs, IP addresses, and communication records. We coordinated closely with the local cyber police and forensic experts. Within 3 weeks, the stolen amount was recovered and the fraudsters were apprehended.",
    status: "FUNDS RECOVERED",
    accent: "cyan",
    icon: "Lock",
  },
  {
    id: 2,
    title: "Instagram Blackmail Case",
    category: "Social Media",
    summary:
      "A college student was blackmailed via fake Instagram profiles. Our team identified the IP source and collaborated with law enforcement to arrest the accused.",
    story:
      "A college student became a victim of blackmail when fake Instagram profiles started threatening to leak private information. Our cybersecurity team performed a deep investigation to identify the IP source and the persons behind these profiles. We worked hand-in-hand with local law enforcement agencies, which led to the arrest of the accused within a short time frame.",
    status: "IDENTITY SECURED",
    accent: "pink",
    icon: "UserCheck",
  },
  {
    id: 3,
    title: "Intimate Photo Leak Threat",
    category: "Digital Blackmailing",
    summary:
      "A woman received threats to leak private pictures. We secured her accounts and helped file FIR anonymously, ensuring privacy and legal protection.",
    story:
      "When a woman received threats from an unknown person demanding money to prevent the leak of private photos, our team acted swiftly to secure her social media and email accounts, enhancing security protocols. We guided her through filing an FIR anonymously to protect her identity and ensured her full legal protection throughout the case.",
    status: "LEGAL PROTECTION ACTIVE",
    accent: "cyan",
    icon: "ImageIcon",
  },
  {
    id: 4,
    title: "Phishing on Local Business",
    category: "Corporate Security",
    summary:
      "A local shop lost sensitive customer data due to phishing. We helped identify the breach source and implemented stronger email security.",
    story:
      "A local retail shop faced a phishing attack that compromised sensitive customer data. We conducted a full security audit, identified the phishing source, and implemented enhanced email filtering and multi-factor authentication, preventing future attacks.",
    status: "BREACH NEUTRALIZED",
    accent: "pink",
    icon: "Shield",
  },
  {
    id: 5,
    title: "Ransomware Mitigation",
    category: "Enterprise Security",
    summary:
      "A software company faced ransomware threats. Our rapid response isolated affected systems and restored backups minimizing downtime.",
    story:
      "When a software company suffered a ransomware attack, our cybersecurity team immediately isolated the infected systems to contain the threat. We helped restore clean backups and implemented stronger network defenses to prevent future attacks, reducing downtime to a minimum.",
    status: "SYSTEMS RESTORED",
    accent: "cyan",
    icon: "HardDrive",
  },
  {
    id: 6,
    title: "Fake Job Offer Scam",
    category: "Employment Fraud",
    summary:
      "A job seeker was defrauded through a fake recruitment scam. We tracked the fraudsters and coordinated with police for action.",
    story:
      "A job seeker lost money to a fake recruitment scam promising high-paying jobs. Our team traced the digital footprint of the fraudsters and worked with law enforcement to bring them to justice, recovering some lost funds for the victim.",
    status: "FRAUD EXPOSED",
    accent: "pink",
    icon: "Search",
  },
  {
    id: 7,
    title: "Social Media Identity Theft",
    category: "Account Hijacking",
    summary:
      "A user's social media was hijacked to spread spam. We recovered access and secured the account with multi-factor authentication.",
    story:
      "A victim's social media account was hijacked and used to spread spam links. We helped recover the account through security verifications and set up multi-factor authentication to prevent future hijacking.",
    status: "ACCESS RECLAIMED",
    accent: "cyan",
    icon: "UserX",
  },
  {
    id: 8,
    title: "Online Dating Fraud",
    category: "Romance Scam",
    summary:
      "A person was defrauded through a fake online dating profile. We helped gather evidence and report the fraud successfully.",
    story:
      "An individual was defrauded via a fake online dating profile. Our team gathered digital evidence, tracked the suspect's online activities, and helped the victim file a complaint that resulted in police action.",
    status: "EVIDENCE SECURED",
    accent: "pink",
    icon: "Search",
  },
  {
    id: 9,
    title: "Bank Account Hacking",
    category: "Banking Security",
    summary:
      "A customer's bank account was hacked. We worked with the bank's cybersecurity team to identify vulnerabilities and recover stolen funds.",
    story:
      "A customer's bank account was hacked resulting in unauthorized withdrawals. We collaborated with the bank's cybersecurity team to identify system vulnerabilities, helped recover stolen funds, and secured the account with enhanced security.",
    status: "BANKING SECURED",
    accent: "cyan",
    icon: "Lock",
  },
  {
    id: 10,
    title: "Cyberbullying Intervention",
    category: "Online Safety",
    summary:
      "A teenager was cyberbullied online. Our team helped track the offenders and guided the family through legal steps.",
    story:
      "A teenager suffered from intense cyberbullying through social media. We tracked the cyber offenders, gathered evidence, and provided support and guidance to the family for taking legal action.",
    status: "HARASSMENT STOPPED",
    accent: "pink",
    icon: "Shield",
  },
];

const CaseCard = ({ item, onClick }) => {
  const isPink = item.accent === "pink";
  // 2. Look up the component from the map
  const IconComponent = iconMap[item.icon] || Shield;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-[#061c31] border border-white/5 p-8 rounded-[2rem] relative group cursor-pointer overflow-hidden"
      onClick={() => onClick(item)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          isPink ? "from-pink-500/10" : "from-cyan-500/10"
        } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div
        className={`p-4 rounded-2xl mb-6 inline-block ${
          isPink
            ? "bg-pink-500/10 text-pink-400"
            : "bg-cyan-500/10 text-cyan-400"
        }`}
      >
        <IconComponent size={32} />
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
        {item.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
        {item.summary}
      </p>

      <div
        className={`inline-flex items-center gap-2 font-bold text-xs uppercase tracking-tighter ${
          isPink ? "text-pink-500" : "text-cyan-500"
        }`}
      >
        VIEW FULL CASE <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-20  relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-400 font-mono text-xl md:text-5xl font-extrabold tracking-[0.2em] uppercase mb-4 block"
          >
            CASE STUDIES
          </motion.span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
            Real Case Studies from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 ">
              Pankh Cyber Solution
            </span>
          </h1>
          <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((item) => (
            <CaseCard key={item.id} item={item} onClick={setSelectedCase} />
          ))}
        </div>
      </div>

      {/* CENTER POP-UP MODAL */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className={`relative w-full max-w-2xl bg-[#0b1219] border ${
                selectedCase.accent === "pink"
                  ? "border-pink-500/50"
                  : "border-cyan-500/50"
              } rounded-[3rem] p-10 md:p-14 shadow-[0_0_80px_rgba(0,0,0,0.8)]`}
            >

              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-8 right-8 text-gray-500 hover:text-white focus:outline-none"
              >
                <X size={32} />
              </button>

              <div className="relative z-10 text-center">
                <div
                  className={`mx-auto p-5 rounded-3xl inline-flex mb-8 ${
                    selectedCase.accent === "pink"
                      ? "bg-pink-500 text-white shadow-[0_0_30px_rgba(236,72,153,0.5)]"
                      : "bg-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                  }`}
                >
                  {/* Render dynamic icon in modal */}
                  {React.createElement(iconMap[selectedCase.icon] || Shield, {
                    size: 32,
                  })}
                </div>

                <p
                  className={`text-[11px] font-black tracking-[0.3em] uppercase mb-2 ${
                    selectedCase.accent === "pink"
                      ? "text-pink-400"
                      : "text-cyan-400"
                  }`}
                >
                  {selectedCase.category}
                </p>
                <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-8">
                  {selectedCase.title}
                </h2>

                {/* SINGLE FOCUS STATUS BAR */}
                <div className="mb-10 p-6 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-2 ${
                      selectedCase.accent === "pink"
                        ? "bg-pink-500"
                        : "bg-cyan-500"
                    }`}
                  />
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                    Final Resolution Status
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full animate-ping ${
                        selectedCase.accent === "pink"
                          ? "bg-pink-500"
                          : "bg-cyan-500"
                      }`}
                    />
                    <p
                      className={`text-xl md:text-3xl font-black italic ${
                        selectedCase.accent === "pink"
                          ? "text-pink-500"
                          : "text-cyan-500"
                      }`}
                    >
                      {selectedCase.status}
                    </p>
                  </div>
                </div>

                <div className="text-left space-y-4">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <AlertCircle size={14} /> Full Investigation Report
                  </h4>
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-light italic bg-[#05090f] p-6 rounded-2xl border border-white/5">
                    "{selectedCase.story}"
                  </p>
                </div>

                <button
                  className={`mt-10 w-full py-5 rounded-2xl font-black text-lg transition-all ${
                    selectedCase.accent === "pink"
                      ? "bg-pink-600 hover:bg-pink-500 text-white"
                      : "bg-cyan-500 hover:bg-cyan-400 text-black"
                  }`}
                >
                  Consult on a Similar Case
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="bg-[#000000] pt-10 mt-20 pb-10 border-t border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Branding Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-25 h-25 rounded-lg  flex items-center justify-center">
                  {/* <ShieldCheck className="text-cyan-400" size={28} /> */}
                  <img
                    src="https://pankhs.com/wp-content/uploads/2025/06/ChatGPT-Image-Jun-3-2025-11_56_54-AM-2.png"
                    alt=""
                  />
                </div>
                <span className="text-3xl font-black tracking-tighter">
                  PANKH CYBER SOLUTION<span className="text-cyan-400">.</span>
                </span>
              </div>
              <p className="text-slate-400 text-md leading-relaxed max-w-md mb-8">
                Your partner in cybersecurity awareness, training, and
                investigation support.
              </p>
              <div className="flex gap-4">
                {socials.map((social, idx) => (
                  <SocialIcon key={idx} icon={social.icon} link={social.link} />
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest text-cyan-400">
                Services
              </h4>
              <ul className="space-y-4 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Security Consultancy
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Fraud Recovery
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Legal Support
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Incident Response
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest text-cyan-400">
                Contact Us
              </h4>
              <ul className="space-y-5 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-cyan-400 shrink-0" />
                  <span>pankh0557@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-cyan-400 shrink-0" />
                  <span>+91 883-9739-085</span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <MapPin size={18} className="text-cyan-400 shrink-0" />
                  <span>
                    M-4, Mayur Plaza, Gwalior,
                    <br />
                    Madhya Pradesh, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-slate-500 font-bold uppercase tracking-widest">
            <p>© 2026 Rudra Cyber Solution. All Rights Reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
}
