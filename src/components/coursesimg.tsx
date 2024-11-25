import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"


const Courses = () => {
  const courseData = [
    {
      image: "/corse1.svg", 
      category: "Designing",
      rating: "5.0",
      title: "UX/UI Design 201",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/corse2.svg",
      category: "Programming",
      rating: "5.0",
      title: "Introduction to Python",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/corse3.svg",
      category: "Business",
      rating: "5.0",
      title: "Data Analysis for Beginners",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/corse4.svg",
      category: "Art",
      rating: "5.0",
      title: "Art Specialization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/corse5.svg",
      category: "Law",
      rating: "5.0",
      title: "Rule of Law",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/corse6.svg",
      category: "Tech",
      rating: "5.0",
      title: "Introduction to Webflow",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400"
    },
  ];

  return (
    <div className="w-full mx-auto p-4 min-h-screen">
    
      <div className="w-full text-center">
        <h1 className="text-[32px] sm:text-[56px] font-bold leading-[67.2px] font-roboto text-3xl sm:text-4xl md:text-5xl">Courses</h1>
        <p className="text-[14px] sm:text-[18px] font-normal font-roboto mt-2 text-sm sm:text-base md:text-lg">
          Your Ultimate Guide to Learning
        </p>
      </div>

      {/* Tabs Section */}
      <div className="w-full mx-auto flex justify-center items-center mt-16 flex-wrap">
        <div className="w-[87px] h-[40px] text-center font-roboto font-normal text-[16px] leading-[24px] border-b-2 border-black mx-2 mb-2 sm:mb-0">
          Popular
        </div>
        <div className="w-[140px] h-[40px] text-center font-roboto font-normal text-[16px] leading-[24px] mx-2 mb-2 sm:mb-0">
          Recommended
        </div>
        <div className="w-[109px] h-[40px] text-center font-roboto font-normal text-[16px] leading-[24px] mx-2 mb-2 sm:mb-0">
          Best Price
        </div>
      </div>

      {/* Course Cards Section */}
      <div className="w-full mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
        {courseData.map((course, index) => (
          <div
            key={index}
            className="w-full h-auto bg-[#f7f7f7] rounded-lg p-4 flex flex-col items-center mb-8"
          >
            {/* Image */}
            <Image
              src={course.image}
              alt={course.title}
              width={416}
              height={300}
              className="rounded-md"
            />
            
            <div className="w-full mt-4 flex justify-between items-center">
              <p className="text-[12px] sm:text-[14px] font-semibold leading-[21px] font-roboto">
                {course.category}
              </p>
              <div className="flex items-center">
                <Image
                  src="/star.svg" 
                  alt="Star"
                  width={20}
                  height={24}
                />
                <p className="text-[12px] sm:text-[14px] font-semibold ml-2">{course.rating}</p>
              </div>
            </div>
            
            <h5 className="w-full mt-2 text-[20px] sm:text-[24px] font-bold leading-[33.6px] font-roboto text-xl sm:text-2xl md:text-3xl">
              {course.title}
            </h5>
            
            <p className="w-full mt-2 text-[14px] sm:text-[16px] font-normal leading-[24px] font-roboto text-sm sm:text-base">
              {course.description}
            </p>
            {/* Footer */}
            <div className="w-full mt-4 flex items-center justify-start gap-[8px]">
  <button className="px-5 py-2 text-[14px] sm:text-[16px] font-medium border border-black rounded-[5px]">
    Enroll Now
  </button>
  <p className="text-[14px] sm:text-[16px] font-medium">{course.price}</p>
</div>

          </div>
        ))}
      </div>
        {/* Button Section */}
{/* <div className="text-center mt-8 sm:mt-12">
  <button className="w-[140px] sm:w-[155px] h-[40px] sm:h-[48px] rounded-[5px] outline outline-2 outline-black px-[16px] sm:px-[24px] py-[8px] sm:py-[12px] text-[12px] sm:text-[14px] bg-[#f7f7f7] text-black hover:bg-gray-300">
    View All Courses
  </button>
</div> */}
<div className="text-center mt-8 sm:mt-12">
 <Button className="w-[140px] sm:w-[155px] h-[40px] sm:h-[48px] rounded-[5px] outline outline-2 outline-black px-[16px] sm:px-[24px] py-[8px] sm:py-[12px] text-[12px] sm:text-[14px] bg-[#f7f7f7] text-black hover:bg-gray-300 mt-[50px]">View all courses</Button>
</div>

    </div>
  );
};

export default Courses;
