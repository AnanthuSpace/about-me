const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/25 blur-[100px] animate-blob sm:-left-32 sm:top-20 sm:h-[28rem] sm:w-[28rem] sm:blur-[120px]" />
      <div className="absolute -right-20 top-[28%] h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] animate-blob [animation-delay:4s] sm:right-[-6rem] sm:h-[26rem] sm:w-[26rem] sm:blur-[120px]" />
      <div className="absolute left-1/3 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[100px] animate-blob [animation-delay:8s] sm:bottom-[-6rem] sm:h-[24rem] sm:w-[24rem] sm:blur-[120px]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

export default Background;
