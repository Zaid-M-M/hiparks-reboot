// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import * as flubber from "flubber";
// import { ReactLenis } from "lenis/react";
// import FocusHeader from "./FocusHeader";

// const sectionsContent = [
//   {
//     title: "Right Fitted",
//     paragraph:
//       "Solutions that perfectly fit your logistics needs: across first-mile, mid-mile, and last-mile operations, in strategic locations, and with options ranging from ready-to-move facilities to 100% built-to-suit developments.",
//     link: "/know-us/arrup.svg",
//   },
//   {
//     title: "Hands-On",
//     paragraph:
//       "We adopt a consultative, customer-first approach led by seasoned industry experts, with proven experience across multiple sectors to deliver Grade A parks designed to meet unique customer needs.",
//     link: "/know-us/integration.svg",
//   },
//   {
//     title: "Efficient",
//     paragraph:
//       "Integrated project delivery with 100% compliance and on-time execution, by using cutting-edge tech to streamline land acquisition and speculative developments, with reduced time-to-market for customers.",
//     link: "/know-us/future.svg",
//   },
//   {
//     title: "Sustainable",
//     paragraph:
//       "Green warehousing through energy-efficient design, biodiversity and resource management, fostering inclusive communities via education, healthcare, and jobs for the differently abled, and upholding ethical governance across our partner network. ",
//     link: "/know-us/green.svg",
//   },
//   // {
//   //   title: "On-Time Always",
//   //   paragraph:
//   //     "Optimized locations, expert teams, and agile operations ensure your cargo arrives on time, every time.",
//   //   link: "/know-us/on-time.svg",
//   // },
// ];

// const shapes = [
//   "M0 112V82.8261V55.0326C0 46.7483 6.71573 40.0326 15 40.0326H40.1456C48.4299 40.0326 55.1456 33.3169 55.1456 25.0326V15C55.1456 6.71573 61.8613 0 70.1456 0H127C135.284 0 142 6.71575 142 15V71.9674C142 80.2517 135.284 86.9674 127 86.9674H101.854C93.5701 86.9674 86.8544 93.6831 86.8544 101.967V112C86.8544 120.284 80.1387 127 71.8544 127H15C6.71573 127 0 120.284 0 112Z",
//   "M110.399,98.0076V78.6011 C110.399,72.6469 105.572,67.8198 99.6181,67.8198H69.1203C74.9447,58.1525 78.0556,47.0522 78.0556,35.4761C78.0556,29.5221 73.2283,24.6948 67.2743,24.6948C61.3711,24.6948 56.5753,29.4405 56.4942,35.3246C56.1985,56.8246 42.2919,57.2021 29.8692,69.6243C25.8375,73.6556 24.6942,88.2475 24.1493,93.7948C24.1493,94.0056 24.1493,94.2166 24.1493,94.428C24.1493,115.444 19.3844,132.507 40.4008,132.507H78.0556C95.9185,132.507 110.399,133.245 110.399,115.382V98.0076Z",
//   "M19 61.004L49.2901 91.2929C49.6806 91.6834 50.3138 91.6834 50.7043 91.2929L123 19",
//   "M3 111.801L2.96289 111.5C2.97566 111.499 2.98884 111.5 3.00195 111.5C3.02905 111.499 3.05541 111.498 3.08105 111.498C3.02772 111.694 3 111.801 3 111.801ZM143.245 18.0649C141.247 27.8283 127.363 91.2008 101 104.999C60.5001 126.195 31.5 78.4986 10 96.9985C7.34699 99.2815 5.20646 104.774 4.01953 108.388C4.057 106.555 4.1501 104.043 4.37109 101.227C4.82688 95.4194 5.81893 88.4284 7.92383 83.3843C12.8263 71.6367 22.029 62.6491 32.7461 55.5229C43.4646 48.396 55.6293 43.1748 66.3682 38.9292C81.9794 32.7574 101.3 27.5209 116.742 23.8237C124.458 21.9764 131.196 20.5148 136.004 19.5161C138.408 19.0168 140.33 18.6333 141.649 18.3745C142.309 18.2452 142.818 18.1473 143.162 18.0815C143.191 18.076 143.219 18.07 143.245 18.0649ZM29 16.8013C68.299 -18.1544 132.821 11.5369 142.317 16.2075C142.026 16.2636 141.673 16.3313 141.264 16.4116C139.938 16.6717 138.009 17.0573 135.598 17.5581C130.774 18.5599 124.016 20.0254 116.276 21.8784C100.808 25.582 81.3776 30.8452 65.6328 37.0698C54.8719 41.3241 42.5421 46.6079 31.6387 53.8579C20.734 61.1088 11.1872 70.3717 6.07812 82.6147C3.84381 87.9691 2.83546 95.2284 2.37695 101.071C2.27412 102.381 2.19898 103.626 2.14355 104.77L1.50195 99.4995C1.48018 99.3424 -5.6582 47.6291 29 16.8013ZM143.5 16.8013C143.499 16.8042 143.492 16.8356 143.48 16.895C143.473 16.8551 143.466 16.8171 143.459 16.7808C143.486 16.7948 143.5 16.8013 143.5 16.8013Z",
// ];
// export default function ScrollFocusSections() {
//   const sectionRefs = useRef([]);
//   const [focusedIndex, setFocusedIndex] = useState(0);
//   const [currentPath, setCurrentPath] = useState(shapes[0]);

//   const isAnimatingRef = useRef(false);
//   const pendingIndexRef = useRef(null);

//   const animateShape = (from, to, onComplete) => {
//     const interpolator = flubber.interpolate(from, to, {
//       maxSegmentLength: 2,
//     });

//     let frame = 0;
//     const totalFrames = 30;

//     const animateFrame = () => {
//       const nextPath = interpolator(frame / totalFrames);
//       setCurrentPath(nextPath);
//       frame++;

//       if (frame <= totalFrames) {
//         requestAnimationFrame(animateFrame);
//       } else {
//         onComplete?.();
//       }
//     };

//     animateFrame();
//   };

//   const handleMorph = (nextIndex) => {
//     if (nextIndex === focusedIndex || isAnimatingRef.current) {
//       pendingIndexRef.current = nextIndex;
//       return;
//     }

