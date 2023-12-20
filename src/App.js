import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
 import SelectCity from "./components/selectCity";
import { CityContextProvider } from "./components/cityContext";
import Weather from "./components/weather";
//import {Weather, SelectCity} from "./components/index";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.openaq.org/v2/cities?limit=100&page=1&offset=0&sort=asc&country=tr&order_by=city"
      )
      .then((response) => {
        setCities(response.data.results);
      });
  }, []);

  return (
    <CityContextProvider>
      <>
        <header className="pt-2 ps-2">
          <h1 className="display">Weather app</h1>
        </header>
        <section className="App container">
          <SelectCity cities={cities} />
          <Weather></Weather>
        </section>
      </>
    </CityContextProvider>
  );
}

export default App;
