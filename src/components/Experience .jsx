import Reveal from "../Animations/Reveal";

const experiences = [
    {
      role: "MERN Stack Developer",
      company: "Applore Technologies",
      duration: "Jan 2025 - Present",
      location: "Noida, Uttar Pradesh, India · On-site",
      description:
        "Working as a MERN Stack Developer, contributing to the design and development of robust web applications using cutting-edge technologies.",
    },
    {
      role: "Full Stack Developer (Self-Employed)",
      company: "Brototype",
      duration: "Sep 2023 - Dec 2024",
      location: "Kochi, Kerala, India · On-site",
      description:
        "Gained extensive experience in full-stack development, building user-friendly and scalable web applications while enhancing expertise in React, Node.js, and backend integrations.",
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
    <section id="experience" className="py-12 px-8">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
          Experience
        </h2>
        <div className="relative border-l-4 border-gray-300">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute -left-3 h-6 w-6 rounded-full bg-gray-300 border-4 border-white"></div>

              <div className="rounded-lg bg-white p-6 shadow-lg">
              <Reveal>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.role}{" "}
                  <span className="text-gray-500">@ {exp.company}</span>
                </h3>
                <span className="block text-sm text-gray-500">
                  {exp.duration}
                </span>
                <p className="mt-4 text-gray-700">{exp.description}</p>
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
