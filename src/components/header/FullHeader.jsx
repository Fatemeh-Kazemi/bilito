import Topbar from "./Topbar.tsx";
import FlightFilter from "./FlightFilter";

const FullHeader = () => {
  return (
    <div className="relative pb-28">
      <div className="relative ">
        <Topbar />
      </div>
      <div className="m-auto absolute top-100 left-0 right-0 bottom-1" >
        <FlightFilter />
      </div>
    </div>
  );
};

export default FullHeader;
