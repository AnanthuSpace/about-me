const About = () => {
  return (
    <section id="about" className="px-8 mx-8">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          About Me
        </h2>
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-6 flex w-full justify-center md:mb-0 md:w-1/3">
          </div>
          <div className="w-full md:w-2/3 md:pl-10">
            <p className="mb-4 text-lg text-gray-700">
              Hello! I'm <span className="font-bold">Ananthu Mohan</span>, a
              dedicated Full-Stack Developer with a strong foundation in the
              MERN stack. I specialize in creating dynamic and user-friendly web
              applications that solve real-world problems.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              With a background in Computer Science and hands-on experience in
              various projects, I have honed my skills in both front-end and
              back-end development. I am passionate about learning new
              technologies and continuously improving my craft.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Let's connect and collaborate to build innovative solutions
              together!
            </p>
            <button className="bg-black-400 text-black-900 mt-4 rounded-full px-6 py-3 shadow-lg transition hover:bg-gray-200">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
