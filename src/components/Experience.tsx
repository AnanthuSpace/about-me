import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  type LucideIcon,
} from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  Icon: LucideIcon;
  description: string;
  tags: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Wisdom Tooth Technologies",
    duration: "Oct 2025 · Present",
    location: "Bengaluru, Karnataka · Remote-friendly",
    type: "Full-time",
    Icon: Briefcase,
    description:
      "Building and maintaining production full-stack web applications with a focus on performance, scalability, and clean architecture. Working across the stack with Next.js on the frontend and Nest.js services on the backend.",
    tags: ["Next.js", "Nest.js", "MongoDB", "AWS", "Docker"],
  },
  {
    role: "Full Stack Engineer",
    company: "Freelance · Self-Employed",
    duration: "Jan 2025 · Present",
    location: "Alappuzha, Kerala · Remote",
    type: "Freelance",
    Icon: Briefcase,
    description:
      "Partnering with early-stage startups and IT teams to design, build, and deploy production-ready apps end-to-end. Architecture planning, API design, payment gateway integration (Razorpay, Stripe), cloud deployment, and ongoing maintenance.",
    tags: ["MERN", "TypeScript", "AWS", "Razorpay", "Stripe"],
  },
  {
    role: "MERN Stack Developer",
    company: "Brototype",
    duration: "Sep 2023 · Dec 2024",
    location: "Kochi, Kerala · On-site",
    type: "Program",
    Icon: Briefcase,
    description:
      "Independently built live, production-ready web applications from scratch (including FitFusion and VuePix). Deepened expertise in React, Node.js, backend integrations, DBs, and clean architecture, all through hands-on, self-driven learning.",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    role: "Diploma in Computer Science",
    company: "Government Polytechnic College",
    duration: "Aug 2020 · May 2023",
    location: "Kerala, India",
    type: "Education",
    Icon: GraduationCap,
    description:
      "Completed a Diploma in Computer Engineering, building a strong foundation in programming, algorithms, OS, and software development. Grade: 7.41",
    tags: ["CS Fundamentals", "Algorithms", "DBMS", "C++"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="container-wide w-full py-16 sm:py-20 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
      >
        <span className="eyebrow mb-3">Experience</span>
        <h2 className="section-heading mt-3">
          My <span className="text-gradient">journey</span> so far
        </h2>
        <p className="mt-4 text-sm text-zinc-400 sm:text-base">
          2.5+ years across full-time roles, freelance gigs, and a self-taught
          deep-dive. Every step shaped the developer I am today.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical gradient line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-500 opacity-60 md:left-1/2 md:-translate-x-1/2" />

        <ul className="space-y-8 sm:space-y-10">
          {experiences.map((exp, index) => {
            const Icon = exp.Icon;
            const isLeft = index % 2 === 0;
            return (
              <motion.li
                key={`${exp.role}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="block h-3.5 w-3.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 ring-[3px] ring-zinc-950 shadow-[0_0_18px_rgba(139,92,246,0.7)] sm:h-4 sm:w-4 sm:ring-4" />
                </div>

                {/* Card */}
                <div
                  className={`ml-10 sm:ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="card-glow group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 sm:p-6">
                    <div className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-cyan-500/15" />

                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300 sm:h-9 sm:w-9">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-200">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-semibold text-white sm:text-lg md:text-xl">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-xs text-zinc-400 sm:text-sm">
                      @ <span className="text-zinc-200">{exp.company}</span>
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-zinc-500 sm:text-xs">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" /> {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" /> {exp.location}
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-zinc-300 sm:mt-4 sm:text-sm">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
