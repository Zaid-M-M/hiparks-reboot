// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { ReactLenis } from "lenis/react";

// export default function ScrollSection({ videoSrc }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [scrollDuration, setScrollDuration] = useState(2000);
//   const [videoDuration, setVideoDuration] = useState(0);
//   const [innerHeight, setInnerHeight] = useState(null); // :white_check_mark: safe innerHeight
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);
//   const lastKnownVideoTime = useRef(0);

//   // :white_check_mark: Capture window.innerHeight safely
//   useEffect(() => {
//     function updateHeight() {
//       setInnerHeight(window.innerHeight);
//     }
//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   // Load video metadata
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
//     const handleLoadedMetadata = () => {
//       const duration = video.duration;
//       setVideoDuration(duration);
//       setScrollDuration(Math.round(duration * 400) + 1000); // buffer
//       video.currentTime = 0;
//     };
//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // Smooth scroll → video mapping
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }
//     const scrollY = window.scrollY;
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }
//     lastScrollY.current = scrollY;
//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(
//       0,
//       Math.min(scrollDuration - 1000, relativeScroll)
//     );
//     const progress = clampedScroll / (scrollDuration - 1000);
//     const targetTime = progress * videoDuration;
//     const dampenedTime =
//       lastKnownVideoTime.current +
//       (targetTime - lastKnownVideoTime.current) * 0.1;
//     if (Math.abs(video.currentTime - dampenedTime) > 0.03) {
//       video.currentTime = dampenedTime;
//     }
//     lastKnownVideoTime.current = dampenedTime;
//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration, scrollDuration]);

//   useEffect(() => {
//     if (!videoDuration) return;
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     rafRef.current = requestAnimationFrame(updateVideoTime);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       lastScrollY.current = 0;
//       lastKnownVideoTime.current = 0;
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0;
//         videoRef.current.pause();
//       }
//     };
//   }, [updateVideoTime, videoDuration]);

//   // Framer Motion scroll progress
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//   const cardY = useTransform(
//     scrollYProgress,
//     [0.6, 0.75, 0.9, 1],
//     [200, 0, 0, -200]
//   );
//   const cardOpacity = useTransform(
//     scrollYProgress,
//     [0.6, 0.75, 0.9, 1],
//     [0, 1, 1, 0]
//   );

//   return (
//     <ReactLenis root>
//       <div
//         ref={containerRef}
//         className="relative w-full"
//         // :white_check_mark: Safe: fallback to scrollDuration until innerHeight is available
//         style={{
//           height: innerHeight
//             ? `${scrollDuration + innerHeight}px`
//             : `${scrollDuration}px`,
//         }}
//       >
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <video
//             ref={videoRef}
//             src="/factory/fact.mp4"
//             className="absolute inset-0 w-full h-full object-cover"
//             muted
//             playsInline
//             preload="auto"
//           />
//           {/* Animated card */}
//         </div>
//       </div>
//     </ReactLenis>
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
// "use client";
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function MainSec() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const [scrollHeight, setScrollHeight] = useState(3000); // default before metadata loads

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     // Once video metadata loads, set scroll height = duration * factor
//     const handleLoaded = () => {
//       if (video.duration) {
//         setScrollHeight(video.duration * 200); // tweak factor if too fast/slow
//       }
//     };

//     video.addEventListener("loadedmetadata", handleLoaded);
//     return () => video.removeEventListener("loadedmetadata", handleLoaded);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current || !videoRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // ✅ Only start video once section is fully visible
//       if (rect.top > 0) {
//         // Section not fully in view yet
//         setProgress(0);
//         if (videoRef.current.duration) {
//           videoRef.current.currentTime = 0;
//         }
//         return;
//       }

//       // Now section is at least fully in view → start progress
//       let scrollProgress =
//         (windowHeight - rect.top) / (scrollHeight - windowHeight);

//       scrollProgress = Math.max(0, Math.min(1, scrollProgress));

