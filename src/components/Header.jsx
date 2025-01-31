import React, { useState } from 'react';

export default function Header(){
  // const [istoggle , settoggle]= useState(false);
  //   const handletoggle=()=>{
  //     settoggle(!istoggle)
  //   }
    return(
      <>
      {/* <div onClick={handletoggle} className='block sm:hidden'>☰</div> */}
      <header className=' text-white p-4 flex   flex-col  sm:flex-row justify-between text-lg '>
       <h1 className=' text-4xl'>Akash's Portfolio</h1>
      <nav className=' text-xl flex flex-col justify-around sm:w-1/2 sm:flex-row items-center'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        {/* <a href='#service'>Services</a> */}
        <a href='#skill'>Skills</a>
        {/* <a href='#project'>Project</a> */}
        <a href='#contact'>contact</a>
      </nav>
    </header>
      </>
    )
}
