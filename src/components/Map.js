import React, { useEffect, useContext, useCallback, useState } from "react";
import L from "leaflet";
import SideBar from "./SideBar";
import "../Map.css";

import { getCity, getNearestCityUrl } from "../utility/GetData";
import { CityContext } from "../contexts/CityContext";

function Map() {
  const [map, setMap] = useState();
  const [lat1, setLat1] = useState();
  const [lng1, setLng1] = useState();
  const [lat2, setLat2] = useState();
  const [lng2, setLng2] = useState();
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
    if (map && cityOne) {
      setLat1(cityOne.latitude);
      setLng1(cityOne.longitude);
    }
    if (map && cityOne) {
      setLat2(cityTwo.latitude);
      setLng2(cityTwo.longitude);
    }
  }, [cityOne, cityTwo.latitude, cityTwo.longitude, map]);

  useEffect(() => {
    if (lat1 && lng1) {
      let marker1 = L.marker([lat1, lng1]).addTo(map);
      marker1.bindPopup(`${lat1}<br>${lng1}`).openPopup();
    }
    if (lat2 && lng2) {
      let marker2 = L.marker([lat2, lng2]).addTo(map);
      marker2.bindPopup(`${lat2}<br>${lng2}`).openPopup();
    }
  }, [lat1, lat2, lng1, lng2, map]);

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
      <SideBar />
    </div>
  );
}

export default Map;
