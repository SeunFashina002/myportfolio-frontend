import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import logo from "../assets/icon.png";

const Navbar = (props) => {
  // USESTATE FOR NAVIGATION
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prev) => !prev);
  };

  //   ARRAY OF LINKS FOR NAVIGATION
  const links = [
    {
      id: 1,
      text: "home",
    },
    {
      id: 2,
      text: "about",
    },
    {
      id: 3,
      text: "projects",
    },
    {
      id: 4,
      text: "skills",
    },
    {
      id: 5,
      text: "contact",
    },
  ];

  return (
    <div className={`md:px-12 ${props.mode ? "" : "dark"}`}>
      <nav className="flex justify-between px-6 items-center mx-auto w-full h-20 text-black dark:text-white">
        <div className="flex gap-3">
          <div
            onClick={handleNav}
            className="flex md:hidden items-center cursor-pointer"
          >
            {nav ? (
              <FaTimes size={20} className="z-50 " />
            ) : (
              <FaBars size={20} />
            )}
          </div>

          <div className="flex cursor-pointer gap-3">
            <img
              src={logo}
              alt="logo"
              width={30}
              className="hidden md:flex rounded-md"
            />
            <h1 className=" font-medium text-3xl ">
              Se
              <span className=" bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text">
                un
              </span>
            </h1>
          </div>
        </div>

        <div className="flex justify-between">
          <ul className="hidden md:flex">
            {links.map(({ id, text }) => (
              <li
                key={id}
                className=" px-4 capitalize duration-500 hover:underline hover:underline-offset-8 hover:text-teal-600 hover:decoration-4 cursor-pointer font-medium"
              >
                <Link to={text} smooth duration={200}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex items-center cursor-pointer hover:rotate-[360deg] duration-300"
          onClick={props.toggle}
        >
          {props.mode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </div>
        {/* MOBILE NAVIGATION */}
        <div
          className={
            nav
              ? "fixed z-10 left-0 top-0 w-full h-full border-r border-r-black bg-[#f1f5f9] dark:bg-[#111827] ease-in-out duration-700 "
              : "fixed left-[-100%]"
          }
        >
          <ul className="text-black dark:text-white mt-12 flex flex-col items-center">
            {links.map(({ id, text }) => (
              <li
                key={id}
                className=" p-4 uppercase duration-500 hover:underline hover:underline-offset-8 hover:text-teal-600 hover:decoration-4 cursor-pointer font-medium"
                onClick={handleNav}
              >
                <Link onClick={handleNav} to={text} smooth duration={200}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
