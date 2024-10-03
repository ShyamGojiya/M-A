import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singlePakPadhati } from "../../features/PakPadhati/pakPadhatiSlice";
import Practices from "./Practices.js";

function Click() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(singlePakPadhati(id));
  }, [id, dispatch]);

  const singlePadhati = useSelector(
    (state) => state.pakPadhati?.singlePakPadhati?.data
  );
  console.log(singlePadhati);
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

      <div>
        <div
          className="gradient-container rounded-[3vw] my-4 flex items-center justify-center"
          style={{ background: randomColor }}
        >
          <h1 className="text-3xl sm:text-3xl xs:text-2xl text-white font-bold sizeof">
            {singlePadhati?.plantName}
          </h1>
        </div>

        <section className="my-2 text-center">
          <button
            className="button m-1 px-4 py-2 text-lg sm:text-base xs:text-sm"
            onClick={() => toggleVisibility("textAll")}
          >
            બધી વિગતો વાંચો
          </button>
          {singlePadhati?.details.map((value, index) => {
            return (
              // index !== 0 && (
              <button
                key={`button${index}`}
                className="button m-1 px-4 py-2 text-lg sm:text-base xs:text-sm"
                onClick={() => toggleVisibility(`text${index}`)}
              >
                {value.title}
              </button>
            );
            // );
          })}
        </section>

        {visibleText === "textAll" && (
          <Practices data={singlePadhati?.details} />
        )}

        <div className="container-fluid">
          {singlePadhati?.details.map(
            (value, index) =>
              visibleText === `text${index}` && (
                <div key={index} id={`content${index}`} className="content">
                  <h2>
                    <b>{value.title}</b>
                  </h2>
                  {value.title === "નામ અને પર્યાય" && (
                    <ul>
                      <li>ગુજરાતી : {value.names.guj}</li>
                      <li>હિન્દી: {value.names.hind}</li>
                      <li>સંસ્કૃત: {value.names.sanskrit}</li>
                      <li>અંગ્રેજી: {value.names.eng}</li>
                      <li>લેટીન :{value.names.lat} </li>
                      <li>કુળ : {value.names.kul}</li>
                    </ul>
                  )}
                  {Array.isArray(value.desc) ? (
                    <div className="row">
                      {value.desc.map((val, subIndex) => (
                        <div key={subIndex} className="col col-6">
                          <h3>
                            <b>{val.title}</b>
                          </h3>
                          {Array.isArray(val.desc) ? (
                            <ul>
                              {val.desc.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="text text-justify"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text text-justify">{val.desc}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text text-justify">{value.desc}</p>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Click;
