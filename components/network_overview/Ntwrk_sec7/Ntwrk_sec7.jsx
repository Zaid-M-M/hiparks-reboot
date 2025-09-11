import React from "react";
import Btn from "@/components/global/Btn";

const Ntwrk_sec7 = () => {

  return (
    <div className="bg-[#000]">
      <div className="relative w-full  overflow-hidden fix 1280:pt-[50px] pt-[45px] ">

        <div className="flex xl:flex-row flex-col">

          {/* Column 1 */}
          <div className="w-full xl:w-[510px] 1440:w-[570px] xl:pb-[30px] 1440:pb-[70px]">
            <div className="flex items-left flex-col relative w-fit">
              <h1 className="inline-block w-fit text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px] bw-m bg-[linear-gradient(111deg,#AC38D9,#F47922)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap">
                Internationally
              </h1>


              <h1 className="text-[26px] leading-[36px]  md:text-[45px] md:leading-[55px] text-white lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px]  bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize">
                Compliant Infrastructure
              </h1>
              <img
                src="/txt_box_249.svg"
                className="absolute w-[120px] md:w-[200px] right-[-18px] md:right-[-18px] lg:right-[-18px] lg:w-[200px] xl:w-[auto] xl:right-[-65px] 1440:right-[-28px] lg:top-[10px] top-[8px] xl:top-[0px] 1440:top-[6px]"
              />
            </div>

            <div className="xl:w-[563px] lg:mt-[35px]">
              <p className="bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px] text-[#E0E0E0]">From the ground up, each structure is constructed to meet globally recognised standards for safety, efficiency, and ergonomics, ensuring a workplace that is both high-performing and human-friendly.</p>

              <p className="bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px] text-[#E0E0E0]">The buildings are designed with ample natural lighting, well-ventilated interiors, and temperature-controlled zones where required. Additionally, they are embedded with future-ready systems such as automated fire detection and suppression technology, energy-efficient lighting, water recycling units, and smart waste management solutions.</p>
            </div>

          </div>

          {/* Column 2 */}
          <div className="flex-1 relative">
            <img className="xl:w-[100%] w-[75%] m-[auto] pt-[30px] lg:pt-[0px] relative xl:absolute bottom-[0px]" src='/network_overview/complain_infra.png'></img>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Ntwrk_sec7;
