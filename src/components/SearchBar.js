import React, { useEffect, useContext } from "react";
import { Input } from 'antd';

import CityContext from "../contexts/CityContext";
import getCity from "../utility/GetData";

function SearchBar() {
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
  const [cityTwo, setCityTwo] = city2;

  const { Search } = Input;

  useEffect(() => {
    getCity(
      "https://api.teleport.org/api/cities/geonameid%3A5391959/"
    ).then(data => setCityOne(data));
    getCity(
      "https://api.teleport.org/api/cities/geonameid%3A5391959/"
    ).then(data => setCityTwo(data));
  }, [setCityOne, setCityTwo]);

  return (
      <div>
        <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
        />
      </div>
  );
}

export default SearchBar;
