import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, Link } from "react-router-dom";

import Loading from "../Loading";

const ResultInputsFlightFilter = () => {
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
        `http://localhost:3001/api/fly`,
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
  if (error) return "خطایی در بارگذاری داده ها رخ داد ..." + error.message;

  return (
    <div className="flex flex-row justify-evenly">
      <p>
        بلیط هواپیما {from} به {to}
      </p>
      <p>{date}</p>
      <p>{passengerCount} مسافر</p>
      <p>{flightClass}</p>
      <Link className="bg-primary text-white rounded-md px-4 py-2" to="/">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0007 15.1667H6.00065C2.38065 15.1667 0.833984 13.62 0.833984 10V6C0.833984 2.38 2.38065 0.833328 6.00065 0.833328H7.33398C7.60732 0.833328 7.83398 1.05999 7.83398 1.33333C7.83398 1.60666 7.60732 1.83333 7.33398 1.83333H6.00065C2.92732 1.83333 1.83398 2.92666 1.83398 6V10C1.83398 13.0733 2.92732 14.1667 6.00065 14.1667H10.0007C13.074 14.1667 14.1673 13.0733 14.1673 10V8.66666C14.1673 8.39333 14.394 8.16666 14.6673 8.16666C14.9407 8.16666 15.1673 8.39333 15.1673 8.66666V10C15.1673 13.62 13.6207 15.1667 10.0007 15.1667Z"
            fill="white"
          />
          <path
            d="M5.66688 11.7933C5.26022 11.7933 4.88688 11.6467 4.61355 11.38C4.28688 11.0533 4.14688 10.58 4.22022 10.08L4.50688 8.07333C4.56022 7.68666 4.81355 7.18666 5.08688 6.91333L10.3402 1.65999C11.6669 0.333327 13.0135 0.333327 14.3402 1.65999C15.0669 2.38666 15.3935 3.12666 15.3269 3.86666C15.2669 4.46666 14.9469 5.05333 14.3402 5.65333L9.08688 10.9067C8.81355 11.18 8.31355 11.4333 7.92688 11.4867L5.92022 11.7733C5.83355 11.7933 5.74688 11.7933 5.66688 11.7933ZM11.0469 2.36666L5.79355 7.61999C5.66688 7.74666 5.52022 8.03999 5.49355 8.21333L5.20688 10.22C5.18022 10.4133 5.22022 10.5733 5.32022 10.6733C5.42022 10.7733 5.58022 10.8133 5.77355 10.7867L7.78022 10.5C7.95355 10.4733 8.25355 10.3267 8.37355 10.2L13.6269 4.94666C14.0602 4.51333 14.2869 4.12666 14.3202 3.76666C14.3602 3.33333 14.1335 2.87333 13.6269 2.35999C12.5602 1.29333 11.8269 1.59333 11.0469 2.36666Z"
            fill="white"
          />
          <path
            d="M13.233 6.55334C13.1864 6.55334 13.1397 6.54667 13.0997 6.53334C11.3464 6.04001 9.95305 4.64667 9.45971 2.89334C9.38638 2.62667 9.53971 2.35334 9.80638 2.27334C10.073 2.20001 10.3464 2.35334 10.4197 2.62001C10.8197 4.04001 11.9464 5.16667 13.3664 5.56667C13.633 5.64001 13.7864 5.92001 13.713 6.18667C13.653 6.41334 13.453 6.55334 13.233 6.55334Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ResultInputsFlightFilter;
