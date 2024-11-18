import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

import Loading from "../Loading";

const FlightDetails = () => {
  const params = useParams();
  const id = params.flightId;

  const {
    isPending,
    error,
    data: flyDetails,
  } = useQuery({
    queryKey: ["flyDetails", id],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3001/api/flyDetails?id=${id}`
      );
      return response.data.results;
    },
  });

  if (isPending) return <Loading />;
  if (error) return "خطایی در بارگذاری داده ها رخ داد ..." + error.message;

  return (
    <div className="container mx-auto p-4">
      {flyDetails.map((eachItem) => (
        <div key={eachItem.id} className="flex items-stretch">
          <div className="flex-1">
            <img
              src={`http://localhost:3001/${eachItem.image}`}
              alt="Flight"
              className="w-3/4 h-auto rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-col flex-1 text-right gap-4">
            <div className="flex">
              <p className="text-3xl font-bold">مقصد: </p>{" "}
              <h2 className="text-3xl font-bold">{eachItem.to}</h2>
            </div>
            <p className="text-2xl"> چرا باید به {eachItem.to} سفر کنیم؟</p>
            <ul className="list-disc list-inside">
              {eachItem.whyThisDestination.map((reason) => (
                <li className="text-gray-600 text-xl">{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="text-right">
        <p className="text-3xl">پرواز های پیشنهادی به مقصد</p>
      </div>
    </div>
  );
};

export default FlightDetails;
