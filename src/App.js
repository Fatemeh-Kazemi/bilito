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
          <Route path="/result" element={<ResultFlightFilter />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
