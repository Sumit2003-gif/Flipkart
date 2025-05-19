import React, { useState } from "react";
import BecomeSeller from "./Images/Becomesellernav.svg";
import { Swiper,SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import SellerOnline from "./Images/Seller_Online.webp";
import Img from "./Images/Seller1.svg";
import Img2 from "./Images/Seller2.svg";
import Img1 from "./Images/Seller3.svg";
import Img3 from "./Images/Seller4.svg";
import Img4 from "./Images/Seller5.svg";
import Img5 from "./Images/Raju_yellow.webp"
import Img6 from "./Images/Dinesh_yellow.webp"
import Img7 from "./Images/Vinay_Garg_yellow.webp"
const FlipkartBecome = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const Nav = [
    { icon: <img src={BecomeSeller} alt="Become Seller" />, text: "" },
    { text: "Sell Online" },
    { text: "Fees and Commission" },
    { text: "Grow" },
    { text: "Learn" },
    { text: "Shopsy" },
  ];

  const Dropdowns = {
    1: [
      "Create Account",
      "List Products",
      "Storage & Shipping",
      "Receive Payments",
      "Grow Faster",
      "Seller App",
      "Help & Support",
    ],
    2: ["Payment Cycle", "Fee Type", "Calculate Gross Margin"],
    3: [
      "FAssured badge",
      "Insights & Tools",
      "Flipkart Ads",
      "Flipkart Value Services",
      "Shopping Festival",
      "Service Partner",
    ],
    4: ["FAQs", "Seller Success Stories", "Seller Blogs"],

  };
  const SellerNav = [
    { icon: <img src={Img}></img>, text: "45 crore+ Flipkart customers" },
    { icon: <img src={Img1}></img>, text: "7* days secure & regular payments" },
    { icon: <img src={Img2}></img>, text: "Low cost of doing business" },
    { icon: <img src={Img3}></img>, text: "One click seller Support" },
    {
      icon: <img src={Img4}></img>,
      text: "Access to the Big billion Days & more",
    },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const SellerStory = [
    {url:Img5,head:"Raju Lunawath Amazestore",text:"Starting with just one category, their unwavering support and innovative platform empowered me to grow exponentially, expanding to six diverse categories and achieving an astounding 5x growth year on year."},
    {url:Img6,head: "Dinesh Kumar Rajpurohit, Kemei",text:"On Flipkart, your listings are live in less than 2 hours and you can start selling anywhere in India. I started my business with 3 products, and today I own 3 brands and have also created employment opportunities for my family and team of 25."},
    {url:Img7,head : "Vinay Garg, Activa & Digi Smart",text:"When moving from offline to online business, our aim was to sell 300 orders per month. Today, we sell more than 700 orders per day and this has been possible because of the growth features on the Flipkart seller dashboard, Flipkart Ads and regular payments."}
  ]
const SellerStories = ({ url, text, head }) => {
  return (
    <div className="flex bg-blue-300 bg-opacity-20 flex-col md:flex-row items-center gap-20 px-20 md:items-start border border-gray-200 shadow-md rounded-xl p-6 mx-4">
      {/* Image */}
      <div className="shrink-0">
        <img
          src={url}
          alt={head}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-yellow-400"
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left max-w-2xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{head}</h2>
        <p className="text-sm  md:text-base  text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

  return (
    <div className="px-4 md:px-10 py-4">
      {/* Top Banner */}
      <div className="pl-2 mb-4 text-sm text-gray-600">
        <p>
          Existing Seller? Explore our product recommendations with Dhamaka
          Selection
        </p>
      </div>

      {/* Navigation */}
      <div className="flex sticky top-0 left-0 bg-white shadow-lg shadow-b-lg border-b-black border-opacity-25 z-50 flex-col md:flex-row md:justify-between items-start md:items-center">
        {/* Nav Items */}
        <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-4 md:gap-10">
          {Nav.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start md:items-center p-2 group cursor-pointer w-full md:w-auto"
              onClick={() => toggleDropdown(index)}
              onMouseEnter={() =>
                window.innerWidth >= 768 && setActiveDropdown(index)
              }
              onMouseLeave={() =>
                window.innerWidth >= 768 && setActiveDropdown(null)
              }
            >
              {/* Icon and Text */}
              <div className="flex items-center">
                {item.icon}
                <p className="ml-1 group-hover:text-blue-400 text-sm md:text-base">
                  {item.text}
                </p>

                {/* Arrow */}
                <div
                  className={`size-2 ml-1 border-r-black border-b-black rotate-45 transition-all duration-300 border-r-[1px] border-b-[1px] ${
                    [0, 5].includes(index)
                      ? "hidden"
                      : "group-hover:-rotate-[135deg]"
                  }`}
                />
              </div>

              {/* Dropdown */}
              {Dropdowns[index] && activeDropdown === index && (
                <div className="mt-2 md:absolute md:top-8 bg-white border border-gray-300 px-3 py-2 rounded shadow-md z-10 w-48">
                  {Dropdowns[index].map((dropItem, dropIndex) => (
                    <div
                      key={dropIndex}
                      className="hover:bg-gray-100 py-1 px-2 rounded cursor-pointer text-sm"
                    >
                      {dropItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-start md:justify-end border mt-4 md:mt-0 px-3 py-2 w-full md:w-1/4 gap-2 md:gap-4">
          <button className="text-sm" onClick={() => setShowModal(true)}>
            Login
          </button>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-lg p-6  w-[400px]  relative">
                <button
                  className="absolute top3 right-3 text-xl fontt-bold text-gray-600 hover:text-red-600"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
                <div className="border border-black m-4 justify-center items-center grid p-1">
                  <h2 className="text-xl text-center font-semibold mb-4">
                    Login
                  </h2>
                  <input
                    type="text "
                    placeholder="Username or phone number or email"
                    className="w-full p-2  border rounded mb-4 outline-none"
                  ></input>
                  <button className="w-full bg-blue-500 text-white py-2 rounded cursor-not-allowed">
                    Next
                  </button>
                  <p className="text-center py-4">Don't have an account?{""}</p>
                  <button className="border border-gray-200 px-5 py-2 rounded-xl bg-black bg-opacity-10 ">
                    <a href="#" className="text-blue-600 font-medium">
                      Register for new account
                    </a>
                  </button>
                  <p className="text-xs py-3 pt-8">
                    By continuing, you agree to Flipkart’s Terms of Use &
                    Privacy Policy Site protected by reCAPTCHA & Google Privacy
                    Policy . Terms apply
                  </p>
                </div>
              </div>
            </div>
          )}
          <button className="border px-4 md:px-7 bg-yellow-400 text-black font-bold py-2 text-sm rounded">
            Start Selling
          </button>
        </div>
      </div>
      <div className="mt-4 space-x-4">
        <Link to="/BecomeSeller" className="text-blue-600 underline">
          Home
        </Link>
        <Link to="/seller" className="text-blue-600 underline">
          Seller
        </Link>
      </div>
      <div className="relative">
        <p className="absolute top-[30%] left-10 font-bold text-4xl">
          Sell Online with Flipkart
        </p>
        <img src={SellerOnline}></img>
      </div>
      <div className="flex  justify-center items-center py-4 divide-x divide-gray-200">
        {SellerNav.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6 py-2 hover:text-blue-600 cursor-pointer transition-all"
          >
            <div className="w-16 h-16 mb-2 grid place-content-center border rounded-full">
              {item.icon}
            </div>
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
      <>
      <div className="text-5xl font-semibold p-4 py-[5%]"><span className="text-blue-500  font-semibold ">Seller Success</span> Stories</div>
      <div>
        <Swiper
        modules={[Navigation,Pagination ,Autoplay]}
        navigation={true}
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        slidesPerView={1}
         pagination={{ clickable: true }}
         loop={false}>
          {
            SellerStory.map((item,index)=>(
              <SwiperSlide key={index} >
                <SellerStories url={item.url} head={item.head} text={item.text}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      </>
    </div>
  );
};

export default FlipkartBecome;
