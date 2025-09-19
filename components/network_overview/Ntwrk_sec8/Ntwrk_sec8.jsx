import React from "react";
import Btn from "@/components/global/Btn";

const Ntwrk_sec8 = () => {

  return (
    <div className="relative">

      <img className="absolute left-[0] top-[0] w-[110px] xl:w-[auto]" src='/network_overview/sustain_vctr2.png'></img>
      <img className="absolute right-[0] top-[0] w-[80px] xl:w-[auto]" src='/network_overview/sustain_vctr1.png'></img>

      <div className="relative w-full  overflow-hidden fix 1280:pt-[100px] pt-[45px] ">

        <div className="flex justify-center">
          <div className="flex items-center flex-col w-fit relative text-center">
            <h1 className="sec_hd bw-r"><span className="bw-m">Sustainable Design</span></h1>
            <h1 className="sec_hd bw-r">and Operations</h1>
            <img
              src="/abstract_pattern_sustain.svg"
              className="abstract_svg xl:mt-[25px] my-[15px]"
            />

            <div className="lg:w-[745px] 1440:w-[762px] 1536:w-[862px] lg:mt-[50px]">
              <p className="bw-r text-[17px] md:text-[20px] lg:text-[20px] 1280:text-[22px] md:leading-[28px] text-[#0db14b] mb-[20px]">All our parks are developed using green building practices and smart, efficient layouts that improve operational flow while creating healthier, more humane spaces for the people working inside them.</p>
              <p className="bw-r text-[16px] md:text-[17px] 1280:text-[18px] md:leading-[28px] text-[#3B3B3B]">Our eco-conscious designs prioritise renewable power solutions, water recycling systems, efficient waste management, and the use of materials with lower embodied energy. Most of our operational parks are certified by the Indian Green Building Council (IGBC), ensuring we meet internationally recognised green standards. These certifications are not only a mark of our commitment to environmental responsibility but also a strategic advantage for businesses aiming to meet their own ESG and carbon reduction goals.</p>
            </div>
          </div>
        </div>

      </div>


      <img className="xl:mt-[-300px] 1440:mt-[-335px] 1536:mt-[-335px] 1600:mt-[-360px] 1920:mt-[-440px] mt-[-40px] lg:mt-[-115px] w-full" src='/network_overview/sustainable_bg.png'></img>

    </div>
  );
};

export default Ntwrk_sec8;
