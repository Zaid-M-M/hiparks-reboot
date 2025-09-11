// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const faqs = [
//   {
//     question:
//       "What Distinguishes Horizon Industrial Park As A Prime Industrial And Logistics Destination In Haryana?",
//     answer:
//       "Horizon’s Network Of Industrial And Logistics Parks In Haryana Encompasses Three Locations: Farukhnagar, Bilaspur And Koka, Spanning 223.30 Acres. These Parks Stand Out Due To Their Proximity To Notable Industrial Hubs Like IMT Manesar, Dharuhera, Bhiwadi, And Jhajjar, With Excellent Connectivity To Gurugram, New Delhi, And Jaipur Via The KMP Expressway And The Delhi-Jaipur Highway.",
//   },
//   {
//     question:
//       "What Are The Environmental Features Of Horizon Industrial Parks?",
//     answer:
//       "Dummy description: Horizon Industrial Parks adopt eco-friendly practices, including rainwater harvesting, solar energy usage, and sustainable waste management systems.",
//   },
//   {
//     question: "Which Industries Are Best Suited For Operations In Haryana?",
//     answer:
//       "Dummy description: Industries like E-commerce, 3PL, FMCG, manufacturing, and retail sectors are best suited for operations in Haryana due to strong infrastructure and connectivity.",
//   },
//   {
//     question: "Are Horizon Industrial Parks Compliant With Global Standards?",
//     answer:
//       "Dummy description: Yes, all facilities are designed for 100% compliance with global industrial and logistics standards.",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full bg-black text-white py-16 px-4 sm:px-8">
//       <div className="max-w-5xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-center text-3xl sm:text-[56px] tracking-[-0.04em] leading-[70px] bw-m mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
//           Frequently Asked Questions
//         </h2>

//         {/* FAQ List */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b border-gray-700 pb-4">
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex justify-between items-center text-left text-[18px] leading-[30px] bw-md transition"
//               >
//                 {faq.question}
//                 {activeIndex === index ? (
//                   <Minus className="w-5 h-5" />
//                 ) : (
//                   <Plus className="w-5 h-5" />
//                 )}
//               </button>

//               <AnimatePresence>
//                 {activeIndex === index && (
//                   <motion.p
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="mt-3 text-gray-300 text-[16px] bw-r leading-[26px]"
//                   >
//                     {faq.answer}
//                   </motion.p>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const faqs = [
//   {
//     question:
//       "What Distinguishes Horizon Industrial Park As A Prime Industrial And Logistics Destination In Haryana?",
//     answer:
//       "Horizon’s Network Of Industrial And Logistics Parks In Haryana Encompasses Three Locations: Farukhnagar, Bilaspur And Koka, Spanning 223.30 Acres. These Parks Stand Out Due To Their Proximity To Notable Industrial Hubs Like IMT Manesar, Dharuhera, Bhiwadi, And Jhajjar, With Excellent Connectivity To Gurugram, New Delhi, And Jaipur Via The KMP Expressway And The Delhi-Jaipur Highway.",
//   },
//   {
//     question:
//       "What Are The Environmental Features Of Horizon Industrial Parks?",
//     answer:
//       "Dummy description: Horizon Industrial Parks adopt eco-friendly practices, including rainwater harvesting, solar energy usage, and sustainable waste management systems.",
//   },
//   {
//     question:
//       "What Distinguishes Horizon Industrial Park As A Prime Industrial And Logistics Destination In Haryana?",
//     answer:
//       "Horizon’s Network Of Industrial And Logistics Parks In Haryana Encompasses Three Locations: Farukhnagar, Bilaspur And Koka, Spanning 223.30 Acres. These Parks Stand Out Due To Their Proximity To Notable Industrial Hubs Like IMT Manesar, Dharuhera, Bhiwadi, And Jhajjar, With Excellent Connectivity To Gurugram, New Delhi, And Jaipur Via The KMP Expressway And The Delhi-Jaipur Highway.",
//   },
//   {
//     question:
//       "What Are The Environmental Features Of Horizon Industrial Parks?",
//     answer:
//       "Dummy description: Horizon Industrial Parks adopt eco-friendly practices, including rainwater harvesting, solar energy usage, and sustainable waste management systems.",
//   },
//   {
//     question: "Which Industries Are Best Suited For Operations In Haryana?",
//     answer:
//       "Dummy description: Industries like E-commerce, 3PL, FMCG, manufacturing, and retail sectors are best suited for operations in Haryana due to strong infrastructure and connectivity.",
//   },
//   {
//     question: "Are Horizon Industrial Parks Compliant With Global Standards?",
//     answer:
//       "Dummy description: Yes, all facilities are designed for 100% compliance with global industrial and logistics standards.",
//   },
//   {
//     question: "Which Industries Are Best Suited For Operations In Haryana?",
//     answer:
//       "Dummy description: Industries like E-commerce, 3PL, FMCG, manufacturing, and retail sectors are best suited for operations in Haryana due to strong infrastructure and connectivity.",
//   },
//   {
//     question: "Are Horizon Industrial Parks Compliant With Global Standards?",
//     answer:
//       "Dummy description: Yes, all facilities are designed for 100% compliance with global industrial and logistics standards.",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   // Split FAQs into 2 columns
//   const mid = Math.ceil(faqs.length / 2);
//   const leftColumn = faqs.slice(0, mid);
//   const rightColumn = faqs.slice(mid);

