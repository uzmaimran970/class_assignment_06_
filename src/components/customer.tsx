import React from "react";
import Image from "next/image";
import fivestar from "../../public/fivestar.svg";

const testimonials = [
  {
    logo: "/fivestar.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vehicula metus.",
    profileImage: "/cust1.svg",
    name: "James Nduku",
    designation: "Software Developer",
  },
  {
    logo: "/fivestar.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vehicula metus.atur.",
    profileImage: "/cust2.svg",
    name: "Erick Kipkemboi",
    designation: "Scrum Master",
  },
  {
    logo: "/fivestar.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vehicula metus.",
    profileImage: "/cust3.svg",
    name: "Stephen Kerubo",
    designation: "UI/UX Designer",
  },
];

const CustomerTestimonials = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-12 xl:w-[1280px] mx-auto p-6 bg-[#f7f7f7] mb-12">
      {/* main Section */}
      <div className="w-full md:w-[560px] space-y-4 text-center md:text-left mx-auto">
        <h2 className="font-roboto font-bold text-[32px] md:text-[48px] leading-[40px] md:leading-[57.6px]">
          Customer Testimonials
        </h2>
        <p className="font-roboto font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">
          What our customers say about us.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-[40px] md:mt-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[32px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 md:p-[32px] flex flex-col gap-4 md:gap-[24px] rounded-md"
          >
            {/* Top Image */}
            <Image
              src={fivestar}
              alt={`Customer Logo ${index + 1}`}
              width={116}
              height={18.89}
              className="mb-2"
            />

          
            <p className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px]">
              {testimonial.text}
            </p>

          
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.profileImage}
                alt={`Customer ${index + 1}`}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-[14px] md:text-[16px] font-semibold leading-[20px] md:leading-[24px]">
                  {testimonial.name}
                </p>
                <p className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px]">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Image */}
      <div className="mt-8 flex justify-center md:justify-start">
        <Image
          src="/dots.svg"
          alt="Dots Logo"
          width={100}
          height={40}
          className="ml-0 md:ml-8"
        />
      </div>
    </div>
  );
};

export default CustomerTestimonials;
