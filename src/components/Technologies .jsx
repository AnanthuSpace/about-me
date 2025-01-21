import React from "react";
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
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiNginx } from "react-icons/di";

const Technologies = () => {
  const techIcons = [
    { name: "HTML", Icon: FaHtml5 },
    { name: "CSS", Icon: FaCss3Alt },
    { name: "JavaScript", Icon: FaJsSquare },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "React", Icon: SiReact },
    { name: "Node.js", Icon: FaNodeJs },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Git", Icon: SiGit },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "NGINX", Icon: DiNginx },
    { name: "AWS", Icon: FaAws },
    { name: "PM2", Icon: SiPm2 },
    { name: "Postman", Icon: SiPostman },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "Firebase", Icon: IoLogoFirebase },
    { name: "Figma", Icon: FaFigma },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Bootstrap", Icon: FaBootstrap },
    { name: "Linux", Icon: FaLinux },
    { name: "Windows", Icon: FaWindows },
  ];

  return (
    <div className="relative overflow-hidden px-8 mx-8">
      <h2 className="mb-6 text-center text-3xl font-bold text-black">
        Technologies I Work With
      </h2>
      <div className="relative overflow-hidden pt-10">
        <div className="animate-scroll flex z-1">
          <div className="flex flex-nowrap">
            {[...techIcons, ...techIcons].map((icon, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 flex-col items-center justify-center gap-4 p-4"
              >
                <div className="text-4xl text-black">
                  {React.createElement(icon.Icon)}{" "}
                </div>
                <p className="mt-2 text-sm text-black">{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
