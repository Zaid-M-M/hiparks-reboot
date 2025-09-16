import React from "react";
import Btn from "@/components/global/Btn";

const Ecom_sec4 = () => {

  return (
    <div className="border-b border-[#CECECE]">
      <div className="relative w-full  overflow-hidden fix 1280:pt-[80px] pt-[45px] ">

        <div className="flex xl:flex-row flex-col">

          {/* Column 1 */}
          <div className="w-full xl:w-[510px] 1440:w-[650px] xl:pb-[90px]">
            <div className="flex items-left flex-col relative w-fit">
              <div className="flex gap-[10px] md:gap-[17px]  md:flex-row flex-col">
                <h1 className="text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px]  bw-m bg-gradient-to-r whitespace-nowrap overflow-visible !font-medium capitalize">
                  Enabling India’s growth</h1>
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg hidden md:block"
                />
              </div>
              <h1 className="text-[26px] leading-[36px]  md:text-[45px] md:leading-[55px]  lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px]  bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize">
                one warehouse, one factory, <br></br> one corridor at a time
              </h1>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg block md:hidden"
              />

            </div>
            <p className="xl:w-[488px] bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px]">We’ve supported some of India’s top e-commerce and logistics brands such as Amazon, Flipkart, Blinkit, Reliance, DHL, Delhivery, Maersk, and Rhenus Logistics through peak sale seasons, rapid expansion, and evolving delivery models. With Horizon, you're not just getting a warehouse—you’re getting a team that thinks ahead, scales fast, and adapts with you.</p>

            <Btn text="View All" className="mt-[0px]" />
          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img className="xl:w-[100%] w-[75%] m-[auto] pt-[30px] lg:pt-[0px] relative xl:absolute bottom-[0px]" src='/ecommerce/ecom_sec4_img1.png'></img>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Ecom_sec4;
