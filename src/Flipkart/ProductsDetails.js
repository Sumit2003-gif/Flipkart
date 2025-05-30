import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AllNav from './AllNav';
import Flipkartfooter from './Flipkartfooter';
import { addTOCart } from './Flipkart Redux/CreateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProductDetails = () => {
const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [error, setError] = useState(false);
        const dispatch = useDispatch(); // 🟡 Redux dispatcher
        const cartItems = useSelector((state)=>state.cart.cartItems)
        const isIncart = product && cartItems.some((item)=>item.id === product.id)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error("Error fetching product:", err);
                setError(true);
            }
        };
        fetchProduct();
    }, [id]);

    if (error) return <div className="p-6 text-center text-red-500">Error loading product.</div>;
    if (!product) return <div className="p-6 text-center">Loading...</div>;

   const handleAddToCart = () => {

if (isIncart) {
    navigate("/cart")
}else{

  dispatch(addTOCart(product));
  toast.success("Product added to cart",{
    position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
  });
  navigate("/cart")
}
   }
   const handleBuyNow = () => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     toast.error("Please login first to continue.");
//     return navigate("/login"); // ✅ Correct way to redirect
//   }
  

  dispatch(addTOCart(product)); // Add to cart
  toast.success("Product added to cart",{
    position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
  });
  navigate("/cart"); // Optional: redirect after buy
};

    return (
        <div className="w-full min-h-screen bg-gray-100">
            <div className="sticky top-0 z-50 bg-white shadow">
                <AllNav />
            </div>

            <div className="flex flex-col md:flex-row w-full">
                <div className="md:w-[40%] w-full bg-white flex flex-col md:flex-row p-6 border-r">
                    <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:mr-4">
                        {[product.image, product.image, product.image].map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`thumb-${idx}`}
                                className="w-16 h-16 object-contain border p-1 cursor-pointer hover:border-blue-500"
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                    <div className="flex-grow flex justify-center items-center">
                        <img
                            src={selectedImage || product.image}
                            alt={product.title}
                            className="w-full h-[400px] object-contain rounded-lg bg-gray-50"
                        />
                    </div>
                </div>

                <div className="md:w-[60%] w-full p-8 bg-white">
                    <h1 className="text-3xl font-semibold text-gray-800">{product.title}</h1>
                    <div className="mt-4 text-lg font-semibold text-gray-800 line-through">
                        ₹{Math.round(product.price * 100)}
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                        ₹{Math.round(product.price * 85)} <span className="text-sm text-gray-600">(15% off)</span>
                    </div>

                    <div className="text-green-600 text-sm mt-2">Rating: {product.rating?.rate} ⭐</div>
                    <div className="text-red-600 text-sm">Stock Left: {product.rating?.count}</div>
                    <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>

                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
                        <p>✔ Bank Offer: 10% off on Flipkart Axis Bank Credit Cards</p>
                        <p>✔ Combo Offer: Buy 2 or more & save ₹30</p>
                        <p className="text-blue-600 cursor-pointer">+3 more offers</p>
                    </div>

                    <div className="mt-4 text-sm text-gray-700">
                        <p>Delivery by <span className="font-semibold text-black">20 May, Tuesday</span> | <span className="text-green-600">Free</span></p>
                        <p className="text-gray-500">10 Days Return Policy</p>
                        <p>Sold by: <span className="text-blue-600">ANALOGUE INDIA</span> (3.6★)</p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6">
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg text-sm shadow transition duration-300"
                            onClick={handleAddToCart}
                        >
                            {isIncart ? "Go To cart":"Add to Cart"}
                        </button>
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-sm shadow transition duration-300"
                            onClick={handleBuyNow}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
         <footer className='bg-neutral-900 hidden md:block'>
      <Flipkartfooter/>
    </footer>

        </div>
    );
};

export default ProductDetails;
