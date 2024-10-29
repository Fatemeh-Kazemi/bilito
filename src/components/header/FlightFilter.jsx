import React from "react";

const FlightFilter = () => {
  return (
    <div className="container mx-auto shadow-lg p-6 bg-white rounded-md">
      <div className="border-b mb-4">
        <ul className="flex gap-8">
          <li className="cursor-pointer border-b-[1px] text-gray-500 hover:border-primary hover:text-primary hover:font-bold">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.72032 15.5334C5.57365 15.5334 5.42032 15.5067 5.28032 15.4467C4.96699 15.3134 4.72699 15.0534 4.62032 14.7267L4.32699 13.8467C4.19365 13.4467 4.31365 12.9467 4.60699 12.6467L6.12032 11.1267C6.14032 11.1067 6.16699 11.0334 6.16699 11V9.35338L3.12699 10.6667C2.72032 10.84 2.30699 10.82 1.99365 10.6134C1.68032 10.4067 1.49365 10.0334 1.49365 9.60005V8.74005C1.49365 8.08671 1.96032 7.38671 2.55365 7.15338L6.16032 5.59338V3.70005C6.16032 2.89338 6.72699 1.96671 7.44699 1.59338C7.79365 1.42005 8.19365 1.42005 8.53365 1.59338C9.26032 1.96671 9.82699 2.88671 9.82699 3.69338V5.58671L13.4537 7.14671C14.047 7.40005 14.5003 8.08005 14.5003 8.74005V9.60005C14.5003 10.04 14.3203 10.4067 14.0003 10.6134C13.6803 10.82 13.2737 10.84 12.867 10.6734L9.82699 9.36005V11.0067C9.82699 11.0334 9.85365 11.1 9.87365 11.12L11.3937 12.6467C11.687 12.94 11.807 13.4534 11.6737 13.8467L11.3803 14.7267C11.267 15.0534 11.027 15.3134 10.707 15.44C10.3937 15.5667 10.047 15.5534 9.74699 15.4067C9.71365 15.3867 9.68032 15.3667 9.64699 15.34L8.09365 14.0334C8.04032 13.9867 7.93365 13.9934 7.88699 14.0334L6.33365 15.34C6.30699 15.3667 6.27365 15.3867 6.24032 15.4C6.08032 15.4934 5.90032 15.5334 5.72032 15.5334ZM6.37365 8.26005C6.52699 8.26005 6.67365 8.30005 6.80032 8.38671C7.03365 8.54005 7.16699 8.80005 7.16699 9.10671V11.0067C7.16699 11.2934 7.02699 11.6334 6.82699 11.8334L5.31365 13.3534C5.28699 13.3867 5.26032 13.4867 5.27365 13.5267L5.56699 14.4134C5.58699 14.48 5.63365 14.5067 5.66032 14.52C5.68032 14.5267 5.71365 14.54 5.75365 14.5267L7.24699 13.2667C7.66699 12.9067 8.32699 12.9067 8.74699 13.2667L10.2337 14.52C10.2803 14.5267 10.3137 14.52 10.3337 14.5134C10.3603 14.5 10.4137 14.4734 10.4337 14.4067L10.727 13.5267C10.7403 13.48 10.7137 13.38 10.687 13.3534L9.17365 11.8334C8.97365 11.6467 8.82699 11.3 8.82699 11.0067V9.10671C8.82699 8.80671 8.95365 8.54671 9.18032 8.39338C9.40699 8.24005 9.70032 8.22005 9.98032 8.34005L13.2603 9.75338C13.3603 9.79338 13.427 9.79338 13.447 9.78005C13.467 9.76671 13.4937 9.70671 13.4937 9.60005V8.74005C13.4937 8.48671 13.2803 8.16005 13.0537 8.06671L9.33365 6.46005C9.04032 6.33338 8.83365 6.01338 8.83365 5.69338V3.69338C8.83365 3.25338 8.48699 2.68671 8.08699 2.48671C8.03365 2.46005 7.96699 2.46005 7.90699 2.48671C7.52032 2.68671 7.16699 3.26671 7.16699 3.70005V5.70005C7.16699 6.01338 6.96032 6.34005 6.66699 6.46671L2.94699 8.07338C2.71365 8.16671 2.50032 8.49338 2.50032 8.74005V9.60005C2.50032 9.70671 2.52699 9.76671 2.54699 9.78005C2.56699 9.79338 2.63365 9.79338 2.73365 9.75338L6.00699 8.34005C6.12699 8.28671 6.25365 8.26005 6.37365 8.26005Z"
                fill="#ADADAD"
              />
            </svg>
            <span className="px-1">پرواز خارجی</span>
          </li>
          <li className="cursor-pointer border-b-[1px] text-gray-500 hover:border-primary hover:text-primary hover:font-bold">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.72032 15.5334C5.57365 15.5334 5.42032 15.5067 5.28032 15.4467C4.96699 15.3134 4.72699 15.0534 4.62032 14.7267L4.32699 13.8467C4.19365 13.4467 4.31365 12.9467 4.60699 12.6467L6.12032 11.1267C6.14032 11.1067 6.16699 11.0334 6.16699 11V9.35338L3.12699 10.6667C2.72032 10.84 2.30699 10.82 1.99365 10.6134C1.68032 10.4067 1.49365 10.0334 1.49365 9.60005V8.74005C1.49365 8.08671 1.96032 7.38671 2.55365 7.15338L6.16032 5.59338V3.70005C6.16032 2.89338 6.72699 1.96671 7.44699 1.59338C7.79365 1.42005 8.19365 1.42005 8.53365 1.59338C9.26032 1.96671 9.82699 2.88671 9.82699 3.69338V5.58671L13.4537 7.14671C14.047 7.40005 14.5003 8.08005 14.5003 8.74005V9.60005C14.5003 10.04 14.3203 10.4067 14.0003 10.6134C13.6803 10.82 13.2737 10.84 12.867 10.6734L9.82699 9.36005V11.0067C9.82699 11.0334 9.85365 11.1 9.87365 11.12L11.3937 12.6467C11.687 12.94 11.807 13.4534 11.6737 13.8467L11.3803 14.7267C11.267 15.0534 11.027 15.3134 10.707 15.44C10.3937 15.5667 10.047 15.5534 9.74699 15.4067C9.71365 15.3867 9.68032 15.3667 9.64699 15.34L8.09365 14.0334C8.04032 13.9867 7.93365 13.9934 7.88699 14.0334L6.33365 15.34C6.30699 15.3667 6.27365 15.3867 6.24032 15.4C6.08032 15.4934 5.90032 15.5334 5.72032 15.5334ZM6.37365 8.26005C6.52699 8.26005 6.67365 8.30005 6.80032 8.38671C7.03365 8.54005 7.16699 8.80005 7.16699 9.10671V11.0067C7.16699 11.2934 7.02699 11.6334 6.82699 11.8334L5.31365 13.3534C5.28699 13.3867 5.26032 13.4867 5.27365 13.5267L5.56699 14.4134C5.58699 14.48 5.63365 14.5067 5.66032 14.52C5.68032 14.5267 5.71365 14.54 5.75365 14.5267L7.24699 13.2667C7.66699 12.9067 8.32699 12.9067 8.74699 13.2667L10.2337 14.52C10.2803 14.5267 10.3137 14.52 10.3337 14.5134C10.3603 14.5 10.4137 14.4734 10.4337 14.4067L10.727 13.5267C10.7403 13.48 10.7137 13.38 10.687 13.3534L9.17365 11.8334C8.97365 11.6467 8.82699 11.3 8.82699 11.0067V9.10671C8.82699 8.80671 8.95365 8.54671 9.18032 8.39338C9.40699 8.24005 9.70032 8.22005 9.98032 8.34005L13.2603 9.75338C13.3603 9.79338 13.427 9.79338 13.447 9.78005C13.467 9.76671 13.4937 9.70671 13.4937 9.60005V8.74005C13.4937 8.48671 13.2803 8.16005 13.0537 8.06671L9.33365 6.46005C9.04032 6.33338 8.83365 6.01338 8.83365 5.69338V3.69338C8.83365 3.25338 8.48699 2.68671 8.08699 2.48671C8.03365 2.46005 7.96699 2.46005 7.90699 2.48671C7.52032 2.68671 7.16699 3.26671 7.16699 3.70005V5.70005C7.16699 6.01338 6.96032 6.34005 6.66699 6.46671L2.94699 8.07338C2.71365 8.16671 2.50032 8.49338 2.50032 8.74005V9.60005C2.50032 9.70671 2.52699 9.76671 2.54699 9.78005C2.56699 9.79338 2.63365 9.79338 2.73365 9.75338L6.00699 8.34005C6.12699 8.28671 6.25365 8.26005 6.37365 8.26005Z"
                fill="#ADADAD"
              />
            </svg>
            <span className="px-1">پرواز داخلی</span>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 mb-4">
        <button className="h-[32px] w-[110px] md:h-[40px] p-2 leading-[20px] border border-primary rounded-lg text-center hover:bg-primary hover:text-white">
          رفت
        </button>
        <button className="h-[32px] w-[110px] md:h-[40px] p-2 leading-[20px] border border-primary rounded-lg text-center hover:bg-primary hover:text-white">
          رفت و برگشت
        </button>
        <button className="h-[32px] w-[110px] md:h-[40px] p-2 leading-[20px] border border-primary rounded-lg text-center hover:bg-primary hover:text-white">
          چند مسیره
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="placeholder-black-5 border border-gray-300 p-2 w-full rounded-lg"
          placeholder="مبدا"
        />
        <input
          className="placeholder-black-5 border border-gray-300 p-2 w-full rounded-lg"
          placeholder="مقصد"
        />
        <input
          className="placeholder-black-5 border border-gray-300 p-2 w-full rounded-lg"
          placeholder="تاریخ رفت و برگشت"
        />
        <input
          className="placeholder-black-5 border border-gray-300 p-2 w-full rounded-lg"
          placeholder="تعداد مسافر"
        />
        <input
          className="placeholder-black-5 border border-gray-300 p-2 w-full rounded-lg"
          placeholder="کلاس پرواز"
        />
        <button className="bg-primary text-white rounded-lg px-4 py-2 flex items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66683 14.5C3.90016 14.5 0.833496 11.4333 0.833496 7.66668C0.833496 3.90001 3.90016 0.833344 7.66683 0.833344C11.4335 0.833344 14.5002 3.90001 14.5002 7.66668C14.5002 11.4333 11.4335 14.5 7.66683 14.5ZM7.66683 1.83334C4.44683 1.83334 1.8335 4.45334 1.8335 7.66668C1.8335 10.88 4.44683 13.5 7.66683 13.5C10.8868 13.5 13.5002 10.88 13.5002 7.66668C13.5002 4.45334 10.8868 1.83334 7.66683 1.83334Z"
              fill="white"
            />
            <path
              d="M14.6666 15.1667C14.54 15.1667 14.4133 15.12 14.3133 15.02L12.98 13.6867C12.7866 13.4933 12.7866 13.1733 12.98 12.98C13.1733 12.7867 13.4933 12.7867 13.6866 12.98L15.02 14.3133C15.2133 14.5067 15.2133 14.8267 15.02 15.02C14.92 15.12 14.7933 15.1667 14.6666 15.1667Z"
              fill="white"
            />
          </svg>
          <span className="px-1">جستجو</span>
        </button>
      </div>
    </div>
  );
};

export default FlightFilter;
