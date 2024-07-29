import React from "react";
import "./Practices.css";
import { useNavigate } from "react-router-dom";

function Practices(props) {
  return (
    <div className="container-fluid">
      {props?.data?.map((value, index) => (
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
  );
}

export default Practices;
