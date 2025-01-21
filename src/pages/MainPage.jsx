import About from "../components/About ";
import HomeContainer from "../components/HomeContainer";
import Technologies from "../components/Technologies ";

const MainPage = () => {
  return (
    <>
      <div className="mt-20">
        <section
          id="home"
          className="flex h-screen items-center justify-center"
        >
          <HomeContainer />
        </section>
        <section
          id="about"
          className="flex h-screen items-center justify-center"
        >
          <About />
        </section>
        <section className="flex h-screen items-center justify-center">
          <Technologies/>
        </section>
        <section
          id="projects"
          className="flex h-screen items-center justify-center"
        >
          <h1 className="text-4xl font-bold text-black">My Projects</h1>
        </section>
        <section
          id="contact"
          className="flex h-screen items-center justify-center"
        >
          <h1 className="text-4xl font-bold text-black">Contact Me</h1>
        </section>
      </div>
    </>
  );
};

export default MainPage;
