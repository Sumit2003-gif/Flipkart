import React from 'react'
import Products from "./Data/products_50_realistic.json"

const FlipkartProducts = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Products.map((product, index) => (
        <div key={index} className="border p-2 rounded shadow hover:shadow-lg transition">
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-green-600 font-bold">₹{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default FlipkartProducts
