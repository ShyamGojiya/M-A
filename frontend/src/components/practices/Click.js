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
              width: 1000px;
              height: 110px;
              border-radius : 50px 0 50px 0;
              background: ${randomColor};
              background-size: 400% 400%;
              animation: slideIn 3s infinite;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
              
          }
        @keyframes slideIn {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            25% {
                transform: translateX(0);
                opacity: 1;
            }
            50% {
                transform: translateX(0);
                opacity: 1;
            }
            75% {
                transform: translateX(0);
                opacity: 1;
            }
            100% {
                transform: translateX(100%);
                opacity: 0;
            }
        }
`}
      </style>

      <div>
        <div
          className={`flex w-4/5 mx-auto rounded-[3vw] my-4 h-[20vh] justify-center align-middle gradient-container`}
          style={{background:randomColor}}
        >
          <h1 className="my-auto text-7xl max-sm:text-5xl text-white font-bold">
            {singlePadhati?.plantName}
          </h1>
        </div>

        <section className="my-2">
          <button
            className="button m-1"
            onClick={() => toggleVisibility("textAll")}
          >
            બધી વિગતો વાંચો
          </button>
          {singlePadhati?.details.map((value, index) => {
            return (
              index !== 0 && (
                <button
                  key={`button${index}`}
                  className="button m-1"
                  onClick={() => toggleVisibility(`text${index}`)}
                >
                  {value.title}
                </button>
              )
            );
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
                  {index === 0 && (
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
                            <>
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
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Click;
