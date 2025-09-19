// "use client";
// import React from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import AwardSlider from "./_components/AwardSlider";

// // 🔹 Unified Awards Array with images as arrays
// const awards = [
//   {
//     year: 2023,
//     title: "Frontiers of Grade A Industrial Parks",
//     subtitle:
//       "10th CII IL Supply Chain & Logistics Excellence (SCALE) Awards Horizon Industrial Parks recognised for redefining Grade A warehousing standards in India.",
//     images: ["/brand_journey/award_img.png"],
//   },
//   {
//     year: 2023,
//     title: "Fastest Growing Industrial and Logistic Park",
//     subtitle:
//       "15th Express Logistics & Supply Chain Awards 2023 Awarded for rapid growth and establishing India’s largest in-city Grade A logistics network. Leadership in developing high-performance logistics ecosystems.",
//     images: ["/brand_journey/awards/2023/fast_growing_2023.png"],
//   },
//   {
//     year: 2024,
//     title: "IGBC Green Champion Award",
//     subtitle:
//       "Green Building Congress 2024 Honoured as a pioneer in large-scale adoption of green logistics parks and warehouses - with Chakan II, Bilaspur, Malur, and Delhi I achieving IGBC Platinum status",
//     images: [
//       "/brand_journey/awards/2024/IGBC_bilaspur.png",
//       "/brand_journey/awards/2024/IGBC_chakanII.png",
//       "/brand_journey/awards/2024/IGBC_faruknagarI.png",
//     ],
//   },
//   {
//     year: 2024,
//     title: "Warehousing Project of the Year – Chakan II",
//     subtitle:
//       "GRI Awards 2024 Recognised for cutting-edge design, human-centric features and operational excellence.",
//     images: ["/brand_journey/awards/2024/warehouse_project_2024.png"],
//   },
//   {
//     year: 2024,
//     title: "Industrial Park of the Year – West Zone",
//     subtitle:
//       "Realty+ Excellence Awards 2024 Horizon Industrial Park Chakan II celebrated as the premier Grade A park and benchmark in Western India.",
//     images: ["/brand_journey/awards/2024/industy_park_west.png"],
//   },
//   {
//     year: 2024,
//     title: "Warehousing Park of the Year – North Zone",
//     subtitle:
//       "Realty+ Excellence Awards 2024 Horizon Industrial Park Bilaspur honoured for scale, ESG certifications, occupier and regional impact.",
//     images: ["/brand_journey/award_img.png"],
//   },
//   {
//     year: 2024,
//     title: "Industrial / Warehousing Project of the Year – South Zone",
//     subtitle:
//       "Realty+ Excellence Awards 2024 JCK Horizon Industrial Park Kothur awarded for innovation and sustainability features like rooftop solar and smart layouts.",
//     images: ["/brand_journey/award_img.png"],
//   },
//   {
//     year: 2024,
//     title: "Leader in Innovative Industrial Real Estate Solutions",
//     subtitle:
//       "11th CII IL SCALE Awards 2024 Recognised for pioneering and delivering integrated, agile, future-ready solutions across India, that set new industry benchmarks.",
//     images: ["/brand_journey/awards/2024/leader_estate_2024.png"],
//   },
//   {
//     year: 2024,
//     title: "Industrial Warehousing – West Zone Winner",
//     subtitle:
//       "The Economic Times Real Estate Awards 2024 (National Edition) Horizon Industrial Park Chakan II awarded for excellence in industrial warehousing.",
//     images: ["/brand_journey/awards/2024/industy_ware_2024.png"],
//   },
//   // you can keep adding year: 2025, etc.
// ];

// const Awards = () => {
//   const [value, setValue] = React.useState("2024"); // default year

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // get unique years from awards array
//   const years = [...new Set(awards.map((a) => a.year))].sort((a, b) => b - a);

