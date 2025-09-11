// "use client";
// import React from "react";

// export default function TimelineContent({ events = [] }) {
//   return (
//     <div className="relative w-full h-[80vh] overflow-y-auto pr-4">
//       <div className="relative grid items-start grid-cols-1 gap-8 md:grid-cols-3">
//         {events.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start w-full pb-4 border-b border-gray-600"
//           >
//             {item.image && (
//               <img
//                 src={item.image}
//                 alt="timeline-img"
//                 className="object-cover w-full h-40 mb-3 rounded-none"
//               />
//             )}
//             {item.icon && (
//               <img
//                 src={item.icon}
//                 alt="timeline-icon"
//                 className="w-[70px] h-[70px] mb-2"
//               />
//             )}
//             <p className="pt-3 text-sm sm:text-[20px] leading-[30px] bw-r text-[#E0E0E0] ">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import React from "react";

// export default function TimelineContent({ events = [] }) {
//   return (
//     <div
//       className="relative w-full h-[80vh] overflow-y-auto pr-4 custom-scroll"
//       data-lenis-prevent
//       style={{ overscrollBehavior: "auto" }}
//     >
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-3 min-h-[100%]">
//         {events.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start w-full pb-4 border-b border-gray-600"
//           >
//             {item.image && (
//               <img
//                 src={item.image}
//                 alt="timeline-img"
//                 className="object-cover w-full h-40 mb-3 rounded-none"
//               />
//             )}
//             {item.icon && (
//               <img
//                 src={item.icon}
//                 alt="timeline-icon"
//                 className="w-[70px] h-[70px] mb-2"
//               />
//             )}
//             <p className="pt-3 text-sm sm:text-[20px] leading-[30px] bw-r text-[#E0E0E0]">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import React from "react";

// export default function TimelineContent({ events = [] }) {
//   return (
//     <div className="relative w-full h-[80vh]  pr-4 custom-scroll overflow-y-auto">
//       <div
//         className="
//           grid gap-6 items-start
//           grid-cols-2      /* mobile: 2-col masonry */
//           sm:grid-cols-2   /* small screens keep 2 */
//           md:grid-cols-3   /* desktop: 3-col masonry */
//         "
//       >
//         {events.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start w-full pb-4 border-b border-gray-600"
//           >
//             {item.image && (
//               <img
//                 src={item.image}
//                 alt="timeline-img"
//                 className="w-full h-40 mb-3 object-cover"
//               />
//             )}
//             {item.icon && (
//               <img
//                 src={item.icon}
//                 alt="timeline-icon"
//                 className="w-[70px] h-[70px] mb-2"
//               />
//             )}
//             <p className="pt-3 text-sm bw-r sm:text-base md:text-lg leading-relaxed text-[#E0E0E0]">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";

// export default function TimelineContent({ events = [] }) {
//   return (
//     <div className="relative w-full h-[80vh] pr-4 custom-scroll overflow-y-auto">
//       <div
//         className="
//           grid gap-6 items-start
//           grid-cols-2      /* mobile: 2 cols */
//           md:grid-cols-2   /* small screens: 2 cols */
//           lg:grid-cols-3   /* desktop: 3 cols */
//         "
//       >
//         {events.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col max-h-fit items-start w-full pb-6 border-b border-gray-600"
//           >
//             {item.image && (
//               <img
//                 src={item.image}
//                 alt="timeline-img"
//                 className="w-full h-44 sm:h-56 mb-3 object-cover"
//               />
//             )}
//             {item.icon && (
//               <img
//                 src={item.icon}
//                 alt="timeline-icon"
//                 className="sm:w-[80px] w-[46px] h-[46px] sm:h-[80px]"
//               />
//             )}
//             <p className="pt-3 text-base sm:text-lg md:text-xl leading-relaxed text-[#E0E0E0]">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import React from "react";

// export default function TimelineContent({ events = [] }) {
//   // detect tablet viewport → slice to 6 items only
//   const isTablet =
//     typeof window !== "undefined" &&
//     window.innerWidth >= 768 &&
//     window.innerWidth < 1024;
//   const visibleEvents = isTablet ? events.slice(0, 6) : events;

