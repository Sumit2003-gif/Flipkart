import React, { useState } from 'react';
import Img from "./Images/Men Shoes.png";
import Img1 from "./Images/Men Sliper.png";
import Img2 from "./Images/Bags.png";
import Img3 from "./Images/Half pant.png";
import FlipkartProductNav from './FlipkartProductNav';
import { useNavigate } from 'react-router-dom';

const MobileHome = ({className = ""}) => {
    const Navigate = useNavigate()
    const Sumer = [
        { img: Img, text: "Men's Casual Shoes", htext: "Min. 70% Off" },
        { img: Img1, text: "Men's Slippers", htext: "Min. 70% Off" },
        { img: Img2, text: "Men's Boxer", htext: "Min. 70% Off" },
        { img: Img3, text: "Backpacks", htext: "Min. 70% Off" },
    ];
    const [click,setClick] = useState(false)
    const Product = ({ url, text, htext }) => {
        return (
            <div className='grid gap-4 w-full h-full items-center border bg-white border-gray-300 rounded-xl py-4'>
                <div className='flex justify-center items-center'>
                <div className='flex w-24 h-20 justify-center items-center mt-2  p-2 py-3'>
                    <img src={url} alt={text} className=' bg-gray-200 w-24 h-20 object-contain' />
                </div>
                </div>
                <div className='grid p-2'>
                <p className='text-sm  mt-1 text-start'>{text}</p>
                <h1 className='text-lg font-bold text-green-600 text-start'>{htext}</h1>
                </div>
            </div>
        );
    };

    return (
        <div className={`border border-black w-full rounded-xl p-6 h-full ${className} `}>
                <div className='grid '>
                    <div className='flex border justify-between items-center p-2 rounded-xl'>
                        <h1 className='font-bold'>Summer Collection</h1>
                        <button className='bg-blue-600 w-10 h-10 p-1 flex justify-center items-center rounded-full'
                        onClick={() => Navigate("/summer-products")} // ✅ Navigate to new page
>
                            <div className='size-3 border-white rotate-45 border-r-[2px] border-t-[2px]'></div>
                        </button>
                    </div>
                    <div className='grid grid-cols-2 gap-2 mt-2 '>
                        {
                            Sumer.map((item, index) => (
                                <Product key={index} url={item.img} text={item.text} htext={item.htext} />
                            ))
                        }
                    </div>
                </div>
                {/* {
                    click && <FlipkartProductNav onClose={()=>setClick(false)}/>
                } */}
            </div>
            
    );
};

export default MobileHome;
