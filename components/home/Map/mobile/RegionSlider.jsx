import RegionCard from "./RegionCard";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

export const RegionSlider = ({ parks = [], regionName }) => {
  const swiperRef = useRef(null);

  // ✅ Reset slider to start when parks change
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [parks]);

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-2xl text-white bw-sb">{regionName} Parks</h3>

      <div className="relative">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".sbp",
            nextEl: ".sbn",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mb-[25px]"
        >
          {parks.map((park, idx) => (
            <SwiperSlide
              key={idx}
              style={idx === parks.length - 1 ? { paddingRight: "0px" } : {}}
            >
              <RegionCard park={park} />
            </SwiperSlide>
          ))}
          {/* Navigation buttons */}
          {/* <div className="sbp !text-black !left-0 map_slider_prev" />
          <div className="sbn !text-black !right-0 map_slider_next" /> */}
        </Swiper>

        {/* ✅ Arrow buttons with automatic Swiper behavior */}
        <div className="flex items-center justify-end pt-0 gap-2.5">
          <button className="sbp flex items-center border border-[#2E373A] p-3 justify-center transition-opacity duration-300 opacity-100 disabled:opacity-30 disabled:cursor-not-allowed">
            <ArrowLeft size={24} color="white" />
          </button>
          <button className="sbn flex items-center justify-center transition-opacity border border-[#2E373A] p-3 duration-300 opacity-100 disabled:opacity-30 disabled:cursor-not-allowed">
            <ArrowRight size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};
