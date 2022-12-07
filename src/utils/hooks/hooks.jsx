import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!url) return;
    fetchData();
    // eslint-disable-next-line
  }, [url]);

  return { isLoading, data };
};
