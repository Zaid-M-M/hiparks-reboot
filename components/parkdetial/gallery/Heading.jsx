// "use client";

// import { motion } from "framer-motion";
// import { useEffect } from "react";

// const Heading = ({
//   heading,
//   acbtn,
//   setAcBtn,
//   showPhotos = false,
//   showRenders = false,
//   showVids = false,
// }) => {
//   // Always enforce order: Renders → Photos → Videos
//   const spotlight_btn_content = [
//     showPhotos && { title: "Photos" },
//     showRenders && { title: "Site Plan" },
//     showVids && { title: "Videos" },
//   ].filter(Boolean);

//   // Ensure the first available tab is active
//   useEffect(() => {
//     if (spotlight_btn_content.length > 0) {
//       const firstTab = spotlight_btn_content[0].title;
//       if (!acbtn || !spotlight_btn_content.some((t) => t.title === acbtn)) {
//         setAcBtn(firstTab);
//       }
//     }
//   }, [spotlight_btn_content, acbtn, setAcBtn]);

//   return (
//     <div className="pb-[20px] relative mb-[60px] whitespace-nowrap fix flex-nowrap">
//       <div className="lg:flex hidden items-center justify-between w-full lg:gap-0 gap-[20px] relative z-20">
//         <h2 className="inline-block w-fit text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px] bw-m bg-[linear-gradient(111deg,#AC38D9,#F47922)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap">
//           {heading}
//         </h2>
//         <div
//           className="flex gap-[5px] overflow-x-auto scrollbar"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           {spotlight_btn_content.map((btntitle, index) => (
//             <button
//               onClick={() => setAcBtn(btntitle.title)}
//               key={btntitle.title + " " + String(index)}
//               className={`px-[12px] cursor-pointer text-[16px] transition-colors duration-500 fsans-600 py-[10px] flex-1 flex items-center justify-center rounded-[10px] border-[#092241] border-opacity-30 border ${
//                 acbtn === btntitle.title
//                   ? "bg-[#E30613] border-[#E30613] text-[#fff] text-opacity-100"
//                   : "text-[#092241] text-opacity-50"
//               }`}
//             >
//               {btntitle.title}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="lg:hidden flex flex-col justify-between w-full lg:gap-0 gap-[20px] relative z-20">
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#092241] tbhead">
//           {heading}
//         </h2>
//         <div
//           className="flex gap-0  scrollbar"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           {spotlight_btn_content.map((btntitle, index) => (
//             <button
//               onClick={() => setAcBtn(btntitle.title)}
//               key={btntitle.title + " " + String(index)}
//               className={`px-[12px] text-[16px] fsans-600 py-[10px] flex-1 flex items-center justify-center
//       border-b-[4px] lg:border lg:rounded-[10px] rounded-none
//       ${
//         acbtn === btntitle.title
//           ? "text-[#E30613] border-b-[#E30613] lg:bg-[#E30613] lg:text-[#fff] lg:border-[#E30613]"
//           : "text-[#092241] text-opacity-50 border-b-[#092241] border-opacity-30 lg:border-opacity-30"
//       }`}
//             >
//               {btntitle.title}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heading;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect } from "react";
// import clsx from "clsx";

// const arrowHoverVariants = {
//   initial: { opacity: 0, x: "-100%", y: "100%" },
//   hover: { opacity: 1, x: 0, y: 0, transition: { duration: 0.3 } },
// };

// const Heading = ({
//   heading,
//   acbtn,
//   setAcBtn,
//   showPhotos = false,
//   showRenders = false,
//   showVids = false,
// }) => {
//   const spotlight_btn_content = [
//     showPhotos && { title: "Photos" },
//     showRenders && { title: "Site Plan" },
//     showVids && { title: "Videos" },
//   ].filter(Boolean);

//   useEffect(() => {
//     if (spotlight_btn_content.length > 0) {
//       const firstTab = spotlight_btn_content[0].title;
//       if (!acbtn || !spotlight_btn_content.some((t) => t.title === acbtn)) {
//         setAcBtn(firstTab);
//       }
//     }
//   }, [spotlight_btn_content, acbtn, setAcBtn]);

//   return (
//     <div className="relative pb-[50px] whitespace-nowrap fix flex-nowrap">
//       <div className="lg:flex hidden items-center justify-between w-full lg:gap-0 gap-[20px] relative z-20">
//         <h2 className="inline-block w-fit text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px] bw-m bg-[linear-gradient(111deg,#AC38D9,#F47922)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap">
//           Park <span className="bw-r">Gallery</span>
//         </h2>

