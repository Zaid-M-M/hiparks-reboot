// import React from "react";
// import ArrowList from "./ArrowList";

// const IndustrialLandScape = ({ data }) => {
//   return (
//     <div className="bg-black py-[100px]">
//       <div className="fixup">
//         <h1
//           className="text-[56px] leading-[66px] bw-m tracking-[-0.04em] bg-clip-text text-transparent"
//           style={{
//             backgroundImage: "linear-gradient(94deg, #AC38D9 0%, #F47922 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           {data.title}
//         </h1>
//       </div>

//       {/* Two column layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-[75px] fixup mt-10">
//         {/* Left column (text) */}
//         <div className="flex flex-col gap-6">
//           <p className="bw-r text-[20px] text-[#E0E0E0] leading-[34px]">
//             {data.paragraph}
//           </p>
//         </div>

//         {/* Right column (Arrow list) */}
//         <div>
//           <ArrowList />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustrialLandScape;
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
// import React from "react";
// import ArrowList from "./ArrowList";

// const IndustrialLandScape = ({ data }) => {
//   return (
//     <div className="bg-black py-[100px]">
//       <div className="fixup">
//         <h1
//           className="lg:text-[56px] xl:text-[64px] text-[32px] leading-[42px] lg:leading-[66px] bw-m tracking-[-0.04em] bg-clip-text text-transparent bg-[linear-gradient(97deg,#AC38D9_13.98%,#F47922_67.51%)]"
//           dangerouslySetInnerHTML={{ __html: data.title }}
//         />
//       </div>

//       {/* Two column layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-[75px] fixup mt-10">
//         {/* Left column (text) */}
//         <div className="flex flex-col gap-6">
//           <p
//             className="bw-r text-[20px] text-[#E0E0E0] leading-[34px]"
//             dangerouslySetInnerHTML={{ __html: data.paragraph }}
//           />
//         </div>

//         {/* Right column (Arrow list) */}
//         <div>
//           {/* Assuming data.arrowList contains HTML (like <ul><li>..</li></ul>) */}
//           {data.arrowList ? (
//             <div dangerouslySetInnerHTML={{ __html: data.arrowList }} />
//           ) : (
//             <ArrowList />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustrialLandScape;
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
// import React from "react";
// import ArrowList from "./ArrowList";

// const IndustrialLandScape = ({ data }) => {
//   return (
//     <div className="bg-black py-[100px]">
//       <div className="fixup">
//         {/* Sticky Title */}
//         <h1
//           className="lg:text-[56px] xl:text-[64px] text-[32px] leading-[42px] lg:leading-[66px] bw-m tracking-[-0.04em] bg-clip-text text-transparent bg-[linear-gradient(97deg,#AC38D9_13.98%,#F47922_67.51%)] sticky top-10"
//           dangerouslySetInnerHTML={{ __html: data.title }}
//         />
//       </div>

//       {/* Two column layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-[75px] fixup mt-10">
//         {/* Left column (text) */}
//         <div className="flex flex-col gap-6">
//           <p
//             className="bw-r text-[20px] text-[#E0E0E0] flex flex-col gap-y-5 leading-[34px]"
//             dangerouslySetInnerHTML={{ __html: data.paragraph }}
//           />
//         </div>

//         {/* Right column (Arrow list, sticky) */}
//         <div className="sticky top-20 self-start">
//           {data.arrowList ? (
//             <div dangerouslySetInnerHTML={{ __html: data.arrowList }} />
//           ) : (
//             <ArrowList />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustrialLandScape;
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
// import React from "react";
// import ArrowList from "./ArrowList";

// const IndustrialLandScape = ({ data }) => {
//   return (
//     <div className="bg-black py-[45px] lg:py-[100px]">
//       {/* <div className="fixup">
//         <h1
//           className="lg:text-[56px] xl:text-[64px] text-[32px] leading-[42px] lg:leading-[66px] bw-m tracking-[-0.04em] bg-clip-text text-transparent bg-[linear-gradient(97deg,#AC38D9_13.98%,#F47922_67.51%)] sticky top-10"
//           dangerouslySetInnerHTML={{ __html: data.title }}
//         />
//       </div> */}
//       <div className="fixup">
//         <h1
//           className="lg:text-[56px] max-w-fit xl:text-[64px] text-[32px] leading-[42px] lg:leading-[66px] bw-m tracking-[-0.04em]
//                bg-clip-text text-transparent
//                bg-[linear-gradient(94deg,#AC38D9_26.11%,#F47922_67.85%)]
//                sticky top-10"
//           dangerouslySetInnerHTML={{ __html: data.title }}
//         />
//       </div>

