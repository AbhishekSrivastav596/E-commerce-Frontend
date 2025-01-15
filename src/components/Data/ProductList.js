import React from "react";
import { productData } from "./ProductData"; 

const ProductList = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-800 font-bold">{product.price}</span>
                  <button className="bg-orange-500 text-white px-2 py-2 text-sm rounded-xl transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
