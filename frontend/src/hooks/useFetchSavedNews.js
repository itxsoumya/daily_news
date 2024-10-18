import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const useFetchSavedNews = (AuthUser) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `http://localhost:8080/api/users/getSavedArticles`,
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
          },
        }
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setData(res.data);
    } catch (err) {
      console.error("Error fetching saved article data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (AuthUser) {
      fetchData();
    }
  }, [AuthUser]);

  return { data, setData, loading, error };
};

export default useFetchSavedNews;
