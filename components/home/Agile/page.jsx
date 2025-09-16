"use client";
import Btn from "@/components/global/Btn";
import { motion } from "framer-motion";
import React from "react";

const Agile = () => {
  return (
    <div
      className="h-full overflow-hidden  w-full relative py-[45px] sm:py-[80px] 1366:py-[100px] bg-white"
    //   style={{ backgroundImage: "url('/whatnew.webp')" }}
    >
      <div className="flex-col flex sm:flex-row items-start  h-full justify-center gap-[22px] sm:gap-0 sm:justify-between fix w-full">
        <div className="flex flex-col justify-between h-full">
          <motion.h1
            // initial={{ opacity: 0, x: -80 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{
            //   delay: 0.2,
            //   duration: 0.6,
            //   ease: "easeIn",
            // }}
            className="text-[35px] md:text-[45px]  lg:text-[56px] xl:text-[66px] z-10 bw-m lg:leading-[65px] xl:leading-[75px] 1366:leading-[76px]  sm:pb-0 md:leading-[58px] leading-[45px] justify-start 2xl:-mb-36  2xl:pb-[30px] "
          >
            <motion.span
              // initial={{ x: "-100px", opacity: 0 }}
              // whileInView={{ x: "0", opacity: 1 }}
              // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
              // viewport={{ once: true, amount: 0.1 }}
              className="flex items-center gap-2   1280:gap-[20px] whitespace-nowrap tracking-[-0.04em]"
            >
              Agile{" "}
              <motion.div className="relative inline-block overflow-hidden  sm:align-middle w-full max-w-[249px] h-auto">
                <motion.div
                  className="lg:flex hidden justify-start items-end h-[58px] overflow-hidden"
                // initial={{ width: 0 }}
                // whileInView={{ width: "257px" }}
                // viewport={{ once: true, amount: 0.6 }}
                // transition={{
                //   duration: 1,
                //   ease: [0.7, 0, 0.4, 1],
                //   delay: 0.5,
                // }}
                >
                  <img
                    src="/abstract_pattern.svg"
                    alt="Truck"
                    className="object-cover h-[35px] sm:h-[40px]"
                  />
                </motion.div>
                <motion.div
                  className="lg:hidden flex items-center justify-start sm:justify-start h-[35px] sm:h-[40px] overflow-hidden"
                // initial={{ width: 0 }}
                // whileInView={{ width: "102px" }}
                // viewport={{ once: true, amount: 0.6 }}
                // transition={{
                //   duration: 1,
                //   ease: [0.7, 0, 0.4, 1],
                //   delay: 0.5,
                // }}
                >
                  <img
                    src="/abstract_pattern.svg"
                    alt="Truck"
                    className="object-cover h-full"
                  />
                </motion.div>
              </motion.div>
            </motion.span>
            <motion.span
              // initial={{ x: "-100px", opacity: 0 }}
              // whileInView={{ x: "0", opacity: 1 }}
              // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
              // viewport={{ once: true, amount: 0.1 }}
              className="block bw-r whitespace-nowrap  tracking-[-0.04em]"
            >
              For Your Growth
            </motion.span>
          </motion.h1>
        </div>
        <div className="flex flex-col justify-center gap-[14px] sm:gap-[20px] lg:gap-[20px] w-[100%] sm:w-[50%]">
          <motion.p
            // initial={{ y: 30, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ once: true, amount: 0.1 }}
            className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
          >
            From warehousing to industrial clusters — we create ecosystems that
            move goods, enable production, and strengthen India's position in
            global trade. Every decision we make, every space we design, every
            policy we advocate for, is guided by one question: Will this help
            our customer grow?{" "}
          </motion.p>
          <motion.p
            // initial={{ y: 30, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ once: true, amount: 0.1 }}
            className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
          >
            We anticipate challenges, adapt to shifting needs, and align our
            processes so that your goals are never left waiting. Whether it’s
            tailoring spaces, streamlining timelines, or navigating regulatory
            landscapes, we stay flexible—so your operations stay future-ready.{" "}
          </motion.p>
          <motion.p
            // initial={{ y: 30, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ once: true, amount: 0.1 }}
            className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
          >
            Our agility means you can scale with confidence, expand without
            disruption, and build without compromise. Because growth isn’t just
            a milestone for you. It is a shared mission for us.{" "}
          </motion.p>
          <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1, delay: 0.6, ease: [1, 0, 0.35, 1] }}
          // viewport={{ once: true, amount: 0.1 }}
          >
            <Btn text={"Know Us Overview"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Agile;
