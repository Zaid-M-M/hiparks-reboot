// "use client";
// import React, { useState } from "react";

// const links = [
//   "How Modern Logistics Infrastructure in Delhi is Revolutionising Retail Supply Chains",
//   "How Delhi’s Logistics Parks are Setting New Standards for E-commerce Storage and Fulfilment",
//   "Top 5 Reasons Retailers are Moving to Delhi’s Modern Logistics Park",
//   "The Key to Faster Deliveries: Inside Delhi’s New Age Logistics Park",
// ];

// const RelatedLinks = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <section className="w-full bg-[#EBEBEB] py-[40px]  relative transition-all duration-500">
//       {/* Header */}
//       <div className="flex justify-between items-center fixup mb-[30px] 1280:mb-[60px] ">
//         <h2 className="text-black bw-m text-[28px] tracking-[-0.04em] md:text-[56px] ">
//           Related <span className="bw-r">Links</span>
//         </h2>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-[45px] h-[45px] border border-[#BEBEBE] flex items-center justify-center"
//         >
//           {isOpen ? (
//             // Minus icon
//             <span className="w-[16px] h-[2px] bg-black block"></span>
//           ) : (
//             // Plus icon
//             <div className="relative w-[16px] h-[16px]">
//               <span className="absolute inset-x-0 top-1/2 h-[2px] bg-black"></span>
//               <span className="absolute inset-y-0 left-1/2 w-[2px] bg-black"></span>
//             </div>
//           )}
//         </button>
//       </div>

//       {/* Links grid */}
//       {isOpen && (
//         <div className="flex flex-wrap gap-[20px] justify-between fixup transition-all duration-500">
//           {links.map((title, index) => (
//             <a
//               key={index}
//               href="#"
//               className="flex justify-between items-center bw-r  1280:w-[48%] md:w-[48%] lg:w-[47%] w-full
//                          h-[65px] md:h-[65px] lg:h-[70px] 1280:h-[100px]
//                          bg-white text-black
//                          text-[18px] md:text-[20px] 1366:text-[20px] 1280:text-[20px] leading-[23px]
//                          tracking-[-0.5px] md:py-[20px] lg:py-[30px] md:px-[15px] py-[18px] px-[20px] 1280:px-[25px]
//                          relative overflow-hidden shadow-sm"
//             >
//               {title}
//               {/* background mark image (left corner) */}
//               <img
//                 src="/state/gray.svg"
//                 alt="mark"
//                 className="absolute left-0 bottom-[-5px] w-[60px] 1280:w-[85px] 1366:w-[85px] opacity-70"
//               />
//             </a>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default RelatedLinks;

// "use client";
// import React, { useState } from "react";

// const links = [
//   "How Modern Logistics Infrastructure in Delhi is Revolutionising Retail Supply Chains",
//   "How Delhi’s Logistics Parks are Setting New Standards for E-commerce Storage and Fulfilment",
//   "Top 5 Reasons Retailers are Moving to Delhi’s Modern Logistics Park",
//   "The Key to Faster Deliveries: Inside Delhi’s New Age Logistics Park",
// ];

// const RelatedLinks = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <section className="w-full bg-[#EBEBEB] py-[100px] relative">
//       {/* Header */}
//       <div className="flex justify-between items-center fixup mb-[30px]  1280:mb-[60px] px-[20px] md:px-[40px]">
//         <h2 className="text-black bw-m text-[28px] tracking-[-0.04em] md:text-[56px]">
//           Related <span className="bw-r">Links</span>
//         </h2>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-[45px] h-[45px] 1280:w-[80px] 1280:h-[80px] border border-[#BEBEBE] flex items-center justify-center"
//         >
//           {isOpen ? (
//             // Minus icon
//             <span className="w-[16px] 1280:w-[22px] h-[2px] bg-black block"></span>
//           ) : (
//             // Plus icon
//             <div className="relative w-[16px] h-[16px] 1280:w-[22px] 1280:h-[22px]">
//               <span className="absolute inset-x-0 top-1/2 h-[2px]  bg-black"></span>
//               <span className="absolute inset-y-0 left-1/2 w-[2px]  bg-black"></span>
//             </div>
//           )}
//         </button>
//       </div>

