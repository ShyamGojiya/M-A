import React from 'react'
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Oversev from "./components/Ourserv";

const MainAbout = () => {
  return (
    <div className='flex flex-col gap-8 mt-10'>
      <About />
      <Oversev />
      <Contact />
    </div>
  )
}

export default MainAbout