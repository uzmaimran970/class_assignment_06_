import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-[#f7f7f7] w-full  ">
      <nav className="h-[72px] w-full flex items-center justify-center px-[20px] lg:px-[62px] ">
        
        <div className="w-full lg:w-[1152px] h-[44px] bg-white flex justify-between items-center rounded-md px-4 shadow-md  ">
          {/* Logo and Links */}
          <div className="flex items-center gap-6 md:gap-10">

            {/* Logo */}
            <div className="flex items-center pr-[200px]">
              <Image
                src={logo}
                alt="Logo"
                width={130.6}
                height={41}
              />
            </div>

            {/* Links */}
            <ul className="hidden md:flex gap-4 lg:gap-8 text-gray-700 text-sm font-medium ml-auto">
              <li className="cursor-pointer hover:text-black">Home</li>
              <li className="cursor-pointer hover:text-black">Courses</li>
              <li className="cursor-pointer hover:text-black">Services</li>
              <li className="cursor-pointer hover:text-black">Achievements</li>
              <li className="cursor-pointer hover:text-black">About Us</li>
              <li className="cursor-pointer hover:text-black">Testimonials</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">

            {/* Login Button */}
            <button className="px-4 py-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              Login
            </button>

            {/* Sign Up Button */}
            <button className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800">
              Sign Up
            </button>
          </div>

          
          <div className="flex md:hidden items-center">
            <button className="text-black">
              
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
