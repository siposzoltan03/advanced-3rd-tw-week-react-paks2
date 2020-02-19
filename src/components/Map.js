import React, { useEffect, useContext, useCallback, useState } from "react";
import L from "leaflet";
import "../Map.css";

import { getCity, getNearestCityUrl } from "../utility/GetData";
import { CityContext } from "../contexts/CityContext";

function Map() {
  const [map, setMap] = useState();
  const { city1, city2 } = useContext(CityContext);
  const [cityOne, setCityOne] = city1;
  const [cityTwo, setCityTwo] = city2;

  const onMapClick = useCallback(
    e => {
      getNearestCityUrl(e.latlng.lat, e.latlng.lng)
        .then(cityUrl => getCity(cityUrl))
        .then(data =>
          Object.keys(cityOne).length === 0
            ? setCityOne(data)
            : Object.keys(cityTwo).length === 0
            ? setCityTwo(data)
            : alert("You've already choosen two cities to compare!")
        );
    },
    [cityOne, cityTwo, setCityOne, setCityTwo]
  );

  useEffect(() => {
    if (map) {
      map.on("click", onMapClick);

      return () => {
        map.off("click");
      };
    }
  }, [map, onMapClick]);

  useEffect(() => {
    // create map
    setMap(
      L.map("map", {
        center: [49.8419, 24.0315],
        zoom: 4,
        minZoom: 3,
        layers: [
          L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          })
        ]
      })
    );
  }, []);

  return (
    <div id="map">
    </div>
  );
}

export default Map;
