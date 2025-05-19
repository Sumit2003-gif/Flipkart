import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './Flipkart Redux/LoginReducer';
import { useNavigate } from 'react-router-dom';

const FlipkartLoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.Login.isLogin);
  const username = useSelector((state) => state.Login.username);

  const inputRef = useRef(null);
  const passwordRef = useRef(null); // 👈 Password reference

  const handleLogin = () => {
    const user = inputRef.current.value.trim();
    const pass = passwordRef.current.value.trim();

    if (user && pass) {
      // You can validate password here if needed
      dispatch(login(user));
      navigate('/'); // redirect to home or main page
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // redirect back to main after logout
  };

  return (
    <div className="grid gap-2 justify-center mt-10">
      {!isLogin ? (
        <>
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter username"
            className="border p-2"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
            className="border p-2"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </>
      ) : (
        <>
          <h2 className="text-green-600 text-xl font-bold">
            Welcome, {username} 👋
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 rounded"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default FlipkartLoginPage;
