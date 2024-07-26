import React from "react";
import "./Practices.css";
import { FaImages } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Practices(props) {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      {props.data.details.map((value, index) => (
        <div key={index} id={`content${index}`} className="content">
          <h2>
            <b className="text-lg font-extrabold">{value.title}</b>
          </h2>
          {index === 0 && (
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
            <div className="flex gap-4 max-sm:flex-col">
              {value.desc.map((val, subIndex) => (
                <div key={subIndex} className="sm:w-1/2 max-sm:w-full">
                  <h3>
                    <b>{val.title}</b>
                  </h3>
                  {Array.isArray(val.desc) ? (
                    <>
                      <ul>
                        {val.desc.map((item, itemIndex) => (
                          <li key={itemIndex} className="text text-justify">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex mt-3 gap-2">
                        <button
                          onClick={() =>
                            navigate(
                              "/" +
                                props.data.plantName +
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

                        <button
                          onClick={() =>
                            navigate(
                              "/" +
                                props.data.plantName +
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
                                props.data.plantName +
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
                                props.data.plantName +
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
                <button
                  onClick={() =>
                    navigate(
                      "/" + props.data.plantName + "/" + value.title + "/છબીઓ"
                    )
                  }
                  className="bg-br flex gap-2.5 items-center justify-center rounded-full sm:px-1.5 sm:py-1 max-sm:px-1 max-sm:py-0.5 max-sm:text-sm font-semibold text-white hover:bg-hbr "
                >
                  <FaImages className="text-4xl max-sm:text-3xl p-1 rounded-full border border-white" />
                  છબીઓ
                  <TbPlayerTrackNextFilled />
                </button>

                <button
                  onClick={() =>
                    navigate(
                      "/" + props.data.plantName + "/" + value.title + "/વિડિઓ"
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
  );
}

export default Practices;
