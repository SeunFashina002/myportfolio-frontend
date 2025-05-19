import React from "react";
import { FaArrowRight, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

const articles = [
  {
    id: 1,
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1690153463540/1d312221-bcd2-4500-9fc9-d03414d197bf.png",
    url: "https://seunfashina.hashnode.dev/exploring-django-viewsets-simplifying-api-development-and-enhancing-code-reusability",
    title:
      "Exploring Django ViewSets: Simplifying API Development and Enhancing Code Reusability",
    date: "July 23, 2023",
    readTime: "5 min read",
    category: "Backend Development",
  },
  {
    id: 2,
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1690500358335/53e68627-bfc5-4882-8c8c-6f82d11ee00b.png",
    url: "https://seunfashina.hashnode.dev/building-and-publishing-packages-in-python",
    title: "Building and Publishing packages in Python",
    date: "July 28, 2023",
    readTime: "4 min read",
    category: "Python",
  },
];

const Articles = ({ mode }) => {
  return (
    <section
      id="articles"
      className={`py-16 px-4 sm:px-6 lg:px-8 ${mode ? "" : "dark"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Articles
          </h2>
          <div className="w-24 h-1 bg-[#0284c7] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing my knowledge and experiences through technical writing.
            Check out my latest articles on software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map(({ id, src, url, title, date, readTime, category }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-[#0284c7] rounded-full">
                      {category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#0284c7] transition-colors duration-300">
                    {title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBookOpen className="w-4 h-4" />
                      <span>{readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-[#0284c7] font-medium">
                    Read Article
                    <FaArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://seunfashina.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#0284c7] rounded-lg hover:bg-[#0369a1] transition-colors duration-300"
          >
            <FaBookOpen className="w-5 h-5 mr-2" />
            Visit My Blog
            <FaArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
