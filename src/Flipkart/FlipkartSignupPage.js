// FlipkartSignupPage.jsx
import React, { useRef, useState } from 'react';

const FlipkartSignupPage = ({ onSignupSuccess }) => {
  // const UserRef = useRef(null);
  // const EmailRef = useRef(null);
  // const PasswordRef = useRef(null);
  // const ConfirmRef = useRef(null);
  const [formData,setFormData] = useState({name : "",email : "", password : "",confirmPass:"" }) 

  const [error, setError] = useState(null);
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  } 
  const HandleClick = async (e) => {
   
    e.preventDefault();
    const {name,email,password,confirmPass} = formData
    if (!name || !email || !password || !confirmPass) {
      setError("please fill in all details")
      return
    }
    if (password !== confirmPass) {
      setError('Passwords do not match.');
      return;
    }
    try{
      const res = await fetch("http://localhost:3000/signup",{
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(name,email,password)
      })
     if (!res.ok) {
      const data = await res.json()
      setError(data.message || 'SignUp Failed')
      return
     } 
     console.log("Sign up successfully")
     setFormData({name : "",email : "",password : ""})
     setError(null)
     if (onSignupSuccess) onSignupSuccess()
     }     
      catch(err){
        console.error('Sign Up error', err)
        setError('Something went wrong . please try again')
      }
    }

  return (
    <div className="grid bg-white py-2 p-2 space-y-2 justify-center [&>input]:border-2 [&>input]:rounded-lg [&>input]:p-2">
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <input name='name' type="text" placeholder="Username" onChange={handleChange} />
      <input name='email' type="email" placeholder="Email Address" onChange={handleChange} />
      <input name='password' type="password" placeholder="Password" onChange={handleChange} />
      <input name='confirm' type="password" placeholder="Confirm Password" onChange={handleChange} />
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
