import React, { useEffect, useContext, useCallback, useState } from "react";

import { getUrbanAreaScoresUrl, getUrbanAreaScores } from "../utility/GetData";
import { CityContext } from "../contexts/CityContext";
import City from "./City"

export function Cities() {
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
	const [cityTwo, setCityTwo] = city2;
	const cities = [cityOne, cityTwo];
	const name = 0;
	const score = 1;

  useEffect(() => {
		if (Object.keys(cityOne).length > 0 || Object.keys(cityTwo).length > 0) {
		let selectedCity;

		Object.keys(cityOne).length > 0 && Object.keys(cityOne).length === 0 ? selectedCity = cityOne : selectedCity = cityTwo;
		
		getUrbanAreaScoresUrl(selectedCity.urbanArea)
			.then(urbanAreaURL => getUrbanAreaScores(urbanAreaURL))
			.then(scores => selectedCity === cityOne ? setCityOne({...cityOne, ...scores}) : setCityTwo({...cityTwo, ...scores}));
		}
	},
	[cityOne, cityTwo, setCityOne, setCityTwo]
	);

	return(
		<div className="cities">
			{/* {cities.map(city => (
				<City cityName={city.name}/>
			))} */}
		</div>
	);
}

export default Cities;
