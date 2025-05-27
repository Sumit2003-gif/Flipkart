import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {
  User,
  Search,
} from "lucide-react";
import {
  UserIcon,
  MapPinIcon,
  HeartIcon,
  ShoppingCartIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";

import FlipkartImage from "./Images/image.svg";
import Shoping_Cart from "./Images/Shoping_Cart.svg";
import Seller from "./Images/Seller_image.svg";
import Three_Dots from "./Images/Three_Dots.svg";
import Phone from "./Images/Phone.svg";
import Flipkart from "./Images/flipkartLogo.webp";
import Three_DotsN from "./Images/Three_DotsN.svg";
import Three_DotsN1 from "./Images/Three_DotsN1.svg";
import Three_DotsN2 from "./Images/Three_DotsN2.svg";
import Three_DotsN3 from "./Images/Three_DotsN3.svg";
import LoginHover from "./Images/Hovered.svg"
import LoginHover1 from "./Images/Hovered1.svg"
import LoginHover2 from "./Images/Hovered2.svg"
import LoginHover3 from "./Images/Hovered3.svg"
import LoginHover4 from "./Images/Hovered4.svg"
import LoginHover5 from "./Images/Hovered5.svg"
import { logout } from './Flipkart Redux/LoginReducer'
import { useSelector,useDispatch } from 'react-redux'

const FlipkartNavbar = () => {
  const navigate = useNavigate()
  const isLogin = useSelector((state) => state.Login.isLogin)
  const dispatch = useDispatch()
  const handleClickOutside = () => {
    dispatch(logout())
      // setHovered1(null); // Reset hover menu

    navigate("/")
  }
  
  
  const [open, setOpen] = useState(false);
  const [hoveredmenu,setHoveredmenu] = useState(null)
  const [hovered, setHovered] = useState(null);
  const [hovered1,setHovered1] = useState(null)
  const slideRef = useRef(null);
 
  const Point = [
    { icon: <img src={Phone} width={16} alt="Phone" /> },
    { icon: <User size={16} />, htext: "Login", path: "/login" },
    {
      icon: <img src={Shoping_Cart} alt="Cart" />,
      htext: "Cart",
      path: "/cart",
    },
    {
      icon: <img src={Seller} alt="Seller" />,
      htext: "Become a Seller",
      path: "/seller",
    },
    { icon: <img src={Three_Dots} alt="More" /> },
  ];

  const Slidebar = [
    { icon: <User />, htext: "SuperCoin Zone" },
    { icon: <User />, htext: "Flipkart Plus Zone" },
    { icon: <User />, htext: "All Categories" },
    { icon: <User />, htext: "More on Flipkart" },
    { icon: <User />, htext: "Choose Language" },
    { icon: <User />, htext: "Offer Zone" },
    { icon: <User />, htext: "Sell on Flipkart" },
    { icon: <User />, htext: "My Orders" },
    { icon: <TicketIcon className="w-6 h-5 text-gray-600" />, htext: "Coupons" },
    { icon: <ShoppingCartIcon className="w-6 h-5 text-gray-600" />, htext: "My Cart" },
    { icon: <HeartIcon className="w-6 h-5 text-gray-600" />, htext: "My Wishlist" },
    { icon: <User />, htext: "My Account" },
    { icon: <User />, htext: "My Notification" },
    { htext: "Notification Preference" },
    { htext: "Help Center" },
    { htext: "Legal" },
  ];

  const HoveredItems = [
    { icon: <img src={Three_DotsN} alt="Notifications" className="size-5" />, htext: "Notification Preference" },
    { icon: <img src={Three_DotsN1} alt="Support" className="size-5" />, htext: "24x7 Customer Care" },
    { icon: <img src={Three_DotsN3} alt="Advertise" className="size-5" />, htext: "Advertise" },
    { icon: <img src={Three_DotsN2} alt="App"  className="size-5"/>, htext: "Download App" },
  ];
  const LoginHovered = [
    {icon:<img src={LoginHover}/>, htext:"My Profile"},
    {icon:<img src={LoginHover1}/>, htext:"Flipkart Plus Zone"},
    {icon:<img src={LoginHover2}/>, htext:"Orders"},
    {icon:<img src={LoginHover3}/>, htext:"Wishlist"},
    {icon:<img src={LoginHover4}/>, htext:"Rewards"},
    {icon:<img src={LoginHover5}/>, htext:"Gift Cards"},

  ]
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (slideRef.current && !slideRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="grid p-2 relative">
      {/* Top Navbar */}
      <div className="flex md:justify-evenly justify-between items-center border md:border-slate-200 gap-3 w-full md:py-5">
        <Link to="/">
          <div className="flex justify-start items-center gap-0 w-full ">
            <button className="w-1/4 text-2xl md:hidden " onClick={() => setOpen(true)}>☰</button>
            <img src={FlipkartImage} className="w-1/2  object-contain md:w-full " alt="Flipkart Logo" />
          </div>
        </Link>

        {/* Search bar desktop */}
        <div className="w-2/5 border-2 border-blue-50 rounded-lg bg-blue-50 hidden md:flex">
          <span className="p-1"><Search size={30} strokeWidth={1} /></span>
          <input type="search" placeholder="Search for Products, Brands and More" className="w-full pl-2 py-2 bg-blue-50" />
        </div>

        {/* Action buttons */}
        <div className="flex md:justify-between md:w-1/3 justify-end gap-5 w-1/2 relative">
          {Point.map((item, index) => {
            const isHoverable = index === 4;
            const isHoverable1 = index === 1
            return (
              <div className="flex items-center justify-center" key={index}>
                <Link to={item.path || "#"}>
                  <div
                    className={`-ml-3 flex gap-1  items-center cursor-pointer
                    ${index === 0 ? "block md:hidden" : ""}
                    
                    ${index === 1 ? "group hover:bg-blue-600 hover:text-white p-[8px] rounded-lg" : ""}
                    ${index >= 3 ? "hidden md:flex  " : ""}
                     ${index === 4 ? "border border-slate-200 flex justify-center pl-1 bg-slate-100  " : ""}
                    `}
                    onMouseEnter={()=>{
                      if (isHoverable) {
                        setHovered(index)
                      }
                      if (isHoverable1) {
                        setHovered1(index)
                      }
                    }}
                    onMouseLeave={()=>{
                      if (isHoverable) {
                        setHovered(null)
                      }
                      if (isHoverable1) {
                        setHovered1(null)
                      }
                    }}
                    onClick={()=>{
                      if(index===1){
                        handleClickOutside()
                      }
                    }}
                  >
                  <div
                    className={`${
                      index === 1
                        ? " border-[1.5px] rounded-full border-black group-hover:border-white"
                        : ""
                    }
                  ${index >= 3 ? "hidden md:block" : ""}
                   `}
                  >
                    {item.icon}
                  </div>
                    <span className={`${index > 1 ? "hidden md:block" : ""}`}>
                        {index === 1 && isLogin ? "Logout" : item.htext}</span>
                    {index === 1 && (
                      <div className="size-2 border-b-[1.5px] border-r-[1.5px] rotate-45 border-black group-hover:border-white group-hover:rotate-[225deg] duration-300 hidden md:block"></div>
                    )}
                  </div>
                </Link>
               {
  hovered1 === 1 && (
    <div className="absolute top-9 left-0 mt-2  bg-white border rounded shadow-md z-50  pt-2 pl-[5px] w-64 pr-3"  
      onMouseEnter={() => setHovered1(1)}
      onMouseLeave={() => setHovered1(null)}
    >
      <div>
        <div className="flex p-2 justify-between mb-2 border-b-[3px] border-b-gray-100">
          <h1 className="text-[16px] font-semibold">New Customer?</h1>
          <Link to="/signup">
            <button className="text-blue-700 text-[16px] font-semibold">Sign Up</button>
          </Link>
        </div>
        {
          LoginHovered.map((item, index) => (
            <div
              key={index}
              className="flex p-1 pb-2 gap-3 pl-2 place-items-center items-center cursor-pointer hover:bg-gray-100 rounded"

              onClick={() => console.log(`Clicked on ${item.htext}`)}
            >
              {item.icon}
              <span>{item.htext}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
                {/* Hover Menu */}
                {hovered === 4 &&  (
                  <div className="absolute top-7 right-0 mt-2 bg-white border rounded shadow-md z-50 p-2 pt-2 pl-[5px] w-60 pr-3"
                 onMouseEnter={() => setHovered(4)}
      onMouseLeave={() => setHovered(null)}
                 >  
                    {HoveredItems.map((hoverItem, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 py-2 hover:bg-gray-100 rounded">
                        {hoverItem.icon}
                        <span className="text-sm">{hoverItem.htext}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Location & Search */}
      <div className="md:hidden px-2">
        <div className="flex items-center gap-1 py-2">
          <MapPinIcon className="w-5 h-5 text-gray-600" />
          <span>Location not set <span className="text-blue-600">Select delivery location</span></span>
          <div className="mt-1 size-2 rotate-45 border-t border-r border-blue-600"></div>
        </div>
        <div className="flex py-3 px-4 border border-gray-200 rounded-2xl">
          <span className="p-1"><Search size={30} strokeWidth={1} /></span>
          <input type="search" placeholder="Search for Products" className="w-full pl-2 py-2" />
        </div>
      </div>

      {/* Sidebar for mobile */}
      {open && (
        <div ref={slideRef} className="fixed top-0 left-0 h-full w-3/4 bg-white text-gray-600 shadow-lg z-20">
          <div className="flex bg-blue-600 justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-white" />
              <span className="text-white">Login & Signup</span>
            </div>
            <img src={Flipkart} className="size-8 rounded-full" alt="Flipkart" />
          </div>
          <div>
            {Slidebar.map((item, index) => (
              <div key={index} className={`flex p-2 gap-2 items-center ${[1, 3, 4, 6, 12].includes(index) ? "border-b" : ""}`}>
                <span>{item.icon}</span>
                <span>{item.htext}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipkartNavbar;
