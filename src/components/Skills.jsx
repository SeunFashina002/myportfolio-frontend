import html from "../assets/icons/html-icon.svg";
import css from "../assets/icons/css-icon.svg";
import javascript from "../assets/icons/javascript-icon.svg";
import react from "../assets/icons/react-js-icon.svg";
import bootstrap from "../assets/icons/bootstrap-5-logo-icon.svg";
import tailwind from "../assets/icons/tailwind-css-icon.svg";
import windows from "../assets/icons/windows-10-icon.svg";
import git from "../assets/icons/git-icon.svg";
import github from "../assets/icons/github-icon.svg";
import sql from "../assets/icons/sql-server.svg";
// import redux from "../assets/icons/redux-icon.svg";
import vite from "../assets/icons/vitejs.svg";
import python from "../assets/icons/python.svg";
import firebase from "../assets/icons/firebase.svg";
import typescript from "../assets/icons/typescript-icon.svg";
import next from "../assets/icons/nextjs-icon.svg";

const Skills = (props) => {
  const skills = [
    {
      id: 1,
      src: python,
      paragraph: "Python",
      style: "shadow-yellow-300",
    },
    
    {
      id: 2,
      src: javascript,
      paragraph: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: typescript,
      paragraph: "Typescript",
      style: "shadow-blue-600",
    },
    
    
    {
      id: 4,
      src: react,
      paragraph: "React JS",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: next,
      paragraph: "Next JS",
      style: "shadow-slate-500",
    },
    {
      id: 6,
      src: html,
      paragraph: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: css,
      paragraph: "CSS",
      style: "shadow-blue-500",
    },
    {
    ];

  return (
    <div name="skills" className={`${props.mode ? "" : "dark"}`}>
      <div className="w-full text-black dark:text-white dark:bg-[#1e293b] bg-[#e2e8f0] mt-8 md:px-12 ">
        <div className="mx-auto p-4 flex flex-col justify-center">
          <div>
            <p className="md:text-5xl text-4xl font-bold mt-12  dark:text-slate-300 bg-clip-text">
              Skills
            </p>
            <p className="py-6">These are the technologies I've work with 🛠️</p>
          </div>

          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-center py-8 gap-8 ">
            {skills.map(({ id, src, paragraph, style }) => (
              <div
                key={id}
                className={`rounded-lg py-2 shadow-md hover:scale-110 duration-500 ${style}`}
              >
                <img
                  src={src}
                  alt="/"
                  className=" w-[100px] h-[100px] mx-auto"
                />
                <p className="mt-4">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
