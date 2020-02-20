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
  const [layers, setLayers] = useState();

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
        )
        .catch(() => alert("There is no city around here!"));
    },
    [cityOne, cityTwo, setCityOne, setCityTwo]
  );

  const markCity = useCallback(
    city => {
      if (map && city && city.latitude) {
        let marker = L.marker([city.latitude, city.longitude]);
        layers.addLayer(marker);
        marker
          .bindPopup(
            `${city.name}<br>lat: ${city.latitude}<br>lng: ${city.longitude}`
          )
          .openPopup();
      }
    },
    [layers, map]
  );

  useEffect(() => {
    setLayers(L.layerGroup());
  }, []);

  useEffect(() => {
    if (layers) {
      layers.clearLayers();
      layers.addTo(map);
    }
    markCity(cityOne);
    markCity(cityTwo);
  }, [cityOne, cityTwo, layers, map, markCity]);

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

  return <div id="map"></div>;
}

export default Map;
