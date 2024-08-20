import React from "react";
// import { Link } from "react-router-dom";
// import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdMail } from "react-icons/md";
function Footer() {
  return (
    <>
    <style>
      {
        `
        /* Define the keyframes for rotation */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Apply the animation to the image */
.rotate-animation {
  animation: rotate 2s linear infinite;
}

        `
      }
    </style>
      <footer className=" self-end w-full flex mt-4 bg-[#4a4a4a] justify-around rounded-tr-3xl rounded-tl-3xl sm:p-8 max-sm:flex-col max-sm:gap-6 max-sm:p-2">
        {/* Logo, title and Links */}
        <div className="flex flex-col gap-3 justify-start">
        <span>
  <img
    src="https://res.cloudinary.com/dcxdcs6l4/image/upload/v1689830261/College/LOGO_b8mklr.png"
    className="max-sm:w-12 sm:w-24 rotate-animation"
    alt="logo"
  />
</span>

          <h3 className="text-3xl font-semibold text-[#009372] font-sans max-sm:text-xl">
            Medicinal<span className="text-slate-200 font-sans"> and </span>Aromatic
            Plants
          </h3>
          <ul className="flex gap-2 text-slate-200 flex-wrap max-sm:text-sm ">
            <li className="m-0 p-0">હોમ</li>
            <li className="m-0 p-0">|</li>
            <li className="m-0 p-0">માહિતી</li>
            <li className="m-0 p-0">|</li>
            <li className="m-0 p-0">પાકની પદ્ધતિઓ</li>
            <li className="m-0 p-0">|</li>
            <li className="m-0 p-0">ખરીદો</li>
            <li className="m-0 p-0">|</li>
            <li className="m-0 p-0">મૂંઝવતા પ્રશ્નો</li>
            <li className="m-0 p-0">|</li>
            <li className="m-0 p-0">અમારો સંપર્ક</li>
            <li className="m-0 p-0">|</li>
            <li className="m-0 p-0">અમારા વિશે</li>
          </ul>

          <span className="text-[#009372]">Medicinal and Aromatic Plants Portal @2023</span>
        </div>

        {/* contact */}
        <div className="flex flex-col gap-2 justify-start items-start max-sm:text-sm pl-4">
          <div className="flex flex-row items-center gap-2">
            <span className="p-2 bg-hbr rounded-full text-xl text-slate-200">
              <FaLocationDot />
            </span>
            <span className="text-lg text-slate-200 max-sm:text-sm">
              ઔષધીય અને સુગંધિત છોડ સંશોધન કેન્દ્ર, AAU, આણંદ - 388110
            </span>
          </div>

          <div className="flex flex-row items-center gap-2">
            <span className="p-2 bg-hbr rounded-full text-xl text-slate-200">
              <MdCall />
            </span>
            <span className="text-lg text-slate-200 max-sm:text-sm">
              (+91) 77777777777
            </span>
          </div>

          <div className="flex flex-row items-center gap-2">
            <span className="p-2 bg-hbr rounded-full text-xl text-slate-200">
              <MdMail />
            </span>
            <span className="text-lg text-slate-200 max-sm:text-sm">
              info@map.com
            </span>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-2 justify-start items-start max-w-lg pl-4">
          <h1 className="text-2xl font-semibold text-white">અમારા વિશે </h1>
          <p className="text-lg text-slate-200 text-justify max-sm:text-sm">
            ઔષધી અને સુગંધિત વનસ્પતિઓ પરંપરાગત અને આધુનિક ચિકિત્સામાં મહત્વપૂર્ણ
            છે, જે પ્રાકૃતિક ઉપચારો અને સુગંધમાંની આપત્તિઓને દૂર કરવામાં આવે છે.
            આવી વનસ્પતિઓ વિવિધ રોગોને મોકલવામાં આવે છે અને શાંતિને સુધારે છે. આ
            વનસ્પતિઓ ઔષધીપદાર્થો, કોઝમેટિક્સ, અને રસોઇના ઉપયોગમાં યોગદાન આપે છે,
            આહેવામાં તેમનો આદરણીય મહત્વ છે.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
