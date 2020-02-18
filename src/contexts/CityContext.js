import React, {useState, createContext} from 'react';
import Axios from 'axios';

export const CityContext = createContext();

export const CityProvider = props => {
    const [cityOne, setCityOne] = useState(null);
    const [cityTwo, setCityTwo] = useState(null);

    const getCity = (url) => {
        Axios.get(url)
            .then(resp => {
                const queriedData = {
                    geonameId: resp.data.geoname_id,
                    name: resp.data.name,
                    urbanArea: resp.data["city:urban_area"].href,
                    population: resp.data.population,
                    latitude: resp.data.location.latlon.latitude,
                    longitude: resp.data.location.latlon.longitude,
                    fullName: resp.data.full_name
                };
                return queriedData;
            })
            .then(result => cityOne === null ? setCityOne(result) : setCityTwo(result))
            .then(console.log(cityOne));
    };

    return (
        <CityContext.Provider value={[cityOne, setCityOne, cityTwo, setCityTwo]}>
            {props.children}
        </CityContext.Provider>
    );
};