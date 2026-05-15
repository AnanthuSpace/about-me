import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { type IconType } from "react-icons";
import {
  FaDocker,
  FaNodeJs,
  FaReact,
  FaJsSquare,
  FaHtml5,
} from "react-icons/fa";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  href: string;
  Icon: IconType;
  color: string;
};

const certs: Cert[] = [
  {
    title: "Docker",
    issuer: "Udemy",
    date: "Jul 2025",
    href: "https://udemy-certificate.s3.amazonaws.com/image/UC-20cb3366-48ba-40e4-a2a3-de6832abcb58.jpg",
    Icon: FaDocker,
    color: "#2496ED",
  },
  {
    title: "Node.js Premium Crash Course",
    issuer: "Udemy",
    date: "Dec 2024",
    href: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1e9b8a0c-f494-4c13-9583-8173e00eaf84.pdf",
    Icon: FaNodeJs,
    color: "#339933",
  },
  {
    title: "React.js Premium Crash Course",
    issuer: "Udemy",
    date: "Aug 2024",
    href: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a172b7fb-1f63-4212-a819-467fe18442f5.pdf",
    Icon: FaReact,
    color: "#61DAFB",
  },
  {
    title: "CSS and JavaScript Crash Course",
    issuer: "Udemy",
    date: "Oct 2023",
    href: "https://udemy.com/certificate/UC-80ec4402-fa3d-4167-a719-329856694a69/",
    Icon: FaJsSquare,
    color: "#F7DF1E",
  },
  {
    title: "HTML & CSS · Basics to Advanced",
    issuer: "Udemy",
    date: "May 2023",
    href: "https://udemy.com/certificate/UC-7030589e-b421-4307-8c35-786691095fa8/",
    Icon: FaHtml5,
    color: "#E34F26",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="container-wide w-full py-16 sm:py-20 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
      >
        <span className="eyebrow mb-3">
          <Award className="h-3 w-3" /> Certifications
        </span>
        <h2 className="section-heading mt-3">
          Continuously <span className="text-gradient">leveling up</span>
        </h2>
        <p className="mt-4 text-sm text-zinc-400 sm:text-base">
          Self-taught at heart. These are some of the courses I&apos;ve
          completed along the journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => {
          const Icon = c.Icon;
          return (
            <motion.a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="card-glow group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-4 backdrop-blur-xl transition-all hover:border-white/20 sm:p-5"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl sm:h-12 sm:w-12 sm:text-2xl"
                style={{ color: c.color }}
              >
                <Icon />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-sm font-semibold text-white sm:text-base">
                  {c.title}
                </h3>
                <p className="mt-0.5 text-[11px] text-zinc-400 sm:text-xs">
                  {c.issuer} · {c.date}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-violet-300 transition-colors group-hover:text-cyan-300 sm:text-xs">
                  View certificate
                  <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
