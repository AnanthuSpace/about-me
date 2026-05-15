import { createElement } from "react";
import { motion } from "framer-motion";
import { type IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaAws,
  FaFigma,
  FaBootstrap,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPm2,
  SiNestjs,
  SiMysql,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrDocker } from "react-icons/gr";
import { DiNginx } from "react-icons/di";

type Tech = { name: string; Icon: IconType; color: string };

const techIcons: Tech[] = [
  { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", Icon: FaJsSquare, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "Nest.js", Icon: SiNestjs, color: "#E0234E" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Docker", Icon: GrDocker, color: "#2496ED" },
  { name: "NGINX", Icon: DiNginx, color: "#009639" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "PM2", Icon: SiPm2, color: "#2B037A" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Firebase", Icon: IoLogoFirebase, color: "#FFCA28" },
  { name: "Figma", Icon: FaFigma, color: "#F24E1E" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", Icon: FaBootstrap, color: "#7952B3" },
  { name: "Linux", Icon: FaLinux, color: "#FCC624" },
  { name: "Windows", Icon: FaWindows, color: "#0078D6" },
];

const TechPill = ({ tech }: { tech: Tech }) => (
  <div className="group/pill relative flex shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] sm:gap-3 sm:px-5 sm:py-3">
    <span
      className="text-xl transition-transform duration-300 group-hover/pill:scale-110 sm:text-2xl"
      style={{ color: tech.color }}
    >
      {createElement(tech.Icon)}
    </span>
    <span className="text-xs font-medium text-zinc-200 sm:text-sm">
      {tech.name}
    </span>
  </div>
);

const Technologies = () => {
  const doubled = [...techIcons, ...techIcons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="mb-8 text-center">
        <span className="eyebrow mb-3">Tech Stack</span>
        <h3 className="section-heading mt-3">
          Tools I <span className="text-gradient">build with</span>
        </h3>
      </div>

      <div className="relative mask-fade-x overflow-hidden py-2">
        <div className="marquee-track">
          {doubled.map((t, i) => (
            <TechPill key={`tech-${i}`} tech={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
