import React, { useEffect, useContext, useCallback, useState } from "react";

import { getUrbanAreaScoresUrl, getUrbanAreaScores } from "../utility/GetData";
import { CityContext } from "../contexts/CityContext";
import City from "./City";

export function Cities() {
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
  const [cityTwo, setCityTwo] = city2;
  const cities = [cityOne, cityTwo];
  const name = 0;
  const score = 1;
  const greater = 2;

  useEffect(() => {
    if (
      Object.keys(cityOne).length === 7 ||
      Object.keys(cityTwo).length === 7
    ) {
      let selectedCity;

      Object.keys(cityOne).length === 7
        ? (selectedCity = cityOne)
        : (selectedCity = cityTwo);

      if (selectedCity.urbanArea !== undefined) {
        getUrbanAreaScoresUrl(selectedCity.urbanArea)
          .then(urbanAreaURL => getUrbanAreaScores(urbanAreaURL))
          .then(scores =>
            selectedCity === cityOne
              ? setCityOne({ ...cityOne, ...scores })
              : setCityTwo({ ...cityTwo, ...scores })
          );
      }
    }
    if (
      Object.keys(cityOne).length === 14 &&
      Object.keys(cityTwo).length === 14
    ) {
      let cityOneCopy = { ...cityOne };
      let cityTwoCopy = { ...cityTwo };

      cityOneCopy["housing"][greater] =
        cityOneCopy["housing"][score] > cityTwoCopy["housing"][score];
      cityTwoCopy["housing"][greater] = !cityOneCopy["housing"][greater];

      cityOneCopy["costOfLiving"][greater] =
        cityOneCopy["costOfLiving"][score] > cityTwoCopy["costOfLiving"][score];
      cityTwoCopy["costOfLiving"][greater] = !cityOneCopy["costOfLiving"][
        greater
      ];

      cityOneCopy["travelConnectivity"][greater] =
        cityOneCopy["travelConnectivity"][score] >
        cityTwoCopy["travelConnectivity"][score];
      cityTwoCopy["travelConnectivity"][greater] = !cityOneCopy[
        "travelConnectivity"
      ][greater];

      cityOneCopy["safety"][greater] =
        cityOneCopy["safety"][score] > cityTwoCopy["safety"][score];
      cityTwoCopy["safety"][greater] = !cityOneCopy["safety"][greater];

      cityOneCopy["internetAccess"][greater] =
        cityOneCopy["internetAccess"][score] >
        cityTwoCopy["internetAccess"][score];
      cityTwoCopy["internetAccess"][greater] = !cityOneCopy["internetAccess"][
        greater
      ];

      cityOneCopy["environmentalQuality"][greater] =
        cityOneCopy["environmentalQuality"][score] >
        cityTwoCopy["environmentalQuality"][score];
      cityTwoCopy["environmentalQuality"][greater] = !cityOneCopy[
        "environmentalQuality"
      ][greater];

      cityOneCopy["leisureAndCulture"][greater] =
        cityOneCopy["leisureAndCulture"][score] >
        cityTwoCopy["leisureAndCulture"][score];
      cityTwoCopy["leisureAndCulture"][greater] = !cityOneCopy[
        "leisureAndCulture"
      ][greater];

      cityOneCopy.compared = true;
      cityTwoCopy.compared = true;

      setCityOne(cityOneCopy);
      setCityTwo(cityTwoCopy);
    }
  }, [cityOne, cityTwo, setCityOne, setCityTwo]);

  if (Object.keys(cities[0]).length > 0 || Object.keys(cities[1]).length > 0) {
    return (
      <div className="cities">
        {cities.map(city => (
          <City
            cityName={city.name}
            fullName={city.fullName}
            population={city.population}
            housing={city.housing}
            costOfLiving={city.costOfLiving}
            travelConnectivity={city.travelConnectivity}
            safety={city.safety}
            environmentalQuality={city.environmentalQuality}
            internetAccess={city.internetAccess}
            leisureAndCulture={city.leisureAndCulture}
            key={city.name}
          />
        ))}
      </div>
    );
  } else {
    return <div className="cities" />;
  }
}

export default Cities;
