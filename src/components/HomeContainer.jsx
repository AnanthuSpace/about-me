import { motion } from 'framer-motion';

const HomeContainer = () => {
  return (
    <div className="mx-10 flex min-h-screen w-full flex-col items-center justify-between px-8 py-12 md:flex-row">
      <div className="flex-1 space-y-4 text-center text-black md:text-left">
        <h1 className="text-4xl font-bold md:text-6xl">
          Hi, I'm <span className="text-gray-300">ANANTHU MOHAN</span>
        </h1>
        <p className="text-lg md:text-xl">
          I'm a passionate Full-Stack Developer with expertise in the MERN stack
          and a knack for building user-friendly and dynamic applications. Let’s
          create something amazing together!
        </p>
        <a href="#contact">
          <button className="bg-black-400 text-black-900 mt-4 rounded-full px-6 py-3 shadow-lg transition hover:bg-gray-200">
            Get in Touch
          </button>
        </a>
      </div>

      <motion.div
        className="mt-6 flex flex-1 justify-center md:mt-0"
        animate={{ opacity: 1, x: 0 }}
      >
        <img
          src="/SVG/main-svg.png"
          alt="Personalized Graphic"
          className="animate-move h-80 w-80 object-cover md:h-[400px] md:w-[400px]"
        />
      </motion.div>
    </div>
  );
};

export default HomeContainer;
