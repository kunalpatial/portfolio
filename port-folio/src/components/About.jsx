import React from 'react'

const About = () => {
    return (
        <section id='about' className="py-20 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                {/* Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About Me
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                        I'm a passionate full stack developer learning MERN stack.
                        I enjoy building responsive, modern web applications that provide
                        great user experience.
                    </p>

                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Currently focused on improving my skills and building real-world
                        projects to grow as a full-stack developer.
                    </p>
                </div>
                <div className="bg-gray-900 p-8 rounded-2xl shadow-xl">
                    <p className="text-gray-500 italic">

                    </p>
                    <div className="bg-gray-900 p-8 rounded-2xl shadow-xl">
                        <p className="text-gray-300 italic">
                            "Passionate Full stack Developer focused on building responsive and user-friendly web applications."
                        </p>

                    </div>
                    <div className="bg-gray-900 p-8 rounded-2xl shadow-xl">
                        <p className="text-gray-300 italic">
                            "Strong foundation in HTML, CSS, JavaScript, React, and modern UI frameworks."
                        </p>

                    </div>
                    <div className="bg-gray-900 p-8 rounded-2xl shadow-xl">
                        <p className="text-gray-300 italic">
                            "Skilled in transforming ideas into clean, functional, and visually appealing interfaces.."
                        </p>

                    </div>
                    <div className="bg-gray-900 p-8 rounded-2xl shadow-xl">
                        <p className="text-gray-300 italic">
                            "Dedicated to delivering high-quality work with attention to detail."
                        </p>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default About