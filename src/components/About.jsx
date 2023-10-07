import React from "react";
import pics from "../assets/image.jpg";

const About = (props) => {
  return (
    <div name="about" className={props.mode ? "" : "dark"}>
      <div className="w-full dark:bg-[#1e293b] bg-[#e2e8f0] py-16 px-4 text-black dark:text-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              About Me
            </h1>
            <p>
              I am also known as Bahkho. I am a student at NSCC (Nova Scotia
              Community College) currently studying IT Programming. I focus more
              on web development because it was the first field I started with.
              Moving further, i learnt Python, researched roadmaps, and watched
              online tutorials. My parents discovered my interest in programming
              and then enrolled me at NSCC. Aside coding, i like to play
              basketball and watch crime movies.
            </p>
          </div>
          <img
            className="w-[66%] mx-auto my-4 rounded-xl"
            src={pics}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
