import React from "react";

export const City = props => {
  const name = 0;
  const score = 1;
  if (props.cityName !== undefined) {
    return (
      <div className="city">
        <p>{props.cityName}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default City;
