import React from 'react';
import Img from "./Images/Electronic.png";
import Img1 from "./Images/Electronic1.png";
import Img2 from "./Images/Electronic2.png";
import Img3 from "./Images/Electronic3.png";
import Img4 from "./Images/Electronic4.png";
import Img5 from "./Images/Electronic5.png";
import Img6 from "./Images/Electronic6.png";
import Img7 from "./Images/Electronic7.png";
import Adds from "./Images/Adds.webp";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const FlipkartElectronics = () => {
  const electronics = [
    { img: Img, htext: "Best Truewireless Headphones", ptext: "Grab Now" },
    { img: Img1, htext: "Best of Shavers", ptext: "From ₹1,649" },
    { img: Img2, htext: "Noise Smartwatches", ptext: "From ₹1,099" },
    { img: Img3, htext: "ViewSonic Monitors", ptext: "From ₹8,000" },
    { img: Img4, htext: "Top Mirrorless Cameras", ptext: "Shop Now" },
    { img: Img5, htext: "Projector", ptext: "From ₹6,990" },
    { img: Img6, htext: "Printers", ptext: "From ₹3,999" },
    { img: Img7, htext: "Monitors", ptext: "From ₹6,599" },
  ];

  return (
    <div className='bg-slate-100 p-4 mt-4'>
      <h2 className="text-2xl font-bold pl-4 mb-4">Best of Electronics</h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Swiper Carousel */}
        <div className="md:w-5/6 w-full p-4">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={10}
            slidesPerView={5}
            slidesPerGroup={3}
            // loop={true}
            
          >
            {electronics.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col  items-center text-center p-2 border rounded-md bg-white shadow-sm h-72 pt-5">
                  <img
                    src={item.img}
                    alt={item.htext}
                    className="w-full h-40 object-contain mb-2"
                  />
                  <p className="text-sm font-medium mt-4">{item.htext}</p>
                  <h1 className="text-blue-600 text-md font-semibold">{item.ptext}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Advertisement Banner */}
        <div className="md:w-1/6 w-full flex justify-center items-center bg-white p-2 rounded-md shadow-sm">
          <img src={Adds} alt="Ad Banner" className="w-48 h-64 object-contain" />
        </div>
      </div>

      {/* Make Swiper arrows visible */}
      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: black;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default FlipkartElectronics;
