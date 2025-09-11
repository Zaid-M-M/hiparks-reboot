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

          <div className="flex flex-col items-start md:flex-col md:items-start lg:w-fit relative">
            <h1 className="sec_hd bw-r">
              <span className="bw-m">Building for What's Next.</span>
            </h1>
            <h1 className="sec_hd bw-r">Backed by What Works.</h1>
            <img
              src="/txt_box_295.svg"
              className="hidden sm:block absolute bottom-0 lg:bottom-[10px] right-[-289px] md:right-[65px] lg:right-[-195px] xl:right-[-290px] md:w-[200px] xl:w-[auto]"
            />
          </div>

          <div className="flex flex-col justify-between mt-[20px] lg:mt-[40px] xl:mt-[80px]  lg:flex-row ">
            <div className="max-w-[565px] mb-[15px] lg:mb-[0px]">
              <p className="text-[22px] leading-[30px] lg:text-[26px] lg:leading-[37px] xl:text-[30px] xl:leading-[40px] bw-r">
                We are India’s fastest growing developers of Grade A industrial
                and logistics parks, creating high-performance ecosystems that
                power the country’s growth.{" "}
              </p>
            </div>
            <div className="max-w-[645px]">
              <p className="p_bld mb-[16px] bw-m ">
                As a Blackstone logistics platform, we leverage the group’s vast
                experience in global real estate management and best practices,
                with our deep local expertise to deliver world class and premium
                industrial and warehousing solutions.
              </p>

              <p className="p_bld bw-m ">
                Launched in 2022 with a portfolio of 6 MSFT, Horizon Industrial
                Parks has since then grown into one of India’s leading
                industrial and logistics platforms. Today, we offer one of the
                largest Grade A portfolios in India — 40 parks across 9 key
                markets, covering more than 2,000 acres with 50 million sq. ft.
                of development potential.
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
