// import { motion } from "framer-motion";
// // import Image from "next/image";

// const TestimonialCard = ({
//   name,
//   role,
//   company,
//   quote,
//   logo,
//   video,
//   thumbnail,
//   isActive,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.6, delay: 0.2, ease: [0.7, 0, 0.4, 1] }}
//       viewport={{ once: true, amount: 0.1 }}
//       className="bg-inherit relative w-[300px]  sm:w-[420px] md:w-full md:mx-0 xl:w-[930px] h-[460px] sm:h-[420px] md:h-[650px] lg:h-[460px] xl:h-[460px] flex flex-col lg:flex-row border border-[#CDCDCD] shadow rounded-none overflow-hidden disable-animation"
//     >
//       {/* Left Side: Image */}
//       <div className="relative w-full h-full md:min-w-[48.5%]">
//         <img
//           src={thumbnail}
//           alt="Client video thumbnail"
//           className="object-cover object-top md:object-center w-full h-full"
//         />
//         <a
//           href={video}
//           target="_blank"
//           className="absolute bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] lg:px-[30px] lg:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
//         >
//           Watch Video
//           <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
//             <img src="/play.svg" alt="Watch" width={25} height={25} />
//           </span>
//         </a>
//       </div>

//       {/* Right Side: Content */}
//       <div className="flex w-full flex-col relative justify-center hf px-[12px] py-[16px] bg-white sm:px-[15px] sm:py-[20px] md:min-w-[51.5%] xl:pl-[50px] xl:pr-[24px] gap-4 sm:gap-[10px] md:gap-[12px] lg:gap-[20px] xl:gap-[45px]">
//         <div>
//           <img
//             src={logo}
//             alt="Company Logo"
//             className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] object-contain"
//           />
//         </div>

//         <div>
//           <img
//             src="/quote.svg"
//             width={42}
//             height={42}
//             alt="quote"
//             className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
//           />
//           <p className="inter-b text-[16px] sm:text-[18px] md:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[30px] text-[#000]">
//             {quote}
//           </p>
//         </div>
//         <div className="max-w-lg leading-3.5 sm:leading-[25px] lg:leading-[30px]">
//           <strong className="inter-sb text-black sm:text-[14px] md:text-[18px]">
//             {name}
//           </strong>
//           <br />
//           <span className="inter-r text-[10px] sm:text-[14px] md:text-[16px] text-[#475467] leading-[14px] md:leading-[16px]">
//             {role}, {company}
//           </span>
//         </div>
//         <div className="absolute top-0 right-0 z-20">
//           <svg
//             width="50"
//             height="50"
//             viewBox="0 0 50 50"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] xl:w-[50px] xl:h-[50px]"
//           >
//             <path
//               d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
//               fill={isActive ? "#3AB04A" : "#DEDDCE"} // 👈 Dynamically set color
//             />
//           </svg>
//         </div>
//       </div>

//       {/* ✅ Flip Icon on Top Right */}
//     </motion.div>
//   );
// };

// export default TestimonialCard;

///********************************** */
// import { motion } from "framer-motion";
// // import Image from "next/image";

// const TestimonialCard = ({
//   name,
//   role,
//   company,
//   quote,
//   logo,
//   video,
//   thumbnail,
//   isActive,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.6, delay: 0.2, ease: [0.7, 0, 0.4, 1] }}
//       viewport={{ once: true, amount: 0.1 }}
//       className="bg-inherit relative w-[300px] h-full  sm:w-[420px] md:w-auto 1024:w-[720px] md:mx-0 xl:w-[930px]  sm:h-[480px] md:h-[771px] lg:h-[460px] xl:h-[460px] flex flex-col lg:flex-row border border-[#CDCDCD] shadow rounded-none overflow-hidden disable-animation"
//     >
//       {/* Left Side: Image */}
//       <div className="relative w-full h-full md:min-w-[48.5%]">
//         <img
//           src={thumbnail}
//           alt="Client video thumbnail"
//           className="object-cover object-top md:object-center w-full h-full"
//         />
//         <a
//           href={video}
//           target="_blank"
//           className="absolute bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] lg:px-[30px] lg:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
//         >
//           Watch Video
//           <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
//             <img src="/play.svg" alt="Watch" width={25} height={25} />
//           </span>
//         </a>
//       </div>

