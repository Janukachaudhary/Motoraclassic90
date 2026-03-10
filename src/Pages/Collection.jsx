import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { motorcycles, categories } from "../Data/Motorcycles";
import MotorcycleCard from "../Components/MotorcycleCard";

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter motorcycles based on category and search query
  const filteredMotorcycles = motorcycles.filter((bike) => {
    const matchesCategory = selectedCategory === "All" || bike.category === selectedCategory;
    const matchesSearch = bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bike.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Collection</h1>
          <p className="text-gray-300 text-lg">
            Browse through our carefully curated selection of classic motorcycles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search motorcycles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center space-x-4 flex-wrap gap-2">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                } border border-gray-300`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredMotorcycles.length > 0 
              ? `Showing ${filteredMotorcycles.length} ${filteredMotorcycles.length === 1 ? 'motorcycle' : 'motorcycles'}`
              : 'No motorcycles found'
            }
          </p>
        </div>

        {/* Motorcycle Grid */}
        {filteredMotorcycles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMotorcycles.map((bike) => (
              <MotorcycleCard key={bike.id} motorcycle={bike} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">
              No motorcycles match your search criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-orange-500 hover:text-orange-600 underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
