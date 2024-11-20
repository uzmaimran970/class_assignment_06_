import React from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const teamMembers = [
  {
    name: "James Nduku",
    detail: "Marketing Coordinator",
    image: "/team1.svg",
  },
  {
    name: "Joseph Munyambu",
    detail: "Nursing Assistant.",
    image: "/team2.svg",
  },
  {
    name: "Joseph Ngumbau",
    detail: "Medical Assistant",
    image: "/team3.svg",
  },
  {
    name: "Erick Kipkemboi",
    detail: "Web Designer",
    image: "/team4.svg",
  },
  {
    name: "Stephen Kerubo",
    detail: "President of Sales",
    image: "/team5.svg",
  },
  {
    name: "John Leboo",
    detail: "Dog Trainer",
    image: "/team6.svg",
  },
];

const OurTeam = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto p-6 sm:p-16 pt-[112px] pb-[112px] bg-[#f7f7f7]">
      
      <div className="w-full max-w-[768px] mx-auto gap-[16px]">
        <h2 className="w-full text-center text-[24px] sm:text-[32px] font-bold leading-[36px] sm:leading-[57.8px] font-roboto">
          Our Team
        </h2>
        <p className="w-full text-center text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[27px] font-roboto mt-4">
          Lorem ipsum dolor sit amet, consectetur .
        </p>
      </div>

    
      <div className="w-full mt-[96px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full max-w-[394.67px] h-auto bg-[#f7f7f7] mx-auto p-6 flex flex-col justify-center items-center text-center "
          >
            <Image
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-[18px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] font-roboto mt-4">
              {member.name}
            </p>
            <p className="text-[14px] sm:text-[18px] font-normal leading-[21px] sm:leading-[27px] font-roboto mt-2">
              {member.detail}
            </p>
            {/* Social Media Icons */}
            <div className="w-[100px] h-[24px] mt-[14px] flex justify-center items-center gap-[14px]">
              <FaLinkedin size={18} />
              <FaTwitter size={18} />
              <FaGlobe size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
