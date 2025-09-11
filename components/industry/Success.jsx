import React from "react";
import Btn from "@/components/global/Btn";

const Success = () => {
  return (
    <div className='bg-[#000]'>
      <div className='relative w-full  overflow-hidden fix 1280:pt-[63px] pt-[45px] '>
        <div className='flex justify-between xl:flex-row flex-col'>
          {/* Column 1 */}
          <div className='w-full xl:w-[510px] 1440:w-[570px] xl:pb-[30px] 1440:pb-[70px]'>
            <div className='flex items-left flex-col relative w-fit'>
              <h1 className='inline-block w-fit sec_hd bw-m bg-[linear-gradient(111deg,#AC38D9,#F47922)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap'>
                Your Success
              </h1>

              <h1 className='sec_hd text-white bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize'>
                Is Our Success
              </h1>
            </div>

            <div className='xl:w-[563px] lg:mt-[35px]'>
              <p className='bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px] text-[#E0E0E0]'>
                Being true partners in our customers’ growth, we pull out all
                stops to meet their business requirements. 365 days a year, 24
                hours a day.
              </p>

              <p className='bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px] text-[#E0E0E0]'>
                Horizon Industrial Parks is proud to partner with leading global
                and national brands from diverse sectors and offer them modern,
                well planned, technology-enabled industrial and logistics
                spaces.
              </p>
              <p className='bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px] text-[#E0E0E0]'>
                Horizon portfolio comprises more than 100 brands from a variety of industry verticals including Third-party logistics, e-Commerce, Automotive & Auto Ancillaries, Aerospace, Engineering, FMCG and Retail.
              </p>
              <a
                href="#"
                className="bw-sb uppercase border-1 border-[#fff] text-[13px] md:text-[15px] text-white lg:text-[15px] xl:text-[16px] leading-[26px] py-[6px] px-[13px] md:py-[7px] md:px-[20px] lg:py-[8px] lg:px-[20px] xl:py-[15px] xl:px-[25px] flex gap-[10px] items-center w-fit tracking-[1.6px]"
              >

                View Case Studies
                <img
                  className="w-[23px] md:w-[24px] lg:w-25px]"
                  src="/btn_whit_arrow.svg"
                  alt="arrow"
                />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className='xl:w-1/2 w-full relative'>
            <img
              className='xl:w-full w-[75%] m-[auto] pt-[30px] lg:pt-[0px] relative xl:absolute bottom-[0px]'
              src='/ind/arr.png'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
