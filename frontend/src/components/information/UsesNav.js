import React from "react";
import "../home/NavCards.css";
import { Link, useNavigate } from "react-router-dom";

//Images
import humanicon from "../../Images/human_icon.png";
import animalicon from "../../Images/animal_icon.png";
import farmicon from "../../Images/farming_icon.png";
import i1 from "../../Images/human.jpg";
import i2 from "../../Images/pashu.jpg";
import i3 from "../../Images/kheti.jpg";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function UsesNav(props) {
  // navigate
  const navigate = useNavigate();
  
  return (
    <div>
      
      <div className="middle-cards">
        {/* Back Button */}
      <button
          className="flex flex-row gap-2 items-center text-br hover:text-green-600 font-semibold cursor-pointer max-sm:text-sm"
          onClick={() => navigate(-1)}
        >
          <MdOutlineKeyboardBackspace /> પાછા જાવ
        </button>
        {props.uses.uses[0] && (
          <div className="card-1">
            <img src={humanicon} className="card-1-icon" alt="" />
            <p className="card-1-text">માણસમાં ઉપયોગ</p>
            <Link to={props.uses.uses[0].title.trim()}>
              <button className="card-1-button">વધુ વાંચો →</button>
              <div className="card-border" />
            </Link>
            <div className="middle-cards-overlay1" />
            <img src={i1} className="middle-cards-img" alt="" />
          </div>
        )}
        {props.uses.uses[1] && (
          <div className="card-2">
            <img src={animalicon} className="card-1-icon" alt="" />
            <p className="card-1-text">પશુપાલનમાં ઉપયોગ</p>
            <Link to={props.uses.uses[1].title.trim()}>
              <button className="card-2-button">વધુ વાંચો →</button>
              <div className="card-border" />
            </Link>
            <div className="middle-cards-overlay2" />
            <img src={i2} className="middle-cards-img" alt="" />
          </div>
        )}
        {props.uses.uses[2] && (
          <div className="card-3">
            <img src={farmicon} className="card-1-icon" alt="" />
            <p className="card-1-text">ખેતીમાં ઉપયોગ</p>
            <Link to={props.uses.uses[2].title.trim()}>
              <button className="card-3-button">વધુ વાંચો →</button>
              <div className="card-border" />
            </Link>
            <div className="middle-cards-overlay3" />
            <img src={i3} className="middle-cards-img" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default UsesNav;