//     isAnimatingRef.current = true;

//     const from = shapes[focusedIndex];
//     const to = shapes[nextIndex];

//     animateShape(from, to, () => {
//       setFocusedIndex(nextIndex);
//       isAnimatingRef.current = false;

//       if (
//         pendingIndexRef.current !== null &&
//         pendingIndexRef.current !== nextIndex
//       ) {
//         const next = pendingIndexRef.current;
//         pendingIndexRef.current = null;
//         handleMorph(next);
//       }
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const viewportCenter = window.innerHeight / 2;
//       let closest = 0;
//       let minDist = Infinity;

//       sectionRefs.current.forEach((el, i) => {
//         if (!el) return;
//         const rect = el.getBoundingClientRect();
//         const centerY = rect.top + rect.height / 2;
//         const dist = Math.abs(centerY - viewportCenter);
//         if (dist < minDist) {
//           minDist = dist;
//           closest = i;
//         }
//       });

//       handleMorph(closest);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Trigger once on mount

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [focusedIndex]);

//   return (
//     <ReactLenis root>
//       <div
//         className="fix py-[70px]  bg-no-repeat bg-cover bg-center"
//         style={{ backgroundImage: "url('/know-us/gradient.png')" }}
//       >
//         <FocusHeader />
//         <div
//           className="flex w-full min-h-screen bg-white pt-[5%]"
//           // style={{ backgroundImage: "url('/know-us/gradient.png')" }}
//         >
//           {/* Sticky SVG on left */}
//           <div className="w-[20%] bg-inherit flex items-start justify-end pr-6">
//             <div className="sticky top-[300px]">
//               <motion.svg
//                 width="142"
//                 height="127"
//                 viewBox="0 0 142 127"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <defs>
//                   <linearGradient
//                     id="gradientFill"
//                     x1="-24.1263"
//                     y1="151.158"
//                     x2="137.769"
//                     y2="-37.7765"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop offset="0.186217" stopColor="#F47922" />
//                     <stop offset="1" stopColor="#8B37A4" />
//                   </linearGradient>
//                 </defs>
//                 <motion.path
//                   d={currentPath}
//                   fill="url(#gradientFill)"
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                 />
//               </motion.svg>
//             </div>
//           </div>

//           {/* Scrollable content */}
//           <div className="w-[80%] flex flex-col pt-[0px] ">
//             {/* {[...Array(5)].map((_, i) => {
//               const isFocused = focusedIndex === i;
//               return (
//                 <motion.div
//                   key={i}
//                   ref={(el) => (sectionRefs.current[i] = el)}
//                   animate={{
//                     filter: isFocused ? "blur(0px)" : "blur(6px)",
//                     opacity: isFocused ? 1 : 0.5,
//                   }}
//                   transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
//                   className={`h-[232px] px-2 ${
//                     isFocused ? "text-black" : "text-gray-500"
//                   }`}
//                 >
//                   <h2 className="text-[46px] mb-1 bw-m tracking-[-4%]">
//                     Right Fitted
//                   </h2>
//                   <div>
//                     <p className="bw-r text-[24px] tracking-[-4%] ">
//                       Solutions that perfectly fit your logistics needs: across
//                       first-mile, mid-mile, and last-mile operations, in
//                       strategic locations, and with options ranging from
//                       ready-to-move facilities to 100% built-to-suit
//                       developments.
//                       <img src="/know-us/arrup.svg" alt="" />
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })} */}
//             {sectionsContent.map((section, i) => {
//               const isFocused = focusedIndex === i;
//               return (
//                 <motion.div
//                   key={i}
//                   ref={(el) => (sectionRefs.current[i] = el)}
//                   animate={{
//                     filter: isFocused ? "blur(0px)" : "blur(6px)",
//                     opacity: isFocused ? 1 : 0.5,
//                   }}
//                   transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
//                   className={`h-fit px-2 ${
//                     isFocused ? "text-black" : "text-gray-500"
//                   }`}
//                 >
//                   <h2 className="text-[46px] mb-1 bw-m tracking-[-4%]">
//                     {section.title}
//                   </h2>
//                   <div>
//                     <div className="bw-r text-[24px] tracking-[-4%] flex flex-col gap-2">
//                       <p>{section.paragraph}</p>
//                       <img
//                         src="/know-us/arrup.svg"
//                         alt="Arrow icon"
//                         className="w-6 h-6 self-start"
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </ReactLenis>
//   );
// }

//********************************************************************************** */

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import * as flubber from "flubber";
// import { ReactLenis } from "lenis/react";
// import FocusHeader from "./FocusHeader";

// const sectionsContent = [
//   {
//     title: "Right Fitted",
//     paragraph:
//       "Solutions that perfectly fit your logistics needs: across first-mile, mid-mile, and last-mile operations, in strategic locations, and with options ranging from ready-to-move facilities to 100% built-to-suit developments.",
//     link: "/know-us/arrup.svg",
//     fill: "#8A52A0",
//   },
//   {
//     title: "Hands-On",
//     paragraph:
//       "We adopt a consultative, customer-first approach led by seasoned industry experts, with proven experience across multiple sectors to deliver Grade A parks designed to meet unique customer needs.",
//     link: "/know-us/integration.svg",
//     fill: "#F47922",
//   },
//   {
//     title: "Efficient",
//     paragraph:
//       "Integrated project delivery with 100% compliance and on-time execution, by using cutting-edge tech to streamline land acquisition and speculative developments, with reduced time-to-market for customers.",
//     link: "/know-us/future.svg",
//     fill: "#000",
//   },
//   {
//     title: "Sustainable",
//     paragraph:
//       "Green warehousing through energy-efficient design, biodiversity and resource management, fostering inclusive communities via education, healthcare, and jobs for the differently abled, and upholding ethical governance across our partner network. ",
//     link: "/know-us/green.svg",
//     fill: "#22B148",
//   },
// ];

