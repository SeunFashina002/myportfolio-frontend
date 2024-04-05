import React from "react";

import linkzen from "../assets/linkzen.jpeg";
import promise from "../assets/promise-me.png";
import natalbond from "../assets/natalbond.png";
import raize from "../assets/raize.png";
import community from "../assets/community.png";

const Project = (props) => {
  const projects = [
    {
      id: 1,
      src: raize,
      name: "Raize App (Bank for the unbanked)",
      description:
        "A fintech app that allow users make payment transactions with the use of pay-codes",
      live: "https://play.google.com/store/apps/details?id=co.raize",
      code: "",
    },
    {
      id: 2,
      src: natalbond,
      name: "Natalbond health",
      description:
        "Natalbond is designed to enhance the health life of women in their reproductive or motherhood stage.",
      live: "https://natalbond.com",
      code: "",
    },
    {
      id: 3,
      src: linkzen,
      name: "LINKZEN (SaaS)",
      description:
        "My friend, Kelvin and I are currently working on this product. It is a link and file management tool.",
      live: "https://linkzen-git-dev-cyphermoon.vercel.app/",
      code: "",
    },
    {
      id: 4,
      src: promise,
      name: "Promise Me (In Development)",
      description:
        "A digital promise card that allow users to create a list of gift items they desire and share it with their loved ones.",
      live: "https://promise-me.vercel.app/",
      code: "https://github.com/SeunFashina002/promise-card",
    },

    {
      id: 5,
      src: community,
      name: "Community chat app",
      description:
        "A digital promise card that allow users to create a list of gift items they desire and share it with their loved ones.",
      live: "https://promise-me.vercel.app/",
      code: "https://github.com/SeunFashina002/promise-card",
    },
  ];

  return (
    <div name="projects" className={`md:px-12 ${props.mode ? "" : "dark"}`}>
      <div className="w-full text-black dark:text-white">
        <div className="  mx-auto p-4 flex flex-col justify-center">
          <div className="pb-8">
            <p className="md:text-5xl text-4xl font-bold mt-12 dark:text-slate-300 bg-clip-text">
              Projects
            </p>
            <p className="py-6">
              Check out some of the projects I have worked on👨🏿‍💻
              <br />
              Includes personal and non-personal projects.
            </p>
          </div>

          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0">
            {projects.map(({ id, src, name, description, live, code }) => (
              <a key={id} href={live} target="_blank" rel="noreferrer">
                <div className=" shadow-lg shadow-[#e2e8f0] dark:shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt="/"
                    className={`rounded-md duration-200 md:hover:scale-105 w-[700px] h-[300px]`}
                  />

                  <div className="flex flex-col justify-center p-3">
                    <h1 className="w-full font-bold text-2xl duration-500 dark:text-gray-300 md:hover:dark:text-blue-500">
                      {name}
                    </h1>

                    <p className="w-full text-sm duration-500  hover:text-blue-600 hover:decoration-4 dark:text-slate-300">
                      {description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
