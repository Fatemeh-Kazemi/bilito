import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import RelatedFly from "../RelatedFly";

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
      const response = await axios.get(`http://localhost:3001/api/fly/${id}`);
      return response.data.results;
    },
  });

  if (isPending) return <Loading />;
  if (error) return "خطایی در بارگذاری داده ها رخ داد ..." + error.message;

  return (
    <div className="container mx-auto p-6">
      {flyDetails.map((eachItem) => (
        <>
          <div key={eachItem.id} className="flex items-stretch gap-6">
            <div className="w-1/3">
              <img
                src={`http://localhost:3001/${eachItem.image}`}
                alt="Flight"
                className="w-full h-auto rounded-lg mx-auto"
              />
            </div>
            <div className="flex flex-col w-2/3 text-right gap-4">
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
          <div className="text-right">
            <RelatedFly to={eachItem.to} />
          </div>
        </>
      ))}
    </div>
  );
};

export default FlightDetails;
