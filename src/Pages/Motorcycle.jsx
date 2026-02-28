import React from "react";
import { motorcycles } from "../assets/data/motorcycles";
import MotorcycleCard from "../Components/MotorcycleCard";
import { useCart } from "../assets/CartContext";
import ninjaGreen from "../assets/bikes/ninja400/green.jpg";
import royalBronze from "../assets/bikes/royalEnfield/chromebronze.webp";
import dukeBlue from "../assets/bikes/duke390/blue.jpg";
import hayabusaBlack from "../assets/bikes/hayabusa/black.jpg";
import triumpWine from "../assets/bikes/triump/wine.avif";
import hondaBlack from "../assets/bikes/honda/black.jpg";
import harleyBlack from "../assets/bikes/harley/blaack.webp";
import bmwWhite from "../assets/bikes/bmw/white.jpg"


export default function Motorcycle() {

  const [selectedBike, setSelectedBike] = React.useState(null);
    const closeModel = () => setSelectedImage(null);
  const motorcycles = [ninjaGreen, royalBronze, dukeBlue, hayabusaBlack, triumpWine, hondaBlack, harleyBlack, bmwWhite]

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-6">
        {motorcycles.map((bike) => (
          <div key={bike.id} onClick={() => setSelectedBike(bike)}>
            <MotorcycleCard motorcycle={bike}/>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedBike && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          onClick={() => setSelectedBike(null)}
        >
          <div
            className="bg-white p-6 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedBike.image}
              className="w-[400px] h-[300px] object-contain"
            />
            <h2 className="text-xl font-bold mt-3">{selectedBike.name}</h2>
          </div>
        </div>
      )}
    </>
  );
}