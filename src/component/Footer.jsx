// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-4">Site Map</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#feedback" className="hover:underline">Feedback</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p>Email: info@maverickdresses.com</p>
          <p>Phone: +234 000 000 0000</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-300">
        © {new Date().getFullYear()} Maverick Dresses. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
