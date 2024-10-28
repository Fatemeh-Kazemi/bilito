import destination1 from "../../assets/images/1-1.png";
import destination2 from "../../assets/images/1-2.png";
import destination3 from "../../assets/images/3-3.png";
import destination4 from "../../assets/images/4-4.png";

import React, { useState } from "react";

const flightsData = [
  {
    id: 1,
    from: "تهران",
    to: "مشهد",
    price: "1,200,000 تومان",
    image: destination1,
  },
  {
    id: 2,
    from: "تهران",
    to: "شیراز",
    price: "1,500,000 تومان",
    image: destination2,
  },
  {
    id: 3,
    from: "تهران",
    to: "کیش",
    price: "2,000,000 تومان",
    image: destination3,
  },
  {
    id: 4,
    from: "مشهد",
    to: "شیراز",
    price: "1,300,000 تومان",
    image: destination4,
  },
];

const HighFly = () => {
  const [flights, setFlights] = useState([]);

  const handleCityClick = (city) => {
    const filteredFlights = flightsData.filter(
      (flight) => flight.from === city || flight.to === city
    );
    setFlights(filteredFlights);
  };

  return (
    <div className="p-5">
      <div className="flex gap-4 mb-5">
        {["تهران", "مشهد", "شیراز", "کیش"].map((city) => (
          <button
            key={city}
            onClick={() => handleCityClick(city)}
            className="hover:bg-blue-200 hover:text-primary hover:border-none py-1 px-4 border rounded"
          >
            {city}
          </button>
        ))}
      </div>

      <div className="flex gap-4 text-center">
        {flights.map((flight) => (
          <div key={flight.id} className="flex border rounded-md overflow-hidden">
            <div style={{width: "80px", height: "82px"}}>
              <img
                src={flight.image}
                alt={`${flight.from} to ${flight.to}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-3/4 flex flex-col justify-between p-2 text-center">
              <div className="flex items-center">
                <span>{flight.from}</span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1301 4.44994L9.12006 9.11994L8.68006 10.1599C8.60006 10.3199 8.39006 10.4599 8.21006 10.4599L5.15006 10.4599C4.19006 10.4599 3.05006 11.1699 2.61006 12.0299C2.46006 12.3299 2.46006 12.6899 2.61006 12.9899C3.05006 13.8399 4.20006 14.5499 5.16006 14.5499L8.22006 14.5499C8.40006 14.5499 8.61006 14.6899 8.69006 14.8499L11.1401 20.5499C11.4001 21.1799 12.1901 21.6899 12.8701 21.6899L14.1901 21.6899C15.0401 21.6899 15.4601 21.0499 15.1201 20.2599L12.9601 15.2499C12.7901 14.8599 13.0001 14.5399 13.4301 14.5399L14.5401 14.5399L16.3401 14.5399C16.5701 14.5399 16.9001 14.6699 17.0601 14.8299L19.3901 17.1499C19.6301 17.3899 20.1001 17.4999 20.4401 17.3899L21.8001 16.9399C22.3901 16.7599 22.6701 16.0899 22.3901 15.5399L20.3901 13.1599C20.0801 12.7999 20.0801 12.2099 20.3901 11.8499L22.3901 9.46994C22.6601 8.91994 22.3901 8.24994 21.8001 8.04994L20.4401 7.59994C20.1101 7.48994 19.6301 7.59994 19.3901 7.83994L17.0601 10.1599C16.9001 10.3299 16.5701 10.4599 16.3401 10.4599L13.4301 10.4599C13.0001 10.4599 12.8001 10.1499 12.9601 9.74994L15.1201 4.73994C15.4601 3.94994 15.0401 3.30994 14.1901 3.30994L12.8701 3.30994C12.1901 3.30994 11.4001 3.81994 11.1301 4.44994Z"
                    fill="#606060"
                  />
                </svg>

                <span>{flight.to}</span>
              </div>
              <div className="border-t-2">
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
