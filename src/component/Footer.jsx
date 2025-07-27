import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <img
            src="src/asset/maverick-logo.png"
            alt="Maverick Dresses"
            className="rounded-full w-24 h-24 object-cover p-2 bg-white"
          />
        </div>

        <div className=" md:text-right">
        <h4 className="text-xl font-semibold mb-2 text-center md:text-right text-center">
            Contact
        </h4>
          <p>Email: info@maverickdresses.com</p>
          <p>Phone: +234 000 000 0000</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h4 className="text-xl font-semibold mb-4">Site Map</h4>
        <ul className="flex justify-center flex-wrap gap-6 text-sm">
          <li>
            <a href="#" className="hover:text-purple-400 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-400 transition duration-200">
              About Us
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-purple-400 transition duration-200">
              Gallery
            </a>
          </li>
          <li>
            <a href="#feedback" className="hover:text-purple-400 transition duration-200">
              Feedback
            </a>
          </li>
        </ul>
      </div>

      <div className="my-6 border-t border-gray-500 w-full" />

      <div className="text-center text-sm space-y-2 -mt-4">
        <p className="text-gray-300">
          © {new Date().getFullYear()} Maverick Dresses. All rights reserved.
        </p>
        <p className="text-gray-300">Fashion | Tailoring | Fabrics</p>
      </div>
    </footer>
  );
};

export default Footer;
