import React from 'react';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/contact';
export default function App(){
  return (
   <div className='m-0 p-0 bg-midnightPurple '>
   <Header/>
   <Home/>
   <About/>
   <Skill/>
   <Contact/>
   {/* <Service/>
   <Project/> */}
 
   </div>
  )
}

