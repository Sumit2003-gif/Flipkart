import React from 'react'
import { Link } from 'react-router-dom'
import FlipkartImage from "./Images/Flipkartloginlogo.png"
import Flipkartlogin from "./Images/Flpkartloginplus.png"
import FlipkartImage1 from "./Images/background.png"
import Flipkartfooter from './Flipkartfooter'
import { Search } from 'lucide-react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Flipkartloginlink from './Flipkartloginlink'
import { logout } from './Flipkart Redux/LoginReducer'
import { useSelector,useDispatch } from 'react-redux'

const AllNav = () => {
       const isLogin = useSelector((state) => state.Login.isLogin)
const username = useSelector((state) => state.Login.username)
const dispatch = useDispatch()
const handleClickOutside = () => {
  dispatch(logout())
}
  const Become = [
    {text:"Become a Seller", Path:"/seller"},{text:"More"},{icon:<ShoppingCartIcon color='white' className='size-6 '/>,text:"Cart",Path:"/cart"}
  ]
  return (
    <div>
       <nav className='flex justify-evenly  bg-blue-600 py-3 text-white items-center w-full sticky top-0 left-0 z-10 '>
        <div className='flex  w-1/2 justify-end items-center gap-3 pl-20'>
        <Link to="/">
        <div className='p-1'>
        <img src={FlipkartImage} className='w-24 h-5'></img>
        <div className='flex justify-center items-center italic text-sm -mt-1'>
        <span className= '-ml-1 font-semibold mr-1'>Explore </span><span className='text-[#fdd835] font-semibold pr-[1px]'>Plus</span><span><img src={Flipkartlogin} className='size-3'></img></span>
        </div>
        
        </div>
        </Link>
        <div className='hidden md:flex bg-white w-3/5 items-center justify-around  rounded-md px-4 py-1'>
          <input type='search' placeholder='Search for products,brands and more' className='outline-none text-black w-full '></input>
          <Search strokeWidth={2.5} color='blue'/>
        </div>
        
        {
         isLogin ? (
           <div className='text-white font-semibold flex gap-2 items-center '>
       
           <button onClick={handleClickOutside} className='border border-white px-2 py-1 bg-white text-blue-600 rounded'>
            Logout
          </button>
           </div>
        ) : (
          <Link to="/login">
          <button className='w-20 border border-white h-8 ml-2 bg-white text-blue-600 font-semibold'>
        Login
          </button>
         </Link>
         )
       }

      </div>
      <div className='flex  justify-start gap-[13%] font-semibold w-1/3 '>
        {

          Become.map((item,index)=>(
            <Link key={index} to={item.Path}>
            <div key={index} className={`flex ${[0,1].includes(index) ? "hidden md:block" : ""} `}>
              {item.icon}<span>{item.text}</span>
            </div>
           </Link> 
          ))
        }
      </div>  
      </nav>
    </div>
  )
}

export default AllNav
