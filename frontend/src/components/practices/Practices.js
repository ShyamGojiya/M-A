import React from "react";
import "./Practices.css";
import { useNavigate } from "react-router-dom";

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

function Practices(props) {
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

      <div className="container-fluid">
        <div className="p-4">
          {props?.data?.image.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {props?.data?.image?.map((img, index) => (
                <div
                  key={index}
                  className="w-200 h-200"
                >
                  <img
                    src={img.url}
                    alt={`image ${index}`}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-200 transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {props?.data?.details?.map((value, index) => (
          <div
            key={index}
            id={`content${index}`}
            className="content p-2 bg-slate-300 font-semibold"
          >
            <button style={{ background: props.clr }} className="contentnew text-white rounded-full p-1 text-md font-semibold">
              {value.title}

            </button>
            <hr className="text-red-600 mb-1 mt-1"></hr>
            {value.title === "નામ અને પર્યાય" && (
              <ul className="mb-2">
                {value.names.guj && (
                  <li>
                    <span className="font-black">ગુજરાતી: </span>
                    {value.names.guj}
                  </li>
                )}
                {value.names.hind && (
                  <li>
                    <span className="font-black">હિન્દી: </span>
                    {value.names.hind}
                  </li>
                )}
                {value.names.sanskrit && (
                  <li>
                    <span className="font-black">સંસ્કૃત: </span>{" "}
                    {value.names.sanskrit}
                  </li>
                )}
                {value.names.eng && (
                  <li>
                    <span className="font-black">અંગ્રેજી: </span>{" "}
                    {value.names.eng}
                  </li>
                )}
                {value.names.lat && (
                  <li>
                    <span className="font-black">લેટીન: </span> {value.names.lat}
                  </li>
                )}
                {value.names.kul && (
                  <li>
                    <span className="font-black">કુળ: </span> {value.names.kul}
                  </li>
                )}
              </ul>
            )}
            {Array.isArray(value.desc) ? (
              <div className="flex gap-4  max-sm:flex-col">
                {value.desc.map((val, subIndex) => (
                  <div key={subIndex} className="sm:w-1/2 max-sm:w-full">
                    <h3 className="">{/* <b>{val.title}</b> */}</h3>
                    {Array.isArray(val.desc) ? (
                      <>
                        <ul>
                          {val.desc.map((item, itemIndex) => (
                            <li key={itemIndex} className="text text-justify">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <p className="text text-justify">{val.desc}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p className="text text-justify">{value.desc}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Practices;
