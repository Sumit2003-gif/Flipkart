// FlipkartSignupPage.jsx
import React, { useRef, useState } from 'react';

const FlipkartSignupPage = ({ onSignupSuccess }) => {
  const UserRef = useRef(null);
  const EmailRef = useRef(null);
  const PasswordRef = useRef(null);
  const ConfirmRef = useRef(null);

  const [error, setError] = useState(null);

  const HandleClick = (e) => {
    e.preventDefault();

    const username = UserRef.current.value;
    const email = EmailRef.current.value;
    const password = PasswordRef.current.value;
    const confirm = ConfirmRef.current.value;

    if (!username || !email || !password || !confirm) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Sign Up successfully', { username, email, password });

    setError(null);
    UserRef.current.value = '';
    EmailRef.current.value = '';
    PasswordRef.current.value = '';
    ConfirmRef.current.value = '';

    // 🔁 Trigger the parent to show login form
    if (onSignupSuccess) onSignupSuccess();
  };

  return (
    <div className="grid bg-white py-2 p-2 space-y-2 justify-center [&>input]:border-2 [&>input]:rounded-lg [&>input]:p-2">
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <input type="text" placeholder="Username" ref={UserRef} />
      <input type="email" placeholder="Email Address" ref={EmailRef} />
      <input type="password" placeholder="Password" ref={PasswordRef} />
      <input type="password" placeholder="Confirm Password" ref={ConfirmRef} />
      <button
        className="border bg-orange-500 p-1 rounded-md text-white font-semibold hover:scale-105"
        onClick={HandleClick}
      >
        Sign Up
      </button>
    </div>
  );
};

export default FlipkartSignupPage;
