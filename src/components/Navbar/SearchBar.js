import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center ">
    <select className="py-2 border border-gray-300 text-gray-500 bg-gray-100 rounded-l-md">
      <option value="all">All</option>
      <option value="electronics">Electronics</option>
      <option value="books">Books</option>
      <option value="fashion">Fashion</option>
    </select>
    <input
      type="text"
      className="py-2 border-none outline-none flex-1 pl-60 "
      placeholder="Search Amazon.in"
    />
    <button className="bg-yellow-400 border-none py-2 px-3 rounded-r-md cursor-pointer">
      🔍
    </button>
  </div>
  
  

  
  );
}

export default SearchBar;