//         {/* Tabs */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="bg-white flex md:rounded-2xl lg:rounded-[28px] overflow-hidden"
//         >
//           {spotlight_btn_content.map((btntitle, i) => {
//             const isActive = btntitle.title === acbtn;

//             return (
//               <motion.button
//                 key={btntitle.title + " " + String(i)}
//                 onClick={() => setAcBtn(btntitle.title)}
//                 whileHover="hover"
//                 initial="initial"
//                 className={clsx(
//                   "relative flex items-center justify-between border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none w-[190px] h-[100px] px-[20px]",
//                   isActive ? "text-white" : "text-black"
//                 )}
//               >
//                 {/* gradient overlay */}
//                 <motion.div
//                   initial={false}
//                   animate={{ opacity: isActive ? 1 : 0 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="absolute inset-0"
//                   style={{
//                     background:
//                       "linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%)",
//                   }}
//                 />

//                 {/* content */}
//                 <div className="relative z-10 flex items-center justify-between w-full gap-2">
//                   <h2 className="whitespace-nowrap md:text-[16px] lg:text-[20px] xl:text-[23px] bw-r">
//                     {btntitle.title}
//                   </h2>

//                   <span className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] relative overflow-hidden block">
//                     <AnimatePresence mode="wait" initial={false}>
//                       {isActive && (
//                         <motion.img
//                           key="active-icon"
//                           initial={{ y: "100%", x: "-100%", opacity: 0 }}
//                           animate={{ y: 0, x: 0, opacity: 1 }}
//                           exit={{ y: "100%", x: "-100%", opacity: 0 }}
//                           transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//                           src="/whiteexternal.svg"
//                           alt="Active"
//                           className="w-full h-full"
//                         />
//                       )}
//                     </AnimatePresence>
//                   </span>
//                 </div>
//               </motion.button>
//             );
//           })}
//         </motion.div>
//       </div>

//       {/* Mobile stays same */}
//       <div className="lg:hidden flex flex-col justify-between w-full lg:gap-0 gap-[20px] relative z-20">
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#092241] tbhead">
//           {heading}
//         </h2>
//         <div
//           className="flex gap-0 scrollbar"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           {spotlight_btn_content.map((btntitle, index) => (
//             <button
//               onClick={() => setAcBtn(btntitle.title)}
//               key={btntitle.title + " " + String(index)}
//               className={`px-[12px] text-[16px] fsans-600 py-[10px] flex-1 flex items-center justify-center
//                 border-b-[4px] lg:border lg:rounded-[10px] rounded-none
//                 ${
//                   acbtn === btntitle.title
//                     ? "text-[#E30613] border-b-[#E30613] lg:bg-[#E30613] lg:text-[#fff] lg:border-[#E30613]"
//                     : "text-[#092241] text-opacity-50 border-b-[#092241] border-opacity-30 lg:border-opacity-30"
//                 }`}
//             >
//               {btntitle.title}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heading;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect } from "react";
// import clsx from "clsx";

// const Heading = ({
//   heading,
//   acbtn,
//   setAcBtn,
//   showPhotos = false,
//   showRenders = false,
//   showVids = false,
// }) => {
//   const spotlight_btn_content = [
//     showPhotos && { title: "Photos" },
//     showRenders && { title: "Site Plan" },
//     showVids && { title: "Videos" },
//   ].filter(Boolean);

//   useEffect(() => {
//     if (spotlight_btn_content.length > 0) {
//       const firstTab = spotlight_btn_content[0].title;
//       if (!acbtn || !spotlight_btn_content.some((t) => t.title === acbtn)) {
//         setAcBtn(firstTab);
//       }
//     }
//   }, [spotlight_btn_content, acbtn, setAcBtn]);

//   return (
//     <div className="relative pb-5 md:pb-[50px]">
//       {/* Desktop layout */}
//       <div className="lg:flex hidden items-center justify-between w-full gap-[20px] relative z-20">
//         <h2 className="inline-block w-fit text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px] bw-m bg-[linear-gradient(111deg,#AC38D9,#F47922)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap">
//           Park <span className="bw-r">Gallery</span>
//         </h2>

//         {/* Tabs row */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="bg-white flex md:rounded-2xl lg:rounded-[28px] overflow-hidden"
//         >
//           {spotlight_btn_content.map((btntitle, i) => {
//             const isActive = btntitle.title === acbtn;

