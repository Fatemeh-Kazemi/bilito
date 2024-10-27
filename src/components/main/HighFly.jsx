import React, { useState } from 'react';

const flightsData = [
  { id: 1, from: 'تهران', to: 'مشهد', price: '1,200,000 تومان', image: 'image1.jpg' },
  { id: 2, from: 'تهران', to: 'شیراز', price: '1,500,000 تومان', image: 'image2.jpg' },
  { id: 3, from: 'تهران', to: 'کیش', price: '2,000,000 تومان', image: 'image3.jpg' },
  { id: 4, from: 'مشهد', to: 'شیراز', price: '1,300,000 تومان', image: 'image4.jpg' },
];

const HighFly = () => {
  const [flights, setFlights] = useState([]);

  const handleCityClick = (city) => {
    const filteredFlights = flightsData.filter(flight => flight.from === city || flight.to === city);
    setFlights(filteredFlights);
  };

  return (
    <div className="p-5">
      <div className="flex space-x-4 mb-5">
        {['تهران', 'مشهد', 'شیراز', 'کیش'].map(city => (
          <button
            key={city}
            onClick={() => handleCityClick(city)}
            className="bg-blue-200 text-blue-600 p-2 rounded hover:bg-blue-300"
          >
            {city}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {flights.map(flight => (
          <div key={flight.id} className="flex border p-4">
            <div className="w-1/5">
              <img src={flight.image} alt={`${flight.from} to ${flight.to}`} className="w-full h-full object-cover" />
            </div>
            <div className="w-4/5 flex flex-col justify-between">
              <div className="flex items-center">
                <span>{flight.from}</span>
                <img src="plane-icon.png" alt="plane" className="mx-2" />
                <span>{flight.to}</span>
              </div>
              <div>
                <span>{flight.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighFly;
