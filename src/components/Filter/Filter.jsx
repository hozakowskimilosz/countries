import "./Filter.css";

export default function Filter() {
  return (
    <select className="select-dropdown">
      <option value="none">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
