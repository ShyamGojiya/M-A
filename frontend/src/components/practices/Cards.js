import { Link } from "react-router-dom";
import imgISB from "../../Images/img.jpg";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPakPadhati } from "../../features/PakPadhati/pakPadhatiSlice";

const Cards = () => {
  const dispatch = useDispatch();
  const pakState = useSelector((state) => state.pakPadhati?.pakPadhati?.data);
  // console.log(pakState);

  useEffect(() => {
    dispatch(allPakPadhati());
  }, []);

  return (
    <>
      <div className=" my-5">
        <div className="flex gap-3 flex-wrap justify-center">
          {pakState?.map((value, index) => {
            return (
              <div
                key={"card" + index}
                className="flex flex-col justify-between p-2 w-60 bg-white rounded-2xl transition ease-in-out delay-150 hover:scale-105 hover:shadow-el"
              >
                <div>
                  <img
                    src={value.thumbnail || imgISB}
                    className="w-60 h-60 rounded-xl "
                    alt=""
                  />
                </div>

                <span className="w-full text-center font-bold py-6 text-lg">
                  {value.plantName}
                </span>
                <Link to={`/practices/${value._id}`} className="w-full">
                  <button className="w-full rounded-full bg-br hover:bg-hbr text-white font-semibold py-1.5">
                    વધુ વાંચો &#8594;
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
