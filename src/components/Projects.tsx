import { motion } from "framer-motion";
import {
  ExternalLink,
  Server,
  Layout,
  type LucideIcon,
} from "lucide-react";
import { type IconType } from "react-icons";
import { FaGithub as Github } from "react-icons/fa";

type ProjectLink = {
  label: string;
  href: string;
  Icon: LucideIcon | IconType;
};

type Project = {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  imageClass?: string;
  links: ProjectLink[];
  tags: string[];
  span?: string;
  accent: string;
  badge?: string;
};

const repositories: Project[] = [
  {
    id: 1,
    name: "FitFusion",
    subtitle: "Fitness platform · Full-Stack",
    description:
      "A full-stack fitness platform with User, Trainer, and Admin portals. Real-time messaging, video chat, personalized programs and progress tracking, all built end-to-end with the MERN stack and TypeScript.",
    image: "/Images/Fitfusion.png",
    links: [
      {
        label: "Backend",
        href: "https://github.com/AnanthuSpace/fitfusion-server",
        Icon: Server,
      },
      {
        label: "Frontend",
        href: "https://github.com/AnanthuSpace/fitfusion-client",
        Icon: Layout,
      },
    ],
    tags: ["React", "Node.js", "TypeScript", "MongoDB", "WebRTC"],
    span: "md:col-span-2 md:row-span-2",
    accent: "from-violet-500/30 to-fuchsia-500/30",
    badge: "Flagship",
  },
  {
    id: 2,
    name: "Talk to Pro",
    subtitle: "Mentorship platform · Core Developer",
    description:
      "A platform that connects students, jobseekers, and career switchers with verified mentors from IT, Medicine, Engineering, and more through 1:1 video calls. Contributed as a core developer from idea to beta launch.",
    image: "/Images/TalkToPro.png",
    imageClass: "object-contain bg-zinc-100",
    links: [
      {
        label: "Visit Live",
        href: "https://www.talktopro.in",
        Icon: ExternalLink,
      },
    ],
    tags: ["MERN", "Video", "SaaS", "Beta"],
    accent: "from-fuchsia-500/30 to-violet-500/30",
    badge: "Live",
  },
  {
    id: 3,
    name: "FitTrack",
    subtitle: "Fitness landing · UI Sample",
    description:
      "A premium fitness-tracking landing experience with adaptive workouts, nutrition intelligence, and progress clarity. A frontend-focused sample showcasing modern UI craft, onboarding, and pricing flows.",
    image: "/Images/FitTrack.png",
    links: [
      {
        label: "Visit Live",
        href: "https://fit-track-ten-wheat.vercel.app/",
        Icon: ExternalLink,
      },
    ],
    tags: ["React", "Tailwind", "UI", "Frontend"],
    accent: "from-emerald-500/30 to-cyan-500/30",
    badge: "Live",
  },
  {
    id: 4,
    name: "VuePix",
    subtitle: "E-commerce platform",
    description:
      "A full-featured e-commerce platform with product catalog, cart, payments, and an admin dashboard. A self-taught journey from idea to live deploy.",
    image: "/Images/Vuepix.png",
    links: [
      {
        label: "Repository",
        href: "https://github.com/AnanthuSpace/vuepix-ecommerce-website",
        Icon: Github,
      },
    ],
    tags: ["Node.js", "MongoDB", "EJS"],
    accent: "from-cyan-500/30 to-blue-500/30",
  },
  {
    id: 5,
    name: "Aadhar OCR System",
    subtitle: "Document intelligence",
    description:
      "OCR tool that extracts Name, DOB, Gender, Pincode and Aadhar Number from card images (front and back).",
    image: "/Images/Aadhar.png",
    links: [
      {
        label: "Repository",
        href: "https://github.com/AnanthuSpace/aadhar-ocr-system",
        Icon: Github,
      },
    ],
    tags: ["TypeScript", "OCR", "Node.js"],
    accent: "from-amber-500/30 to-rose-500/30",
  },
  {
    id: 6,
    name: "NoteApp",
    subtitle: "Cross-platform notes",
    description:
      "A CRUD note service built in Node.js with REST APIs, integrated to a Flutter mobile client for real-time sync.",
    image: "/Images/Noteapp.png",
    links: [
      {
        label: "Repository",
        href: "https://github.com/AnanthuSpace/NoteApp",
        Icon: Github,
      },
    ],
    tags: ["Node.js", "Flutter", "REST"],
    accent: "from-rose-500/30 to-orange-500/30",
  },
  {
    id: 7,
    name: "WeatherApp",
    subtitle: "Geo-aware forecast",
    description:
      "React + TypeScript weather app with location-based forecasts and a snappy Vite-powered dev experience.",
    image: "/Images/Weatherapp.png",
    links: [
      {
        label: "Repository",
        href: "https://github.com/AnanthuSpace/WeatherApp",
        Icon: Github,
      },
    ],
    tags: ["React", "TypeScript", "Vite"],
    accent: "from-sky-500/30 to-violet-500/30",
  },
  {
    id: 8,
    name: "URL Shortener",
    subtitle: "Secure link service",
    description:
      "A JWT-authenticated URL shortener built with Express.js and React. Clean dashboard for managing your links.",
    image: "/Images/URL.png",
    links: [
      {
        label: "Repository",
        href: "https://github.com/AnanthuSpace/url-shortener",
        Icon: Github,
      },
    ],
    tags: ["Express", "React", "JWT"],
    accent: "from-fuchsia-500/30 to-pink-500/30",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="container-wide w-full py-16 sm:py-20 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
      >
        <span className="eyebrow mb-3">Selected work</span>
        <h2 className="section-heading mt-3">
          Personal <span className="text-gradient">projects</span>
        </h2>
        <p className="mt-4 text-sm text-zinc-400 sm:text-base">
          A curated collection of things I&apos;ve designed, built, shipped,
          iterated, and open-sourced.
        </p>
      </motion.div>

      <div className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:auto-rows-[300px] sm:grid-cols-2 sm:gap-5 md:auto-rows-[320px] md:grid-cols-3">
        {repositories.map((repo, i) => (
          <motion.article
            key={repo.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className={`card-glow group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl ${
              repo.span ?? ""
            }`}
          >
            {/* Image backdrop */}
            <div className="absolute inset-0">
              <img
                src={repo.image}
                alt={repo.name}
                className={`h-full w-full opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 ${
                  repo.imageClass || "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${repo.accent} opacity-40 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-70`}
              />
            </div>

            {/* Top-right badge */}
            {repo.badge && (
              <span className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 align-middle" />
                {repo.badge}
              </span>
            )}

            {/* Content */}
            <div className="relative flex h-full flex-col justify-end p-4 sm:p-5">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {repo.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] font-medium text-zinc-200 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-[10px] font-medium uppercase tracking-widest text-violet-300 sm:text-[11px]">
                {repo.subtitle}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-white sm:text-xl md:text-2xl">
                {repo.name}
              </h3>
              <p className="mt-2 line-clamp-2 max-w-md text-xs text-zinc-300 sm:text-sm">
                {repo.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {repo.links.map((l) => {
                  const LinkIcon = l.Icon;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/20 sm:text-xs"
                    >
                      <LinkIcon className="h-3.5 w-3.5" />
                      {l.label}
                      <ExternalLink className="h-3 w-3 opacity-70" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex justify-center sm:mt-12"
      >
        <a
          href="https://github.com/AnanthuSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
        >
          <Github className="h-4 w-4" />
          Explore all 50+ repos on GitHub
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
