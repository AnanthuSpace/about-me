import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen px-8 mx-8 mt-10">
        
      {/* Left Section: Introduction */}
      <div className="flex-1 text-black space-y-4 md:text-left text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-gray-300">ANANTHU MOHAN</span>
        </h1>
        <p className="text-lg md:text-xl">
          I'm a passionate Full-Stack Developer with expertise in the MERN stack and a knack for building user-friendly and dynamic applications. Let’s create something amazing together!
        </p>
        <a href="#contact">

        <button className="mt-4 px-6 py-3 bg-black-400 text-black-900 rounded-full shadow-lg hover:bg-gray-200 transition">
          Get in Touch
        </button>
        </a>
      </div>

      {/* Right Section: Image with Animation */}
      <motion.div
        className="flex-1 flex justify-center mt-6 md:mt-0"
        animate={{ opacity: 1, x: 0 }} 
      >
        <img
          src="/SVG/main-svg.png" 
          alt="Personalized Graphic"
          className="w-80 h-80 md:w-[400px] md:h-[400px] object-cover animate-move"
        />
      </motion.div>
    </div>
  );
};

export default HomeContainer;
