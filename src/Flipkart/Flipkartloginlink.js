import React, { useState } from 'react';
import FlipkartLoginPage from './FlipkartLoginPage';
import FlipkartSignupPage from './FlipkartSignupPage';

const Flipkartloginlink = () => {
  const [isLogin, setIslogin] = useState(true);

  return (
    <div>
      <h1 className="text-blue-600 font-bold text-xl pt-5 text-center p-2">
        {isLogin ? 'Login Here!' : 'Sign Up Here!'}
      </h1>

      <div className="flex justify-center items-center gap-3 py-2">
        <button
          onClick={() => setIslogin(true)}
          className={`${
            isLogin ? 'bg-orange-500' : 'bg-blue-600'
          } font-medium hover:text-white p-1 px-3 py-2 rounded-lg text-white`}
        >
          Login
        </button>
        <button
          onClick={() => setIslogin(false)}
          className={`${
            !isLogin ? 'bg-orange-500' : 'bg-blue-600'
          } font-medium hover:text-white p-1 px-3 py-2 rounded-lg text-white`}
        >
          SignUp
        </button>
      </div>

      <div className="p-4">
        {isLogin ? (
          <FlipkartLoginPage />
        ) : (
          <FlipkartSignupPage onSignupSuccess={() => setIslogin(true)} />
        )}
      </div>

      <div className="text-blue-600 font-semibold mt-[20%] pb-3 text-center">
        {isLogin ? (
          <button onClick={() => setIslogin(false)}>
            New to Flipkart? Create an account
          </button>
        ) : (
          <button onClick={() => setIslogin(true)}>
            Already have an account? Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Flipkartloginlink;
