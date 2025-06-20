import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FlipkartLogo from "./Images/Flipkartloginlogo.png";
import PlusLogo from "./Images/Flpkartloginplus.png";
import EmptyCartImage from "./Images/cart image.png";
import { Search } from "lucide-react";
import { logout } from "./Flipkart Redux/LoginReducer";
import { useSelector, useDispatch } from "react-redux";
import {
  addTOCart,
  removeFromCart,
  decreaseQty,
} from "./Flipkart Redux/CreateSlice";
import SearchBar from "./SearchBar";

const FlipkartCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLogin = useSelector((state) => state.Login.isLogin)
  const username = useSelector
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Small delay to ensure logout state updates before navigation
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * 85 * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    if (!isLogin) {
      navigate("/login");
    } else {
      navigate("/address");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f1f3f6] text-[#212121]">
      {/* Top Navbar */}
      <header className="bg-[#2874f0] px-4 md:px-10 py-2 flex items-center justify-around">
        {/* Logo */}
        <div className="flex">
          <Link to="/" className="flex flex-col items-start justify-center">
            <img src={FlipkartLogo} alt="Flipkart" className="w-24 h-5" />
            <div className="flex items-center text-white text-xs italic -mt-1">
              Explore{" "}
              <span className="text-yellow-400 font-bold ml-1 mr-0.5">
                Plus
              </span>
              <img src={PlusLogo} alt="Plus" className="w-3 h-3" />
            </div>
          </Link>
          <div className="hidden md:flex w-[600px] max-w-[65%] mx-8">
            <div className="flex items-center bg-white rounded-sm w-full">

              <SearchBar/>
            </div>
          </div>
        </div>

        {/* Login/Logout Button */}
        {isLogin ? (
          <button
            onClick={handleLogout}
            className="text-white px-4 py-2 bg-[#2874f0] hover:bg-blue-700 rounded"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="text-white px-4 py-2 bg-[#2874f0] hover:bg-blue-700 rounded">
              Login
            </button>
          </Link>
        )}
      </header>

      {/* Cart Center Section */}


      <main className="flex-grow flex flex-col md:flex-row bg-white m-6 shadow-sm rounded-sm">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center text-center py-20 px-4 md:px-0 w-full">
            <img src={EmptyCartImage} alt="Empty Cart" className="w-60 mb-6" />
            <h1 className="text-2xl font-semibold mb-2">Missing Cart items?</h1>
            <p className="text-gray-600 mb-6">
              Login to see the items you added previously
            </p>
                    {isLogin ? (
                      <Link to={"/"}>
          <button
            // onClick={handleLogout}
            className="bg-[#fb641b] hover:bg-[#f95c10] transition text-white px-16 py-3 rounded-sm text-lg font-semibold"
          >
            Shop Now!
          </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="bg-[#fb641b] hover:bg-[#f95c10] transition text-white px-16 py-3 rounded-sm text-lg font-semibold">
              Login
            </button>
          </Link>
        )}
          </div>
        ) : (
          <>
  {/* Cart Items Section */}
  <section className="flex flex-col flex-grow p-4 sm:p-6 space-y-6 md:max-w-3xl">
    <h2 className="text-2xl font-bold border-b pb-4">My Cart ({cartItems.length} items)</h2>

    {cartItems.map((item) => (
      <div
        key={item.id}
        className="relative flex gap-4 sm:gap-6 border-b pb-6 bg-white shadow-sm p-4 rounded-lg"
      >
        {/* Remove Button */}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-xl"
          onClick={() => handleRemove(item.id)}
        >
          ×
        </button>

        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded"
        />

        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">Category: {item.category}</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-green-600 font-semibold text-base">
              ₹{Math.round(item.price * 85)}
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded"
              >
                −
              </button>
              <span className="text-base">{item.quantity}</span>
              <button
                onClick={() => dispatch(addTOCart(item))}
                className="w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>

  {/* Price Details Section */}
  <aside className="w-full md:w-96 bg-white p-6 border border-gray-200 rounded-lg shadow-md self-start">
    <h3 className="text-xl font-bold mb-4">Price Details</h3>

    <div className="flex justify-between mb-3 text-gray-700">
      <span>Price ({cartItems.length} items)</span>
      <span>₹{totalPrice.toLocaleString()}</span>
    </div>

    <div className="flex justify-between mb-3 text-gray-700">
      <span>Delivery Charges</span>
      <span className="text-green-600 font-semibold">Free</span>
    </div>

    <hr className="my-4" />

    <div className="flex justify-between text-lg font-bold">
      <span>Total Amount</span>
      <span>₹{totalPrice.toLocaleString()}</span>
    </div>

    <button
      type="button"
      onClick={handlePlaceOrder}
      className="w-full bg-[#fb641b] hover:bg-[#f95c10] text-white text-base font-semibold py-3 rounded-md mt-6 transition duration-200"
    >
      Place Order
    </button>
  </aside>
</>

        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#f1f3f6] text-sm text-gray-600 border-t border-gray-300 py-8 px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-wrap gap-2 items-center text-center md:text-left">
          <span className="font-semibold">Policies:</span>
          <span>Returns Policy</span>
          <span className="mx-1">|</span>
          <span>Terms of use</span>
          <span className="mx-1">|</span>
          <span>Security</span>
          <span className="mx-1">|</span>
          <span>Privacy</span>
          <span className="mx-1">|</span>
          <span>© 2007-2025 Flipkart.com</span>
        </div>

        {/* Right Section */}
        <div className="mt-2 md:mt-0 text-center md:text-right">
          Need help? Visit the{" "}
          <span className="text-[#2874f0] cursor-pointer hover:underline">
            Help Center
          </span>{" "}
          or{" "}
          <span className="text-[#2874f0] cursor-pointer hover:underline">
            Contact Us
          </span>
        </div>
      </footer>
    </div>
  );
};

export default FlipkartCart;