//       setProgress(scrollProgress);

//       const duration = videoRef.current.duration || 0;
//       if (duration > 0) {
//         videoRef.current.currentTime = duration * scrollProgress;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollHeight]);

//   const numbers = ["01", "02", "03", "04", "05"];

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         className="relative w-full bg-black"
//         style={{ height: `${scrollHeight}px` }}
//       >
//         {/* Sticky container for video */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           {/* Background Video */}
//           <video
//             ref={videoRef}
//             src="/factory/fact.mp4"
//             playsInline
//             muted
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />

//           {/* Numbers on the left */}
//           <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col gap-6 text-white text-4xl font-bold">
//             {numbers.map((num, i) => {
//               const activeIndex = Math.floor(progress * numbers.length);
//               return (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0.2 }}
//                   animate={{
//                     opacity: activeIndex === i ? 1 : 0.2,
//                     scale: activeIndex === i ? 1.2 : 1,
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {num}
//                 </motion.span>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </ReactLenis>
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
// "use client";
//
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useSpring } from "framer-motion";

// export default function MainSec() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const [scrollHeight, setScrollHeight] = useState(4000);
//   const [enteredAt, setEnteredAt] = useState(null);

//   const smoothProgress = useSpring(progress, {
//     stiffness: 50,
//     damping: 20,
//     mass: 1,
//   });

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoaded = () => {
//       if (video.duration) {
//         // shorter scroll but enough for smoothness
//         setScrollHeight(video.duration * 250);
//       }
//     };

//     video.addEventListener("loadedmetadata", handleLoaded);
//     return () => video.removeEventListener("loadedmetadata", handleLoaded);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current || !videoRef.current) return;

//       const windowHeight = window.innerHeight;
//       const sectionTop = containerRef.current.offsetTop;
//       const sectionHeight = scrollHeight - windowHeight;

//       const scrolled = window.scrollY - sectionTop;

//       // section not reached yet
//       if (scrolled < 0) {
//         setProgress(0);
//         setEnteredAt(null);
//         videoRef.current.currentTime = 0;
//         return;
//       }

//       // just entered
//       if (enteredAt === null) {
//         setEnteredAt(Date.now());
//         videoRef.current.currentTime = 0;
//         setProgress(0);
//         return;
//       }

//       // pause for 2s
//       if (Date.now() - enteredAt < 2000) {
//         videoRef.current.currentTime = 0;
//         setProgress(0);
//         return;
//       }

//       let scrollProgress = scrolled / sectionHeight;
//       scrollProgress = Math.max(0, Math.min(1, scrollProgress));
//       setProgress(scrollProgress);

//       const duration = videoRef.current.duration || 0;
//       if (duration > 0) {
//         videoRef.current.currentTime = duration * scrollProgress;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollHeight, enteredAt]);

//   const numbers = ["01", "02", "03", "04", "05"];

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         className="relative w-full bg-black"
//         style={{ height: `${scrollHeight}px` }}
//       >
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <video
//             ref={videoRef}
//             src="/factory/fact.mp4"
//             playsInline
//             muted
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />

//           <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col gap-6 text-white text-4xl font-bold">
//             {numbers.map((num, i) => {
//               const activeIndex = Math.floor(progress * numbers.length);
//               return (
//                 <motion.span
//                   key={i}
//                   style={{ opacity: smoothProgress }}
//                   animate={{
//                     opacity: activeIndex === i ? 1 : 0.2,
//                     scale: activeIndex === i ? 1.2 : 1,
//                   }}
//                   transition={{
//                     duration: 0.6,
//                     ease: [0.25, 0.1, 0.25, 1],
//                   }}
//                 >
//                   {num}
//                 </motion.span>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </ReactLenis>
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
// "use client";
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useSpring } from "framer-motion";

