"use client";
import React from "react";
import TabbedContentShowcase from "./TabbedContentShowcase/TabbedContentShowcase";
import BrandShowcase from "./Brands/BrandShowcase";
import TestimonialsSlider from "./ClientTestimonials/TestimonialsSlider";
import KeySectors from "./keySectors";
import IntegratedSolutionsSection from "./IntegratedSolutions/IntegratedSolutionsSection";
import MapWrapper from "./Map/MapWrapper";
import { ReactLenis, useLenis } from "lenis/react";
import HeroBannerClient from "./Hero/HeroBannerClient";
import MobileMapWrapper from "./Map/mobile/MobileMapWrapper";
import ScrollVideoSection from "./ScrollReveal/ScrollRevealSection";
import TestScroll from "./ScrollReveal/Testscroll";
import WhatNew from "./whatNew/page";
import Sustainaibility from "./Sustainaibility/Sustainaibility";
import ScrollSection from "./Sustainaibility/ScrollSection";
import Agile from "./Agile/page";
import MobileSustainaibility from "./Sustainaibility/mobile/MobileSustainaibility";
import MobileScrollSection from "./ScrollReveal/MobileScrollSection";
// import CardShowcase from "./Hero/CardShowcase";

const HomeWrapper = ({ heroData, testimonials = [] }) => {
  useLenis(() => { });

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        wheelMultiplier: 1.2,
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      <div className="w-full h-full bg-white">
        <HeroBannerClient heroData={heroData} />
        <Agile />
        <ScrollVideoSection
          videoSrc="/know-us/stats.mp4"
          timedTexts={[
            { start: 3, end: 8, title: "2000", subtitle: "Acres" },
            { start: 10, end: 13, title: "50 Million", subtitle: "Sq ft" },
            { start: 15, end: 17, title: "9", subtitle: "Markets" },
            { start: 18, end: 23, title: "40", subtitle: "Parks" },
          ]}
        />
        <MobileScrollSection
          videoSrc="/know-us/stats.mp4"
          timedTexts={[
            { start: 3, end: 8, title: "2000", subtitle: "Acres" },
            { start: 10, end: 13, title: "50 Million", subtitle: "Sq ft" },
            { start: 15, end: 17, title: "9", subtitle: "Markets" },
            { start: 18, end: 23, title: "40", subtitle: "Parks" },
          ]}
        />
        {/* <MapWrapper /> */}
        <IntegratedSolutionsSection />
        {/* <MobileMapWrapper /> */}
        <KeySectors />
        <TestimonialsSlider testimonials={testimonials} />

        <BrandShowcase />
        <div className="hidden sm:block">
          <ScrollSection videoSrc="/sustainaibility.mp4" />
        </div>
        <MobileSustainaibility />

        {/* <TestScroll
          videoSrc="/homescroll.mp4"
          timedTexts={[
            { start: 0.6, end: 1.8, title: "1800", subtitle: "ACRES" },
            { start: 2, end: 3.5, title: "44 MN", subtitle: "SQ FT" },
            { start: 4.2, end: 5.8, title: "37", subtitle: "PARKS" },
            { start: 7.2, end: 8.3, title: "10", subtitle: "MARKETS" },
          ]}
        /> */}
        {/* <TestScroll
          videoSrc="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
          timedTexts={[
            { start: 0, end: 3, title: "44 MN", subtitle: "SQ FT" },
            { start: 8, end: 12, title: "37", subtitle: "PARKS" },
            { start: 14, end: 18, title: "10", subtitle: "MARKETS" },
            { start: 18, end: 26, title: "44 MN", subtitle: "SQ FT" },
            { start: 27, end: 32, title: "37", subtitle: "PARKS" },
            { start: 33, end: 46, title: "10", subtitle: "MARKETS" },
          ]}
        /> */}
        {/* <CardShowcase /> */}

        <WhatNew />
        <TabbedContentShowcase />
      </div>
    </ReactLenis>
  );
};

export default HomeWrapper;
