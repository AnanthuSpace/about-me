import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  GitBranch,
  Briefcase,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import Button from "./ui/Button";
import { Card } from "./ui/Card";
import Technologies from "./Technologies";

type Stat = { label: string; value: string; Icon: LucideIcon };

const stats: Stat[] = [
  { label: "Years Building", value: "2.5+", Icon: Rocket },
  { label: "GitHub Repos", value: "50+", Icon: GitBranch },
  { label: "Roles Held", value: "3", Icon: Briefcase },
  { label: "Projects Shipped", value: "15+", Icon: Code2 },
];

const About = () => {
  return (
    <section id="about" className="container-wide w-full py-16 sm:py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
      >
        <span className="eyebrow mb-3">About me</span>
        <h2 className="section-heading mt-3">
          The story <span className="text-gradient">behind the code</span>
        </h2>
        <p className="mt-4 text-sm text-zinc-400 sm:text-base">
          A passionate developer who loves turning complex problems into clean,
          elegant interfaces.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Profile image card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="card-glow group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-1.5 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <img
                src="/Images/Profile.jpg"
                alt="Ananthu Mohan"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96 lg:h-[28rem]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/SVG/main-svg.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

              <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-end justify-between gap-2 sm:inset-x-4 sm:bottom-4">
                <div>
                  <p className="font-display text-base font-semibold text-white sm:text-xl">
                    Ananthu Mohan
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-zinc-300 sm:text-xs">
                    <MapPin className="h-3 w-3" /> Cherthala, Kerala
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio + stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-5 sm:gap-6 lg:col-span-7"
        >
          <Card className="p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-white">Ananthu Mohan</span>, a{" "}
              <span className="text-gradient font-semibold">
                self-taught full-stack developer
              </span>{" "}
              from Cherthala, Kerala. My journey started in high school with
              C++, sparked a love for building things, and led me through a
              Diploma in Computer Engineering and into a career shipping
              production software.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Today I work as a Full Stack Developer at{" "}
              <span className="text-zinc-200">Wisdom Tooth Technologies</span>{" "}
              while running a parallel freelance practice, partnering with
              founders and IT teams to design, build, and deploy production
              software. Before that, I spent 15+ months at{" "}
              <span className="text-zinc-200">Brototype</span> shipping
              production-grade apps end-to-end.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              I&apos;m comfortable across the stack: React, Node.js, NestJS,
              TypeScript, MongoDB, and PostgreSQL, and have shipped features
              with AWS, Docker, NGINX, Razorpay, Stripe, and Firebase. I
              follow clean architectures (Repository &amp; MVC) and care
              deeply about performance, DX, and user experience.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                as="a"
                href="#contact"
                size="sm"
                className="w-full sm:w-auto"
              >
                Let&apos;s collaborate <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                as="a"
                href="#projects"
                variant="ghost"
                size="sm"
                className="w-full sm:w-auto"
              >
                See my work
              </Button>
            </div>
          </Card>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-glow group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-4 backdrop-blur-xl transition-all hover:border-white/20"
              >
                <s.Icon className="mb-2 h-4 w-4 text-violet-300 sm:h-5 sm:w-5" />
                <div className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-16 sm:mt-20">
        <Technologies />
      </div>
    </section>
  );
};

export default About;
