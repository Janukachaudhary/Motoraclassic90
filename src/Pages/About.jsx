import { Target, Heart, Users, Wrench } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "30+", icon: Target },
    { label: "Motorcycles Restored", value: "500+", icon: Wrench },
    { label: "Happy Customers", value: "1000+", icon: Heart },
    { label: "Expert Mechanics", value: "15", icon: Users },
  ];

  const values = [
    {
      title: "Authenticity",
      description: "We use only genuine parts and authentic restoration techniques to maintain the original character of each motorcycle."
    },
    {
      title: "Quality",
      description: "Every motorcycle undergoes rigorous inspection and restoration to meet our highest quality standards."
    },
    {
      title: "Passion",
      description: "Our team shares a deep passion for classic motorcycles and the history they represent."
    },
    {
      title: "Expertise",
      description: "Decades of combined experience in restoring and maintaining vintage motorcycles."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1762604462279-dc3216efe59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwbWVjaGFuaWMlMjB3b3JraW5nJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzcxOTUyODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Preserving motorcycle history since 1990
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              MoToRaclassic90 was founded in 1990 by a group of passionate motorcycle enthusiasts 
              who recognized the importance of preserving classic motorcycles for future generations. 
              What started as a small garage operation has grown into one of the most respected 
              classic motorcycle restoration shops in the country.
            </p>
            <p>
              Our journey began with a simple belief: every classic motorcycle has a story to tell, 
              and it's our mission to ensure these stories continue to be told through meticulous 
              restoration and preservation. Over the past three decades, we've had the privilege of 
              working on hundreds of iconic motorcycles from the golden era of motorcycling.
            </p>
            <p>
              Today, we continue to honor the legacy of these magnificent machines by combining 
              traditional restoration techniques with modern expertise. Our team of skilled mechanics 
              and craftsmen work tirelessly to bring these classics back to their former glory, 
              ensuring that the art and engineering of vintage motorcycles lives on.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-orange-500">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
