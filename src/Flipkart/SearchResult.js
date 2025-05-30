import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from "./AllNav"

const SearchResult = () => {
  const searchTerm = useSelector((state) => state.search.term);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <Navbar/>
      <h1 className="text-2xl font-bold mb-6">
        {/* Search Results for <span className="text-blue-600">"{searchTerm}"</span> */}
      </h1>

      {loading ? (
        <div className="text-center text-gray-500 text-lg">Loading products...</div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center text-red-600 text-lg">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition hover:shadow-lg"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="text-md font-semibold text-gray-800 mb-1">
                {item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
              </h2>
              <p className="text-blue-600 font-bold text-lg mb-1">₹{item.price}</p>
              <p className="text-gray-600 text-sm">
                Rating: {item.rating?.rate} ⭐ | Stock: {item.rating?.count}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
