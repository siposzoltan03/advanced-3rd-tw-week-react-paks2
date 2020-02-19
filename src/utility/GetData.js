import Axios from "axios";

export function getCity(url) {
  return Axios.get(url).then(resp => ({
    geonameId: resp.data.geoname_id,
    name: resp.data.name,
    urbanArea: ((resp.data._links || {})["city:urban_area"] || {}).href,
    population: resp.data.population,
    latitude: resp.data.location.latlon.latitude,
    longitude: resp.data.location.latlon.longitude,
    fullName: resp.data.full_name
  }));
}

export function getNearestCityUrl(lat, lng) {
  return Axios.get(
    `https://api.teleport.org/api/locations/${lat},${lng}/`
  ).then(
    resp =>
      (
        (((resp.data._embedded["location:nearest-cities"] || {})[0] || {})
          ._links || {})["location:nearest-city"] || {}
      ).href
  );
}
