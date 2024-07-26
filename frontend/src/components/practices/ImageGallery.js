import React, { useEffect } from "react";
import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.min.css";
import "./ImageGallery.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ImageGallery(props) {
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    baguetteBox.run(".tz-gallery");
  }, []);

  return (
    <div>
      <div className="container gallery-container">
        {/* Back Button */}
        <button
          className="flex flex-row gap-2 items-center text-br hover:text-green-600 font-semibold cursor-pointer max-sm:text-sm"
          onClick={() => navigate(-1)}
        >
          <MdOutlineKeyboardBackspace /> પાછા જાવ
        </button>
        {/* Title */}
        <div className="sm:m-10">
          <h1 className="flex w-full items-center justify-center mt-4 text-4xl font-semibold text-br">
            {props.crop.trim()}
          </h1>
          <h2 className="flex w-full items-center justify-center text-xl font-semibold">
            {props.details.title}
          </h2>
        </div>
        <div className="tz-gallery">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <a
                className=" "
                href="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313524/MAAPP/igxt3kuflyhj0qky6vta.jpg"
              >
                <img
                  src="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313524/MAAPP/igxt3kuflyhj0qky6vta.jpg"
                  alt="Bridge"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className=" "
                href="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313520/MAAPP/sowvpuuc5muctocyyvko.jpg"
              >
                <img
                  src="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313520/MAAPP/sowvpuuc5muctocyyvko.jpg"
                  alt="Park"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className=" "
                href="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313515/MAAPP/vg8haazccdly9gkhjmwr.jpg"
              >
                <img
                  src="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313515/MAAPP/vg8haazccdly9gkhjmwr.jpg"
                  alt="Tunnel"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className=" "
                href="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313506/MAAPP/cz7baqnqxgpjhonuhcmy.jpg"
              >
                <img
                  src="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313506/MAAPP/cz7baqnqxgpjhonuhcmy.jpg"
                  alt="Tunnel"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className=" "
                href="https://agriculturepost.com/wp-content/uploads/2020/07/NMPB-and-ICAR-NBPGR-sign-MoU-to-conserve-medicinal-and-aromatic-plants-genetic-resources.jpg"
              >
                <img
                  src="https://agriculturepost.com/wp-content/uploads/2020/07/NMPB-and-ICAR-NBPGR-sign-MoU-to-conserve-medicinal-and-aromatic-plants-genetic-resources.jpg"
                  alt="Tunnel"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a
                className=" "
                href="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313721/MAAPP/w3co1r02ooj6tjjxycgt.jpg"
              >
                <img
                  src="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313721/MAAPP/w3co1r02ooj6tjjxycgt.jpg"
                  alt="Tunnel"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
