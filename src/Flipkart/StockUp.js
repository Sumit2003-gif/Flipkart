import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Images
import Stock from './Images/Stock.jpeg';
import Stock1 from './Images/Stock1.webp';
import Stock2 from './Images/Stock3.webp';
import Stock3 from './Images/Stock4.webp';
import Stock4 from './Images/Stock5.webp';
import Stock5 from './Images/Stock6.webp';
import Stock6 from './Images/Stock7.webp';

const StockUp = () => {
  const Stocked = [
    { img: Stock, text: "Double Bedsheets", htext: "From ₹599" },
    { img: Stock1, text: "Ergonomic Chairs", htext: "From ₹2,499" },
    { img: Stock2, text: "Beds", htext: "From ₹7,999" },
    { img: Stock3, text: "Wedding Jewellery", htext: "Under ₹299" },
    { img: Stock4, text: "Music Guitar", htext: "From ₹3,499" },
    { img: Stock5, text: "OnePlus Earbuds", htext: "₹1,299" },
    { img: Stock6, text: "Office Tables", htext: "From ₹4,999" },
  ];

  const SlideItem = ({ url, text, htext }) => (
    <div className="p-2 w-auto">
      <div className="aspect-[4/3] w-full overflow-hidden rounded">
        <img src={url} alt={`Image of ${text}`} className="w-full h-full object-cover" />
      </div>
      <p className="text-sm mt-1">{text}</p>
      <h1 className="text-xs font-semibold text-red-600">{htext}</h1>
    </div>
  );

  return (
    <div className="p-4  bg-white w-full  border-2 border-black rounded-lg">
      <h1 className="text-lg font-bold mb-4">Stock up on essentials!</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={2.2}
          
        allowTouchMove={true}
      >
        {Stocked.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideItem url={item.img} text={item.text} htext={item.htext} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StockUp;
