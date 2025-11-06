import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");  

  const handleLogin=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:5000/api/login",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({email,password})
      });
      const data=await response.json();
      if(response.ok){
        alert("Login successful!");
        setEmail("");
        setPassword("");
        localStorage.setItem("token",data.token);
        
        
        window.location.href="/dashboard";
      }else{
        alert("Login failed: " + data.message);
      }
    }catch(err){
      console.error("Login error:", err);
      alert("Something went wrong.");
    }
  }
  return (
    <div className="flex flex-col gap-5 bg-white w-[400px] px-8 rounded-2xl shadow-2xl py-10">
      <h2 className="text-3xl font-bold text-center">
        <span className="text-brand">Ev</span>motors
      </h2>

      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="eg: bob@gmail.com"
          className="w-full border-b-2 border-gray-300 bg-transparent px-4 py-2 focus:outline-none focus:border-brand transition-all"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="w-full border-b-2 border-gray-300 bg-transparent px-4 py-2 focus:outline-none focus:border-brand transition-all"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
       />

        <button className="w-full bg-brand text-white font-semibold py-2 rounded-md hover:bg-brand/90 transition-all cursor-pointer">
          Login
        </button>
      </form>

      <h3 className="text-center">
        Don’t have an account?{' '}
        <span className="font-semibold text-brand">
          <Link to="/signup">Register Now</Link>
        </span>
      </h3>
    </div>
  )
}

export default Login
