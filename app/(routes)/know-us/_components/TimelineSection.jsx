// "use client";
// import { useState, useRef, useEffect } from "react";
// import TimelineTabs from "./TimelineTabs";
// import TimelineMasonry from "./TimelineMasonry";

// const timelineData = {
//   2022: [
//     {
//       id: 1,
//       text: "Expanded presence in Pune (Chakan MIDC) with 2nd greenfield development site.",
//     },
//     {
//       id: 2,
//       text: "Acquired 1st development site in MMR.",
//       icon: "/icons/tree.svg",
//     },
//     {
//       id: 3,
//       text: "Expanded presence in Pune again.",
//       image: "/images/site1.jpg",
//     },
//   ],
//   2023: [
//     {
//       id: 4,
//       text: "Set up 1st BTS for a defence components manufacturer in Hosur region.",
//     },
//     {
//       id: 5,
//       text: "Set up 1st BTS for cold chain facility in Hosur region.",
//       image: "/images/site2.jpg",
//     },
//   ],
//   2024: [
//     {
//       id: 6,
//       text: "Enabled remote monitoring and real-time access to operations.",
//       icon: "/icons/monitor.svg",
//     },
//   ],
//   2025: [
//     {
//       id: 7,
//       text: "Acquired 1st development site in MMR.",
//       icon: "/icons/tree.svg",
//     },
//   ],
// };

// export default function TimelineSection() {
//   const years = Object.keys(timelineData);
//   const [activeYear, setActiveYear] = useState(years[0]);

//   return (
//     <section className="px-6 py-12 text-white bg-black">
//       {/* Heading */}

//       {/* Tabs */}
//       <TimelineTabs
//         years={years}
//         activeYear={activeYear}
//         setActiveYear={setActiveYear}
//       />

//       {/* Masonry Grid */}
//       <TimelineMasonry events={timelineData[activeYear]} />
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import VerticalTabs from "./VerticalTab";
import TimelineTabs from "./TimelineTabs";
import TimelineContent from "./TimelineContent";
import TimelineTabsMobile from "./TimelineTabsMobile";

// const timelineData = {
//   2022: [
//     {
//       id: 1,
//       text: "Expanded presence in Pune (Chakan MIDC) with 2nd greenfield development site.",
//     },
//     {
//       id: 2,
//       text: "Acquired 1st development site in MMR.",
//       icon: "/timeline/time3.svg",
//     },
//   ],
//   2023: [
//     {
//       id: 3,
//       text: "Set up 1st BTS for a defence components manufacturer in Hosur region.",
//     },
//     {
//       id: 4,
//       text: "Set up 1st BTS for cold chain facility in Hosur region.",
//       image: "/timeline/time1.png",
//     },
//   ],
//   2024: [
//     {
//       id: 5,
//       text: "Enabled remote monitoring and real-time access to operations.",
//       icon: "/timeline/time2.svg",
//     },
//   ],
//   2025: [
//     {
//       id: 6,
//       text: "Acquired 1st development site in MMR.",
//       icon: "/timeline/time3.svg",
//     },
//   ],
// };

