// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const parks = [
//   {
//     id: 1,
//     title: "Luhari",
//     status: "Underconstruction",
//     statusColor: "text-[#f47920]",
//     image: "/state/test.png",
//     area: "125 Acres",
//     potential: "3.2 MN Sq Ft",
//     usage: "Warehousing",
//     certification: "IGBC Platinum",
//   },
//   {
//     id: 2,
//     title: "Delhi I",
//     status: "Active",
//     statusColor: "text-[#0db14b]",
//     image: "/state/test.png",
//     area: "23 Acres",
//     potential: "0.5 MN Sq Ft",
//     usage: "Warehousing",
//     certification: "IGBC Platinum",
//   },
//   {
//     id: 3,
//     title: "Delhi II",
//     status: "Underconstruction",
//     statusColor: "text-[#f47920]",
//     image: "/state/test.png",
//     area: "14 Acres",
//     potential: "0.4 MN Sq Ft",
//     usage: "Warehousing",
//     certification: "IGBC Platinum",
//   },
//   {
//     id: 4,
//     title: "Delhi I",
//     status: "Active",
//     statusColor: "text-[#0db14b]",
//     image: "/state/test.png",
//     area: "23 Acres",
//     potential: "0.5 MN Sq Ft",
//     usage: "Warehousing",
//     certification: "IGBC Platinum",
//   },
//   {
//     id: 5,
//     title: "Delhi II",
//     status: "Underconstruction",
//     statusColor: "text-[#f47920]",
//     image: "/state/test.png",
//     area: "14 Acres",
//     potential: "0.4 MN Sq Ft",
//     usage: "Warehousing",
//     certification: "IGBC Platinum",
//   },
// ];

// const ParksSlider = () => {
//   return (
//     <div className="w-full relative pb-[80px] 1536:pb-[100px]">
//       <Swiper
//         navigation={{
//           nextEl: ".custom-next",
//           prevEl: ".custom-prev",
//         }}
//         modules={[Navigation]}
//         spaceBetween={0}
//         slidesPerView="auto"
//         className="state-swiper"
//       >
//         {parks.map((park) => (
//           <SwiperSlide key={park.id} className="!w-auto !m-0 !p-0">
//             <div className="flex flex-col h-full w-[360px] border border-gray-200">
//               {/* Image */}
//               <div className="h-[200px] w-[360px]">
//                 <img
//                   src={park.image}
//                   alt={park.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-4 flex flex-col gap-2">
//                 <h2 className="text-xl font-bold">{park.title}</h2>
//                 <span className={`font-semibold ${park.statusColor}`}>
//                   {park.status}
//                 </span>
//                 <p className="text-[16px] bw-r">
//                   <p className="text-[16px] bw-r">Area:</p> {park.area}
//                 </p>
//                 <p className="text-[16px] bw-r">
//                   <p className="text-[16px] bw-r">Potential:</p> {park.potential}
//                 </p>
//                 <p className="text-[16px] bw-r">
//                   <p className="text-[16px] bw-r">Usage:</p>{" "}
//                   <span className="font-semibold">{park.usage}</span>
//                 </p>
//                 <p className="text-[16px] bw-r">
//                   <p className="text-[16px] bw-r">Certification:</p> {park.certification}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <button className="custom-prev cursor-pointer absolute -bottom-12 left-0 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
//         <img src="/state/stateprev.svg" alt="" />
//       </button>
//       <button className="custom-next cursor-pointer absolute -bottom-12 left-24 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
//         <img src="/state/statenext.svg" alt="" />
//       </button>
//     </div>
//   );
// };

