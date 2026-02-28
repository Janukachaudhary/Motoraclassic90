import { useCart } from "../assets/CartContext";

export default function Cart() {
  const { cartItems } = useCart(); // <-- cartItems comes from context

  // ✅ Place isInCart here, after cartItems is available
  const isInCart = (id, color) => {
    return cartItems.some(
      (item) => item.id === id && item.selectedColor === color
    );
  };

  // Example usage
  console.log(isInCart(1, "green"));

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          {item.name} - {item.selectedColor}
        </div>
      ))}
    </div>
  );
}