const Projects = () => {
    // Hardcoded repositories data
    const repositories = [
      {
        id: 1,
        name: "fitfusion-server & fitfusion-client",
        description:
          "FitFusionApp is a comprehensive fitness web application designed to enhance physical health and wellness journeys. This repository focuses on the backend development (fitfusion-server) and frontend development (fitfusion-client) of FitFusionApp, supporting three primary portals: User, Trainer, and Admin. Each portal provides tailored functionalities to meet the unique needs of different user types.",
        html_url: [
          "https://github.com/AnanthuSpace/fitfusion-server",
          "https://github.com/AnanthuSpace/fitfusion-client",
        ],
        owner: { avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4" },
      },
      {
        id: 2,
        name: "vuepix-ecommerce-website",
        description:
          "VuePix: Showcasing Self-Taught Skills in Style. VuePix isn't just an e-commerce platform—it's a testament to the power of self-learning and passion for innovation. Crafted from the ground up by a self-taught developer, VuePix embodies a journey of skill acquisition, dedication, and creativity.",
        html_url: "https://github.com/AnanthuSpace/vuepix-ecommerce-website",
        owner: { avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4" },
      },
      {
        id: 3,
        name: "aadhar-ocr-system",
        description:
          "The OCR Aadhar Card Details Extraction System is a tool designed to extract essential information from Aadhar cards, including Name, Date of Birth, Gender, Pincode, and Aadhar Number. Users can upload the front and back sides of their Aadhar card, and the system processes the images using advanced OCR technology to accurately extract the details.",
        html_url: "https://github.com/AnanthuSpace/aadhar-ocr-system",
        owner: { avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4" },
      },
      {
        id: 4,
        name: "NoteApp",
        description:
          "In this Note app project, I implemented the Create, Read, Update, and Delete (CRUD) operations using Node.js. I developed RESTful APIs to manage note data, integrated these with the Flutter front-end, and ensured seamless real-time data synchronization, efficient note management, and error handling.",
        html_url: "https://github.com/AnanthuSpace/NoteApp",
        owner: { avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4" },
      },
      {
        id: 5,
        name: "WeatherApp",
        description:
          "WeatherApp is a React application that fetches and displays weather information for various locations. It leverages TypeScript for type safety and Vite for a fast development environment.",
        html_url: "https://github.com/AnanthuSpace/WeatherApp",
        owner: { avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4" },
      },
    ];
  
    return (
      <section id="projects" className="py-12 px-8">
        <div className="container mx-auto">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
            My Projects
          </h2>
          <div className="space-y-10">
            {repositories.map((repo, index) => (
              <div
                key={repo.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "bg-white shadow-xl" : "bg-gray-200 shadow-md"
                } p-6 rounded-lg transition hover:scale-105`}
              >
                {/* Left section: Image or Icon */}
                <div className={`w-full md:w-1/3 ${index % 2 === 0 ? "order-2" : ""}`}>
                  {repo.owner.avatar_url && (
                    <img
                      src={repo.owner.avatar_url}
                      alt={repo.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                </div>
  
                {/* Right section: Description */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900">{repo.name}</h3>
                  <p className="mt-4 text-gray-700">{repo.description}</p>
                  {Array.isArray(repo.html_url) ? (
                    <div className="mt-6">
                      <a
                        href={repo.html_url[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Backend Repository (fitfusion-server)
                      </a>
                      <span> | </span>
                      <a
                        href={repo.html_url[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Frontend Repository (fitfusion-client)
                      </a>
                    </div>
                  ) : (
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block text-blue-500 hover:underline"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  