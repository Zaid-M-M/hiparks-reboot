// import React from "react";

// const Indicators = ({ data }) => {
//   return (
//     <section className="relative fixup md:py-[80px] lg:py-[100px] py-[45px] bg-white">
//       <div className="flex flex-col lg:flex-row justify-between gap-[40px]">
//         {/* Left column */}
//         <div className="lg:max-w-[45%] max-w-[600px] relative">
//           <div className="sticky top-[100px] flex flex-col gap-5">
//             <h1 className="text-[56px] leading-[60px] tracking-[-0.04em]">
//               <span className="bw-r block">Economic</span>
//               <span className="bw-m block">Indicators</span>
//             </h1>
//             <img
//               src="/abstract_pattern.svg"
//               className="object-cover h-[58px] w-[318px]"
//               alt="Gradient bar"
//             />
//           </div>
//         </div>

//         {/* Right column */}
//         <div className="relative lg:max-w-[55%] w-full">
//           <div className="sticky top-[100px] flex flex-col gap-10 max-h-[80vh] overflow-y-auto pr-4 no-scrollbar">
//             {data.map((item, idx) => (
//               <div key={idx} className="border-b border-gray-200 pb-6">
//                 <h2 className="text-[76px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
//                   <span dangerouslySetInnerHTML={{ __html: item.value }} />
//                 </h2>
//                 <p
//                   className="text-[16px] text-gray-600"
//                   dangerouslySetInnerHTML={{ __html: item.label }}
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Indicators;
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
// import { motion } from "framer-motion";

// const Indicators = ({ data }) => {
//   return (
//     <section className="relative fixup md:py-[80px] lg:py-[100px] py-[45px] bg-white">
//       <div className="flex flex-col lg:flex-row justify-between gap-[40px]">
//         {/* Left column (sticky) */}
//         <div className="lg:max-w-[45%] max-w-[600px] relative">
//           <div className="sticky top-[100px] flex flex-col gap-5">
//             <h1 className="text-[56px] leading-[60px] tracking-[-0.04em]">
//               <span className="bw-r block">Economic</span>
//               <span className="bw-m block">Indicators</span>
//             </h1>
//             <img
//               src="/abstract_pattern.svg"
//               className="object-cover h-[58px] w-[318px]"
//               alt="Gradient bar"
//             />
//           </div>
//         </div>

//         {/* Right column (full scrollable section) */}
//         <div className="relative lg:max-w-[55%] w-full">
//           <div className="flex flex-col gap-10 relative">
//             {data.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 className="border-b border-gray-200 pb-6"
//                 initial={{ opacity: 0, filter: "blur(10px)" }}
//                 whileInView={{ opacity: 1, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, filter: "blur(10px)" }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 viewport={{ once: false, amount: 0.2 }}
//               >
//                 <h2 className="text-[76px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
//                   <span dangerouslySetInnerHTML={{ __html: item.value }} />
//                 </h2>
//                 <p
//                   className="text-[16px] text-gray-600"
//                   dangerouslySetInnerHTML={{ __html: item.label }}
//                 />
//               </motion.div>
//             ))}
//           </div>

//           {/* Gradient overlays for top & bottom */}
//           <div className="pointer-events-none absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-white to-transparent"></div>
//           <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-white to-transparent"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Indicators;
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
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const IndicatorItem = ({ item }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });

//   return (
//     <motion.div
//       ref={ref}
//       className="border-b border-gray-200 pb-6"
//       animate={inView ? "visible" : "hidden"}
//       initial="hidden"
//       variants={{
//         visible: { opacity: 1, filter: "blur(0px)" },
//         hidden: { opacity: 0, filter: "blur(10px)" },
//       }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <h2 className="text-[76px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
//         <span dangerouslySetInnerHTML={{ __html: item.value }} />
//       </h2>
//       <p
//         className="text-[16px] text-gray-600"
//         dangerouslySetInnerHTML={{ __html: item.label }}
//       />
//     </motion.div>
//   );
// };

// const Indicators = ({ data }) => {
//   return (
//     <section className="relative fixup md:py-[80px] lg:py-[100px] py-[45px] bg-white">
//       <div className="flex flex-col lg:flex-row justify-between gap-[40px] relative">
//         {/* Left column (sticky) */}
//         <div className="lg:max-w-[45%] max-w-[600px] relative">
//           <div className="sticky top-[100px] self-start">
//             <h1 className="text-[56px] leading-[60px] tracking-[-0.04em] mb-5">
//               <span className="bw-r block">Economic</span>
//               <span className="bw-m block">Indicators</span>
//             </h1>
//             <img
//               src="/abstract_pattern.svg"
//               className="object-cover h-[58px] w-[318px]"
//               alt="Gradient bar"
//             />
//           </div>
//         </div>

//         {/* Right column */}
//         <div className="relative lg:max-w-[55%] w-full">
//           <div className="flex flex-col gap-10 relative">
//             {data.map((item, idx) => (
//               <IndicatorItem key={idx} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Indicators;
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
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// const IndicatorItem = ({ item, idx }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, {
//     margin: "-20% 0px -20% 0px",
//     once: false, // track continuously
//   });

