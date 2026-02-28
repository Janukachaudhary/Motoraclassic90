import { Link } from "react-router";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import { motorcycles } from "../data/motorcycles";
import MotorcycleCard from "../Components/MotorcycleCard"

export default function Home() {
  const featuredBikes = motorcycles.filter((bike) => bike.featured);

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Carefully restored classic motorcycles with authentic parts"
    },
    {
      icon: Clock,
      title: "Timeless Collection",
      description: "Motorcycles from the golden era of 1940s-1970s"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "30+ years of experience in classic motorcycle restoration"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            MoToRaclassic90
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover the finest collection of classic motorcycles from the golden era
          </p>
          <Link
            to="/collection"
            className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Motorcycles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Motorcycles</h2>
            <Link
              to="/collection"
              className="text-orange-500 hover:text-orange-600 flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBikes.map((bike) => (
              <MotorcycleCard key={bike.id} motorcycle={bike} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Classic Journey Today
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Whether you're a collector or enthusiast, we have the perfect classic motorcycle for you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
