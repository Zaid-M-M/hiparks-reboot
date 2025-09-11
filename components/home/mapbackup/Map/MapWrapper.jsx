// "use client";
// import { useEffect, useState } from "react";
// import { buildDynamicHighlightedRegions } from "@/utils/highlightedRegionsLoader";
// import ZoomableSVGMap from "./ZoomableSVGMap";
// import CustomDropdown from "./CustomDropdown";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";

// export default function NewMapF() {
//   const PLACEHOLDER_EXIT_DURATION = 500;
//   const [selectedRegionId, setSelectedRegionId] = useState(null);
//   const [showInfoSlider, setShowInfoSlider] = useState(false);
//   const [hoveredRegionId, setHoveredRegionId] = useState(null);
//   const [selectedRegionObject, setSelectedRegionObject] = useState(null);
//   const [hoveredLocation, setHoveredLocation] = useState(null);
//   const [lastHoveredLocation, setLastHoveredLocation] = useState(null);
//   const [defaultLocation, setDefaultLocation] = useState(null);
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [hasParentMounted, setHasParentMounted] = useState(false);
//   const [activeRegion, setActiveRegion] = useState(null);
//   const [highlightedRegions, setHighlightedRegions] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   // Step 1: Add isDropdownOpen state
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const displayLocation =
//     hoveredLocation || lastHoveredLocation || defaultLocation;
//   const activeRegionId = hoveredRegionId || selectedRegionId;

//   useEffect(() => {
//     async function loadRegions() {
//       try {
//         setLoading(true);
//         console.log("Fetching regions...");
//         const regions = await buildDynamicHighlightedRegions();
//         console.log("Fetched regions:", JSON.stringify(regions, null, 2));
//         const parsedRegions = Object.fromEntries(
//           Object.entries(regions).map(([regionKey, regionData]) => [
//             regionKey,
//             {
//               ...regionData,
//               locations: regionData.locations.map((loc) => {
//                 const x = loc.x !== undefined ? loc.x : 100;
//                 const y = loc.y !== undefined ? loc.y : 100;
//                 const color = loc.color || "#FF0000"; // Use loc.color from fetchAllRegions
//                 console.log(
//                   `Parsed ${loc.label}: x=${x}, y=${y}, color=${color}`
//                 );
//                 return { ...loc, x, y, color };
//               }),
//             },
//           ])
//         );
//         setHighlightedRegions(parsedRegions);
//       } catch (err) {
//         console.error("Error fetching regions:", err);
//         setError(
//           `Failed to load regions: ${err.message}. Please try again later.`
//         );
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadRegions();
//   }, []);

//   useEffect(() => {
//     if (displayLocation) {
//       setShowInfoSlider(false);
//       const timeout = setTimeout(() => {
//         setShowInfoSlider(true);
//       }, PLACEHOLDER_EXIT_DURATION);
//       return () => {
//         setShowInfoSlider(false);
//         clearTimeout(timeout);
//       };
//     }
//   }, [displayLocation]);

//   const handleZoomChange = (zoomLevel, number) => {
//     setIsZoomed(zoomLevel > 1);
//   };

//   // Step 2: Update handleRegionSelect to close dropdown
//   const handleRegionSelect = (id) => {
//     if (!id || typeof id !== "string" || !highlightedRegions) return;

//     setSelectedRegionId(id);
//     setActiveRegion(id);
//     setIsDropdownOpen(false); // Close dropdown on region select

//     const label =
//       highlightedRegions[id]?.label || id.charAt(0).toUpperCase() + id.slice(1);
//     setSelectedRegionObject({ id, name: label });
//     setHoveredRegionId(null);

//     const firstValidLocation = highlightedRegions[id]?.locations?.find(
//       (loc) => loc.image
//     );
//     setDefaultLocation(firstValidLocation || null);
//     setHoveredLocation(null);
//   };

//   const handleReset = () => {
//     setActiveRegion(null);
//     setSelectedRegionId(null);
//     setHoveredRegionId(null);
//     setSelectedRegionObject(null);
//     setDefaultLocation(null);
//     setHoveredLocation(null);
//     setLastHoveredLocation(null);
//     setShowInfoSlider(false);
//     setIsDropdownOpen(false); // Close dropdown on reset
//   };

