import React from 'react'
import Img from "./Images/FlipkartOffer.webp"
import Img1 from "./Images/FlipkartOffer1.webp"
import Img2 from "./Images/FlipkartOffer2.webp"
import Img3 from "./Images/FlipkartOffer3.webp"
import Img4 from "./Images/FlipkartOffer4.webp"
import Img5 from "./Images/FlipkartOffer5.webp"
import Img6 from "./Images/FlipkartOffer6.webp"
import Img7 from "./Images/FlipkartOffer7.webp"
import Img8 from "./Images/FlipkartOffer8.webp"
import Img9 from "./Images/FlipkartOffer9.webp"
import { useNavigate } from 'react-router-dom'

const FlipkartOffer = () => {
  const navigate = useNavigate()
    const Offer = [
        {img:Img,htext:"Top Offers"},
        {img:Img1,htext:"Mobiles & Tablets"},
        {img:Img2,htext:"TVs & Appliances"},
        {img:Img3,htext:"Electronics"},
        {img:Img4,htext:"Fashion"},
        {img:Img5,htext:"Beauty, Food.."},
        {img:Img6,htext:"Home & Kitchen"},
        {img:Img7,htext:"Furniture"},
        {img:Img8,htext:"Flight Bookings"},
        {img:Img9,htext:"Grocery"},

    ]

  return (<>
<div className='flex justify-evenly w-full overflow-auto gap-1 md:gap-3 md:p-4'>
  {Offer.map((item, index) => (
    <div key={index} className='w-24  p-2 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out'
    onClick={()=>navigate("/summer-products")}
    >
      <img src={item.img} className='w-16 h-16 object-contain ' alt={item.htext} />
      <h1 className='text-sm text-center font-light md:font-medium mt-0.5 '>{item.htext}</h1>
    </div> 
  ))}
</div> 
</>
  )
}

export default FlipkartOffer
