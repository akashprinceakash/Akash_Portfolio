import React from "react";

export default function About() {
  return (
    <div
      className="bg-midnightPurple2 flex flex-col sm:flex-row justify-evenly items-center m-5"
      id="about"
    >
      <div className="text-3xl flex flex-col w-full sm:w-1/3  ">
        <h1 className="text-white text-5xl drop-shadow-custom1">
          About <span className="text-indigo-800 text-5xl ">Me</span>
        </h1>
        <h4 className="text-orange-900 drop-shadow-custom1 mt-5">
          <b className="drop-shadow-custom1 ">Full stack Web Developer</b>
        </h4>
        <p className="text-2xl  mt-5 line-clamp-3">
          Detail-oriented Full Stack Web Developer skilled in both front-end and
          back-end technologies, with a focus on delivering responsive,
          user-friendly applications.
          {/* Experienced in building secure
        authentication systems, managing databases, and creating dynamic web interfaces using Node.js,
        MongoDB, Firebase, and React. Proven ability to collaborate with clients to meet technical
        requirements and implement solutions that optimize user experience. Eager to contribute to
        innovative development teams and continue growing in a professional environment.  */}
        </p>
        <button className="mt-3  text-lg transition duration-100 ease-in-out hover:scale-110 hover:bg-indigo-900 w-40 rounded-lg border-black border-2 text-white ">
          <a href="#" className="">
          Read more
          </a>
        </button>
      </div>
      <img
        src="src\assets\PicsArt_01-24-11.00.55.png"
        alt="no image"
        className="w-4/5 sm:w-1/4  h-1/5 brightness-75  mt-3 mb-8 drop-shadow-custom "
      />
    </div>
  );
}
