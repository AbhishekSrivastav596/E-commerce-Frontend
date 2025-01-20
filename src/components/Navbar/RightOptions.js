import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import cartLogo from "./cart (1).png"



function RightOptions() {
  const cart = useSelector((state)=> state.cart.items);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex items-center gap-5 mr-[5px]">
  <div className="flex items-center flex-col mr-[15px]">
    <label>Hello, Abhishek</label>
    <div className="font-bold">Account & Lists</div>
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
