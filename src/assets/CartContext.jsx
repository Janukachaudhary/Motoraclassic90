import { createContext, useContext, useState, useEffect } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom hook to use cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

// Cart Provider Component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("motorcycleCart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("motorcycleCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (motorcycle) => {
    setCartItems((prevItems) => {
      // Check if item already exists
      const existingItem = prevItems.find((item) => item.id === motorcycle.id);
      
      if (existingItem) {
        // Increase quantity
        return prevItems.map((item) =>
          item.id === motorcycle.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...motorcycle, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (motorcycleId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== motorcycleId)
    );
  };

  // Update quantity
  const updateQuantity = (motorcycleId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(motorcycleId);
      return;
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === motorcycleId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[$,]/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  // Get total items count
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Check if item is in cart
  const isInCart = (motorcycleId) => {
    return cartItems.some((item) => item.id === motorcycleId);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
