const NavBar = () => {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[60%] -translate-x-1/2 transform rounded-full bg-gray-100 bg-opacity-0 pe-3 ps-3 text-black shadow-md backdrop-blur-lg">
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
  );
};

export default NavBar;
