import React, { useState } from "react";

const outletMapLinks = {
  Abuja: "https://www.google.com/maps?q=9.0765,7.3986&z=13&output=embed",
  Lagos: "https://www.google.com/maps?q=6.5244,3.3792&z=13&output=embed",
  Minna: "https://www.google.com/maps?q=9.6139,6.5569&z=13&output=embed",
};

const ContactUs = () => {
  const [selectedOutlet, setSelectedOutlet] = useState("Abuja");

  return (
    <section
  id="contact"
  className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-orange-100"
>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-10">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Maverick Dresses HQ</h3>
            <p className="text-gray-700 mb-3">123 School Lane, Uniform City</p>
            <p className="text-gray-700 mb-3">
              MailTo:{" "}
              <a
                href="mailto:info@maverickdresses.com"
                className="text-purple-600 underline hover:text-purple-800"
              >
                info@maverickdresses.com
              </a>
            </p>

            <h4 className="text-xl font-semibold text-purple-800 mt-8 mb-3">Choose a City:</h4>
            <div className="flex flex-wrap gap-3">
              {Object.keys(outletMapLinks)
                .sort()
                .map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedOutlet(city)}
                    className={`px-4 py-2 rounded-full transition ${
                      selectedOutlet === city
                        ? "bg-purple-600 text-white"
                        : "bg-white text-purple-600 border border-purple-400 hover:bg-purple-100"
                    }`}
                  >
                    {city}
                  </button>
                ))}
            </div>
          </div>

          {/* Map */}
          <div className="shadow-xl rounded-lg overflow-hidden">
            <iframe
              title="Outlet Location"
              src={outletMapLinks[selectedOutlet]}
              width="100%"
              height="350"
              loading="lazy"
              className="border-0 w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
