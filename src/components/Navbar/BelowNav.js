import React from "react";
import menuIcon from "./menu.png"

const BelowNav = () => {
  const links = [
    "Gift Cards",
    "AmazonBasics",
    "MX Player",
    "Sell",
    "Gift Ideas",
    "Buy Again",
    "Browsing History",
    "Amazon's Prime Offers",
    "Today's Deals",
    "Home Improvement",
    "Amazon Pay",
  ];

  return (
    <div className="bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto flex items-center gap-3 overflow-x-auto whitespace-nowrap">
        <button className="flex items-center space-x-1 font-bold hover:opacity-80">
          <span className="material-icons"></span>
          <span><img src={menuIcon}/></span>
        </button>

        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="hover:underline text-sm md:text-base whitespace-nowrap"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BelowNav;
