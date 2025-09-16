// "use client";
// import React from "react";

// const CommunityCard = ({
//   index,
//   activeIndex,
//   setActiveIndex,
//   title,
//   date,
//   image,
//   subtitle,
//   description,
// }) => {
//   const isActive = activeIndex === index;

//   const handleToggle = () => {
//     if (window.innerWidth < 1024) {
//       setActiveIndex(isActive ? null : index); // toggle only on mobile/tablet
//     }
//   };

//   return (

//     <div
//       onClick={handleToggle}
//       className={`relative flex flex-col w-full md:w-[320px]   lg:w-[400px] xl:w-[530px] 2xl:w-[630px]
//   h-auto rounded-[40px_0_40px_40px] overflow-hidden
//   group cursor-pointer transition-all duration-500`}
//     >
//       {/* Image Section */}
//       <div
//         className="relative w-full pb-[56.25%] bg-cover bg-no-repeat transition-opacity duration-500"
//         style={{ backgroundImage: `url(${image})` }}
//       />

//       {/* Date Badge with Glassmorphism */}
//       <div className="absolute top-4 left-4 flex items-center whitespace-nowrap gap-[5px] bg-black/25 backdrop-blur-[3px] text-white px-1.5 py-0.5 1280:px-2.5 1280:py-1.5 1366:px-4 1366:py-2 rounded-none bw-m text-[10px] 1280:text-[14px] 1366:text-[16px] leading-[20px] border border-white/20">
//         <span className="1366:w-[24px] w-[15px] h-[15px] 1280:w-[22px] 1280:h-[22px] 1366:h-[24px]">
//           <img src="/social/cal.svg" className="w-full h-full" alt="" />
//         </span>
//         {date}
//       </div>
//       {/* Gradient Background (fades in on hover/active) */}
//       <div
//         className={`absolute inset-0 rounded-[40px_0_40px_40px] transition-opacity duration-500
//     ${isActive ? "opacity-100" : "opacity-0"}
//     lg:group-hover:opacity-100`}
//         style={{
//           background:
//             "linear-gradient(134deg, #22B148 -19.96%, #772BF2 122.85%), #303030",
//         }}
//       ></div>
//       {/* Gradient Overlay (fades in on hover/active) */}
//       <div
//         className={`absolute inset-0 rounded-[40px_0_40px_40px] pointer-events-none p-[2px] transition-opacity duration-500
//     ${isActive ? "opacity-100" : "opacity-0"}
//     lg:group-hover:opacity-100`}
//         style={{
//           background: "linear-gradient(134deg, #22B148 0%, #772BF2 100%)",
//           boxShadow: "0 0 44px rgba(58, 224, 88, 0.40)",
//           WebkitMask:
//             "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude",
//         }}
//       ></div>

//       {/* Title (visible on initial state) */}
//       <div
//         className={`relative z-10 text-white px-[24px] 1280:py-[42px] 1280:px-[34px] flex flex-col backdrop-blur-xs items-center justify-center w-full bg-white/15 h-[210px] 768:h-[100px] 1024:h-[150px] 1280:h-[180px] 1366:min-h-auto
//   transition-opacity duration-500
//   ${isActive ? "opacity-0" : "opacity-100"}
//   lg:group-hover:opacity-0`}
//       >
//         <h3 className=" text-[18px] lg:text-xl lg:leading-[30px] 1280:text-[28px] 1280:leading-[42px]  1366:text-[28px] bw-m 1366:leading-[42px] ">
//           {title}
//         </h3>
//       </div>

//       {/* Info Box (visible on hover/active) */}
//       <div
//         className={`absolute inset-x-0 top-0 p-[34px] text-white flex flex-col items-start justify-center text-left min-h-[230px] md:min-h-auto
//     transition-opacity duration-500
//     ${isActive ? "opacity-100" : "opacity-0"}
//     lg:group-hover:opacity-100`}
//       >
//         <h3 className="text-lg 1280:text-[28px] 1280:leading-[38px] 1366:text-[28px]  1366:leading-[42px] bw-m ">
//           {subtitle}
//         </h3>

