import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const SideBar = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 rounded-full bg-gray-100 bg-opacity-0 text-black shadow-md backdrop-blur-lg p-3">
      {/* Sidebar Container */}
      <div className="flex flex-col items-center space-y-6">
        {/* GitHub */}
        <a
          href="https://github.com/AnanthuSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 text-3xl hover:text-gray-600 transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-500 text-3xl hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-500 text-3xl hover:text-gray-400 transition"
        >
          <FaWhatsapp />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourusername"
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
