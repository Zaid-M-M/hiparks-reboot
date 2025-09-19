"use client";
import React from "react";
import { motion } from "framer-motion";
import Btn from "@/components/global/Btn";
import CardStackScroll from "./CardStackScroll";

const BJ_Sec1 = () => {
  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <img
          className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
          src="/green_vector.svg"
        />
        <img
          className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
          src="/orange_vector.svg"
        />

        <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[30px] md:pb[55px] 1440:pb-[70px]  1280:pb-[0px]">
          <div className="bw-m bg-[#F7F7F7] border-[1px] border-[#E3E3E3] px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content]  mb-[10px]">
            <a href="#" className="text-[13px] md:text-[13px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] ">
              Brand And Journey
            </a>
          </div>

          <div className="flex flex-col items-start md:flex-col md:items-start md:w-fit relative">
            <h1 className="sec_hd bw-r">
              <span className="bw-m">Building for What's Next.</span>
            </h1>
            <div className="flex gap-[10px] md:gap-[17px]  md:flex-row flex-col">
              <h1 className="sec_hd bw-r">Backed by What Works.</h1>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between mt-[30px] lg:mt-[40px] xl:mt-[53px]  lg:flex-row ">
            <div className="max-w-[565px] mb-[15px] lg:mb-[0px]">
              <p className="text-[22px] leading-[30px] lg:text-[23px] lg:leading-[33px] xl:text-[27px] xl:leading-[37px] 1440:text-[30px] 1440:leading-[40px] bw-r">
                We are India’s fastest growing developers of Grade A industrial and logistics parks, building essential and irreplaceable infrastructure critical for enabling of supply chains.{" "}
              </p>
            </div>
            <div className="max-w-[645px]">
              <p className="p_bld mb-[16px] bw-m ">
                Horizon parks are high-performance ecosystems power India’s manufacturing and enables efficient storage and movement of goods.
              </p>

              <p className="p_bld mb-[16px] bw-m ">
                As a Blackstone logistics platform, we leverage the group’s vast experience in global real estate management and best practices, with our deep local expertise to deliver world class and premium industrial and warehousing solutions.
              </p>

              <p className="p_bld bw-m ">
                Today, we have one of the largest Grade A portfolios in India — 42 parks across 10 key markets, covering more than 2,100 acres and offering 53 million sq. ft. of leasable area.
              </p>
              <Btn text="NETWORK OVERVIEW" className="mt-[24px]" />
            </div>
          </div>
        </div>
      </div>

      <CardStackScroll />
    </div>
  );
};

export default BJ_Sec1;