// const shapes = [
//   "M0 112V82.8261V55.0326C0 46.7483 6.71573 40.0326 15 40.0326H40.1456C48.4299 40.0326 55.1456 33.3169 55.1456 25.0326V15C55.1456 6.71573 61.8613 0 70.1456 0H127C135.284 0 142 6.71575 142 15V71.9674C142 80.2517 135.284 86.9674 127 86.9674H101.854C93.5701 86.9674 86.8544 93.6831 86.8544 101.967V112C86.8544 120.284 80.1387 127 71.8544 127H15C6.71573 127 0 120.284 0 112Z",
//   "M33.6557 33.7344H22.8744M109.124 33.7344H98.3432M87.5619 12.1719L98.3432 1.39062M33.6557 1.39062L44.4369 12.1719M63.5548 19.7178C58.8582 19.7044 56.4864 22.1885 56.4145 34.4028C56.3898 44.8449 47.3335 53.4946 40.1999 58.6718C39.4806 59.1938 38.8938 59.8772 38.4865 60.6671C38.0793 61.457 37.863 62.3315 37.855 63.2202C37.7307 81.2039 37.8962 99.1884 38.3514 117.174C38.3811 118.198 38.7002 119.192 39.2718 120.043C39.8434 120.893 40.6441 121.564 41.5813 121.978C50.0154 125.59 64.1905 130.082 84.7265 129.424C87.2376 129.34 89.7473 129.244 92.2554 129.136C101.388 128.721 109.699 121.5 111.796 112.358C114.128 102.001 116.289 91.7096 118.231 81.4944C120.417 70.0236 110.938 59.3681 98.8657 59.1278C91.1915 59.0185 83.5174 58.9436 75.8432 58.9032C75.8432 58.9032 79.4639 51.6056 79.264 39.4296C78.9495 24.8075 68.22 19.7111 63.5548 19.7178ZM4.02728 116.225C4.88529 121.376 9.67846 125.769 15.3094 126.488C17.1707 126.726 19.0319 126.945 20.8932 127.146C25.3697 127.638 34.9594 123.577 34.8134 119.368C34.1096 100.112 33.8528 80.8567 34.043 61.6032C34.0812 57.3873 24.2713 54.988 19.6601 55.3384C17.7464 55.4792 15.8305 55.6349 13.9123 55.8056C8.11068 56.3289 3.37367 60.5224 2.76723 65.6412C0.772694 82.5296 1.2309 99.2675 4.02728 116.225Z",
//   // "M20 6 9 17l-5-5",
//   // "M112.419 15L46.4191 81.0002L15 49.5816",
//   "M11.5486 35.6377C8.43809 36.2416 5.27275 37.3833 3.45568 39.5172C1.46614 41.8536 0.881779 45.6275 0.831735 49.0267C0.759456 53.9362 3.29435 58.3814 6.74227 61.8772L34.4189 89.9382C36.4285 91.9757 38.752 93.7241 41.4768 94.5989C43.0884 95.1164 44.9228 95.5525 46.4557 95.5172C48.2446 95.4759 50.4049 94.7747 52.1605 94.0607C54.3975 93.1508 56.3169 91.6438 58.0126 89.9243L120.255 26.8048C124.267 22.7362 127.048 17.3631 126.23 11.708C125.751 8.39689 124.691 4.96553 122.456 3.01715C119.755 0.663015 115.153 0.313439 111.279 0.539381C106.77 0.802371 102.762 3.19649 99.5539 6.37669L46.4557 59.0172L27.0305 41.0862C22.7793 37.1621 17.228 34.5351 11.5486 35.6377Z",
//   "M3 111.801L2.96289 111.5C2.97566 111.499 2.98884 111.5 3.00195 111.5C3.02905 111.499 3.05541 111.498 3.08105 111.498C3.02772 111.694 3 111.801 3 111.801ZM143.245 18.0649C141.247 27.8283 127.363 91.2008 101 104.999C60.5001 126.195 31.5 78.4986 10 96.9985C7.34699 99.2815 5.20646 104.774 4.01953 108.388C4.057 106.555 4.1501 104.043 4.37109 101.227C4.82688 95.4194 5.81893 88.4284 7.92383 83.3843C12.8263 71.6367 22.029 62.6491 32.7461 55.5229C43.4646 48.396 55.6293 43.1748 66.3682 38.9292C81.9794 32.7574 101.3 27.5209 116.742 23.8237C124.458 21.9764 131.196 20.5148 136.004 19.5161C138.408 19.0168 140.33 18.6333 141.649 18.3745C142.309 18.2452 142.818 18.1473 143.162 18.0815C143.191 18.076 143.219 18.07 143.245 18.0649ZM29 16.8013C68.299 -18.1544 132.821 11.5369 142.317 16.2075C142.026 16.2636 141.673 16.3313 141.264 16.4116C139.938 16.6717 138.009 17.0573 135.598 17.5581C130.774 18.5599 124.016 20.0254 116.276 21.8784C100.808 25.582 81.3776 30.8452 65.6328 37.0698C54.8719 41.3241 42.5421 46.6079 31.6387 53.8579C20.734 61.1088 11.1872 70.3717 6.07812 82.6147C3.84381 87.9691 2.83546 95.2284 2.37695 101.071C2.27412 102.381 2.19898 103.626 2.14355 104.77L1.50195 99.4995C1.48018 99.3424 -5.6582 47.6291 29 16.8013ZM143.5 16.8013C143.499 16.8042 143.492 16.8356 143.48 16.895C143.473 16.8551 143.466 16.8171 143.459 16.7808C143.486 16.7948 143.5 16.8013 143.5 16.8013Z",
// ];
// export default function ScrollFocusSections() {
//   const sectionRefs = useRef([]);
//   const [focusedIndex, setFocusedIndex] = useState(0);
//   const [currentPath, setCurrentPath] = useState(shapes[0]);

//   const isAnimatingRef = useRef(false);
//   const pendingIndexRef = useRef(null);

//   const animateShape = (from, to, onComplete) => {
//     const interpolator = flubber.interpolate(from, to, {
//       maxSegmentLength: 2,
//     });

//     let frame = 0;
//     const totalFrames = 30;

