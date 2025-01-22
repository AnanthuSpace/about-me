import { FaHome, FaUserCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";

const NavBar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed left-1/2 top-4 z-50 hidden w-[60%] -translate-x-1/2 transform rounded-full bg-gray-100 bg-opacity-0 pe-3 ps-3 text-black shadow-md backdrop-blur-lg md:flex">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold hover:text-gray-400">
            <a href="#home">ANANTHU</a>
          </div>

          <ul className="flex space-x-8">
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>

            <li>
              <a href="#experience" className="hover:text-gray-400">
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
          </ul>

          <div>
            <a
              href="#contact"
              className="border-b border-transparent transition-all hover:border-white hover:text-gray-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 z-50 w-full bg-gray-100 shadow-lg md:hidden">
        <div className="flex justify-around p-2 text-sm">
          <a
            href="#home"
            className="flex flex-col items-center text-gray-700 hover:text-gray-400"
          >
            <span className="text-2xl">
              <FaHome />
            </span>
            <span>Home</span>
          </a>
          <a
            href="#about"
            className="flex flex-col items-center text-gray-700 hover:text-gray-400"
          >
            <span className="text-2xl">
              <FaUserCircle />
            </span>
            <span>About</span>
          </a>
          <a
            href="#experience"
            className="flex flex-col items-center text-gray-700 hover:text-gray-400"
          >
            <span className="text-2xl">
              <MdWork />
            </span>
            <span>Experience</span>
          </a>
          <a
            href="#projects"
            className="flex flex-col items-center text-gray-700 hover:text-gray-400"
          >
            <span className="text-2xl">
              <SiFiles />
            </span>
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center text-gray-700 hover:text-gray-400"
          >
            <span className="text-2xl">
              <BiSolidContact />
            </span>
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
