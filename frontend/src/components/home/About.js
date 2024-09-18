import React, { useState } from "react";
import img1 from "../../Images/b1.png";
import img2 from "../../Images/b2.png";
import img3 from "../../Images/b3.png";
import img4 from "../../Images/b4.png";
import "./About.css";
import natural from "../../Images/natural.png";
import env from "../../Images/env.png";
import production_img from "../../Images/production_img.png";
import service from "../../Images/service.png";
import environment from "../../Images/method.png";

function About() {
  // State to keep track of which accordion item is open
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle accordion toggle
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <div className="accordion">
  {[
    {
      img : img1,
      title: "ઔષધીય અને સુગંધિત છોડની માહિતી",
      content: "ઔષધીય અને સુગંધિત છોડ વનસ્પતિઓ સ્વાસ્થ્ય અને ઉદ્યોગમાં મહત્વપૂર્ણ છે, તેમનું ઉપયોગ ચિકિત્સા, ખુશબુ, આણો અને વધુનો મળે છે.ઔષધીય અને સુગંધિત છોડ વનસ્પતિઓ સ્વાસ્થ્ય અને ઉદ્યોગમાં મહત્વપૂર્ણ છે, તેમનું ઉપયોગ ચિકિત્સા, ખુશબુ, આણો અને વધુનો મળે છે.ઔષધીય અને સુગંધિત છોડ વનસ્પતિઓ સ્વાસ્થ્ય અને ઉદ્યોગમાં મહત્વપૂર્ણ છે, તેમનું ઉપયોગ ચિકિત્સા, ખુશબુ, આણો અને વધુનો મળે છે."
    },
    {
      img : img2,
      title: "ઔષધીય અને સુગંધિત છોડના ઉપયોગ",
      content: "ઔષધીય અને સુગંધિત છોડના ઉપયોગમાં રોગ નિવારણ, આરોગ્ય સુધારણ, ખુશબુ અને ઉદ્યોગમાં મહત્વપૂર્ણ છે.ઔષધીય અને સુગંધિત છોડ વનસ્પતિઓ સ્વાસ્થ્ય અને ઉદ્યોગમાં મહત્વપૂર્ણ છે, તેમનું ઉપયોગ ચિકિત્સા, ખુશબુ, આણો અને વધુનો મળે છે.ઔષધીય અને સુગંધિત છોડ વનસ્પતિઓ સ્વાસ્થ્ય અને ઉદ્યોગમાં મહત્વપૂર્ણ છે, તેમનું ઉપયોગ ચિકિત્સા, ખુશબુ, આણો અને વધુનો મળે છે."
    },
    {
      img : img3,
      title: "અમારી પ્રોડક્ટો",
      content: "ઔષધીય અને સુગંધિત છોડ અમારી વિશેષ ઉત્પાદનોમાં વપરાશાત્મક છે. ઔષધીય અને સુગંધિત છોડ અમારી વિશેષ ઉત્પાદનોમાં વપરાશાત્મક છે.ઔષધીય અને સુગંધિત છોડ વનસ્પતિઓ સ્વાસ્થ્ય અને ઉદ્યોગમાં મહત્વપૂર્ણ છે, તેમનું ઉપયોગ ચિકિત્સા, ખુશબુ, આણો અને વધુનો મળે છે.ઔષધીય અને સુગંધિત છોડ વનસ્પતિઓ સ્વાસ્થ્ય અને ઉદ્યોગમાં મહત્વપૂર્ણ છે, તેમનું ઉપયોગ ચિકિત્સા, ખુશબુ, આણો અને વધુનો મળે છે."
    }
  ].map((item, index) => (
    <div key={index} className="accordion-item">
      <div
        className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
        onClick={() => toggleAccordion(index)}
      >
        
        <img src={item.img} height={35} width={35}></img>

        <h3>{item.title}</h3>
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
        <p>{item.content}</p>
      </div>
    </div>
  ))}
</div>

      <div className="card-container">
        <div className="card">
          <img src={env} alt="Environment" className="h-50 w-100" />
          <h3>ગુણવત્તા ધરાવતા ઉત્પાદનો</h3>
          <p>
            ઔષધીય અને સુગંધિત છોડનો ઉત્પાદન ગુણવત્તાને પૂર્ણતાથી
            ધરાવવાનો કામ કરે છે, જે આપની મંજૂરિ અને આનંદ આપે છે.
          </p>
        </div>

        <div className="card">
          <img src={service} alt="Service" className="h-40 w-80 ml-12" />
          <h3>પરફેક્ટ સર્વિસ</h3>
          <p>
            પરિપૂર્ણ સેવા અપેક્ષાઓને પાર કરે છે, સતત, યથાર્થતા અને
            સંતોષ પ્રદાન કરે છે, દિગ્દર્શક, શીઘ્ર અને વ્યક્તિગત દેખભાલ
            દ્વારા.
          </p>
        </div>

        <div className="card">
          <img src={natural} alt="Natural" className="h-35 w-90 ml-12 mt-3" />
          <h3>100% કુદરતી</h3>
          <p>
            100% કુદરતી અને શ્રેષ્ઠ રૂપમાં સ્વાગત થવાનું અને આનંદ
            મળવાનું એ નમ્ર અને અદ્વિતીય અનુભવ છે.
          </p>
        </div>

        <div className="card">
          <img src={environment} alt="Environment-Friendly" className="h-40 w-90 ml-12" />
          <h3>પર્યાવરણને અનુકૂળ</h3>
          <p>
            પર્યાવરણને અનુકૂળ બનાવવાનો ઉદ્દેશ્ય, સંતોષકર સંરક્ષણ,
            પુનર્ચક્રિયા અને સામુદાયિક સંયોજનનું પ્રશંસનીય સાધન છે.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