//         <div
//           className="pr-[10px]
//           sm:max-h-[120px]
//           sm:overflow-y-auto
//              1280:max-h-[300px]
//              1280:overflow-y-auto
//              scrollbar-thin
//     scrollbar-thumb-[#22B148]/80
//     scrollbar-track-transparent
//     hover:scrollbar-thumb-[#772BF2]/80 scrollbar-theme"
//         >
//           <div className="text-sm sm:text-[16px] 1280:text-[20px] 1280:leading-[30px] leading-[24px] bw-r pr-[20px] mt-2 space-y-4">
//             {description}
//             {/* <div className="hidden 1280:block absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none" /> */}
//           </div>
//         </div>

//         <button className="mt-[16px] flex uppercase gap-[12px] 1280:gap-[20px] items-center px-[16px] py-[8px] 1280:px-[20px] 1280:py-[10px] 1366:px-[30px] 1366:py-[15px] border-2 border-white bg-transparent text-white rounded-none text-[10px] 1024:text-[12px] 1280:leading-[24px] bw-sb 1280:text-[14px] tracking-[0.1em]  transition">
//           Watch Video{" "}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 18 21" // Keep viewBox to define the coordinate system
//             className="w-full h-auto max-w-[12px] md:max-w-[12px] 1280:max-w-[16px]" // Responsive sizing
//             fill="none"
//           >
//             <path
//               d="M16.6953 9.32324L2.625 0.71582C2.38778 0.570559 2.11608 0.491258 1.83797 0.486108C1.55985 0.480957 1.2854 0.550144 1.04297 0.686523C0.802842 0.820783 0.602809 1.01658 0.463441 1.25378C0.324074 1.49098 0.250401 1.76102 0.25 2.03613V19.249C0.251809 19.6617 0.417416 20.0568 0.710414 20.3474C1.00341 20.638 1.39982 20.8004 1.8125 20.7988C2.10054 20.7987 2.38299 20.7193 2.62891 20.5693L16.6953 11.9619C16.9214 11.8241 17.1083 11.6305 17.2379 11.3996C17.3676 11.1687 17.4357 10.9083 17.4357 10.6436C17.4357 10.3788 17.3676 10.1184 17.2379 9.88754C17.1083 9.65666 16.9214 9.46301 16.6953 9.32519V9.32324Z"
//               fill="white"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CommunityCard;
//
//
//
//
//
//
//
//
// "use client";
// import React from "react";

// const CommunityCard = ({
//   index,
//   activeIndex,
//   setActiveIndex,
//   title,
//   date,
//   image,
//   subtitle,
//   description,
// }) => {
//   const isActive = activeIndex === index;

//   const handleToggle = () => {
//     if (window.innerWidth < 1024) {
//       setActiveIndex(isActive ? null : index);
//     }
//   };

//   return (
//     <div
//       onClick={handleToggle}
//       className={`
//         relative flex flex-col w-full md:w-[320px] lg:w-[400px] xl:w-[530px] 2xl:w-[630px]
//         rounded-[20px_0_20px_20px] 1024:rounded-[40px_0_40px_40px] overflow-hidden
//         group cursor-pointer transition-all duration-500
//         1024:h-[400px]
//         1280:h-[450px]
//         1366:h-[528px] 2xl:h-[528px]
//         bg-[#0b0b0b]
//       `}
//     >
//       {/* IMAGE + TITLE WRAPPER */}
//       <div className="flex flex-col h-full">
//         {/* Image Section */}
//         <div
//           className={`
//             w-full bg-cover bg-no-repeat transition-opacity duration-500
//             1024:h-[280px]
//             1280:h-[320px]
//             1366:h-[350px] h-[220px]
//             1536:h-[380px]
//           `}
//           style={{ backgroundImage: `url(${image})` }}
//         />

