import React, { useState } from "react";

export const CityContext = React.createContext();

export const CityProvider = props => {
  const [cityOne, setCityOne] = useState({});
  const [cityTwo, setCityTwo] = useState({});

  return (
    <CityContext.Provider
      value={{ city1: [cityOne, setCityOne], city2: [cityTwo, setCityTwo] }}
    >
      {props.children}
    </CityContext.Provider>
  );
};
