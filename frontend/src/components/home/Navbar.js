import React, { useState } from "react";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import l1 from "../../Images/l1.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  function checkAndSetShowMenu() {
    if (window.innerWidth < 1024) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }

  window.addEventListener("load", checkAndSetShowMenu);

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
              <div className="brand-title max-sm:pl-2 mb-2 pl-2">
                <h1> Medicinal & Aromatic Plants Portal</h1>
              </div>
            </Link>
          </div>
          <div className={showMenu ? "navbar-menu" : "navbar-menu active"}>
            <ul>
              <li>
                <Link to="/">
                  <b>હોમ</b>
                </Link>
              </li>
              <li>
                <Link to="/information">
                  <b>માહિતી</b>
                </Link>
              </li>
              <li>
                <Link to="/practices">
                  <b>પાકની પદ્ધતિઓ</b>
                </Link>
              </li>
              <li>
                <Link to="/purchase">
                  <b>ખરીદો</b>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <b>અમારા વિશે</b>
                </Link>
              </li>
              <li>
                <Link to="/admin">D</Link>
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
    </>
  );
}