// export default function MainSec() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const [scrollHeight, setScrollHeight] = useState(4000);
//   const [enteredAt, setEnteredAt] = useState(null);
//   const targetTime = useRef(0);

//   const smoothProgress = useSpring(progress, {
//     stiffness: 50,
//     damping: 20,
//     mass: 1,
//   });

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoaded = () => {
//       if (video.duration) {
//         // 🎯 Shorter but enough scroll distance
//         setScrollHeight(video.duration * 250);
//       }
//     };

//     video.addEventListener("loadedmetadata", handleLoaded);
//     return () => video.removeEventListener("loadedmetadata", handleLoaded);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current || !videoRef.current) return;

//       const windowHeight = window.innerHeight;
//       const sectionTop = containerRef.current.offsetTop;
//       const sectionHeight = scrollHeight - windowHeight;

//       const scrolled = window.scrollY - sectionTop;

//       // Section not reached
//       if (scrolled < 0) {
//         setProgress(0);
//         setEnteredAt(null);
//         targetTime.current = 0;
//         return;
//       }

//       // Just entered
//       if (enteredAt === null) {
//         setEnteredAt(Date.now());
//         targetTime.current = 0;
//         setProgress(0);
//         return;
//       }

//       // Pause for 2s
//       if (Date.now() - enteredAt < 2000) {
//         targetTime.current = 0;
//         setProgress(0);
//         return;
//       }

//       // Normal scroll-driven progress
//       let scrollProgress = scrolled / sectionHeight;
//       scrollProgress = Math.max(0, Math.min(1, scrollProgress));
//       setProgress(scrollProgress);

//       const duration = videoRef.current.duration || 0;
//       if (duration > 0) {
//         targetTime.current = duration * scrollProgress;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollHeight, enteredAt]);

//   // 🔥 RequestAnimationFrame loop for frame accuracy
//   useEffect(() => {
//     let raf;
//     const update = () => {
//       if (videoRef.current) {
//         // Snap directly to frame (no skipped frames)
//         videoRef.current.currentTime = targetTime.current;
//       }
//       raf = requestAnimationFrame(update);
//     };
//     raf = requestAnimationFrame(update);
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   const numbers = ["01", "02", "03", "04", "05"];

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         className="relative w-full bg-black"
//         style={{ height: `${scrollHeight}px` }}
//       >
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <video
//             ref={videoRef}
//             src="/factory/fact.mp4"
//             playsInline
//             muted
//             preload="auto"
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />

//           <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col gap-6 text-white text-4xl font-bold">
//             {numbers.map((num, i) => {
//               const activeIndex = Math.floor(progress * numbers.length);
//               return (
//                 <motion.span
//                   key={i}
//                   style={{ opacity: smoothProgress }}
//                   animate={{
//                     opacity: activeIndex === i ? 1 : 0.2,
//                     scale: activeIndex === i ? 1.2 : 1,
//                   }}
//                   transition={{
//                     duration: 0.6,
//                     ease: [0.25, 0.1, 0.25, 1],
//                   }}
//                 >
//                   {num}
//                 </motion.span>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </ReactLenis>
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
// "use client";
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";

// export default function MainSec() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [scrollHeight, setScrollHeight] = useState(0);
//   const durationRef = useRef(0);

//   useEffect(() => {
//     const vid = videoRef.current;
//     if (!vid) return;

//     vid.preload = "auto";
//     vid.muted = true;
//     vid.playsInline = true;
//     vid.pause();
//     vid.currentTime = 0;
//     vid.load();

//     const onLoaded = () => {
//       if (vid.duration) {
//         durationRef.current = vid.duration;
//         // 100vh per second of video
//         setScrollHeight(Math.ceil(vid.duration) * window.innerHeight);
//       }
//     };

//     vid.addEventListener("loadedmetadata", onLoaded);
//     return () => vid.removeEventListener("loadedmetadata", onLoaded);
//   }, []);

//   useEffect(() => {
//     const vid = videoRef.current;
//     if (!vid || !durationRef.current) return;

//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const scrollProgress =
//         1 - rect.bottom / (window.innerHeight + rect.height);

//       // Clamp between 0–1
//       const clamped = Math.min(Math.max(scrollProgress, 0), 1);

//       vid.currentTime = clamped * durationRef.current;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [scrollHeight]);

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight}px` : "100vh" }}
//         className="relative w-full bg-black"
//       >
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <video
//             ref={videoRef}
//             src="/factory/fact.mp4"
//             playsInline
//             muted
//             preload="auto"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </div>
//       </section>
//     </ReactLenis>
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
//
//
//
//
//
//
//
//
//
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{ WORKING }}}}}}}}}}}}}}}}}}}}}}}}}}}}
// "use client";
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const texts = [
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//   },
// ];

// export default function MainSec() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [scrollHeight, setScrollHeight] = useState(0);
//   const durationRef = useRef(0);

//   // preload + measure video
//   useEffect(() => {
//     const vid = videoRef.current;
//     if (!vid) return;

//     vid.preload = "auto";
//     vid.muted = true;
//     vid.playsInline = true;
//     vid.pause();
//     vid.currentTime = 0;
//     vid.load();

//     const onLoaded = () => {
//       if (vid.duration) {
//         durationRef.current = vid.duration;
//         setScrollHeight(Math.ceil(vid.duration) * window.innerHeight);
//       }
//     };

//     vid.addEventListener("loadedmetadata", onLoaded);
//     return () => vid.removeEventListener("loadedmetadata", onLoaded);
//   }, []);

//   // scrub video
//   useEffect(() => {
//     const vid = videoRef.current;
//     if (!vid || !durationRef.current) return;

//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const scrollProgress =
//         1 - rect.bottom / (window.innerHeight + rect.height);

//       const clamped = Math.min(Math.max(scrollProgress, 0), 1);
//       vid.currentTime = clamped * durationRef.current;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [scrollHeight]);

//   // text scroll animation
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight}px` : "100vh" }}
//         className="relative w-full bg-black"
//       >
//         {/* sticky video */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <video
//             ref={videoRef}
//             src="/factory/fact.mp4"
//             playsInline
//             muted
//             preload="auto"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* text overlay */}
//           <div className="absolute left-[max(5%,calc((100vw-1340px)/2))] top-0 h-full flex flex-col justify-center pointer-events-none">
//             {texts.map((t, i) => {
//               // Each text block gets its own scroll range
//               const start = i / texts.length;
//               const end = (i + 1) / texts.length;

