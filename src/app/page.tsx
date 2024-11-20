import Navbar from "../components/navbar1";
import Navbar2 from "../components/navbar2";
import Hero from "../components/hero";
import Cta from "../components/cta";
import CoursesComponent from "@/components/courses";
import OurAchievement from "@/components/acheivement";
import Coursesimg from "../components/coursesimg"
import Ourteam from "../components/ourteam";
import Customer from "../components/customer";
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mb-4"></div>
      <Navbar2 />
      <Hero />
      
        <Cta />
        <CoursesComponent/>
        <OurAchievement/>
        
        <Coursesimg/>
        <Ourteam/>
        <Customer />
<div className="mt-[100px] mb-[100px]">
  <Footer />
</div>


      
    </div>
  );
}
