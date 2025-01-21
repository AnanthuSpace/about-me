import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const SideBar = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 rounded-full bg-gray-100 bg-opacity-0 text-black shadow-md backdrop-blur-lg p-3">

      <div className="flex flex-col items-center space-y-6">

        <a
          href="https://github.com/AnanthuSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 text-3xl hover:text-gray-600 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ananthu-mohan-b3b1021a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-500 text-3xl hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/8943365344"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-500 text-3xl hover:text-gray-400 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.instagram.com/an4nthu._/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-500 text-3xl hover:text-gray-400 transition"
        >
          <SiInstagram />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
