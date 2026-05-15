import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HomeContainer from "../components/HomeContainer";
import Projects from "../components/Projects";

const MainPage = () => {
  return (
    <main className="relative">
      <section
        id="home"
        className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center pt-20 sm:min-h-screen sm:pt-24"
      >
        <HomeContainer />
      </section>

      <section
        id="about"
        className="relative flex items-center justify-center"
      >
        <About />
      </section>

      <section
        id="experience"
        className="relative flex items-center justify-center"
      >
        <Experience />
      </section>

      <section
        id="projects"
        className="relative flex items-center justify-center"
      >
        <Projects />
      </section>

      <section
        id="certifications"
        className="relative flex items-center justify-center"
      >
        <Certifications />
      </section>

      <section
        id="contact"
        className="relative flex items-center justify-center"
      >
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default MainPage;
