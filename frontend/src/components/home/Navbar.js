import React, { useState } from "react";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import l1 from "../../Images/l1.png";

export default function Navbar() {
  // for toggle menu in small devices
  const [showMenu, setShowMenu] = useState(true);

  function checkAndSetShowMenu() {
    if (window.innerWidth < 1024) {
      // console.log("It works");
      setShowMenu(false);
    } else {
      setShowMenu(true); // Set to false when the window is less than or equal to 1024 pixels
    }
  }

  // Run the function when the page loads
  window.addEventListener("load", checkAndSetShowMenu);

  // Run the function when the window is resized
  window.addEventListener("resize", checkAndSetShowMenu);

  return (
    <>
      <div className="navbar-container bg-[#009372] py-2">
        <div className="animation-nav">
          <div className="l1-img-cont">
            <img src={l1} alt="" className="l1-img" />
          </div>
          <div className="l1-img-cont2">
            <img src={l1} alt="" className="l1-img2" />
          </div>
        </div>

        <div className="navbar-body">
          <div className="navbar-brandHeading">
            <Link to="/" className="flex flex-row">
              <div className="brand-logo">
                <img
                  className="min-w-max"
                  src="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1689830261/College/LOGO_b8mklr.png"
                  alt="logo"
                />
              </div>
              <div className="brand-title max-sm:pl-2">
                <h1> Medicinal & Aromatic Plants Portal</h1>
              </div>
            </Link>
          </div>
          <div className={showMenu ? "navbar-menu" : "navbar-menu active"}>
            <ul>
              <li>
                <Link to="/">હોમ</Link>
                {/* <button onClick={handleHomeClick}>હોમ</button> */}
              </li>
              <li>
                <Link to="/information">માહિતી</Link>
              </li>
              <li>
                <Link to="/practices">પાકની પદ્ધતિઓ</Link>
              </li>
              <li>
                <Link to="/purchase">ખરીદો</Link>
              </li>
              {/* <li>
                <Link to="/contact">સંપર્ક</Link>
              </li> */}
              <li>
                <Link to="/about">અમારા વિશે</Link>
              </li>
            </ul>

            <div className="navbar-button">
              <Link to={"/login"}>
                <button className="navbar-btn">
                  <FaUserCircle />
                </button>
              </Link>
            </div>
          </div>

          <a
            href="/"
            className="navbar-menu-icon"
            onClick={(e) => {
              e.preventDefault();
              setShowMenu(!showMenu);
            }}
          >
            <HiMenu color="#fff" />
          </a>
        </div>
      </div>
      {/* {showSignin ? <Signin closeSignin={siginModelClose} /> : <></>} */}
      {/* Cart Modal */}
      {
        // showCart ? <Cart closeCart = {cartClose}/> : <></>
      }
    </>
  );
}
