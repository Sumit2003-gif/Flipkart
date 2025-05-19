import React from "react";
import Img from "./Images/Footer.svg";
import Img1 from "./Images/Footer1.svg";
import Img2 from "./Images/Footer2.svg";
import Img3 from "./Images/Footer3.svg";
import Img4 from "./Images/Footer4.svg";
import Img5 from "./Images/Footer5.svg";
import Img6 from "./Images/Footer6.svg";
import Img7 from "./Images/Footer7.svg";
import Img8 from "./Images/Footer8.svg";

const Flipkartfooter = () => {
  const About = [
    "Contact Us",
    "About Us",
    "Careers",
    "Flipkart Stories",
    "Press",
    "Corporate Information",
  ];
  const Group  = ["Myntra", "Cleartrip", "Shopsy"];
  const Help = ["Payment", "Shipping", "Cancellation &", "Return", "FAQ"];
  const Consumer = [
    "Cancellation &",
    "Return",
    "Terms of Use",
    "Security",
    "Privacy",
    "Sitemap",
    "Grievance Redressal",
    "EPR Compliance",
  ];
  const Social = [
    Img5,Img6,Img7,Img8
  ]
  const Lower = [
    { icon: <img src={Img} />, text: "Become a Seller" },
    { icon: <img src={Img1} />, text: "Advertise" },
    { icon: <img src={Img2} />, text: "Gift Cards" },
    { icon: <img src={Img3} />, text: "Help Center" },
    { text: "© 2007-2025 Flipkart.com" },
    { icon: <img src={Img4} /> },
  ];
  const mail = [
    "Flipkart internet Private Limited,","Buildings Alyssa, Begonia &","Clove Embassy Tech Village,",
    "Outer Ring Road, Devarabeesanahalli Village,","Bengaluru, 560103,","Karnataka, India"
  ]
  const Selection = ({ title, items }) => (
    <div>
      <h1 className="text-gray-500 mb-2 text-sm font-semibold cursor-default">{title}</h1>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-[13px] font-semibold hover:underline cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer className=" text-white text-xs">
      <div className="w-full  flex py-7 px-14 border-b-[1px] pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 w-1/2  pb-10  pr-2">
          <Selection title="ABOUT" items={About} />
          <Selection title="GROUP COMPANIES" items={Group} />
          <Selection title="HELP" items={Help} />
          <Selection title="CONSUMER POLICY" items={Consumer} />
        </div>
        <div className="w-1/2 flex justify-between pl-6 border-l-[1px] ">
          <div>
            <h1 className="text-gray-500 mb-2 text-sm font-semibold">Mail Us:</h1>
            {mail.map((item)=>(
              <p className="text-[13px] font-semibold space-y-1 pb-1">{item}</p>
            ))

}
            <div>
               <h1 className="text-gray-500 mb-2 text-sm font-medium">Social:</h1>
               <div className="flex items-center justify-start gap-3 ml-2">
                {Social.map((itme,index)=>(
                  <img src={itme} className={`${index === 3 ? "size-5 m-1":""}`}></img>
                ))}
               </div>
            </div>
           
          </div>
          <div>
             <h1 className="text-gray-500 mb-2 text-sm font-semibold">Registered Office Address:</h1>
            {mail.map((item)=>(
              <p className="text-[13px] font-semibold space-y-1 pb-1">{item}</p>
            ))

}
          </div>
        </div>
      </div>
      <div className="flex justify-around px-8 py-8">
        {Lower.map((item, index) => (
          <div key={index} className="flex gap-2">
            {item.icon}
            <span className="text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Flipkartfooter;
