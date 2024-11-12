import React, { useState } from "react";

const ResultFlightFilter = (get) => {
  console.log("sakxmlasmc;as0", get)
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [departureTime, setDepartureTime] = useState([0, 24]);
  const [airlines, setAirlines] = useState([]);
  const [stops, setStops] = useState("");
  const [airports, setAirports] = useState([]);
  const [flightType, setFlightType] = useState([]);
  const [isOpen, setIsOpen] = useState({
    price: true,
    time: true,
    airlines: true,
    stops: true,
    airports: true,
    flightType: true,
  });

  const toggleFilter = (filter) => {
    setIsOpen({ ...isOpen, [filter]: !isOpen[filter] });
  };

  return (
    <div className="container mx-auto flex gap-5 p-10 m-5 font-normal">
      <div className="w-1/3 rounded-lg bg-gray-100 p-4 border-l text-right flex flex-col gap-5">
        <div className="flex flex-col pb-2 border-b-[1px]">
          <h2
            className="font-bold cursor-pointer flex justify-between"
            onClick={() => toggleFilter("price")}
          >
            فیلتر قیمت
            {isOpen.price ? (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.28 11.0333C13.1533 11.0333 13.0267 10.9867 12.9267 10.8867L8.58001 6.54001C8.26001 6.22001 7.74001 6.22001 7.42001 6.54001L3.07335 10.8867C2.88001 11.08 2.56001 11.08 2.36668 10.8867C2.17335 10.6933 2.17335 10.3733 2.36668 10.18L6.71335 5.83334C7.42001 5.12668 8.57335 5.12668 9.28668 5.83334L13.6333 10.18C13.8267 10.3733 13.8267 10.6933 13.6333 10.8867C13.5333 10.98 13.4067 11.0333 13.28 11.0333Z"
                  fill="#606060"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.31999C2.17335 6.12666 2.17335 5.80666 2.36668 5.61332C2.56001 5.41999 2.88001 5.41999 3.07335 5.61332L7.42001 9.95999C7.74001 10.28 8.26001 10.28 8.58001 9.95999L12.9267 5.61332C13.12 5.41999 13.44 5.41999 13.6333 5.61332C13.8267 5.80666 13.8267 6.12666 13.6333 6.31999L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z"
                  fill="#404040"
                />
              </svg>
            )}
          </h2>
          {isOpen.price && (
            <>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
              />
              <p>
                مقدار: {priceRange[0]} - {priceRange[1]}
              </p>
            </>
          )}
        </div> 
        <div className="flex flex-col pb-2 border-b-[1px]">
          <h2
            className="font-bold cursor-pointer flex justify-between"
            onClick={() => toggleFilter("time")}
          >
            فیلتر ساعت حرکت
            {isOpen.price ? (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.28 11.0333C13.1533 11.0333 13.0267 10.9867 12.9267 10.8867L8.58001 6.54001C8.26001 6.22001 7.74001 6.22001 7.42001 6.54001L3.07335 10.8867C2.88001 11.08 2.56001 11.08 2.36668 10.8867C2.17335 10.6933 2.17335 10.3733 2.36668 10.18L6.71335 5.83334C7.42001 5.12668 8.57335 5.12668 9.28668 5.83334L13.6333 10.18C13.8267 10.3733 13.8267 10.6933 13.6333 10.8867C13.5333 10.98 13.4067 11.0333 13.28 11.0333Z"
                  fill="#606060"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.31999C2.17335 6.12666 2.17335 5.80666 2.36668 5.61332C2.56001 5.41999 2.88001 5.41999 3.07335 5.61332L7.42001 9.95999C7.74001 10.28 8.26001 10.28 8.58001 9.95999L12.9267 5.61332C13.12 5.41999 13.44 5.41999 13.6333 5.61332C13.8267 5.80666 13.8267 6.12666 13.6333 6.31999L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z"
                  fill="#404040"
                />
              </svg>
            )}
          </h2>
          {isOpen.time && (
            <>
              <input
                type="range"
                min="0"
                max="24"
                value={departureTime[1]}
                onChange={(e) =>
                  setDepartureTime([departureTime[0], e.target.value])
                }
              />
              <p>
                مقدار: {departureTime[0]} - {departureTime[1]}
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col pb-2 border-b-[1px]">
          <h2
            className="font-bold cursor-pointer flex justify-between"
            onClick={() => toggleFilter("airlines")}
          >
            فیلتر شرکت هواپیمایی
            {isOpen.price ? (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.28 11.0333C13.1533 11.0333 13.0267 10.9867 12.9267 10.8867L8.58001 6.54001C8.26001 6.22001 7.74001 6.22001 7.42001 6.54001L3.07335 10.8867C2.88001 11.08 2.56001 11.08 2.36668 10.8867C2.17335 10.6933 2.17335 10.3733 2.36668 10.18L6.71335 5.83334C7.42001 5.12668 8.57335 5.12668 9.28668 5.83334L13.6333 10.18C13.8267 10.3733 13.8267 10.6933 13.6333 10.8867C13.5333 10.98 13.4067 11.0333 13.28 11.0333Z"
                  fill="#606060"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.31999C2.17335 6.12666 2.17335 5.80666 2.36668 5.61332C2.56001 5.41999 2.88001 5.41999 3.07335 5.61332L7.42001 9.95999C7.74001 10.28 8.26001 10.28 8.58001 9.95999L12.9267 5.61332C13.12 5.41999 13.44 5.41999 13.6333 5.61332C13.8267 5.80666 13.8267 6.12666 13.6333 6.31999L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z"
                  fill="#404040"
                />
              </svg>
            )}
          </h2>
          {isOpen.airlines && (
            <>
              <label>
                <input
                  type="checkbox"
                  value="ایران ایر"
                  onChange={(e) => setAirlines([...airlines, e.target.value])}
                />{" "}
                ایران ایر
              </label>
              <label>
                <input
                  type="checkbox"
                  value="ماهان"
                  onChange={(e) => setAirlines([...airlines, e.target.value])}
                />{" "}
                ماهان
              </label>
            </>
          )}
        </div>
        <div className="flex flex-col pb-2 border-b-[1px]">
          <h2
            className="font-bold cursor-pointer flex justify-between"
            onClick={() => toggleFilter("stops")}
          >
            فیلتر تعداد توقف
            {isOpen.price ? (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.28 11.0333C13.1533 11.0333 13.0267 10.9867 12.9267 10.8867L8.58001 6.54001C8.26001 6.22001 7.74001 6.22001 7.42001 6.54001L3.07335 10.8867C2.88001 11.08 2.56001 11.08 2.36668 10.8867C2.17335 10.6933 2.17335 10.3733 2.36668 10.18L6.71335 5.83334C7.42001 5.12668 8.57335 5.12668 9.28668 5.83334L13.6333 10.18C13.8267 10.3733 13.8267 10.6933 13.6333 10.8867C13.5333 10.98 13.4067 11.0333 13.28 11.0333Z"
                  fill="#606060"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.31999C2.17335 6.12666 2.17335 5.80666 2.36668 5.61332C2.56001 5.41999 2.88001 5.41999 3.07335 5.61332L7.42001 9.95999C7.74001 10.28 8.26001 10.28 8.58001 9.95999L12.9267 5.61332C13.12 5.41999 13.44 5.41999 13.6333 5.61332C13.8267 5.80666 13.8267 6.12666 13.6333 6.31999L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z"
                  fill="#404040"
                />
              </svg>
            )}
          </h2>
          {isOpen.stops && (
            <>
              <label>
                <input
                  type="radio"
                  name="stops"
                  value="مستقیم"
                  onChange={(e) => setStops(e.target.value)}
                />{" "}
                مستقیم
              </label>
              <label>
                <input
                  type="radio"
                  name="stops"
                  value="یک توقف"
                  onChange={(e) => setStops(e.target.value)}
                />{" "}
                یک توقف
              </label>
            </>
          )}
        </div>
        <div className="flex flex-col pb-2 border-b-[1px]">
          <h2
            className="font-bold cursor-pointer flex justify-between"
            onClick={() => toggleFilter("airports")}
          >
            فیلتر فرودگاه
            {isOpen.price ? (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.28 11.0333C13.1533 11.0333 13.0267 10.9867 12.9267 10.8867L8.58001 6.54001C8.26001 6.22001 7.74001 6.22001 7.42001 6.54001L3.07335 10.8867C2.88001 11.08 2.56001 11.08 2.36668 10.8867C2.17335 10.6933 2.17335 10.3733 2.36668 10.18L6.71335 5.83334C7.42001 5.12668 8.57335 5.12668 9.28668 5.83334L13.6333 10.18C13.8267 10.3733 13.8267 10.6933 13.6333 10.8867C13.5333 10.98 13.4067 11.0333 13.28 11.0333Z"
                  fill="#606060"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.31999C2.17335 6.12666 2.17335 5.80666 2.36668 5.61332C2.56001 5.41999 2.88001 5.41999 3.07335 5.61332L7.42001 9.95999C7.74001 10.28 8.26001 10.28 8.58001 9.95999L12.9267 5.61332C13.12 5.41999 13.44 5.41999 13.6333 5.61332C13.8267 5.80666 13.8267 6.12666 13.6333 6.31999L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z"
                  fill="#404040"
                />
              </svg>
            )}
          </h2>
          {isOpen.airports && (
            <>
              <label>
                <input
                  type="checkbox"
                  value="فرودگاه امام"
                  onChange={(e) => setAirports([...airports, e.target.value])}
                />{" "}
                فرودگاه امام
              </label>
              <label>
                <input
                  type="checkbox"
                  value="فرودگاه مهرآباد"
                  onChange={(e) => setAirports([...airports, e.target.value])}
                />{" "}
                فرودگاه مهرآباد
              </label>
            </>
          )}
        </div>
        <div className="flex flex-col pb-2 border-b-[1px]">
          <h2
            className="font-bold cursor-pointer flex justify-between"
            onClick={() => toggleFilter("flightType")}
          >
            فیلتر نوع پرواز
            {isOpen.price ? (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.28 11.0333C13.1533 11.0333 13.0267 10.9867 12.9267 10.8867L8.58001 6.54001C8.26001 6.22001 7.74001 6.22001 7.42001 6.54001L3.07335 10.8867C2.88001 11.08 2.56001 11.08 2.36668 10.8867C2.17335 10.6933 2.17335 10.3733 2.36668 10.18L6.71335 5.83334C7.42001 5.12668 8.57335 5.12668 9.28668 5.83334L13.6333 10.18C13.8267 10.3733 13.8267 10.6933 13.6333 10.8867C13.5333 10.98 13.4067 11.0333 13.28 11.0333Z"
                  fill="#606060"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.31999C2.17335 6.12666 2.17335 5.80666 2.36668 5.61332C2.56001 5.41999 2.88001 5.41999 3.07335 5.61332L7.42001 9.95999C7.74001 10.28 8.26001 10.28 8.58001 9.95999L12.9267 5.61332C13.12 5.41999 13.44 5.41999 13.6333 5.61332C13.8267 5.80666 13.8267 6.12666 13.6333 6.31999L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z"
                  fill="#404040"
                />
              </svg>
            )}
          </h2>
          {isOpen.flightType && (
            <div className="flex flex-col">
              <label>
                <input
                  type="checkbox"
                  value="پرواز داخلی"
                  onChange={(e) =>
                    setFlightType([...flightType, e.target.value])
                  }
                />{" "}
                پرواز داخلی
              </label>
              <label>
                <input
                  type="checkbox"
                  value="پرواز خارجی"
                  onChange={(e) =>
                    setFlightType([...flightType, e.target.value])
                  }
                />{" "}
                پرواز خارجی
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="w-2/3">
        {/* Results Section */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 mb-4 flex flex-col gap-2"
          >
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md">
                  صندلی باقی مانده: 5
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md">
                  غیر قابل استرداد
                </span>
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                  اکونومی
                </span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                  سیستمی
                </span>
              </div>
            </div>
            <div className="text-right flex items-stretch gap-5">
              <div className="flex flex-col">
                <img
                  src={require("../../assets/images/Airline logo.png")}
                  alt="Logo"
                  className="inline-block w-10 h-10"
                />
                <span>ایران ایر</span>
              </div>
              <div className="flex flex-col justify-between">
                <span>10:00</span>
                <span>استانبول</span>
              </div>
              <span>20kg</span>
              <div className="flex flex-col justify-between">
                <span>10:00</span>
                <span>دبی</span>
              </div>
            </div>
            <div className="mt-2 text-left">
              <span className="text-blue-500">قیمت: 500,000 تومان</span>
              <button className="bg-blue-500 text-white rounded-md px-8 py-2">
                جزئیات بلیط
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultFlightFilter;
