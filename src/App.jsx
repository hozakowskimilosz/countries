import Searchbar from "./components/Searchbar/Searchbar";
import Filter from "./components/Filter/Filter";
import Country from "./components/Country/Country";
import "./App.css";

import { useState } from "react";
import { useEffect } from "react";

async function getAllCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries()
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex-container">
      <div className="title-bar">
        <h1>Where in the world?</h1>
      </div>

      <div className="nav-bar">
        <Searchbar countries={countries} onSetCountries={setCountries} />
        <Filter />
      </div>

      <div className="countries-grid">
        {countries.map((country) => (
          <Country
            key={country.name.official}
            name={country.name.common}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital && country.capital[0]}
          />
        ))}
      </div>
    </div>
  );
}
