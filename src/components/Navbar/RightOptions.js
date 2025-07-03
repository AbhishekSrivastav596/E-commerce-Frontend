import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
import { useSelector } from "react-redux";
import cartLogo from "./cart (1).png";

function RightOptions({setIsAuthenticated}) {
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.currentUser);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();  
  

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
    setIsAuthenticated(false);
  };

  return (
    <div className="flex items-center gap-5 mr-[5px]">
      <div className="flex items-center flex-col mr-[15px] relative group">
        <div className="font-bold">Hello, {user?.username || "Guest User"}</div>
        <div className="font-bold cursor-pointer">Account & Lists</div>
        {user && (
        <div className="absolute top-full left-0 w-[180px] bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start py-4 px-4 rounded-lg z-50">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mb-3 text-left"
            onClick={handleLogout}
          >
            Logout
          </button>
          <Link to="/profile">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 text-left">
              Go to Profile
            </button>
          </Link>
        </div> 
  )}
      </div>
      <div className="flex items-center flex-col mr-[15px]">
        <label>Returns</label>
        <div className="font-bold"> & Orders</div>
      </div>
      <div className="flex items-center relative">
        <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalQuantity}
        </span>
        <Link to="/cart">
          <img src={cartLogo} alt="Cart" role="img" aria-label="cart" className="text-2xl" />
        </Link>
      </div>
      <span className="text-white font-bold">Cart</span>
    </div>
  );
}

export default RightOptions;
