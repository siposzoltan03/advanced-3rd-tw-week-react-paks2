import React, { useEffect, useContext, useState } from "react";
import { Input } from "antd";
import { Spinner } from "./Spinner";

import { CityContext } from "../contexts/CityContext";
import { useFetchCityDetails } from "../utility/customHooks/useFetchCityDetails";
import { getSearchedCityUrl } from "../utility/GetData";

function SearchBar() {
  const [cityUrl, setCityUrl] = useState(null);
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
  const [cityTwo, setCityTwo] = city2;
  const [cityIsLoading, fetchedCity] = useFetchCityDetails(cityUrl);
  const tagStyleOne =
    cityOne.name === undefined
      ? { backgroundColor: "transparent" }
      : { backgroundColor: "lightgray" };
  const tagStyleTwo =
    cityTwo.name === undefined
      ? { backgroundColor: "transparent" }
      : { backgroundColor: "lightgray" };

  const { Search } = Input;
  const deleteCityOne = () => {
    setCityOne({});
  };
  const deleteCityTwo = () => {
    setCityTwo({});
  };

  function changeUrl(value) {
    getSearchedCityUrl(value).then(cityUrl => {
      if (cityUrl === undefined) {
        alert(`There is no such city as ${value}`);
      } else {
        setCityUrl(cityUrl);
      }
    });
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

  return (
    <div className="search-bar">
      <div className="search-elements">
        <Search
          placeholder="Search for a city"
          onSearch={value => changeUrl(value)}
          style={{ width: 200 }}
          className="search-input"
          autoComplete="off"
          tabIndex="1"
        />
        <span>
          {" "}
          {Object.keys(cityOne).length === 0 &&
          Object.keys(cityTwo).length === 0
            ? ""
            : "You've selected the following cities: "}
          <span className="city-tag" style={tagStyleOne}>
            {cityOne.name}{" "}
            {cityOne.name && (
              <i
                className="far fa-times-circle"
                onClick={deleteCityOne.bind(this, cityOne)}
              />
            )}
          </span>
          {"  "}
          <span className="city-tag" style={tagStyleTwo}>
            {cityTwo.name}{" "}
            {cityTwo.name && (
              <i
                className="far fa-times-circle"
                onClick={deleteCityTwo.bind(this, cityTwo)}
              />
            )}
          </span>
          {cityIsLoading === true ? <Spinner /> : ""}
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
