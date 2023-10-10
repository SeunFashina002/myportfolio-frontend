import next from "../assets/icons/nextjs-icon.svg";

const Skills = (props) => {
  const skills = [
    {
      id: 1,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png",
      paragraph: "Python",
      style: "shadow-yellow-300",
    },

    {
      id: 2,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png",
      paragraph: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png",
      paragraph: "Typescript",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png",
      paragraph: "Django (DRF)",
      style: "shadow-green-900",
    },
    {
      id: 5,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png",
      paragraph: "NodeJs (Expressjs)",
      style: "shadow-green-800",
    },
    {
      id: 6,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.svg",
      paragraph: "MongoDB",
      style: "shadow-green-800",
    },
    {
      id: 7,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.svg",
      paragraph: "PostgreSQL",
      style: "shadow-blue-700",
    },
    {
      id: 4,
      src: next,
      paragraph: "Next JS",
      style: "shadow-slate-500",
    },

    {
      id: 6,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.svg",
      paragraph: "React JS",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.svg",
      paragraph: "Tailwind CSS",
      style: "shadow-cyan-500",
    },
    {
      id: 1,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.svg",
      paragraph: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.svg",
      paragraph: "CSS",
      style: "shadow-blue-500",
    },
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
