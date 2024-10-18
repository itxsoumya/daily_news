import { memo } from "react";
import HomeSection from "./HomeSection";

const Home = memo(() => {
  return (
    <div className="max-w-6xl mx-auto grow bg-white shadow-lg rounded-lg ">
      <HomeSection
        rssUrl="/api/feeder/default.rss"
        onlyImg={true}
        heading={"india"}
        limit={6}
      />
      <div className="mt-10"></div>
      <HomeSection
        rssUrl="/api/news/international/feeder/default.rss"
        onlyImg
        heading={"world"}
        limit={6}
      />

      <div className="mt-10"></div>
      <HomeSection
        rssUrl="/api/sport/feeder/default.rss"
        onlyImg
        heading={"sports"}
        limit={6}
      />
      <div className="mt-10"></div>
      <HomeSection
        rssUrl="/api/entertainment/feeder/default.rss"
        onlyImg
        heading={"ENTERTAINMENT"}
        limit={6}
      />
      <div className="mt-10"></div>
      <HomeSection
        rssUrl="/api/life-and-style/feeder/default.rss"
        onlyImg
        heading={"Life & Style"}
        limit={6}
      />
    </div>
  );
});

export default Home;
