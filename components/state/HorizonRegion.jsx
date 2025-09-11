// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const HorizonRegion = () => {
//   const regions = [
//     {
//       name: "Telangana",
//       image: "/state/gate.jpg",
//       description: "Description for Telangana",
//     },
//     {
//       name: "Delhi",
//       image: "/state/gate.jpg",
//       description: "Description for Delhi",
//     },
//     {
//       name: "Agra",
//       image: "/state/gate.jpg",
//       description: "Description for Agra",
//     },
//     {
//       name: "Maharashtra",
//       image: "/state/gate.jpg",
//       description: "Description for Maharashtra",
//     },
//   ];

//   return (
//     <div className="bg-white py-[100px] ">
//       <div className="fixup pb-[50px]">
//         <div className="flex flex-col">
//           <div className="flex items-center gap-[24px]">
//             <h2 className="bw-m text-[56px] tracking-[-0.04em] leading-[64px]">
//               Horizon
//             </h2>
//             <img src="/state/horizonfrm.svg" alt="" />
//           </div>
//           <div>
//             <h3 className="bw-r text-[56px] leading-[64px] tracking-[-0.04em]">
//               in Other Regions
//             </h3>
//           </div>
//         </div>
//       </div>

//       <div className="w-full relative pb-[80px] 1536:pb-[100px]">
//         <Swiper
//           navigation={{
//             nextEl: ".custom-next2",
//             prevEl: ".custom-prev2",
//           }}
//           modules={[Navigation]}
//           spaceBetween={0}
//           slidesPerView="auto"
//           className="state-swiper"
//         >
//           {regions.map((region, idx) => (
//             <SwiperSlide key={region.name} className="!w-auto !m-0 !p-0">
//               <div
//                 className={`flex flex-col h-full w-[360px] border border-[rgba(0,0,0,0.20)] ${
//                   idx !== 0 ? "border-l-0" : ""
//                 }`}
//               >
//                 {/* Image */}
//                 <div className="h-[360px] w-[360px]">
//                   <img
//                     src={region.image}
//                     alt={region.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 flex items-center justify-between">
//                   <h2 className="bw-m text-[28px] leading-[28px]">
//                     {region.name}
//                   </h2>
//                   <div className="h-[24px] w-[24px]">
//                     <img
//                       src="/blackarr.png"
//                       alt="arrow"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
//         <button className="custom-prev2 absolute -bottom-0 left-12 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-[rgba(0,0,0,0.20)] bg-white shadow flex items-center justify-center">
//           <img src="/state/stateprev.svg" alt="" />
//         </button>
//         <button className="custom-next2 absolute -bottom-0 left-36 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-[rgba(0,0,0,0.20)] bg-white shadow flex items-center justify-center">
//           <img src="/state/statenext.svg" alt="" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HorizonRegion;
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
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const HorizonRegion = ({ data = [] }) => {
//   if (!data || data.length === 0) return null; // nothing to show

//   return (
//     <div className="bg-white py-[100px]">
//       <div className="fixup pb-[50px]">
//         <div className="flex flex-col">
//           <div className="flex items-center gap-[24px]">
//             <h2 className="bw-m text-[56px] tracking-[-0.04em] leading-[64px]">
//               Horizon
//             </h2>
//             <img src="/state/horizonfrm.svg" alt="" />
//           </div>
//           <h3 className="bw-r text-[56px] leading-[64px] tracking-[-0.04em]">
//             in Other Regions
//           </h3>
//         </div>
//       </div>

//       <div className="w-full relative pb-[80px] 1536:pb-[100px]">
//         <Swiper
//           navigation={{ nextEl: ".custom-next2", prevEl: ".custom-prev2" }}
//           modules={[Navigation]}
//           spaceBetween={0}
//           slidesPerView="auto"
//           className="state-swiper"
//         >
//           {data.map((region, idx) => (
//             <SwiperSlide key={region.name || idx} className="!w-auto !m-0 !p-0">
//               <a
//                 href={region.url || "#"}
//                 className={`flex flex-col h-full w-[360px] border border-[rgba(0,0,0,0.20)] ${
//                   idx !== 0 ? "border-l-0" : ""
//                 }`}
//               >
//                 {/* Image */}
//                 <div className="h-[360px] w-[360px]">
//                   <img
//                     src={region.image}
//                     alt={region.alt || region.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 flex items-center justify-between">
//                   <h2 className="bw-m text-[28px] leading-[28px]">
//                     {region.name}
//                   </h2>
//                   <div className="h-[24px] w-[24px]">
//                     <img
//                       src="/blackarr.png"
//                       alt="arrow"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </a>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
//         <button className="custom-prev2 cursor-pointer absolute -bottom-0 left-12 z-10 w-10 h-10 md:w-[80px] md:h-[80px] border border-[rgba(0,0,0,0.20)] bg-white flex items-center justify-center">
//           <img src="/state/stateprev.svg" alt="Prev" />
//         </button>
//         <button className="custom-next2 cursor-pointer absolute -bottom-0 left-36 z-10 w-10 h-10 md:w-[80px] md:h-[80px] border border-[rgba(0,0,0,0.20)] bg-white flex items-center justify-center">
//           <img src="/state/statenext.svg" alt="Next" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HorizonRegion;

"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const HorizonRegion = ({ data = [] }) => {
  const swiperRef = useRef(null);

  if (!data || data.length === 0) return null; // nothing to show

  // Ensure Swiper navigation updates after data is rendered
  useEffect(() => {
    if (data.length > 0 && swiperRef.current) {
      const attemptNavigationInit = () => {
        const swiper = swiperRef.current;
        const prevButton = document.querySelector(".custom-prev");
        const nextButton = document.querySelector(".custom-next");

        if (swiper && prevButton && nextButton && swiper.navigation) {
          try {
            swiper.navigation.update();
          } catch (e) {
            // Fallback in case update fails
            console.error("Navigation update failed:", e);
          }
        } else {
          // Retry after a short delay if buttons are not yet in DOM
          setTimeout(attemptNavigationInit, 50);
        }
      };

      // Start the initialization attempt immediately
      attemptNavigationInit();
    }
  }, [data]);

  return (
    <div className="bg-white py-[45px] lg:py-[100px]">
      <div className="fixup pb-5 lg:pb-[50px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-[24px]">
            <h2 className="bw-m text-[32px] lg:text-[56px] xl:text-[64px] xl:leading-[64px] tracking-[-0.04em] leading-[42px] lg:leading-[64px]">
              Horizon
            </h2>
            <img
              src="/state/statefrm.png"
              className="object-cover h-[58px] lg:w-[236px] w-[100px] lg:!flex !hidden"
              alt="Grade A Box"
            />
          </div>
          <h3 className="bw-r text-[32px] lg:text-[56px] leading-[32px] lg:leading-[64px] tracking-[-0.04em]  xl:text-[64px] xl:leading-[64px]">
            in Other Regions
          </h3>
          <img
            src="/state/statefrm.png"
            className="object-cover h-[40px] md:w-[30%] w-[70%] mt-5 lg:!hidden !flex"
            alt="Grade A Box"
          />
        </div>
      </div>

      <div className="w-full flex flex-col overflow-hidden">
        {/* Swiper */}
        {/* <Swiper
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView="auto"
          className="state-swiper w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1536: { slidesPerView: 5 },
            1920: { slidesPerView: 6 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store Swiper instance
          }}
        > */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView="auto"
          className="state-swiper w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            // 1536: { slidesPerView: 5 },
            1920: { slidesPerView: 5 },
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          onBeforeInit={(swiper) => {
            // Manually assign elements to navigation before init
            swiper.params.navigation.prevEl = ".custom-prev";
            swiper.params.navigation.nextEl = ".custom-next";
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((region, idx) => (
            <SwiperSlide key={region.name || idx}>
              <Link
                href={region.url || "#"}
                className={`flex flex-col h-full group w-full border border-[rgba(0,0,0,0.20)] ${
                  idx !== 0 ? "border-l-0" : ""
                }`}
              >
                {/* Image */}
                <div className="h-[360px] overflow-hidden w-full">
                  <img
                    src={region.image}
                    alt={region.alt || region.name}
                    className="w-full group-hover:scale-110 transition duration-500 h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-10 h-[86px] flex items-center justify-between">
                  <h2 className="bw-m text-[28px] leading-[28px]">
                    {region.name}
                  </h2>
                  <div className="h-[24px] w-[24px]">
                    <img
                      src="/blackarr.png"
                      alt="arrow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons in normal flow */}
        <div className="flex items-center mt-5 lg:mt-10 gap-4 h-10 lg:h-20 w-full pl-[max(5%,calc((100vw-1340px)/2))]">
          <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-[rgba(0,0,0,0.20)] bg-white flex items-center justify-center">
            <img src="/state/stateprev.svg" alt="Prev" />
          </button>
          <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-[rgba(0,0,0,0.20)] bg-white flex items-center justify-center">
            <img src="/state/statenext.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizonRegion;
