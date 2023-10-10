import { RESUME_URL } from "../constants/resume_url";
import { Link } from "react-scroll";
export default function Hero({ mode }) {
  return (
    <section
      className={`${mode ? "" : "dark"} intro md:px-12 mt-6 py-4 w-full `}
    >
      <h1 className="dark:text-white text-3xl font-medium md:text-7xl">
        My name is Seun, I am a
        <span className="text-4xl text-[#0284c7] font-bold md:text-8xl">
          {" "}
          Backend Developer
        </span>
      </h1>
      <p className="body dark:text-white">
        I am a backend developer eager to contribute to team success through
        hard work, attention to detail, and excellent organizational skills.
      </p>
      <div className="btns flex flex-col md:flex-row md:items-center md:justify-center md:gap-2 w-full p-3">
        <a
          href={RESUME_URL}
          target="__blank"
          className="my-2 border border-blue-500 dark:border-blue-600 md:w-1/3 py-3 rounded-3xl md:hover:scale-110 duration-300"
        >
          <button className="w-full dark:text-white text-blue-600">
            View Resume
          </button>
        </a>
        <Link
          to="contact"
          className="md:w-1/3 py-3 rounded-3xl md:hover:scale-110 duration-300 bg-blue-500 dark:bg-blue-600"
        >
          <button className="w-full text-white">Contact Me</button>
        </Link>
      </div>
    </section>
  );
}
// w-full hover:scale-110 duration-300 outline-blue-500 dark:bg-transparent outline dark:outline-blue-600 dark:text-white text-blue-600
