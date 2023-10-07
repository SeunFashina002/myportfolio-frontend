import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const SocialLinks = (props) => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/bahkho/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://www.github.com/bahkho/",
    },
    {
      id: 3,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/Bahkho______",
    },
    {
      id: 4,
      child: (
        <>
          Whatsapp <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/+19023995639",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className={props.mode ? "" : "dark"}>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-b from-teal-600 to-cyan-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-black dark:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
