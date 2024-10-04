import React from "react";
import "./Practices.css";
import { useNavigate } from "react-router-dom";

function Practices(props) {
  return (
    <div className="container-fluid">
      <div className="p-4">
        {props?.data?.image.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {props?.data?.image?.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={img.url}
                  alt={`image ${index}`}
                  className="w-full h-auto transition-transform duration-200 transform hover:scale-105"
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
          className="content bg-slate-300 font-semibold"
        >
          <div className="contentnew bg-slate-400 mt-0 rounded-full mb-3 mr-70  flex items-center justify-center">
            <h2>
              <b className="text-lg font-extrabold">{value.title}</b>
            </h2>
          </div>
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
            <div className="flex gap-4 max-sm:flex-col">
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
  );
}

export default Practices;