//               // Y animation (slide up). Last one stops at 0.
//               const y = useTransform(
//                 scrollYProgress,
//                 [start, end],
//                 i === texts.length - 1 ? ["100%", "0%"] : ["100%", "-100%"]
//               );
//               const opacity = useTransform(
//                 scrollYProgress,
//                 [start, start + 0.1, end - 0.1, end],
//                 [0, 1, 1, 0]
//               );

//               return (
//                 <motion.div
//                   key={i}
//                   style={{ y, opacity }}
//                   className="absolute w-[500px]"
//                 >
//                   <h2 className="bw-m text-[64px] leading-[74px] text-black mb-2 capitalize">
//                     {t.heading}
//                   </h2>
//                   <p className="bw-r text-[28px] leading-[38px] text-black">
//                     {t.sub}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </ReactLenis>
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
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const texts = [
//   {
//     heading: "Customized factory setups",
//     sub: "with zero upfront investment",
//   },
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//   },
// ];

// export default function MainSec() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [scrollHeight, setScrollHeight] = useState(0);
//   const durationRef = useRef(0);

//   // preload + measure video
//   useEffect(() => {
//     const vid = videoRef.current;
//     if (!vid) return;

//     vid.preload = "auto";
//     vid.muted = true;
//     vid.playsInline = true;
//     vid.pause();
//     vid.currentTime = 0;
//     vid.load();

//     const onLoaded = () => {
//       if (vid.duration) {
//         durationRef.current = vid.duration;
//         setScrollHeight(Math.ceil(vid.duration) * window.innerHeight);
//       }
//     };

//     vid.addEventListener("loadedmetadata", onLoaded);
//     return () => vid.removeEventListener("loadedmetadata", onLoaded);
//   }, []);

//   // scrub video
//   useEffect(() => {
//     const vid = videoRef.current;
//     if (!vid || !durationRef.current) return;

//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const scrollProgress =
//         1 - rect.bottom / (window.innerHeight + rect.height);

//       const clamped = Math.min(Math.max(scrollProgress, 0), 1);
//       vid.currentTime = clamped * durationRef.current;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [scrollHeight]);

//   // text scroll animation
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight}px` : "100vh" }}
//         className="relative w-full bg-black lg:flex hidden"
//       >
//         {/* sticky video */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <video
//             ref={videoRef}
//             src="/factory/factf.mp4"
//             playsInline
//             muted
//             preload="auto"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Gradient vectors */}
//           <img
//             className="purple_vctr hidden md:block absolute bottom-0 left-0 lg:bottom-[-60px] md:w-[350px] w-[300px]"
//             src="/purple_vector.svg"
//             alt="Purple Vector"
//           />
//           <img
//             className="orange_vctr hidden md:block absolute bottom-0 lg:left-20 left-0 lg:bottom-[-80px] md:w-[350px] w-[300px] opacity-80"
//             src="/orange_vector.svg"
//             alt="Orange Vector"
//           />

//           {/* text overlay */}
//           <div className="absolute left-[max(5%,calc((100vw-1340px)/2))] top-0 h-full flex flex-col justify-center pointer-events-none">
//             {texts.map((t, i) => {
//               const start = i / texts.length;
//               const end = (i + 1) / texts.length;

//               // For all except last: slide up + fade in/out
//               if (i !== texts.length - 1) {
//                 const y = useTransform(
//                   scrollYProgress,
//                   [start, end],
//                   ["100%", "-100%"]
//                 );
//                 const opacity = useTransform(
//                   scrollYProgress,
//                   [start, start + 0.1, end - 0.1, end],
//                   [0, 1, 1, 0]
//                 );
//                 return (
//                   <motion.div
//                     key={i}
//                     style={{ y, opacity }}
//                     className="absolute w-[500px]"
//                   >
//                     <h2 className="bw-m xl:!text-[64px] sm:!text-[45px] text-[35px] xl:!leading-[74px] sm:!leading-[55px] !leading-[45px] text-black mb-2 capitalize">
//                       {t.heading}
//                     </h2>
//                     <p className="bw-r xl:text-[28px] xl:leading-[38px] sm:text-[24px] sm:leading-[34px] text-[20px] leading-[30px] text-black">
//                       {t.sub}
//                     </p>
//                   </motion.div>
//                 );
//               }

//               // ✅ Last one: fade in and stay pinned
//               const y = useTransform(
//                 scrollYProgress,
//                 [start, end],
//                 ["100%", "0%"]
//               );
//               const opacity = useTransform(
//                 scrollYProgress,
//                 [start, start + 0.2],
//                 [0, 1]
//               );

//               return (
//                 <motion.div
//                   key={i}
//                   style={{ y, opacity }}
//                   className="absolute w-[500px]"
//                 >
//                   <h2 className="bw-m xl:!text-[64px] sm:!text-[45px] text-[35px] xl:!leading-[74px] sm:!leading-[55px] !leading-[45px] text-black mb-2 capitalize">
//                     {t.heading}
//                   </h2>
//                   <p className="bw-r xl:text-[28px] xl:leading-[38px] sm:text-[24px] sm:leading-[34px] text-[20px] leading-[30px] text-black">
//                     {t.sub}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </ReactLenis>
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
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const texts = [
//   {
//     heading: "Customized factory setups",
//     sub: "with zero upfront investment",
//   },
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//   },
// ];

// export default function MainSec() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [scrollHeight, setScrollHeight] = useState(0);
//   const durationRef = useRef(0);

//   // preload + measure video
//   useEffect(() => {
//     const vid = videoRef.current;
//     if (!vid) return;

//     vid.preload = "auto";
//     vid.muted = true;
//     vid.playsInline = true;
//     vid.pause();
//     vid.currentTime = 0;
//     vid.load();

//     const onLoaded = () => {
//       if (vid.duration) {
//         durationRef.current = vid.duration;
//         setScrollHeight(Math.ceil(vid.duration) * window.innerHeight);
//       }
//     };

//     vid.addEventListener("loadedmetadata", onLoaded);
//     return () => vid.removeEventListener("loadedmetadata", onLoaded);
//   }, []);

//   // scrub video
//   useEffect(() => {
//     const vid = videoRef.current;
//     if (!vid || !durationRef.current) return;

//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const scrollProgress =
//         1 - rect.bottom / (window.innerHeight + rect.height);

//       const clamped = Math.min(Math.max(scrollProgress, 0), 1);
//       vid.currentTime = clamped * durationRef.current;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [scrollHeight]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // precompute transforms for all texts
//   const transforms = texts.map((t, i) => {
//     const start = i / texts.length;
//     const end = (i + 1) / texts.length;

//     if (i !== texts.length - 1) {
//       return {
//         y: useTransform(scrollYProgress, [start, end], ["100%", "-100%"]),
//         opacity: useTransform(
//           scrollYProgress,
//           [start, start + 0.1, end - 0.1, end],
//           [0, 1, 1, 0]
//         ),
//       };
//     } else {
//       // last text: fade in + stay pinned
//       return {
//         y: useTransform(scrollYProgress, [start, end], ["100%", "0%"]),
//         opacity: useTransform(scrollYProgress, [start, start + 0.2], [0, 1]),
//       };
//     }
//   });

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight}px` : "100vh" }}
//         className="relative w-full bg-black lg:flex hidden"
//       >
//         {/* sticky video */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <video
//             ref={videoRef}
//             src="/factory/factf.mp4"
//             playsInline
//             muted
//             preload="auto"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Gradient vectors */}
//           <img
//             className="purple_vctr hidden md:block absolute bottom-0 left-0 lg:bottom-[-60px] md:w-[350px] w-[300px]"
//             src="/purple_vector.svg"
//             alt="Purple Vector"
//           />
//           <img
//             className="orange_vctr hidden md:block absolute bottom-0 lg:left-20 left-0 lg:bottom-[-80px] md:w-[350px] w-[300px] opacity-80"
//             src="/orange_vector.svg"
//             alt="Orange Vector"
//           />

