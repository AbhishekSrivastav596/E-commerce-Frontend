import React from "react";

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
  <div className="flex items-center ">
    <span role="img" aria-label="cart">🛒</span>
    <strong>Cart</strong>
  </div>
</div>
  );
}

export default RightOptions;
