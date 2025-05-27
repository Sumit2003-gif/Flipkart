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

const FlipkartCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLogin = useSelector((state) => state.Login.isLogin)
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
      navigate("/checkout");
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
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full px-4 py-2 outline-none text-sm rounded-l-sm"
              />
              <button className="p-2">
                <Search size={20} color="#2874f0" />
              </button>
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
            onClick={handleLogout}
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
            {/* Left - Cart Items */}
            <section className="flex flex-col flex-grow p-6 space-y-6 md:max-w-3xl">
              <h2 className="text-2xl font-semibold border-b border-gray-300 pb-4">
                My Cart ({cartItems.length} items)
              </h2>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="relative flex gap-6 border-b border-gray-300 pb-6"
                >
                  {/* Uncomment to add remove button */}
                  {/* <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                    onClick={() => handleRemove(item.id)}
                  >
                    X
                  </button> */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-contain rounded"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm">
                      Category: {item.category}
                    </p>
                    <p className="text-[#388e3c] font-semibold mt-1">
                      ₹{Math.round(item.price * 85)}
                    </p>
                    <p className="text-gray-700 flex items-center gap-3">
                      Quantity:
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(addTOCart(item))}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </p>
                  </div>
                </div>
              ))}
            </section>

            {/* Right - Price Details */}
            <aside className="w-full md:w-96 bg-[#f9fafb] p-6 border border-gray-300 rounded-sm h-fit self-start">
              <h3 className="text-xl font-semibold mb-4">Price Details</h3>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Price ({cartItems.length} items)</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Delivery Charges</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total Amount</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full bg-[#fb641b] hover:bg-[#f95c10] text-white font-semibold py-3 rounded-sm mt-6 transition"
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
