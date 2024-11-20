import React from "react";

const OurAchievement = () => {
  return (
    <div className="w-full max-w-[1280px] h-auto mx-auto p-4 text-center">
    
      <div className="pt-[112px]">
        <h1 className="w-full max-w-[1152px] mx-auto text-[48px] font-bold leading-[57.6px] font-roboto sm:text-[36px] sm:leading-[48px]">
          Our Achievement
        </h1>
    
        <p className="w-full max-w-[1152px] mx-auto text-[18px] font-normal text-black mt-4 sm:mt-6 md:mt-8 pt-[50px] sm:pt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      
      <div className="w-full max-w-[1152px] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      


        <div className="w-[296px] h-[80px] bg-white mx-auto">
          <h3 className="text-[40px] font-bold leading-[48px] font-roboto sm:text-[32px] sm:leading-[40px]">+200</h3>
          <p className="text-[16px] font-normal leading-[24px] font-roboto mt-1">Courses</p>
        </div>
        <div className="w-[296px] h-[80px] bg-white mx-auto">
          <h3 className="text-[40px] font-bold leading-[48px] font-roboto sm:text-[32px] sm:leading-[40px]">50k</h3>
          <p className="text-[16px] font-normal leading-[24px] font-roboto mt-1">Mentors</p>
        </div>
        <div className="w-[296px] h-[80px] bg-white mx-auto">
          <h3 className="text-[40px] font-bold leading-[48px] font-roboto sm:text-[32px] sm:leading-[40px]">370k</h3>
          <p className="text-[16px] font-normal leading-[24px] font-roboto mt-1">Students</p>
        </div>
        <div className="w-[296px] h-[80px] bg-white mx-auto">
          <h3 className="text-[40px] font-bold leading-[48px] font-roboto sm:text-[32px] sm:leading-[40px]">100k</h3>
          <p className="text-[16px] font-normal leading-[24px] font-roboto mt-1">Registrations</p>
        </div>
      </div>
    </div>
  );
};

export default OurAchievement;
