import React from "react";
import TimelineSection from "./TimelineSection";

const Milestone = () => {
  return (
    <div className="relative flex min-h-screen py-10 sm:py-10 1024:pt-[80px] bg-black ">
      <img
        src="/know-us/milebg.png"
        className="absolute top-6 1280:right-[150px] 1280:w-[749px] 1280:h-[719px] right-[5%] w-[60vw] z-10 h-auto"
        alt=""
      />
      <div className="absolute -top-1  left-[4%] 1600:left-[8%] 1920:left-[15%]">
        <img
          src="/rect.svg"
          alt=""
          className="w-[80px] 1024:w-[178px] h-auto"
        />
      </div>

      <div className="relative fix ">
        <div>
          <h1 className="bw-m text-[33px] 768:text-[45px] leading-[41px] 768:leading-[55px] 1280:leading-[75px] 1280:text-[65px] 1366:text-[64px] bg-[linear-gradient(94deg,#AC38D9_10%,#F47922_40%,#F47922_100%)] bg-clip-text text-transparent whitespace-nowrap overflow-visible tracking-[-0.04em]">
            {/* <h1 className="bw-m  bg-[linear-gradient(94deg,#AC38D9_10%,#F47922_40%,#F47922_100%)] bg-clip-text text-transparent whitespace-nowrap overflow-visible sec_hd"> */}
            Milestones That Made Us
          </h1>

          <p className="bw-r text-white text-[18px] 768:text-[22px] 1280:text-[22px] pt-[10px] sm:pt-[30px] 1366:text-[24px]   leading-[28px]  sm:leading-[34px] 1280:leading-[30px] 1366:leading-[34px]">
            Since our launch in 2022 from 6 MSFT portfolio, today, our portfolio
            has grown to 40 parks in 9 major regions, covering over 2,000 acres
            and 50 million sq. ft. of development potential, making us one of
            the leading developers in this asset class in India. We serve a
            diverse range of sectors—e-commerce, third-party logistics,
            automotive, aerospace, engineering, FMCG, retail, chemicals and
            more, providing both ready-to-move and built-to-suit solutions
            tailored to each customer’s needs.
          </p>
        </div>

        <TimelineSection />
      </div>
    </div>
  );
};

export default Milestone;