//         {/* Title */}
//         <div
//           className={`relative z-10 text-white px-[16px] sm:px-[24px] py-4 1024:py-4 1280:py-8 1366:p-[34px] 1536:p-[28px] flex flex-col items-start justify-center w-full bg-white/15
//           transition-opacity duration-500 flex-1
//           ${isActive ? "opacity-0" : "opacity-100"}
//           lg:group-hover:opacity-0`}
//         >
//           <h3 className="text-[18px] lg:text-xl lg:leading-[30px] 1280:text-[28px] 1280:leading-[38px] 1366:text-[28px] bw-m 1366:leading-[42px] ">
//             {title}
//           </h3>
//         </div>
//       </div>

//       {/* Date Badge */}
//       <div className="absolute top-4 left-4 flex items-center whitespace-nowrap gap-[5px] bg-black/25 backdrop-blur-[3px] text-white px-1.5 py-0.5 1280:px-2.5 1280:py-1.5 1366:px-4 1366:py-2 rounded-none bw-m text-[10px] 1280:text-[14px] 1366:text-[16px] leading-[20px] border border-white/20">
//         <span className="1366:w-[24px] w-[15px] h-[15px] 1280:w-[22px] 1280:h-[22px] 1366:h-[24px]">
//           <img src="/social/cal.svg" className="w-full h-full" alt="" />
//         </span>
//         {date}
//       </div>

//       {/* Gradient Background */}
//       <div
//         className={`absolute inset-0 rounded-[20px_0_20px_20px] 1024:rounded-[40px_0_40px_40px] transition-opacity duration-500
//         ${isActive ? "opacity-100" : "opacity-0"}
//         lg:group-hover:opacity-100`}
//         style={{
//           background:
//             "linear-gradient(134deg, #22B148 -19.96%, #772BF2 122.85%), #303030",
//         }}
//       />

//       {/* Gradient Border Overlay */}
//       <div
//         className={`absolute inset-0 rounded-[20px_0_20px_20px] 1024:rounded-[40px_0_40px_40px] pointer-events-none p-[2px] transition-opacity duration-500
//         ${isActive ? "opacity-100" : "opacity-0"}
//         lg:group-hover:opacity-100`}
//         style={{
//           background: "linear-gradient(134deg, #22B148 0%, #772BF2 100%)",
//           boxShadow: "0 0 44px rgba(58, 224, 88, 0.40)",
//           WebkitMask:
//             "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude",
//         }}
//       />

//       {/* Hover Info Box */}
//       <div
//         className={`absolute inset-0 p-[16px] 768:p-[25px] 1280:p-[34px] gap-1.5 text-white flex flex-col items-start justify-center 768:justify-center 1280:justify-around 1366:justify-center text-left
//           transition-opacity duration-500
//           ${isActive ? "opacity-100" : "opacity-0"}
//           lg:group-hover:opacity-100`}
//       >
//         <h3 className="text-lg leading-[24px] 1024:text-[22px] 1024:leading-[30px] 1280:text-[28px] 1280:leading-[38px] 1366:text-[28px]  1366:leading-[42px] bw-m ">
//           {subtitle}
//         </h3>

//         <div
//           className=" 1280:pr-[10px]
//           max-h-[160px]
//           overflow-y-auto
//             sm:max-h-[165px] sm:overflow-y-auto
//              1024:max-h-[230px]
//             1280:max-h-[260px] 1366:max-h-[320px]

//             scrollbar-thin
//             scrollbar-thumb-[#22B148]/80
//             scrollbar-track-transparent
//             hover:scrollbar-thumb-[#772BF2]/80 scrollbar-theme"
//         >
//           <div className="text-sm sm:text-[16px] 1280:text-[20px] 1280:leading-[30px] leading-[24px] bw-r pr-2 1280:pr-[10px] mt-0 space-y-4">
//             {description}
//           </div>
//         </div>

