import React from 'react'

export default function Skill() {
  const techStacks = [
    { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "MongoDB", icon: "https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png" },
    { name: "React.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
  ];
  return (
    <>
  <div className='min-h-screen  flex flex-col justify-evenly items-center ' id='skill'>
      <div className='text-center  text-4xl mb-7 drop-shadow-custom1 font-bold'> Web Skills </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-10'>
    {techStacks.map((stacks)=>(
      <div key={stacks.name} className='bg-gradient-to-r drop-shadow-custom1 from-blue-700 to-teal-500 p-6 flex flex-col justify-center items-center p-3 rounded-xl shadow-lg transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:scale-105'>
        <div className='h-20 w-20 mb-4 '>
          <img src={stacks.icon} alt={stacks.name} className='w-full h-full object-contain drop-shadow-custom1'/>
        </div>
        <h3 className='text-xl font-semibold text-gray-800 group-hover:text-black font-satisfy drop-shadow-custom1'>{stacks.name}</h3>
      </div>
    ))}
    </div>
  </div>
  </>
  )
}