//     const animateFrame = () => {
//       const nextPath = interpolator(frame / totalFrames);
//       setCurrentPath(nextPath);
//       frame++;

//       if (frame <= totalFrames) {
//         requestAnimationFrame(animateFrame);
//       } else {
//         onComplete?.();
//       }
//     };

//     animateFrame();
//   };

//   const handleMorph = (nextIndex) => {
//     if (nextIndex === focusedIndex || isAnimatingRef.current) {
//       pendingIndexRef.current = nextIndex;
//       return;
//     }

//     isAnimatingRef.current = true;

//     const from = shapes[focusedIndex];
//     const to = shapes[nextIndex];

//     animateShape(from, to, () => {
//       setFocusedIndex(nextIndex);
//       isAnimatingRef.current = false;

//       if (
//         pendingIndexRef.current !== null &&
//         pendingIndexRef.current !== nextIndex
//       ) {
//         const next = pendingIndexRef.current;
//         pendingIndexRef.current = null;
//         handleMorph(next);
//       }
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const viewportCenter = window.innerHeight / 2;
//       let closest = 0;
//       let minDist = Infinity;

//       sectionRefs.current.forEach((el, i) => {
//         if (!el) return;
//         const rect = el.getBoundingClientRect();
//         const centerY = rect.top + rect.height / 2;
//         const dist = Math.abs(centerY - viewportCenter);
//         if (dist < minDist) {
//           minDist = dist;
//           closest = i;
//         }
//       });

//       handleMorph(closest);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Trigger once on mount

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [focusedIndex]);

//   return (
//     <ReactLenis root>
//       <div
//         className="fix py-[45px] sm:py-[70px]  bg-no-repeat bg-cover bg-center"
//         style={{ backgroundImage: "url('/know-us/gradient.png')" }}
//       >
//         <FocusHeader />
//         <div
//           className="flex w-full min-h-screen bg-white pt-[5%]"
//           // style={{ backgroundImage: "url('/know-us/gradient.png')" }}
//         >
//           {/* Sticky SVG on left */}
//           <div className="w-[40%] sm:w-[20%] bg-inherit flex items-start pl-5 justify-end 1280:pr-0 1366:pr-0">
//             <div className="sticky top-[300px]">
//               <motion.svg
//                 width="142"
//                 height="127"
//                 viewBox="0 0 200 200"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <motion.path
//                   d={currentPath}
//                   fill={sectionsContent[focusedIndex].fill} // ✅ use hex color
//                   transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//                 />
//               </motion.svg>
//             </div>
//           </div>

//           {/* Scrollable content */}
//           <div className="w-[80%] flex flex-col pt-[0px] ">
//             {sectionsContent.map((section, i) => {
//               const isFocused = focusedIndex === i;
//               return (
//                 <motion.div
//                   key={i}
//                   ref={(el) => (sectionRefs.current[i] = el)}
//                   animate={{
//                     filter: isFocused ? "blur(0px)" : "blur(6px)",
//                     opacity: isFocused ? 1 : 0.5,
//                   }}
//                   transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
//                   className={`h-fit px-2 pb-[60px] ${
//                     isFocused ? "text-black" : "text-gray-500"
//                   }`}
//                 >
//                   <h2 className="bw-r text-[36px] 768:text-[40px] whitespace-nowrap 1024:text-[40px] 1280:text-[42px] 1366:text-[46px] leading-[76px] mb-1 bw-m tracking-[-4%]">
//                     {section.title}
//                   </h2>
//                   <div>
//                     <div className="bw-r bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[26px]  1024:leading-[25px] 1280:leading-[30px] tracking-[-4%] flex flex-col gap-2">
//                       <p>{section.paragraph}</p>
//                       <img
//                         src="/know-us/arrup.svg"
//                         alt="Arrow icon"
//                         className="w-6 h-6 self-start"
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </ReactLenis>
//   );
// }

//************************************************************************ */

"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as flubber from "flubber";
import { ReactLenis } from "lenis/react";
import FocusHeader from "./FocusHeader";

const sectionsContent = [
  {
    title: "Right Fitted",
    paragraph:
      "Solutions that perfectly fit your logistics needs: across first-mile, mid-mile, and last-mile operations, in strategic locations, and with options ranging from ready-to-move facilities to 100% built-to-suit developments.",
    link: "/know-us/arrup.svg",
    fill: "#8A52A0",
  },
  {
    title: "Hands-On",
    paragraph:
      "We adopt a consultative, customer-first approach led by seasoned industry experts, with proven experience across multiple sectors to deliver Grade A parks designed to meet unique customer needs.",
    link: "/know-us/integration.svg",
    fill: "#F47922",
  },
  {
    title: "Efficient",
    paragraph:
      "Integrated project delivery with 100% compliance and on-time execution, by using cutting-edge tech to streamline land acquisition and speculative developments, with reduced time-to-market for customers.",
    link: "/know-us/future.svg",
    fill: "none",
  },
  {
    title: "Sustainable",
    paragraph:
      "Green warehousing through energy-efficient design, biodiversity and resource management, fostering inclusive communities via education, healthcare, and jobs for the differently abled, and upholding ethical governance across our partner network. ",
    link: "/know-us/green.svg",
    fill: "#22B148",
  },
];

