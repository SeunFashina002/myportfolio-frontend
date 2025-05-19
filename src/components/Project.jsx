import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";
import linkzen from "../assets/linkzen.jpeg";
import promise from "../assets/promise-me.png";
import natalbond from "../assets/natalbond.png";
import raize from "../assets/raize.png";
import community from "../assets/community.png";
import rentville from "../assets/rentville.png";

const Project = (props) => {
  const professionalProjects = [
    {
      id: 1,
      src: raize,
      name: "Raize App",
      description:
        "A fintech app that allow users make payment transactions with the use of pay-codes.",
      live: "https://play.google.com/store/apps/details?id=co.raize",
      code: "",
      tags: ["Fintech", "Mobile App", "Payment System"],
      role: "Backend Developer",
    },
    {
      id: 2,
      src: natalbond,
      name: "Natalbond Health",
      description:
        "Natalbond is designed to enhance the health life of women in their reproductive or motherhood stage.",
      live: "https://natalbond.com",
      code: "",
      tags: ["Healthcare", "Women's Health", "Web Platform"],
      role: "Full Stack Developer",
    },
    // {
    //   id: 3,
    //   src: rentville,
    //   name: "RentVille",
    //   description:
    //     "RentVille helps university students find and rent apartments easily and securely through verified agents.",
    //   live: "https://rentville.ng",
    //   code: "",
    //   tags: ["Real Estate", "Student Housing", "Web Platform"],
    //   role: "Backend Developer",
    // },
  ];

  const funProjects = [
    {
      id: 1,
      src: community,
      name: "Community Chat App",
      description:
        "This chat app was designed to foster effective communication and accountability among a group of related people.",
      live: "https://pontypridd.vercel.app/",
      code: "https://github.com/SeunFashina002/community-chatapp-using-stream",
      tags: ["Real-time", "Communication", "Web App"],
      role: "Full Stack Developer",
      status: "Completed",
    },
    {
      id: 2,
      src: linkzen,
      name: "LINKZEN (SaaS)",
      description:
        "My friend, Kelvin and I are currently working on this product. It is a link and file management tool.",
      live: "https://linkzen-git-dev-cyphermoon.vercel.app/",
      code: "",
      tags: ["SaaS", "File Management", "In Development"],
      role: "Co-founder & Developer",
      status: "In Progress",
    },
    // {
    //   id: 3,
    //   src: promise,
    //   name: "Promise Me",
    //   description:
    //     "A digital promise card that allow users to create a list of gift items they desire and share it with their loved ones.",
    //   live: "https://promisecard.netlify.app/",
    //   code: "https://github.com/SeunFashina002/promise-card",
    //   tags: ["Gift Registry", "Social", "Web App"],
    //   role: "Full Stack Developer",
    //   status: "Completed",
    // },
  ];

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={project.src}
          alt={project.name}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-[#0284c7] hover:text-white transition-colors duration-300"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-[#0284c7] hover:text-white transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.name}
          </h3>
          <span className="text-sm text-[#0284c7] font-medium">
            {project.role}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className={`py-16 px-4 sm:px-6 lg:px-8 ${props.mode ? "" : "dark"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Professional Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Projects
            </h2>
            <div className="w-24 h-1 bg-[#0284c7] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the professional projects I've worked on,
              showcasing my experience in building scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Fun Projects */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Fun Projects
            </h2>
            <div className="w-24 h-1 bg-[#0284c7] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These are some of my personal projects where I experiment with new
              technologies and build solutions for fun problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