//   return (
//     <div className="relative ">
//       <img
//         className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[0px] md:left-[-100px] left-[-80px] lg:top-[0px] xl:left-[-150px] 1920:left-[100px]"
//         src="/green_vector.svg"
//       />
//       <img
//         className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[50px] md:left-[-100px] left-[0px] lg:top-[-80px] xl:left-[100px] 1920:left-[300px]"
//         src="/orange_vector.svg"
//       />
//       <div className="relative f;e w-full overflow-hidden fix pt-[45px] md:pt-[80px] pb-[45px]">
//         {/* <div className="flex items-center md:flex-row flex-col md:items-end gap-[5px] md:gap-[20px] absolute md:top-[89px] 1280:top-[115px] top-[34px]"> */}

//         <div className="flex">
//           <div className="w-full">
//             {" "}
//             {/* <h1 className="sec_hd bw-r mb-5">
//               <span className="inline-flex bw-m items-center">
//                 Building for What’s Next.{" "}
//                 <img
//                   src="/abstract_pattern.svg"
//                   alt=""
//                   className="ml-2 w-[100px] md:w-[120px] lg:w-auto"
//                 />
//               </span>
//               <br />
//               Recognised for What We Deliver.
//             </h1> */}
//             <TabContext value={value.toString()}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   flexDirection: { xs: "column", m: "row" }, // mobile column, desktop row
//                   gap: { xs: 3, md: "100px" },
//                 }}
//                 className="w-full"
//               >
//                 {/* --- Left Title/Content --- */}
//                 <Box>
//                   {/* <h1 className="sec_hd bw-r">

//                     Building for What’s Next.{" "}

//                     <br /> Recognised for What We Deliver.
//                   </h1> */}
//                   {/* <h1 className="sec_hd bw-r">
//                     <span className="inline-flex bw-m items-center">
//                       Building for What’s Next.{" "}
//                       <img
//                         src="/abstract_pattern.svg"
//                         alt=""
//                         className="ml-2 w-[100px] md:w-[120px] lg:w-auto"
//                       />
//                     </span>
//                     <br />
//                     Recognised for What We Deliver.
//                   </h1> */}

//                   <h1 className="1366:text-[56px] 1280:text-[48px] 1366:leading-[66px] 1280:leading-[48px] bw-r mb-5">
//                     <span className="inline-flex bw-m items-center">
//                       Building for What’s Next.{" "}
//                       <img
//                         src="/abstract_pattern.svg"
//                         alt=""
//                         className="ml-2 w-[100px] md:w-[120px] lg:w-auto"
//                       />
//                     </span>
//                     <br />
//                     Recognised for What We Deliver.
//                   </h1>
//                 </Box>

