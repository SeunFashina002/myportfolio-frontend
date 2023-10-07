import React from "react";
import collegePortfolio from "../assets/collegePortfolio.png";
import dataFinance from "../assets/dataFinance.png";
import routing from "../assets/routing.png";
import tenzies from "../assets/tenzies.png";
import memeGenerator from "../assets/memeGenerator.png";
import codingFacts from "../assets/codingFacts.png";
import todoApp from "../assets/todo-app.png";

const Project = (props) => {
  const projects = [
    {
      id: 7,
      src: todoApp,
      demo: "https://todo-app-bahkho.vercel.app/",
      code: "https://github.com/Bahkho/Todo-App.git",
    },
    {
      id: 1,
      src: tenzies,
      demo: "https://tenzies-game-01.netlify.app",
      code: "https://github.com/Bahkho/tenziesGame.git",
    },
    {
      id: 4,
      src: dataFinance,
      demo: "https://data-finance-01.netlify.app/",
      code: "https://github.com/Bahkho/React-Tailwind.git",
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
            <p className="py-6">Check out some of my works right here 👨🏿‍💻</p>
          </div>

          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0">
            {projects.map(({ id, src, demo, code }) => (
              <div
                key={id}
                className=" shadow-lg shadow-[#e2e8f0] dark:shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt="/"
                  className={`rounded-md duration-200 md:hover:scale-105 w-[700px] h-[300px]`}
                />

                <div className="flex flex-col justify-center p-3">
                  <a href={demo} target="_blank" rel="noreferrer">
                    <h1 className="w-full font-bold text-2xl duration-500 dark:text-gray-300 md:hover:dark:text-blue-500">
                      LINKZEN
                    </h1>
                  </a>
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> */}
                  <a href={code} target="_blank" rel="noreferrer">
                    <p className="w-full text-sm duration-500  hover:text-blue-600 hover:decoration-4 dark:text-slate-300">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nisi, incidunt? Lorem ipsum dolor sit amet consectetur
                      adipisicing.
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
