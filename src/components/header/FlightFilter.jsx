import React from "react";

const FlightFilter = () => {
  return (
    <div className="container mx-auto shadow-lg p-6 bg-white rounded-md">
      <div className="border-b mb-4">
        <ul className="flex gap-8">
          <li className="cursor-pointer border-b-2 border-blue-500">
            پرواز خارجی
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            پرواز داخلی
          </li>
        </ul>
      </div>
      <div className="flex gap-4 mb-4">
        <button className="border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white">
          رفت
        </button>
        <button className="border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white">
          رفت و برگشت
        </button>
        <button className="border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white">
          چند مسیره
        </button>
      </div>
      <div className="flex gap-4">
        <input
          className="border border-gray-300 p-2 w-full rounded-lg"
          placeholder="مبدا"
        />
        <input
          className="border border-gray-300 p-2 w-full rounded-lg"
          placeholder="مقصد"
        />
        <input
          className="border border-gray-300 p-2 w-full rounded-lg"
          placeholder="تاریخ رفت و برگشت"
        />
        <input
          className="border border-gray-300 p-2 w-full rounded-lg"
          placeholder="تعداد مسافر"
        />
        <input
          className="border border-gray-300 p-2 w-full rounded-lg"
          placeholder="کلاس پرواز"
        />
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12.9 14.32a7.5 7.5 0 1 0-1.58 1.58l4.3 4.3a1 1 0 0 0 1.42-1.42l-4.3-4.3zM14.5 9a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          جستجو
        </button>
      </div>
    </div>
  );
};

export default FlightFilter;
