import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'


const Layout = () => {
  return (
    <><Navbar/>
    <Home/>
    <Skills/>
    <About/>
    <Projects/>
  <Experience/>
  <Contact/>
    
    <Footer/>

    </>
  )
}

export default Layout