// const timelineData = {
//   2022: [
//     {
//       id: 1,
//       text: "Platform launched with a portfolio of 6 MSFT in Chakan & Farukhnagar.",
//       image: "/timeline/time1.png",
//     },
//     {
//       id: 2,
//       text: " Announced ₹4,500 Cr investment to expand logistics facilities across India.",
//       icon: "/timeline/time3.svg",
//     },
//     {
//       id: 3,
//       text: "Acquired assets in Nagpur, NCR, Bangalore, and Hyderabad.",
//     },
//     {
//       id: 4,
//       text: "Portfolio grew to 16.3 MSFT spanning 10 assets in 5 markets.",
//       icon: "/timeline/time2.svg",
//     },
//     {
//       id: 5,
//       text: "Set up 1st BTS for a defence components manufacturer in Hosur region.",
//     },
//     {
//       id: 6,
//       text: "Set up 1st BTS for cold chain facility in Hosur region.",
//       image: "/timeline/time1.png",
//     },
//     {
//       id: 7,
//       text: "Enabled remote monitoring and real-time access to operations.",
//       icon: "/timeline/time2.svg",
//     },
//     {
//       id: 8,
//       text: "Set up 1st BTS for a defence components manufacturer in Hosur region.",
//     },
//     // {
//     //   id: 9,
//     //   text: "Set up 1st BTS for cold chain facility in Hosur region.",
//     //   image: "/timeline/time1.png",
//     // },
//     {
//       id: 9,
//       text: "Set up 1st BTS for a defence components manufacturer in Hosur region.",
//       icon: "/timeline/time2.svg",
//     },
//   ],
//   2023: [
//     {
//       id: 6,
//       text: " Acquired 2nd development site in Nagpur.",
//       image: "/timeline/time1.png",
//     },
//     {
//       id: 7,
//       text: "First tenant engagement activity, Cricket Dhamaka Season 1, successfully conducted at three parks.",
//       icon: "/timeline/time3.svg",
//     },
//     {
//       id: 8,
//       text: "Won our first award for ‘Fastest Growing Industrial Warehousing Developer in India’ at ELSC Awards.",
//     },
//     {
//       id: 9,
//       text: "Set up 1st BTS unit for an aseptic carton plant in Ahmedabad.",
//     },
//     {
//       id: 10,
//       text: "1st green-field acquisition in Chennai (Redhills) and brownfield acquisition in Goa (Verna).",
//     },
//     {
//       id: 11,
//       text: "Conducted our first GPW Employee survey.",
//     },
//     {
//       id: 12,
//       text: "Implemented ERP systems for core business functions: land, legal, projects, finance, and document management.",
//     },
//     {
//       id: 13,
//       text: "Introduced a Visitor Management System to streamline security.",
//     },
//     {
//       id: 14,
//       text: "Portfolio grew to 26.8 MSFT spanning 18 assets in 5 markets",
//     },
//   ],
//   2024: [
//     {
//       id: 8,
//       text: "Enabled AI-based monitoring across multiple facilities.",
//       icon: "/timeline/time2.svg",
//     },
//   ],
//   2025: [
//     {
//       id: 9,
//       text: "Launched new development site in Gujarat.",
//       image: "/timeline/time1.png",
//     },
//   ],
// };

const timelineData = {
  2022: [
    {
      id: 1,
      text: "Platform launched with a portfolio of 6 MSFT in Chakan & Farukhnagar.",
      image: "/timeline/2022/chakan.png",
    },
    {
      id: 2,
      text: " Announced ₹4,500 Cr investment to expand logistics facilities across India.",
      icon: "/timeline/2022/icon/investment.svg",
    },
    {
      id: 3,
      text: "Portfolio grew to 16.3 MSFT spanning 10 assets in 5 markets.",
      image: "/timeline/2022/farukhnagar.png",
    },
    // {
    //   id: 4,
    //   text: "Portfolio grew to 16.3 MSFT spanning 10 assets in 5 markets.",
    //   icon: "/timeline/time2.svg",
    // },
    // {
    //   id: 5,
    //   text: "Set up 1st BTS for a defence components manufacturer in Hosur region.",
    //   image: "/timeline/time1.png",
    // },
    // {
    //   id: 6,
    //   text: "Set up 1st BTS for cold chain facility in Hosur region.",
    //   // image: "/timeline/time1.png",
    // },
    // {
    //   id: 7,
    //   text: "Enabled remote monitoring and real-time access to operations.",
    //   icon: "/timeline/time2.svg",
    // },
    // {
    //   id: 8,
    //   text: "Set up 1st BTS for a defence components manufacturer in Hosur region.",
    // },
    // {
    //   id: 9,
    //   text: "Set up 1st BTS for a defence components manufacturer in Hosur region.",
    //   icon: "/timeline/time2.svg",
    // },
  ],
  2023: [
    {
      id: 1,
      text: "Acquired 2nd site in Nagpur.",
      image: "/timeline/2023/xsio.png",
    },
    {
      id: 2,
      text: "Won our first award for ‘Fastest Growing Industrial Warehousing Developer in India’ at ELSC Awards.",
      image: "/timeline/2023/elsc.png",
    },
    {
      id: 3,
      text: "Entered new markets – Chennai and Goa",
      icon: "/timeline/2023/icon/state.svg",
    },
    {
      id: 4,
      text: "Certified as Great Place To Work.",
      image: "/timeline/2023/gptw.png",
    },
    {
      id: 5,
      text: "Portfolio grew to 26.8 MSFT spanning 18 assets in 5 markets",
      image: "/timeline/2023/icongraph.png",
    },
    // {
    //   id: 11,
    //   text: "Conducted our first GPW Employee survey.",
    // },
    // {
    //   id: 12,
    //   text: "Implemented ERP systems for core business functions: land, legal, projects, finance, and document management.",
    // },
    // {
    //   id: 13,
    //   text: "Introduced a Visitor Management System to streamline security.",
    // },
    // {
    //   id: 14,
    //   text: "Portfolio grew to 26.8 MSFT spanning 18 assets in 5 markets",
    // },
  ],
  2024: [
    {
      id: 1,
      text: "Expanded presence in Pune with new greenfield development in Chakan MIDC.",
      image: "/timeline/2024/cgbi.png",
    },
    {
      id: 2,
      text: "Deployed IoT sensors and smart meters for predictive maintenance and better operational oversight.",
      image: "/timeline/2024/smi.png",
    },
    {
      id: 3,
      text: "Delivered 1st BTS cold chain facility in Shoolagiri.",
      icon: "/timeline/2024/icon/cci.svg",
    },
    {
      id: 4,
      text: "1st operational park IGBC Platinum Certified - Bilaspur.",
      image: "/timeline/2024/icon/igbc.png",
    },
    {
      id: 5,
      text: "Partnered with CWC for the largest portfolio of 13 last-mile logistics assets in India.",
      icon: "/timeline/2024/icon/lastmile.svg",
      // image: "/timeline/2024/skillcenter.png",
    },
    {
      id: 6,
      text: "Expanded presence in NCR and Chennai with 4 parks.",
      image: "/timeline/2024/icon/4park.svg",
    },
    {
      id: 7,
      text: "Portfolio grew to 34.5 MSFT spanning 33 assets in 8 markets.",
      image: "/timeline/2024/portfolio.jpg",
    },
  ],
  2025: [
    {
      id: 1,
      text: "Secured LEED Platinum certificate for our head office.",
      image: "/timeline/2025/icon/leed.jpg",
    },
    {
      id: 2,
      text: "XX operational parks IGBC Platinum certified- Certified by ISO (IMS and ISMS).",
      image: "/timeline/2025/icon/igbc.jpg",
    },
    {
      id: 3,
      text: "Certified by ISO (IMS and ISMS).",
      image: "/timeline/2025/icon/iso.jpg",
    },
    {
      id: 4,
      text: "Inaugurated our first skill development centre at Farukhnagar.",
      image: "/timeline/2025/icon/skills.png",
    },
    {
      id: 5,
      text: "Acquired 1st development site in Nashik.",
      image: "/timeline/2025/maharashtra.jpg",
    },
    {
      id: 6,
      text: "Launched EV charging stations and sports arenas at our parks.",
      image: "/timeline/2025/sport.png",
    },
    {
      id: 7,
      text: "Portfolio grew to 52.3 MSFT spanning 41 assets in 9 markets.",
      icon: "/timeline/time3.svg",
    },
  ],
};