//   return (
//     <motion.div
//       ref={ref}
//       className="border-b border-gray-200 pb-6"
//       animate={inView ? "visible" : "hidden"}
//       initial="hidden"
//       variants={{
//         visible: { opacity: 1, filter: "blur(0px)" },
//         hidden: { opacity: 0, filter: "blur(10px)" },
//       }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <h2 className="text-[32px] md:text-[48px] lg:text-[76px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
//         <span dangerouslySetInnerHTML={{ __html: item.value }} />
//       </h2>
//       <p
//         className="text-[16px] text-gray-600"
//         dangerouslySetInnerHTML={{ __html: item.label }}
//       />
//     </motion.div>
//   );
// };
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ReactLenis } from "lenis/react";
const IndicatorItem = ({ item }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
    once: false,
  });

  // detect mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  // If mobile, just return a plain div (no animation)
  if (isMobile) {
    return (
      <div ref={ref} className="border-b border-gray-200 pb-6">
        <h2 className="text-[32px] md:text-[48px] lg:text-[76px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
          <span dangerouslySetInnerHTML={{ __html: item.value }} />
        </h2>
        <p
          className="text-[16px] text-gray-600"
          dangerouslySetInnerHTML={{ __html: item.label }}
        />
      </div>
    );
  }

  // Desktop → use animation
  return (
    <motion.div
      ref={ref}
      className="border-b border-gray-200 pb-6"
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
      variants={{
        // visible: { opacity: 1, filter: "blur(0px)" },
        // hidden: { opacity: 0.4, filter: "blur(8px)" },
        visible: { opacity: 1 },
        hidden: { opacity: 0.2 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-[32px] md:text-[48px] lg:text-[76px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
        <span dangerouslySetInnerHTML={{ __html: item.value }} />
      </h2>
      <p
        className="text-[16px] text-gray-600"
        dangerouslySetInnerHTML={{ __html: item.label }}
      />
    </motion.div>
  );
};

// const Indicators = ({ data }) => {
//   return (
//     <ReactLenis root>
//       <div className="w-full bg-white relative overflow-hidden">
//         <img
//           className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px] md:left-[auto]  md:right-[0px] left-[-80px] md:top-[0px] lg:top-[-120px] xl:left-[-180px] 1920:left-[-50px]"
//           src="/green_vector.svg"
//         />
//         <img
//           className="orange_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px]  md:left-[auto] md:right-[0px] left-[0px] md:top-[-80px] lg:top-[-120px] xl:left-[100px] 1920:left-[100px]"
//           src="/orange_vector.svg"
//         />
//         <section className="relative h-full fix md:py-[80px] lg:py-[100px] py-[45px] overflow-hidden">
//           <div className="flex flex-col md:flex-row justify-between gap-[40px] relative">
//             {/* Left column (sticky) */}
//             <div className="lg:max-w-[45%] max-w-[600px] relative">
//               <div className="sticky top-[100px] self-start">
//                 <h1
//                   // className="md:text-[64px] text-[32px] leading-[42px] md:leading-[74px] tracking-[-0.04em] mb-2 lg:mb-5"
//                   className="md64m mb-2 lg:mb-5"
//                 >
//                   <span className="md64r block">Economic</span>
//                   <span className="bw-m block">Indicators</span>
//                 </h1>
//                 {/* <img
//                 src="/abstract_pattern.svg"
//                 className="object-cover h-[58px] lg:w-[318px] md:w-[318px] w-[100px]"
//                 alt="Grade A Box"
//               /> */}

//                 <img
//                   src="/abstract_pattern.svg"
//                   className="object-cover lg:h-[58px] h-[40px] lg:w-[318px] md:w-full w-auto"
//                   alt="Grade A Box"
//                 />
//               </div>
//             </div>

//             {/* Right column */}
//             <div className="relative lg:max-w-[55%] md:w-[55%]">
//               <div className="flex flex-col gap-5 lg:gap-10 relative">
//                 {data.map((item, idx) => (
//                   <IndicatorItem key={idx} item={item} idx={idx} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </ReactLenis>
//   );
// };
const Indicators = ({ data }) => {
  return (
    <ReactLenis root>
      {/* Outer wrapper – no overflow-hidden here */}
      <div className="w-full bg-white relative ">
        {/* <img
          className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] 
             top-0 right-0 lg:top-[-120px] xl:top-[-150px]"
          src="/green_vector.svg"
          alt="green vector"
        />
        <img
          className="orange_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] 
             top-0 right-0 md:top-[-80px] lg:top-[-120px] xl:-right-[100px]"
          src="/orange_vector.svg"
          alt="orange vector"
        /> */}

        <section className="relative h-full fix md:py-[80px] lg:py-[100px] py-[45px]">
          {/* Put overflow-hidden here instead if you need it */}
          <div className="flex flex-col md:flex-row justify-between gap-[40px] relative">
            {/* Left column (sticky) */}
            <div className="lg:max-w-[45%] max-w-[600px] relative">
              <div className="sticky top-[100px] self-start">
                <h1 className="md64m mb-2 lg:mb-5">
                  <span className="md64r block">Economic</span>
                  <span className="bw-m block">Indicators</span>
                </h1>

                <img
                  src="/abstract_pattern.svg"
                  className="object-cover lg:h-[58px] h-[40px] lg:w-[368px] md:w-full w-auto"
                  alt="Grade A Box"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="relative max-h-[500px] overflow-hidden lg:max-w-[55%] md:w-[55%]">
              <div className="flex flex-col gap-5 lg:gap-10 relative">
                {data.map((item, idx) => (
                  <IndicatorItem key={idx} item={item} idx={idx} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};
export default Indicators;