//       {/* Right Side: Content */}
//       <div className="flex w-full flex-col relative justify-center min-h-[242px] sm:h-full  px-[12px] py-[16px] bg-white sm:px-[15px] sm:py-[20px] md:min-w-[51.5%] xl:pl-[50px] xl:pr-[24px] gap-4 sm:gap-[10px] md:gap-[12px] lg:gap-[20px] xl:gap-[45px]">
//         <div>
//           <img
//             src={logo}
//             alt="Company Logo"
//             className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] object-contain"
//           />
//         </div>

//         <div>
//           <img
//             src="/quote.svg"
//             width={42}
//             height={42}
//             alt="quote"
//             className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
//           />
//           <p className="inter-b text-[16px] sm:text-[18px] md:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[30px] text-[#000]">
//             {quote}
//           </p>
//         </div>
//         <div className="max-w-lg leading-3.5 sm:leading-[25px] lg:leading-[30px]">
//           <strong className="inter-sb text-black sm:text-[14px] md:text-[18px]">
//             {name}
//           </strong>
//           <br />
//           <span className="inter-r text-[10px] sm:text-[14px] md:text-[16px] text-[#475467] leading-[14px] md:leading-[16px]">
//             {role}, {company}
//           </span>
//         </div>
//         <div className="absolute top-0 right-0 z-20">
//           <svg
//             width="50"
//             height="50"
//             viewBox="0 0 50 50"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] xl:w-[50px] xl:h-[50px]"
//           >
//             <path
//               d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
//               fill={isActive ? "#3AB04A" : "#DEDDCE"} // 👈 Dynamically set color
//             />
//           </svg>
//         </div>
//       </div>

//       {/* ✅ Flip Icon on Top Right */}
//     </motion.div>
//   );
// };

// export default TestimonialCard;
//********************************************* */\

// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const TestimonialCard = ({
//   name,
//   role,
//   company,
//   quote,
//   logo,
//   video,
//   thumbnail,
//   isActive,
// }) => {
//   return (
//     <motion.article
//       itemScope
//       itemType="https://schema.org/Review"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.6, delay: 0.2, ease: [0.7, 0, 0.4, 1] }}
//       viewport={{ once: true, amount: 0.1 }}
//       className="bg-inherit relative w-[300px] h-full sm:w-[420px] md:w-auto 1024:w-[720px] md:mx-0 xl:w-[930px] sm:h-[480px] md:h-[771px] lg:h-[460px] xl:h-[460px] flex flex-col lg:flex-row border border-[#CDCDCD] shadow rounded-none overflow-hidden disable-animation"
//     >
//       {/* Left Side: Image */}
//       {/* <div className="relative w-full h-full md:min-w-[48.5%]">
//         {thumbnail && (
//           <Image
//             src={thumbnail}
//             alt={`Client video thumbnail for ${name} - ${company}`}
//             fill
//             className="object-cover object-top md:object-center"
//             sizes="(max-width: 768px) 100vw, 50vw"
//             priority={isActive} // preload active slide
//           />
//         )}
//         {video && (
//           <a
//             href={video}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="absolute bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] lg:px-[30px] lg:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
//           >
//             Watch Video
//             <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
//               <Image src="/play.svg" alt="Watch" width={25} height={25} />
//             </span>
//           </a>
//         )}
//       </div> */}
//       {/* Left Side: Image */}
//       <div className="relative w-full min-h-[220px] sm:min-h-[300px] md:min-h-[48.5%] h-full">
//         {thumbnail && (
//           <Image
//             src={thumbnail}
//             alt={`Client video thumbnail for ${name} - ${company}`}
//             fill
//             className="object-cover object-top md:object-center"
//             sizes="(max-width: 768px) 100vw, 50vw"
//             priority={!!isActive} // preload active slide
//           />
//         )}
//         {video && (
//           <a
//             href={video}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="absolute bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] lg:px-[30px] lg:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
//           >
//             Watch Video
//             <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
//               <Image src="/play.svg" alt="Watch" width={25} height={25} />
//             </span>
//           </a>
//         )}
//       </div>