// const shapes = [
//   "M6.53689 41.0346C4.70635 41.5748 3.007 42.4105 1.91738 43.6974C0.619196 45.2306 0.0734297 47.5379 -0.102585 49.8186C-0.479249 54.699 2.1541 59.1548 5.58145 62.6497L25.9184 83.3869C27.9258 85.4338 30.2402 87.2362 33.003 88.0018C34.0516 88.2923 35.1534 88.5015 36.1081 88.4794C37.3011 88.4517 38.7019 88.0528 39.9464 87.5879C42.2121 86.7415 44.1244 85.2031 45.8177 83.4762L93.5589 34.7857C97.5456 30.7198 100.494 25.3014 99.225 19.7503C98.7529 17.6859 97.9336 15.7321 96.5382 14.5091C94.7161 12.912 91.8065 12.4686 89.085 12.4812C84.5551 12.5022 80.5313 14.9991 77.3234 18.1975L36.1081 59.2911L22.0182 46.2107C17.7624 42.2598 12.1065 39.3909 6.53689 41.0346Z",
//   "M6.53689 41.0346C4.70635 41.5748 3.007 42.4105 1.91738 43.6974C0.619196 45.2306 0.0734297 47.5379 -0.102585 49.8186C-0.479249 54.699 2.1541 59.1548 5.58145 62.6497L25.9184 83.3869C27.9258 85.4338 30.2402 87.2362 33.003 88.0018C34.0516 88.2923 35.1534 88.5015 36.1081 88.4794C37.3011 88.4517 38.7019 88.0528 39.9464 87.5879C42.2121 86.7415 44.1244 85.2031 45.8177 83.4762L93.5589 34.7857C97.5456 30.7198 100.494 25.3014 99.225 19.7503C98.7529 17.6859 97.9336 15.7321 96.5382 14.5091C94.7161 12.912 91.8065 12.4686 89.085 12.4812C84.5551 12.5022 80.5313 14.9991 77.3234 18.1975L36.1081 59.2911L22.0182 46.2107C17.7624 42.2598 12.1065 39.3909 6.53689 41.0346Z",
//   "M6.53689 41.0346C4.70635 41.5748 3.007 42.4105 1.91738 43.6974C0.619196 45.2306 0.0734297 47.5379 -0.102585 49.8186C-0.479249 54.699 2.1541 59.1548 5.58145 62.6497L25.9184 83.3869C27.9258 85.4338 30.2402 87.2362 33.003 88.0018C34.0516 88.2923 35.1534 88.5015 36.1081 88.4794C37.3011 88.4517 38.7019 88.0528 39.9464 87.5879C42.2121 86.7415 44.1244 85.2031 45.8177 83.4762L93.5589 34.7857C97.5456 30.7198 100.494 25.3014 99.225 19.7503C98.7529 17.6859 97.9336 15.7321 96.5382 14.5091C94.7161 12.912 91.8065 12.4686 89.085 12.4812C84.5551 12.5022 80.5313 14.9991 77.3234 18.1975L36.1081 59.2911L22.0182 46.2107C17.7624 42.2598 12.1065 39.3909 6.53689 41.0346Z",
//   "M6.53689 41.0346C4.70635 41.5748 3.007 42.4105 1.91738 43.6974C0.619196 45.2306 0.0734297 47.5379 -0.102585 49.8186C-0.479249 54.699 2.1541 59.1548 5.58145 62.6497L25.9184 83.3869C27.9258 85.4338 30.2402 87.2362 33.003 88.0018C34.0516 88.2923 35.1534 88.5015 36.1081 88.4794C37.3011 88.4517 38.7019 88.0528 39.9464 87.5879C42.2121 86.7415 44.1244 85.2031 45.8177 83.4762L93.5589 34.7857C97.5456 30.7198 100.494 25.3014 99.225 19.7503C98.7529 17.6859 97.9336 15.7321 96.5382 14.5091C94.7161 12.912 91.8065 12.4686 89.085 12.4812C84.5551 12.5022 80.5313 14.9991 77.3234 18.1975L36.1081 59.2911L22.0182 46.2107C17.7624 42.2598 12.1065 39.3909 6.53689 41.0346Z",
// ];

// const shapes = [
//   "M0 112V82.8261V55.0326C0 46.7483 6.71573 40.0326 15 40.0326H40.1456C48.4299 40.0326 55.1456 33.3169 55.1456 25.0326V15C55.1456 6.71573 61.8613 0 70.1456 0H127C135.284 0 142 6.71575 142 15V71.9674C142 80.2517 135.284 86.9674 127 86.9674H101.854C93.5701 86.9674 86.8544 93.6831 86.8544 101.967V112C86.8544 120.284 80.1387 127 71.8544 127H15C6.71573 127 0 120.284 0 112Z",
//   "M33.6557 33.7344H22.8744M109.124 33.7344H98.3432M87.5619 12.1719L98.3432 1.39062M33.6557 1.39062L44.4369 12.1719M63.5548 19.7178C58.8582 19.7044 56.4864 22.1885 56.4145 34.4028C56.3898 44.8449 47.3335 53.4946 40.1999 58.6718C39.4806 59.1938 38.8938 59.8772 38.4865 60.6671C38.0793 61.457 37.863 62.3315 37.855 63.2202C37.7307 81.2039 37.8962 99.1884 38.3514 117.174C38.3811 118.198 38.7002 119.192 39.2718 120.043C39.8434 120.893 40.6441 121.564 41.5813 121.978C50.0154 125.59 64.1905 130.082 84.7265 129.424C87.2376 129.34 89.7473 129.244 92.2554 129.136C101.388 128.721 109.699 121.5 111.796 112.358C114.128 102.001 116.289 91.7096 118.231 81.4944C120.417 70.0236 110.938 59.3681 98.8657 59.1278C91.1915 59.0185 83.5174 58.9436 75.8432 58.9032C75.8432 58.9032 79.4639 51.6056 79.264 39.4296C78.9495 24.8075 68.22 19.7111 63.5548 19.7178ZM4.02728 116.225C4.88529 121.376 9.67846 125.769 15.3094 126.488C17.1707 126.726 19.0319 126.945 20.8932 127.146C25.3697 127.638 34.9594 123.577 34.8134 119.368C34.1096 100.112 33.8528 80.8567 34.043 61.6032C34.0812 57.3873 24.2713 54.988 19.6601 55.3384C17.7464 55.4792 15.8305 55.6349 13.9123 55.8056C8.11068 56.3289 3.37367 60.5224 2.76723 65.6412C0.772694 82.5296 1.2309 99.2675 4.02728 116.225Z",
//   "M11.5486 35.6377C8.43809 36.2416 5.27275 37.3833 3.45568 39.5172C1.46614 41.8536 0.881779 45.6275 0.831735 49.0267C0.759456 53.9362 3.29435 58.3814 6.74227 61.8772L34.4189 89.9382C36.4285 91.9757 38.752 93.7241 41.4768 94.5989C43.0884 95.1164 44.9228 95.5525 46.4557 95.5172C48.2446 95.4759 50.4049 94.7747 52.1605 94.0607C54.3975 93.1508 56.3169 91.6438 58.0126 89.9243L120.255 26.8048C124.267 22.7362 127.048 17.3631 126.23 11.708C125.751 8.39689 124.691 4.96553 122.456 3.01715C119.755 0.663015 115.153 0.313439 111.279 0.539381C106.77 0.802371 102.762 3.19649 99.5539 6.37669L46.4557 59.0172L27.0305 41.0862C22.7793 37.1621 17.228 34.5351 11.5486 35.6377Z",
//   "M3 111.801L2.96289 111.5C2.97566 111.499 2.98884 111.5 3.00195 111.5C3.02905 111.499 3.05541 111.498 3.08105 111.498C3.02772 111.694 3 111.801 3 111.801ZM143.245 18.0649C141.247 27.8283 127.363 91.2008 101 104.999C60.5001 126.195 31.5 78.4986 10 96.9985C7.34699 99.2815 5.20646 104.774 4.01953 108.388C4.057 106.555 4.1501 104.043 4.37109 101.227C4.82688 95.4194 5.81893 88.4284 7.92383 83.3843C12.8263 71.6367 22.029 62.6491 32.7461 55.5229C43.4646 48.396 55.6293 43.1748 66.3682 38.9292C81.9794 32.7574 101.3 27.5209 116.742 23.8237C124.458 21.9764 131.196 20.5148 136.004 19.5161C138.408 19.0168 140.33 18.6333 141.649 18.3745C142.309 18.2452 142.818 18.1473 143.162 18.0815C143.191 18.076 143.219 18.07 143.245 18.0649ZM29 16.8013C68.299 -18.1544 132.821 11.5369 142.317 16.2075C142.026 16.2636 141.673 16.3313 141.264 16.4116C139.938 16.6717 138.009 17.0573 135.598 17.5581C130.774 18.5599 124.016 20.0254 116.276 21.8784C100.808 25.582 81.3776 30.8452 65.6328 37.0698C54.8719 41.3241 42.5421 46.6079 31.6387 53.8579C20.734 61.1088 11.1872 70.3717 6.07812 82.6147C3.84381 87.9691 2.83546 95.2284 2.37695 101.071C2.27412 102.381 2.19898 103.626 2.14355 104.77L1.50195 99.4995C1.48018 99.3424 -5.6582 47.6291 29 16.8013ZM143.5 16.8013C143.499 16.8042 143.492 16.8356 143.48 16.895C143.473 16.8551 143.466 16.8171 143.459 16.7808C143.486 16.7948 143.5 16.8013 143.5 16.8013Z",
// ];