//       {/* Links grid with slide animation */}
//       <div
//         className={`overflow-hidden transition-all fixup duration-500 ease-in-out ${
//           isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-wrap gap-[20px] justify-between px-[20px] md:px-[40px]">
//           {links.map((title, index) => (
//             <a
//               key={index}
//               href="#"
//               className="flex justify-between items-center bw-r 1280:w-[48%] md:w-[48%] lg:w-[47%] w-full
//                          h-[65px] md:h-[65px] lg:h-[70px] 1280:h-[100px]
//                          bg-white text-black
//                          text-[18px] md:text-[20px] 1366:text-[20px] 1280:text-[20px] leading-[23px]
//                          tracking-[-0.5px] md:py-[20px] lg:py-[30px] md:px-[15px] py-[18px] px-[20px] 1280:px-[25px]
//                          relative overflow-hidden shadow-sm"
//             >
//               {title}
//               <img
//                 src="/state/gray.svg"
//                 alt="mark"
//                 className="absolute left-0 bottom-[-5px] w-[60px] 1280:w-[85px] 1366:w-[85px] opacity-70"
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RelatedLinks;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation"; // ✅ Next.js hook
// import { useRouter } from "next/navigation";

// const RelatedLinks = () => {
//   const router = useRouter();
//   const { slug } = router.query; /// "delhi", "goa", etc.
//   const [links, setLinks] = useState([]);
//   const [isOpen, setIsOpen] = useState(true);
//   const [loading, setLoading] = useState(false);

//   // API map for each state
//   const urlMap = {
//     goa: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog",
//     delhi:
//       "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog",
//     gujarat:
//       "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog",
//     "tamil-nadu":
//       "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo",
//     telangana:
//       "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog",
//     maharashtra:
//       "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog",
//     karnataka:
//       "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog",
//     haryana:
//       "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog",
//   };
//   console.log(slug, "thsdf");

//   useEffect(() => {
//     if (!slug) return;

//     const fetchLinks = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(urlMap[slug]);
//         if (!res.ok) throw new Error("Failed to fetch links");
//         const data = await res.json();

//         // Format into simple array
//         const formatted = data.map((item) => ({
//           title: item.title.rendered,
//           slug: item.slug,
//         }));

//         setLinks(formatted);
//       } catch (err) {
//         console.error("Error fetching related links:", err);
//         setLinks([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLinks();
//   }, [slug]);

//   return (
//     <section className="w-full bg-[#EBEBEB] py-[100px] relative">
//       {/* Header */}
//       <div className="flex justify-between items-center fixup mb-[30px] 1280:mb-[60px] px-[20px] md:px-[40px]">
//         <h2 className="text-black bw-m text-[28px] tracking-[-0.04em] md:text-[56px]">
//           Related <span className="bw-r">Links</span>
//         </h2>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-[45px] h-[45px] 1280:w-[80px] 1280:h-[80px] border border-[#BEBEBE] flex items-center justify-center"
//         >
//           {isOpen ? (
//             <span className="w-[16px] 1280:w-[22px] h-[2px] bg-black block"></span>
//           ) : (
//             <div className="relative w-[16px] h-[16px] 1280:w-[22px] 1280:h-[22px]">
//               <span className="absolute inset-x-0 top-1/2 h-[2px] bg-black"></span>
//               <span className="absolute inset-y-0 left-1/2 w-[2px] bg-black"></span>
//             </div>
//           )}
//         </button>
//       </div>

