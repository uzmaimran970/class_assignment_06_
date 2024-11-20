import Image from "next/image";

const CoursesComponent = () => {
  // array of images
  const courses = [
    {
      image: "/cor1.svg",
      title: "Design and Development",
      description: "50+ courses available",
    },
    {
      image: "/cor2.svg",
      title: "Marketing",
      description: "50+ courses available",
    },
    {
      image: "/cor3.svg",
      title: "Development",
      description: "50+ courses available",
    },
    {
      image: "/cor4.svg",
      title: "Comunication",
      description: "50+ courses available",
    },
    {
      image: "/cor5.svg",
      title: "Degital marketing",
      description: "50+ courses available",
    },
    {
      image: "/cor6.svg",
      title: "Self Development",
      description: "50+ courses available",
    },
    {
      image: "/cor7.svg",
      title: "Business",
      description: "50+ courses available",
    },
    {
      image: "/cor8.svg",
      title: "Finance",
      description: "50+ courses available",
    },
    {
      image: "/cor9.svg",
      title: "Consulting",
      description: "50+ courses available",
    },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto p-4">
      

      <div className="text-center pt-[112px] pb-[80px] px-4 sm:px-[64px]">
        <h1 className="text-2xl sm:text-4xl font-bold max-w-[768px] mx-auto">
          Explore Course by Category
        </h1>
        <p className="text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[27px] text-black mt-4">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-[48px] sm:mt-[96px]">
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-full max-w-[410.67px] h-auto flex items-center bg-[#f7f7f7] rounded-[5px] p-[20px] sm:p-[34px] gap-[10px] mx-auto"
          >
            <Image
              src={course.image}
              alt={`Course ${index + 1}`}
              width={100}
              height={100}
              className="rounded-[5px]"
            />
            <div>
              <h3 className="w-[246px] text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] text-black">
                {course.title}
              </h3>
              <p className="text-[14px] sm:text-[18px] font-normal text-gray-600 mt-2">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button Section */}
<div className="text-center mt-8 sm:mt-12">
  <button className="w-[140px] sm:w-[155px] h-[40px] sm:h-[48px] rounded-[5px] outline outline-2 outline-black px-[16px] sm:px-[24px] py-[8px] sm:py-[12px] text-[12px] sm:text-[14px] bg-[#f7f7f7] text-black hover:bg-gray-300">
    View All Courses
  </button>
</div>

    </div>
  );
};

export default CoursesComponent;
