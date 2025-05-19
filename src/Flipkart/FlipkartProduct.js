import React, { useEffect, useState } from 'react';
import ProductsImage from "./Images/productsImage.png";
import { useNavigate } from 'react-router-dom';
import Flipkartfooter from './Flipkartfooter';
const ShowProduct = ({ id, text, url, head, desc, price, sale, left }) => {
     const Navigate = useNavigate()

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition hover:shadow-xl"
        onClick={()=>Navigate(`/product/${id}`)}>
            <img src={url} alt="product" className="w-full h-40 object-contain mb-3" />
            <h2 className="text-md font-medium text-gray-600">{text}</h2>
            <h1 className="text-lg font-bold mb-1 text-gray-800">{head.slice(0, 50)}...</h1>
            <p className="text-sm text-gray-500 mb-2">{desc.slice(0, 80)}...</p>
            <div className="flex items-center gap-2 mb-2">
                <img src={ProductsImage} alt="icon" className="w-10 h-5" />
                <span className="text-xs text-gray-400">Icon Label</span>
            </div>
            <p className="text-md font-semibold text-blue-600">Price: ${price}</p>
            <div className="text-sm text-green-600">Rating: {sale} ⭐</div>
            <p className="text-sm text-red-600">Stock Left: {left}</p>
        </div>
    );
};

const FlipkartProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log("Error fetching products:", err));
    }, []);

    return (
        <div>
        <div className="p-6 bg-gray-100 min-h-screen ">
            <h1 className="text-2xl font-bold mb-6">🔥 Trending Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product.map((item,index) => (
                    <ShowProduct
                        key={index}
                        id = {item.id}
                        text={item.category}
                        url={item.image}
                        head={item.title}
                        desc={item.description}
                        price={item.price}
                        sale={item.rating?.rate}
                        left={item.rating?.count}
                    />
                ))}
            </div>
         </div>   
             <footer className='bg-neutral-900 hidden md:block'>
      <Flipkartfooter/>
    </footer>
        </div>
    );
};

export default FlipkartProduct;
