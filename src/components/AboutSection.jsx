import { FaCode, FaServer, FaDatabase, FaBrain } from "react-icons/fa";

export default function About({ mode }) {
  const skills = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Backend Development",
      description: "NestJS, Node.js, Express",
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "API Development",
      description: "RESTful APIs, GraphQL",
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Database Management",
      description: "MongoDB, PostgreSQL, MySQL",
    },
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "Future Focus",
      description: "Machine Learning & AI",
    },
  ];

  return (
    <section
      id="about"
      className={`py-16 px-4 sm:px-6 lg:px-8 ${mode ? "" : "dark"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#0284c7] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <span className="text-[#0284c7] font-semibold">
                  Results-driven
                </span>{" "}
                Junior Software Engineer with{" "}
                <span className="text-[#0284c7] font-semibold">2+ years</span>{" "}
                of experience building{" "}
                <span className="text-[#0284c7] font-semibold">
                  scalable full-stack
                </span>{" "}
                web applications using
                <span className="text-[#0284c7] font-semibold">
                  {" "}
                  React, Tailwind CSS, NestJS, and MongoDB
                </span>
                . Currently{" "}
                <span className="text-[#0284c7] font-semibold">
                  leading the end-to-end development
                </span>{" "}
                of VanConnect, a customer-facing logistics platform web app,
                where I{" "}
                <span className="text-[#0284c7] font-semibold">
                  independently architect, develop, and optimize
                </span>{" "}
                both frontend and backend systems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
                I have successfully improved API response efficiency by{" "}
                <span className="text-[#0284c7] font-semibold">25%</span> and
                accelerated feature delivery by{" "}
                <span className="text-[#0284c7] font-semibold">30%</span>{" "}
                through the design and implementation of{" "}
                <span className="text-[#0284c7] font-semibold">
                  reusable component libraries
                </span>{" "}
                and optimized
                <span className="text-[#0284c7] font-semibold">
                  {" "}
                  REST and GraphQL endpoints
                </span>
                . My passion lies in writing{" "}
                <span className="text-[#0284c7] font-semibold">
                  clean, maintainable code
                </span>{" "}
                and delivering{" "}
                <span className="text-[#0284c7] font-semibold">
                  seamless user experiences
                </span>
                .
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
                Experienced in{" "}
                <span className="text-[#0284c7] font-semibold">
                  remote agile teams
                </span>
                , I thrive in{" "}
                <span className="text-[#0284c7] font-semibold">
                  cross-cultural collaboration
                </span>{" "}
                and{" "}
                <span className="text-[#0284c7] font-semibold">
                  asynchronous workflows
                </span>
                . I'm eager to contribute to{" "}
                <span className="text-[#0284c7] font-semibold">
                  forward-thinking international teams
                </span>{" "}
                and continue growing my expertise while solving{" "}
                <span className="text-[#0284c7] font-semibold">
                  meaningful, real-world problems
                </span>{" "}
                through technology.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-[#0284c7] mb-2">{skill.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Stats/Highlights */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Professional Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">
                    Years of Experience
                  </span>
                  <span className="text-[#0284c7] font-semibold">2+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </span>
                  <span className="text-[#0284c7] font-semibold">5+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">
                    Technologies Mastered
                  </span>
                  <span className="text-[#0284c7] font-semibold">10+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">
                    Client Satisfaction
                  </span>
                  <span className="text-[#0284c7] font-semibold">100%</span>
                </div>
              </div>
            </div>

            {/* Professional Focus */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Professional Focus
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0284c7] rounded-full"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building scalable and maintainable applications
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0284c7] rounded-full"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Optimizing performance and user experience
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0284c7] rounded-full"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Contributing to international teams
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0284c7] rounded-full"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Solving real-world problems through technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
