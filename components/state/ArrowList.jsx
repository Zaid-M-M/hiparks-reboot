// "use client";
// import React from "react";
// import { ArrowRight } from "lucide-react"; // optional (or use your own svg)

// const items = [
//   "Agriculture and Food Processing",
//   "Tourism and Hospitality",
//   "Information Technology and Information Technology Enabled Services (IT and ITeS)",
//   "Construction and Real Estate",
//   "Education",
//   "Health",
// ];

// const ArrowList = () => {
//   return (
//     <div className="flex flex-col w-full gap-6 relative">
//       {/* vertical line */}
//       <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-pink-500 to-purple-600" />

//       {items.map((text, idx) => (
//         <div key={idx} className="flex items-center gap-4 pl-6 relative">
//           {/* arrow head */}
//           <div className="flex-shrink-0 text-pink-500">
//             <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
//           </div>

//           {/* text */}
//           <p className="text-black text-base leading-snug">{text}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ArrowList;

// "use client";
// import React from "react";

// const items = [
//   "Agriculture and Food Processing",
//   "Tourism and Hospitality",
//   "Information Technology and Information Technology Enabled Services (IT and ITeS)",
//   "Construction and Real Estate",
//   "Education",
//   "Health",
// ];

// const ArrowList = () => {
//   return (
//     <div className="flex flex-col gap-10 relative">
//       {/* Vertical line */}
//       <div className="absolute left-0 top-0 bottom-0 w-px bg-pink-600" />

//       {items.map((text, idx) => (
//         <div key={idx} className="relative flex items-center">
//           {/* Horizontal connector line */}
//           <div className="absolute left-0 top-1/2 w-6 border-t border-pink-600" />

//           {/* Arrow head */}
//           <div className="ml-6 mr-3 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-pink-600" />

//           {/* Text */}
//           <p className="text-white bw-m text-[24px] leading-[34px]">{text}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ArrowList;

// "use client";
// import React, { useEffect, useRef, useState } from "react";

// const items = [
//   "Agriculture and Food Processing",
//   "Tourism and Hospitality",
//   "Information Technology and Information Technology Enabled Services (IT and ITeS)",
//   "Construction and Real Estate",
//   "Education",
//   "Health",
// ];

// export default function ArrowList() {
//   const wrapRef = useRef(null);
//   const rowRefs = useRef([]);
//   const [vLine, setVLine] = useState({ top: 0, height: 0 });

//   useEffect(() => {
//     const measure = () => {
//       if (!wrapRef.current || rowRefs.current.length === 0) return;
//       const wrapRect = wrapRef.current.getBoundingClientRect();
//       const first = rowRefs.current[0];
//       const last = rowRefs.current[rowRefs.current.length - 1];
//       if (!first || !last) return;

//       const fr = first.getBoundingClientRect();
//       const lr = last.getBoundingClientRect();

//       const top = fr.top - wrapRect.top + fr.height / 2;
//       const bottom = lr.top - wrapRect.top + lr.height / 2;

//       setVLine({ top, height: Math.max(0, bottom - top) });
//     };

//     measure();
//     const ro = new ResizeObserver(measure);
//     ro.observe(wrapRef.current);
//     rowRefs.current.forEach((el) => el && ro.observe(el));
//     window.addEventListener("resize", measure);

//     return () => {
//       ro.disconnect();
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   // left gutter: 48px; vertical line sits at 12px; connector goes 16px to the arrow base at 28px
//   return (
//     <div ref={wrapRef} className="relative grid grid-cols-[48px_1fr] gap-y-10">
//       {/* vertical line from first to last arrow centers */}
//       <div
//         className="absolute w-px bg-pink-600"
//         style={{ left: 12, top: vLine.top, height: vLine.height }}
//       />

//       {items.map((text, i) => (
//         <React.Fragment key={i}>
//           {/* left cell (row height == text height). We measure this. */}
//           <div
//             ref={(el) => (rowRefs.current[i] = el)}
//             className="relative h-full"
//           >
//             {/* horizontal connector */}
//             <div className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[16px] border-t border-pink-600" />
//             {/* arrow head (right-pointing triangle) */}
//             <div className="absolute left-[28px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-pink-600" />
//           </div>

//           {/* text cell */}
//           <div className="text-white bw-m text-[24px] leading-[34px]">
//             {text}
//           </div>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
"use client";
import React, { useEffect, useRef, useState } from "react";

const items = [
  "Agriculture and Food Processing",
  "Tourism and Hospitality",
  "Information Technology and Information Technology Enabled Services (IT and ITeS)",
  "Construction and Real Estate",
  "Education",
  "Health",
];

export default function ArrowList() {
  const wrapRef = useRef(null);
  const rowRefs = useRef([]);
  const [vLine, setVLine] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const measure = () => {
      if (!wrapRef.current || rowRefs.current.length === 0) return;
      const wrapRect = wrapRef.current.getBoundingClientRect();
      const first = rowRefs.current[0];
      const last = rowRefs.current[rowRefs.current.length - 1];
      if (!first || !last) return;

      const fr = first.getBoundingClientRect();
      const lr = last.getBoundingClientRect();

      const top = fr.top - wrapRect.top + fr.height / 2;
      const bottom = lr.top - wrapRect.top + lr.height / 2;

      setVLine({ top, height: Math.max(0, bottom - top) });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrapRef.current);
    rowRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative grid grid-cols-[70px_1fr] justify-between gap-y-10 lg:gap-y-16"
    >
      {/* vertical gradient line */}
      <div
        className="absolute w-[2px] bg-[#8B37A4] lg:left-[16px] left-0"
        style={{
          // left: "16px",
          top: vLine.top,
          height: vLine.height,
          // background: "linear-gradient(180deg, #f47920 0%, #8B37A4 77%)",
        }}
      />

      {items.map((text, i) => (
        <React.Fragment key={i}>
          {/* left cell */}
          <div
            ref={(el) => (rowRefs.current[i] = el)}
            className="relative h-full"
          >
            {/* horizontal connector (extend to arrow base) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[2px] lg:left-[16px] left-0"
              style={{
                // left: "16px",
                width: "40px", // extended to touch arrow
                background: "linear-gradient(90deg, #8B37A4 0%, #f47920 90%)",
              }}
            />

            {/* triangle arrow (shifted left to remove gap) */}
            <svg
              className="absolute top-1/2 -translate-y-1/2 left-[36px] lg:left-[52px]" // moved closer
              width="18"
              height="18"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id={`grad-fill-${i}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f47920" />
                  <stop offset="77%" stopColor="#f47920" />
                </linearGradient>
              </defs>
              <polygon points="6,4 20,12 6,20" fill={`url(#grad-fill-${i})`} />
            </svg>
          </div>

          {/* text cell */}
          <div className="text-white text-[16px] leading-[26px] lg:text-[22px] lg:leading-[32px] lg:ml-3">
            {text}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
