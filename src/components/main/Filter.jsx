import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import ResultFlightFilter from "./ResultFlightFilter";
import Loading from "./Loading";

const Filter = () => {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
  const passengerCount = searchParams.get("passengerCount");
  const flightClass = searchParams.get("flightClass");

  const {
    isPending,
    error,
    data: filteredFlights,
  } = useQuery({
    queryKey: ["filteredFlights"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3001/api/flightFilter`,
        {
          params: {
            from,
            to,
            date,
            passengerCount,
            flightClass,
          },
        }
      );
      return response.data;
    },
  });

  if (isPending) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ResultFlightFilter results={filteredFlights} />
    </div>
  );
};

export default Filter;
