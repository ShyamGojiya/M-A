import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singlePakPadhati } from "../../features/PakPadhati/pakPadhatiSlice";
import Practices from "./Practices.js";

function Click() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(singlePakPadhati(id));
  }, [id]);

  const singlePadhati = useSelector(
    (state) => state.pakPadhati?.singlePakPadhati?.data
  );

  const [visibleText, setVisibleText] = useState("textAll");

  const toggleVisibility = (textKey) => {
    setVisibleText(textKey);
  };

  // for random color generation
  const colors = [
    "#ef4444",
    "#d97706",
    "#d97706",
    "#65a30d",
    "#059669",
    "#0d9488",
    "#0891b2",
    "#0284c7",
    "#e11d48",
    "#db2777",
    "#c026d3",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  return (
    <>
      <div>
        <div
          className={`flex w-4/5 mx-auto rounded-[3vw] my-4 h-[20vh] justify-center align-middle`}
          style={{ backgroundColor: randomColor }}
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
