import Reveal from "../Animations/Reveal";
import About from "../components/About ";
import Experience from "../components/Experience ";
import HomeContainer from "../components/HomeContainer";
import Projects from "../components/Projects ";
// import Technologies from "../components/Technologies ";

const MainPage = () => {
  return (
    <>
      <div>
        <Reveal>
          <section
            id="home"
              className="flex min-h-[100vh] items-center justify-center mt-10"
          >
            <HomeContainer />
          </section>
        </Reveal>
        
        <section
          id="about"
          className="flex min-h-[100vh] items-center justify-center"
        >
          <About />
        </section>
        
        <section
          id="experience"
          className="flex min-h-[100vh] items-center justify-center"
        >
          <Experience/>
        </section>

        <section
          id="projects"
          className="flex min-h-[80vh] items-center justify-center"
        >
          <Projects/>
        </section>
        
        <section
          id="contact"
          className="flex min-h-[80vh] items-center justify-center"
        >
          <h1 className="text-4xl font-bold text-black">Contact Me</h1>
        </section>
      </div>
    </>
  );
};

export default MainPage;
