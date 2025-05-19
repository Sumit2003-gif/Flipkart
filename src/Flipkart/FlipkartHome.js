import React from 'react'
import FlipkartNavbar from './FlipkartNavbar'
import FlipkartSlider from './FlipkartSlider'
import FlipkartOffer from './FlipkartOffer'
import FlipkartElectronics from './FlipkartElectronics'
import FlipkartPhone from './FlipkartPhone'
import FlipkartStory from './FlipkartStory'
import Flipkartfooter from './Flipkartfooter'
import MobileHome from './MobileHome'
import Img from "./Images/Adds.webp"
import Img1 from "./Images/Adds1.jpg"
import Img2 from "./Images/Adds2.jpg"
import Img3 from "./Images/Adds3.jpg"
import Img4 from "./Images/Adds4.jpg"
import Img5 from "./Images/Adds5.jpg"
import Img6 from "./Images/Adds6.jpg"
import Img7 from "./Images/Adds7.jpg"
import Img8 from "./Images/Adds8.jpg"
import Img9 from "./Images/Adds9.jpg"
import Img10 from "./Images/Adds10.jpg"
import Img11 from "./Images/Adds11.jpg"
import StockUp from './StockUp'
// import Img12 from "./Images/Adds12.webp"

const FlipkartHome = () => {
  const Images = [
    Img1,Img2,Img3
    // ,Img7,Img8,Img9,Img10,Img11
  ]
  const Images1 = [
    Img1,Img2,Img3
        ,Img4,Img5,Img6

  ]

  return (
    <>
    <div className='sticky top-0 left-0 z-50 bg-white'>
      <FlipkartNavbar />
    </div>
    <div className='p-4'>
        <FlipkartOffer/>
        <FlipkartSlider/>
    </div>
    <div className='hidden md:flex border gap-2 border-black p-4 '>
    {
      Images.map((item,index)=>(
        <div className='border border-black w-full  rounded-lg'>
        <img src={item} className=' rounded-lg h-full'></img>
        </div>
      ))
    }
    </div>
    <div className='md:flex gap-6 justify-evenly p-4 grid'>
      <MobileHome className='bg-pink-100'/>
      <MobileHome className='bg-pink-100'/>
      <MobileHome className='bg-pink-100'/>


    </div>
    <div className='block md:hidden p-4 m-3 ml-4 '>
      <StockUp/>
    </div>
    <div className='grid-cols-3 border gap-2 border-black p-4 hidden md:grid'>
    {
      Images1.map((item,index)=>(
        <div className='border border-black w-full  rounded-lg'>
        <img src={item} className=' rounded-lg h-full'></img>
        </div>
      ))
    }
    </div>
    <div className='hidden md:block'>
      <FlipkartElectronics/>
      <FlipkartPhone/>
    </div>
    <div>
      <FlipkartStory/>
    </div>
    <footer className='bg-neutral-900 hidden md:block'>
      <Flipkartfooter/>
    </footer>
    </>
  )
}

export default FlipkartHome
