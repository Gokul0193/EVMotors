import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  

  

  return (
    <div className="h-screen bg-gray-100">
     <Navbar/>
     <div className=" mt-52 flex items-center justify-center">
    <h1 className="text-8xl font-normal">Welcome To <span className="text-brand">EV</span>MOTORS</h1>
     </div>
     
    </div>
  );
};

export default Dashboard;
