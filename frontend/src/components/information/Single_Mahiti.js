import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singlePakMahiti } from "../../features/PakMahiti/pakMahitiSlice.js";
import UseDetails from "./UseDetails.js";
// import Practices from "./Practices.js";

function Single_Mahiti() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(singlePakMahiti(id));
  }, [id, dispatch]);

  const PakMahiti = useSelector(
    (state) => state.pakMahiti?.singlePakMahiti?.data
  );

  const [visibleText, setVisibleText] = useState("textAll");

  const toggleVisibility = (textKey) => {
    setVisibleText(textKey);
  };

  // For random color generation
  const colors = [
    "linear-gradient(to right, #fd6585, #ffd3a5)",
    "linear-gradient(to right, #0F3443 , #34E89E)",
    "linear-gradient(to right, #12C2E9 , #F64F59)",
    "linear-gradient(to right, #FCCF31 , #F55555)",
    "linear-gradient(to right, #333399 , #FF00CC)",
    "linear-gradient(to right, #7BC393, #31B7C2 )",
    "linear-gradient(to right, #006663 , #111111)",
    "linear-gradient(to right, #9e1f63 , #392d91)",
    "linear-gradient(to right, #0694c6, #d2ffff )",
    "linear-gradient(to right, #fd6585, #ffd3a5)",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  return (
    <>
      <style>
        {`
          .gradient-container {
            width: 100%;
            max-width: 1000px;
            height: 110px;
            border-radius: 50px 0 50px 0;
            background: ${randomColor};
            background-size: 400% 400%;
            animation: slideIn 3s ease-out;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .sizeof{
            color : red;
            font-size:40px;
          }
          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @media (max-width: 768px) {
            .gradient-container {
              width: 90%;
              height: 80px;
              border-radius: 50px 0 50px 0;
              background-size: 200% 200%;
              padding: 10px; /* Adjust padding for mobile */
            }

            h1 {
              font-size: 2rem; /* Adjust font size for mobile */
              text-align: center;
            }

            .button {
              font-size: 1rem; /* Adjust button text size */
              padding: 10px 20px; /* Adjust button padding */
            }

            .text-lg {
              font-size: 1.25rem;
            }

            .text-base {
              font-size: 1rem;
            }

            .text-sm {
              font-size: 0.875rem;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.5rem; /* Further reduce font size for very small screens */
            }

            .button {
              font-size: 0.875rem; /* Further adjust button text size */
              padding: 8px 16px; /* Further adjust button padding */
            }
          }
        `}
      </style>
{/* 
          <div>
            <UseDetails/>
          </div> */}
      <div>
        <div
          className="gradient-container rounded-[3vw] my-4 flex items-center justify-center"
          style={{ background: randomColor }}
        >
          <h1 className="text-3xl sm:text-3xl xs:text-2xl text-white font-bold sizeof">
            {PakMahiti?.plantName}ના ઉપયોગ
          </h1>
        </div>

        <section className="my-2 text-center">
          {/* <button
            className="button m-1 px-4 py-2 text-lg sm:text-base xs:text-sm"
            onClick={() => toggleVisibility("textAll")}
          >
            બધી વિગતો વાંચો
          </button> */}
          {/* {PakMahiti?.uses.map((value, index) => {
            return (
              <button
                key={`button${index}`}
                className="button m-1 px-4 py-2 text-lg sm:text-base xs:text-sm"
                onClick={() => toggleVisibility(`text${index}`)}
              >
                {value.title}
              </button>
            );
          })} */}
        </section>

        {/* {visibleText === "textAll" && (
          <Practices data={singlePadhati?.details} />
        )} */}

        <div className="container-fluid">
          {PakMahiti?.uses.map((value, index) => (
            <div key={index} id={`content${index}`}  className="content bg-slate-300 p-2  border-3 border-sky-600">
              <h2 className="mb-2">
                <button style={{ background: randomColor }} className="bg-red-600 text-white rounded-full p-2 text-md font-semibold">{value.title}</button>
                <hr className="text-red-600"/>
                <br/>
              </h2>
              <p className="text text-justify font-semibold">{value.uses}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Single_Mahiti;