//       {/* Right Side: Content */}
//       <div className="flex w-full flex-col relative justify-center min-h-[242px] sm:h-full px-[12px] py-[16px] bg-white sm:px-[15px] sm:py-[20px] md:min-w-[51.5%] xl:pl-[50px] xl:pr-[24px] gap-4 sm:gap-[10px] md:gap-[12px] lg:gap-[20px] xl:gap-[45px]">
//         {logo && (
//           <div>
//             <Image
//               src={logo}
//               alt={`${company} logo`}
//               width={150}
//               height={60}
//               className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] object-contain"
//             />
//           </div>
//         )}

//         <div>
//           <Image
//             src="/quote.svg"
//             width={42}
//             height={42}
//             alt="quote icon"
//             className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
//           />
//           <p
//             itemProp="reviewBody"
//             className="inter-b text-[16px] sm:text-[18px] md:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[30px] text-[#000]"
//           >
//             {quote}
//           </p>
//         </div>

//         <div className="max-w-lg leading-3.5 sm:leading-[25px] lg:leading-[30px]">
//           <strong
//             itemProp="author"
//             itemScope
//             itemType="https://schema.org/Person"
//             className="inter-sb text-black sm:text-[14px] md:text-[18px]"
//           >
//             <span itemProp="name">{name}</span>
//           </strong>
//           <br />
//           <span
//             itemProp="jobTitle"
//             className="inter-r text-[10px] sm:text-[14px] md:text-[16px] text-[#475467] leading-[14px] md:leading-[16px]"
//           >
//             {role}
//           </span>
//           {company && (
//             <span
//               itemProp="worksFor"
//               itemScope
//               itemType="https://schema.org/Organization"
//             >
//               {/* , <span itemProp="name">{company}</span> */}
//             </span>
//           )}
//         </div>

//         {/* Decorative Active State Icon */}
//         <div className="absolute top-0 right-0 z-20">
//           <svg
//             width="50"
//             height="50"
//             viewBox="0 0 50 50"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] xl:w-[50px] xl:h-[50px]"
//           >
//             <path
//               d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
//               fill={isActive ? "#3AB04A" : "#DEDDCE"}
//             />
//           </svg>
//         </div>
//       </div>
//     </motion.article>
//   );
// };

// export default TestimonialCard;

"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

