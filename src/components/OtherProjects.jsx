import { AiFillGithub } from "react-icons/ai";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const OtherProjects = ({ mode }) => {
  return (
    <div className={`mt-4 md:px-4 ${mode ? "" : "dark"}`}>
      <p className="px-4 md:px-8 font-medium py-6 dark:text-white">
        👈 Swipe left for more ◀️
      </p>
      <div
        className={`flex gap-3 flex-nowrap overflow-auto card-div px-4 md:px-12 py-3 md:py-6`}
      >
        <div className="flex flex-col p-3 card outline outline-none shadow-md shadow-slate-400 rounded-sm dark:outline-slate-400 h-40 w-96 dark:rounded-sm dark:shadow-none justify-between hover:dark:outline-blue-500 md:hover:scale-110 duration-150">
          <h1 className="font-bold dark:text-slate-300 text-2xl">
            Wallet Management API
          </h1>
          <p className="dark:text-slate-100 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid
            quas reiciendis asperiores minima sapiente!
          </p>
          <div className="flex justify-between items-center">
            <FaPython
              size={24}
              color={mode ? "gray" : "yellow"}
              className="text-white"
            />
            <div className="flex items-center">
              <AiFillGithub
                size={24}
                color={mode ? "black" : "white"}
                className="mx-2"
              />
              <BsFillArrowUpRightCircleFill
                size={23}
                color={mode ? "black" : "white"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  p-3  card outline outline-none shadow-md shadow-slate-400 rounded-sm dark:outline-slate-400 h-40 w-96 dark:rounded-sm dark:shadow-none justify-between hover:dark:outline-blue-500 md:hover:scale-110 duration-150">
          <h1 className="font-bold dark:text-slate-300 text-2xl">Joolba API</h1>
          <p className="dark:text-slate-100 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid
            quas reiciendis asperiores minima sapiente!
          </p>
          <div className="flex justify-between items-center">
            <IoLogoJavascript
              size={24}
              color={mode ? "gray" : "yellow"}
              className="text-white"
            />
            <div className="flex items-center">
              <AiFillGithub
                size={24}
                color={mode ? "black" : "white"}
                className="mx-2"
              />
              <BsFillArrowUpRightCircleFill
                size={23}
                color={mode ? "black" : "white"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
