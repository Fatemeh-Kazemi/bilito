import { Routes, Route } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import "./App.css";

import FullHeader from "./components/header/FullHeader.jsx";
import Us from "./components/main/Us";
import FullFilterPage from "./components/main/filter/FullFilterPage";
import SearchHistory from "./components/main/SearchHistory";
import Banners from "./components/main/Banners";
import HighFly from "./components/main/HighFly";
import Accordion from "./components/main/Accordion";
import Benefits from "./components/main/Benefits";
import Footer from "./components/footer/Footer";
import NotFound from "./components/main/NotFound";
import StepforBuying from "./components/main/StepforBuying";
import FlightDetails from "./components/main/filter/FlightDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <FullHeader />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container mx-auto py-8 flex flex-col gap-6">
                  <SearchHistory />
                  <Banners />
                  <HighFly />
                  <Accordion />
                </div>
                <Benefits />
              </>
            }
          />
            <Route path="us" element={<Us />} />
            <Route path="filter" element={<FullFilterPage />} />
            <Route path="steps" element={<StepforBuying />} />
            <Route path="flight/:flightId" element={<FlightDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
