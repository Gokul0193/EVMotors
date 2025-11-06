import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");

  const handleSignup=async(e)=>{
    e.preventDefault();

    try{

      const response=await fetch("http://localhost:5000/api/signup",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({name,email,password})
    });
    const data =await response.json();
    setMessage(data.message);

    if(response.ok){
      alert("Signup successful! You can now log in.");
      setName("");
      setEmail("");
      setPassword("");
    }else{
      alert("Signup failed: " + data.message);
    }
    }catch(err){

      console.error("Signup error:", error);
      setMessage("Something went wrong.");
    }
  }
  
  return (
    <div className="flex flex-col gap-5 bg-white w-[400px] px-8 rounded-2xl shadow-2xl py-10">
      <h2 className="text-3xl font-bold text-center font-graphic">
        <span className="text-brand ">EV</span>Motors
      </h2>

      <form className="flex flex-col gap-5 items-center justify-center" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-brand transition-all"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-brand transition-all"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-brand transition-all"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="w-56 h-12 bg-brand text-white font-semibold py-2 rounded-md hover:bg-brand/90 transition-all cursor-pointer">
          Sign Up
        </button>
      </form>
       {message && <p className="text-center text-sm text-gray-500">{message}</p>}

      <h3 className="text-center">
        Already have an account?{' '}
        <span className="font-semibold text-brand">
          <Link to="/">Login</Link>
        </span>
      </h3>
    </div>
  )
}

export default Signup
