import React from "react";
import imgKheti from "../../Images/kheti.jpg";
import thumbnail from "../../Images/usesmap.jpg";
import imgHuman from"../../Images/human.jpg";
import imgAnimal from"../../Images/pashu.jpg";
import './UseDetails.css';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UseDetails = (props) => {
  // navigate
  const navigate = useNavigate();
  return (
    <>
    {/* Back Button */}
    <button
          className="flex flex-row gap-2 items-center my-2 justify-end text-br hover:text-green-600 font-semibold cursor-pointer max-sm:text-sm"
          onClick={() => navigate(-1)}
        >
          <MdOutlineKeyboardBackspace /> પાછા જાવ
        </button>
      <div className="use_cont">
        
        <div className="use_img">
            <div className="use_img_2">
            <div className="use_img_r1">
                <div className="use_img_r1_text">
                <p>{props.uses.plantName.trim()}</p>
                </div>
                <div className="use_img_r1_overlay1"></div>
                <img src={thumbnail} className="use_img_1" alt="" />
            </div>
            
            <div className="use_img_r2">
                <div className="use_img_r2_text">
                <p >{props.usesIn.trim()}માં ઉપયોગ</p>
                </div>
                <div className="use_img_r2_overlay2"></div>
                {/* <img src={imgHuman} className="use_img_2" alt="" /> */}
                {props.usesIn.trim() === 'મનુષ્ય' && <img src={imgHuman} className="use_img_2" alt="" />}
                {props.usesIn.trim() === 'પશુપાલન' && <img src={imgAnimal} className="use_img_2" alt="" />}
                {props.usesIn.trim() === 'ખેતી' && <img src={imgKheti} className="use_img_2" alt="" />}
            </div>
        </div>
        </div>
       <div className="use_info">
        
            <div className="use_info_area box effect4">
                <p className="use_info_text1">{props.uses.plantName.trim()}નો ઉપયોગ : {props.usesIn.trim()}માં</p>
                {console.log(props.uses.uses.find(item => item.title === `${props.usesIn.trim()} માટે`).uses)}
                {!Array.isArray(props.uses.uses.find(item => item.title.trim() === `${props.usesIn.trim()} માટે`).uses) && <p className="use_info_text2"> {props.uses.uses.find(item => item.title.trim() === `${props.usesIn.trim()} માટે`).uses}</p>}
                {
                  Array.isArray(props.uses.uses.find(item => item.title.trim() === `${props.usesIn.trim()} માટે`).uses) && <div>
                    <ul className="mt-2">
                      {props.uses.uses.find(item => item.title.trim() === `${props.usesIn.trim()} માટે`).uses.map((item, index)=>{
                        if (index === 0) {
                          return <li key={'Uses List'+ index}>
                          <span>{item.uses}</span>
                        </li>
                        }
                        else{
                          return <li key={'Uses List'+ index}>
                          <span className="font-semibold text-lg">{index}{". "} {item.title}</span>
                          <p>{item.uses}</p>
                        </li>
                        }
                      })}
                    </ul>
                  </div>
                }
            </div>
       </div>
    </div>
    </>
  );
};

export default UseDetails;
