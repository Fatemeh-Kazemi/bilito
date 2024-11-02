import "./App.css";

import FullHeader from "./components/header/FullHeader.jsx";
import SearchHistory from "./components/main/SearchHistory";
import Banners from "./components/main/Banners";
import HighFly from "./components/main/HighFly";
import Accordion from "./components/main/Accordion";
import Benefits from "./components/main/Benefits"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <FullHeader />
      <div className="container mx-auto py-8 flex flex-col gap-6">
        <SearchHistory />
        <Banners />
        <HighFly />
        <Accordion /> 
      </div>
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
