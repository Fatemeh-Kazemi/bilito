import React, { useState } from 'react';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'react-router-dom';
import ResultFlightFilter from './ResultFlightFilter';

const Filter = () => {
    const [searchParams] = useSearchParams();
    
    const from = searchParams.get('from')
    const to = searchParams.get('to');
    const date = searchParams.get('date');
    const passengerCount = searchParams.get('passengerCount');
    const flightClass = searchParams.get('flightClass');  

    console.log(searchParams)
    const { isPending, error, data: filteredFlights = [] } = useQuery({
      queryKey: ["filteredFlights"],
      queryFn: async () => {
        const response = await axios.get("http://localhost:3001/api/flightFilter?" + searchParams);
        return response.data.results || []; // اطمینان از اینکه داده‌ها همیشه یک آرایه هستند
      },
    });
    console.log(filteredFlights)
    
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <h1>جزئیات پرواز</h1>
            <p>مبدا: {from}</p>
            <p>مقصد: {to}</p>
            <p>تاریخ: {date}</p>
            <p>تعداد مسافران: {passengerCount}</p>
            <p>کلاس پرواز: {flightClass}</p>
            <ResultFlightFilter get={filteredFlights} />
        </div>
    );
};

export default Filter;
