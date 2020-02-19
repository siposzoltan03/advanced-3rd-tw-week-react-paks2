import React, {useEffect, useContext} from "react";
import {Input} from "antd";
import {Spinner} from './Spinner'

import {CityContext} from "../contexts/CityContext";
import {useFetchCityDetails} from "../utility/customHooks/useFetchCityDetails";

function SearchBar() {
    const {city1, city2} = useContext(CityContext);
    const [cityOne, setCityOne] = city1;
    const [cityTwo, setCityTwo] = city2;
    const city1Url = "http://api.teleport.org/api/cities/geonameid:5391959/";
    const city2Url = "http://api.teleport.org/api/cities/geonameid:5392171/";
    const [cityOneIsLoading, fetchedCityOne] = useFetchCityDetails(city1Url);
    const [cityTwoIsLoading, fetchedCityTwo] = useFetchCityDetails(city2Url);

    const {Search} = Input;

    useEffect(() => {
        setCityOne(fetchedCityOne);
        setCityTwo(fetchedCityTwo);
    }, [fetchedCityOne,fetchedCityTwo, cityOneIsLoading,cityTwoIsLoading, setCityOne, setCityTwo]);
    if (cityOneIsLoading || cityTwoIsLoading) {
        return <Spinner/>
    } else {
        return (
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{width: 200}}
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