//   if (loading) {
//     return (
//       <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
//         <div className="flex items-center justify-center h-full">
//           <p>Loading regions...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
//         <div className="flex items-center justify-center h-full">
//           <p>{error}</p>
//           <button
//             onClick={() => {
//               setError(null);
//               setLoading(true);
//               async function retry() {
//                 await loadRegions();
//               }
//               retry();
//             }}
//             className="ml-4 px-4 py-2 bg-[#F47920] text-white rounded"
//           >
//             Retry
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-y-auto text-white">
//       <div className="flex flex-col justify-center h-full fixmap fix lg:flex-row">
//         <div className="flex flex-col justify-between w-fit lg:min-w-[430px] xl:min-w-[470px] py-[60px]">
//           <div className="z-50 overflow-visible whitespace-nowrap">
//             <motion.h2
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//               className="text-[56px] bg-gradient-to-r whitespace-nowrap overflow-visible from-[#AC38D9] to-[#F47922] bg-clip-text text-transparent tracking-[-0.04em] w-auto bw-m"
//             >
//               Explore Park <span className="bw-r">Finder</span>
//             </motion.h2>
//           </div>

//           <div>
//             <div className="rounded-none h-[285px]  justify-between z-50 flex flex-col">
//               {/* Step 3: Pass isDropdownOpen and setIsDropdownOpen to CustomDropdown */}
//               <CustomDropdown
//                 highlightedRegions={highlightedRegions}
//                 selected={selectedRegionObject}
//                 onSelect={(region) => {
//                   handleRegionSelect(region.id);
//                   setSelectedRegionObject(region);
//                 }}
//                 isDropdownOpen={isDropdownOpen}
//                 setIsDropdownOpen={setIsDropdownOpen}
//                 displayLocation={displayLocation}
//               />
//               <div className="relative h-full w-full max-w-[900px] px-4 overflow-hidden">
//                 <AnimatePresence mode="wait">
//                   {!displayLocation && (
//                     <motion.div
//                       key="red-container"
//                       initial={{ y: "-100%" }}
//                       animate={{ y: 0 }}
//                       exit={{
//                         y: "-100%",
//                         transition: { duration: 1, ease: "easeInOut" },
//                       }}
//                       transition={{ duration: 1, ease: "easeInOut" }}
//                       className="absolute top-0 left-0 w-full bg-[#212324] h-full z-[10] overflow-hidden"
//                     >
//                       <div className="absolute inset-0 flex  flex-col items-center justify-start gap-[22px] text-sm text-gray-400">
//                         {/* <div className="flex items-center justify-center pt-[22px] gap-[12px] text-gray-400">
//                           <hr className="w-[40%] border-t border-gray-500" />
//                           <span className="bw-l text-[20px] leading-[20px]">
//                             OR
//                           </span>
//                           <hr className="w-[40%] border-t border-gray-300" />
//                         </div> */}
//                         <div className="flex items-center justify-center pt-[22px] gap-[12px] text-gray-400">
//                           <hr className="w-[40%] border-t border-gray-500" />
//                           <span className="bw-l text-[20px] leading-[20px]">
//                             OR
//                           </span>
//                           <hr className="w-[40%] border-t border-gray-300" />
//                         </div>

//                         <div className="bg-[#2E373A] px-[16px] py-[15px] rounded-[10px]">
//                           <img
//                             src="/home/map/cursor.png"
//                             width={36}
//                             height={36}
//                             alt="cursor"
//                           />
//                         </div>
//                         <span className="bw-m text-[16px] leading-[20px]">
//                           Click on location pins
//                         </span>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//                 <AnimatePresence>
//                   {displayLocation && (
//                     <motion.div
//                       key="info-parent"
//                       initial={{ y: "100%" }}
//                       animate={{ y: 0 }}
//                       exit={{
//                         y: "100%",
//                         transition: { duration: 1, ease: "easeInOut" },
//                       }}
//                       transition={{ duration: 1, ease: "easeInOut" }}
//                       className="absolute top-0 left-0  w-full h-full z-[40] mt-4 overflow-hidden"
//                       onAnimationComplete={() => setHasParentMounted(true)}
//                     >
//                       <AnimatePresence mode="wait">
//                         <>
//                           <style>
//                             {`
//           .group-hover-bg-orange:hover {
//             background-color: #F47922 !important;
//           }
//         `}
//                           </style>
//                           <motion.div
//                             key={`${
//                               displayLocation.id || displayLocation.label
//                             }-${displayLocation.city}`}
//                             initial={{ y: "100%" }}
//                             animate={{ y: 0 }}
//                             exit={{ y: "-100%" }}
//                             transition={{
//                               duration: 0.5,
//                               delay: hasParentMounted ? 0.1 : 0,
//                               ease: "easeInOut",
//                             }}
//                             className="group absolute top-0 left-0 w-full h-[90%] px-3 bg-[#1D1D1D50]  group-hover:bg-[#F47922] group-hover-bg-orange border-[1.5px] border-[#ffffff30] shadow-lg flex items-center justify-start gap-4 z-[50] transition-colors duration-300"
//                           >
//                             {displayLocation.image && (
//                               <img
//                                 src={displayLocation.image}
//                                 alt={displayLocation.label}
//                                 className="w-[147px] h-[137px] object-cover"
//                               />
//                             )}

