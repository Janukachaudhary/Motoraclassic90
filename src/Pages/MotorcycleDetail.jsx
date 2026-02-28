import { useParams } from "react-router-dom";
import { useState } from "react";
import { motorcycles } from "../data/motorcycles";
import { useCart } from "../assets/CartContext";

export default function MotorcycleDetail() {
  const { id } = useParams();
  const { addToCart, isInCart } = useCart();

  const motorcycle = motorcycles.find(
    (bike) => bike.id === parseInt(id)
  );

  const [selectedColor, setSelectedColor] = useState(
    motorcycle?.colors[0]
  );

  if (!motorcycle) {
    return <h2 className="p-6 text-xl">Motorcycle Not Found</h2>;
  }

  // ✅ Check same bike + same color
  const alreadyInCart = isInCart(
    motorcycle.id,
    selectedColor.name
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Image Section */}
        <div>
          <img
            src={selectedColor.image}
            alt={motorcycle.name}
            className="w-full h-96 object-contain bg-gray-100 rounded-xl shadow-lg"
          />

          {/* Color Options */}
          <div className="flex gap-3 mt-4">
            {motorcycle.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor.name === color.name
                    ? "border-black scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color.hex }}
              ></button>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            {motorcycle.name}
          </h1>

          <p className="text-gray-600 mb-4">
            {motorcycle.fullDescription}
          </p>

          <p className="text-2xl font-semibold mb-4">
            Rs. {motorcycle.price}
          </p>

          {/* Add to Cart Button */}
          <div className="mb-6">
            <button
              onClick={() =>
                addToCart({
                  ...motorcycle,
                  selectedColor: selectedColor.name,
                  image: selectedColor.image
                })
              }
              disabled={alreadyInCart}
              className={`px-6 py-3 rounded-lg text-white transition ${
                alreadyInCart
                  ? "bg-green-500 cursor-default"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {alreadyInCart
                ? "Already in Cart"
                : `Add ${selectedColor.name} to Cart`}
            </button>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div><strong>Year:</strong> {motorcycle.year}</div>
            <div><strong>Engine:</strong> {motorcycle.engine}</div>
            <div><strong>Power:</strong> {motorcycle.power}</div>
            <div><strong>Category:</strong> {motorcycle.category}</div>
          </div>

          {/* Specifications */}
          <h2 className="text-xl font-semibold mb-2">
            Specifications
          </h2>
          <ul className="space-y-1 mb-6">
            <li>Top Speed: {motorcycle.specs.topSpeed}</li>
            <li>Weight: {motorcycle.specs.weight}</li>
            <li>Fuel Capacity: {motorcycle.specs.fuelCapacity}</li>
            <li>Seat Height: {motorcycle.specs.seatHeight}</li>
            <li>Transmission: {motorcycle.specs.transmission}</li>
          </ul>

          {/* Features */}
          <h2 className="text-xl font-semibold mb-2">
            Features
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {motorcycle.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}