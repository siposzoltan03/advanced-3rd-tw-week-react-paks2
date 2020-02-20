import React from "react";

export const City = props => {
  const name = 0;
  const score = 1;
  if (props.cityName !== undefined && props.housing !== undefined) {
    return (
      <div className="city">
        <h2>{props.cityName}</h2>
        <p>{props.fullName}</p>
        <p>Population: {props.population}</p>
        <h3>Ratings</h3>
        <p>{props.housing[name]}</p>
        <p>{props.housing[score]}</p>
        <p>{props.costOfLiving[name]}</p>
        <p>{props.costOfLiving[score]}</p>
        <p>{props.travelConnectivity[name]}</p>
        <p>{props.travelConnectivity[score]}</p>
        <p>{props.safety[name]}</p>
        <p>{props.safety[score]}</p>
        <p>{props.environmentalQuality[name]}</p>
        <p>{props.environmentalQuality[score]}</p>
        <p>{props.internetAccess[name]}</p>
        <p>{props.internetAccess[score]}</p>
        <p>{props.leisureAndCulture[name]}</p>
        <p>{props.leisureAndCulture[score]}</p>
      </div>
    );
  } else if (props.cityName !== undefined && props.housing === undefined) {
    return (
      <div className="city">
        <h2>{props.cityName}</h2>
        <p>{props.fullName}</p>
        <p>Population: {props.population}</p>
        <p>No further details available...</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default City;
