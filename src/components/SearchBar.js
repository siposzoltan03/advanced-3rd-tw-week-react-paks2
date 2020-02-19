import React, {useEffect, useContext, useState} from "react";
import { Input } from "antd";

import { CityContext } from "../contexts/CityContext";
import { getCity } from "../utility/GetData";

function SearchBar() {
  const [cityUrl, setCityUrl] = useState(null);
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
  const [cityTwo, setCityTwo] = city2;

  const { Search } = Input;

  useEffect(() => {
      if (cityUrl !== null) {
          getCity(cityUrl).then(data =>
              Object.keys(cityOne).length === 0
                  ? setCityOne(data)
                  : Object.keys(cityTwo).length === 0
                  ? setCityTwo(data)
                  : alert("You've already chosen two cities to compare!")
          );
      }
  }, [cityUrl]);

    function changeUrl(value) {

    }

  return (
      <div>
        <Search
            placeholder="Search for a city"
            onSearch={value => changeUrl(value)}
            style={{ width: 200 }}
            className="search-input"
        />
        <span>
            {" "}
            You've selected the following cities: {cityOne.name} {cityTwo.name}
        </span>
      </div>
  );
}

export default SearchBar;
