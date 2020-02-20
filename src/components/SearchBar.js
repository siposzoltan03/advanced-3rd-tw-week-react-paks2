import React, { useEffect, useContext, useState } from "react";
import { Input } from "antd";
import { Spinner } from "./Spinner";
import TeleportAutocomplete from "teleport-autocomplete/js/autocomplete";

import { CityContext } from "../contexts/CityContext";
import { useFetchCityDetails } from "../utility/customHooks/useFetchCityDetails";

import logo from "../resources/logo.png";

function SearchBar() {
  const [cityUrl, setCityUrl] = useState(null);
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
  const [cityTwo, setCityTwo] = city2;
  const [cityIsLoading, fetchedCity] = useFetchCityDetails(cityUrl);
  const tagStyleOne =
    cityOne.name === undefined
      ? { backgroundColor: "transparent" }
      : { backgroundColor: "#717688" };
  const tagStyleTwo =
    cityTwo.name === undefined
      ? { backgroundColor: "transparent" }
      : { backgroundColor: "#717688" };

  const deleteCityOne = () => {
    let cityTwoCopy = { ...cityTwo };
    delete cityTwoCopy.compared;
    setCityTwo(cityTwoCopy);
    setCityOne({});
    setCityUrl(null);
  };
  const deleteCityTwo = () => {
    let cityOneCopy = { ...cityOne };
    delete cityOneCopy.compared;
    setCityOne(cityOneCopy);
    setCityTwo({});
    setCityUrl(null);
  };

  function changeUrl(value) {
    if (value !== null) {
      const url = `https://api.teleport.org/api/cities/geonameid:${value.geonameId}/`;
      setCityUrl(url);
    }
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

  useEffect(() => {
    TeleportAutocomplete.init("#search").on("change", function(value) {
      changeUrl(value);
    });
  }, []);

  return (
    <div className="search-bar">
      <img src={logo} alt="logo" className="logo" />
      <div className="results">
        {" "}
        {Object.keys(cityOne).length === 0 && Object.keys(cityTwo).length === 0
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
      </div>
      <div className="input">
        <Input
          placeholder="Search for a city"
          style={{ width: 200 }}
          autoComplete="off"
          tabIndex="1"
          id="search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
