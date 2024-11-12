import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import FullHeader from "./components/header/FullHeader.jsx";
import SearchHistory from "./components/main/SearchHistory";
import Banners from "./components/main/Banners";
import HighFly from "./components/main/HighFly";
import Accordion from "./components/main/Accordion";
import Benefits from "./components/main/Benefits";
import Footer from "./components/footer/Footer";
import ResultFlightFilter from "./components/main/ResultFlightFilter";
import NotFound from "./components/main/NotFound";
import Us from "./components/header/Us"
import Filter from "./components/main/Filter";

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
          <Route path="/result" element={<ResultFlightFilter />} />
          <Route path="/filter" element={<Filter />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
            <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
