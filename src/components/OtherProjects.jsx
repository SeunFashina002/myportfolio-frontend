import { AiFillGithub } from "react-icons/ai";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const projects = [
  {
    id: 1,
    name: "Wallet Management API",
    description:
      "An API for generating payment vouchers, redeeming vouchers, tracking transaction history and managing digital wallet balances",
    live: "https://wallet-api-2dca.onrender.com/docs/",
    github: "https://github.com/SeunFashina002/wallet-management-api",
    stack: "python",
  },
  {
    id: 2,
    name: "Joolba API",
    description:
      "Joolba is an open source blogging platform. I singled handedly worked on the entire auth flow of the api.",
    live: "",
    github: "https://github.com/SeunFashina002/joolba",
    stack: "python",
  },
  {
    id: 3,
    name: "Job board API",
    description:
      "This is an API that allows authenticated users to create or post, update, delete jobs",
    live: "",
    github: "https://github.com/SeunFashina002/jobs-api",
    stack: "javascript",
  },
  {
    id: 4,
    name: "DSA",
    description:
      "This project contains solutions to tons of problem statements using python and javascript",
    live: "",
    github: "https://github.com/SeunFashina002/100Days-of-DSA",
    stack: "javascript",
  },
];

const OtherProjects = ({ mode }) => {
  return (
    <div className={`mt-4 md:px-4 ${mode ? "" : "dark"}`}>
      <p className="px-4 md:px-8 font-medium py-6 dark:text-white">
        👈 Swipe left for more ◀️
      </p>
      <div
        className={`flex gap-4 md:gap-6 flex-nowrap overflow-auto card-div px-4 md:px-12 py-3 md:py-6`}
      >
        {projects.map(({ id, name, description, live, github, stack }) => {
          return (
            <div className="flex flex-col p-3 card outline outline-none shadow-md shadow-slate-400 rounded-sm dark:outline-slate-400 h-40 w-96 dark:rounded-sm dark:shadow-none justify-between hover:dark:outline-blue-500 md:hover:scale-110 duration-150">
              <h1 className="font-bold dark:text-slate-300 text-2xl">{name}</h1>
              <p className="dark:text-slate-100 text-sm">{description}</p>
              <div className="flex justify-between items-center">
                {stack === "python" ? (
                  <FaPython
                    size={24}
                    color={mode ? "gray" : "yellow"}
                    className="text-white"
                  />
                ) : (
                  <IoLogoJavascript
                    size={24}
                    color={mode ? "gray" : "yellow"}
                    className="text-white"
                  />
                )}
                <div className="flex items-center">
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <AiFillGithub
                        size={24}
                        color={mode ? "black" : "white"}
                        className="mx-2"
                      />
                    </a>
                  )}
                  {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer">
                      <BsFillArrowUpRightCircleFill
                        size={23}
                        color={mode ? "black" : "white"}
                      />
                    </a>
                  )}{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProjects;
