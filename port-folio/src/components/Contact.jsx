
import React from 'react';
import { sendEmail } from "../Emailservice"; 

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-gray-400 mt-3">
            Get in touch for projects or collaborations
          </p>
        </div>

        {/* Contact Form */}
        <form 
          onSubmit={sendEmail}   
          className="bg-black p-8 rounded-2xl shadow-lg max-w-xl mx-auto flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"  
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"   
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"   
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;