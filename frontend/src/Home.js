import React from "react";
import Carousel from "./components/home/Carousel";
import NavCards from "./components/home/NavCards";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

function Home() {
  return (
    <>
      {/* <div className="a1">
        <Navbar stickey={true}/>
      </div> */}
      <Carousel />
      <NavCards />
      <About />
      <Contact />
    </>
  );
}

export default Home;
