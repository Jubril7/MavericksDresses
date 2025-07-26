import React from 'react';
import logo from '../asset/maverick-logo.png'

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-purple-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <div className="flex items-center space-x-2">
        <img
            src={logo}
            alt="Maverick Logo"
            className="h-12 w-12 object-cover rounded-full border-2 border-purple-300 shadow-sm"
        />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-40 text-purple-900 font-medium">
          <a href="#home" className="hover:text-purple-600">Home</a>

            <div className="relative group">
            <button className="hover:text-purple-600 transition duration-200 ease-in-out focus:outline-none">
                Categories
            </button>

            <div className="absolute left-0 mt-3 w-56 rounded-xl bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200 ease-out z-50">
                <ul className="py-2 text-sm text-gray-700">
                {[
                    'Shirts',
                    'Skirts',
                    'Frocks',
                    'P.T. T-shirts',
                    'P.T. Shorts',
                    'P.T. Track Pants',
                    'Belts',
                    'Ties',
                    'Logos',
                    'Socks'
                ].map((item) => (
                    <li key={item}>
                    <a
                        href="#"
                        className="block px-4 py-2 rounded-md hover:bg-purple-100 transition-colors duration-150"
                    >
                        {item}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            </div>



          <a href="#contact" className="hover:text-purple-600">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
