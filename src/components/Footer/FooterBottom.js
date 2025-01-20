import React from 'react';

const FooterBottom = () => {
  return (
    <div className="mt-8 border-t border-gray-700 pt-4 text-center">
      <div className="mb-4">
        <span className="font-bold text-lg">Amazon</span>
      </div>
      <div className="flex justify-center space-x-4 p-4">
        <a href="#" className="hover:underline text-sm">
          Conditions of Use
        </a>
        <a href="#" className="hover:underline text-sm">
          Privacy Notice
        </a>
        <a href="#" className="hover:underline text-sm">
          Interest-Based Ads
        </a>
      </div>

    </div>
  );
};

export default FooterBottom;
