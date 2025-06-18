import Reveal from "../Animations/Reveal";

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    duration: "Sep 2023 - Present",
    location: "Remote",
    description:
      "Collaborated with early-stage startups to build and deliver full-stack web applications. Handled both frontend and backend development using technologies like React, Node.js, TypeScript, MongoDB, and AWS. Responsible for architecture planning, API integration, deployment, and maintaining production-ready codebases. This freelance experience enhanced problem-solving skills and client communication.",
  },
  {
    role: "Full Stack Developer (Self-Employed)",
    company: "Brototype",
    duration: "Sep 2023 - Dec 2024",
    location: "Kochi, Kerala, India · On-site",
    description:
      "Gained extensive experience in full-stack development by independently building live, production-ready web applications from scratch. Designed and implemented user-friendly and scalable solutions while enhancing expertise in React, Node.js, backend integrations, and database management. All skills were self-taught through hands-on learning and real-world project development.",
  },
  {
    role: "Diploma in Computer Science",
    company: "Government Polytechnic College",
    duration: "Aug 2020 - May 2023",
    grade: "Grade: 7.41",
    description:
      "Completed a Diploma in Computer Science, gaining foundational knowledge in programming, algorithms, and software development.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mt-10 px-8 py-12">
      <div className="container mx-auto">
        <Reveal>
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
            My journey
          </h2>
        </Reveal>
        <div className="relative border-l-4 border-gray-300">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute -left-3 h-6 w-6 rounded-full border-4 border-white bg-gray-300"></div>

              <div className="transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-100 hover:shadow-2xl">
                <Reveal>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.role}{" "}
                    <span className="text-gray-500">@ {exp.company}</span>
                  </h3>
                  <span className="block text-sm text-gray-500">
                    {exp.duration}
                  </span>
                  <p className="mt-4 text-gray-700 hover:text-gray-900">
                    {exp.description}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