//       {/* Two column layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-[75px] fixup mt-5 lg:mt-10">
//         {/* Left column (text with fade overlay) */}
//         <div className="relative flex flex-col gap-6 overflow-hidden">
//           {/* Top fade */}
//           {/* <div className="pointer-events-none absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-black/60 to-transparent z-10" /> */}
//           {/* Bottom fade */}
//           <div className="pointer-events-none absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/60 to-transparent z-10" />

//           <p
//             className="bw-r text-[16px] leading-[26px] lg:text-[20px] lg:leading-[34px] text-[#E0E0E0] flex flex-col gap-2 lg:gap-5 relative z-0"
//             dangerouslySetInnerHTML={{ __html: data.paragraph }}
//           />
//         </div>

//         {/* Right column (Arrow list, sticky) */}
//         <div className="sticky top-8 self-start">
//           {data.arrowList ? (
//             <div dangerouslySetInnerHTML={{ __html: data.arrowList }} />
//           ) : (
//             <ArrowList />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustrialLandScape;
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
import React from "react";
import ArrowList from "./ArrowList";

const IndustrialLandScape = ({ data }) => {
  return (
    <div className="bg-black py-[45px] lg:py-[100px]">
      <div className="fixup">
        <h1
          className="lg:text-[56px] max-w-fit xl:text-[64px] text-[32px] leading-[150%] -mt-5 bw-m tracking-[-0.04em]
               bg-clip-text text-transparent
               bg-[linear-gradient(94deg,#AC38D9_26.11%,#F47922_67.85%)]
               sticky top-10"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
      </div>

      {/* Two column layout */}
      <div className="fixup mt-5 lg:mt-10 flex flex-col lg:flex-row gap-10 xl:gap-[75px] items-stretch">
        {/* Left column (text with fade overlay, scrollable if needed) */}
        <div className="relative flex-1 flex flex-col overflow-hidden">
          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/60 to-transparent z-10" />

          <div className="overflow-y-auto pr-2">
            <p
              className="bw-r text-[16px] leading-[26px] lg:text-[20px] lg:leading-[34px] text-[#E0E0E0] flex flex-col gap-2 lg:gap-5"
              dangerouslySetInnerHTML={{ __html: data.paragraph }}
            />
          </div>
        </div>

        {/* Right column (Arrow list, sticky) */}
        <div className="flex-1 sticky top-8 self-start">
          {data.arrowList ? (
            <div dangerouslySetInnerHTML={{ __html: data.arrowList }} />
          ) : (
            <ArrowList />
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustrialLandScape;
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
// import React, { useRef, useEffect, useState } from "react";
// import ArrowList from "./ArrowList";

// const IndustrialLandScape = ({ data }) => {
//   const rightRef = useRef(null);
//   const leftRef = useRef(null);
//   const [rightHeight, setRightHeight] = useState(0);

//   useEffect(() => {
//     if (!rightRef.current || !leftRef.current) return;

//     const updateHeight = () => {
//       const height = rightRef.current.offsetHeight;
//       setRightHeight(height);
//     };

//     // Initial height set
//     updateHeight();

//     // Update on window resize
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, [data.arrowList]);

//   return (
//     <div className="bg-black py-[45px] lg:py-[100px]">
//       {/* Heading */}
//       <div className="fixup">
//         <h1
//           className="lg:text-[56px] max-w-fit xl:text-[64px] text-[32px] leading-[42px] lg:leading-[66px] bw-m tracking-[-0.04em]
//                bg-clip-text text-transparent
//                bg-[linear-gradient(94deg,#AC38D9_26.11%,#F47922_67.85%)]"
//           dangerouslySetInnerHTML={{ __html: data.title }}
//         />
//       </div>

//       {/* Two column layout */}
//       <div className="fixup mt-5 lg:mt-10 flex flex-col lg:flex-row gap-10 xl:gap-[75px] items-stretch">
//         {/* Left column */}
//         <div
//           ref={leftRef}
//           className="relative flex-1 flex flex-col overflow-hidden"
//           style={{ height: rightHeight }}
//         >
//           {/* Bottom fade aligned with arrow list */}
//           <div
//             className="pointer-events-none absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/60 to-transparent z-10"
//             style={{ bottom: 0 }}
//           />

//           <div className="overflow-hidden pr-2">
//             <p
//               className="bw-r text-[16px] leading-[26px] lg:text-[20px] lg:leading-[34px] text-[#E0E0E0] flex flex-col gap-2 lg:gap-5"
//               dangerouslySetInnerHTML={{ __html: data.paragraph }}
//             />
//           </div>
//         </div>

//         {/* Right column */}
//         <div ref={rightRef} className="flex-1 self-start">
//           {data.arrowList ? (
//             <div dangerouslySetInnerHTML={{ __html: data.arrowList }} />
//           ) : (
//             <ArrowList />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustrialLandScape;
