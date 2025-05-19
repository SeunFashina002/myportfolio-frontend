import { RESUME_URL } from "../constants/resume_url";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    href: "https://github.com/seunfashina002/",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/oluwaseun-fashina-7b6b01232/",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter className="w-5 h-5" />,
    href: "https://twitter.com/heisblaq_",
    label: "Twitter",
  },
];

const techStack = [
  {
    name: "NestJS",
    icon: "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
    color: "#E0234E",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
    color: "#3178C6",
  },
  {
    name: "Next.js",
    icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    color: "#000000",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    color: "#47A248",
  },
];

export default function Hero({ mode }) {
  return (
    <section
      className={`${mode ? "" : "dark"} intro min-h-screen flex items-center relative overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0284c7]/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0284c7]/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-[#0284c7]/10 text-[#0284c7] text-sm font-medium">
                  Available for opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Hi, I'm <span className="text-[#0284c7]">Seun</span>
                <br />
                <TypeAnimation
                  sequence={["Software Engineer", 1000, "Problem Solver", 1000]}
                  wrapper="span"
                  speed={50}
                  className="text-[#0284c7]"
                  repeat={Infinity}
                />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              >
                Junior Software Engineer with{" "}
                <span className="text-[#0284c7] font-semibold">2+</span> years
                of experience building scalable full-stack web applications
                using React, NestJS, and MongoDB.{" "}
                <span className="text-[#0284c7] font-semibold">
                  Independently architected and developed
                </span>{" "}
                VanConnect's entire customer web app, improving API efficiency
                by <span className="text-[#0284c7] font-semibold">25%</span> and
                accelerating feature delivery by{" "}
                <span className="text-[#0284c7] font-semibold">30%</span>.
                Strong focus on clean code and agile collaboration.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-wide text-[#0284c7] transition-all duration-200 ease-in-out border-2 border-[#0284c7] rounded-lg hover:bg-[#0284c7] hover:text-white focus:outline-none"
              >
                <span className="relative">View Resume</span>
              </a>

              <Link
                to="contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-wide text-white transition-all duration-200 ease-in-out bg-[#0284c7] rounded-lg hover:bg-[#0369a1] focus:outline-none"
              >
                <span className="relative">Let's Connect</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#0284c7] dark:hover:text-[#0284c7] transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Tech stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0284c7]/20 to-transparent rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 rounded-lg"
                      />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#0284c7]/10 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Trusted by developers worldwide to build scalable and robust
                    applications
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// w-full hover:scale-110 duration-300 outline-blue-500 dark:bg-transparent outline dark:outline-blue-600 dark:text-white text-blue-600
