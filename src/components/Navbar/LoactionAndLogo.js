import React from "react";
import amazonLogo from './amazonimage.jpg'
import { Link } from "react-router-dom";

function LocationAndLogo() {
  return (
    <div className="flex items-center">
      <Link to="/">
      <img
        src={amazonLogo} 
        alt="Amazon Logo"
        className="h-10 mr-2.5"
      />
      </Link>
     <div className="flex flex-col ">
  <span className="text-xs text-gray-400">Deliver to Abhishek</span>
  <strong className="text-sm text-white">Rampur 244901</strong>
</div>
    </div>
  );
}

export default LocationAndLogo;
