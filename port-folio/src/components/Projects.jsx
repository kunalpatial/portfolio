

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">PROJECTS</h2>
          <p className="text-gray-400 mt-3">Some of my recent work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <img src="./assets/Screenshot 2026-03-16 030940.png" alt="Portfolio" className="rounded-xl mb-4 w-full object-cover h-48" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">GAMING PC WEBSITE <br />  (backend may take 10-30sec for load)</h3>
            <p className="text-gray-400 mb-4">
              This website is built using React.js with proper functionality and a dummy JSON API backend for data handling.
              It includes product details, add-to-cart functionality, and user authentication (sign up / login) with data stored in local storage.(backend may take 10-30sec for load)
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">React.js</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">CSS3 / SCSS</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Bootstrap</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Redux Toolkit</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Dummy JSON API</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/kunalpatial/third-project.git" target="_blank" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">GitHub</a>
              <a href="https://third-project-mocha.vercel.app" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">Live Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <img src="./assets/Screenshot 2026-03-16 040719.png" alt="Todo App" className="rounded-xl mb-4 w-full object-cover h-48" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">AUTOCARE CAR REPAIRING LANDING PAGE</h3>
            <p className="text-gray-400 mb-4">
              This landing page section is a responsive design built with HTML, CSS, and Bootstrap 5.
              It features hero cards with icons and hover effects to highlight key services.The paragraph + image section presents content side-by-side, scaling perfectly on all screens.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">HTML</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">CSS</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Bootstrap</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/kunalpatial/second-project.git" target="_blank" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">GitHub</a>
              <a href="https://kunalpatial.github.io/second-project/" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">Live Demo</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <img src="/assets/Screenshot 2026-03-21 201722.png" alt="E-commerce UI" className="rounded-xl mb-4 w-full object-cover h-48" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">TEACHING COURSE LANDING PAGE</h3>
            <p className="text-gray-400 mb-4">
              EduPath Project is a responsive landing page built using HTML, CSS, and Bootstrap. It showcases an online learning platform offering a variety of courses in coding, design, business, and personal development. The project features a clean, user-friendly interface with sections for course highlights, learning benefits, community features, and certificate programs.

            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">HTML</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">CSS</span>
              <span className="bg-blue-500 text-[#f8fafc] px-2 py-1 rounded-full text-sm">Bootstrap</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/kunalpatial/first-project.git" target="_blank" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">GitHub</a>
              <a
                href="https://kunalpatial.github.io/first-project/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 4 */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <img src="./assets/Screenshot 2026-03-21 204021.png" alt="Todo App" className="rounded-xl mb-4 w-full object-cover h-48" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">E-COMMERCE WEBSITE WITH BACKEND <br />(backend may take 30-40sec for load)</h3>
            <p className="text-gray-400 mb-4">
              This is a fully functional e-commerce website with a modern UI, where all data is dynamic and connected to MongoDB Atlas. Users can signup, login, manage profiles with Cloudinary-stored pictures, and add products to their cart.
              It supports forgot/change password, and protected routes ensure only logged-in users can access the home page. The admin dashboard with integrated admin script allows admins to add products and manage categories directly.
              All media and data are stored securely, and the site is fully responsive with real-time backend updates.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">HTML</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Bootstrap</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">React.js</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Express.js</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Mongoose</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Postman / API Testing</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Cloudinary / File Storage</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">JWT / Authentication</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/kunalpatial/e-commerce-website.git" target="_blank" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">GitHub</a>
              <a href="https://e-commerce-website-six-topaz.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
                Live Demo
              </a>

            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Projects;