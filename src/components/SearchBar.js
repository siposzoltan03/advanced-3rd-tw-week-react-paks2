import React, {useEffect, useContext} from "react";
import {Input} from "antd";
import {Spinner} from "./Spinner";

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
    const deleteCityOne = () => {
      setCityOne({});
    };
    const deleteCityTwo = () => {
      setCityTwo({});
    };

    useEffect(() => {
        /*setCityOne(fetchedCityOne);
        setCityTwo(fetchedCityTwo);*/
    }, [
        fetchedCityOne,
        fetchedCityTwo,
        cityOneIsLoading,
        cityTwoIsLoading,
        setCityOne,
        setCityTwo
    ]);
    if (cityOneIsLoading || cityTwoIsLoading) {
        return <Spinner/>;
    } else {
      const tagStyleOne = cityOne.name === undefined ? { backgroundColor: 'transparent'} : { backgroundColor: 'lightgray'};
      const tagStyleTwo = cityTwo.name === undefined ? { backgroundColor: 'transparent'} : { backgroundColor: 'lightgray'};
      return (
          <div>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{width: 200}}
            />
            <span>
                {" "}
              You've selected the following cities:
              {" "}
                  <span className='city-tag' style={tagStyleOne}>
                    {cityOne.name} {" "}
                    {cityOne.name && <i className="far fa-times-circle" onClick={deleteCityOne.bind(this, cityOne)}/>}
                  </span>
                  {"  "}
                  <span className='city-tag' style={tagStyleTwo}>
                    {cityTwo.name} {" "}
                    {cityTwo.name && <i className="far fa-times-circle" onClick={deleteCityTwo.bind(this, cityTwo)}/>}
                  </span>
                </span>
          </div>
      );
    }

}

export default SearchBar;
