import { useLocation } from "react-router-dom";

import Topbar from "./Topbar";
import InputsFlightFilter from "../main/filter/InputsFlightFilter";

const FullHeader = () => {
  const location = useLocation();
  return (
    <>
      {['/', '/filter'].includes(location.pathname) ? (
        <div className="static md:relative md:pb-14">
          <div className="relative">
            <Topbar />
          </div>
          <div className="m-auto static md:absolute top-100 left-0 right-0 bottom-1">
            <InputsFlightFilter />
          </div>
        </div>
      ) : (
        <div className="relative ">
          <Topbar />
        </div>
      )}
    </>
  );
};

export default FullHeader;
