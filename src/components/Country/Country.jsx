import "./Country.css";

import PropTypes from "prop-types";

export default function Country({ name, flag, population, region, capital }) {
  return (
    <div className="country">
      <img src={flag} />

      <div className="info-container">
        <h2>{name}</h2>

        <div>
          <p>
            <b>Population:</b> {population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </div>
    </div>
  );
}

Country.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
};