//             return (
//               <motion.button
//                 key={btntitle.title + " " + String(i)}
//                 onClick={() => setAcBtn(btntitle.title)}
//                 className={clsx(
//                   "relative flex items-center justify-between border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none w-[190px] h-[100px] px-[20px]",
//                   isActive ? "text-white" : "text-black"
//                 )}
//               >
//                 {/* gradient overlay */}
//                 <motion.div
//                   initial={false}
//                   animate={{ opacity: isActive ? 1 : 0 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="absolute inset-0"
//                   style={{
//                     background:
//                       "linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%)",
//                   }}
//                 />

//                 {/* content */}
//                 <div className="relative z-10 flex items-center justify-between w-full gap-2">
//                   <h2 className="whitespace-nowrap md:text-[16px] lg:text-[20px] xl:text-[23px] bw-r">
//                     {btntitle.title}
//                   </h2>

//                   <span className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] relative overflow-hidden block">
//                     <AnimatePresence mode="wait" initial={false}>
//                       {isActive && (
//                         <motion.img
//                           key="active-icon"
//                           initial={{ y: "100%", x: "-100%", opacity: 0 }}
//                           animate={{ y: 0, x: 0, opacity: 1 }}
//                           exit={{ y: "100%", x: "-100%", opacity: 0 }}
//                           transition={{
//                             duration: 0.3,
//                             ease: [0.7, 0, 0.4, 1],
//                           }}
//                           src="/whiteexternal.svg"
//                           alt="Active"
//                           className="w-full h-full"
//                         />
//                       )}
//                     </AnimatePresence>
//                   </span>
//                 </div>
//               </motion.button>
//             );
//           })}
//         </motion.div>
//       </div>

//       {/* Mobile layout */}
//       <div className="lg:hidden flex flex-col gap-6 relative z-20">
//         <h2 className="text-[35px] leading-[42px] bw-m bg-[linear-gradient(111deg,#AC38D9,#F47922)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap">
//           Park <span className="bw-r">Gallery</span>
//         </h2>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="bg-white flex rounded-[16px] overflow-hidden w-full"
//         >
//           {spotlight_btn_content.map((btntitle, i) => {
//             const isActive = btntitle.title === acbtn;

//             return (
//               <motion.button
//                 key={btntitle.title + " " + String(i)}
//                 onClick={() => setAcBtn(btntitle.title)}
//                 className={clsx(
//                   "relative flex items-center justify-between border-b border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none w-full h-[60px] px-[16px]",
//                   isActive ? "text-white" : "text-black"
//                 )}
//               >
//                 {/* gradient overlay */}
//                 <motion.div
//                   initial={false}
//                   animate={{ opacity: isActive ? 1 : 0 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="absolute inset-0"
//                   style={{
//                     background:
//                       "linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%)",
//                   }}
//                 />

//                 {/* content */}
//                 <div className="relative z-10 flex items-center justify-between w-full gap-2">
//                   <h2 className="whitespace-nowrap text-[16px] bw-r">
//                     {btntitle.title}
//                   </h2>

//                   <span className="w-[20px] h-[20px] relative overflow-hidden block">
//                     <AnimatePresence mode="wait" initial={false}>
//                       {isActive && (
//                         <motion.img
//                           key="active-icon"
//                           initial={{ y: "100%", x: "-100%", opacity: 0 }}
//                           animate={{ y: 0, x: 0, opacity: 1 }}
//                           exit={{ y: "100%", x: "-100%", opacity: 0 }}
//                           transition={{
//                             duration: 0.3,
//                             ease: [0.7, 0, 0.4, 1],
//                           }}
//                           src="/whiteexternal.svg"
//                           alt="Active"
//                           className="w-full h-full"
//                         />
//                       )}
//                     </AnimatePresence>
//                   </span>
//                 </div>
//               </motion.button>
//             );
//           })}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Heading;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect } from "react";
// import clsx from "clsx";

// const Heading = ({
//   heading,
//   acbtn,
//   setAcBtn,
//   showPhotos = false,
//   showRenders = false,
//   showVids = false,
// }) => {
//   const spotlight_btn_content = [
//     showPhotos && { title: "Photos" },
//     showRenders && { title: "Site Plan" },
//     showVids && { title: "Videos" },
//   ].filter(Boolean);

//   useEffect(() => {
//     if (spotlight_btn_content.length > 0) {
//       const firstTab = spotlight_btn_content[0].title;
//       if (!acbtn || !spotlight_btn_content.some((t) => t.title === acbtn)) {
//         setAcBtn(firstTab);
//       }
//     }
//   }, [spotlight_btn_content, acbtn, setAcBtn]);

