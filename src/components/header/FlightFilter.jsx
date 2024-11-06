import React from "react";
import { useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FlightFilter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues, reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset({
      from: "",
      to: "",
      date: '',
      flightClass: '',
      passengerCount: ""
    })
  };

  const {
    isPending,
    error,
    data: cities,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/api/cities");
      return response.data.results;
    },
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <style>{`input{outline:none} input::placeholder{color: black} .css-1m8qzkt{z-index: 2;}`}</style>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="[&_:is(div,input)]:flex-1 text-right flex flex-col md:flex-row gap-4">
            <div>
              <select
                {...register("from", {
                  required: "This field is required",
                })}
                className={`border ${
                  errors.flightClass ? "border-red-500" : "border-gray-300"
                } p-2 w-full rounded-lg`}
              >
                <option value="" disabled >
                  مبدا
                </option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              {errors.flightClass && (
                <span className="text-red-500">
                  {errors.flightClass.message}
                </span>
              )}
            </div>

            <div>
              <select
                {...register("to", {
                  required: "This field is required",
                })}
                className={`border ${
                  errors.flightClass ? "border-red-500" : "border-gray-300"
                } p-2 w-full rounded-lg`}
              >
                <option value="" disabled>
                  مقصد
                </option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              {errors.flightClass && (
                <span className="text-red-500">
                  {errors.flightClass.message}
                </span>
              )}
            </div>

            <div>
              <div className="border border-gray-300 p-2 rounded-lg">
                <DatePicker
                onChange={(e) => {
                  setValue('date',e.value)
                }}
                  inputAttributes={{ placeholder: "تاریخ" }}
                  className={`block w-full border ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
                />
              </div>
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("passengerCount", {
                  required: "این فیلد الزامی است",
                  min: { value: 1, message: "حداقل ۱ مسافر" },
                  max: { value: 6, message: "حداکثر ۶ مسافر" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "فقط اعداد مجاز هستند",
                  },
                })}
                type="text"
                className={`placeholder-black-5 border ${
                  errors.passengerCount ? "border-red-500" : "border-gray-300"
                } p-2 w-full rounded-lg`}
                placeholder="تعداد مسافر"
                onKeyDown={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              {errors.passengerCount && (
                <span className="text-red-500">
                  {errors.passengerCount.message}
                </span>
              )}
            </div>

            <div>
              <select
                {...register("flightClass", {
                  required: "این فیلد الزامی است",
                })}
                className={`placeholder-black-5 border ${
                  errors.flightClass ? "border-red-500" : "border-gray-300"
                } p-2 w-full rounded-lg`}
              >
                <option value="">فرست کلاس</option>
                <option value="economy">اکونومی کلاس</option>
                <option value="business">بیزینس کلاس</option>
              </select>
              {errors.flightClass && (
                <span className="text-red-500">
                  {errors.flightClass.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-primary text-white rounded-lg px-4 py-2 flex items-center"
            >
              <span className="px-1">جستجو</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FlightFilter;
