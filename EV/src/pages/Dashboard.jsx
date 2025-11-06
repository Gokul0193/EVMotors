import React from "react";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  console.log(JSON.stringify(localStorage.getItem("token")));
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl px-10 py-8 w-[400px] text-center">
        <h1 className="text-3xl font-bold text-brand mb-4">Welcome!</h1>
        <p className="text-gray-600 mb-6">
          🎉 You have successfully logged in to <span className="font-semibold">EvMotors</span>
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-brand text-white font-semibold py-2 rounded-md hover:bg-brand/90 transition-all cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
