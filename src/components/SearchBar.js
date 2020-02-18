import React, { useEffect, useContext } from "react";

import CityContext from "../contexts/CityContext";
import getCity from "../utility/GetData";

function SearchBar() {
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
  const [cityTwo, setCityTwo] = city2;

  useEffect(() => {
    getCity(
      "https://api.teleport.org/api/cities/geonameid%3A5391959/"
    ).then(data => setCityOne(data));
    getCity(
      "https://api.teleport.org/api/cities/geonameid%3A5391959/"
    ).then(data => setCityTwo(data));
  }, [setCityOne, setCityTwo]);

  return (
    <div id="search-bar">
      <h1>{cityOne.name}</h1>
      <h1>{cityTwo.name}</h1>
    </div>
  );
}

export default SearchBar;
