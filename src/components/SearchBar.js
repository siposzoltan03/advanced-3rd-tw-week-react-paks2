import React, { useEffect, useContext } from "react";

import { CityContext } from "../contexts/CityContext";
import { getCity } from "../utility/GetData";

function SearchBar() {
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
  const [cityTwo, setCityTwo] = city2;
  const city1Url = "https://api.teleport.org/api/cities/geonameid%3A5391959/";
  const city2Url = "https://api.teleport.org/api/cities/geonameid%3A5391959/";

  useEffect(() => {
    getCity(city1Url).then(data => setCityOne(data));
    getCity(city2Url).then(data => setCityTwo(data));
  }, [setCityOne, setCityTwo]);

  return (
    <div id="search-bar">
      <h1>{cityOne.name}</h1>
      <h1>{cityTwo.name}</h1>
    </div>
  );
}

export default SearchBar;
