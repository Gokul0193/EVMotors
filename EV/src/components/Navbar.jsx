import React from 'react'

const Navbar = () => {
    const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <nav className=' flex items-center justify-between shadow-xl px-18 py-2'>
      <h2 className='font-bold text-3xl font-graphic'><span  className='text-brand'>EV</span>Motors</h2>

      <div className=' w-[800px]'>
        <ul className='flex items-center justify-around py-4 font-semibold'>
            <li className='cursor-pointer hover:text-brand'>Home</li>
             <li>
                <select name="" id="" className='focus:outline-none cursor-pointer hover:text-brand'>
                    <option value="" >Vehicles</option>
                    <option value="" >Model S</option>
                    <option value="" >Model 3</option>
                    <option value="" >Model X</option>
                    <option value="">Model Y</option>
                </select>
             </li>

             <li className='cursor-pointer hover:text-brand'>About us</li>
             <li className='cursor-pointer hover:text-brand'> Contact</li>
            
             <li>
                 <button
          onClick={handleLogout}
          className="w-full bg-brand text-white font-semibold py-2 px-4 rounded-md hover:bg-brand/90 transition-all cursor-pointer"
        >
          Logout
        </button>
             </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
