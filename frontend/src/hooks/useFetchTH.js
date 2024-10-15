import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";

const useFetchTH = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        const text = response.data;

        const parser = new XMLParser({
          ignoreAttributes: false,
          attributeNamePrefix: "",
        });
        const jsonObj = parser.parse(text);

        console.log(jsonObj);

        // Extract the desired data
        const items = jsonObj.rss.channel.item.map((item) => {
          const mediaContent = item["media:content"]
            ? item["media:content"]
            : {};
          return {
            title: item.title,
            link: item.link,
            description: item.description,
            pubDate: item.pubDate,
            mediaUrl: mediaContent.url || null,
          };
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setData(items);
      } catch (err) {
        console.error("Error fetching or parsing RSS feed:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchTH;
