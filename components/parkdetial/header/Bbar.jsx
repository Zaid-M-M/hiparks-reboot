// import React from "react";

// const Bbar = ({ stats }) => {
//   if (!stats || !Array.isArray(stats) || stats.length === 0) return null;

//   return (
//     <div className="fix bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-white py-4 px-6 flex flex-wrap gap-8 justify-start md:justify-center mt-6">
//       {stats.map((item, idx) => (
//         <div key={idx} className="flex flex-col">
//           <span className="uppercase text-[12px] opacity-70">{item.label}</span>
//           <span className="text-[18px] font-semibold">{item.value}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Bbar;
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

// const Bbar = ({ stats }) => {
//   if (!stats || !Array.isArray(stats) || stats.length === 0) return null;

//   return (
//     <div className="w-full bg-white/30 backdrop-blur-[45px] text-white py-4 px-6 flex flex-wrap md:gap-8 gap-4 md:justify-around md:h-[160px] md:items-center mt-6">
//       {stats.map((item, idx) => (
//         <div
//           key={idx}
//           className="flex flex-col md:w-auto w-[40%] justify-start"
//         >
//           <span className="uppercase text-[14px] md:text-[16px] bw-r">
//             {item.label}
//           </span>
//           <span className="text-[18px] md:text-[32px] bw-m capitalize valuetext">
//             {item.value}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Bbar;
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

// const Bbar = ({ stats }) => {
//   if (!stats || !Array.isArray(stats) || stats.length === 0) return null;

//   return (
//     <div className="w-full bg-white/30 backdrop-blur-[45px] text-white py-4 px-6 flex flex-wrap md:gap-8 gap-4 md:justify-around md:h-[160px] md:items-center mt-6">
//       {stats.map((item, idx) =>
//         item.value ? (
//           <div
//             key={idx}
//             className="flex flex-col md:w-auto w-[40%] justify-start"
//           >
//             {item.label && (
//               <span className="uppercase text-[14px] md:text-[16px] bw-r">
//                 {item.label}
//               </span>
//             )}
//             <span className="text-[14px] md:text-[32px] bw-m capitalize valuetext">
//               {item.value}
//             </span>
//           </div>
//         ) : null
//       )}
//     </div>
//   );
// };

// export default Bbar;
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

// const Bbar = ({ stats }) => {
//   if (!stats || !Array.isArray(stats) || stats.length === 0) return null;

//   return (
//     <div className="w-full bg-white/30 backdrop-blur-[45px] text-white py-4 px-6 flex flex-wrap xl:gap-8  gap-4 md:justify-around lg:h-[130px] xl:h-[160px] md:items-center mt-6">
//       {stats.map(
//         (item, idx) =>
//           item.value && (
//             <div
//               key={idx}
//               className="flex flex-col md:w-auto w-[40%] justify-start"
//             >
//               {item.label && (
//                 <span
//                   className="uppercase text-[14px] md:text-[16px] bw-r"
//                   dangerouslySetInnerHTML={{ __html: item.label }}
//                 />
//               )}
//               <span
//                 className="text-[16px] md:pt-0 pt-1 md:text-[32px] !leading-[110%] bw-m capitalize valuetext"
//                 dangerouslySetInnerHTML={{ __html: item.value }}
//               />
//             </div>
//           )
//       )}
//     </div>
//   );
// };

// export default Bbar;
import React from "react";

const Bbar = ({ stats }) => {
  if (!stats || !Array.isArray(stats) || stats.length === 0) return null;

  return (
    <div className="w-full bg-white/30 backdrop-blur-[45px] text-white p-[15px] lg:p-10 mt-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 xl:gap-8 lg:items-center">
        {stats.map(
          (item, idx) =>
            item.value && (
              <div key={item.label}>
                {item.label && (
                  <div className="flex flex-col">
                    <span
                      className="uppercase text-[14px] md:text-[16px] bw-r"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                    />
                    <span
                      className="text-[16px] md:text-[28px] xl:text-[32px] !leading-[110%] bw-m capitalize valuetext"
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Bbar;
