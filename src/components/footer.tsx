import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto p-6">
      
      <div className="w-full max-w-[1120px] mx-auto">
        
        <div className="w-full mb-[40px]">
          <div className="flex flex-wrap justify-between items-start gap-4">
            
            <div>
              <p className="text-[18px] font-semibold leading-[27px] w-full max-w-[500px]">
                Stay updated with our latest news and updates.
              </p>
              <p className="text-[16px] font-normal leading-[24px] w-full max-w-[500px] mt-2">
                Enter your email to subscribe to our newsletter.
              </p>
            </div>

            
            <div className="w-full max-w-[400px]">
              <div className="flex flex-wrap gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-[180px] h-[48px] border border-gray-300 rounded-[5px] px-[12px]"
                />
                <button className="h-[48px] border border-gray-300 rounded-[5px] px-[24px] py-[12px] bg-white-500 text-black font-medium">
                  Subscribe
                </button>
              </div>
              
              <p className="text-[12px] font-normal leading-[18px] mt-2">
                We value your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-[40px]">
          <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={130}
              height={30}
              className="mb-4"
            />
          </div>
          <div>
            <p className="text-[16px] font-semibold leading-[24px] mb-2">
              Courses
            </p>
            <ul className="space-y-1">
              <li className="text-[14px] font-normal leading-[21px]">
                Business
              </li>
              <li className="text-[14px] font-normal leading-[21px]">
                Development
              </li>
              <li className="text-[14px] font-normal leading-[21px]">
                Technology
              </li>
              <li className="text-[14px] font-normal leading-[21px]">
                Design
              </li>
              <li className="text-[14px] font-normal leading-[21px]">
                Programming
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[16px] font-semibold leading-[24px] mb-2">
              Resources
            </p>
            <ul className="space-y-1">
              <li className="text-[14px] font-normal leading-[21px]">Career</li>
              <li className="text-[14px] font-normal leading-[21px]">Resume</li>
              <li className="text-[14px] font-normal leading-[21px]">
                Learning
              </li>
              <li className="text-[14px] font-normal leading-[21px]">
                Interview Preparation
              </li>
              <li className="text-[14px] font-normal leading-[21px]">Jobs</li>
            </ul>
          </div>
          <div>
            <p className="text-[16px] font-semibold leading-[24px] mb-2">
              About us
            </p>
            <ul className="space-y-1">
              <li className="text-[14px] font-normal leading-[21px]">
                Partners
              </li>
              <li className="text-[14px] font-normal leading-[21px]">
                Contact
              </li>
              <li className="text-[14px] font-normal leading-[21px]">
                Help/Support
              </li>
              <li className="text-[14px] font-normal leading-[21px]">FAQ</li>
              <li className="text-[14px] font-normal leading-[21px]">
                Terms and Conditions
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full flex flex-wrap justify-between items-center gap-4">
          <p className="text-[14px] font-normal leading-[21px]">
            © 2024 All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <p className="text-[14px] font-normal leading-[21px]">
              Privacy Policy
            </p>
            <p className="text-[14px] font-normal leading-[21px]">
              Terms of Service
            </p>
            <p className="text-[14px] font-normal leading-[21px]">
              Cookie Settings
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaFacebookF className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaTwitter className="w-5 h-5" />
            <FaLinkedinIn className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
