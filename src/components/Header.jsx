import React, { useState } from 'react';

export default function Header(){
  const [istoggle , settoggle]= useState(true);
    const handletoggle=()=>{
      settoggle(!istoggle)
    }
    return(
      <>
      <header className=' text-white p-4 flex flex-col sm:flex-row justify-between text-lg '>
      <div className='flex  justify-between mb-2'>
      <h1 className='text-2xl sm:text-4xl inline-block'>My Portfolio</h1>
        <div onClick={handletoggle} className='inline sm:hidden '>☰</div>
       </div>
    {istoggle && <nav className={` text-xl flex flex-row justify-around sm:w-1/2  items-center`}>
        <a href='#home' >Home</a>
        <a href='#about'>About</a>
        {/* <a href='#service'>Services</a> */}
        <a href='#skill'>Skills</a>
        {/* <a href='#project'>Project</a> */}
        <a href='#contact'>contact</a>
      </nav>}
    </header>
      </>
    )
}
