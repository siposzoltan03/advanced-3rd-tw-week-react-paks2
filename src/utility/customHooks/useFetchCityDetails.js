import { useState, useEffect } from "react";
import { getCity } from "../GetData";

export const useFetchCityDetails = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getCity(url)
      .then(data => {
        setFetchedData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [url]);

  return [isLoading, fetchedData];
};
