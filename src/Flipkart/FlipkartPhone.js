import React from 'react';
import Img from "./Images/Phone1.jpeg";
import Img1 from "./Images/Phone2.jpeg";
import Img2 from "./Images/Phone3.jpeg";
import Img3 from "./Images/Phone4.jpeg";
import Img4 from "./Images/Phone5.jpeg";
import Img5 from "./Images/Phone6.jpeg";
import Img6 from "./Images/Phone7.jpeg";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const FlipkartPhone = () => {
  const electronics = [
    { img: Img, htext: "Samsung Galaxy S24", ptext: "From ₹44,999" },
    { img: Img1, htext: "Motarola G85 5G", ptext: "From ₹14,999" },
    { img: Img2, htext: "Apple iphone 13", ptext: "From ₹39,999" },
    { img: Img3, htext: "Vivo T4x 5G", ptext: "From ₹13,499" },
    { img: Img4, htext: "Samsung Galaxy S24", ptext: "From ₹34,999" },
    { img: Img5, htext: "Oppo K12x 5G", ptext: "From ₹10,999" },
    { img: Img6, htext: "Realme P3x %G", ptext: "From ₹11,999" },
  ];

  return (
    <div className='bg-slate-100 p-4 mt-4'>
      <h2 className="text-2xl font-bold pl-4 mb-4">Best Deals on SmartPhone</h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Swiper Carousel */}
        <div className=" w-full p-4">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={10}
            slidesPerView={6}
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

export default FlipkartPhone;
