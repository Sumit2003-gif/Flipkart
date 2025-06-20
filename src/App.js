import React from 'react'
import './index.css'
import FlipkartNavbar from './Flipkart/FlipkartNavbar'
import FlipkartLogin from './Flipkart/FlipkartLogin'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SellerOnline from './Flipkart/SellerOnline'
import FlipkartCart from './Flipkart/FlipkartCart'
import FlipkartSlider from './Flipkart/FlipkartSlider'
import FlipkartSignupPage from './Flipkart/FlipkartSignupPage';
import FlipkartLoginPage from './Flipkart/FlipkartLoginPage';
import BecomeSellerHome from './Flipkart/BecomeSellerHome'
import FlipkartProduct from './Flipkart/FlipkartProduct'
import Flipkartloginlink from './Flipkart/Flipkartloginlink'
import FlipkartHome from './Flipkart/FlipkartHome'
import FlipkartProducts from './Flipkart/FlipkartProduct'
import MobileHome from './Flipkart/MobileHome';
import FlipkartProductNav from './Flipkart/FlipkartProductNav';
import ProductsDetails from './Flipkart/ProductsDetails'
import SearchResult from './Flipkart/SearchResult'
import Address from './Flipkart/Address'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<FlipkartHome/>}/>
      <Route path='/login' element={<FlipkartLogin/>}/>
      <Route path='/cart' element={<FlipkartCart/>}/>
      <Route path='/seller' element={<SellerOnline/> }/>
      <Route path="/signup" element={<FlipkartSignupPage />} />
      <Route path="/login1" element={<FlipkartLoginPage />} />
      <Route path='/BecomeSeller' element={<BecomeSellerHome/>}/>
      <Route path="/" element={<MobileHome />} />
      <Route path="/summer-products" element={<FlipkartProductNav />} />
<Route path="/product/:id" element={<ProductsDetails />} />
<Route path='/search' element={<SearchResult/>}/>
<Route path='/address' element={<Address/>}/>

      </Routes>
      </BrowserRouter>

      
     </div>
    // <div>
    //   <FlipkartSlider/>
    //   <FlipkartProducts/>
    // </div>
  )
}

export default App