//                 {/* --- Right Tabs --- */}
//                 <Box
//                   sx={{
//                     borderBottom: 0,
//                     borderColor: "divider",
//                     width: "fit-content",
//                   }}
//                 >
//                   <TabList
//                     onChange={handleChange}
//                     aria-label="awards year tabs"
//                     className="border-1 border-[#CDCDCD] rounded-[20px]"
//                   >
//                     {years.map((year) => (
//                       <Tab
//                         key={year}
//                         value={year.toString()}
//                         label={
//                           <Box display="flex" alignItems="center" gap={1}>
//                             <span>{year}</span>
//                             {value.toString() === year.toString() && (
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="30"
//                                 height="30"
//                                 viewBox="0 0 39 40"
//                                 fill="none"
//                               >
//                                 <path
//                                   d="M8.125 31.3745L30.875 8.62451"
//                                   stroke="currentColor"
//                                   strokeWidth="2"
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                 />
//                                 <path
//                                   d="M8.125 8.62451H30.875V31.3745"
//                                   stroke="currentColor"
//                                   strokeWidth="2"
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                 />
//                               </svg>
//                             )}
//                           </Box>
//                         }
//                         sx={{
//                           height: { xs: "60px", lg: "80px", xl: "100px" },
//                           width: { xs: "50%", lg: "130px", xl: "165px" },
//                           color: "#000",
//                           fontFamily: "Barlow",
//                           fontSize: { xs: "19px", md: "21px", lg: "23px" },
//                           fontWeight: "400",
//                           textTransform: "none",
//                           ":hover": {
//                             background:
//                               "linear-gradient(131deg, #AC38D9 24.37%, #f47920 80.46%)",
//                             color: "#fff",
//                           },
//                           "&.Mui-selected": {
//                             background:
//                               "linear-gradient(131deg, #AC38D9 24.37%, #f47920 80.46%)",
//                             color: "#fff",
//                             border: "none",
//                           },
//                         }}
//                       />
//                     ))}
//                   </TabList>
//                 </Box>
//               </Box>
//               <Box>
//                 <p className="text-black min-w-[80%] block bw-r md:text-[24px] leading-[150%] lg:max-w-6xl mt-5">
//                   From sustainability leadership to world-class park design,
//                   Horizon Industrial Parks has been recognised by leading
//                   forums, for raising the bar.
//                 </p>
//               </Box>
//               {/* --- Panels --- */}
//               {years.map((year) => (
//                 <TabPanel
//                   key={year}
//                   value={year.toString()}
//                   sx={{
//                     float: "left",
//                     paddingTop: "70px",
//                     paddingLeft: 0,
//                     paddingRight: 0,
//                     width: "100%",
//                   }}
//                 >
//                   <AwardSlider awards={awards.filter((a) => a.year === year)} />
//                 </TabPanel>
//               ))}
//             </TabContext>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Awards;
"use client";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AwardSlider from "./_components/AwardSlider";

// 🔹 Unified Awards Array with images as arrays
const awards = [
  {
    year: 2023,
    title: "Frontiers of Grade A Industrial Parks",
    subtitle:
      "10th CII IL Supply Chain & Logistics Excellence (SCALE) Awards",
    description: "Horizon Industrial Parks recognised for redefining Grade A warehousing standards in India",
    images: ["/brand_journey/award_img.png"],
  },
  {
    year: 2023,
    title: "Fastest Growing Industrial and Logistic Park",
    subtitle:
      "15th Express Logistics & Supply Chain Awards 2023",
    description: "Awarded for rapid growth and establishing India’s largest in-city Grade A logistics network. Leadership in developing high-performance logistics ecosystems",
    images: ["/brand_journey/awards/2023/fast_growing_2023.png"],
  },
  {
    year: 2024,
    title: "Warehousing Project of the Year – Chakan II",
    subtitle: "GRI Awards 2024",
    description: "Recognised for cutting-edge design, human-centric features  and operational excellence",
    images: ["/brand_journey/awards/2024/warehouse_project_2024.png"],
  },
  {
    year: 2024,
    title: "Industrial Park of the Year – West Zone",
    subtitle:
      "Realty+ Excellence Awards 2024",
    description: "Horizon Industrial Park Chakan II celebrated as the premier Grade A park and benchmark in Western India",
    images: ["/brand_journey/awards/2024/industy_park_west.png"],
  },
  {
    year: 2024,
    title: "Warehousing Park of the Year – North Zone",
    subtitle: "Realty+ Excellence Awards 2024",
    description: "Horizon Industrial Park Bilaspur honoured for scale, ESG certifications, occupier and regional impact",
    images: ["/brand_journey/awards/2024/industy_park_west.png"],
  },
  {
    year: 2024,
    title: "Industrial / Warehousing Project of the Year – South Zone",
    subtitle: "Realty+ Excellence Awards 2024",
    description: "JCK Horizon Industrial Park Kothur awarded for innovation and sustainability features like rooftop solar and smart layouts",
    images: ["/brand_journey/awards/2024/industy_park_west.png"],
  },
  {
    year: 2024,
    title: "Leader in Innovative Industrial Real Estate Solutions",
    subtitle: "11th CII IL SCALE Awards 2024",
    description: "Recognised for pioneering and delivering integrated, agile, future-ready solutions across India, that set new industry benchmarks",
    images: ["/brand_journey/awards/2024/leader_estate_2024.png"],
  },
  {
    year: 2024,
    title: "IGBC Green Champion Award",
    subtitle: "Green Building Congress 2024",
    description: "Honoured as a pioneer in large-scale adoption of green logistics parks and warehouses - with Chakan II, Bilaspur, Malur, and Delhi I achieving IGBC Platinum status",
    images: [
      "/brand_journey/awards/2024/IGBC_bilaspur.png",
      "/brand_journey/awards/2024/IGBC_chakanII.png",
      "/brand_journey/awards/2024/IGBC_faruknagarI.png",
    ],
  },
  {
    year: 2024,
    title: "Industrial Warehousing – West Zone Winner",
    subtitle: "The Economic Times Real Estate Awards 2024 (National Edition)",
    description: "Horizon Industrial Park Chakan II awarded for excellence in industrial warehousing",
    images: ["/brand_journey/awards/2024/industy_ware_2024.png"],
  },
  // you can keep adding year: 2025, etc.
];

