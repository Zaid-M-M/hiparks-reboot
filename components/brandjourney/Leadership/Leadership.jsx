"use client";
import React from "react";
import Btn from "@/components/global/Btn";
import { motion } from "framer-motion";
import Image from "next/image";

const Leadership = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Floating Blob */}
      <div className="absolute top-[65px] -right-0 z-0 pointer-events-none flex gap-0">
        <motion.div
          className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[219px] xl:h-[226.8px] bg-[#7F56D9] opacity-[0.15] blur-[69px]"
          animate={{
            x: [0, 60, 0, -60, 0], // much larger motion
            y: [0, -40, 0, 40, 0],
          }}
          transition={{
            duration: 12, // slower = smoother
            ease: [0.7, 0, 0.4, 1],
            repeat: Infinity,
          }}
        />

        <motion.div
          className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[295.8px] xl:h-[469.8px] bg-[#22B148] opacity-[0.13] blur-[69px]"
          animate={{
            x: [0, -80, 0, 80, 0],
            y: [0, 50, 0, -50, 0],
          }}
          transition={{
            duration: 14, // different duration so they don’t sync
            ease: [0.7, 0, 0.4, 1],
            repeat: Infinity,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative w-full overflow-hidden fix 1280:pt-[100px] 1280:pb-[55px] pt-[45px] pb-[45px]">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="sec_hd bw-r">
            <span className="bw-m">Leadership</span> Team
          </h1>
          <Btn text="View All" />
        </div>

        {/* Image Section */}
        <div className="flex justify-between md:mt-[49px] mt-[24px]">
          <div className="w-full">
            <Image
              src="/brand_journey/leadership_bg.jpg"
              alt="Leadership Team"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
