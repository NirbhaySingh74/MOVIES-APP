import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading("loading...");
      setData(null);
      setError(null);

      try {
        const res = await fetchDataFromApi(url);
        setLoading(false);
        setData(res);
      } catch (err) {
        setLoading(false);
        setError("Something went wrong!", err);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
