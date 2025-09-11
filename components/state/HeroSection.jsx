// "use client";
// import Image from "next/image";

// export default function HeroSection({ data }) {
//   if (!data) return null;

//   return (
//     <section className="relative w-full bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* --- Left content --- */}
//         <div className="flex flex-col justify-center">
//           {/* Name */}
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             {/* {data.name} */} Delhi 2
//           </h1>

//           {/* Heading */}
//           {/* {data.heading && (
//             <h2 className="text-xl sm:text-2xl text-gray-700 font-semibold mb-2">
//               {data.heading}
//             </h2>
//           )} */}

//           <h2 className="text-xl sm:text-2xl text-gray-700 font-semibold mb-2">
//             Delhi {/* {data.heading} */}
//           </h2>

//           {/* Sub */}
//           {/* {data.sub && (
//             <p className="text-lg sm:text-xl text-gray-600 mb-4">{data.sub}</p>
//           )} */}

//           <p className="text-lg sm:text-xl text-gray-600 mb-4">Date Subtitle</p>

//           {/* Description (render HTML safely) */}
//           {/* {data.desc && (
//             <div
//               className="text-base sm:text-lg text-gray-500 leading-relaxed"
//               dangerouslySetInnerHTML={{ __html: data.desc }}
//             />
//           )} */}
//             <div
//               className="text-base sm:text-lg text-gray-500 leading-relaxed"
//               dangerouslySetInnerHTML={{ __html: data.desc }}
//             />
//         </div>

//         {/* --- Right image --- */}
//         {data.image && (
//           <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px]">
//             <Image
//               src={data.image}
//               alt={data.name || "State hero"}
//               fill
//               priority
//               className="object-cover rounded-2xl shadow-md"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
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
// import FeatureCards from "./FeatureCards";

// const HeroSection = ({ data }) => {
//   return (
//     <div>
//       <div className="relative w-full h-[590px] overflow-hidden">
//         {/* Desktop image */}
//         <img
//           className="w-full h-full object-cover md:block hidden"
//           src={data.image}
//           alt="Delhi Banner"
//         />
//         {/* Mobile image */}
//         <img
//           className="w-full h-full object-cover md:hidden block"
//           src="/ecommerce/ecom_banner_mob.png"
//           alt="Delhi Banner Mobile"
//         />

//         {/* Overlay content */}
//         <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
//           <div className="bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white">
//             <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
//               Home
//             </a>{" "}
//             /{" "}
//             <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px]">
//               {data.name}
//             </a>
//           </div>

//           <div className="flex flex-col">
//             <h1 className="bw-m text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
//               {data.name}
//               <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from "react";
import FeatureCards from "./FeatureCards";

const HeroSection = ({ data }) => {
  return (
    <div>
      <div className="relative w-full h-[590px] overflow-hidden">
        {/* Desktop image */}
        <img
          className="w-full h-full object-cover md:block hidden"
          src={data.image}
          alt={data.image}
        />
        {/* Mobile image */}
        <img
          className="w-full h-full object-cover md:hidden block"
          src={data.image}
          alt={data.image}
        />

        {/* Gradient Overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 from-40% to-transparent"></div>

        {/* Overlay content */}
        <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
          <div className="bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white">
            <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px]">
              {data.name}
            </a>
          </div>

          <div className="flex flex-col">
            <h1 className="bw-m text-white text-[47px] leading-[57px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
              {data.name}
              <span className="md:w-[249px] md:h-[6px] bg-[#fff] mb-[14px] ml-[30px] inline-block"></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