const Awards = () => {
  const [value, setValue] = React.useState("2024"); // default year

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // get unique years from awards array
  const years = [...new Set(awards.map((a) => a.year))].sort((a, b) => b - a);

  return (
    <div className="relative overflow-hidden bg-[#f5f5f5]">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[0px] md:left-[-100px] left-[-80px] lg:top-[-100px] xl:left-[-300px] 1920:left-[-200px]"
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[50px] md:left-[-100px] left-[0px] lg:top-[-200px] xl:left-[-200px] 1920:left-[0px]"
        src="/orange_vector.svg"
      />
      <div className="relative w-full overflow-hidden fix pt-[45px] md:pt-[80px] pb-[45px] bg-[#]">
        {/* <div className="flex items-center md:flex-row flex-col md:items-end gap-[5px] md:gap-[20px] absolute md:top-[89px] 1280:top-[115px] top-[34px]"> */}

        <div className="flex">
          <div className="w-full">
            {" "}
            {/* <h1 className="sec_hd bw-r mb-5">
              <span className="inline-flex bw-m items-center">
                Building for What’s Next.{" "}
                <img
                  src="/abstract_pattern.svg"
                  alt=""
                  className="ml-2 w-[100px] md:w-[120px] lg:w-auto"
                />
              </span>
              <br />
              Recognised for What We Deliver.
            </h1> */}
            <TabContext value={value.toString()}>
              <div
                className="w-full flex justify-between items-center gap-3 
               flex-col md:gap-5 md:flex-row xl:gap-[100px]"
              >
                {/* --- Left Title/Content --- */}
                {/* <div>
                  <h1 className="1366:text-[56px] 1024:text-[48px] text-[32px] leaing-[42px] 1366:leading-[66px] 1024:leading-[58px] bw-r mb-5">
                    <span className="inline-flex bw-m items-center">
                      Building for What’s Next.{" "}
                      <img
                        src="/abstract_pattern.svg"
                        alt=""
                        className="ml-2 xl:!flex !hidden w-[100px] md:w-[120px] lg:w-auto"
                      />
                    </span>
                    <br />
                    Recognised for What We Deliver.
                    <span className="xl:!hidden !flex">
                      <img
                        src="/abstract_pattern.svg"
                        alt=""
                        className="mt-5 w-[100px] md:w-[120px] lg:w-auto"
                      />
                    </span>
                  </h1>
                </div> */}

                {/* --- Right Tabs --- */}
                {/* <div className="w-fit">
                  <TabList
                    onChange={handleChange}
                    aria-label="awards year tabs"
                    className="border border-[#CDCDCD] rounded-[20px]"
                  >
                    {years.map((year) => (
                      <Tab
                        key={year}
                        value={year.toString()}
                        label={
                          <div className="flex items-center gap-1">
                            <span>{year}</span>
                            {value.toString() === year.toString() && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 39 40"
                                fill="none"
                              >
                                <path
                                  d="M8.125 31.3745L30.875 8.62451"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.125 8.62451H30.875V31.3745"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                        }
                        sx={{
                          height: { xs: "60px", lg: "80px", xl: "100px" },
                          width: { xs: "50%", lg: "130px", xl: "165px" },
                          color: "#000",
                          fontFamily: "Barlow",
                          fontSize: { xs: "19px", md: "21px", lg: "23px" },
                          fontWeight: "400",
                          textTransform: "none",
                          ":hover": {
                            background:
                              "linear-gradient(131deg, #AC38D9 24.37%, #f47920 80.46%)",
                            color: "#fff",
                          },
                          "&.Mui-selected": {
                            background:
                              "linear-gradient(131deg, #AC38D9 24.37%, #f47920 80.46%)",
                            color: "#fff",
                            border: "none",
                          },
                        }}
                      />
                    ))}
                  </TabList>
                </div> */}
              </div>

              <div className="flex flex-col justify-start">
                <div className="flex md:flex-row flex-col gap-10">

                  <div className="flex gap-[10px] md:gap-[17px] flex-col">
                    <h1 className="1366:text-[56px] 1024:text-[48px] text-[28px] md:text-[35px] leading-[38px] 1366:leading-[66px] 1024:leading-[58px] 1024:tracking-[-1.92px] 1366:tracking-[-2.24px] bw-r ">
                      <span className="inline-flex bw-m items-center">
                        Building for What’s Next.{" "}
                        {/* <img
                        src="/abstract_pattern.svg"
                        alt=""
                        className="ml-2 xl:!flex !hidden w-[100px] md:w-[120px] lg:w-auto"
                      /> */}
                      </span>
                      <br />
                      Recognised for What We Deliver.
                    </h1>
                    <img
                      src="/abstract_pattern.svg"
                      alt=""
                      className="abstract_svg w-max"
                    />
                  </div>

                  <div className="flex md:w-1/2 flex-col lg:justify-between gap-5 mt-[10px]">
                    <p className="text-black bw-r xl:text-[24px] text-[18px] leading-[28px] xl:leading-[120%] lg:max-w-6xl">
                      From sustainability leadership to world-class park design,
                      Horizon Industrial Parks has been recognised by leading
                      forums, for raising the bar.
                    </p>
                    <div className="flex lg:justify-end">
                      <div className="w-fit mt-0">
                        <TabList
                          onChange={handleChange}
                          aria-label="awards year tabs"
                          className="border border-[#CDCDCD] rounded-[20px]"
                        >
                          {years.map((year) => (
                            <Tab
                              key={year}
                              value={year.toString()}
                              label={
                                <div className="flex items-center gap-1">
                                  <span>{year}</span>
                                  {value.toString() === year.toString() && (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="30"
                                      height="30"
                                      viewBox="0 0 39 40"
                                      fill="none"
                                    >
                                      <path
                                        d="M8.125 31.3745L30.875 8.62451"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.125 8.62451H30.875V31.3745"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </div>
                              }
                              sx={{
                                height: { xs: "60px", lg: "80px", xl: "100px" },
                                width: { xs: "50%", lg: "130px", xl: "165px" },
                                color: "#000",
                                fontFamily: "Barlow",
                                fontSize: {
                                  xs: "19px",
                                  md: "21px",
                                  lg: "23px",
                                },
                                fontWeight: "400",
                                textTransform: "none",

                                "&.Mui-selected": {
                                  background:
                                    "linear-gradient(131deg, #AC38D9 24.37%, #f47920 80.46%)",
                                  color: "#fff",
                                  border: "none",
                                },
                              }}
                            />
                          ))}
                        </TabList>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Panels --- */}
              {years.map((year) => (
                <TabPanel
                  key={year}
                  value={year.toString()}
                  sx={{
                    float: "left",
                    paddingTop: "70px",
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "100%",
                  }}
                >
                  <AwardSlider awards={awards.filter((a) => a.year === year)} />
                </TabPanel>
              ))}
            </TabContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