//                             <div className="flex flex-col justify-between w-full max-w-[450px] gap-2 text-sm">
//                               <div>
//                                 <h3 className="text-lg bw-r text-[#F47920] group-hover:text-white transition-colors duration-300">
//                                   {displayLocation.label}
//                                   {displayLocation.city && (
//                                     <span className="text-[14px] text-[#F47920] group-hover:text-white transition-colors duration-300">
//                                       , {displayLocation.city}
//                                     </span>
//                                   )}
//                                 </h3>
//                                 {displayLocation.purpose && (
//                                   <p className="text-[14px] bw-r text-gray-400 group-hover:text-white transition-colors duration-300">
//                                     {displayLocation.purpose}
//                                   </p>
//                                 )}
//                               </div>

//                               {/* Container for toggling between the two boxes */}
//                               <div className="relative w-full h-[89px]">
//                                 {/* Default info box, shown by default, hidden on hover */}
//                                 <div className="absolute w-full  text-white/80 bg-[#3C3C3C] px-[7px] rounded-[4px] py-[11px] group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
//                                   {displayLocation.area && (
//                                     <div className="flex justify-between">
//                                       <p className="bw-r text-[13px]">
//                                         Total Area:
//                                       </p>
//                                       <p className="bw-m text-[15px]">
//                                         {displayLocation.area}
//                                       </p>
//                                     </div>
//                                   )}
//                                   {displayLocation.potential && (
//                                     <div className="flex justify-between">
//                                       <p className="bw-r text-[13px]">
//                                         Potential:
//                                       </p>
//                                       <p className="bw-m text-[15px]">
//                                         {displayLocation.potential}
//                                       </p>
//                                     </div>
//                                   )}
//                                   {displayLocation.certification && (
//                                     <div className="flex justify-between">
//                                       <p className="bw-r  text-[13px]">
//                                         Certification:
//                                       </p>
//                                       <p className="bw-m text-[13px] w-auto flex-wrap">
//                                         {displayLocation.certification}
//                                       </p>
//                                     </div>
//                                   )}
//                                   {/* </div> */}
//                                 </div>

