const articles = [
  {
    id: 1,
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1690153463540/1d312221-bcd2-4500-9fc9-d03414d197bf.png",
    url: "https://seunfashina.hashnode.dev/exploring-django-viewsets-simplifying-api-development-and-enhancing-code-reusability",
    title:
      "Exploring Django ViewSets: Simplifying API Development and Enhancing Code Reusability",
  },
  {
    id: 2,
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1690500358335/53e68627-bfc5-4882-8c8c-6f82d11ee00b.png",
    url: "https://seunfashina.hashnode.dev/building-and-publishing-packages-in-python",
    title: "Building and Publishing packages in Python",
  },
];

const Articles = ({ mode }) => {
  return (
    <div name="projects" className={`md:px-12 ${mode ? "" : "dark"}`}>
      <div className="w-full text-black dark:text-white">
        <div className="  mx-auto p-4 flex flex-col justify-center">
          <div className="pb-8">
            <p className="md:text-5xl text-4xl font-bold mt-12  dark:text-slate-300 bg-clip-text">
              Articles
            </p>
            <p className="py-6">Some of my technical articles ✨</p>
          </div>

          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {articles.map(({ id, src, url, title }) => (
              <div key={id}>
                <div className="rounded-lg">
                  <img
                    src={src}
                    alt="/"
                    className={`rounded-md duration-200 hover:scale-105 w-[700px] h-[300px]`}
                  />
                </div>
                <div className="flex flex-col justify-center py-3">
                  <a href={url} target="_blank" rel="noreferrer">
                    <h1 className="w-full font-bold text-2xl duration-500 dark:text-gray-300 hover:dark:text-blue-500">
                      {title}
                    </h1>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://seunfashina.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-1/2 md:w-1/4 rounded-md p-4 hover:scale-110 duration-300 bg-blue-500 dark:bg-blue-600 text-white text-left font-semibold text-md my-6">
              Read the blog 🚀
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articles;
