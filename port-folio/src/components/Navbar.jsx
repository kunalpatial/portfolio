
import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import "animate.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='bg-[#070d1a] text-[#f8fafc] fixed w-full z-50 shadow-lg animate__animated animate__fadeInDown'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center '>
                <h1 className='text-2xl font-bold text-[#f8fafc]'>
                    KUNAL PATIAL
                </h1>

                <ul className='hidden md:flex gap-8 font-medium'>
                    <li><a href="/" className="hover:text-blue-400 cursor-pointer">| Home</a></li>
                    <li><a href="#about" className="hover:text-blue-400 cursor-pointer">| About</a></li>
                    <li><a href="#skills" className="hover:text-blue-400 cursor-pointer">| Skills</a></li>
                    <li><a href="#projects" className="hover:text-blue-400 cursor-pointer">| Projects</a></li>
                    <li><a href="#experience" className="hover:text-blue-400 cursor-pointer">| Experience</a></li>
                    <li><a href="#contact" className="hover:text-blue-400 cursor-pointer">| Contact</a></li>
                </ul>

                <div className="md:hidden">
                    {isOpen ? (
                        <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
                    ) : (
                        <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black px-6 pb-4 animate__animated animate__fadeIn">
                    <ul className="flex flex-col gap-4 font-medium">
                        <li className="hover:text-blue-400 cursor-pointer">Home</li>
                        <li className="hover:text-blue-400 cursor-pointer">About</li>
                        <li className="hover:text-blue-400 cursor-pointer">Projects</li>
                        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar