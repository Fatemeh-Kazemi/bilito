import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import ResultInputsFlightFilter from "./ResultInputsFlightFilter";
import Loading from "../Loading";
import ResultServerFlightFilter from "./ResultServerFlightFilter";

const FullFilterPage = () => {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
  const passengerCount = searchParams.get("passengerCount");
  const flightClass = searchParams.get("flightClass");
  
  let obj = {}
    searchParams
      .toString()
      .split("&")
      .map((item) => {
        const [key, value] = item.split("=");
         return { [key]: decodeURIComponent(value) };
      }).forEach(item => {
        obj = {...obj, ...item}
      })
  console.log(obj)

  const {
    isPending,
    error,
    data: filteredFlights,
  } = useQuery({
    queryKey: ["filteredFlights"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3001/api/fly`, {
        params: {
          from,
          to,
          date,
          passengerCount,
          flightClass,
        },
      });
      return response.data;
    },
  });

  if (isPending) return <Loading />;
  if (error) return "اتفاقی رخ داده است ..." + error.message;

  return (
    <div>
      <ResultServerFlightFilter results={filteredFlights} />
    </div>
  );
};

export default FullFilterPage;
