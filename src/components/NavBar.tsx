import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../lib/cn";

type NavLink = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const links: NavLink[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
];

const NavBar = () => {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const offsets = links.map((l) => {
        const el = document.getElementById(l.id);
        if (!el) return { id: l.id, top: Number.POSITIVE_INFINITY };
        const rect = el.getBoundingClientRect();
        return { id: l.id, top: Math.abs(rect.top - 120) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop nav: centered 60% wide floating bar */}
      <motion.nav
        initial={{ y: -40, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed left-1/2 top-4 z-50 hidden w-[60%] min-w-[640px] max-w-[1100px] rounded-full border backdrop-blur-xl transition-all duration-300 md:block",
          scrolled
            ? "border-white/15 bg-zinc-950/75 shadow-[0_8px_40px_-10px_rgba(139,92,246,0.4)]"
            : "border-white/10 bg-white/[0.04]",
        )}
      >
        <div className="flex h-14 items-center justify-between gap-4 px-4 lg:h-16 lg:px-6">
          {/* Logo */}
          <a
            href="#home"
            className="select-none font-display text-base font-bold tracking-tight lg:text-lg"
          >
            <span className="text-gradient">ANANTHU</span>
            <span className="text-white">.</span>
          </a>

          {/* Centered links */}
          <ul className="flex flex-1 items-center justify-center gap-0.5 lg:gap-1">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id} className="relative">
                  <a
                    href={`#${link.id}`}
                    className={cn(
                      "relative inline-flex items-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors lg:px-4 lg:py-2 lg:text-sm",
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-cyan-500/30 ring-1 ring-white/15"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_24px_-6px_rgba(139,92,246,0.7)] transition hover:shadow-[0_0_30px_-4px_rgba(6,182,212,0.8)] lg:px-4 lg:py-2 lg:text-sm"
          >
            Let&apos;s talk
          </a>
        </div>
      </motion.nav>

      {/* Mobile bottom nav */}
      <motion.nav
        initial={{ y: 80, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-3 left-1/2 z-50 flex w-[calc(100vw-1.5rem)] max-w-md items-center justify-around rounded-full border border-white/10 bg-zinc-950/85 px-1.5 py-1.5 shadow-[0_8px_40px_-10px_rgba(139,92,246,0.45)] backdrop-blur-2xl md:hidden"
      >
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "relative flex flex-1 flex-col items-center justify-center gap-0.5 rounded-full px-1 py-1.5 transition-colors",
                isActive ? "text-white" : "text-zinc-500",
              )}
              aria-label={link.label}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500/35 to-cyan-500/35 ring-1 ring-white/15"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <Icon className="h-[18px] w-[18px]" />
              <span className="text-[9.5px] font-medium leading-none">
                {link.label}
              </span>
            </a>
          );
        })}
      </motion.nav>
    </>
  );
};

export default NavBar;