//   return (
//     <div className="relative pb-5 md:pb-[50px]">
//       {/* Desktop layout */}
//       <div className="lg:flex hidden items-center justify-between w-full gap-[20px] relative z-20">
//         <h2 className="inline-block w-fit text-[26px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] 1440:text-[56px] 1440:leading-[66px] bw-m bg-[linear-gradient(111deg,#AC38D9,#F47922)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap">
//           Park <span className="bw-r">Gallery</span>
//         </h2>

//         {/* Tabs row */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="bg-white flex md:rounded-2xl lg:rounded-[28px] overflow-hidden"
//         >
//           {spotlight_btn_content.map((btntitle, i) => {
//             const isActive = btntitle.title === acbtn;

//             return (
//               <motion.button
//                 key={btntitle.title + " " + String(i)}
//                 onClick={() => setAcBtn(btntitle.title)}
//                 className={clsx(
//                   "relative flex items-center justify-between border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none w-[190px] h-[100px] px-[20px]",
//                   isActive ? "text-white" : "text-black"
//                 )}
//               >
//                 {/* gradient overlay */}
//                 <motion.div
//                   initial={false}
//                   animate={{ opacity: isActive ? 1 : 0 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="absolute inset-0"
//                   style={{
//                     background:
//                       "linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%)",
//                   }}
//                 />

//                 {/* content */}
//                 <div className="relative z-10 flex items-center justify-between w-full gap-2">
//                   <h2 className="whitespace-nowrap md:text-[16px] lg:text-[20px] xl:text-[23px] bw-r">
//                     {btntitle.title}
//                   </h2>

//                   <span className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] relative overflow-hidden block">
//                     <AnimatePresence mode="wait" initial={false}>
//                       {isActive && (
//                         <motion.img
//                           key="active-icon"
//                           initial={{ y: "100%", x: "-100%", opacity: 0 }}
//                           animate={{ y: 0, x: 0, opacity: 1 }}
//                           exit={{ y: "100%", x: "-100%", opacity: 0 }}
//                           transition={{
//                             duration: 0.3,
//                             ease: [0.7, 0, 0.4, 1],
//                           }}
//                           src="/whiteexternal.svg"
//                           alt="Active"
//                           className="w-full h-full"
//                         />
//                       )}
//                     </AnimatePresence>
//                   </span>
//                 </div>
//               </motion.button>
//             );
//           })}
//         </motion.div>
//       </div>

//       {/* Mobile layout */}
//       <div className="lg:hidden flex md:flex-row md:justify-between flex-col gap-6 relative z-20">
//         <h2 className="text-[35px] leading-[42px] bw-m bg-[linear-gradient(111deg,#AC38D9,#F47922)] bg-clip-text text-transparent font-medium capitalize whitespace-nowrap">
//           Park <span className="bw-r">Gallery</span>
//         </h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="bg-white flex rounded-[16px] overflow-hidden md:w-fit w-full"
//         >
//           {spotlight_btn_content.map((btntitle, i) => {
//             const isActive = btntitle.title === acbtn;

//             return (
//               <motion.button
//                 key={btntitle.title + " " + String(i)}
//                 onClick={() => setAcBtn(btntitle.title)}
//                 className={clsx(
//                   "relative flex items-center transition-colors duration-500 justify-between border-b border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none md:w-[150px] w-full h-[60px] px-[16px]",
//                   isActive ? "text-white" : "text-black"
//                 )}
//                 style={{
//                   background: isActive
//                     ? "linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%)"
//                     : "#ffffff",
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//               >
//                 {/* content */}
//                 <div className="relative z-10 flex items-center justify-between w-full gap-2">
//                   <h2 className="whitespace-nowrap text-[16px] bw-r">
//                     {btntitle.title}
//                   </h2>

//                   <span className="w-[20px] h-[20px] relative overflow-hidden block">
//                     <AnimatePresence mode="wait" initial={false}>
//                       {isActive && (
//                         <motion.img
//                           key="active-icon"
//                           initial={{ y: "100%", x: "-100%", opacity: 0 }}
//                           animate={{ y: 0, x: 0, opacity: 1 }}
//                           exit={{ y: "100%", x: "-100%", opacity: 0 }}
//                           transition={{
//                             duration: 0.3,
//                             ease: [0.7, 0, 0.4, 1],
//                           }}
//                           src="/whiteexternal.svg"
//                           alt="Active"
//                           className="w-full h-full"
//                         />
//                       )}
//                     </AnimatePresence>
//                   </span>
//                 </div>
//               </motion.button>
//             );
//           })}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Heading;
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import clsx from "clsx";

