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

export function getUrbanAreaScoresUrl(url) {
  return Axios.get(url).then(res => (
      {
        urbanAreaScores: ((res.data._links || {})["ua:scores"] || {}).href
      }
    )
  );
}

export function getUrbanAreaScores(url) {
  return Axios.get(url).then(res => res.categories).then(scores => (
      {
        housing: [scores[0].name, scores[0]["score_out_of_10"]],
        costOfLiving: [scores[1].name, scores[1]["score_out_of_10"]],
        travelConnectivity: [scores[4].name, scores[4]["score_out_of_10"]],
        safety: [scores[7].name, scores[7]["score_out_of_10"]],
        environmentalQuality: [scores[10].name, scores[10]["score_out_of_10"]],
        internetAccess: [scores[13].name, scores[13]["score_out_of_10"]],
        leisureAndCulture: [scores[14].name, scores[14]["score_out_of_10"]]
      }
    )
  );
}
