import FullHeader from "./components/header/FullHeader";
import Footer from "./components/footer/Footer";
import Us from "./components/main/Us";
import FullFilterPage from "./components/main/filter/FullFilterPage";
import SearchHistory from "./components/main/SearchHistory";
import Banners from "./components/main/Banners";
import HighFly from "./components/main/HighFly";
import Accordion from "./components/main/Accordion";
import Benefits from "./components/main/Benefits";
import NotFound from "./components/main/NotFound";
import StepforBuying from "./components/main/StepforBuying";
import FlightDetails from "./components/main/filter/FlightDetails";
import { Outlet } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: (
      <>
        <FullHeader />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <div className="container mx-auto py-8 flex flex-col gap-6">
              <SearchHistory />
              <Banners />
              <HighFly />
              <Accordion />
            </div>
            <Benefits />
          </>
        ),
      },
      {
        path: "us",
        element: <Us />,
      },
      {
        path: "filter",
        element: <FullFilterPage />,
      },
      {
        path: "steps",
        element: <StepforBuying />,
      },
      {
        path: "flight/:flightId",
        element: <FlightDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