//   return (
//     <section className="w-full min-h-[100vh] md:py-[80px] lg:py-[100px]  py-[45px] bg-black text-white  px-4 sm:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-center text-3xl sm:text-[56px] tracking-[-0.04em] leading-[70px] bw-m mb-12 bg-gradient-to-r from-[#AC38D9] to-[#F47922]   bg-clip-text text-transparent">
//           Frequently Asked Questions
//         </h2>

//         {/* Two independent columns */}
//         <div className="flex flex-col md:flex-row gap-8 1024:gap-[50px]">
//           {/* Left Column */}
//           <div className="flex-1 space-y-6">
//             {leftColumn.map((faq, index) => (
//               <div key={index} className="border-b border-gray-700 py-[35px]">
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex justify-between cursor-pointer items-center text-left text-[18px] leading-[30px] bw-md transition"
//                 >
//                   {faq.question}
//                   {activeIndex === index ? (
//                     <Minus className="w-5 h-5 shrink-0 ml-2" />
//                   ) : (
//                     <Plus className="w-5 h-5 shrink-0 ml-2" />
//                   )}
//                 </button>

//                 <AnimatePresence>
//                   {activeIndex === index && (
//                     <motion.p
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="mt-3 text-gray-300 text-[16px] bw-r leading-[26px] overflow-hidden"
//                     >
//                       {faq.answer}
//                     </motion.p>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>

//           {/* Right Column */}
//           <div className="flex-1 space-y-6">
//             {rightColumn.map((faq, index) => {
//               const actualIndex = mid + index; // adjust index for right column
//               return (
//                 <div
//                   key={actualIndex}
//                   className="border-b border-gray-700 py-[35px]"
//                 >
//                   <button
//                     onClick={() => toggleFAQ(actualIndex)}
//                     className="w-full flex justify-between items-center text-left text-[18px] leading-[30px] bw-md transition"
//                   >
//                     {faq.question}
//                     {activeIndex === actualIndex ? (
//                       <Minus className="w-5 h-5 shrink-0 ml-2" />
//                     ) : (
//                       <Plus className="w-5 h-5 shrink-0 ml-2" />
//                     )}
//                   </button>

//                   <AnimatePresence>
//                     {activeIndex === actualIndex && (
//                       <motion.p
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="mt-3 text-gray-300 text-[16px] bw-r leading-[26px] overflow-hidden"
//                       >
//                         {faq.answer}
//                       </motion.p>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split FAQs into 2 columns
  const mid = Math.ceil(data.length / 2);
  const leftColumn = data.slice(0, mid);
  const rightColumn = data.slice(mid);

  return (
    <section className="w-full min-h-[100vh] md:py-[80px] lg:py-[100px] py-[45px] bg-black text-white F">
      <div className="fix">
        {/* Heading */}
        {/* <h2 className="text-center text-[32px] xl:text-[64px] xl:leading-[74px] lg:text-[56px] tracking-[-0.04em] leading-[42px] lg:leading-[66px] bw-m mb-12 bg-gradient-to-r from-[#AC38D9] to-[#F47922] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2> */}
        <div className="flex md:justify-center">
          <h2 className="md:text-center max-w-fit text-[32px] lg:text-[56px] xl:text-[64px] pb-4 leading-[42px] lg:leading-[66px] xl:leading-[74px] tracking-[-0.04em] bw-m bg-gradient-to-r from-[#AC38D9] from-40% to-60% to-[#F47922] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row 1024:gap-[50px]">
          {/* Left Column */}
          <div className="flex-1 lg:space-y-6">
            {leftColumn.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#303030] py-3 lg:py-[35px]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer bw-m text-[18px] pr-5 w-full flex justify-between items-center text-left leading-[30px] bw-md transition"
                >
                  {faq.title}
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 shrink-0 ml-2" />
                  ) : (
                    <Plus className="w-5 h-5 shrink-0 ml-2" />
                  )}
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-[#e0e0e0cf] text-[16px] bw-r leading-[26px] overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: faq.desc }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-0 lg:space-y-6">
            {rightColumn.map((faq, index) => {
              const actualIndex = mid + index;
              return (
                <div
                  key={actualIndex}
                  className="border-b border-[#303030] py-3 lg:py-[35px]"
                >
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="cursor-pointer pr-5 w-full flex justify-between items-center text-left text-[18px] leading-[30px] bw-md transition"
                  >
                    <p className="lg:w-[80%] bw-m text-[18px]">{faq.title}</p>
                    {activeIndex === actualIndex ? (
                      <Minus className="w-5 h-5 shrink-0 ml-2" />
                    ) : (
                      <Plus className="w-5 h-5 shrink-0 ml-2" />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeIndex === actualIndex && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-[#E0E0E093] text-[16px] bw-r leading-[26px] overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: faq.desc }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
