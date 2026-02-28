import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../assets/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  
  const total = getCartTotal();
  const tax = total * 0.08; // 8% tax
  const shipping = cartItems.length > 0 ? 99 : 0; // $99 shipping
  const grandTotal = total + tax + shipping;

  const handleQuantityChange = (itemId, change) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + change);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-gray-300 text-lg">
            Review your selected motorcycles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Start shopping and add some motorcycles to your cart!
            </p>
            <Link
              to="/collection"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              <span>Browse Collection</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          // Cart with Items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  Cart Items ({cartItems.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-semibold"
                >
                  Clear Cart
                </button>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6"
                >
                  {/* Image */}
                  <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {item.year} • {item.engine} • {item.power}
                        </p>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            item.category === "Sport"
                              ? "bg-red-100 text-red-700"
                              : item.category === "Classic"
                              ? "bg-blue-100 text-blue-700"
                              : item.category === "Cruiser"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 p-2"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-lg font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-500">
                          {item.price}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-600">
                            ${(parseFloat(item.price.replace(/[$,]/g, "")) * item.quantity).toLocaleString()} total
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (8%)</span>
                    <span className="font-semibold">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-orange-500">
                        ${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/collection"
                  className="block text-center text-orange-500 hover:text-orange-600 mt-4 font-semibold"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
