import Reveal from "../Animations/Reveal";
import Technologies from "./Technologies "

const About = () => {
  return (
    <section id="about" className="px-4 py-12 sm:px-8">
      <div className="container mx-auto">
        <Reveal>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
            About Me
          </h2>
        </Reveal>
        <Reveal>
          <div className="flex flex-col items-center lg:flex-row">
            <div className="mb-6 flex w-full justify-center lg:mb-0 lg:w-1/3">
              <img
                src="/SVG/main-svg.png"
                alt="Ananthu Mohan"
                className="animate-move h-48 w-48 object-cover sm:h-60 sm:w-60 lg:h-[400px] lg:w-[400px]"
              />
            </div>

            {/* Text Section */}
            <div className="w-full text-center lg:w-2/3 lg:pl-10 lg:text-left">
              <p className="mb-4 text-base text-gray-700 sm:text-lg">
                Hello! I'm <span className="font-bold">Ananthu Mohan</span>, a
                dedicated Full-Stack Developer with a strong foundation in the
                MERN stack. I specialize in creating dynamic and user-friendly
                web applications that solve real-world problems.
              </p>
              <p className="mb-4 text-base text-gray-700 sm:text-lg">
                With a background in Computer Science and hands-on experience in
                various projects, I have honed my skills in both front-end and
                back-end development. I am passionate about learning new
                technologies and continuously improving my craft.
              </p>
              <p className="mb-4 text-base text-gray-700 sm:text-lg">
                Let's connect and collaborate to build innovative solutions
                together!
              </p>
              <a href="#contact">
                <button className="bg-black-400 text-black-900 mt-4 rounded-full px-6 py-3 shadow-lg transition hover:bg-gray-200">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <div className="w-1/2">
          <Technologies />
        </div>
      </div>
    </section>
  );
};

export default About;