const shapes = [
  // folder-open (1 path)
  [
    "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
  ],
  // thumbs-up (2 paths)
  [
    "M7 10v12",
    "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
  ],

  // check (1 path)
  ["M20 6 9 17l-5-5"],
  // leaf (2 paths)
  [
    "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
  ],
];

// const shapes = [
//   "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
//   "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
//   "M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z",
//   "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
// ];
// const shapes = [
//   "M0 112V55C0 46 6 40 15 40H40C48 40 55 33 55 25V15C55 6 62 0 70 0H127C135 0 142 6 142 15V72C142 80 135 87 127 87H102C94 87 87 94 87 102V112C87 120 80 127 72 127H15C6 127 0 120 0 112Z",

//   "M33 34H23M109 34H98M88 12L98 2M34 2L44 12M64 20C59 20 56 22 56 34C56 45 47 53 40 59C39 59 38 60 38 61C38 81 38 99 38 117C38 118 39 119 40 120C50 126 64 130 85 129C92 129 101 129 111 112C114 102 116 92 118 81C120 70 111 59 99 59C91 59 84 59 76 59C76 59 79 52 79 39C79 25 68 20 64 20Z",

//   "M12 36C8 36 5 37 3 40C1 42 1 46 1 49C1 54 3 58 7 62L34 90C36 92 39 94 41 95C43 95 45 96 47 95C49 95 51 94 52 94C54 93 56 92 58 90L120 27C124 23 127 17 126 12C126 8 125 5 122 3C120 1 115 0 111 1C107 1 103 3 100 6L46 59L27 41C23 37 17 35 12 36Z",

//   "M3 112C4 96 7 83 13 73C23 56 44 43 66 35C82 29 101 24 117 20C124 18 131 17 136 16C139 15 141 15 143 15C141 28 127 91 101 105C61 126 32 78 10 97C7 99 5 105 4 108C4 109 3 111 3 112Z",
// ];

// export default function ScrollFocusSections() {
//   const sectionRefs = useRef([]);
//   const [focusedIndex, setFocusedIndex] = useState(0);
//   const [currentPath, setCurrentPath] = useState(shapes[0]);

//   const isAnimatingRef = useRef(false);
//   const pendingIndexRef = useRef(null);

//   const animateShape = (from, to, onComplete) => {
//     const interpolator = flubber.interpolate(from, to, {
//       maxSegmentLength: 2,
//     });

//     let frame = 0;
//     const totalFrames = 30;

//     const animateFrame = () => {
//       const nextPath = interpolator(frame / totalFrames);
//       setCurrentPath(nextPath);
//       frame++;

//       if (frame <= totalFrames) {
//         requestAnimationFrame(animateFrame);
//       } else {
//         onComplete?.();
//       }
//     };

//     animateFrame();
//   };

//   const handleMorph = (nextIndex) => {
//     if (nextIndex === focusedIndex || isAnimatingRef.current) {
//       pendingIndexRef.current = nextIndex;
//       return;
//     }

//     isAnimatingRef.current = true;

//     const from = shapes[focusedIndex];
//     const to = shapes[nextIndex];

//     animateShape(from, to, () => {
//       setFocusedIndex(nextIndex);
//       isAnimatingRef.current = false;

//       if (
//         pendingIndexRef.current !== null &&
//         pendingIndexRef.current !== nextIndex
//       ) {
//         const next = pendingIndexRef.current;
//         pendingIndexRef.current = null;
//         handleMorph(next);
//       }
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const viewportCenter = window.innerHeight / 2;
//       let closest = 0;
//       let minDist = Infinity;

