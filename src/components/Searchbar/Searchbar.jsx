import "./Searchbar.css";

import PropTypes from "prop-types";

export default function Searchbar({ searchTerm, onSearchTearm }) {
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
        onChange={(e) => onSearchTearm(e.target.value)}
      />
    </div>
  );
}

Searchbar.propTypes = {
  searchTerm: PropTypes.string,
  onSearchTearm: PropTypes.func,
};
