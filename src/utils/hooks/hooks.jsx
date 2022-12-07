import { React, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!url) return;
    fetchData();
  }, [url]);

  return { isLoading, data };
};
