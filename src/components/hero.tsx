import React from "react";
import Image from "next/image";
import heroimg from "../../public/heroimg.svg";

const HeroSection = () => {
  return (
    <div className="h-auto lg:h-[900px] bg-white flex items-center justify-center px-4 lg:px-0 pt-[80px] sm:pt-[80px] md:pt-[100px] lg:pt-[100px]">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
        {/* Left Side Content */}
        <div className="w-full lg:w-[50%] mt-[100px] flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-8 lg:pl-[45px]">
          <h1 className="font-roboto font-bold text-black text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[35px] sm:leading-[45px] md:leading-[55px] lg:leading-[67.2px] max-w-[500px] mt-0 sm:mt-[50px] md:mt-[80px] lg:mt-[100px]">
            Learn New Skills Online with Ease
          </h1>
          <p className="font-roboto font-medium text-black text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[27px] max-w-[500px] mt-4">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
          
            <button className="w-full sm:w-[178px] py-[12px] bg-black text-white text-[16px] rounded-[5px]">
              Start Learning Now
            </button>
      
            <button className="w-full sm:w-[178px] py-[12px] bg-white text-black border border-gray-300 text-[16px] rounded-[5px] hover:bg-gray-100">
              Explore course
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-[50%] flex justify-center mt-0 sm:mt-[30px] lg:mt-0">
          <Image
            src={heroimg}
            alt="Hero Section Image"
            width={640}
            height={900}
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
