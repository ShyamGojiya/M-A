import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgISB from "../../Images/img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { allPakMahiti } from "../../features/PakMahiti/pakMahitiSlice";

const UsesCards = () => {
  const dispatch = useDispatch();
  const pakMahiti = useSelector((state) => state.pakMahiti?.pakMahiti?.data);

  useEffect(() => {
    // for on load scroll to top
    window.scrollTo({
      top: 0,
    });

    dispatch(allPakMahiti());
  }, []);

  return (
    <>
      <div className=" my-5">
        <div className="flex gap-3 flex-wrap justify-center">
          {pakMahiti?.map((value, index) => {
            return (
              <div
                key={"card" + index}
                className="flex flex-col justify-between p-2 w-60 bg-white rounded-2xl transition ease-in-out delay-150 hover:scale-105 hover:shadow-el"
              >
                <div>
                  <img
                    src={
                      typeof value.thumbnail === "string"
                        ? value.thumbnail
                        : value.thumbnail.url
                    }
                    className="w-60 h-60 rounded-xl"
                    alt=""
                  />
                </div>
                <span className="w-full text-center font-bold py-6 text-lg">
                  {value.plantName.length > 20
                    ? value.plantName.slice(0, 20) + "..."
                    : value.plantName}
                </span>
                <Link to={`/information/${value._id}`} className="w-full">
                  <button className="w-full rounded-full bg-br hover:bg-hbr text-white font-semibold py-1.5">
                    ઉપયોગ વાંચો &#8594;
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

export default UsesCards;
