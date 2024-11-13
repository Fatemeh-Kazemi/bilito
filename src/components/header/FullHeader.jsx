import Topbar from "./Topbar";
import FlightFilter from "./FlightFilter";
import { useLocation } from "react-router-dom";

const FullHeader = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname == "/us" ? (
        <>
          <div className="relative ">
            <Topbar />
          </div>
        </>
      ) : (
        <div className="static md:relative md:pb-28">
          <div className="relative ">
            <Topbar />
          </div>
          <div className="m-auto static md:absolute top-100 left-0 right-0 bottom-1">
            <FlightFilter />
          </div>
        </div>
      )}
    </>
  );
};

export default FullHeader;
