import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Img from "./Images/FlipkartSlide.webp";
import Img1 from "./Images/FlipkartSlide1.webp";
import Img2 from "./Images/FlipkartSlide2.webp";
import Img3 from "./Images/FlipkartSlide3.webp";
import Img4 from "./Images/FlipkartSlide4.webp";
import Img5 from "./Images/FlipkartSlide5.webp";
import Img6 from "./Images/FlipkartSlide6.webp";
import Img7 from "./Images/FlipkartSlide8.webp";

const FlipkartSlider = () => {
  const Slider = [Img, Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  return (
    <div className="relative">
      <Swiper
        modules={[ Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="p-4"
      >
        {Slider.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={`Slide ${index}`} className="w-full h-full rounded-xl md:rounded-none border border-black" />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons - Only visible on md and above */}
        <div className="hidden md:block">
        <div className="swiper-button-prev hidden md:block !text-black !z-10"></div>
        <div className="swiper-button-next hidden md:block !text-black !z-10"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default FlipkartSlider;