//       sectionRefs.current.forEach((el, i) => {
//         if (!el) return;
//         const rect = el.getBoundingClientRect();
//         const centerY = rect.top + rect.height / 2;
//         const dist = Math.abs(centerY - viewportCenter);
//         if (dist < minDist) {
//           minDist = dist;
//           closest = i;
//         }
//       });

//       handleMorph(closest);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Trigger once on mount

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [focusedIndex]);

//   return (
//     // <ReactLenis root>
//     <div
//       className="fix py-[40px] sm:py-[70px] bg-no-repeat bg-cover bg-center"
//       style={{ backgroundImage: "url('/know-us/gradient.png')" }}
//     >
//       <FocusHeader />
//       <div className="flex w-full min-h-screen bg-white pt-[30px]">
//         {/* Sticky SVG on left */}
//         <div className="w-[25%] sm:w-[20%] bg-inherit flex items-start pr-1.5 sm:pr-4 justify-end 1280:pr-6">
//           <div className="sticky top-[300px]">
//             {/* <motion.svg
//               width="142"
//               height="111"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <motion.path
//                 d={currentPath}
//                 fill={sectionsContent[focusedIndex].fill}
//                 transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//               />
//             </motion.svg> */}
//             <motion.svg
//               className="w-full max-w-[140px] h-auto" // Tailwind classes
//               viewBox="0 0 140 140"
//               xmlns="http://www.w3.org/2000/svg"
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <motion.path
//                 d={currentPath}
//                 fill={sectionsContent[focusedIndex].fill}
//                 transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//               />
//             </motion.svg>

//             {/* <motion.svg width="142" height="111" viewBox="0 0 150 150">
//               <motion.g transform="scale(0.8) translate(10,10)">
//                 <motion.path
//                   d={currentPath}
//                   fill={sectionsContent[focusedIndex].fill}
//                 />
//               </motion.g>
//             </motion.svg> */}
//             {/* <motion.svg width="100" height="100" viewBox="0 0 103 102">
//               <motion.path
//                 fill={sectionsContent[focusedIndex].fill}
//                 d={currentPath}
//               />
//             </motion.svg> */}
//           </div>
//         </div>

//         {/* Scrollable content */}
//         <div className="w-full sm:w-[80%] flex flex-col pt-[0px]">
//           {sectionsContent.map((section, i) => {
//             const isFocused = focusedIndex === i;
//             return (
//               <motion.div
//                 key={i}
//                 ref={(el) => (sectionRefs.current[i] = el)}
//                 animate={{
//                   filter: isFocused ? "blur(0px)" : "blur(6px)",
//                   opacity: isFocused ? 1 : 0.5,
//                 }}
//                 transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
//                 className={`h-fit pl-3 sm:px-2 pb-[60px] ${
//                   isFocused ? "text-black" : "text-gray-500"
//                 }`}
//               >
//                 <h2 className="bw-r text-[32px] 768:text-[40px] whitespace-nowrap 1024:text-[40px] 1280:text-[42px] 1366:text-[46px] leading-[46px] sm:leading-[76px] mb-1 bw-m tracking-[-4%]">
//                   {section.title}
//                 </h2>
//                 <div>
//                   <div className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[24px] 1024:leading-[25px] 1280:leading-[30px] tracking-[-4%] flex flex-col gap-2">
//                     <p>{section.paragraph}</p>
//                     <img
//                       src="/know-us/arrup.svg"
//                       alt="Arrow icon"
//                       className="w-6 h-6 self-start"
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ScrollFocusSections() {
//   const sectionRefs = useRef([]);
//   const [focusedIndex, setFocusedIndex] = useState(0);
//   const [currentPaths, setCurrentPaths] = useState(shapes[0]); // array of paths

//   const isAnimatingRef = useRef(false);
//   const pendingIndexRef = useRef(null);

//   const animateShape = (from, to, onComplete) => {
//     // ensure both are arrays
//     const fromArr = Array.isArray(from) ? from : [from];
//     const toArr = Array.isArray(to) ? to : [to];

//     // Match path counts (use first if mismatch)
//     const maxLen = Math.max(fromArr.length, toArr.length);
//     const interpolators = Array.from({ length: maxLen }, (_, i) =>
//       flubber.interpolate(fromArr[i] || fromArr[0], toArr[i] || toArr[0], {
//         maxSegmentLength: 2,
//       })
//     );

//     let frame = 0;
//     const totalFrames = 30;

//     const animateFrame = () => {
//       const progress = frame / totalFrames;
//       const nextPaths = interpolators.map((interp) => interp(progress));
//       setCurrentPaths(nextPaths);
//       frame++;

//       if (frame <= totalFrames) {
//         requestAnimationFrame(animateFrame);
//       } else {
//         onComplete?.();
//       }
//     };

//     animateFrame();
//   };

//   const handleMorph = (nextIndex) => {
//     if (nextIndex === focusedIndex || isAnimatingRef.current) {
//       pendingIndexRef.current = nextIndex;
//       return;
//     }

//     isAnimatingRef.current = true;

//     const from = shapes[focusedIndex];
//     const to = shapes[nextIndex];

//     animateShape(from, to, () => {
//       setFocusedIndex(nextIndex);
//       isAnimatingRef.current = false;

//       if (
//         pendingIndexRef.current !== null &&
//         pendingIndexRef.current !== nextIndex
//       ) {
//         const next = pendingIndexRef.current;
//         pendingIndexRef.current = null;
//         handleMorph(next);
//       }
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const viewportCenter = window.innerHeight / 2;
//       let closest = 0;
//       let minDist = Infinity;

//       sectionRefs.current.forEach((el, i) => {
//         if (!el) return;
//         const rect = el.getBoundingClientRect();
//         const centerY = rect.top + rect.height / 2;
//         const dist = Math.abs(centerY - viewportCenter);
//         if (dist < minDist) {
//           minDist = dist;
//           closest = i;
//         }
//       });

//       handleMorph(closest);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Trigger once on mount

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [focusedIndex]);

