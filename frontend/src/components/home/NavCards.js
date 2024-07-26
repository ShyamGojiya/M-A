import React from "react";
import "./NavCards.css";
import { Link } from "react-router-dom";

//Images
import infoimg from "../../Images/info.png";
import methodimg from "../../Images/method.png";
import cartimg from "../../Images/cart.png";
import i1 from "../../Images/Card1.jpg";
import i2 from "../../Images/Card2.jpeg";
import i3 from "../../Images/Card3.jpeg";

function NavCards() {
  return (
    <div>
      <div className="middle-cards">
        <div className="middle-cards-back">
          <div className="card-1">
            <img src={infoimg} className="card-1-icon" alt="" />
            <p className="card-1-text">પાકની માહિતી</p>
            <Link to="/information">
              <button className="card-1-button">વધુ વાંચો →</button>
              <div className="card-border" />
            </Link>
            <div className="middle-cards-overlay1" />
            <img src={i1} className="middle-cards-img" alt="" />
          </div>
          <div className="card-2">
            <img src={methodimg} className="card-1-icon" alt="" />
            <p className="card-1-text">પાકની પદ્ધતિ</p>
            <Link to="/practices">
              <button className="card-2-button">વધુ વાંચો →</button>
              <div className="card-border" />
            </Link>
            <div className="middle-cards-overlay2" />
            <img src={i2} className="middle-cards-img" alt="" />
          </div>
          <div className="card-3">
            <img src={cartimg} className="card-1-icon" alt="" />
            <p className="card-1-text">ખરીદો</p>
            <Link to="/purchase">
              <button className="card-3-button">વધુ વાંચો →</button>
              <div className="card-border" />
            </Link>
            <div className="middle-cards-overlay3" />
            <img src={i3} className="middle-cards-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCards;