//   return (
//     <div className="relative w-full h-[80vh] pr-4 custom-scroll overflow-y-auto">
//       <div
//         className="
//           grid gap-6 items-start
//           grid-cols-2      /* mobile: 2 cols */
//           md:grid-cols-2   /* small screens: 2 cols */
//           lg:grid-cols-3   /* desktop: 3 cols */
//         "
//       >
//         {visibleEvents.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start w-full pb-6 border-b border-gray-600"
//           >
//             {item.image && (
//               <img
//                 src={item.image}
//                 alt="timeline-img"
//                 className="w-full h-44 sm:h-56 mb-3 object-cover"
//               />
//             )}
//             {item.icon && (
//               <img
//                 src={item.icon}
//                 alt="timeline-icon"
//                 className="w-[80px] h-[80px] mb-2"
//               />
//             )}
//             <p className="pt-3 text-base sm:text-lg md:text-xl leading-relaxed text-[#E0E0E0]">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function TimelineContent({ events = [] }) {
//   return (
//     <div className="relative w-full h-[650px] 1280:h-[656px] pr-4 custom-scroll overflow-y-auto">
//       {/* Masonry layout with CSS columns */}
//       <div className="columns-2 md:columns-2 lg:columns-3 gap-6">
//         {events.map((item, index) => (
//           <div
//             key={index}
//             className="mb-6 break-inside-avoid border-b border-gray-600 pb-6 flex flex-col items-start"
//           >
//             {item.image && (
//               <img
//                 src={item.image}
//                 alt="timeline-img"
//                 className="w-full h-40 sm:h-56 mb-3 object-cover"
//               />
//             )}
//             {item.icon && (
//               <img
//                 src={item.icon}
//                 alt="timeline-icon"
//                 className="w-[80px] h-[80px] mb-2"
//               />
//             )}
//             <p className="pt-3 text-[14px] leading-[24px] sm:text-lg md:text-xl sm:leading-relaxed text-[#E0E0E0]">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";

export default function TimelineContent({ events = [] }) {
  return (
    <div className="relative w-full  md:h-[650px] 1280:h-[600px] pr-4 custom-scroll overflow-y-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={JSON.stringify(events)} // Forces re-animation on data change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
          data-lenis-prevent
          className="columns-2 md:columns-2 lg:columns-3 gap-6 1280:gap-[60px]"
        >
          {/* {events.map((item, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid border-b border-gray-600 pb-6 flex flex-col items-start"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt="timeline-img"
                  className="w-full h-40 sm:h-[128px] mb-3 object-cover"
                />
              )}
              {item.icon && (
                <img
                  src={item.icon}
                  alt="timeline-icon"
                  className="w-[80px] h-[80px] mb-2"
                />
              )}
              <p className="pt-3 text-[14px] leading-[24px] bw-r sm:text-lg md:text-xl 1280:leading-[30px] sm:leading-relaxed text-[#E0E0E0]">
                {item.text}
              </p>
            </div>
          ))} */}
          {events.map((item, index) => {
            // Randomly choose layout type
            const layoutType = index % 4; // or use Math.random() for true randomness

            return (
              <div
                key={index}
                className="mb-6 break-inside-avoid border-b border-[#4B4B4B] pb-6 flex flex-col items-start"
              >
                {/* Layout variations */}
                {layoutType === 0 && (
                  <>
                    {item.image && (
                      <img
                        src={item.image}
                        alt="timeline-img"
                        className="w-full sm:w-[284px] h-[128px] sm:h-[150px] mb-3 object-cover"
                      />
                    )}
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt="timeline-icon"
                        className="sm:w-[80px] w-[46px] h-[46px] sm:h-[80px] mb-2"
                      />
                    )}
                    <p className="pt-3 text-[14px] leading-[24px] bw-r sm:text-lg md:text-xl 1280:leading-[30px] sm:leading-relaxed text-[#E0E0E0]">
                      {item.text}
                    </p>
                  </>
                )}

                {layoutType === 1 && (
                  <>
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt="timeline-icon"
                        className="sm:w-[80px] w-[46px] h-[46px] sm:h-[80px]"
                      />
                    )}
                    <p className="pt-3 text-[14px] leading-[24px] bw-r sm:text-lg md:text-xl 1280:leading-[30px] sm:leading-relaxed text-[#E0E0E0]">
                      {item.text}
                    </p>
                    {item.image && (
                      <img
                        src={item.image}
                        alt="timeline-img"
                        className="w-full sm:w-[284px] h-[128px] sm:h-[150px] mt-3 object-cover"
                      />
                    )}
                  </>
                )}

                {layoutType === 2 && (
                  <>
                    <p className="pb-3 text-[14px] leading-[24px] bw-r sm:text-lg md:text-xl 1280:leading-[30px] sm:leading-relaxed text-[#E0E0E0]">
                      {item.text}
                    </p>
                    {item.image && (
                      <img
                        src={item.image}
                        alt="timeline-img"
                        className="w-full sm:w-[284px] h-[128px] sm:h-[150px] mb-3 object-cover"
                      />
                    )}
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt="timeline-icon"
                        className="sm:w-[80px] w-[46px] h-[46px] sm:h-[80px]"
                      />
                    )}
                  </>
                )}

                {layoutType === 3 && (
                  <>
                    {item.image && (
                      <img
                        src={item.image}
                        alt="timeline-img"
                        className="w-full sm:w-[284px] h-[128px] sm:h-[150px] mb-3 object-cover"
                      />
                    )}
                    <p className="pb-3 text-[14px] leading-[24px] bw-r sm:text-lg md:text-xl 1280:leading-[30px] sm:leading-relaxed text-[#E0E0E0]">
                      {item.text}
                    </p>
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt="timeline-icon"
                        className="sm:w-[80px] w-[46px] h-[46px] sm:h-[80px]"
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