//   return (
//     <div
//       className="fix py-[40px] sm:py-[70px] bg-no-repeat bg-cover bg-center"
//       style={{ backgroundImage: "url('/know-us/gradient.png')" }}
//     >
//       <FocusHeader />
//       <div className="flex w-full min-h-screen bg-white pt-[30px]">
//         {/* Sticky SVG on left */}
//         <div className="w-[25%] sm:w-[20%] bg-inherit flex items-start pr-1.5 sm:pr-4 justify-end 1280:pr-6">
//           <div className="sticky top-[300px]">
//             <motion.svg
//               className="w-full max-w-[140px] h-auto"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//               preserveAspectRatio="xMidYMid meet"
//             >
//               {currentPaths.map((d, i) => (
//                 <motion.path
//                   key={i}
//                   d={d}
//                   fill={sectionsContent[focusedIndex].fill}
//                   transition={{ duration: 0.1, ease: [0.7, 0, 0.4, 1] }}
//                 />
//               ))}
//             </motion.svg>
//           </div>
//         </div>

//         {/* Scrollable content */}
//         <div className="w-full sm:w-[80%] flex flex-col pt-[0px]">
//           {sectionsContent.map((section, i) => {
//             const isFocused = focusedIndex === i;
//             return (
//               <motion.div
//                 key={i}
//                 ref={(el) => (sectionRefs.current[i] = el)}
//                 animate={{
//                   filter: isFocused ? "blur(0px)" : "blur(6px)",
//                   opacity: isFocused ? 1 : 0.5,
//                 }}
//                 transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
//                 className={`h-fit pl-3 sm:px-2 pb-[80px] ${
//                   isFocused ? "text-black" : "text-gray-500"
//                 }`}
//               >
//                 <h2 className="bw-r text-[32px] 768:text-[40px] whitespace-nowrap 1024:text-[40px] 1280:text-[42px] 1366:text-[46px] leading-[46px] sm:leading-[76px] mb-1 bw-m tracking-[-4%]">
//                   {section.title}
//                 </h2>
//                 <div>
//                   <div className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[24px] 1024:leading-[25px] 1280:leading-[30px] tracking-[-4%] flex flex-col gap-2">
//                     <p>{section.paragraph}</p>
//                     <img
//                       src="/know-us/arrup.svg"
//                       alt="Arrow icon"
//                       className="w-6 h-6 self-start"
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ScrollFocusSections() {
  const sectionRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [currentPaths, setCurrentPaths] = useState(shapes[0]); // array of paths

  const isAnimatingRef = useRef(false);
  const pendingIndexRef = useRef(null);

  const animateShape = (from, to, onComplete) => {
    // ensure both are arrays
    const fromArr = Array.isArray(from) ? from : [from];
    const toArr = Array.isArray(to) ? to : [to];

    // Match path counts (use first if mismatch)
    const maxLen = Math.max(fromArr.length, toArr.length);
    const interpolators = Array.from({ length: maxLen }, (_, i) =>
      flubber.interpolate(fromArr[i] || fromArr[0], toArr[i] || toArr[0], {
        maxSegmentLength: 2,
      })
    );

    let frame = 0;
    const totalFrames = 15; // Reduced from 30 to 15 for faster morphing

    const animateFrame = () => {
      const progress = frame / totalFrames;
      const nextPaths = interpolators.map((interp) => interp(progress));
      setCurrentPaths(nextPaths);
      frame++;

      if (frame <= totalFrames) {
        requestAnimationFrame(animateFrame);
      } else {
        onComplete?.();
      }
    };

    animateFrame();
  };

  const handleMorph = (nextIndex) => {
    if (nextIndex === focusedIndex || isAnimatingRef.current) {
      pendingIndexRef.current = nextIndex;
      return;
    }

    isAnimatingRef.current = true;

    const from = shapes[focusedIndex];
    const to = shapes[nextIndex];

    animateShape(from, to, () => {
      setFocusedIndex(nextIndex);
      isAnimatingRef.current = false;

      if (
        pendingIndexRef.current !== null &&
        pendingIndexRef.current !== nextIndex
      ) {
        const next = pendingIndexRef.current;
        pendingIndexRef.current = null;
        handleMorph(next);
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closest = 0;
      let minDist = Infinity;

      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - viewportCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      handleMorph(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [focusedIndex]);

  return (
    <div
      className="fix py-[40px] sm:py-[70px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/know-us/gradient.png')" }}
    >
      <FocusHeader />
      <div className="flex w-full min-h-screen bg-white pt-[30px]">
        {/* Sticky SVG on left */}
        <div className="w-[25%] sm:w-[20%] bg-inherit flex items-start pr-1.5 sm:pr-4 justify-end 1280:pr-6">
          <div className="sticky top-[300px]">
            <motion.svg
              className="w-full max-w-[140px] h-auto"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {currentPaths.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill={sectionsContent[focusedIndex].fill}
                  transition={{ duration: 0.1, ease: [0.7, 0, 0.4, 1] }}
                />
              ))}
            </motion.svg>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="w-full sm:w-[80%] flex flex-col pt-[0px]">
          {sectionsContent.map((section, i) => {
            const isFocused = focusedIndex === i;
            return (
              <motion.div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                animate={{
                  filter: isFocused ? "blur(0px)" : "blur(6px)",
                  opacity: isFocused ? 1 : 0.5,
                }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                className={`h-fit pl-3 sm:px-2 pb-[80px] ${
                  isFocused ? "text-black" : "text-gray-500"
                }`}
              >
                <h2 className="bw-r text-[32px] 768:text-[40px] whitespace-nowrap 1024:text-[40px] 1280:text-[42px] 1366:text-[46px] leading-[46px] sm:leading-[76px] mb-1 bw-m tracking-[-4%]">
                  {section.title}
                </h2>
                <div>
                  <div className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[24px] 1024:leading-[25px] 1280:leading-[30px] tracking-[-4%] flex flex-col gap-2">
                    <p>{section.paragraph}</p>
                    <span>JOIN HORIZON</span>
                    <img
                      src="/know-us/arrup.svg"
                      alt="Arrow icon"
                      className="w-6 h-6 self-start"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
