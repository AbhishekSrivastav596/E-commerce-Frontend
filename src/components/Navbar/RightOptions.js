import React from "react";

function RightOptions() {
  return (
    <div className="flex items-center gap-5 mr-[15px]">
  <div className="flex items-center flex-col mr-[20px]">
    <div>Hello, Abhishek</div>
    <div className="font-bold mt-1">Account & Lists</div>
  </div>
  <div className="flex items-center flex-col mr-[20px]">
    <div>Returns</div>
    <div className="font-bold mt-1"> & Orders</div>
  </div>
  <div className="flex items-center mr-[20px]">
    <span role="img" aria-label="cart">🛒</span>
    <strong>Cart</strong>
  </div>
</div>
  );
}

export default RightOptions;
