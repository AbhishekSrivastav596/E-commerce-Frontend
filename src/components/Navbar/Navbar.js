import React from "react";
import LocationAndLogo from "./LoactionAndLogo";
import SearchBar from "./SearchBar";
import RightOptions from "./RightOptions";
import BelowNav from "./BelowNav";

function Navbar({setIsAuthenticated}) {
  return (
    <>
    <div className="flex items-center justify-between bg-gray-900 text-white p-2.5 sticky top-0 z-50">
      <LocationAndLogo />
      <SearchBar />
      <RightOptions setIsAuthenticated={setIsAuthenticated}/>
    </div>
    <div className="flex items-center justify-between bg-gray-800 text-white p-2.5 ">
      <BelowNav/>
    </div>

    </>
    
    
    
  );
}

export default Navbar;
