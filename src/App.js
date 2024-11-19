import { Routes, Route, useRoutes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import "./App.css";

import routes from "./routes.jsx";

import FullHeader from "./components/header/FullHeader.jsx";
import Footer from "./components/footer/Footer";

const queryClient = new QueryClient();

function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <FullHeader />
        {element}
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
