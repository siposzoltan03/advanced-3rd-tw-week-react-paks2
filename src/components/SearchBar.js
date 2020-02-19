import React, { useEffect, useContext, useState, createRef } from "react";
import { Input } from "antd";
import { Spinner } from "./Spinner";

import { CityContext } from "../contexts/CityContext";
import { useFetchCityDetails } from "../utility/customHooks/useFetchCityDetails";

function SearchBar() {
  const [cityUrl, setCityUrl] = useState(null);
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
  const [cityTwo, setCityTwo] = city2;
  const [cityIsLoading, fetchedCity] = useFetchCityDetails(cityUrl);

  const { Search } = Input;
  const search = createRef();

  function changeUrl(value) {
    setCityUrl(value);
  }

  useEffect(() => {
    if (cityUrl !== null && !cityIsLoading) {
      Object.keys(cityOne).length === 0
        ? setCityOne(fetchedCity)
        : Object.keys(cityTwo).length === 0
        ? setCityTwo(fetchedCity)
        : alert("You've already chosen two cities to compare!");
    }
  }, [cityIsLoading]);
  if (cityIsLoading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Search
          placeholder="Search for a city"
          onSearch={value => changeUrl(value)}
          style={{ width: 200 }}
          className="search-input"
          autoComplete="off"
          tabIndex="1"
          itemRef={search}
        />
        <span>
          {" "}
          You've selected the following cities: {cityOne.name} {cityTwo.name}
        </span>
      </div>
    );
  }
}

export default SearchBar;
