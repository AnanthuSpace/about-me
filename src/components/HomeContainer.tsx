import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "./ui/Button";

const roles: string[] = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "Self-Taught Builder",
  "Backend & Cloud Tinkerer",
];

const HomeContainer = () => {
  const [idx, setIdx] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 50 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <div className="container-wide grid w-full grid-cols-1 items-center gap-10 py-12 sm:py-16 md:grid-cols-2 md:gap-12 md:py-20 lg:py-24">
      {/* Left: Text */}
      <div className="order-2 flex flex-col items-center gap-5 text-center md:order-1 md:items-start md:gap-6 md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex"
        >
          <span className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient text-shadow-glow">Ananthu</span>
          <br />
          <span className="text-zinc-400">Mohan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex h-7 items-center gap-2 font-mono text-sm text-zinc-300 sm:h-8 sm:text-base md:text-lg"
        >
          <span className="text-violet-400">&gt;</span>
          <span>{text}</span>
          <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-cyan-400 sm:h-5" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg"
        >
          Full-stack engineer crafting{" "}
          <span className="text-zinc-200">fast, scalable, beautifully built</span>{" "}
          software. Currently shipping production systems at{" "}
          <span className="text-zinc-200">Wisdom Tooth Technologies</span> and
          partnering with founders on the side, turning ambiguous ideas into
          polished products with{" "}
          <span className="text-gradient font-medium">
            Next.js, Nest.js, MongoDB, AWS &amp; Docker
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center md:justify-start"
        >
          <Button as="a" href="#contact" className="w-full sm:w-auto">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            as="a"
            href="#projects"
            variant="ghost"
            className="w-full sm:w-auto"
          >
            View projects <Code2 className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-2 flex items-center gap-4 sm:gap-5"
        >
          <a
            href="https://github.com/AnanthuSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ananthu-mohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <span className="h-4 w-px bg-white/10" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
            Cherthala, Kerala · India
          </span>
        </motion.div>
      </div>

      {/* Right: Animated visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative order-1 mx-auto flex items-center justify-center md:order-2"
      >
        <div className="relative h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[26rem] lg:w-[26rem]">
          {/* Rotating gradient ring */}
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-conic from-violet-500 via-cyan-400 to-fuchsia-500 opacity-70 blur-2xl" />

          {/* Inner backdrop */}
          <div className="absolute inset-3 rounded-full bg-zinc-950/80 backdrop-blur-2xl ring-1 ring-white/10 sm:inset-4" />

          {/* Floating orbs */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-3 top-6 rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-1 font-mono text-[10px] text-violet-200 backdrop-blur-md sm:left-6 sm:top-10 sm:px-3 sm:py-1.5 sm:text-xs"
          >
            React
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute right-2 top-14 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 font-mono text-[10px] text-cyan-200 backdrop-blur-md sm:right-4 sm:top-20 sm:px-3 sm:py-1.5 sm:text-xs"
          >
            Node.js
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-12 left-1 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-2 py-1 font-mono text-[10px] text-fuchsia-200 backdrop-blur-md sm:bottom-16 sm:left-2 sm:px-3 sm:py-1.5 sm:text-xs"
          >
            TypeScript
          </motion.div>
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-6 right-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 font-mono text-[10px] text-emerald-200 backdrop-blur-md sm:bottom-10 sm:right-6 sm:px-3 sm:py-1.5 sm:text-xs"
          >
            MongoDB
          </motion.div>

          {/* Avatar / profile image */}
          <div className="absolute inset-7 overflow-hidden rounded-full ring-1 ring-white/20 sm:inset-10">
            <img
              src="/Images/Profile.jpg"
              alt="Ananthu Mohan"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/SVG/main-svg.png";
              }}
            />
          </div>

          {/* Sparkle accent */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -right-1 -top-1 rounded-full bg-zinc-950 p-1.5 ring-1 ring-white/20 sm:-right-2 sm:-top-2 sm:p-2"
          >
            <Sparkles className="h-4 w-4 text-cyan-300 sm:h-5 sm:w-5" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeContainer;
