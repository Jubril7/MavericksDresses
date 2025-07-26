// AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-purple-100 py-16 px-6 md:px-20" id="about">
      {/* Wrapper to constrain content width */}
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <div className="flex justify-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center">
            About Us
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-700 text-lg leading-relaxed">
              At Maverick Dresses, we are dedicated to providing high-quality,
              affordable uniforms that reflect the identity and pride of every
              institution we serve. With a passion for design and a commitment to
              excellence, our team works closely with clients to bring their
              visions to life. From innovative styles to durable fabrics, we
              ensure that every uniform stands out and lasts. Trust Maverick
              Dresses — where tradition meets innovation.
            </p>
          </div>

                <div className="md:w-1/2 flex justify-center">
                <img
                    src="src/asset/maverick-logo.png"
                    alt="About Maverick Dresses"
                    className="max-h-70 w-auto rounded-2xl shadow-lg"
                />
                </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
