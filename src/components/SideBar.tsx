import { motion } from "framer-motion";
import { type IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

type Social = {
  href: string;
  label: string;
  Icon: IconType;
};

const socials: Social[] = [
  { href: "https://github.com/AnanthuSpace", label: "GitHub", Icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/ananthu-mohan/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://wa.me/918943365344",
    label: "WhatsApp",
    Icon: FaWhatsapp,
  },
  {
    href: "https://www.instagram.com/an4nthu._/",
    label: "Instagram",
    Icon: SiInstagram,
  },
];

const SideBar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 p-2 shadow-[0_8px_40px_-10px_rgba(139,92,246,0.4)] backdrop-blur-2xl">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition-all hover:scale-110 hover:bg-white/10 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            <span className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-900/90 px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-md backdrop-blur-md transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>

      <div className="mx-auto mt-3 h-12 w-px bg-gradient-to-b from-white/30 to-transparent" />
    </motion.aside>
  );
};

export default SideBar;
