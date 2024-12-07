import { Routes, Route, useRoutes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import "./App.css";

import routes from "./routes.jsx";

const queryClient = new QueryClient();

function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
       
        {element}
      </QueryClientProvider>
    </div>
  );
}

export default App;
