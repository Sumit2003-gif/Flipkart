import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
erOnline from "./SellerOnline"
const FlipkartBecome = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/seller' element={<SellerOnline/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default FlipkartBecome
