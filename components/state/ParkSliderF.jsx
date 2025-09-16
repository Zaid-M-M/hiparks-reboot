// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

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

// const ParksSliderF = () => {
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
//           title: park.acf?.park_name,
//           slug: park.slug,
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
//           certification: park.acf?.igbc_status || "",
//         }));

//         setParks(formatted);
//       } catch (error) {
//         console.error("Error fetching parks:", error);
//       }
//     };

//     fetchParks();
//   }, [slug]);

//   if (!parks.length) return null;

//   // 🟢 Reusable card component with motion
//   const ParkCard = ({ park }) => {
//     const [hovered, setHovered] = useState(false);

//     return (
//       <Link
//         href={park.slug ? `/${park.slug}` : "#"}
//         className="flex flex-col h-fit w-auto group cursor-pointer"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {/* Image */}
//         <div className="h-[200px] group-hover:h-[180px] transition-all duration-500 w-full overflow-hidden">
//           <img
//             src={park.image}
//             alt={park.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="flex py-7 px-4 flex-col justify-between group-hover:h-[260px] h-[240px] bg-white transition-all duration-500 border border-gray-200">
//           <div className="flex flex-col gap-3">
//             <div className="w-full justify-between gap-5 1366:gap-2 flex items-center">
//               <h2 className="text-[20px] bw-sb">{park.title}</h2>
//               <span
//                 className={`bw-sb text-[16px] ${park.statusColor} text-right`}
//               >
//                 {park.status}
//               </span>
//             </div>
//             <div className="flex w-full justify-between items-center">
//               <p className="text-[16px] bw-r">Area</p>
//               <span className="bw-sb text-[16px]">{park.area}</span>
//             </div>
//             <div className="flex w-full justify-between items-center">
//               <p className="text-[16px] bw-r">Potential</p>
//               <span className="bw-sb text-[16px]">{park.potential}</span>
//             </div>
//             <div className="flex w-full justify-between items-center">
//               <p className="text-[16px] bw-r">Usage</p>
//               <span className="bw-sb text-[16px]">{park.usage}</span>
//             </div>
//             {park.certification && (
//               <div className="flex w-full gap-2 justify-between items-center">
//                 <p className="text-[16px] bw-r">Certification</p>
//                 <span className="bw-sb text-[16px] text-right">
//                   {park.certification}
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* Explore Park animation */}
//           <AnimatePresence>
//             {hovered && (
//               <motion.div
//                 key="explore"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   transition: { delay: 0.3, duration: 0.2 }, // delayed enter
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: 10,
//                   transition: { duration: 0.2 }, // instant exit
//                 }}
//                 className="mt-4"
//               >
//                 <Link
//                   href={`/${park.slug}`}
//                   className="text-[16px] uppercase leading-[20px] bw-sb text-[#f47920]"
//                 >
//                   Explore Park
//                 </Link>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </Link>
//     );
//   };

//   // 🟢 Decide: Flex layout OR Swiper
//   const renderContent = () => {
//     if (parks.length <= 4) {
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 1440:grid-cols-4 gap-0 w-full">
//           {parks.map((park) => (
//             <ParkCard key={park.id} park={park} />
//           ))}
//         </div>
//       );
//     }

//     return (
//       <>
//         <Swiper
//           modules={[Navigation]}
//           className="state-swiper max-w-full"
//           navigation={{
//             prevEl: ".custom-prev",
//             nextEl: ".custom-next",
//           }}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             500: { slidesPerView: 2, slidesPerGroup: 1 },
//             1280: { slidesPerView: 3, slidesPerGroup: 1 },
//             1440: { slidesPerView: 4, slidesPerGroup: 1 },
//           }}
//         >
//           {parks.map((park) => (
//             <SwiperSlide key={park.id}>
//               <ParkCard park={park} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation buttons */}
//         <div className="flex items-center mt-5 lg:mt-10 gap-4 h-10 lg:h-20 w-full">
//           <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
//             <img src="/state/stateprev.svg" alt="Prev" />
//           </button>
//           <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
//             <img src="/state/statenext.svg" alt="Next" />
//           </button>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="w-full flex flex-col overflow-hidden">
//       {renderContent()}
//     </div>
//   );
// };

// export default ParksSliderF;




"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ParkCard from "./ParkCard"; // ✅ import here

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

const ParksSliderF = () => {
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
      } catch (error) {
        console.error("Error fetching parks:", error);
      }
    };

    fetchParks();
  }, [slug]);

  if (!parks.length) return null;

  const renderContent = () => {
    if (parks.length <= 4) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 1440:grid-cols-4 gap-0 w-full">
          {parks.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
      );
    }

    return (
      <>
        <Swiper
          modules={[Navigation]}
          className="state-swiper max-w-full"
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 2, slidesPerGroup: 1 },
            1280: { slidesPerView: 3, slidesPerGroup: 1 },
            1440: { slidesPerView: 4, slidesPerGroup: 1 },
          }}
        >
          {parks.map((park) => (
            <SwiperSlide key={park.id}>
              <ParkCard park={park} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex items-center mt-5 lg:mt-10 gap-4 h-10 lg:h-20 w-full">
          <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
            <img src="/state/stateprev.svg" alt="Prev" />
          </button>
          <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
            <img src="/state/statenext.svg" alt="Next" />
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="w-full flex flex-col overflow-hidden">
      {renderContent()}
    </div>
  );
};

export default ParksSliderF;