"use client";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className=" relative overflow-hidden">
      <div className="absolute top-[45px] right-0 z-0 pointer-events-none flex gap-[0px]">
        <motion.div
          className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[219px] xl:h-[226.8px] bg-[#0db14b] opacity-[0.15] blur-[69px]"
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
          className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[295.8px] xl:h-[469.8px] bg-[#F47920] opacity-[0.13] blur-[69px]"
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
      <div className="my-20">
        <div className="fix ">
          <div className="flex items-left flex-col md:flex-row md:items-center">
            <h1 className="sec_hd bw-r flex flex-col">
              <span className="flex gap-3 items-center">
                Custom Fit.<br className="block"></br>{" "}
                <img
                  className="1280:h-[58px] 1280:w-[226px] w-[40%] h-auto"
                  src="/abstract_pattern.svg"
                  alt=""
                />
              </span>
              <span className="bw-m">Capital-Light.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-between mt-[40px] lg:mt-[48px] gap-[20px] lg:flex-row lg:items-center">
            <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[20px]">
              <img className="w-[100%]" src="/factory/fact1.jpg"></img>
            </div>
            <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
                We constantly seek ways to streamline processes, eliminate
                inefficiencies, and enhance customer success at every stage of
                facilities development and operations.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
                At Horizon, we understand that setting up a factory comes with
                upfront costs and operational complexities. That’s why our
                Factory & In-plant Solutions are designed to give you a head
                start—without the heavy capital burden.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
                Whether you're a growing manufacturer looking to avoid setup
                delays or a small business needing only a few bays to begin, we
                offer practical, tailored techno-commercial solutions that get
                you operational faster and smarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
