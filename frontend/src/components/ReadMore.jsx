import { useParams } from "react-router-dom";

import HomeSection from "./HomeSection";

const ReadMore = () => {
  const { topic } = useParams();

  const urlMap = {
    india: "/api/feeder/default.rss",
    internetional: "/api/news/international/feeder/default.rss",
    world: "/api/news/international/feeder/default.rss",
    sports: "/api/sport/feeder/default.rss",
    entertainment: "/api/entertainment/feeder/default.rss",
  };

  return (
    <div className="max-w-6xl mx-auto grow bg-white shadow-lg rounded-lg ">
      {topic in urlMap ? (
        <HomeSection
          rssUrl={urlMap[topic]}
          onlyImg={true}
          heading={topic}
          limit={0}
        />
      ) : (
        "Not found"
      )}
    </div>
  );
};

export default ReadMore;
