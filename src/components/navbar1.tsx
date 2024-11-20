import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#f7f7f7] w-full">
      <nav className="max-w-[1280px] h-[54px] px-4 sm:px-[32px] md:px-[62px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        
        <div className="flex items-center space-x-2 sm:space-x-4 text-gray-600">
          <span className="text-sm">+923456-444-789</span>
          <span className="hidden sm:inline-block border-l border-gray-300 h-4"></span>
          <span className="text-sm">abc@email.com</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <FaFacebook className="text-black hover:text-gray-700 cursor-pointer" size={20} />
          <FaInstagram className="text-black hover:text-gray-700 cursor-pointer" size={20} />
          <FaLinkedin className="text-black hover:text-gray-700 cursor-pointer" size={20} />
          <FaTwitter className="text-black hover:text-gray-700 cursor-pointer" size={20} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
