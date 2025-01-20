import React from 'react';

const FooterColumn = ({ title, items }) => {
  return (
    <div>
      <h4 className="font-bold text-lg mb-4 flex justify-center">{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2 hover:underline cursor-pointer flex justify-center">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
