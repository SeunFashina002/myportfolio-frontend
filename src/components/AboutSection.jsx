export default function About({ mode }) {
  return (
    <section className={`px-3 md:px-12 ${mode ? "" : "dark"}`}>
      <div className="about w-full md:w-2/3 bg-[#d1d5db] mb-6 dark:bg-slate-800 dark:text-slate-300 p-4 rounded-2xl">
        <h2 className="text-center  md:text-5xl text-4xl font-medium  dark:text-gray my-4">
          About
        </h2>
        <p>
          As a software engineer, I have a passion for building robust and
          scalable backend applications that can handle large amounts of data and
          traffic. However, I also have experience in frontend development, with
          the use of stacks like HTML, CSS, and JavaScript, TypeScript as well
          as modern frontend frameworks like React and NextJs.
        </p>
        <br />
        <p>
          This sets me apart from other developers in that it has given me a
          unique perspective on the development process, allowing me to
          collaborate seamlessly with backend developers to develop API's
          that meets the full need of the frontend team enabling them build
          applications that are not only powerful and efficient, but also
          user-friendly and visually appealing.
        </p>
        <br />
        <p>
          I am always looking for new challenges and opportunities to expand my
          knowledge and skills in software engineering. If you are looking for a
          developer who is passionate about building robust and scalable
          applications, I would love to hear from you.
        </p>
      </div>
    </section>
  );
}
