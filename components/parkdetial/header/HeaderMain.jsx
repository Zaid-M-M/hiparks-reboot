// import React from "react";

// const HeaderMain = () => {
//   return (
//     <div>
//       <div className="relative w-full  overflow-hidden">
//         <img className="w-[100%] md:block hidden" src="/ind/ind.jpg"></img>
//         <img
//           className="w-[100%] md:!hidden block"
//           src="/ind/industry_banner_mob.jpg"
//         ></img>

//         <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
//           <div className="bw-m px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white ">
//             <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
//               Home
//             </a>{" "}
//             /{" "}
//             <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px] ">
//               Industrial & Logistics Parks
//             </a>
//           </div>

//           <div className="flex flex-col">
//             <h1 className="bw-m text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
//               Agile
//               <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
//             </h1>
//             <h1 className="bw-r text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
//               Ecosystems of Growth
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderMain;
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

// const HeaderMain = ({
//   title,
//   h1,
//   spotlightImage,
//   metaTitle,
//   metaDescription,
//   igbcLogo,
//   igbcStatus,
// }) => {
//   return (
//     <div>
//       <div className="relative w-full overflow-hidden">
//         {/* Spotlight image instead of static /ind/ind.jpg */}
//         <img
//           className="w-[100%] md:block hidden"
//           src={spotlightImage || "/ind/ind.jpg"}
//           alt={title}
//         />
//         <img
//           className="w-[100%] md:!hidden block"
//           src={spotlightImage || "/ind/industry_banner_mob.jpg"}
//           alt={title}
//         />

//         <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
//           <div className="bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white ">
//             <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
//               Home
//             </a>{" "}
//             /{" "}
//             <a
//               href="/industrial-logistics-parks"
//               className="text-[13px] md:text-[13px] lg:text-[16px] "
//             >
//               Industrial & Logistics Parks
//             </a>
//           </div>

//           <div className="flex flex-col">
//             {/* h1_tag or fallback */}
//             <h1 className="bw-m text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
//               {h1 || title}
//               <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
//             </h1>

//             {/* meta title or park title fallback */}
//             <h1 className="bw-r text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
//               {metaTitle || "Ecosystems of Growth"}
//             </h1>

//             {/* IGBC certification info if available */}
//             {igbcStatus && (
//               <div className="flex items-center gap-2 mt-4">
//                 {igbcLogo && (
//                   <img src={igbcLogo} alt={igbcStatus} className="h-8" />
//                 )}
//                 <span className="text-white text-[16px]">{igbcStatus}</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderMain;
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
// import Bbar from "./Bbar";
// import BreadCrum from "./BreadCrum";

// const HeaderMain = ({
//   title,
//   h1,
//   spotlightImage,
//   metaTitle,
//   metaDescription,
//   igbcLogo,
//   igbcStatus,
//   park_name,
//   stats = [],
// }) => {
//   return (
//     <div>
//       <div className="relative w-full overflow-hidden">
//         {/* Spotlight image instead of static /ind/ind.jpg */}
//         <img
//           className="w-[100%] md:block hidden"
//           src={spotlightImage || "/ind/ind.jpg"}
//           alt={title}
//         />
//         <img
//           className="w-[100%] md:!hidden block"
//           src={spotlightImage || "/ind/industry_banner_mob.jpg"}
//           alt={title}
//         />

//         <div className="absolute left-[max(5%,calc((100vw-1340px)/2))] right-[max(5%,calc((100vw-1340px)/2))] lg:bottom-[60px] md:bottom-[40px] bottom-[40px]">
//           <BreadCrum park_name={park_name} />

//           <div className="flex flex-col">
//             {/* h1_tag or fallback */}
//             <div className="flex gap-8 items-center">
//               <h1
//                 className="bw-m text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]"
//                 dangerouslySetInnerHTML={{ __html: park_name }}
//               />
//               <span className="md:w-[249px] md:h-[6px] bg-[#fff] inline-block"></span>
//             </div>

//             {/* meta title or park title fallback */}
//             <h2
//               className="bw-r text-white text-[36px] leading-[120%]"
//               dangerouslySetInnerHTML={{
//                 __html: h1 || title,
//               }}
//             />

//             {/* IGBC certification info if available */}
//             <Bbar stats={stats} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderMain;
import React from "react";
import Bbar from "./Bbar";
import BreadCrum from "./BreadCrum";

const HeaderMain = ({
  title,
  h1,
  spotlightImage,
  metaTitle,
  metaDescription,
  igbcLogo,
  igbcStatus,
  park_name,
  stats = [],
}) => {
  return (
    <div
      id="pdspotlight"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <img
        className="w-full min-h-screen object-cover"
        src={spotlightImage || "/ind/ind.jpg"}
        alt={title}
      />
      <div className="absolute w-full h-[100%] bottom-0 bg-gradient-to-t from-[#00000070] from-60% to-transparent"></div>

      {/* Content */}
      <div className="absolute left-[max(5%,calc((100vw-1340px)/2))] right-[max(5%,calc((100vw-1340px)/2))] top-auto lg:bottom-[60px] md:bottom-[40px] bottom-[40px]">
        <BreadCrum park_name={park_name} />

        <div className="flex flex-col">
          {/* h1_tag or fallback */}
          <div className="flex gap-8 items-center">
            <h1
              className="bw-m text-white text-[42px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]"
              dangerouslySetInnerHTML={{ __html: park_name }}
            />
            <span className="md:w-[249px] md:h-[6px] bg-[#fff] inline-block"></span>
          </div>

          {/* meta title or park title fallback */}
          <h2
            className="bw-r text-white text-[20px] md:text-[36px] leading-[120%]"
            dangerouslySetInnerHTML={{
              __html: h1 || title,
            }}
          />

          {/* IGBC certification info if available */}
          <Bbar stats={stats} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