//                                 {/* Explore Park box, hidden by default, shown on hover */}
//                                 <div className="absolute w-full text-white/80 px-[7px] h-[89px] cursor-pointer rounded-[4px] flex justify-between items-end py-[11px] bg-gradient-to-b from-[#F47922] to-[#FF974D] backdrop-blur-[2px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
//                                   <h3 className="inter-sb">Explore Park</h3>
//                                   <span>
//                                     <img src="/home/map/maparr.svg" alt="" />
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           </motion.div>
//                         </>
//                       </AnimatePresence>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             <div className="flex gap-[14px] mt-[9px]">
//               <div className="relative min-w-[140px] z-50 h-[122px]">
//                 <img
//                   src="/home/map/Numbers.svg"
//                   alt="Park Numbers"
//                   className="object-cover w-full h-full"
//                 />
//                 <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10px]">
//                   <div className="text-[66px] font-bold bw-r text-white leading-none">
//                     {activeRegionId
//                       ? highlightedRegions[activeRegionId]?.locations.length
//                       : Object.values(highlightedRegions || {}).reduce(
//                           (sum, region) =>
//                             sum + (region.locations?.length || 0),
//                           0
//                         )}
//                   </div>
//                   <div className="text-[16px] bw-r text-white/80 mt-[4px]">
//                     Parks
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full h-[122px] z-50 bg-[#212324] flex items-end pb-[16px] pr-[15px] justify-end">
//                 <Link
//                   href="#"
//                   className="flex items-center gap-2 text-[16px] bw-m  text-white/80 hover:text-white"
//                 >
//                   {activeRegionId
//                     ? `${highlightedRegions[activeRegionId]?.label} Overview`
//                     : "Parks Overview"}
//                   <img
//                     src="/home/map/external.svg"
//                     alt="External link"
//                     className="w-6 h-6"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="relative w-full h-full">
//           <ZoomableSVGMap
//             activeRegion={activeRegion}
//             onRegionSelect={handleRegionSelect}
//             onRegionHover={setHoveredRegionId}
//             onPinHover={(loc) => {
//               setHoveredLocation(loc);
//               if (loc) setLastHoveredLocation(loc);
//             }}
//             onReset={handleReset}
//             highlightedRegions={highlightedRegions}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { buildDynamicHighlightedRegions } from "@/utils/highlightedRegionsLoader";
import ZoomableSVGMap from "./ZoomableSVGMap";
import CustomDropdown from "./CustomDropdown";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function NewMapF() {
  const PLACEHOLDER_EXIT_DURATION = 500;
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [showInfoSlider, setShowInfoSlider] = useState(false);
  const [hoveredRegionId, setHoveredRegionId] = useState(null);
  const [selectedRegionObject, setSelectedRegionObject] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [lastHoveredLocation, setLastHoveredLocation] = useState(null);
  const [defaultLocation, setDefaultLocation] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasParentMounted, setHasParentMounted] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const [highlightedRegions, setHighlightedRegions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Step 1: Add isDropdownOpen state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const displayLocation =
    hoveredLocation || lastHoveredLocation || defaultLocation;
  const activeRegionId = hoveredRegionId || selectedRegionId;

  useEffect(() => {
    async function loadRegions() {
      try {
        setLoading(true);
        console.log("Fetching regions...");
        const regions = await buildDynamicHighlightedRegions();
        console.log("Fetched regions:", JSON.stringify(regions, null, 2));
        const parsedRegions = Object.fromEntries(
          Object.entries(regions).map(([regionKey, regionData]) => [
            regionKey,
            {
              ...regionData,
              locations: regionData.locations.map((loc) => {
                const x = loc.x !== undefined ? loc.x : 100;
                const y = loc.y !== undefined ? loc.y : 100;
                const color = loc.color || "#FF0000"; // Use loc.color from fetchAllRegions
                console.log(
                  `Parsed ${loc.label}: x=${x}, y=${y}, color=${color}`
                );
                return { ...loc, x, y, color };
              }),
            },
          ])
        );
        setHighlightedRegions(parsedRegions);
      } catch (err) {
        console.error("Error fetching regions:", err);
        setError(
          `Failed to load regions: ${err.message}. Please try again later.`
        );
      } finally {
        setLoading(false);
      }
    }
    loadRegions();
  }, []);

  useEffect(() => {
    if (displayLocation) {
      setShowInfoSlider(false);
      const timeout = setTimeout(() => {
        setShowInfoSlider(true);
      }, PLACEHOLDER_EXIT_DURATION);
      return () => {
        setShowInfoSlider(false);
        clearTimeout(timeout);
      };
    }
  }, [displayLocation]);

  const handleZoomChange = (zoomLevel, number) => {
    setIsZoomed(zoomLevel > 1);
  };

  // Step 2: Update handleRegionSelect to close dropdown
  const handleRegionSelect = (id) => {
    if (!id || typeof id !== "string" || !highlightedRegions) return;

    setSelectedRegionId(id);
    setActiveRegion(id);
    setIsDropdownOpen(false); // Close dropdown on region select

    const label =
      highlightedRegions[id]?.label || id.charAt(0).toUpperCase() + id.slice(1);
    setSelectedRegionObject({ id, name: label });
    setHoveredRegionId(null);

    const firstValidLocation = highlightedRegions[id]?.locations?.find(
      (loc) => loc.image
    );
    setDefaultLocation(firstValidLocation || null);
    setHoveredLocation(null);
  };

  const handleReset = () => {
    setActiveRegion(null);
    setSelectedRegionId(null);
    setHoveredRegionId(null);
    setSelectedRegionObject(null);
    setDefaultLocation(null);
    setHoveredLocation(null);
    setLastHoveredLocation(null);
    setShowInfoSlider(false);
    setIsDropdownOpen(false); // Close dropdown on reset
  };

  if (loading) {
    return (
      <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
        <div className="flex items-center justify-center h-full">
          <p>Loading regions...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-hidden text-white">
        <div className="flex items-center justify-center h-full">
          <p>{error}</p>
          <button
            onClick={() => {
              setError(null);
              setLoading(true);
              async function retry() {
                await loadRegions();
              }
              retry();
            }}
            className="ml-4 px-4 py-2 bg-[#F47920] text-white rounded"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E] z-0 overflow-y-auto text-white">
      <div className="flex flex-col justify-center h-full fixmap fix lg:flex-row">
        <div className="flex flex-col justify-between w-fit lg:min-w-[430px] xl:min-w-[470px] py-[60px]">
          <div className="z-50 overflow-visible whitespace-nowrap">
            <motion.h2
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              className="text-[56px] bg-gradient-to-r whitespace-nowrap overflow-visible from-[#AC38D9] to-[#F47922] bg-clip-text text-transparent tracking-[-0.04em] w-auto bw-m"
            >
              Explore Park <span className="bw-r">Finder</span>
            </motion.h2>
          </div>

          <div>
            <div className="rounded-none h-[300px] justify-between z-50 flex flex-col">
              {/* Step 3: Pass isDropdownOpen and setIsDropdownOpen to CustomDropdown */}
              <CustomDropdown
                highlightedRegions={highlightedRegions}
                selected={selectedRegionObject}
                onSelect={(region) => {
                  handleRegionSelect(region.id);
                  setSelectedRegionObject(region);
                }}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                displayLocation={displayLocation}
              />
              <div className="relative h-full w-full max-w-[900px] px-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  {!displayLocation && (
                    <motion.div
                      key="red-container"
                      initial={{ y: "-100%" }}
                      animate={{ y: 0 }}
                      exit={{
                        y: "-100%",
                        transition: { duration: 1, ease: "easeInOut" },
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full bg-[#212324] h-full z-[10] overflow-hidden"
                    >
                      <div className="absolute inset-0 flex  flex-col items-center justify-start gap-[22px] text-sm text-gray-400">
                        {/* <div className="flex items-center justify-center pt-[22px] gap-[12px] text-gray-400">
                          <hr className="w-[40%] border-t border-gray-500" />
                          <span className="bw-l text-[20px] leading-[20px]">
                            OR
                          </span>
                          <hr className="w-[40%] border-t border-gray-300" />
                        </div> */}
                        <div className="flex items-center justify-center pt-[22px] gap-[12px] text-gray-400">
                          <hr className="w-[40%] border-t border-gray-500" />
                          <span className="bw-l text-[20px] leading-[20px]">
                            OR
                          </span>
                          <hr className="w-[40%] border-t border-gray-300" />
                        </div>

                        <div className="bg-[#2E373A] px-[16px] py-[15px] rounded-none">
                          <img
                            src="/home/map/cursor.png"
                            width={36}
                            height={36}
                            alt="cursor"
                          />
                        </div>
                        <span className="bw-m text-[16px] leading-[20px]">
                          Click on location pins
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {displayLocation && (
                    <motion.div
                      key="info-parent"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{
                        y: "100%",
                        transition: { duration: 1, ease: "easeInOut" },
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full h-full z-[40] mt-4 overflow-hidden"
                      onAnimationComplete={() => setHasParentMounted(true)}
                    >
                      <AnimatePresence mode="wait">
                        <>
                          <style>
                            {`
            .group-hover-bg-orange:hover {
              background-color: #F47922 !important;
            }
          `}
                          </style>

                          <motion.div
                            key={`${
                              displayLocation.id || displayLocation.label
                            }-${displayLocation.city}`}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{
                              duration: 0.5,
                              delay: hasParentMounted ? 0.1 : 0,
                              ease: "easeInOut",
                            }}
                            className="group absolute top-0 left-0 w-full h-full px-3 bg-[#1D1D1D50] border-b border-b-red-600 group-hover:bg-[#F47922] group-hover-bg-orange border-[1.5px] border-[#ffffff30] shadow-lg flex items-center gap-6 z-[50] transition-colors duration-300"
                          >
                            {/* Image */}
                            {displayLocation.image && (
                              <div className="flex-shrink-0">
                                <img
                                  src={displayLocation.image}
                                  alt={displayLocation.label}
                                  className="w-[150px] h-[150px] object-cover rounded-none"
                                />
                              </div>
                            )}

                            {/* Content */}
                            <div className="flex flex-col justify-between w-full max-w-[480px] gap-3 text-sm">
                              <div>
                                <h3 className="text-lg bw-r text-[#F47920] group-hover:text-white transition-colors duration-300">
                                  {displayLocation.label}
                                  {displayLocation.city && (
                                    <span className="text-[14px] text-[#F47920] group-hover:text-white transition-colors duration-300">
                                      , {displayLocation.city}
                                    </span>
                                  )}
                                </h3>
                                {displayLocation.purpose && (
                                  <p className="text-[14px] bw-r text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {displayLocation.purpose}
                                  </p>
                                )}
                              </div>

                              {/* Info / Explore toggle */}
                              <div className="relative w-full h-[89px]">
                                {/* Default info box */}
                                <div className="absolute inset-0 text-white/80 bg-[#3C3C3C] px-[7px] rounded-none py-[10px] group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
                                  <div className="flex flex-col gap-[6px]">
                                    {displayLocation.area && (
                                      <div className="flex justify-between">
                                        <p className="bw-r text-[13px]">
                                          Total Area:
                                        </p>
                                        <p className="bw-m text-[15px]">
                                          {displayLocation.area}
                                        </p>
                                      </div>
                                    )}
                                    {displayLocation.potential && (
                                      <div className="flex justify-between">
                                        <p className="bw-r text-[13px]">
                                          Potential:
                                        </p>
                                        <p className="bw-m text-[15px]">
                                          {displayLocation.potential}
                                        </p>
                                      </div>
                                    )}
                                    {displayLocation.certification && (
                                      <div className="flex justify-between">
                                        <p className="bw-r text-[13px]">
                                          Certification:
                                        </p>
                                        <p className="bw-m text-[13px] w-auto flex-wrap">
                                          {displayLocation.certification}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* Explore Park box */}
                                <div className="absolute inset-0 text-white/80 px-[7px] h-[89px] cursor-pointer rounded-none flex justify-between items-end py-[11px] bg-gradient-to-b from-[#F47922] to-[#FF974D] backdrop-blur-[2px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                                  <h3 className="inter-sb">Explore Park</h3>
                                  <span>
                                    <img src="/home/map/maparr.svg" alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex gap-[14px] mt-[9px]">
              <div className="relative min-w-[140px] z-50 h-[122px]">
                <img
                  src="/home/map/Numbers.svg"
                  alt="Park Numbers"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10px]">
                  <div className="text-[66px] font-bold bw-r text-white leading-none">
                    {activeRegionId
                      ? highlightedRegions[activeRegionId]?.locations.length
                      : Object.values(highlightedRegions || {}).reduce(
                          (sum, region) =>
                            sum + (region.locations?.length || 0),
                          0
                        )}
                  </div>
                  <div className="text-[16px] bw-r text-white/80 mt-[4px]">
                    Parks
                  </div>
                </div>
              </div>

              <div className="w-full h-[122px] z-50 bg-[#212324] flex items-end pb-[16px] pr-[15px] justify-end">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[16px] bw-m  text-white/80 hover:text-white"
                >
                  {activeRegionId
                    ? `${highlightedRegions[activeRegionId]?.label} Overview`
                    : "Parks Overview"}
                  <img
                    src="/home/map/external.svg"
                    alt="External link"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-full">
          <ZoomableSVGMap
            activeRegion={activeRegion}
            onRegionSelect={handleRegionSelect}
            onRegionHover={setHoveredRegionId}
            onPinHover={(loc) => {
              setHoveredLocation(loc);
              if (loc) setLastHoveredLocation(loc);
            }}
            onReset={handleReset}
            highlightedRegions={highlightedRegions}
          />
        </div>
      </div>
    </section>
  );
}
