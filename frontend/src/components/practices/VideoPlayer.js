import React, { useEffect } from "react";
import { BiSolidLeaf } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function VideoPlayer(props) {
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* Title */}
      <div className="sm:m-10">
        {/* Back Button */}
        <button
          className="flex flex-row gap-2 items-center text-br hover:text-green-600 font-semibold cursor-pointer max-sm:text-sm"
          onClick={() => navigate(-1)}
        >
          <MdOutlineKeyboardBackspace /> પાછા જાવ
        </button>
        <h1 className="flex w-full items-center justify-center mt-4 text-4xl font-semibold text-br">
          {props.title[0]}
        </h1>
        <h2 className="flex w-full items-center justify-center text-xl font-semibold">
          {props.title[1]}
        </h2>
      </div>

      {/* Video */}
      <div className="min-h-[50vh] flex items-center justify-center sm:mx-24 sm:px-24 max-sm:px-2">
        {props.video ? (
          <video controls>
            <source src={props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="flex flex-col gap-2 items-center justify-center">
            <BiSolidLeaf className="text-8xl text-green-800" />
            <span className="font-semibold text-br">
              અરે..., અહીં કોઈ સંબંધિત વિડિઓઝ નથી.!!
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default VideoPlayer;
