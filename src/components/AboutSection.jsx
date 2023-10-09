export default function About({ mode }) {
  return (
    <section className={`px-3 md:px-12 ${mode ? "" : "dark"}`}>
      <div className="about w-full md:w-2/3 bg-[#d1d5db] mb-6 dark:bg-slate-800 dark:text-slate-300 p-4 rounded-2xl">
        <h2 className="text-center  md:text-5xl text-4xl font-medium  dark:text-gray my-4">
          About
        </h2>
        <p>
          As backend developer, I have a passion for building robust and
          scalable applications that can handle large amounts of data and
          traffic. However, I also have experience in frontend development,
          including HTML, CSS, and JavaScript, as well as modern frameworks like
          React.
        </p>
        <p>
          Things that sets me apart from other developers is my experience in
          contributing to both backend and frontend projects. This has given me
          a unique perspective on the development process, allowing me to
          collaborate seamlessly with other backend developers to provide API's
          that meets the full need of the frontend developers enabling them
          build applications that are not only powerful and efficient, but also
          user-friendly and visually appealing.
        </p>

        <p>
          I am always looking for new challenges and opportunities to expand my
          knowledge and skills in Python backend development.If you are looking
          for a developer who is passionate about building high-quality,
          scalable applications, I would love to hear from you.
        </p>
      </div>
    </section>
  );
}
