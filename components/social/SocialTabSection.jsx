// import React from "react";
// import { motion } from "framer-motion";

// const SocialTabs = () => {
//   return (
//     <div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="bg-white flex md:rounded-2xl lg:rounded-[28px] overflow-hidden"
//       >
//         {spotlight_btn_content.map((btntitle, i) => {
//           const isActive = btntitle.title === acbtn;
//           return (
//             <motion.button
//               key={btntitle.title + " " + String(i)}
//               onClick={() => setAcBtn(btntitle.title)}
//               whileHover="hover"
//               initial="initial"
//               className={clsx(
//                 "relative flex items-center justify-between border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none w-[190px] h-[100px] px-[20px]",
//                 isActive ? "text-white" : "text-black"
//               )}
//             >
//               {/* gradient overlay */}
//               <motion.div
//                 initial={false}
//                 animate={{ opacity: isActive ? 1 : 0 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%)",
//                 }}
//               />
//               {/* content */}
//               <div className="relative z-10 flex items-center justify-between w-full gap-2">
//                 <h2 className="whitespace-nowrap md:text-[16px] lg:text-[20px] xl:text-[23px] bw-r">
//                   {btntitle.title}
//                 </h2>
//                 <span className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] relative overflow-hidden block">
//                   <AnimatePresence mode="wait" initial={false}>
//                     {isActive && (
//                       <motion.img
//                         key="active-icon"
//                         initial={{ y: "100%", x: "-100%", opacity: 0 }}
//                         animate={{ y: 0, x: 0, opacity: 1 }}
//                         exit={{ y: "100%", x: "-100%", opacity: 0 }}
//                         transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//                         src="/whiteexternal.svg"
//                         alt="Active"
//                         className="w-full h-full"
//                       />
//                     )}
//                   </AnimatePresence>
//                 </span>
//               </div>
//             </motion.button>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default SocialTabs;

// "use client";
// import React, { useState } from "react";
// import { socialTabsData } from "./data/socialTabsData";
// import SocialTabs from "./SocialTabs";
// import SocialTabContent from "./SocialTabContent";

// const SocialTabSection = () => {
//   const [activeTab, setActiveTab] = useState(socialTabsData[0].title);

//   return (
//     <section className="w-full  fixup  py-12">
//       {/* Tabs */}
//       <SocialTabs
//         tabs={socialTabsData}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />

//       {/* Tab Content */}
//       <SocialTabContent tabs={socialTabsData} activeTab={activeTab} />
//     </section>
//   );
// };

// export default SocialTabSection;

"use client";
import React, { useState } from "react";
import { socialTabsData } from "./data/socialTabsData";
import SocialTabs from "./SocialTabs";
import SocialTabContent from "./SocialTabContent";
import SocialDropdown from "./SocialDropdown";

const SocialTabSection = () => {
  const [activeTab, setActiveTab] = useState(socialTabsData[0].title);

  return (
    <section className="w-full fixup pb-12 1280:py-[100px]">
      {/* Dropdown for tablets & smaller */}
      <div className="lg:hidden">
        <SocialDropdown
          categories={socialTabsData.map((tab) => tab.label)}
          activeTab={socialTabsData.findIndex((tab) => tab.title === activeTab)}
          setActiveTab={(i) => setActiveTab(socialTabsData[i].title)}
        />
      </div>

      {/* Tabs for larger screens */}
      <div className="hidden lg:flex">
        <SocialTabs
          tabs={socialTabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Tab Content (shared) */}
      <SocialTabContent tabs={socialTabsData} activeTab={activeTab} />
    </section>
  );
};

export default SocialTabSection;
