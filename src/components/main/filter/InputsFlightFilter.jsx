import axios from "axios";
import { useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { useQuery } from "@tanstack/react-query";
import moment from "moment-jalaali";
import { useNavigate, useLocation } from "react-router-dom";

import Loading from "../Loading";
import ResultInputsFlightFilter from "./ResultInputsFlightFilter";

const FlightFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const formattedDate = moment(data.date, "jYYYY/jM/jD").format(
      "jYYYY-jMM-jDD"
    );

    // بررسی اینکه آیا کاربر تاریخ را انتخاب کرده است
    const dateToSend = data.date ? formattedDate : "";

    if (
      data.from ||
      data.to ||
      data.date ||
      data.passengerCount ||
      data.flightClass
    ) {
      /* setSearchParams(
        `?from=${data.from}&to=${data.to}&date=${formattedDate}&passengerCount=${data.passengerCount}&flightClass=${data.flightClass}`
      );*/
      reset();
      const q = Object.entries({
        from: data.from,
        to: data.to,
        date: dateToSend,
        passengerCount: data.passengerCount,
        flightClass: data.flightClass,
      })
        .filter(([_, value]) => Boolean(value))
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      navigate(`filter?${q}`);
    } else {
      alert("لطفاً حداقل یک فیلد را پر کنید.");
      return;
    }
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

  if (isPending) return <Loading />;
  if (error) return "خطایی در بارگذاری داده ها رخ داد ..." + error.message;

  return (
    <>
      <style>{`input{outline:none} input::placeholder{color: black} .css-1m8qzkt{z-index: 2;}`}</style>
      <div className="container mx-auto shadow-lg p-6 bg-white rounded-md">
        {location.pathname == "/filter" ? (
          <>
            <ResultInputsFlightFilter />
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="[&_:is(div,input)]:flex-1 text-right flex flex-col md:flex-row gap-4">
              <div>
                <select
                  {...register("from")}
                  className={`border ${
                    errors.from ? "border-red-500" : "border-gray-300"
                  } p-2 w-full rounded-lg`}
                >
                  <option value="" disabled selected>
                    مبدا
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.from}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {errors.from && (
                  <span className="text-red-500">{errors.from.message}</span>
                )}
              </div>

              <div>
                <select
                  {...register("to")}
                  className={`border ${
                    errors.to ? "border-red-500" : "border-gray-300"
                  } p-2 w-full rounded-lg`}
                >
                  <option value="" disabled selected>
                    مقصد
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.to}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {errors.to && (
                  <span className="text-red-500">{errors.to.message}</span>
                )}
              </div>

              <div>
                <div className="border border-gray-300 p-2 rounded-lg">
                  <DatePicker
                    onChange={(e) => {
                      const jalaaliDate = moment(e.value).format("jYYYY/jM/jD");
                      setValue("date", jalaaliDate);
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
                  {...register("flightClass")}
                  className={`placeholder-black-5 border ${
                    errors.flightClass ? "border-red-500" : "border-gray-300"
                  } p-2 w-full rounded-lg`}
                >
                  <option value="" selected>
                    کلاس پرواز
                  </option>
                  <option value="فرست">فرست کلاس</option>
                  <option value="اکونومی">اکونومی کلاس</option>
                  <option value="بیزینس">بیزینس کلاس</option>
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
        )}
      </div>
    </>
  );
};

export default FlightFilter;