// ===================================================================
// VideoPopup Component - NO CHANGES NEEDED HERE
// This component's internal logic is already correct.
// ===================================================================
// ===================================================================
// VideoPopup Component - with scroll lock
// ===================================================================
const VideoPopup = ({ video, name, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ Disable background scroll when modal is open
  useEffect(() => {
    if (video) {
      const originalBodyStyle = document.body.style.overflow;
      const originalHtmlStyle = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyStyle;
        document.documentElement.style.overflow = originalHtmlStyle;
      };
    }
  }, [video]);

  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {video && (
        <motion.div
          key="video-modal"
          data-lenis-prevent // 👈 Add this here
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-black w-[99vw] sm:w-[70vw] aspect-video overflow-hidden shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, transition: { duration: 0.3 } }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-white text-black px-1 py-0.5 1024:px-2.5 1024:py-2 xl:px-4 xl:py-3.5 text-[10px] 1024:text-[40px] z-10 cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-[29px] sm:h-[29px]" />
            </button>
            <iframe
              src={video}
              className="w-full h-full"
              allowFullScreen
              title={`Video for ${name}`}
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

// ===================================================================
// TestimonialCard Component - CHANGES ARE APPLIED HERE
// ===================================================================
// const TestimonialCard = ({
//   name,
//   role,
//   company,
//   quote,
//   logo,
//   video,
//   thumbnail,
//   isActive,
// }) => {
//   // ✅ CHANGE 1: Instead of a boolean, store the video URL in state. Start with null.
//   const [activeVideo, setActiveVideo] = useState(null);

//   return (
//     <>
//       <motion.article className="bg-inherit relative w-[300px]  sm:w-[420px] md:w-auto 1024:w-[700px] md:mx-0 xl:w-[800px] sm:h-[480px] md:h-[680px] lg:h-[350px] xl:h-[400px] flex flex-col lg:flex-row border border-[#CDCDCD] shadow rounded-none overflow-hidden">
//         {/* --- Left Side (Image) --- */}
//         {/* <div className="relative w-full min-h-[220px] sm:min-h-[300px] md:min-h-[48.5%] h-full"> */}
//         <div className="relative w-full min-h-[200px] md:min-h-[340px] sm:min-h-[320px] h-full">
//           {thumbnail && (
//             <Image
//               src={thumbnail}
//               alt={`Client video thumbnail for ${name} - ${company}`}
//               fill
//               className="object-cover object-top md:object-center"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               priority={!!isActive}
//             />
//           )}
//           {/* ✅ Green Arrow (Mobile Only - in Image Section) */}
//           <div className="absolute top-0 right-0 z-20 block sm:hidden lg:!hidden xl:!hidden">
//             <svg
//               width="50"
//               height="50"
//               viewBox="0 0 50 50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]"
//             >
//               <path
//                 d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
//                 fill={isActive ? "#3AB04A" : "#DEDDCE"}
//               />
//             </svg>
//           </div>
//           {video && (
//             <button
//               onClick={() => setActiveVideo(video)}
//               className="absolute cursor-pointer bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] 2xl:px-[30px] 2xl:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
//             >
//               Watch Video
//               <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
//                 <Image src="/play.svg" alt="Watch" width={25} height={25} />
//               </span>
//             </button>
//           )}
//         </div>

//         {/* --- Right Side (Text Content) --- */}
//         {/* <div className="flex w-full flex-col justify-start 1024:justify-center relative 1280:justify-around min-h-[242px] sm:h-full px-[20px] py-[16px] bg-white sm:px-[15px] sm:py-[20px] md:min-w-[51.5%] xl:pl-[50px] xl:pr-[24px] gap-4 sm:gap-[10px] md:gap-[12px] lg:gap-[20px] xl:gap-[45px]"> */}
//         <div className="flex w-full flex-col justify-start 1024:justify-around relative 1280:justify-around min-h-auto sm:h-full px-[20px] py-[16px] bg-white sm:px-[18px] sm:py-[20px] md:min-w-[51.5%] xl:pl-[50px] xl:pr-[24px] gap-1.5 xl:gap-3">
//           {logo && (
//             <div>
//               <Image
//                 src={logo}
//                 alt={`${company} logo`}
//                 width={150}
//                 height={60}
//                 className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] object-contain"
//               />
//             </div>
//           )}
//           {/* <div>
//             <Image
//               src={logo || "/home/clients/clientlogos/client.svg"}
//               alt={`${company} logo`}
//               width={150}
//               height={60}
//               className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] object-contain"
//             />
//           </div> */}

//           {/* <div>
//             <Image
//               src="/quote.svg"
//               width={42}
//               height={42}
//               alt="quote icon"
//               className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
//             />
//             <p
//               itemProp="reviewBody"
//               className="bw-m text-[16px] sm:text-[18px] md:text-[20px] leading-[18px] tracking-normal sm:leading-[20px] md:leading-[30px] text-[#000]"
//             >
//               {quote}
//             </p>
//           </div> */}
//           <div>
//             <Image
//               src="/quote.svg"
//               width={42}
//               height={42}
//               alt="quote icon"
//               className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
//             />
//             <p
//               data-lenis-prevent
//               itemProp="reviewBody"
//               className="bw-m text-[16px] sm:text-[18px] md:text-[16px] lg:text-[20px] leading-[22px] tracking-normal sm:leading-[20px] md:leading-[28px] pr-0.5 text-[#000]
//               h-[70px] 768:h-[120px] overflow-y-auto testimonial-scrollbar"
//             >
//               {quote}
//             </p>
//           </div>

//           <div className="max-w-sm ">
//             <strong className="bw-sb sm:leading-[25px] lg:leading-[30px] text-[16px] leading-[26px] text-black sm:text-[15px] lg:text-[18px] 1280:text-[20px]">
//               <span>{name}</span>
//             </strong>
//             <br />
//             <span className="bw-r text-[14px]  sm:text-[14px] lg:text-[16px]  text-[#475467]">
//               {/* Director - Warehousing Solutions, Rhenus Contract Logistics India
//               Pvt. Ltd. */}
//               {role}
//             </span>
//           </div>

//           {/* ✅ Green Arrow (Desktop Only - in Content Section) */}
//           <div className="absolute top-0 right-0 z-20 hidden lg:block">
//             <svg
//               width="50"
//               height="50"
//               viewBox="0 0 50 50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] xl:w-[50px] xl:h-[50px]"
//             >
//               <path
//                 d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
//                 fill={isActive ? "#3AB04A" : "#DEDDCE"}
//               />
//             </svg>
//           </div>
//         </div>
//       </motion.article>

//       {/* ✅ CHANGE 3: Render VideoPopup UNCONDITIONALLY. Pass the state to its `video` prop. */}
//       {/* Its internal <AnimatePresence> will now work correctly. */}
//       <VideoPopup
//         video={activeVideo}
//         name={name}
//         onClose={() => setActiveVideo(null)}
//       />
//     </>
//   );
// };
const TestimonialCard = ({
  name,
  role,
  company,
  quote,
  logo,
  video,
  thumbnail,
  isActive,
}) => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <motion.article className="bg-inherit relative w-[300px] sm:w-[420px] md:w-auto 1024:w-[700px] md:mx-0 xl:w-[800px] sm:h-[480px] md:h-[680px] lg:h-[350px] xl:h-[420px] 1920:h-[500px] flex flex-col lg:flex-row border border-[#CDCDCD] shadow rounded-none overflow-hidden">
        {/* --- Left Side (Thumbnail + Play Button) --- */}
        <div className="relative w-full min-h-[200px] md:min-h-[340px] sm:min-h-[320px] h-full">
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={`Client video thumbnail for ${name} - ${company}`}
              fill
              className="object-cover object-top md:object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={!!isActive}
            />
          )}

          {/* ✅ Green Arrow (Mobile) */}
          <div className="absolute top-0 right-0 z-20 block lg:!hidden">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]"
            >
              <path
                d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
                fill={isActive ? "#3AB04A" : "#DEDDCE"}
              />
            </svg>
          </div>

          {/* ✅ Play Button */}
          {video && (
            <button
              onClick={() => setActiveVideo(video)}
              className="absolute cursor-pointer bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] 2xl:px-[30px] 2xl:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
            >
              Watch Video
              <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
                <Image src="/play.svg" alt="Watch" width={25} height={25} />
              </span>
            </button>
          )}
        </div>

        {/* --- Right Side (Text Content) --- */}
        <div className="flex w-full flex-col justify-start 1024:justify-around relative 1280:justify-around min-h-auto sm:h-full px-[20px] py-[16px] bg-white sm:px-[18px] sm:py-[20px] md:min-w-[51.5%] xl:pl-[50px] xl:pr-[24px] gap-1 xl:gap-3">
          {/* ✅ Logo */}
          {logo && (
            <div>
              <Image
                src={logo}
                alt={`${company} logo`}
                width={150}
                height={60}
                className="w-[110px] sm:w-auto lg:w-[150px] h-auto sm:auto md:h-[50px] lg:h-[60px]  object-contain"
              />
            </div>
          )}

          {/* ✅ Quote */}
          <div>
            <Image
              src="/quote.svg"
              width={42}
              height={42}
              alt="quote icon"
              className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
            />
            <p
              data-lenis-prevent
              itemProp="reviewBody"
              className="bw-m text-[16px] sm:text-[18px] my-[10px] md:text-[18px] lg:text-[20px] leading-[22px] tracking-normal sm:leading-[20px] md:leading-[28px] pr-0.5 text-[#000] h-[145px] 768:h-[135px] 1280:h-[170px]  1440:h-[175px] 1920:h-full overflow-y-auto testimonial-scrollbar"
            >
              {quote}
            </p>
          </div>

          {/* ✅ Name + Role + Company */}
          <div className="max-w-sm">
            <strong className="bw-sb sm:leading-[25px] lg:leading-[30px] text-[16px] leading-[26px] text-black sm:text-[18px] lg:text-[18px] 1280:text-[20px]">
              {name}
            </strong>
            {(role || company) && (
              <p className="bw-r text-[14px] sm:text-[16px] lg:text-[16px] text-[#475467]">
                {[role, company].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>

          {/* ✅ Green Arrow (Desktop) */}
          <div className="absolute top-0 right-0 z-20 hidden lg:block">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] xl:w-[50px] xl:h-[50px]"
            >
              <path
                d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
                fill={isActive ? "#3AB04A" : "#DEDDCE"}
              />
            </svg>
          </div>
        </div>
      </motion.article>

      {/* ✅ Video Popup */}
      <VideoPopup
        video={activeVideo}
        name={name}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
};

export default TestimonialCard;
