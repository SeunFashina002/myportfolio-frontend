import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/icon.png";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  const links = [
    { id: 1, text: "home" },
    { id: 2, text: "about" },
    { id: 3, text: "projects" },
    { id: 4, text: "skills" },
    { id: 5, text: "contact" },
  ];

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        props.mode
          ? "bg-transparent backdrop-blur-md shadow-lg"
          : "bg-[#111827]"
      } ${!props.mode ? "dark" : ""}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleNav}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {nav ? (
                <FaTimes
                  size={20}
                  className="text-gray-600 dark:text-gray-300"
                />
              ) : (
                <FaBars
                  size={20}
                  className="text-gray-600 dark:text-gray-300"
                />
              )}
            </button>

            <Link to="home" className="flex items-center gap-3 cursor-pointer">
              <img
                src={logo}
                alt="logo"
                width={30}
                className="hidden md:block rounded-md"
              />
              <h1 className="font-medium text-2xl">
                <span className="text-gray-900 dark:text-white">Se</span>
                <span className="text-[#0284c7]">un</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(({ id, text }) => (
              <Link
                key={id}
                to={text}
                smooth
                duration={200}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#0284c7] dark:hover:text-[#0284c7] transition-colors relative group"
              >
                {text}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284c7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={props.toggle}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {props.mode ? (
              <FaMoon size={20} className="text-gray-600 dark:text-gray-300" />
            ) : (
              <FaSun size={20} className="text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          onClick={handleNav}
        />
        <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Menu
              </h2>
              <button
                onClick={handleNav}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FaTimes
                  size={20}
                  className="text-gray-600 dark:text-gray-300"
                />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1">
              {links.map(({ id, text }) => (
                <Link
                  key={id}
                  to={text}
                  smooth
                  duration={200}
                  onClick={handleNav}
                  className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#0284c7] dark:hover:text-[#0284c7] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  {text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
