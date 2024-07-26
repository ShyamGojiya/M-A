import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="contact" className="contact-area section-padding-100-0 sm:mx-24 max-sm:mx-2 my-6">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-lg-6 sm:pr-10 max-sm:mb-4">
            {/* Section Heading */}
            <div className="section-heading">
              <h2 className="font-extrabold text-2xl text-br">સંપર્કમાં  રહો</h2>
              <p className="pb-2">અમને ઇ-મેઇલ મોકલો, અમે પછીથી સંપર્ક કરીશું.</p>
            </div>
            {/* Contact Form Area */}
            <div className="contact-form-area mb-100">
              <form action="#" method="post">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-name"
                        placeholder="તમારું નામ"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="contact-email"
                        placeholder="તમારો ઇ-મેઇલ"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-subject"
                        placeholder="વિષય"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        cols={30}
                        rows={5}
                        placeholder="તમારો સંદેશ અહીં લખો."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="flex items-center justify-center py-2 px-4 rounded-xl bg-br text-white hover:bg-hbr">
                      સંદેશ મોકલો
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Google Maps */}
            <div className="map-area mb-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.5822795728769!2d72.98209027111311!3d22.5365650779153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4c0de55a31ff%3A0xb0b08eabeebc9ae0!2sMedicinal%20And%20Aromatic%20Plants%20Garden!5e1!3m2!1sen!2sin!4v1695032214085!5m2!1sen!2sin"
                className="w-full h-[50vh] rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Medicinal And Aromatic Plants Garden"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
