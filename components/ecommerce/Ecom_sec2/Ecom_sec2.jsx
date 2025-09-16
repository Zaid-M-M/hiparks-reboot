"use client";
import React from "react";


const Ecom_sec2 = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[45px] md:pb[55px] xl:pb-[100px]">

        <img className="purple_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[0px] lg:left-[-30px] md:w-[350px] w-[300px]" src='/purple_vector.svg' />
        <img className="orange_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[-100px] lg:left-[200px] md:w-[350px] w-[300px]" src='/orange_vector.svg' />


        <div className="flex flex-col justify-between mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
            <div className="flex items-left flex-col md:items-left relative  md:w-[460px] lg:w-[auto]">


              <h1 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[43px] md:leading-[55px] xl:text-[52px] 1440:text-[56px] xl:leading-[62px] 1440:leading-[66px] lg:tracking-[-2.64px] bw-r md:w-[460px] lg:w-[auto] capitalize">
                Today’s E-Commerce Ecosystem Moves Fast<br></br>
              </h1>
              <div className="flex gap-[10px] md:gap-[17px]  md:flex-row flex-col">
                <h1 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[43px] md:leading-[55px] xl:text-[52px] 1440:text-[56px] xl:leading-[62px] 1440:leading-[66px] lg:tracking-[-2.64px] bw-r lg:w-[auto] capitalize">
                  <span className="bw-m">And So Do We</span>
                </h1>

                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg md:mt-[10px]"
                />
              </div>
            </div>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[15px]">At Horizon, we understand that behind every “Buy Now” is a complex network of storage, picking, packing, and delivery. That’s why we build fulfilment-ready spaces that help you move goods faster, smarter, and more cost-effectively.</p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">Whether you're setting up a mother hub, expanding to a regional warehouse, or planning micro-fulfilment centres and in-city warehouses for last-mile speed, we partner with you from day one to deliver logistics-optimised layouts, fast-tracked handovers, and built-in flexibility to keep up with customer expectations.</p>
          </div>
        </div>
      </div>
      {/* <img className="purple_vctr absolute top-auto bottom-[200px] right-0 " src='/green_vector.svg' />
            <img className="green_vctr absolute top-auto bottom-[-80px] right-0" src='/orange_vector.svg' /> */}
    </div>
  );
};

export default Ecom_sec2;