const Heading = ({
  heading,
  acbtn,
  setAcBtn,
  showPhotos = false,
  showRenders = false,
  showVids = false,
}) => {
  const spotlight_btn_content = [
    showPhotos && { title: "Photos" },
    showRenders && { title: "Site Plan" },
    showVids && { title: "Videos" },
  ].filter(Boolean);

  useEffect(() => {
    if (spotlight_btn_content.length > 0) {
      const firstTab = spotlight_btn_content[0].title;
      if (!acbtn || !spotlight_btn_content.some((t) => t.title === acbtn)) {
        setAcBtn(firstTab);
      }
    }
  }, [spotlight_btn_content, acbtn, setAcBtn]);

  return (
    <div className="relative pb-5 md:pb-[50px]">
      {/* Desktop layout */}
      <div className="lg:flex hidden items-center justify-between w-full gap-[20px] relative z-20">
        <h2 className="inline-block w-fit text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:tracking-[-1.92px] lg:text-[48px] lg:leading-[58px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] bw-m txt_gradient bw-m capitalize whitespace-nowrap">
          Park Gallery
        </h2>

        {/* Tabs row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white flex md:rounded-2xl lg:rounded-[28px] overflow-hidden"
        >
          {spotlight_btn_content.map((btntitle, i) => {
            const isActive = btntitle.title === acbtn;

            return (
              <motion.button
                key={btntitle.title + " " + String(i)}
                onClick={() => setAcBtn(btntitle.title)}
                className={clsx(
                  "relative flex items-center justify-between last:border-r-0 border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none w-[150px] xl:w-[190px] h-[70px] xl:h-[100px] px-[20px]",
                  isActive ? "text-white" : "text-black"
                )}
              >
                {/* gradient overlay */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)",
                  }}
                />

                {/* content */}
                <div className="relative z-10 flex items-center justify-between w-full gap-2">
                  <h2
                    className={clsx(
                      "whitespace-nowrap md:text-[16px] transition-colors duration-100 lg:text-[20px] xl:text-[23px] bw-r",
                      isActive ? "text-white" : "text-black"
                    )}
                  >
                    {btntitle.title}
                  </h2>

                  <span className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] relative overflow-hidden block">
                    <AnimatePresence mode="wait" initial={false}>
                      {isActive && (
                        <motion.img
                          key="active-icon"
                          initial={{ y: "100%", x: "-100%", opacity: 0 }}
                          animate={{ y: 0, x: 0, opacity: 1 }}
                          exit={{ y: "100%", x: "-100%", opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.7, 0, 0.4, 1],
                          }}
                          src="/whiteexternal.svg"
                          alt="Active"
                          className="w-full h-full"
                        />
                      )}
                    </AnimatePresence>
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex md:flex-row md:justify-between flex-col gap-6 relative z-20">
        <h2 className="text-[35px] md:text-[45px] md:leading-[55px] leading-[42px] bw-m txt_gradient font-medium capitalize whitespace-nowrap">
          Park Gallery
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white flex rounded-[16px] overflow-hidden md:w-fit w-full"
        >
          {spotlight_btn_content.map((btntitle, i) => {
            const isActive = btntitle.title === acbtn;

            return (
              <motion.button
                key={btntitle.title + " " + String(i)}
                onClick={() => setAcBtn(btntitle.title)}
                className={clsx(
                  "relative flex items-center justify-between border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none md:w-[150px] w-full h-[60px] px-[16px]",
                  isActive ? "text-white" : "text-black"
                )}
                initial={false} // prevent flashing
                animate={{
                  background: isActive
                    ? "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)"
                    : "#ffffff",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* content */}
                <div className="relative z-10 flex items-center justify-between w-full gap-2">
                  <h2 className="whitespace-nowrap text-[16px] bw-r">
                    {btntitle.title}
                  </h2>

                  <span className="w-[20px] h-[20px] relative overflow-hidden block">
                    <AnimatePresence mode="wait" initial={false}>
                      {isActive && (
                        <motion.img
                          key="active-icon"
                          initial={{ y: "100%", x: "-100%", opacity: 0 }}
                          animate={{ y: 0, x: 0, opacity: 1 }}
                          exit={{ y: "100%", x: "-100%", opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.7, 0, 0.4, 1],
                          }}
                          src="/whiteexternal.svg"
                          alt="Active"
                          className="w-full h-full"
                        />
                      )}
                    </AnimatePresence>
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Heading;