//         <button className=" mt-[5px] 1280:mt-[10px] flex uppercase gap-[12px] 1280:gap-[20px] items-center px-[16px] py-[8px] 1280:px-[20px] 1280:py-[10px] 1366:px-[30px] 1366:py-[15px] border-2 border-white bg-transparent text-white rounded-none text-[10px] 1024:text-[12px] 1280:leading-[24px] bw-sb 1280:text-[14px] tracking-[0.1em] transition">
//           Watch Video{" "}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 18 21"
//             className="w-full h-auto max-w-[12px] md:max-w-[12px] 1280:max-w-[16px]"
//             fill="none"
//           >
//             <path
//               d="M16.6953 9.32324L2.625 0.71582C2.38778 0.570559 2.11608 0.491258 1.83797 0.486108C1.55985 0.480957 1.2854 0.550144 1.04297 0.686523C0.802842 0.820783 0.602809 1.01658 0.463441 1.25378C0.324074 1.49098 0.250401 1.76102 0.25 2.03613V19.249C0.251809 19.6617 0.417416 20.0568 0.710414 20.3474C1.00341 20.638 1.39982 20.8004 1.8125 20.7988C2.10054 20.7987 2.38299 20.7193 2.62891 20.5693L16.6953 11.9619C16.9214 11.8241 17.1083 11.6305 17.2379 11.3996C17.3676 11.1687 17.4357 10.9083 17.4357 10.6436C17.4357 10.3788 17.3676 10.1184 17.2379 9.88754C17.1083 9.65666 16.9214 9.46301 16.6953 9.32519V9.32324Z"
//               fill="white"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CommunityCard;
//
//
//
//
//
//
//
// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const CommunityCard = ({
//   index,
//   activeIndex,
//   setActiveIndex,
//   title,
//   date,
//   image,
//   subtitle,
//   description,
// }) => {
//   const isActive = activeIndex === index;

//   const handleToggle = () => {
//     if (window.innerWidth < 1024) {
//       setActiveIndex(isActive ? null : index);
//     }
//   };

//   return (
//     <div
//       onClick={handleToggle}
//       className={`
//         relative flex flex-col w-full md:w-[320px] lg:w-[400px] xl:w-[530px] 2xl:w-[630px]
//         rounded-[20px_0_20px_20px] 1024:rounded-[40px_0_40px_40px] overflow-hidden
//         group cursor-pointer transition-all duration-500
//         1024:h-[400px]
//         1280:h-[450px]
//         1366:h-[528px] 2xl:h-[528px]
//         bg-[#0b0b0b]
//       `}
//     >
//       {/* IMAGE */}
//       <div
//         className="w-full bg-cover bg-no-repeat transition-opacity duration-500
//           1024:h-[280px]
//           1280:h-[320px]
//           1366:h-[350px] h-[220px]
//           1536:h-[380px]"
//         style={{ backgroundImage: `url(${image})` }}
//       />

//       {/* TITLE BOX (always mounted, fades out like image stays) */}

//       {/* DATE BADGE */}
//       <div className="absolute top-4 left-4 flex items-center whitespace-nowrap gap-[5px] bg-black/25 backdrop-blur-[3px] text-white px-1.5 py-0.5 1280:px-2.5 1280:py-1.5 1366:px-4 1366:py-2 rounded-none bw-m text-[10px] 1280:text-[14px] 1366:text-[16px] leading-[20px] border border-white/20">
//         <span className="1366:w-[24px] w-[15px] h-[15px] 1280:w-[22px] 1280:h-[22px] 1366:h-[24px]">
//           <img src="/social/cal.svg" className="w-full h-full" alt="" />
//         </span>
//         {date}
//       </div>

//       {/* GRADIENT BACKGROUND */}
//       <div
//         className={`absolute inset-0 rounded-[20px_0_20px_20px]
//           1024:rounded-[40px_0_40px_40px] transition-opacity duration-500
//           ${isActive ? "opacity-100" : "opacity-0"}
//           group-hover:opacity-100`}
//         style={{
//           background:
//             "linear-gradient(134deg, #22B148 -19.96%, #772BF2 122.85%), #303030",
//         }}
//       />

