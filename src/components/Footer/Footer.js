import React from 'react';
import FooterColumn from './FooterColumn';
import FooterBottom from './FooterBottom';

const Footer = () => {
  const columnData = [
    {
      title: 'Get to Know Us',
      items: ['About Us', 'Careers', 'Press Releases', 'Amazon Science'],
    },
    {
      title: 'Make Money with Us',
      items: ['Sell on Amazon', 'Affiliate Marketing', 'Fulfillment Services'],
    },
    {
      title: 'Connect with Us',
      items: ['Facebook', 'Twitter', 'Instagram'],
    },
    {
      title: 'Let Us Help You',
      items: ['Your Account', 'Returns & Refunds', 'Help'],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
    <div className="flex justify-center p-4">
      <button>
        <div className="text-center">Back to top</div>
      </button>
    </div>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#232f3e]">
        {columnData.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
      </div>
      <FooterBottom />
    </div>
  </footer>
  
  );
};

export default Footer;
