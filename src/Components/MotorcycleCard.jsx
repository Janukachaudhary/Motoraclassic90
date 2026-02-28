import { Calendar, Gauge, Zap, DollarSign, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../assets/CartContext";
import { useNavigate } from "react-router-dom";

export default function MotorcycleCard({ 
  motorcycle, 
  featured = false, 
  onCardClick 
}) {
  const { addToCart, isInCart } = useCart();
  const navigate = useNavigate();

  const inCart = isInCart(motorcycle.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(motorcycle);
  };

  const handleViewMore = (e) => {
    e.stopPropagation(); // card click prevent
    navigate(`/motorcycle/${motorcycle.id}`);
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
        featured ? "ring-2 ring-orange-500" : ""
      }`}
      onClick={() => onCardClick && onCardClick(motorcycle)}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={motorcycle.image}
          alt={motorcycle.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {motorcycle.featured && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            Featured
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {motorcycle.year}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">
          {motorcycle.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {motorcycle.description}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
            <Gauge className="w-4 h-4 text-orange-500" />
            <span>{motorcycle.engine}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
            <Zap className="w-4 h-4 text-orange-500" />
            <span>{motorcycle.power}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
            <Calendar className="w-4 h-4 text-orange-500" />
            <span>{motorcycle.year}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
            <DollarSign className="w-4 h-4 text-orange-500" />
            <span>{motorcycle.price}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between pt-4 border-t">

          {/* Category */}
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            motorcycle.category === "Sport" ? "bg-red-100 text-red-700" :
            motorcycle.category === "Classic" ? "bg-blue-100 text-blue-700" :
            motorcycle.category === "Cruiser" ? "bg-purple-100 text-purple-700" :
            motorcycle.category === "Adventure" ? "bg-green-100 text-green-700" :
            "bg-gray-100 text-gray-700"
          }`}>
            {motorcycle.category}
          </span>

          <div className="flex gap-2">
            
            {/* View More */}
            <button
              onClick={handleViewMore}
              className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg"
            >
              View More
            </button>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                inCart
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg"
              }`}
              disabled={inCart}
            >
              {inCart ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="text-sm">In Cart</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm">Add</span>
                </>
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}