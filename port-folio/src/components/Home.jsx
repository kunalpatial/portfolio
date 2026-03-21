
import React from 'react'
import "animate.css";

const Home = () => {
  return (
    <section className='pt-15 min-h-screen flex items-center bg-[#0f172a] text-[#f8fafc]'>

      <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>

        {/* Left Content */}
        <div className='animate__animated animate__fadeInLeft'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            Hi, I'm <span>KUNAL PATIAL</span> 👋
          </h1>

          <p className='mt-4 text-gray-300'>
            Full stack Developer specializing in React.js & Node.js.
            I build clean, responsive and user-friendly web application.
          </p>

          <div className='mt-8 flex gap-6'>
            <button className='bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition duration-300'>
              View Projects
            </button>

            <button className="border border-gray-500 hover:border-blue-500 px-6 py-3 rounded-lg transition duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center animate__animated animate__zoomIn">
          <img
            src="./assets/IMG20250217172226.jpg"
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full border-4 border-blue-100 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
          />
        </div>

      </div>

    </section>
  );
}

export default Home