// const timelineData = {
//   2022: [
//     {
//       id: 1,
//       text: "Expanded presence in Pune (Chakan MIDC) with 2nd greenfield development site.",
//       image: "/timeline/time1.png",
//     },
//     {
//       id: 2,
//       text: "Acquired 1st development site in MMR.",
//       icon: "/timeline/time3.svg",
//     },
//     {
//       id: 3,
//       text: "Set up 1st BTS for a defence components manufacturer in Hosur region.",
//       icon: "/timeline/time3.svg",
//     },
//     {
//       id: 4,
//       text: "Enabled remote monitoring and real-time access to operations.",
//       icon: "/timeline/time2.svg",
//     },
//     {
//       id: 5,
//       text: "Set up 1st BTS for cold chain facility in Hosur region.",
//       image: "/timeline/time1.png",
//     },
//     {
//       id: 6,
//       text: "Expanded presence in Pune (Chakan MIDC) with 2nd greenfield development site.",
//       image: "/timeline/time1.png",
//     },
//   ],
// };

// export default function TimelineSection() {
//   const years = Object.keys(timelineData);
//   const [activeYear, setActiveYear] = useState(years[0]);

//   return (
//     <section className="py-8 text-white bg-black">
//       <div className="flex gap-10 mx-auto  pt-[3%] ">
//         {/* LEFT: Vertical Tabs */}
//         <TimelineTabs
//           years={years}
//           activeYear={activeYear}
//           setActiveYear={setActiveYear}
//         />

//         {/* RIGHT: Timeline Masonry Content */}
//         <div className="flex-1 lenis-exclude">
//           <TimelineContent events={timelineData[activeYear]} />
//         </div>
//       </div>
//     </section>
//   );
// }

export default function TimelineSection() {
  const years = Object.keys(timelineData);
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <section className="py-[32px] sm:py-[70px] text-white bg-black">
      {/* Mobile layout */}
      <div className="flex flex-col h-[auto] md:h-[650px] md:hidden">
        <TimelineContent events={timelineData[activeYear]} />
        <TimelineTabsMobile
          years={years}
          activeYear={activeYear}
          setActiveYear={setActiveYear}
        />
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex gap-10 1280:gap-[70px]">
        <TimelineTabs
          years={years}
          activeYear={activeYear}
          setActiveYear={setActiveYear}
        />
        <div className="flex-1">
          <TimelineContent events={timelineData[activeYear]} />
        </div>
      </div>
    </section>
  );
}
