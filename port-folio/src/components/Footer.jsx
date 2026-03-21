
import React from 'react'
import "animate.css";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
     <footer className="bg-[#070d1a] text-gray-400 py-8 animate__animated animate__fadeInUp">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left side */}
        <p className="text-center md:text-left animate__animated animate__fadeInLeft">
          &copy; {new Date().getFullYear()} Kittu. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex gap-6 animate__animated animate__fadeInRight">

          <a 
            href="https://github.com/kittu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition transform hover:scale-125"
          >
            <Github size={24} />
          </a>

          <a 
            href="https://linkedin.com/in/kittu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition transform hover:scale-125"
          >
            <Linkedin size={24} />
          </a>

          <a 
            href="https://twitter.com/kittu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition transform hover:scale-125"
          >
            <Twitter size={24} />
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer