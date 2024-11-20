import React from "react";
import Image from "next/image";
import sm from "../../public/sm11.svg";
import sm2 from "../../public/sm12.svg";
import sm3 from "../../public/sm13.svg";
import sm4 from "../../public/sm14.svg";
import sm5 from "../../public/sm15.svg";
import sm7 from "../../public/sm17.svg";

const TrustedSection = () => {
  return (
    <div className="w-full bg-[#f7f7f7] py-[80px] px-[64px]"> 
      <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between flex-wrap">
    
        <div className="w-[320px] h-[68px] text-[24px] font-bold text-black leading-[1.2] text-center sm:text-left">
          <h5>Trusted by 200+ Companies Worldwide</h5>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-[880px] mx-auto mt-[8.74px] flex flex-wrap items-center justify-center gap-[5px] py-[8.74px]">
          <div className="w-[calc(16.66%-19.12px)] sm:w-[calc(33.33%-19.12px)] md:w-[calc(16.66%-19.12px)] flex justify-center mb-[16px]">
            <Image
              src={sm}
              alt="Company 1"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="w-[calc(16.66%-19.12px)] sm:w-[calc(33.33%-19.12px)] md:w-[calc(16.66%-19.12px)] flex justify-center mb-[16px]">
            <Image
              src={sm2}
              alt="Company 2"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="w-[calc(16.66%-19.12px)] sm:w-[calc(33.33%-19.12px)] md:w-[calc(16.66%-19.12px)] flex justify-center mb-[16px]">
            <Image
              src={sm3}
              alt="Company 3"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="w-[calc(16.66%-19.12px)] sm:w-[calc(33.33%-19.12px)] md:w-[calc(16.66%-19.12px)] flex justify-center mb-[16px]">
            <Image
              src={sm4}
              alt="Company 4"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="w-[calc(16.66%-19.12px)] sm:w-[calc(33.33%-19.12px)] md:w-[calc(16.66%-19.12px)] flex justify-center mb-[16px]">
            <Image
              src={sm5}
              alt="Company 5"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="w-[calc(16.66%-19.12px)] sm:w-[calc(33.33%-19.12px)] md:w-[calc(16.66%-19.12px)] flex justify-center mb-[16px]">
            <Image
              src={sm7}
              alt="Company 6"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
