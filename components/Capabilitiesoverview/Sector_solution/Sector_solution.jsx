'use client';
import { useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Sector_solution() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'], // fade starts when section enters
  });

  return (
    <div className="bg-[#000000]">

      <div ref={sectionRef} className="fix sticky top-0 flex flex-col lg:flex-row justify-between pt-[45px] pb-[45px] xl:pt-[100px] xl:pb-[100px]">
        <ReactLenis root>
          <Sector_scroll progress={scrollYProgress} />
        </ReactLenis>
      </div>

    </div>
  );
}

function Sector_scroll({ progress }) {

  const paraRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paraRef,
    offset: ['start start', 'end end'], // animation happens when para enters/exits viewport
  });
  const para_scroll = useTransform(scrollYProgress, [0.8, 0.3], ['0px', '720px']);
  // Fade in text between 0% and 40% of section scroll
  // const para_scroll = useTransform(progress, [1, 0.9], ['720px', '0px']);

  return (
    <>
      {/* Left Text */}
      <div className="flex-1 " ref={paraRef}>

        <div className=' pt-[0px] pb-[10px] bg-[#000]'>

          <h1 className="sec_hd whitespace-nowrap overflow-visible lg:mb-[41px] mb-[20px]">
            <span className="bg-clip-text bw-m text-transparent bg-[linear-gradient(97deg,#AC38D9_13.98%,#F47922_67.51%)]">

              Sector Special
            </span>
            <br className="block" />
            <span className="bw-r text-[#fff]">Solutions</span>
            <img
              src="/txt_box_249.svg"
              className="mt-[-29px] w-[100px] 1280:w-[auto] xl:mt-[-60px] 1280:ml-[275px] ml-[140px] md:ml-[185px] md:mt-[-35px]"
            />
          </h1>

        </div>
        <div className='lg:w-[600px]'>
          <motion.div transition={{ duration: 0.8, ease: 'easeOut' }}>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[18px] text-[#E0E0E0]">
              Horizon’s facilities reflect our experience in serving diverse sectors and their unique business needs: 40% manufacturing including auto components, engineering, packaging, specialty chemicals, network technologies; 35% logistics and 3PL, and 25% across retail, FMCG, e-commerce, and emerging sectors.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[0px] text-[#E0E0E0]">
              From building a multi-level auto component plant in Maharashtra to fast-tracking a plug-and-play fulfillment center in NCR, or developing a factory for aerospace components in Telangana, we design with purpose—adapting layouts, specs, and timelines to your sector’s operational, safety, and compliance requirements.
            </p>

            {/* <a href="#" className="w-fit m-[auto] bw-sb uppercase border-1 tracking-[1.6px] text-[#fff] bg-[#000] border-[#fff] text-[13px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-[26px] py-[6px] px-[13px] md:py-[7px] md:px-[20px]  lg:py-[8px] lg:px-[20px]  xl:py-[15px] xl:px-[30px] flex gap-[10px] items-start justify-start">
              Sector Specialist
              <img className='w-[23px] md:w-[24px] lg:w-[25px] ' src='/btn_whit_arrow.svg' />
            </a> */}
            <div className="w-fit pt-[34px]">
              <a
                href="#"
                className="bw-sb uppercase border-1 tracking-[1.6px] text-[#fff] bg-[#000] border-[#fff] text-[13px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-[26px] py-[6px] px-[13px] md:py-[7px] md:px-[20px]  lg:py-[8px] lg:px-[20px]  xl:py-[15px] xl:px-[30px] flex gap-[10px] items-start justify-start"
              >
                Sector Specialist
                <img className='w-[23px] md:w-[24px] lg:w-[25px]' src='/btn_whit_arrow.svg' />
              </a>
            </div>
          </motion.div>
        </div>
      </div >

      {/* Right Image */}
      <div div className="flex-1 ml-auto xl:pt-[30px] pt-[30px] md:m-[auto]" >
        <img src="/Cap_Overview/sector_img.png" alt="Sector" className='ml-[auto] md:m-[auto] md:w-[80%] lg:w-[80%]' />
        {/* <a href="#" className="w-fit m-[auto] bw-sb uppercase border-1 tracking-[1.6px] text-[#fff] bg-[#000] border-[#fff] text-[13px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-[26px] py-[6px] px-[13px] md:py-[7px] md:px-[20px]  lg:py-[8px] lg:px-[20px]  xl:py-[15px] xl:px-[30px] flex gap-[10px] items-center">
          Sector Specialist
          <img className='w-[23px] md:w-[24px] lg:w-[25px] ' src='/btn_whit_arrow.svg' />
        </a> */}
      </div >
    </>
  );
}
