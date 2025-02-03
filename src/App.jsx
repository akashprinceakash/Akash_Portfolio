import React from 'react';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/contact';
export default function App(){
  return (
   <div className='m-0 p-0 bg-midnightPurple text-orange-300 p-1'>
   <Header/>
   <Home/>
   <About/>
   <Skill/>
   <Contact/>
 
   </div>
  )
}

