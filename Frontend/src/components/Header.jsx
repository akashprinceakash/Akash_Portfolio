import React, { useState } from 'react';

export default function Header(){
  const [istoggle , settoggle]= useState(false);
    const handletoggle=()=>{
      settoggle(!istoggle)
    }
    return(
      <>
      <header className=' p-4 flex flex-col sm:flex-row justify-evenly text-lg text-orange-300' id='Header'>
      <div className='flex  justify-between mb-2'>
      <h1 className='text-2xl sm:text-4xl inline-block font-satisfy '><a href="#Header">Akash_rg</a> </h1>
        <div onClick={handletoggle} className='inline sm:hidden '>☰</div>
       </div>
    {istoggle && <nav className={` text-xl flex flex-row justify-around sm:w-1/2  items-center `}>
        <a href='#home' >Home</a>
        <a href='#about'>About</a>
        {/* <a href='#service'>Services</a> */} 
        <a href='#skill'>Skills</a>
        {/* <a href='#project'>Project</a> */}
        <a href='#contact'>contact</a>
      </nav>}
    <nav className={` text-xl hidden sm:flex flex-row justify-around sm:w-1/2  items-center `}>
        <a href='#home' className='hover:text-black'>Home</a>
        <a href='#about' className='hover:text-black'>About</a>
        {/* <a href='#service'>Services</a> */} 
        <a href='#skill' className='hover:text-black'>Skills</a>
        {/* <a href='#project'>Project</a> */}
        <a href='#contact' className='hover:text-black'>contact</a>
      </nav>
    </header>
      </>
    )
}
