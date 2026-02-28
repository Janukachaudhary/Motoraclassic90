import ninjaGreen from "../assets/bikes/ninja400/green.jpg";
import ninjaBlack from "../assets/bikes/ninja400/black.jpg";
import royalBronze from "../assets/bikes/royalEnfield/chromebronze.webp";
import royalBlack from "../assets/bikes/royalEnfield/black.jpg";
import royalGreen from "../assets/bikes/royalEnfield/green.jpg"
import royalRed from "../assets/bikes/royalEnfield/red.jpg";
import royalGungrey from "../assets/bikes/royalEnfield/gungrey.avif";
import dukeBlue from "../assets/bikes/duke390/blue.jpg";
import dukeOrange from "../assets/bikes/duke390/orange.jpg";
import hayabusaBlack from "../assets/bikes/hayabusa/black.jpg";
import triumpWine from "../assets/bikes/triump/wine.avif";
import harleyBlack from "../assets/bikes/harley/blaack.webp";
import bmwWhite from "../assets/bikes/bmw/white.jpg";

export const motorcycles = [
  {
    id: 1,
    name: "Kawasaki Ninja 400",
    description: "The ultimate sport bike for beginners and experts alike. Lightweight, agile, and powerful.",
    fullDescription: "The Kawasaki Ninja 400 has taken the sport bike world by storm. Featuring a 399cc parallel-twin engine, it delivers smooth power delivery and excellent fuel efficiency. The trellis frame provides exceptional handling, while the aggressive styling turns heads wherever you go. Perfect for both track days and city commuting.",
    image: ninjaGreen,
    year: 2024,
    engine: "399cc",
    power: "49 HP",
    price: "$5,499",
    category: "Sport",
    featured: true,
    colors: [
      { name: "Lime Green", hex: "#84cc16", image: ninjaGreen },
      { name: "Black", hex: "#1f2937", image: ninjaBlack },
    ],
    specs: {
      topSpeed: "180 km/h",
      weight: "366 lbs",
      fuelCapacity: "3.7 gallons",
      seatHeight: "30.9 inches",
      transmission: "6-speed"
    },
    features: [
      "ABS Brakes",
      "LED Lighting",
      "Slipper Clutch",
      "Digital Display",
      "Adjustable Suspension"
    ]
  },
  {
    id: 2,
    name: "Royal Enfield Classic 350",
    description: "Modern classic with vintage appeal, offering timeless design and reliable performance.",
    fullDescription: "The Royal Enfield Classic 350 brings retro styling into the modern era with its timeless design cues and dependable 349cc single-cylinder engine. The relaxed riding position, comfortable seat, and iconic teardrop fuel tank make it perfect for city commutes and weekend cruises alike. With its legendary reliability and easy maintenance, it's no wonder riders return to Royal Enfield generation after generation.",
    image: royalBronze,
    year: 2024,
    engine: "349cc",
    power: "20.2 HP",
    price: "$4,799",
    category: "Classic",
    featured: true,
    colors: [
      { name: "Chrome Bronze", hex: "#b45309", image: royalBronze },
      { name: "Midnight Black", hex: "#1f2937", image: royalBlack },
      { name: "Forest Green", hex: "#166534", image:  royalGreen},
      { name: "Redditch Red", hex: "#dc2626", image: royalRed },
      { name: "Gungrey", hex: "#4b5563", image: royalGungrey }
    ],
    specs: {
      topSpeed: "110 km/h",
      weight: "446 lbs",
      fuelCapacity: "3.7 gallons",
      seatHeight: "31.5 inches",
      transmission: "5-speed"
    },
    features: [
      "Single-Cylinder Engine",
      "Fuel Injection",
      "Double Cradle Frame",
      "Telescopic Front Fork",
      "Twin Shock Absorbers"
    ]
  },
  {
    id: 3,
    name: "Suzuki Hayabusa",
    description: "Legendary hypersport motorcycle known for extreme speed and aerodynamic design.",
    fullDescription: "The Suzuki Hayabusa is synonymous with pure speed and aerodynamic excellence. This legendary hyperbike features a powerful 1340cc inline-four engine that propels it to speeds exceeding 180 mph. Its sleek, wind-slicing bodywork and advanced electronics package including multiple riding modes, traction control, and quickshifter make it one of the most capable sport bikes ever created.",
    image: hayabusaBlack,
    year: 2024,
    engine: "1340cc",
    power: "190 HP",
    price: "$18,599",
    category: "Sport",
    featured: true,
    colors: [
      { name: "Metallic Black", hex: "#1f2937", image: hayabusaBlack },
    ],
    specs: {
      topSpeed: "186 mph",
      weight: "584 lbs",
      fuelCapacity: "5.3 gallons",
      seatHeight: "31.5 inches",
      transmission: "6-speed"
    },
    features: [
      "Suzuki Intelligent Brake System",
      "Traction Control",
      "Quick Shift System",
      "Ride-by-Wire Throttle",
      "Launch Control"
    ]
  },
  {
    id: 4,
    name: "KTM Duke 390",
    description: "Aggressive naked streetfighter with sharp handling and Austrian engineering.",
    fullDescription: "The KTM 390 Duke is a force to be reckoned with in the naked bike segment. Its 373cc single-cylinder engine delivers punchy power and torque, while the lightweight steel trellis frame provides razor-sharp handling. The aggressive styling, LED headlights, and modern TFT display make it look as fierce as it performs. Whether carving corners or dominating city streets, this Austrian arrow strikes with precision.",
    image: dukeBlue,
    year: 2024,
    engine: "373cc",
    power: "43 HP",
    price: "$5,799",
    category: "Sport",
    featured: true,
    colors: [
      { name: "Electronic Blue", hex: "#3b82f6", image: dukeBlue },
      { name: "Lava Orange", hex: "#f97316", image: dukeOrange },
    ],
    specs: {
      topSpeed: "167 km/h",
      weight: "372 lbs",
      fuelCapacity: "3.5 gallons",
      seatHeight: "32.7 inches",
      transmission: "6-speed"
    },
    features: [
      "TFT Display",
      "LED Headlights",
      "Ride-by-Wire",
      "Supermoto ABS",
      "Slipper Clutch"
    ]
  },
  {
    id: 5,
    name: "Triumph Bonneville T120",
    description: "Iconic British twin-cylinder motorcycle with timeless design.",
    fullDescription: "The Triumph Bonneville T120 represents the pinnacle of classic British motorcycling. Drawing inspiration from the legendary 1959 Bonneville, this modern classic features a 1200cc parallel-twin engine that delivers smooth, linear power. The meticulously crafted details—chrome accents, spoked wheels, and the iconic sculpted tank—pay homage to motorcycle history while incorporating contemporary performance and technology.",
    image: triumpWine,
    year: 2024,
    engine: "1200cc",
    power: "79 HP",
    price: "$12,500",
    category: "Classic",
    featured: false,
    colors: [
      { name: "Vintage Wine", hex: "#7f1d1d", image: triumpWine },
    ],
    specs: {
      topSpeed: "130 mph",
      weight: "520 lbs",
      fuelCapacity: "3.8 gallons",
      seatHeight: "31.1 inches",
      transmission: "6-speed"
    },
    features: [
      "Ride-by-Wire",
      "Traction Control",
      "ABS",
      "LED Lighting",
      "Immobilizer"
    ]
  },
  {
    id: 7,
    name: "Harley-Davidson Sportster",
    description: "American V-twin legend with unmistakable character.",
    fullDescription: "The Harley-Davidson Sportster is an American icon that has defined the custom cruiser segment for decades. Born in 1957, the Sportster line has evolved while maintaining its unmistakable V-twin character and iconic silhouette. The 883cc engine provides punchy low-end torque, while the nimble chassis allows for confident handling. It's the perfect canvas for customization and has been the foundation for countless cafe racers, bobbers, and street trackers.",
    image: harleyBlack,
    year: 2024,
    engine: "883cc",
    power: "50 HP",
    price: "$18,200",
    category: "Cruiser",
    featured: false,
    colors: [
      { name: "Vivid Black", hex: "#1f2937", image: harleyBlack },
    ],
    specs: {
      topSpeed: "115 mph",
      weight: "564 lbs",
      fuelCapacity: "3.3 gallons",
      seatHeight: "29.9 inches",
      transmission: "5-speed"
    },
    features: [
      "Evolution V-Twin Engine",
      "ABS",
      "LED Lighting",
      "Customizable Options",
      "Classic Styling"
    ]
  },
];
export const categories = ["All", "Classic", "Sport", "Cruiser", "Touring"];