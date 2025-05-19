import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaServer,
  FaCode,
  FaTools,
  FaMobile,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDjango,
  SiNestjs,
  SiExpress,
} from "react-icons/si";

const Skills = (props) => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="w-6 h-6" />,
      skills: [
        {
          name: "React",
          icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
          level: "Advanced",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-8 h-8" />,
          level: "Intermediate",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
          level: "Advanced",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
          level: "Advanced",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
          level: "Advanced",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer className="w-6 h-6" />,
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-8 h-8 text-[#339933]" />,
          level: "Advanced",
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-8 h-8" />,
          level: "Advanced",
        },
        {
          name: "NestJS",
          icon: <SiNestjs className="w-8 h-8 text-[#E0234E]" />,
          level: "Intermediate",
        },
        {
          name: "Python",
          icon: <FaPython className="w-8 h-8 text-[#3776AB]" />,
          level: "Intermediate",
        },
        {
          name: "Django",
          icon: <SiDjango className="w-8 h-8 text-[#092E20]" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Database & API",
      icon: <FaDatabase className="w-6 h-6" />,
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />,
          level: "Advanced",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-8 h-8 text-[#336791]" />,
          level: "Intermediate",
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-8 h-8 text-[#E10098]" />,
          level: "Intermediate",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-16 px-4 sm:px-6 lg:px-8 ${props.mode ? "" : "dark"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-[#0284c7] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical expertise and the
            technologies I work with.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[#0284c7]">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-[#0284c7] font-medium">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-[#0284c7]">
              <FaTools className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Additional Skills
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "RESTful APIs",
              "Microservices",
              "Git & GitHub",
              "Docker",
              "AWS",
              "CI/CD",
              "Agile Methodologies",
              "Technical Writing",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center"
              >
                <span className="text-gray-900 dark:text-white font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
