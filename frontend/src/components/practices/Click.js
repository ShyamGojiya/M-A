import React, { useState } from "react";

import Practices from "./Practices";

import { FaImages } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoVideocam } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Click(props) {
  const navigate = useNavigate();

  const [visibleText, setVisibleText] = useState("textAll");

  const toggleVisibility = (textKey) => {
    setVisibleText(textKey);
  };

  // for randome color generation
  const colors = ['#ef4444', '#d97706', '#d97706', '#65a30d', '#059669', '#0d9488', '#0891b2', '#0284c7', '#e11d48', '#db2777', '#c026d3'];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  return (
    <>
      <div>
        {/* <img src={props.img} className="w-full h-[50vh]" alt="SND" /> */}
        <div className={`flex w-4/5 mx-auto rounded-[3vw] my-4 h-[20vh] justify-center align-middle`} style={{backgroundColor:randomColor}}>
          <h1 className="my-auto text-7xl max-sm:text-5xl text-white font-bold">{props.details.plantName}</h1>
        </div>

        <section className="my-2">
          <button
            className="button m-1"
            onClick={() => toggleVisibility("textAll")}
          >
            બધી વિગતો વાંચો
          </button>
          {props.details.details.map((value, index) => {
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

        {visibleText === "textAll" && <Practices data={props.details} />}

        <div className="container-fluid">
          {props.details.details.map(
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

                              <div className="flex mt-3 gap-2">
                                {/* Images Button */}
                        <button
                          onClick={() =>
                            navigate(
                              "/" +
                                props.details.plantName +
                                "/" +
                                value.title +
                                "/છબીઓ"
                            )
                          }
                          className="bg-br flex gap-2.5 items-center justify-center rounded-full sm:px-1.5 sm:py-1 max-sm:px-1 max-sm:py-0.5 max-sm:text-sm font-semibold text-white hover:bg-hbr "
                        >
                          <FaImages className="text-4xl max-sm:text-3xl p-1 rounded-full border border-white" />
                          છબીઓ
                          <TbPlayerTrackNextFilled />
                        </button>

                          {/* Video Butto */}
                        <button
                          onClick={() =>
                            navigate(
                              "/" +
                                props.details.plantName +
                                "/" +
                                value.title +
                                "/વિડિઓ"
                            )
                          }
                          className="bg-br flex gap-2.5 items-center justify-center rounded-full sm:px-1.5 sm:py-1 max-sm:px-1 max-sm:py-0.5 max-sm:text-sm font-semibold text-white hover:bg-hbr "
                        >
                          <IoVideocam className="text-4xl max-sm:text-3xl p-1 rounded-full border border-white" />
                          વિડિઓ
                          <TbPlayerTrackNextFilled />
                        </button>
                              </div>
                            </>
                          ) : (
                            <>
                              <p className="text text-justify">{val.desc}</p>
                              <div className="flex mt-3 gap-2">
                                {/* Images Button */}
                        <button
                          onClick={() =>
                            navigate(
                              "/" +
                                props.details.plantName +
                                "/" +
                                value.title +
                                "/છબીઓ"
                            )
                          }
                          className="bg-br flex gap-2.5 items-center justify-center rounded-full sm:px-1.5 sm:py-1 max-sm:px-1 max-sm:py-0.5 max-sm:text-sm font-semibold text-white hover:bg-hbr "
                        >
                          <FaImages className="text-4xl max-sm:text-3xl p-1 rounded-full border border-white" />
                          છબીઓ
                          <TbPlayerTrackNextFilled />
                        </button>

                          {/* Video Butto */}
                        <button
                          onClick={() =>
                            navigate(
                              "/" +
                                props.details.plantName +
                                "/" +
                                value.title +
                                "/વિડિઓ"
                            )
                          }
                          className="bg-br flex gap-2.5 items-center justify-center rounded-full sm:px-1.5 sm:py-1 max-sm:px-1 max-sm:py-0.5 max-sm:text-sm font-semibold text-white hover:bg-hbr "
                        >
                          <IoVideocam className="text-4xl max-sm:text-3xl p-1 rounded-full border border-white" />
                          વિડિઓ
                          <TbPlayerTrackNextFilled />
                        </button>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text text-justify">{value.desc}</p>
                      <div className="flex mt-3 gap-2">
                        {/* Images Button */}
                        <button
                          onClick={() =>
                            navigate(
                              "/" +
                                props.details.plantName +
                                "/" +
                                value.title +
                                "/છબીઓ"
                            )
                          }
                          className="bg-br flex gap-2.5 items-center justify-center rounded-full sm:px-1.5 sm:py-1 max-sm:px-1 max-sm:py-0.5 max-sm:text-sm font-semibold text-white hover:bg-hbr"
                        >
                          <FaImages className="text-4xl max-sm:text-3xl p-1 rounded-full border border-white" />
                          છબીઓ
                          <TbPlayerTrackNextFilled />
                        </button>

                          {/* Video Butto */}
                        <button
                          onClick={() =>
                            navigate(
                              "/" +
                                props.details.plantName +
                                "/" +
                                value.title +
                                "/વિડિઓ"
                            )
                          }
                          className="bg-br flex gap-2.5 items-center justify-center rounded-full sm:px-1.5 sm:py-1 max-sm:px-1 max-sm:py-0.5 max-sm:text-sm font-semibold text-white hover:bg-hbr "
                        >
                          <IoVideocam className="text-4xl max-sm:text-3xl p-1 rounded-full border border-white" />
                          વિડિઓ
                          <TbPlayerTrackNextFilled />
                        </button>
                      </div>
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
