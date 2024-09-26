import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const useFetchSearch = (q, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${q}&apiKey=${
            import.meta.env.VITE_NEWSAPI_KEY
          }`
        );

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setData(response.data);
      } catch (err) {
        console.error("Error fetching or parsing Search data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [q]);

  return { data, loading, error };
};

export default useFetchSearch;
