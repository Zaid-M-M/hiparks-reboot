"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Btn from "@/components/global/Btn";

const SocialTabContent = ({ tabs, activeTab }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="w-full h-fit mt-8">
      <AnimatePresence mode="wait">
        {tabs
          .filter((tab) => tab.title === activeTab)
          .map((tab) => (
            <motion.div
              key={tab.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.6, 0, 0.3, 1] }}
              className="grid grid-cols-1 items-start 1280:grid-cols-[minmax(0,800px)_1fr] 1366:grid-cols-[minmax(0,850px)_1fr] 1536:grid-cols-[minmax(0,920px)_1fr]  h-fit gap-6"
            >
              <div className="relative flex w-full 1280:max-w-auto  overflow-hidden">
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`${tab.video}?autoplay=0&title=0&byline=0&portrait=0`}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* <button
                  onClick={togglePlay}
                  className="flex absolute cursor-pointer lg:bottom-5 lg:right-5 bottom-2 right-2 w-fit lg:px-[30px] lg:py-[15px] px-5 py-2 justify-center items-center gap-[10px] 
               bg-[rgba(0,0,0,0.75)] backdrop-blur-[2.5px] transition"
                >
                  <span className="text-white font-[Inter] text-[14px] font-semibold leading-[24px] tracking-[1.4px]">
                    {isPlaying ? "Pause Video" : "Watch Video"}
                  </span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    className="w-[25px] h-[25px] shrink-0"
                  >
                    <path
                      d="M23.1953 11.1812L9.125 2.57373C8.88778 2.42847 8.61608 2.34917 8.33797 2.34402C8.05985 2.33887 7.7854 2.40805 7.54297 2.54443C7.30284 2.67869 7.10281 2.87449 6.96344 3.11169C6.82407 3.34889 6.7504 3.61893 6.75 3.89404V21.1069C6.75181 21.5196 6.91742 21.9147 7.21041 22.2053C7.50341 22.4959 7.89982 22.6583 8.3125 22.6567C8.60054 22.6566 8.88299 22.5772 9.12891 22.4272L23.1953 13.8198C23.4214 13.682 23.6083 13.4884 23.7379 13.2575C23.8676 13.0266 23.9357 12.7663 23.9357 12.5015C23.9357 12.2367 23.8676 11.9763 23.7379 11.7454C23.6083 11.5146 23.4214 11.3209 23.1953 11.1831V11.1812Z"
                      fill="white"
                    />
                  </svg>
                </button> */}
              </div>

              {/* Right description */}
              <div className="flex flex-col items-start">
                <p className="text-[16px] leading-[26px] xl:pr-[26px] lg:text-[20px] lg:leading-[32px] text-gray-800">
                  {tab.description}
                </p>
                <div className="mt-3">
                  {tab.btnLabel && tab.btnLink && (
                    <div className="mt-3">
                      <Btn text={tab.btnLabel} link={tab.btnLink} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default SocialTabContent;
