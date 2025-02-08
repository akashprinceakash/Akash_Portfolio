import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState(null); // For success/failure message
  const [isSuccess, setIsSuccess] = useState(false); // For message styling

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://akash-portfolio-i7a4.onrender.com/form", { name, email, mobileno, message })
      .then((res) => {
        setFormMessage("Form Submitted Successfully!");
        setIsSuccess(true);
        // Clear the form fields after submission
        setName("");
        setMobileNo("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setFormMessage("Failed to Submit the Form. Please Try Again.");
        setIsSuccess(false);
      });
  };

  return (
    <div
      className="bg-midnightPurple2 min-h-screen flex flex-col justify-evenly items-center p-6"
      id="contact"
    >
      <h1 className="text-center font-bold text-4xl mb-8 drop-shadow-custom1">
        Contact Me
      </h1>

       {formMessage && (
        <div
          className={`text-center p-4 mb-4 rounded-lg ${
            isSuccess
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          } transition duration-500 ease-in-out`}
        >
          {formMessage}
        </div>
      )} 

      <div className="grid lg:grid-cols-2 gap-12 w-full max-w-5xl text-white  drop-shadow-custom1" >
        <form className="w-full space-y-6"   onSubmit={handleSubmit}>
        {/* action="https://api.web3forms.com/submit" method="POST"
        <input type="hidden" name="access_key" value="17077431-449c-446d-b331-ec647dc16867"/> */}
          <label htmlFor="Name" className="block">
            <span className="font-semibold">Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="Email" className="block">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900 mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="Number" className="block">
            <span className="font-semibold">Phone</span>
            <input
              type="tel"
              placeholder="Your PhoneNumber"
              className="w-full bg-slate-900 mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              value={mobileno}
              name="phone number"
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </label>

          <label htmlFor="message" className="block">
            <span className="font-semibold">Message</span>
            <textarea
              placeholder="Message"
              rows={4}
              name="message"
              className="w-full bg-slate-900 mt-1 p-2 bg-grey-700 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="w-full py-3 bg-sky-700 text-white rounded-lg font-semibold hover:bg-sky-500 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="space-y-8 text-center text-white lg:text-left drop-shadow-custom1">
          <div className="flex justify-center items-center lg:justify-start hover:text-slate-400 hover:cursor-pointer">
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
            <p className="ml-2 ">+91 9886921568</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start hover:text-slate-400 hover:cursor-pointer">
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
            <p className="ml-2"> akashprinceakash9986@gmail.com</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start hover:text-slate-400 hover:cursor-pointer">
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
