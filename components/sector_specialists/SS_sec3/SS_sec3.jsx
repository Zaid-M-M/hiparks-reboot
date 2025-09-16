"use client";
import React from "react";
import Btn from "@/components/global/Btn";
import { motion } from "framer-motion";


const caseStudyBtn = (
  <a
    href="#"
    className="bw-sb uppercase border-1 text-[#fff] bg-[#000] border-[#000] 
    text-[13px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-[26px] 
    py-[6px] px-[13px] md:py-[7px] md:px-[15px] lg:py-[8px] lg:px-[20px]  
    xl:py-[15px] xl:px-[30px] flex gap-[10px] items-center"
  >
    Case study
    <img
      className="w-[23px] md:w-[24px] lg:w-[30px]"
      src="/btn_whit_arrow.svg"
      alt="arrow"
    />
  </a>
);

const exp_data = [
  {
    title: "Automotive and Auto Components",
    paragraph:
      "From complex assembly lines to specialised dispatch bays, our spaces are designed to meet the needs of high-load operations and fast-moving production cycles. Think high floor-loads, wide column spans, and the flexibility to evolve with your product lines.",
    image: "/sector_specialist/automotive.jpg",
    case_study: caseStudyBtn
  },
  {
    title: "Engineering and Aerospace",
    paragraph:
      "We deliver tightly specified facilities where accuracy, safety, and workflow efficiency matter most. With clear zoning, secure enclosures, and compliance-first design, your teams can work smarter and safer.",
    image: "/sector_specialist/aerospace.jpg",
    case_study: caseStudyBtn
  },
  {
    title: "Logistics and Supply Chain",
    paragraph:
      "Our parks are designed to keep goods moving as fast as their demand calls for. With wide roads, generous turning radius, and scalable layouts, we help you adapt to changing volumes and faster turnarounds.",
    image: "/sector_specialist/logistics.jpg",
    case_study: caseStudyBtn
  },
  {
    title: "Packaging",
    paragraph:
      "With safe ventilation, efficient racking layouts, and options for phase-wise expansion, our parks support the evolving needs of packaging units—today and tomorrow.",
    image: "/sector_specialist/packaging.jpg",
    case_study: caseStudyBtn
  },
  {
    title: "Chemicals",
    paragraph:
      "From fire-rated zones to proper drainage, our parks meet the stringent needs of the chemical industry. Segregated units, ventilation, and emergency-ready design help you maintain operations with peace of mind.",
    image: "/sector_specialist/chemical.jpg",
    case_study: caseStudyBtn
  },
  {
    title: "Energy",
    paragraph:
      "We understand the complexities of handling large-scale equipment and sensitive setups. Our infrastructure supports structured zoning, clear logistics pathways, and resilient builds to suit energy sector operations.",
    image: "/sector_specialist/renewable.jpg",
  },
  {
    title: "Ecommerce",
    paragraph:
      "Stay ahead of every sale, spike, or seasonal surge. Our Grade A facilities are primed for fulfilment, with fast access, modular storage, and last-mile reach—so you deliver faster and more efficiently, every time.",
    image: "/sector_specialist/ecom.jpg",
  },
  {
    title: "FMCG and Retail",
    paragraph:
      "In industries where time and temperature are critical, we deliver climate-consistent, high-throughput environments that support seamless inventory flow, produce longevity, and rapid dispatch.",
    image: "/sector_specialist/retail.jpg",
  },
];

const SS_sec3 = () => {
  return (
    <div className=" bg-[#F5F5F5] relative overflow-hidden">

      <img className="purple_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[0px] md:left-[auto]  md:right-[0px] left-[-80px] md:top-[0px] lg:top-[0px] xl:left-[-150px] 1920:left-[100px]" src='/purple_vector.svg' />
      <img className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[50px]  md:left-[auto] md:right-[0px] left-[0px] md:top-[-80px] lg:top-[-80px] xl:left-[100px] 1920:left-[300px]" src='/orange_vector.svg' />

      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt-[80px] lg:pt-[100px]  pb-[30px] md:pb[55px] 1440:pb-[70px]  1280:pb-[0px]">
        <div className="flex flex-col items-star w-fit relative">
          <h1 className="sec_hd bw-r">
            Our Experience
          </h1>
          <div className="flex gap-[10px] md:gap-[17px]">
            <h1 className="sec_hd bw-r">
              <span className="bw-m">In Action</span>
            </h1>
            <img
              src="/abstract_pattern.svg"
              className="abstract_svg"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between mt-[15px] md:mt-[40px] lg:mt-[48px] gap-[24px] ">
          {exp_data.map((exp_data, index) => (
            <div className="group flex md:flex-row flex-col md:gap-[25px] xl:gap-[50px] lg:gap-[30px] gap-[25px] px-[20px] py-[35px] md:py-[30px] md:px-[30px] bg-[#fff] relative">
              <img
                className="absolute top-[0] right-[0] transition duration-300 [filter:brightness(0)_saturate(100%)_invert(93%)_sepia(7%)_saturate(241%)_hue-rotate(17deg)_brightness(95%)_contrast(87%)] group-hover:filter-none w-[30px] md:w-[auto]"
                src="/sector_specialist/green_arrow.svg"
                alt="arrow"
              />
              <div className="md:w-[550px] lg:w-[550px]">
                <img
                  className="w-[100%]  md:h-[100%] xl:h-[auto] object-cover"
                  src={exp_data.image}
                ></img>
              </div>

              <div className="md:w-[680px] lg:w-[680px] flex items-center">
                <div>
                  <h3 className="bw-m text-[23px] leading-[26px] mb-[10px] xl:text-[32px] lg:text-[27px] lg:leading-[30px] lg:mb-[10px] xl:mb-[22px]">
                    {exp_data.title}
                  </h3>
                  <p className="bw-r lg:text-[18px] lg:leading-[26px] xl:text-[20px] xl:leading-[30px]">
                    {exp_data.paragraph}
                  </p>

                  <div className="flex flex-row md:gap-[24px] gap-[15px] mt-[24px]">
                    <a
                      href="#"
                      className="bw-sb uppercase border-1 border-[#000] text-[13px] md:text-[15px]  lg:text-[15px] xl:text-[16px] leading-[26px] py-[6px] px-[13px] md:py-[7px] md:px-[15px] lg:py-[8px] lg:px-[20px] xl:py-[15px] xl:px-[25px] flex gap-[10px] items-center"
                    >

                      View More
                      <img
                        className="w-[23px] md:w-[24px] lg:w-25px] invert"
                        src="/btn_whit_arrow.svg"
                        alt="arrow"
                      />
                    </a>
                    {exp_data.case_study && exp_data.case_study}
                    {/* <a
                      href="#"
                      className="bw-sb uppercase border-1 text-[#fff] bg-[#000] border-[#000] text-[13px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-[26px] py-[6px] px-[13px] md:py-[7px] md:px-[20px]  lg:py-[8px] lg:px-[20px]  xl:py-[15px] xl:px-[30px] flex gap-[10px] items-center"
                    >
                      Case study
                      <img
                        className="w-[23px] md:w-[24px] lg:w-[30px]"
                        src="/btn_whit_arrow.svg"
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SS_sec3;