//       {/* BORDER GRADIENT */}
//       <div
//         className={`absolute inset-0 rounded-[20px_0_20px_20px]
//           1024:rounded-[40px_0_40px_40px] pointer-events-none p-[2px]
//           transition-opacity duration-500
//           ${isActive ? "opacity-100" : "opacity-0"}
//           group-hover:opacity-100`}
//         style={{
//           background: "linear-gradient(134deg, #22B148 0%, #772BF2 100%)",
//           boxShadow: "0 0 44px rgba(58, 224, 88, 0.40)",
//           WebkitMask:
//             "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude",
//         }}
//       />
//       {/* TITLE BOX (always mounted, fades out like image, doesn’t block hover) */}
//       <div
//         className={`relative text-white px-[16px] sm:px-[24px] py-4
//     1024:py-4 1280:py-8 1366:p-[34px] 1536:p-[28px]
//     flex flex-col items-start justify-center w-full backdrop-blur-[12px]

//     bg-white/10 flex-1
//     transition-opacity duration-500
//     ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}
//     group-hover:opacity-0 group-hover:pointer-events-none`}
//       >
//         <h3
//           className="text-[18px] lg:text-xl lg:leading-[30px]
//     1280:text-[28px] 1280:leading-[38px]
//     1366:text-[28px] 1366:leading-[42px] bw-m"
//         >
//           {title}
//         </h3>
//       </div>
//       {/* HOVER INFO BOX */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//         whileHover={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: [0.25, 0.8, 0.5, 1], delay: 0.15 }}
//         className="absolute inset-0 p-[16px] 768:p-[25px] 1280:p-[34px]
//           gap-1.5 text-white flex flex-col items-start justify-center text-left
//           opacity-0 group-hover:opacity-100"
//       >
//         <h3
//           className="text-lg leading-[24px] 1024:text-[22px] 1024:leading-[30px]
//           1280:text-[28px] 1280:leading-[38px] 1366:text-[28px]
//           1366:leading-[42px] bw-m"
//         >
//           {subtitle}
//         </h3>

//         <div
//           className="1280:pr-[10px] max-h-[160px] sm:max-h-[165px]
//             1024:max-h-[230px] 1280:max-h-[260px] 1366:max-h-[320px]
//             overflow-y-auto scrollbar-thin
//             scrollbar-thumb-[#22B148]/80
//             scrollbar-track-transparent
//             hover:scrollbar-thumb-[#772BF2]/80 scrollbar-theme"
//         >
//           <div
//             className="text-sm sm:text-[16px]
//             1280:text-[20px] 1280:leading-[30px]
//             leading-[24px] bw-r pr-2 1280:pr-[10px] space-y-4"
//           >
//             {description}
//           </div>
//         </div>

