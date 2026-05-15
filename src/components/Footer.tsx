import { Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="container-wide w-full pb-28 pt-12 md:pb-12">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 px-5 py-7 backdrop-blur-xl sm:px-6 sm:py-8">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[60%] -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="relative flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <a href="#home" className="font-display text-lg font-bold">
            <span className="text-gradient">ANANTHU</span>
            <span className="text-white">.</span>
          </a>

          <p className="flex items-center gap-1.5 text-xs text-zinc-400 sm:text-sm">
            Crafted with
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 sm:h-4 sm:w-4" />
            by Ananthu Mohan · © {year}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-[10px] uppercase tracking-widest text-zinc-500 sm:gap-5 sm:text-xs">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Work
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
