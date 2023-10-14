import "./Searchbar.css";

import { useState } from "react";
import PropTypes from "prop-types";

export default function Searchbar({ countries, onSetCountries }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleFilter() {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    onSetCountries(filteredCountries);
  }

  return (
    <div className="input-wrapper">
      <span className="material-symbols-outlined" tabIndex="0">
        search
      </span>

      <input
        type="text"
        placeholder="Search for a country..."
        className="input"
        size="50"
        maxLength="35"
        tabIndex="0"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleFilter();
        }}
      />
    </div>
  );
}

Searchbar.propTypes = {
  countries: PropTypes.array,
  onSetCountries: PropTypes.func,
};
