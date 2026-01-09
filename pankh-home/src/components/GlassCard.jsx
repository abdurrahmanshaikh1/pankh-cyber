const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        relative rounded-3xl p-8
        bg-gradient-to-br from-[#0F1A2F]/90 via-[#1a2a44]/80 to-[#0F1A2F]/90
        backdrop-blur-xl
        border border-[#00E5FF]/20
        shadow-[0_0_40px_rgba(0,229,255,0.15)]
        hover:border-[#00E5FF]/50
        hover:shadow-[0_0_60px_rgba(0,229,255,0.35)]
        hover:-translate-y-3
        transition-all duration-500
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
