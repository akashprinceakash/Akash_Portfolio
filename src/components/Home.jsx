import React from "react";

export default function Home() {
  
  return (
    <div className="bg-midnightPurple1  flex flex-col sm:flex-row justify-center items-center p-4 text-center w-full min-h-screen ">
      {/* <img
        src="src\assets\IMG_20220416_172444.jpg"
        alt="no image"
        className="w-4/5 sm:w-1/4 h-1/4  hover:border-2 shadow-lg shadow-indigo-100   brightness-75 animate-move "
      />
      
       <div className="text-orange-300 w-7/12  drop-shadow-2xl  mt-8" id="home">
   
        <h2 className="text-3xl">Hello,I AM</h2>
        <h1 className="text-4xl">Akash R G</h1> 
        <div className="text-3xl"> And I'm a <b className="text-amber-700 shadow-lg shadow-indigo-500/100 "> Web Developer</b></div>
      </div> */}
      <img
        src="src\assets\Untitled_design__1_-removebg-preview.png"
        alt="no image"
        className="w-4/5 sm:w-1/3 drop-shadow-custom1 hover:drop-shadow-custom  brightness-75 "
      />
      
       <div className="text-orange-300  drop-shadow-2xl  mt-8 " id="home">
   
        {/* <h2 className="text-3xl mt-3">Hello,I AM</h2> */}
        <h1 className="text-4xl mt-1 ">It's Akash R G</h1> 
        <div className="text-3xl mt-3 drop-shadow-custom1">I'm a<b className="text-amber-700 shadow-lg shadow-indigo-500/100 ml-5 flex sm:inline-block hover:drop-shadow-custom1 hover:shadow-none"> Web Developer</b>
        <p></p></div>
      </div>
      <br />
    </div>
  );
}
