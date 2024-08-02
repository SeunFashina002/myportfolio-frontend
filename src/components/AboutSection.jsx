export default function About({ mode }) {
  return (
    <section className={`px-3 md:px-12 ${mode ? "" : "dark"}`}>
      <div className="about w-full md:w-2/3 bg-[#d1d5db] mb-6 dark:bg-slate-800 dark:text-slate-300 p-4 rounded-2xl">
        <h2 className="text-center  md:text-5xl text-4xl font-medium  dark:text-gray my-4">
          About
        </h2>
        <p>
          A highly Dedicated Backend Engineer with 2+ years of experience
          specializing in Node.js and other backend technologies. Proficient in
          building robust APIs and scalable systems using MongoDB, PostgreSQL,
          GraphQL, NestJS and Django. Currently expanding knowledge in
          SpringBoot, with a passion for deepening expertise in backend
          development. While skilled in frontend development technologies like
          React, Tailwind, NextJS and TypeScript, my primary focus is on backend
          development, aiming to eventually transition into the machine learning
          space. Dedicated to continuous learning and tackling complex
          challenges.
        </p>
      </div>
    </section>
  );
}
