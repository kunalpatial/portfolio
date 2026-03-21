
import React from 'react'

const Experience = () => {
  return (
    <>
         <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Experience</h2>
          <p className="text-gray-400 mt-3">My professional journey so far</p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">

          {/* Experience Item 1 */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <h3 className="text-2xl font-semibold text-blue-400">WEB DEVELOPMENT</h3>
            <p className="text-gray-400 italic">Self Project | 20th june 2024 - 05 August 2024</p>
            <ul className="list-disc list-inside mt-3 text-gray-300">
              <li>Done training in web development.</li>
              <li>Built responsive and user-friendly websites using HTML, CSS, JavaScript.</li>
              <li>Optimized performance and mobile responsiveness.</li>
            </ul>
          </div>

          {/* Experience Item 2 */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <h3 className="text-2xl font-semibold text-blue-400">MERN STACK </h3>
            <p className="text-gray-400 italic">Toxsl Mohali |14 July 2025 - 14 October 2025</p>
            <ul className="list-disc list-inside mt-3 text-gray-300">
              <li>Built a full-stack web application using MongoDB, Express, React, and Node.js.</li>
              <li>Implemented REST APIs for CRUD operations and integrated frontend with backend seamlessly.</li>
              <li>Designed responsive UI with React and Tailwind CSS, deployed project on </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Experience