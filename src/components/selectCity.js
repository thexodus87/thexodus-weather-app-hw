import React, { useContext } from "react";
import { CityContext } from "./cityContext";

function SelectCity({ cities }) {
  const city = useContext(CityContext);

  function renderDropDown() {
    return cities.map((cityItem) => (
      <option
        key={cityItem.count}
        value={cityItem.city}
        selected={cityItem.city === "İstanbul"}
      >
        {cityItem.city}
      </option>
    ));
  }

  const handleCityChange = () => {
    const selectedCity = document.getElementById("cities").value;
    city.setSelectedCity(selectedCity);
  };

  return (
    <select
      onChange={handleCityChange}
      name="Cities"
      id="cities"
      className="form-select form-select-lg mb-3"
    >
      {renderDropDown()}
    </select>
  );
}

export default SelectCity;
