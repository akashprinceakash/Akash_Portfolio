import React from "react";

export default function contact() {
  return (
      <div
        className="bg-midnightPurple2 min-h-screen flex flex-col justify-evenly items-center p-6 "
        id="contact">
         <h1 className="text-center font-bold text-white text-4xl mb-8">Contact Me</h1>

        <div className="grid lg:grid-cols-2 gap-12 w-full max-w-5xl text-white ">
          <form action="" className="w-full space-y-6">
          <div className="">
          <label htmlFor="Name"  className='block'>
          <span className="font-semibold">Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
            /></label>
            
            <label htmlFor="Email" className='block'>
            <span className=" font-semibold">Email</span>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900 mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
            </label>
            
            <label htmlFor="Number" className="block">
            <span className=" font-semibold">Phone</span>
            <input
              type="tel"
              placeholder="Your PhoneNumber"
              className="w-full bg-slate-900 mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none "
            />
            </label>
            
            <label htmlFor="subject" className='block'>
            <span className=" font-semibold">Subject</span>
            <input  
              type="text"
              placeholder="subject"
              className="w-full bg-slate-900 mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
            </label>
            
            <label htmlFor="message" className='block'>
              <span className=" font-semibold">Message</span>
            <textarea
              type="text"
              placeholder="message"
              rows={4}
              className="w-full bg-slate-900 mt-1 p-2 bg-grey-700 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
            </label>
            </div>
            <button type="submit" className="w-full py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-700 transition duration-300">
            Send message
          </button>
          </form>
      {/* Contact Info Section */}
        <div className="space-y-8 text-center text-white lg:text-left ">
          <div className="flex justify-center items-center lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.88 19.88 0 0 1-8.63-3.17A19.5 19.5 0 0 1 3.17 10.81 19.88 19.88 0 0 1 0 2.18 2 2 0 0 1 2.05 0h3a2 2 0 0 1 2 1.72 12.3 12.3 0 0 0 .65 2.78 2 2 0 0 1-.45 2.11L6.11 7.05a16 16 0 0 0 6.84 6.84l.44-.44a2 2 0 0 1 2.11-.45 12.3 12.3 0 0 0 2.78.65A2 2 0 0 1 22 16.92z" />
            </svg>
            <p className="ml-2">+91 9886921568</p>
          </div>

          <div className="flex items-center justify-center lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <p className="ml-2">akashprinceakash9986@gmail.com</p>
          </div>

          <div className="flex items-center justify-center lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="ml-2">Jayanagar 1st Block Bengaluru 560011</p>
          </div>
        </div>
      </div>
      </div>
  
  );
}
