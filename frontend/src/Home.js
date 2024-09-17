import React from "react";
import Carousel from "./components/home/Carousel";
import NavCards from "./components/home/NavCards";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

function Home() {
  return (
    <>
      <Carousel />
      <NavCards />
      {/* <About /> */}
      <Contact />
    </>
  );
}

export default Home;
