import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem, changeQuantity, removeItem } from "../slices/cartSlice";

function CartPage() {
  const cart = useSelector(state => state.cart.items); 
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleItem(id));  
  }

  const handleDecrement = (id) => {
    dispatch(changeQuantity({ id, increment: -1 }));  
  }

  const handleIncrement = (id) => {
    dispatch(changeQuantity({ id, increment: 1 }));  
  }

  const handleRemove = (id) => {
    dispatch(removeItem(id)); 
  }
  const calculateSubtotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace('₹', '').replace(',', '').trim());
        return total + price * item.quantity;
      }, 0)
      .toFixed(1); 
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {cart.map((product) => (
              <div key={product.id} className="flex border-b border-gray-200 py-4 items-center">
                <input
                  type="checkbox"
                  className="mr-4 w-5 h-5 accent-yellow-500"
                  checked={product.selected}
                  onChange={() => handleToggle(product.id)}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 object-cover rounded"
                />
                <div className="flex-grow px-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-sm text-gray-500 mt-2">Eligible for FREE Shipping</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>

                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>
                <span className="ml-3">{product.price}</span>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 bg-gray-100 shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Subtotal</h2>
            <p className="text-gray-700">
              Subtotal ({cart.length} item{cart.length > 1 ? 's' : ''}):{' '}
              <span className="font-bold">₹{calculateSubtotal()}</span>
            </p>
            <button className="bg-yellow-500 text-black font-bold w-full py-2 rounded mt-4 hover:bg-yellow-600">
              Proceed to Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
