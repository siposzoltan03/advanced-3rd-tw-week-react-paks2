import Axios from "axios";

function getCity(url) {
  return Axios.get(url).then(resp => ({
    geonameId: resp.data.geoname_id,
    name: resp.data.name,
    urbanArea: resp.data._links["city:urban_area"].href,
    population: resp.data.population,
    latitude: resp.data.location.latlon.latitude,
    longitude: resp.data.location.latlon.longitude,
    fullName: resp.data.full_name
  }));
}

export default getCity;