//           {/* text overlay */}
//           <div className="absolute left-[max(5%,calc((100vw-1340px)/2))] top-0 h-full flex flex-col justify-center pointer-events-none">
//             {texts.map((t, i) => (
//               <motion.div
//                 key={i}
//                 style={transforms[i]}
//                 className="absolute w-[500px]"
//               >
//                 <h2 className="bw-m xl:!text-[64px] sm:!text-[45px] text-[35px] xl:!leading-[74px] sm:!leading-[55px] !leading-[45px] text-black mb-2 capitalize">
//                   {t.heading}
//                 </h2>
//                 <p className="bw-r xl:text-[28px] xl:leading-[38px] sm:text-[24px] sm:leading-[34px] text-[20px] leading-[30px] text-black">
//                   {t.sub}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </ReactLenis>
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
// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const texts = [
//   {
//     heading: "Customized factory setups",
//     sub: "with zero upfront investment",
//   },
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//   },
//   {
//     heading: "Trusted by 40+ manufacturing clients",
//     sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
//   },
// ];

// export default function MainSec() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const imagesRef = useRef([]);
//   const lastFrame = useRef(0);

//   const totalFrames = 360;
//   const pixelsPerFrame = 60; // adjust scroll distance
//   const [scrollHeight, setScrollHeight] = useState(0);