// export default ParksSlider;
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
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const categoryMap = {
//   delhi: 2,
//   gujarat: 3,
//   maharashtra: 4,
//   goa: 5,
//   telangana: 6,
//   karnataka: 7,
//   "tamil-nadu": 59,
//   haryana: 60,
// };

// const ParksSlider = () => {
//   const params = useParams();
//   const slug = params?.slug;
//   const [parks, setParks] = useState([]);

//   useEffect(() => {
//     if (!slug) return;
//     const fetchParks = async () => {
//       const categoryId = categoryMap[slug];
//       if (!categoryId) return;

//       try {
//         const res = await fetch(
//           `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks?categories=${categoryId}`,
//           { cache: "no-store" }
//         );
//         if (!res.ok) throw new Error("Failed to fetch parks");

//         const data = await res.json();
//         const formatted = data.map((park) => ({
//           id: park.id,
//           title: park.title.rendered,
//           status: park.acf?.construction_status || "Unknown",
//           statusColor:
//             park.acf?.construction_status?.toLowerCase() === "active"
//               ? "text-[#0db14b]"
//               : "text-[#f47920]",
//           image: park.acf?.park_spotlight_image || "/state/test.png",
//           area: park.acf?.land_area
//             ? park.acf.land_area.replace(/<[^>]+>/g, "")
//             : "",
//           potential: park.acf?.development_potential
//             ? park.acf.development_potential.replace(/<[^>]+>/g, "")
//             : "",
//           usage: park.acf?.land_usage || "",
//           certification: park.acf?.igbc_status || "", // ✅ fixed
//         }));

//         setParks(formatted);
//       } catch (error) {
//         console.error("Error fetching parks:", error);
//       }
//     };

//     fetchParks();
//   }, [slug]);

//   if (!parks.length) return null;

//   return (
//     <div className="w-full relative pb-[80px] 1536:pb-[100px]">
//       <Swiper
//         navigation={{
//           nextEl: ".custom-next",
//           prevEl: ".custom-prev",
//         }}
//         modules={[Navigation]}
//         spaceBetween={0}
//         slidesPerView="auto"
//         className="state-swiper"
//       >
//         {parks.map((park) => (
//           <SwiperSlide key={park.id} className="!w-auto !m-0 !p-0">
//             <div className="flex flex-col h-full w-[360px] border border-gray-200">
//               <div className="h-[200px] w-[360px]">
//                 <img
//                   src={park.image}
//                   alt={park.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="p-4 flex flex-col gap-2">
//                 <h2 className="text-xl font-bold">{park.title}</h2>
//                 <span className={`font-semibold ${park.statusColor}`}>
//                   {park.status}
//                 </span>
//                 <p className="text-[16px] bw-r">
//                   <p className="text-[16px] bw-r">Area:</p> {park.area}
//                 </p>
//                 <p className="text-[16px] bw-r">
//                   <p className="text-[16px] bw-r">Potential:</p> {park.potential}
//                 </p>
//                 <p className="text-[16px] bw-r">
//                   <p className="text-[16px] bw-r">Usage:</p>{" "}
//                   <span className="font-semibold">{park.usage}</span>
//                 </p>
//                 <p className="text-[16px] bw-r">
//                   <p className="text-[16px] bw-r">Certification:</p> {park.certification}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <button className="custom-prev cursor-pointer absolute -bottom-12 left-0 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
//         <img src="/state/stateprev.svg" alt="" />
//       </button>
//       <button className="custom-next cursor-pointer absolute -bottom-12 left-24 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
//         <img src="/state/statenext.svg" alt="" />
//       </button>
//     </div>
//   );
// };

// export default ParksSlider;
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
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const categoryMap = {
  delhi: 2,
  gujarat: 3,
  maharashtra: 4,
  goa: 5,
  telangana: 6,
  karnataka: 7,
  "tamil-nadu": 59,
  haryana: 60,
};

const ParksSlider = () => {
  const params = useParams();
  const slug = params?.slug;
  const [parks, setParks] = useState([]);

  useEffect(() => {
    if (!slug) return;

    const fetchParks = async () => {
      const categoryId = categoryMap[slug];
      if (!categoryId) return;

      try {
        const res = await fetch(
          `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks?categories=${categoryId}`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch parks");

        const data = await res.json();

        const formatted = data.map((park) => ({
          id: park.id,
          title: park.acf?.park_name,
          slug: park.slug,
          status: park.acf?.construction_status || "Unknown",
          statusColor:
            park.acf?.construction_status?.toLowerCase() === "active"
              ? "text-[#0db14b]"
              : "text-[#f47920]",
          image: park.acf?.park_spotlight_image || "/state/test.png",
          area: park.acf?.land_area
            ? park.acf.land_area.replace(/<[^>]+>/g, "")
            : "",
          potential: park.acf?.development_potential
            ? park.acf.development_potential.replace(/<[^>]+>/g, "")
            : "",
          usage: park.acf?.land_usage || "",
          certification: park.acf?.igbc_status || "",
        }));

        setParks(formatted);
        console.log(formatted);
      } catch (error) {
        console.error("Error fetching parks:", error);
      }
    };

    fetchParks();
  }, [slug]);

  if (!parks.length) return null;

  return (
    <div className="w-full relative pb-[80px] 1536:pb-[100px]">
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView="auto"
        className="state-swiper"
      >
        {parks.map((park) => (
          <SwiperSlide
            key={park.id}
            className="!w-auto !m-0 !p-0 group cursor-pointer"
          >
            <Link
              href={`/${park.slug}`}
              className="flex flex-col min-h-[435px] w-[360px] "
            >
              {/* Image */}
              <div className="h-[200px] w-[360px] overflow-hidden">
                <img
                  src={park.image}
                  alt={park.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3 py-7 border border-gray-200 min-h-[239.1px]">
                <div className="w-full justify-between flex">
                  <h2 className="text-[25px] bw-sb">{park.title}</h2>
                  <span className={`bw-sb text-[16px] ${park.statusColor}`}>
                    {park.status}
                  </span>
                </div>
                <div className="flex w-full justify-between items-center">
                  <p className="text-[16px] bw-r">Area:</p>
                  <span className="bw-sb text-[16px]">{park.area}</span>
                </div>
                <div className="flex w-full justify-between items-center">
                  <p className="text-[16px] bw-r">Potential:</p>{" "}
                  <span className="bw-sb text-[16px]">{park.potential}</span>
                </div>
                <div className="flex w-full justify-between items-center">
                  <p className="text-[16px] bw-r">Usage:</p>{" "}
                  <span className="bw-sb text-[16px]">{park.usage}</span>
                </div>
                {park.certification && (
                  <div className="flex w-full justify-between items-center">
                    <p className="text-[16px] bw-r">Certification:</p>{" "}
                    <span className="bw-sb text-[16px]">
                      {park.certification}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev cursor-pointer absolute -bottom-12 left-0 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
        <img src="/state/stateprev.svg" alt="" />
      </button>
      <button className="custom-next cursor-pointer absolute -bottom-12 left-24 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
        <img src="/state/statenext.svg" alt="" />
      </button>
    </div>
  );
};

export default ParksSlider;
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
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import SPCard from "../parkdetial/stateparks/SPCard";

// const categoryMap = {
//   delhi: 2,
//   gujarat: 3,
//   maharashtra: 4,
//   goa: 5,
//   telangana: 6,
//   karnataka: 7,
//   "tamil-nadu": 59,
//   haryana: 60,
// };

// const ParksSlider = () => {
//   const params = useParams();
//   const slug = params?.slug;
//   const [parks, setParks] = useState([]);

//   useEffect(() => {
//     if (!slug) return;

//     const fetchParks = async () => {
//       const categoryId = categoryMap[slug];
//       if (!categoryId) return;

//       try {
//         const res = await fetch(
//           `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks?categories=${categoryId}`,
//           { cache: "no-store" }
//         );
//         if (!res.ok) throw new Error("Failed to fetch parks");

//         const data = await res.json();

//         // Map API response into props expected by SPCard
//         const formatted = data.map((park) => ({
//           id: park.id,
//           park_name: park.acf?.park_name || park.title?.rendered || "Untitled",
//           state_name: park.acf?.state_name || slug,
//           development_potential: park.acf?.development_potential || "",
//           construction_status: park.acf?.construction_status || "",
//           land_usage: park.acf?.land_usage || "",
//           igbc_status: park.acf?.igbc_status || "",
//           park_spotlight_image:
//             park.acf?.park_spotlight_image || "/state/test.png",
//           slug: park.slug,
//           land_area: park.acf?.land_area || "",
//         }));

//         setParks(formatted);
//       } catch (error) {
//         console.error("Error fetching parks:", error);
//       }
//     };

//     fetchParks();
//   }, [slug]);

//   if (!parks.length) return null;

//   return (
//     <div className="w-full relative pb-[80px] 1536:pb-[100px]">
//       <Swiper
//         navigation={{
//           nextEl: ".custom-next",
//           prevEl: ".custom-prev",
//         }}
//         modules={[Navigation]}
//         slidesPerView={4}
//         className="state-swiper"
//       >
//         {parks.map((park) => (
//           <SwiperSlide key={park.id} className="!w-auto !m-0 !p-0">
//             <SPCard {...park} />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <button className="custom-prev cursor-pointer absolute -bottom-12 left-0 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
//         <img src="/state/stateprev.svg" alt="" />
//       </button>
//       <button className="custom-next cursor-pointer absolute -bottom-12 left-24 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
//         <img src="/state/statenext.svg" alt="" />
//       </button>
//     </div>
//   );
// };

// export default ParksSlider;
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
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import SPCard from "../parkdetial/stateparks/SPCard";

// const categoryMap = {
//   delhi: 2,
//   gujarat: 3,
//   maharashtra: 4,
//   goa: 5,
//   telangana: 6,
//   karnataka: 7,
//   "tamil-nadu": 59,
//   haryana: 60,
// };

// const ParksSlider = () => {
//   const params = useParams();
//   const slug = params?.slug;
//   const [parks, setParks] = useState([]);

//   useEffect(() => {
//     if (!slug) return;

//     const fetchParks = async () => {
//       const categoryId = categoryMap[slug];
//       if (!categoryId) return;

//       try {
//         const res = await fetch(
//           `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks?categories=${categoryId}`,
//           { cache: "no-store" }
//         );
//         if (!res.ok) throw new Error("Failed to fetch parks");

//         const data = await res.json();

//         // Map API response into props expected by SPCard
//         const formatted = data.map((park) => ({
//           id: park.id,
//           park_name: park.acf?.park_name || park.title?.rendered || "Untitled",
//           state_name: park.acf?.state_name || slug,
//           development_potential: park.acf?.development_potential || "",
//           construction_status: park.acf?.construction_status || "",
//           land_usage: park.acf?.land_usage || "",
//           igbc_status: park.acf?.igbc_status || "",
//           park_spotlight_image:
//             park.acf?.park_spotlight_image || "/state/test.png",
//           slug: park.slug,
//           land_area: park.acf?.land_area || "",
//         }));

//         setParks(formatted);
//       } catch (error) {
//         console.error("Error fetching parks:", error);
//       }
//     };

//     fetchParks();
//   }, [slug]);

//   if (!parks.length) return null;

//   return (
//     <div className="w-full relative pb-[80px] 1536:pb-[100px]">
//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           nextEl: ".swiper-button-next-custom",
//           prevEl: ".swiper-button-prev-custom",
//         }}
//         loop={true}
//         speed={1000}
//         slidesPerView={4}
//         breakpoints={{
//           1600: { slidesPerView: 4 },
//           1280: { slidesPerView: 4 },
//           1024: { slidesPerView: 4 },
//           768: { slidesPerView: 3 },
//           0: { slidesPerView: 2 },
//         }}
//       >
//         {parks.map((park) => (
//           <SwiperSlide key={park.id}>
//             <div
//             // initial={{ opacity: 0 }}
//             // animate={{ opacity: 1 }}
//             // transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//             // exit={{
//             //   opacity: 0,
//             //   transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
//             // }}
//             >
//               <SPCard {...park.acf} slug={park.slug} />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <button className="custom-prev cursor-pointer absolute -bottom-12 left-0 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
//         <img src="/state/stateprev.svg" alt="" />
//       </button>
//       <button className="custom-next cursor-pointer absolute -bottom-12 left-24 z-10 w-10 h-10 md:w-[80px] md:h-[80px] rounded-none border border-gray-400 bg-white flex items-center justify-center">
//         <img src="/state/statenext.svg" alt="" />
//       </button>
//     </div>
//   );
// };

// export default ParksSlider;
