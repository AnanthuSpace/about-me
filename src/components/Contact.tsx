import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import Button from "./ui/Button";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

type FieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
};

const Field = ({ label, htmlFor, children }: FieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={htmlFor}
      className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 sm:text-xs"
    >
      {label}
    </label>
    {children}
  </div>
);

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current?.reset();
        },
        (error: { text?: string }) => {
          toast.error("Failed to send message. Please try again later.");
          console.error(error?.text);
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="container-wide w-full py-16 sm:py-20 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
      >
        <span className="eyebrow mb-3">Contact</span>
        <h2 className="section-heading mt-3">
          Let&apos;s build <span className="text-gradient">something</span>
        </h2>
        <p className="mt-4 text-sm text-zinc-400 sm:text-base">
          Got a project in mind, a role to fill, or just want to say hi? My
          inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-5">
        {/* Info column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="card-glow flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-xl sm:gap-6 sm:p-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                Get in touch
              </h3>
              <p className="mt-2 text-xs text-zinc-400 sm:text-sm">
                Available for full-time roles and freelance opportunities.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:ananthumohan368@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-300 sm:h-10 sm:w-10">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-500">
                    Email
                  </span>
                  <span className="block truncate text-xs text-white sm:text-sm">
                    ananthumohan368@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-cyan-300 sm:h-10 sm:w-10">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-500">
                    Location
                  </span>
                  <span className="block text-xs text-white sm:text-sm">
                    Cherthala, Kerala · Open to Bengaluru &amp; Remote
                  </span>
                </span>
              </div>

              <a
                href="https://wa.me/918943365344"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-300 sm:h-10 sm:w-10">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-500">
                    WhatsApp
                  </span>
                  <span className="block text-xs text-white sm:text-sm">
                    +91 89433 65344
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-auto pt-2">
              <p className="mb-3 text-[10px] uppercase tracking-widest text-zinc-500 sm:text-xs">
                Find me on
              </p>
              <div className="flex gap-2.5 sm:gap-3">
                <a
                  href="mailto:ananthumohan368@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:scale-110 hover:border-white/30 hover:text-white"
                  aria-label="Email"
                >
                  <SiGmail className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ananthu-mohan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:scale-110 hover:border-white/30 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/AnanthuSpace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:scale-110 hover:border-white/30 hover:text-white"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="card-glow rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-xl sm:p-7 lg:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <Field label="Full Name" htmlFor="name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="contact-input"
                  />
                </Field>

                <Field label="Email Address" htmlFor="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="contact-input"
                  />
                </Field>
              </div>

              <Field label="Your Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or idea..."
                  className="contact-input resize-none"
                />
              </Field>

              <div className="flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                <p className="text-center text-[11px] text-zinc-500 sm:text-left sm:text-xs">
                  Average reply time: under 24h
                </p>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto sm:min-w-[170px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send message <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-input {
          width: 100%;
          background-color: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 0.75rem;
          padding: 0.75rem 0.875rem;
          color: white;
          font-size: 0.875rem;
          transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .contact-input::placeholder { color: rgb(113,113,122); }
        .contact-input:focus {
          border-color: rgba(139,92,246,0.6);
          background-color: rgba(255,255,255,0.06);
          box-shadow: 0 0 0 4px rgba(139,92,246,0.15);
        }
        @media (min-width: 640px) {
          .contact-input { padding: 0.85rem 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
