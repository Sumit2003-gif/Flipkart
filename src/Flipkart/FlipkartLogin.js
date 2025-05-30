import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FlipkartImage from "./Images/Flipkartloginlogo.png"
import Flipkartlogin from "./Images/Flpkartloginplus.png"
import FlipkartImage1 from "./Images/background.png"
import Flipkartfooter from './Flipkartfooter'
import { Search } from 'lucide-react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Flipkartloginlink from './Flipkartloginlink'
import { logout } from './Flipkart Redux/LoginReducer'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './SearchBar'

const FlipkartLogin = () => {
  const isLogin = useSelector((state) => state.Login.isLogin)
  const cartItems = useSelector((state)=> state.cart.cartItems || [] )
  const totalQuantity = cartItems.reduce((acc,item)=> acc+item.quantity,null)
  const dispatch = useDispatch()
  const [hovered, setHovered] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
  }

  const Become = [
    { text: "Become a Seller", Path: "/seller" },
    { text: "More" },
    { icon: <ShoppingCartIcon color='white' className='size-6' />, text: "Cart", Path: "/cart" }
  ]

  const Navbar2 = [
    "Electronic", "TVs & Appliances", "Men", "Women", "Baby & Kids", "Home & Furniture", "Sports,Books & More", "Flights", "Offer Zone"
  ]

  return (
    <div className='grid gap-4 bg-slate-100'>

      {/* Navbar Top */}
      <nav className='flex justify-evenly bg-blue-600 py-3 text-white items-center w-full sticky top-0 left-0 z-10'>
        <div className='flex w-1/2 justify-end items-center gap-3 pl-20'>
          <Link to="/">
            <div className='p-1'>
              <img src={FlipkartImage} alt="Flipkart" className='w-24 h-5' />
              <div className='flex justify-center items-center italic text-sm -mt-1'>
                <span className='-ml-1 font-semibold mr-1'>Explore </span>
                <span className='text-[#fdd835] font-semibold pr-[1px]'>Plus</span>
                <span><img src={Flipkartlogin} alt="Plus Icon" className='size-3' /></span>
              </div>
            </div>
          </Link>

          <div className='hidden md:flex bg-white w-3/5 items-center justify-around rounded-md px-4 py-1'>
            {/* <input type='search' placeholder='Search for products,brands and more' className='outline-none text-black w-full' />
            <Search strokeWidth={2.5} color='blue' /> */}
            <SearchBar/>
          </div>

          {isLogin ? (
            <div className='text-white font-semibold flex gap-2 items-center'>
              <button onClick={handleLogout} className='border border-white px-2 py-1 bg-white text-blue-600 rounded'>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className='w-20 border border-white h-8 ml-2 bg-white text-blue-600 font-semibold'>
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Become/More/Cart Menu */}
        <div className='flex justify-start gap-[13%] font-semibold w-1/3'>
          {Become.map((item, index) => {
            const isMore = item.text === "More"
            return (
              <div
                key={index}
                className={`relative ${[0, 1].includes(index) ? "hidden md:block" : ""}`}
                onMouseEnter={() => isMore && setHovered(true)}
                onMouseLeave={() => isMore && setHovered(false)}
              >
                <Link to={item.Path || "#"}>
                  <div className=" flex items-center gap-1  px-2 py-1 cursor-pointer">
                    <div className='relative'>
                    {item.icon}{
                      index ===2 && totalQuantity && (
                        <span className='absolute -top-1 -right-[3px] bg-red-600 text-white text-xs px-[6px] py-[1px] rounded-full'>{totalQuantity}</span>
                      )
                    }
                    </div>
                    <span>{item.text}</span>
                  </div>
                </Link>

                {/* Dropdown menu for More */}
                {isMore && hovered && (
                  <div className="absolute top-[130%] -left-16 mt-1 bg-white text-black shadow-md rounded-md w-48 z-50">
                  <div className='  w-5 h-5 rotate-45 absolute -top-[9px] bg-white left-[45%] border-2 border-white'></div>
                    <ul className="py-2">
                      <li>
                        <Link to="/notifications" className="block px-4 py-2 hover:bg-gray-100">
                          Notification Preferences
                        </Link>
                      </li>
                      <li>
                        <Link to="/customer-care" className="block px-4 py-2 hover:bg-gray-100">
                          24x7 Customer Care
                        </Link>
                      </li>
                      <li>
                        <Link to="/advertise" className="block px-4 py-2 hover:bg-gray-100">
                          Advertise
                        </Link>
                      </li>
                      <li>
                        <Link to="/download-app" className="block px-4 py-2 hover:bg-gray-100">
                          Download App
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </nav>

      {/* Second Navbar */}
      <div className='hidden md:flex justify-evenly py-3 border-[2px] -mt-[16px] border-slate-200 bg-white'>
        {Navbar2.map((item, index) => (
          <div key={index} className='flex gap-[5px] items-center group'>
            <span className='group-hover:text-blue-500 font-semibold cursor-default'>{item}</span>
            <div
              className={`size-[5px] border-black border-r-[1px] border-b-[1px] rotate-45 mt-1 transition-all duration-100 ease-in-out 
                ${[7, 8].includes(index) ? "hidden" : ""} group-hover:-rotate-[135deg] group-hover:border-r-blue-700 group-hover:border-b-blue-700`}
            ></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div>
        <div className='flex w-full px-[17%] bg-white'>
          <div className='w-2/5 border bg-[#257de1] hidden md:block'>
            <div className='p-10'>
              <h1 className='font-bold text-2xl text-white'>Login</h1>
              <p className='text-lg font-semibold text-slate-200 pt-5'>
                Get access to your Orders,<br />Wishlist and Recommendations
              </p>
            </div>
            <div className='flex justify-center items-center p-10 mt-20'>
              <img src={FlipkartImage1} alt="Background" />
            </div>
          </div>

          <div className='md:w-3/5 w-full'>
            <Flipkartloginlink />
            {/* <a href='#'>New to Flipkart? Create an account</a> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-900 hidden md:block'>
        <Flipkartfooter />
      </footer>
    </div>
  )
}

export default FlipkartLogin