//   // preload images
//   useEffect(() => {
//     const imgs = [];
//     for (let i = 1; i <= totalFrames; i++) {
//       const img = new Image();
//       img.src = `/factory/images/${i}.webp`; // ✅ correct path
//       imgs.push(img);
//     }
//     imagesRef.current = imgs;
//   }, []);

//   // draw frame
//   const drawFrame = (i) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     if (!canvas || !ctx) return;

//     const img = imagesRef.current[i];
//     if (!img || !img.complete) return;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   };

//   // scroll → frame mapping
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const total = totalFrames * pixelsPerFrame + window.innerHeight;
//     setScrollHeight(total);

//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const scrollTop = window.scrollY - containerRef.current.offsetTop;
//       const maxScroll = containerRef.current.scrollHeight - window.innerHeight;

//       const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
//       const frameIndex = Math.floor(progress * (totalFrames - 1));

//       if (frameIndex !== lastFrame.current) {
//         lastFrame.current = frameIndex;
//         drawFrame(frameIndex);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     // draw first frame once loaded
//     imagesRef.current[0]?.addEventListener("load", () => drawFrame(0));

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // text animation
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const transforms = texts.map((t, i) => {
//     const start = i / texts.length;
//     const end = (i + 1) / texts.length;

//     if (i !== texts.length - 1) {
//       return {
//         y: useTransform(scrollYProgress, [start, end], ["100%", "-100%"]),
//         opacity: useTransform(
//           scrollYProgress,
//           [start, start + 0.1, end - 0.1, end],
//           [0, 1, 1, 0]
//         ),
//       };
//     } else {
//       return {
//         y: useTransform(scrollYProgress, [start, end], ["100%", "0%"]),
//         opacity: useTransform(scrollYProgress, [start, start + 0.2], [0, 1]),
//       };
//     }
//   });

//   return (
//     <ReactLenis root>
//       <section
//         ref={containerRef}
//         style={{ height: scrollHeight ? `${scrollHeight}px` : "100vh" }}
//         className="relative w-full bg-white lg:flex hidden"
//       >
//         {/* sticky canvas (replaces video) */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <canvas
//             ref={canvasRef}
//             className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-auto object-cover"
//           />

//           {/* Gradient vectors */}
//           <img
//             className="purple_vctr hidden md:block absolute bottom-0 left-0 lg:bottom-[-60px] md:w-[350px] w-[300px]"
//             src="/purple_vector.svg"
//             alt="Purple Vector"
//           />
//           <img
//             className="orange_vctr hidden md:block absolute bottom-0 lg:left-20 left-0 lg:bottom-[-80px] md:w-[350px] w-[300px] opacity-80"
//             src="/orange_vector.svg"
//             alt="Orange Vector"
//           />

//           {/* text overlay */}
//           <div className="absolute left-[max(5%,calc((100vw-1340px)/2))] top-0 h-full flex flex-col justify-center pointer-events-none">
//             {texts.map((t, i) => (
//               <motion.div
//                 key={i}
//                 style={transforms[i]}
//                 className="absolute w-[500px]"
//               >
//                 <h2 className="bw-m xl:!text-[64px] sm:!text-[45px] text-[35px] xl:!leading-[74px] sm:!leading-[55px] !leading-[45px] text-black mb-2 capitalize">
//                   {t.heading}
//                 </h2>
//                 <p className="bw-r xl:text-[28px] xl:leading-[38px] sm:text-[24px] sm:leading-[34px] text-[20px] leading-[30px] text-black">
//                   {t.sub}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </ReactLenis>
//   );
// }
"use client";
import { ReactLenis } from "lenis/react";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const texts = [
  {
    heading: "Customized factory setups",
    sub: "with zero upfront investment",
  },
  {
    heading: "Flexible space and expansion",
    sub: "options ideal for MSMEs and first-time manufacturers",
  },
  {
    heading: "Tailored rental",
    sub: "plans aligned to your operational needs",
  },
  {
    heading: "Trusted by 40+ manufacturing clients",
    sub: "across diverse sectors including auto and aerospace components, engineering, network connectivity",
  },
];

export default function MainSec() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastFrame = useRef(0);

  const totalFrames = 340;
  const pixelsPerFrame = 24; // adjust scroll distance
  const [scrollHeight, setScrollHeight] = useState(0);
  const speedFactor = 0.8; // smaller segment = faster scroll

  // preload images
  useEffect(() => {
    const imgs = [];
    for (let i = 21; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/factory/images/${i}.webp`; // ✅ correct path
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  // draw frame
  const drawFrame = (i) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const img = imagesRef.current[i];
    if (!img || !img.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  // scroll → frame mapping
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const total = totalFrames * pixelsPerFrame + window.innerHeight;
    setScrollHeight(total);

    const onScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = window.scrollY - containerRef.current.offsetTop;
      const maxScroll = containerRef.current.scrollHeight - window.innerHeight;

      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      const frameIndex = Math.floor(progress * (totalFrames - 1));

      if (frameIndex !== lastFrame.current) {
        lastFrame.current = frameIndex;
        drawFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", onScroll);
    // draw first frame once loaded
    imagesRef.current[0]?.addEventListener("load", () => drawFrame(0));

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // text animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end end"], // ✅ start animation when section is 20% in view
  });

  // ✅ make scroll faster (30% faster) by narrowing scroll segments

  const transforms = texts.map((t, i) => {
    const seg = 1 / texts.length;
    const start = i * seg;
    const end = start + seg * speedFactor;

    if (i !== texts.length - 1) {
      return {
        y: useTransform(scrollYProgress, [start, end], ["40%", "-40%"]),
        opacity: useTransform(
          scrollYProgress,
          [start, start + 0.05, end - 0.05, end],
          [0, 1, 1, 0]
        ),
      };
    } else {
      return {
        y: useTransform(scrollYProgress, [start, end], ["40%", "0%"]),
        opacity: useTransform(scrollYProgress, [start, start + 0.05], [0, 1]),
      };
    }
  });

  return (
    <ReactLenis root>
      <section
        ref={containerRef}
        style={{ height: scrollHeight ? `${scrollHeight}px` : "100vh" }}
        className="relative w-full bg-white lg:flex hidden"
      >
        {/* sticky canvas */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-auto object-cover"
          />

          {/* Gradient vectors */}
          <img
            className="purple_vctr hidden md:block absolute bottom-0 left-0 lg:bottom-[-60px] md:w-[350px] w-[300px]"
            src="/purple_vector.svg"
            alt="Purple Vector"
          />
          <img
            className="orange_vctr hidden md:block absolute bottom-0 lg:left-20 left-0 lg:bottom-[-80px] md:w-[350px] w-[300px] opacity-80"
            src="/orange_vector.svg"
            alt="Orange Vector"
          />

          {/* text overlay */}
          <div className="absolute left-[max(5%,calc((100vw-1340px)/2))] top-0 h-full flex flex-col justify-center pointer-events-none">
            {texts.map((t, i) => (
              <motion.div
                key={i}
                style={transforms[i]}
                className="absolute w-[500px]"
              >
                <h2 className="bw-m xl:!text-[64px] sm:!text-[45px] text-[35px] xl:!leading-[74px] sm:!leading-[55px] !leading-[45px] text-black mb-2 capitalize">
                  {t.heading}
                </h2>
                <p className="bw-r xl:text-[28px] xl:leading-[38px] sm:text-[24px] sm:leading-[34px] text-[20px] leading-[30px] text-black">
                  {t.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
