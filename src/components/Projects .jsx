import Reveal from "../Animations/Reveal";

const Projects = () => {
  const repositories = [
    {
      id: 1,
      name: "fitfusion-server & fitfusion-client",
      description:
        "A fitness app with backend (fitfusion-server) and frontend (fitfusion-client) supporting User, Trainer, and Admin portals.",
      html_url: [
        "https://github.com/AnanthuSpace/fitfusion-server",
        "https://github.com/AnanthuSpace/fitfusion-client",
      ],
      owner: { avatar_url: "/Images/Fitfusion.png" },
    },
    {
      id: 2,
      name: "vuepix-ecommerce-website",
      description:
        "VuePix is an e-commerce platform built by a self-taught developer, highlighting skills in full-stack development.",
      html_url: "https://github.com/AnanthuSpace/vuepix-ecommerce-website",
      owner: { avatar_url: "/Images/Vuepix.png" },
    },
    {
      id: 3,
      name: "aadhar-ocr-system",
      description:
        "OCR tool for extracting details like Name, DOB, and Aadhar Number from Aadhar cards.",
      html_url: "https://github.com/AnanthuSpace/aadhar-ocr-system",
      owner: { avatar_url: "/Images/Aadhar.png" },
    },
    {
      id: 4,
      name: "NoteApp",
      description:
        "A Note app with CRUD operations built in Node.js and integrated with a Flutter frontend for real-time sync.",
      html_url: "https://github.com/AnanthuSpace/NoteApp",
      owner: { avatar_url: "/Images/Noteapp.png" },
    },
    {
      id: 5,
      name: "WeatherApp",
      description:
        "A React weather app that displays location-based weather information using TypeScript.",
      html_url: "https://github.com/AnanthuSpace/WeatherApp",
      owner: { avatar_url: "/Images/Weatherapp.png" },
    },
    {
      id: 6,
      name: "url-shortener",
      description:
        "A secure URL shortening app built with Express.js and React, supporting JWT authentication.",
      html_url: "https://github.com/AnanthuSpace/url-shortener",
      owner: { avatar_url: "/Images/URL.png" },
    },
  ];

  return (
    <section id="projects" className="mx-10 px-8 py-12">
      <div className="container mx-auto">
        <Reveal>
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
            Personal Projects
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repositories.map((repo, index) => (
              <div
                key={repo.id}
                className="flex transform flex-col rounded-lg bg-white p-4 shadow-lg transition hover:scale-105"
              >
                {/* Left section: Image */}
                <div
                  className="h-32 rounded-t-lg bg-cover"
                  style={{ backgroundImage: `url(${repo.owner.avatar_url})` }}
                  title={repo.name}
                ></div>

                {/* Right section: Description */}
                <div className="flex flex-col justify-between p-4">
                  <div className="mb-4">
                    <div className="mb-2 text-lg font-bold text-gray-900">
                      {repo.name}
                    </div>
                    <p className="text-sm text-gray-700">{repo.description}</p>
                  </div>
                  <div className="flex items-center">
                    {Array.isArray(repo.html_url) ? (
                      <div className="mt-4 text-xs">
                        <a
                          href={repo.html_url[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:underline"
                        >
                          Backend Repo
                        </a>
                        <span> | </span>
                        <a
                          href={repo.html_url[1]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:underline"
                        >
                          Frontend Repo
                        </a>
                      </div>
                    ) : (
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-xs text-blue-500 hover:underline"
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
