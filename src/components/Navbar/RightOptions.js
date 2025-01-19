import React from "react";
import { Link } from 'react-router-dom';


function RightOptions() {
  return (
    <div className="flex items-center gap-5 mr-[15px]">
  <div className="flex items-center flex-col mr-[20px]">
    <label>Hello, Abhishek</label>
    <div className="font-bold">Account & Lists</div>
  </div>
  <div className="flex items-center flex-col mr-[20px]">
    <label>Returns</label>
    <div className="font-bold"> & Orders</div>
  </div>
  <div className="flex items-center relative">
  <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
    5
  </div>
  <span role="img" aria-label="cart" className="text-2xl">🛒</span>
</div>
<Link to="/cart" className="text-white font-bold">Cart</Link>

</div>
  );
}

export default RightOptions;
