
import React from 'react'
import "animate.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12 animate__animated animate__fadeInDown">
          <h2 className="text-4xl font-bold">My Skills</h2>
          <p className="text-gray-400 mt-3">
            Technologies and abilities I use to build modern web applications.
          </p>
        </div>

        {/* Technical Skills */}

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-[#f8fafc] animate__animated animate__fadeInLeft">
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <FaHtml5 className="text-4xl mx-auto text-orange-500 mb-3" />
              <p>HTML</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <FaCss3Alt className="text-4xl mx-auto text-blue-500 mb-3" />
              <p>CSS</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <FaJs className="text-4xl mx-auto text-yellow-400 mb-3" />
              <p>JavaScript</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <FaReact className="text-4xl mx-auto text-cyan-400 mb-3" />
              <p>React</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <FaBootstrap className="text-4xl mx-auto text-purple-500 mb-3" />
              <p>Bootstrap</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <SiTailwindcss className="text-4xl mx-auto text-sky-400 mb-3" />
              <p>Tailwind CSS</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <FaNodeJs className="text-4xl mx-auto text-green-500 mb-3" />
              <p>Node.js</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <SiExpress className="text-4xl mx-auto text-gray-300 mb-3" />
              <p>Express.js</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <SiMongodb className="text-4xl mx-auto text-green-400 mb-3" />
              <p>MongoDB</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <SiPostman className="text-4xl mx-auto text-orange-500 mb-3" />
              <p>Postman</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition duration-300 animate__animated animate__zoomIn">
              <FaGithub className="text-4xl mx-auto text-white mb-3" />
              <p>GitHub</p>
            </div>

          </div>
        </div>

        {/* Soft Skills */}

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-[#f8fafc] animate__animated animate__fadeInLeft">
            Soft Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate__animated animate__fadeInUp">

            <div className="bg-gray-900 p-5 rounded-xl">
              Strong problem-solving ability.
            </div>

            <div className="bg-gray-900 p-5 rounded-xl">
              Clear and effective communication.
            </div>

            <div className="bg-gray-900 p-5 rounded-xl">
              Team collaboration mindset.
            </div>

            <div className="bg-gray-900 p-5 rounded-xl">
              Continuous learning attitude.
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Skills