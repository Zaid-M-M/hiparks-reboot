"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import ImgHotspot from "./ImgHotspot";
import { AnimatePresence, motion } from "framer-motion";
import AccordionTab from "../imgacc/AccordionTab";
import clsx from "clsx";
import { hotspotsData } from "./HData";

const HCF = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full h-fit bg-[#F5F5F5] overflow-hidden relative">

      <img className="purple_vctr  hidden md:block absolute top-0 right-0 md:top-[-70px]  md:right-[50px] lg:w-[450px] md:w-[350px] w-[300px]" src='/purple_vector.svg' />
      <img className="orange_vctr  hidden md:block absolute top-0 right-0 md:top-[-100px] md:right-[-100px] lg:w-[450px] md:w-[350px] w-[300px]" src='/orange_vector.svg' />

      <img className="green_vctr  hidden md:block absolute top-auto left-0 md:bottom-[-270px]  md:left-[-200px] lg:w-[800px] md:w-[350px] w-[300px]" src='/green_vector.svg' />

      <div className="fix flex flex-col gap-[40px] xl:py-24 py-12">
        <div>
          <h2 className="bw-r lg:text-[64px] md:text-[45px] text-[32px] leading-[120%] tracking-[-2.56px] xl:tracking-[-2.56px]">
            <span>Engineered to Meet </span>
            <span className="bw-m lg:items-center flex lg:flex-row flex-col lg:gap-5 gap-2">
              Global Benchmarks
              <img
                src="/frm2.png"
                className="lg:w-[226px] w-[40%] h-auto lg:h-[58px]"
                alt=""
              />
            </span>
          </h2>
        </div>

        {/* Desktop View */}
        <div className="w-full xl:!flex !hidden h-auto 1440:h-[600px]">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={activeTab}
              className="flex-1"
            >
              <ImgHotspot activeTab={activeTab} hotspots={hotspotsData} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile View */}
        <div className="!block xl:!hidden mt-4">
          <div className="w-full bg-transparent flex">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-[55px] bg-white sm:w-fit w-full grid grid-cols-2 border border-[#00000060] rounded-xl overflow-hidden mb-4"
            >
              {/* Exterior Block */}
              <motion.button
                onClick={() => setActiveTab(1)}
                initial={false}
                animate={{
                  backgroundImage:
                    activeTab === 1
                      ? "linear-gradient(to right, #AC38D9, #F47922)"
                      : "linear-gradient(to right, #ffffff, #ffffff)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={clsx(
                  "relative flex sm:w-fit w-full items-center justify-center px-4 py-2 border-r border-[#CDCDCD] cursor-pointer focus:outline-none"
                )}
              >
                <motion.h2
                  animate={{ color: activeTab === 1 ? "#ffffff" : "#000000" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="text-[14px] md:text-[16px] bw-m text-center leading-[24px]"
                >
                  Exterior Block
                </motion.h2>
              </motion.button>

              {/* Interior Block */}
              <motion.button
                onClick={() => setActiveTab(2)}
                initial={false}
                animate={{
                  backgroundImage:
                    activeTab === 2
                      ? "linear-gradient(to right, #AC38D9, #F47922)"
                      : "linear-gradient(to right, #ffffff, #ffffff)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={clsx(
                  "relative sm:w-fit w-full flex items-center justify-center px-4 py-2 cursor-pointer focus:outline-none"
                )}
              >
                <motion.h2
                  animate={{ color: activeTab === 2 ? "#ffffff" : "#000000" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="text-[14px] md:text-[16px] bw-m text-center leading-[24px]"
                >
                  Interior Block
                </motion.h2>
              </motion.button>
            </motion.div>
          </div>

          {/* Accordion */}
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={activeTab}
              className="flex-1"
            >
              <AccordionTab data={hotspotsData[activeTab]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HCF;
// "use client";
// import React, { useState } from "react";
// import Tabs from "./Tabs";
// import ImgHotspot from "./ImgHotspot";
// import { AnimatePresence, motion } from "framer-motion";
// import AccordionTab from "../imgacc/AccordionTab";
// import clsx from "clsx";
// import { hotspotsData, hotspotsDataMob } from "./HData";

// const HCF = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <div className="w-full h-fit bg-[#F5F5F5]">
//       <div className="fix flex flex-col gap-12 xl:py-24 py-12">
//         <div>
//           <h2 className="bw-r lg:text-[64px] md:text-[45px] text-[32px] leading-[120%]">
//             <span>Infrastructure Designed</span>
//             <span className="bw-m lg:items-center flex lg:flex-row flex-col lg:gap-5 gap-2">
//               To Global Standards
//               <img
//                 src="/frm2.png"
//                 className="lg:w-[226px] w-[40%] h-auto lg:h-[58px]"
//                 alt=""
//               />
//             </span>
//           </h2>
//         </div>

//         {/* Desktop View */}
//         <div className="w-full xl:!flex !hidden h-[600px]">
//           <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
//           <AnimatePresence mode="wait">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               key={activeTab}
//               className="flex-1"
//             >
//               <ImgHotspot activeTab={activeTab} hotspots={hotspotsData} />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Mobile View */}
//         <div className="!block xl:!hidden mt-0">
//           <div className="w-full bg-transparent flex">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//               viewport={{ once: true, amount: 0.2 }}
//               className="h-[55px] bg-white grid grid-cols-2 border border-[#CDCDCD] rounded-xl overflow-hidden mb-4"
//             >
//               {/* Exterior Block */}
//               <motion.button
//                 onClick={() => setActiveTab(1)}
//                 initial={false}
//                 animate={{
//                   backgroundImage:
//                     activeTab === 1
//                       ? "linear-gradient(to right, #AC38D9, #F47922)"
//                       : "linear-gradient(to right, #ffffff, #ffffff)",
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className={clsx(
//                   "relative flex items-center justify-center px-4 py-2 border-r border-[#CDCDCD] cursor-pointer focus:outline-none"
//                 )}
//               >
//                 <motion.h2
//                   animate={{ color: activeTab === 1 ? "#ffffff" : "#000000" }}
//                   transition={{ duration: 0.2, ease: "easeInOut" }}
//                   className="text-[14px] md:text-[16px] bw-m text-center leading-[24px]"
//                 >
//                   Exterior Block
//                 </motion.h2>
//               </motion.button>

//               {/* Interior Block */}
//               <motion.button
//                 onClick={() => setActiveTab(2)}
//                 initial={false}
//                 animate={{
//                   backgroundImage:
//                     activeTab === 2
//                       ? "linear-gradient(to right, #AC38D9, #F47922)"
//                       : "linear-gradient(to right, #ffffff, #ffffff)",
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className={clsx(
//                   "relative flex items-center justify-center px-4 py-2 cursor-pointer focus:outline-none"
//                 )}
//               >
//                 <motion.h2
//                   animate={{ color: activeTab === 2 ? "#ffffff" : "#000000" }}
//                   transition={{ duration: 0.2, ease: "easeInOut" }}
//                   className="text-[14px] md:text-[16px] bw-m text-center leading-[24px]"
//                 >
//                   Interior Block
//                 </motion.h2>
//               </motion.button>
//             </motion.div>
//           </div>

//           {/* Accordion */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               key={activeTab}
//               className="flex-1"
//             >
//               <AccordionTab data={hotspotsDataMob[activeTab]} />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HCF;