//       {/* Links grid */}
//       <div
//         className={`overflow-hidden transition-all fixup duration-500 ease-in-out ${
//           isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-wrap gap-[20px] justify-between px-[20px] md:px-[40px]">
//           {loading ? (
//             <p>Loading...</p>
//           ) : links.length > 0 ? (
//             links.map((link, index) => (
//               <a
//                 key={index}
//                 href={`/${slug}/${link.slug}`} // ✅ dynamic path
//                 className="flex justify-between items-center bw-r 1280:w-[48%] md:w-[48%] lg:w-[47%] w-full
//                            h-[65px] md:h-[65px] lg:h-[70px] 1280:h-[100px]
//                            bg-white text-black
//                            text-[18px] md:text-[20px] 1366:text-[20px] 1280:text-[20px] leading-[23px]
//                            tracking-[-0.5px] md:py-[20px] lg:py-[30px] md:px-[15px] py-[18px] px-[20px] 1280:px-[25px]
//                            relative overflow-hidden shadow-sm"
//                 dangerouslySetInnerHTML={{ __html: link.title }}
//               />
//             ))
//           ) : (
//             <p>No links available</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RelatedLinks;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RelatedLinks = ({ slug }) => {
  // console.log(slug, "dafs");
  const [links, setLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const urlMap = {
    goa: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog",
    delhi:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog",
    gujarat:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog",
    "tamil-nadu":
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo",
    telangana:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog",
    maharashtra:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog",
    karnataka:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog",
    haryana:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog",
  };

  useEffect(() => {
    if (!slug) return;

    const fetchLinks = async () => {
      setLoading(true);
      try {
        const res = await fetch(urlMap[slug]);
        if (!res.ok) throw new Error("Failed to fetch links");
        const data = await res.json();

        const formatted = data.map((item) => ({
          title: item.title.rendered,
          slug: item.slug,
        }));

        setLinks(formatted);
      } catch (err) {
        console.error("Error fetching related links:", err);
        setLinks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, [slug]);

  return (
    <section className="w-full bg-[#EBEBEB] py-[45px] lg:py-[100px] relative">
      {/* Header */}
      <div className="flex justify-between items-center fixup">
        <h2 className="text-black bw-m text-[28px] xl:text-[64px] xl:leading-[74px] tracking-[-0.04em] md:text-[56px]">
          Related <span className="bw-r">Links</span>
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[45px] h-[45px] cursor-pointer 1280:w-[80px] 1280:h-[80px] border border-[#BEBEBE] flex items-center justify-center"
        >
          {isOpen ? (
            <span className="w-[16px] 1280:w-[22px] h-[2px] bg-black block"></span>
          ) : (
            <div className="relative w-[16px] h-[16px] 1280:w-[22px] 1280:h-[22px]">
              <span className="absolute inset-x-0 top-1/2 h-[2px] bg-black"></span>
              <span className="absolute inset-y-0 left-1/2 w-[2px] bg-black"></span>
            </div>
          )}
        </button>
      </div>

      {/* Links grid */}
      {/* <div
        className={`overflow-hidden transition-all fixup duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-wrap gap-[20px] justify-between px-[0px] pt-5 lg:pt-16">
          {loading ? (
            <p>Loading...</p>
          ) : links.length > 0 ? (
            links.map((link, index) => (
              <Link
                key={index}
                className="flex overflow-hidden relative items-center bw-r w-full bg-white text-black lg:text-[20px] text-[18px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-[100px] md:h-[100px] md:w-[48%] px-5 shadow-sm"
                href={`/${slug}/${link.slug}`} // ✅ dynamic path
              >
                <p dangerouslySetInnerHTML={{ __html: link.title }}></p>
                <img
                  src="/state/rlbg.svg"
                  className="absolute bottom-0 left-0 w-[100px] aspect-square"
                  alt=""
                />
              </Link>
            ))
          ) : (
            <p>No links available</p>
          )}
        </div>
      </div> */}
      <div
        className={`overflow-hidden transition-all fixup duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] px-[0px] pt-5 lg:pt-16">
          {loading ? (
            <p>Loading...</p>
          ) : links.length > 0 ? (
            links.map((link, index) => (
              <Link
                key={index}
                className="relative flex items-center bw-r w-full bg-white text-black lg:text-[20px] text-[18px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-[100px] px-10 shadow-sm"
                href={`/${slug}/${link.slug}`} // ✅ dynamic path
              >
                <p
                  className="max-w-fit flex"
                  dangerouslySetInnerHTML={{ __html: link.title }}
                />
                <img
                  src="/state/rlbg.svg"
                  className="absolute bottom-0 left-0 w-[100px] aspect-square"
                  alt=""
                />
              </Link>
            ))
          ) : (
            <p>No links available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
