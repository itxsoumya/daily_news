import { useParams } from "react-router-dom";

import HomeSection from "./HomeSection";

const ReadMore = () => {
  const { topic } = useParams();

  const urlMap = {
    india: "/api/feeder/default.rss",
    international: "/api/news/international/feeder/default.rss",
    world: "/api/news/international/feeder/default.rss",
    sports: "/api/sport/feeder/default.rss",
    entertainment: "/api/entertainment/feeder/default.rss",
    music: "/api/entertainment/music/feeder/default.rss",
    science: "/api/sci-tech/science/feeder/default.rss",
    "Life & Style": "/api/life-and-style/feeder/default.rss",
    states: "/api/news/states/feeder/default.rss",
    cities: "/api/news/cities/feeder/default.rss",
    industry: "/api/business/Industry/feeder/default.rss",
    economy: "/api/business/Economy/feeder/default.rss",
    agribusiness: "/api/business/agri-business/feeder/default.rss",
    markets: "/api/business/markets/feeder/default.rss",
    budget: "/api/business/budget/feeder/default.rss",
    cricket: "/api/sport/cricket/feeder/default.rss",
    football: "/api/sport/football/feeder/default.rss",
    hockey: "/api/sport/hockey/feeder/default.rss",
    art: "/api/entertainment/art/feeder/default.rss",
    dance: "/api/entertainment/dance/feeder/default.rss",
    movies: "/api/entertainment/movies/feeder/default.rss",
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
