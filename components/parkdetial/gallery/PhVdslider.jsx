"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Heading from "./Heading";
import Modal from "./Modal";

const PhVdslider = ({ pht, vid, splan }) => {
  const [offsetAfter, setOffsetAfter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const swiperRefImg = useRef(null);
  const swiperRefVid = useRef(null);

  // Tabs (dynamic)
  const showPhotos = pht && pht.length > 0;
  const showRenders = splan && splan.length > 0;
  const showVids = vid && vid.length > 0;

  const getInitialTab = () => {
    if (showPhotos) return "Photos";
    if (showRenders) return "Site Plan";
    if (showVids) return "Videos";
    return "Photos";
  };

  const [acbtn, setAcBtn] = useState(getInitialTab);

  // Resize handler
  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;

      if (vw >= 1366) {
        const halfExtra = (vw - 1340) / 2;
        setOffsetAfter(Math.max(0, halfExtra));
      } else if (vw >= 640) {
        setOffsetAfter(vw * 0.05); // 5% of viewport width
      } else {
        setOffsetAfter(0); // No offset on small mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Force Swiper update on tab switch
  useEffect(() => {
    setTimeout(() => {
      if (
        (acbtn === "Photos" || acbtn === "Site Plan") &&
        swiperRefImg.current
      ) {
        swiperRefImg.current.update();
      } else if (acbtn === "Videos" && swiperRefVid.current) {
        swiperRefVid.current.update();
      }
    }, 200);
  }, [acbtn]);

  // Determine active content
  const getActiveImages = () =>
    acbtn === "Photos" ? pht : acbtn === "Site Plan" ? splan : [];
  const activeImages = getActiveImages();

  const hasMultipleImages = activeImages.length > 1;
  const hasMultipleVideos = vid.length > 1;

  // Swiper config
  const swiperConfig = (navigationSelector) => ({
    modules: [Navigation, FreeMode],
    spaceBetween: 20,
    speed: 500,
    slidesOffsetAfter: offsetAfter,
    allowTouchMove: false,
    preventInteractionOnTransition: true,
    navigation: navigationSelector
      ? {
          prevEl: `${navigationSelector}-prev`,
          nextEl: `${navigationSelector}-next`,
        }
      : false,
    breakpoints: {
      320: { slidesPerView: 1 },
      767: { slidesPerView: 1.05 },
      1023: { slidesPerView: 1.3 },
      1280: { slidesPerView: 2.01 },
      1366: { slidesPerView: 2.2 },
    },
  });
  return (
    <div className="lg:py-[100px] bg-[url(/parkdetail/pgbg.jpg)] bg-cover bg-no-repeat py-10 overflow-hidden w-full">
      <div className="fix">
        <Heading
          showPhotos={showPhotos}
          showRenders={showRenders}
          showVids={showVids}
          acbtn={acbtn}
          setAcBtn={setAcBtn}
        />
      </div>

      <div className="ml-[max(5%,calc((100vw-1340px)/2))] sm:mr-0 mr-[5%] min-h-fit h-fit sm:min-h-[420px]">
        <AnimatePresence mode="wait">
          {/* Images: Photos & Site Plan */}
          {(acbtn === "Photos" || acbtn === "Site Plan") && (
            <motion.div
              key={`images-slider-${acbtn}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Swiper
                {...swiperConfig(".swiper-img")}
                onSwiper={(s) => (swiperRefImg.current = s)}
              >
                {activeImages.map((img, index) => (
                  <SwiperSlide key={index} className="relative">
                    <motion.img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full object-cover select-none h-[250px] sm:h-[380px] max-w-[100%]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                    <img
                      src="/parkdetail/expand.svg"
                      alt="Expand"
                      className="absolute top-0 right-0 h-12 w-12 cursor-pointer md:flex hidden"
                      onClick={() => {
                        setModalContent(
                          <img
                            src={img}
                            alt="Expanded"
                            className="w-full h-[80vh] object-cover"
                          />
                        );
                        setIsModalOpen(true);
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Always reserve space */}
              <div className="flex items-start md:justify-start justify-end mt-5 lg:mt-10 w-full gap-4 h-10 lg:h-20">
                {hasMultipleImages && (
                  <>
                    <button className="cursor-pointer swiper-img-prev lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50">
                      <img src="/parkdetail/lar.svg" alt="ArrowLeft" />
                    </button>
                    <button className="cursor-pointer swiper-img-next lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50">
                      <img src="/parkdetail/rar.svg" alt="ArrowRight" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* Videos */}
          {acbtn === "Videos" && (
            <motion.div
              key="videos-slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Swiper
                {...swiperConfig(".swiper-vid")}
                onSwiper={(s) => (swiperRefVid.current = s)}
              >
                {vid.map((videl, index) => (
                  <SwiperSlide key={index} className="relative">
                    <div className="w-full select-none h-[250px] sm:h-[380px] max-w-[100%]">
                      <iframe
                        loading="lazy"
                        src={videl}
                        width="1192"
                        height="400"
                        frameBorder="0"
                        allow="autoplay"
                        className="w-full object-cover h-full"
                      />
                    </div>
                    <img
                      src="/parkdetail/expand.svg"
                      alt="Expand"
                      className="absolute top-0 right-0 h-12 w-12 md:flex hidden cursor-pointer"
                      onClick={() => {
                        setModalContent(
                          <iframe
                            src={videl}
                            width="1000"
                            height="600"
                            frameBorder="0"
                            allow="autoplay"
                            className="w-full h-[80vh]"
                          />
                        );
                        setIsModalOpen(true);
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Always reserve space */}
              <div className="flex items-start md:justify-start justify-end mt-5 lg:mt-10 w-full gap-4 h-10 lg:h-20">
                {hasMultipleVideos && (
                  <>
                    <button className="cursor-pointer swiper-vid-prev lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50">
                      <img src="/parkdetail/lar.svg" alt="ArrowLeft" />
                    </button>
                    <button className="cursor-pointer swiper-vid-next h-20 w-20 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50">
                      <img src="/parkdetail/rar.svg" alt="ArrowRight" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default PhVdslider;