//         <button
//           className="mt-[5px] 1280:mt-[10px] flex uppercase gap-[12px]
//           1280:gap-[20px] items-center px-[16px] py-[8px]
//           1280:px-[20px] 1280:py-[10px] 1366:px-[30px] 1366:py-[15px]
//           border-2 border-white bg-transparent text-white rounded-none
//           text-[10px] 1024:text-[12px] 1280:text-[14px]
//           1280:leading-[24px] bw-sb tracking-[0.1em] transition"
//         >
//           Watch Video{" "}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 18 21"
//             className="w-full h-auto max-w-[12px] md:max-w-[12px] 1280:max-w-[16px]"
//             fill="none"
//           >
//             <path
//               d="M16.6953 9.32324L2.625 0.71582C2.38778 0.570559 2.11608 0.491258 1.83797 0.486108C1.55985 0.480957 1.2854 0.550144 1.04297 0.686523C0.802842 0.820783 0.602809 1.01658 0.463441 1.25378C0.324074 1.49098 0.250401 1.76102 0.25 2.03613V19.249C0.251809 19.6617 0.417416 20.0568 0.710414 20.3474C1.00341 20.638 1.39982 20.8004 1.8125 20.7988C2.10054 20.7987 2.38299 20.7193 2.62891 20.5693L16.6953 11.9619C16.9214 11.8241 17.1083 11.6305 17.2379 11.3996C17.3676 11.1687 17.4357 10.9083 17.4357 10.6436C17.4357 10.3788 17.3676 10.1184 17.2379 9.88754C17.1083 9.65666 16.9214 9.46301 16.6953 9.32519V9.32324Z"
//               fill="white"
//             />
//           </svg>
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default CommunityCard;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const CommunityCard = ({
  index,
  activeIndex,
  setActiveIndex,
  title,
  date,
  image,
  subtitle,
  description,
  video, // pass video src as prop
}) => {
  const isActive = activeIndex === index;

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      setActiveIndex(isActive ? null : index);
    }
  };

  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  return (
    <>
      <div
        onClick={handleToggle}
        className={`
          relative flex flex-col w-full md:w-[320px] lg:w-[400px] xl:w-[530px] 1366:w-[580px] 1440:w-[600px] 2xl:w-[630px]
          rounded-[20px_0_20px_20px] 1024:rounded-[40px_0_40px_40px] overflow-hidden 
          group cursor-pointer transition-all duration-500
          h-[320px]
          1024:h-[400px] 1280:h-[450px] 1366:h-[528px] 2xl:h-[528px]
          bg-[#0b0b0b]
        `}
      >
        {/* Image */}
        <div
          className="w-full bg-cover bg-no-repeat transition-opacity duration-500
            1024:h-[280px] 1280:h-[320px] 1366:h-[350px] h-[250px] 1536:h-[380px]"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Date Badge */}
        <div className="absolute top-4 left-4 flex items-center whitespace-nowrap gap-[5px] bg-black/25 backdrop-blur-[3px] text-white px-4 py-2 rounded-none bw-m text-[14px] xl:text-[16px] leading-[20px] border border-white/20">
          <span className="1366:w-[24px] w-[15px] h-[15px] 1280:w-[22px] 1280:h-[22px] 1366:h-[24px]">
            <img src="/social/cal.svg" className="w-full h-full" alt="" />
          </span>
          {date}
        </div>

        {/* Gradient Background */}
        {/* <div
          className={`absolute inset-0 rounded-[20px_0_20px_20px] 
            1024:rounded-[40px_0_40px_40px] transition-opacity duration-500
            ${isActive ? "opacity-100" : "opacity-0"} 
            group-hover:opacity-100`}
          style={{
            background:
              "linear-gradient(134deg, #22B148 -19.96%, #772BF2 122.85%), #303030",
          }}
        /> */}

        {/* Border Glow */}
        {/* <div
          className={`absolute inset-0 rounded-[20px_0_20px_20px] 
            1024:rounded-[40px_0_40px_40px] pointer-events-none p-[2px] 
            transition-opacity duration-500
            ${isActive ? "opacity-100" : "opacity-0"} 
            group-hover:opacity-100`}
          style={{
            background: "linear-gradient(134deg, #22B148 0%, #772BF2 100%)",
            boxShadow: "0 0 44px rgba(58, 224, 88, 0.40)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        /> */}
        <div
          className={`absolute inset-0 rounded-[20px_0_20px_20px] 
    1024:rounded-[40px_0_40px_40px] transition-opacity duration-500
    ${isActive ? "opacity-100" : "opacity-0"} 
    group-hover:opacity-100`}
          style={{
            background: "linear-gradient(134deg, #2BB04C 0%, #8F53A1 78%)",
          }}
        />

        {/* Border Glow */}
        <div
          className={`absolute inset-0 rounded-[20px_0_20px_20px] 
    1024:rounded-[40px_0_40px_40px] pointer-events-none p-[2px] 
    transition-opacity duration-500
    ${isActive ? "opacity-100" : "opacity-0"} 
    group-hover:opacity-100`}
          style={{
            background: "linear-gradient(134deg, #2BB04C 0%, #8F53A1 78%)",
            boxShadow: "0 0 44px rgba(43, 176, 76, 0.40)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Title Box (shown when not active) */}
        {/* <div
          className={`relative text-white px-[16px] sm:px-[24px] py-4 
          1024:py-4 1280:py-8 1366:p-[34px] 1536:p-[28px] 
          flex flex-col items-start justify-center w-full backdrop-blur-[8px]
          bg-white/10 flex-1
          transition-opacity duration-500
          ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"} 
          group-hover:opacity-0 group-hover:pointer-events-none`}
        >
          <h3 className="text-[18px] lg:text-xl lg:leading-[30px] 1280:text-[28px] 1280:leading-[38px] 1366:text-[32px] 1366:leading-[42px] bw-m">
            {title}
          </h3>
        </div> */}
        <div
          className={`relative text-white px-[16px] sm:px-[24px] py-4 
  1024:py-4 1280:py-8 1366:p-[34px] 1536:p-[28px] 
  flex flex-col items-start justify-center w-full backdrop-blur-[8px]
  bg-white/10 flex-1
  transition-opacity duration-500
  ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"} 
  group-hover:opacity-0 group-hover:pointer-events-none`}
        >
          <h3 className="text-[18px] lg:text-xl lg:leading-[30px] 1280:text-[28px] 1280:leading-[38px] 1366:text-[32px] 1366:leading-[42px] bw-m">
            {title}
          </h3>
        </div>

        {/* Hover/Active Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.5, 1], delay: 0.15 }}
          className="absolute inset-0 p-[16px] 768:p-[25px] 1280:p-[34px] 
            gap-1.5 text-white flex flex-col items-start justify-center text-left
            opacity-0 group-hover:opacity-100"
        >
          <h3 className="text-[21px] leading-[31px] 1024:text-[24px] 1024:leading-[34px] 1280:text-[28px] 1280:leading-[42px]  bw-m">
            {subtitle}
          </h3>

          <div
            className="1280:pr-[10px] max-h-[160px] sm:max-h-[165px] 
              1024:max-h-[230px] 1280:max-h-[260px] 1366:max-h-[320px]
              overflow-y-auto scrollbar-thin 
              scrollbar-thumb-[#22B148]/80 
              scrollbar-track-transparent 
              hover:scrollbar-thumb-[#772BF2]/80 scrollbar-theme"
          >
            <div
              className="text-sm sm:text-[16px] 
              1280:text-[20px] 1280:leading-[30px] 
              leading-[24px] bw-r pr-2 1280:pr-[10px] space-y-4"
            >
              {description}
            </div>
          </div>

          {/* Watch Video Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent card toggle
              setVideoSrc(video);
              setOpen(true);
            }}
            className="mt-[5px] 1280:mt-[10px] flex uppercase gap-[12px] 
              1280:gap-[20px] items-center px-[16px] py-[8px] 
              1280:px-[20px] 1280:py-[10px] 1366:px-[30px] 1366:py-[15px] 
              border-2 border-white bg-transparent text-white rounded-none 
              text-[10px] 1024:text-[12px] 1280:text-[14px] 
              1280:leading-[24px] bw-sb tracking-[0.1em] transition"
          >
            Watch Video{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 21"
              className="w-full h-auto max-w-[12px] md:max-w-[12px] 1280:max-w-[16px]"
              fill="none"
            >
              <path
                d="M16.6953 9.32324L2.625 0.71582C2.38778 0.570559 2.11608 0.491258 1.83797 0.486108C1.55985 0.480957 1.2854 0.550144 1.04297 0.686523C0.802842 0.820783 0.602809 1.01658 0.463441 1.25378C0.324074 1.49098 0.250401 1.76102 0.25 2.03613V19.249C0.251809 19.6617 0.417416 20.0568 0.710414 20.3474C1.00341 20.638 1.39982 20.8004 1.8125 20.7988C2.10054 20.7987 2.38299 20.7193 2.62891 20.5693L16.6953 11.9619C16.9214 11.8241 17.1083 11.6305 17.2379 11.3996C17.3676 11.1687 17.4357 10.9083 17.4357 10.6436C17.4357 10.3788 17.3676 10.1184 17.2379 9.88754C17.1083 9.65666 16.9214 9.46301 16.6953 9.32519V9.32324Z"
                fill="white"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">
          <div className="relative w-[90%] max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded"
              src={videoSrc}
              title="Video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            <button
              className="absolute top-3 right-3 bg-white text-black p-2 z-10 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityCard;
