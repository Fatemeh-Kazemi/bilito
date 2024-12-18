  import { useState, useEffect } from "react";
import ModalDetailsFlight from "./ModalDetailsFlight";
import {Link} from "react-router-dom";

const ResultServerFlightFilter = ({ results }) => {
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


  const toggleFilter = (filterName) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState({});

  const handleDetailsClick = (result) => {
    setSelectedFlight(result);
    setIsModalOpen(true); // Open the modal
  };
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  const resetFilteredValues = () => {
    setPriceRange([0, 1000]);
    setDepartureTime([0, 24]);
    setAirlines([]);
    setStops("");
    setAirports([]);
    setFlightType([]);
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (priceRange[0] !== 0 || priceRange[1] !== 1000) {
      params.append('priceRange', priceRange.join(','));
    }
    if (departureTime[0] !== 0 || departureTime[1] !== 24) {
      params.append('departureTime', departureTime.join(','));
    }
    if (airlines.length > 0) {
      params.append('airlines', airlines.join(','));
    }
    if (stops) {
      params.append('stops', stops);
    }
    if (airports.length > 0) {
      params.append('airports', airports.join(','));
    }
    if (flightType.length > 0) {
      params.append('flightType', flightType.join(','));
    }
    console.log(params)
    
    const queryString = params.toString();
    console.log(queryString)
    if (queryString) {
      fetch(`/api/filtered?${queryString}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      });
    }
  }, [priceRange, departureTime, airlines, stops, airports, flightType]);
  


  return (
    <div className="container mx-auto flex flex-col md:flex-row items-start gap-5 p-10 m-5 font-normal">
      <div className="w-[100%] md:w-1/3 rounded-lg bg-gray-100 p-4 border-l text-right flex flex-col gap-5">
        <div className="flex justify-between pb-2 border-b-[1px]">
          <p>
            تعداد نتایج: <span>{results.length}</span>
          </p>
          <p onClick={resetFilteredValues} className="text-blue-500">
            پاک کردن فیلترها
          </p>
        </div>
        {/* محدوده قیمتی */}
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
        {/* ساعت */}
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
        {/* شرکت هواپیمایی */}
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
                  checked={airlines.includes("ایران ایر")}
                  onChange={(e) => setAirlines([...airlines, e.target.value])}
                />{" "}
                ایران ایر
              </label>
              <label>
                <input
                  type="checkbox"
                  value="ماهان"
                  checked={airlines.includes("ماهان")}
                  onChange={(e) => setAirlines([...airlines, e.target.value])}
                />{" "}
                ماهان
              </label>
            </>
          )}
        </div>
        {/* تعداد توقف */}
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
                  value="همه"
                  checked={stops.includes("همه")}
                  onChange={(e) => setStops(e.target.value)}
                />{" "}
                همه
              </label>
              <label>
                <input
                  type="radio"
                  name="stops"
                  value="مستقیم"
                  checked={stops.includes("مستقیم")}
                  onChange={(e) => setStops(e.target.value)}
                />{" "}
                مستقیم
              </label>
              <label>
                <input
                  type="radio"
                  name="stops"
                  value="یک"
                  checked={stops.includes("یک")}
                  onChange={(e) => setStops(e.target.value)}
                />{" "}
                یک توقف
              </label>
              <label>
                <input
                  type="radio"
                  name="stops"
                  value="دو یا بیشتر"
                  checked={stops.includes("دو یا بیشتر")}
                  onChange={(e) => setStops(e.target.value)}
                />{" "}
                دو یا بیشتر
              </label>
            </>
          )}
        </div>
        {/* فرودگاه */}
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
                  checked={airports.includes("فرودگاه امام")}
                  onChange={(e) => setAirports([...airports, e.target.value])}
                />{" "}
                فرودگاه امام
              </label>
              <label>
                <input
                  type="checkbox"
                  value="فرودگاه مهرآباد"
                  checked={airports.includes("فرودگاه مهرآباد")}
                  onChange={(e) => setAirports([...airports, e.target.value])}
                />{" "}
                فرودگاه مهرآباد
              </label>
            </>
          )}
        </div>
        {/* نوع پرواز */}
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
                  checked={flightType.includes("پرواز داخلی")}
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
                  checked={flightType.includes("پرواز خارجی")}
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
      <div className="w-[100%] md:w-2/3">
        {/* اگر نتیجه ای از سرور برگشت نمایش دهد  */}
        {results.length > 0 ? (
          results.map((result) => (
            <div
              key={result.id}
              className="border rounded-lg p-4 mb-4 flex flex-col gap-2"
            >
              <div className="flex flex-col md:flex-row justify-between gap-2">
                <div className="flex gap-2">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md">
                    صندلی باقی مانده: {result.passCount}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md">
                    غیر قابل استرداد
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                    {result.flightType}
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                    {result.buyingWay}
                  </span>
                </div>
              </div>
              <div className="text-right flex items-center gap-5">
                <div className="flex flex-col">
                  <img
                    src={`http://localhost:3001/${result.airline.logo}`}
                    alt={result.airline.name}
                    className="inline-block w-10 h-10"
                  />
                  <span>{result.airline.name}</span>
                </div>
                <div className="flex flex-col justify-between">
                  <span>{result.fromTime}</span>
                  <span className="text-gray-5">{result.from}</span>
                </div>
                <div className="flex flex-col justify-between items-center gap-2">
                  <span className="text-gray-5">{result.distanceTime}</span>
                  <svg
                    width="142"
                    height="24"
                    viewBox="0 0 142 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M141 11.5L1 11.5"
                      stroke="#CBCBCB"
                      strokeLinecap="round"
                      strokeDasharray="5 5"
                    />
                    <path
                      d="M69.6301 3.95L67.6201 8.62L67.1801 9.66C67.1001 9.82 66.8901 9.96 66.7101 9.96H63.6501C62.6901 9.96 61.5501 10.67 61.1101 11.53C60.9601 11.83 60.9601 12.19 61.1101 12.49C61.5501 13.34 62.7001 14.05 63.6601 14.05H66.7201C66.9001 14.05 67.1101 14.19 67.1901 14.35L69.6401 20.05C69.9001 20.68 70.6901 21.19 71.3701 21.19H72.6901C73.5401 21.19 73.9601 20.55 73.6201 19.76L71.4601 14.75C71.2901 14.36 71.5001 14.04 71.9301 14.04H73.0401H74.8401C75.0701 14.04 75.4001 14.17 75.5601 14.33L77.8901 16.65C78.1301 16.89 78.6001 17 78.9401 16.89L80.3001 16.44C80.8901 16.26 81.1701 15.59 80.8901 15.04L78.8901 12.66C78.5801 12.3 78.5801 11.71 78.8901 11.35L80.8901 8.97C81.1601 8.42 80.8901 7.75 80.3001 7.55L78.9401 7.1C78.6101 6.99 78.1301 7.1 77.8901 7.34L75.5601 9.66C75.4001 9.83 75.0701 9.96 74.8401 9.96H71.9301C71.5001 9.96 71.3001 9.65 71.4601 9.25L73.6201 4.24C73.9601 3.45 73.5401 2.81 72.6901 2.81H71.3701C70.6901 2.81 69.9001 3.32 69.6301 3.95Z"
                      fill="#1D91CC"
                    />
                  </svg>
                  <span className="text-gray-5">{result.airline.baggage}</span>
                </div>
                <div className="flex flex-col justify-between">
                  <span>{result.toTime}</span>
                  <span className="text-gray-5">{result.to}</span>
                </div>
              </div>
              <div className="mt-2 text-left">
                <span className="text-blue-500">
                  قیمت: {result.price} تومان
                </span>{" "}
                <button
                  onClick={() => handleDetailsClick(result)}
                  className="bg-blue-500 text-white rounded-md px-8 py-2"
                >
                  جزئیات بلیط
                </button>
              </div>
            </div>
          ))
        ) : (
          // در صورتی که هیچ نتیچه ای برای نمایش وجود نداشت
          <div className="flex justify-center">
            <div className="w-[50%] h-[50%]">
              <img
                src={require("../../../assets/images/MOM Without result.png")}
                alt="No results found"
                className="w-full"
              />
              <p className="p-4 mb-4 border rounded-md border-gray-5">
                نتیجه ای یافت نشد
              </p>
              <Link to="/" className="font-bold text-blue-600">بازگشت به صفحه اصلی</Link>
            </div>
          </div>
        )}
        {isModalOpen && (
          <ModalDetailsFlight selectedFlight={selectedFlight} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default ResultServerFlightFilter;
