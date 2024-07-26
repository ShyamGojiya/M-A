import React from "react";
import img1 from "../../Images/b1.png";
import img2 from "../../Images/b2.png";
import img3 from "../../Images/b3.png";
import img4 from "../../Images/b4.png";

function About() {
  return (
    <>
      <section id="about" className="about-us-area section-padding-100-0">
        <div className="row justify-content-between  sm:mx-24 max-sm:mx-2">
          <div className="col-12 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading pb-2">
              <h2 className="md:text-4xl max-md:text-2xl font-extrabold text-br">અમારા વિશે</h2>
              <p className="font-semibold">
                અમે છોડ સેવા ક્ષેત્રોમાં અગ્રેસર છીએ.
              </p>
            </div>
            <p>
              ઔષધી અને સુગંધિત વનસ્પતિઓ પરંપરાગત અને આધુનિક ચિકિત્સામાં
              મહત્વપૂર્ણ છે, જે પ્રાકૃતિક ઉપચારો અને સુગંધમાંની આપત્તિઓને દૂર
              કરવામાં આવે છે. આવી વનસ્પતિઓ વિવિધ રોગોને મોકલવામાં આવે છે અને
              શાંતિને સુધારે છે. આ વનસ્પતિઓ ઔષધીપદાર્થો, કોઝમેટિક્સ, અને રસોઇના
              ઉપયોગમાં યોગદાન આપે છે, આહેવામાં તેમનો આદરણીય મહત્વ છે. ઔષધી અને
              સુગંધિત વનસ્પતિઓ પરંપરાગત અને આધુનિક ચિકિત્સામાં મહત્વપૂર્ણ છે, જે
              પ્રાકૃતિક ઉપચારો અને સુગંધમાંની આપત્તિઓને દૂર કરવામાં આવે છે. આવી
              વનસ્પતિઓ વિવિધ રોગોને મોકલવામાં આવે છે અને શાંતિને સુધારે છે. આ
              વનસ્પતિઓ ઔષધીપદાર્થો, કોઝમેટિક્સ, અને રસોઇના ઉપયોગમાં યોગદાન આપે
              છે, આહેવામાં તેમનો આદરણીય મહત્વ છે.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="alazea-benefits-area">
              <div className="row">
                {/* Single Benefits Area */}
                <div className="col-12 col-sm-6">
                  <div className="single-benefits-area pb-2">
                    <img src={img1} alt="" />
                    <h5 className="font-semibold py-1.5">
                      ગુણવત્તા ધરાવતા ઉત્પાદનો
                    </h5>
                    <p>
                      ઔષધીય અને સુગંધિત છોડનો ઉત્પાદન ગુણવત્તાને પૂર્ણતાથી
                      ધરાવવાનો કામ કરે છે, જે આપની મંજૂરિ અને આનંદ આપે છે.
                    </p>
                  </div>
                </div>
                {/* Single Benefits Area */}
                <div className="col-12 col-sm-6">
                  <div className="single-benefits-area pb-2">
                    <img src={img2} alt="" />
                    <h5 className="font-semibold py-1.5">પરફેક્ટ સર્વિસ</h5>
                    <p>
                      પરિપૂર્ણ સેવા અપેક્ષાઓને પાર કરે છે, સતત, યથાર્થતા અને
                      સંતોષ પ્રદાન કરે છે, દિગ્દર્શક, શીઘ્ર અને વ્યક્તિગત દેખભાલ
                      દ્વારા.
                    </p>
                  </div>
                </div>
                {/* Single Benefits Area */}
                <div className="col-12 col-sm-6">
                  <div className="single-benefits-area pb-2">
                    <img src={img3} alt="" />
                    <h5 className="font-semibold py-1.5">100% કુદરતી</h5>
                    <p>
                      100% કુદરતી અને શ્રેષ્ઠ રૂપમાં સ્વાગત થવાનું અને આનંદ
                      મળવાનું એ નમ્ર અને અદ્વિતીય અનુભવ છે.
                    </p>
                  </div>
                </div>
                {/* Single Benefits Area */}
                <div className="col-12 col-sm-6">
                  <div className="single-benefits-area pb-2">
                    <img src={img4} alt="" />
                    <h5 className="font-semibold py-1.5">પર્યાવરણને અનુકૂળ</h5>
                    <p>
                      પર્યાવરણને અનુકૂળ બનાવવાનો ઉદ્દેશ્ય, સંતોષકર સંરક્ષણ,
                      પુનર્ચક્રિયા અને સામુદાયિક સંયોજનનું પ્રશંસનીય સાધન છે.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
