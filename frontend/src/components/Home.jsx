import useFetchTH from "../hooks/useFetchTH";
import Skeleton from "./Skeleton";
import GridView from "./GridView";
import { memo } from "react";
import HomeSection from "./HomeSection";

const Home = memo(() => {
  

  console.log("[+] Home component");

  return (
    <div className="max-w-6xl mx-auto grow bg-white shadow-lg rounded-lg ">
      {/* <a className="m-2 link font-bold text-2xl text-red-500 uppercase">
        INDIA
      </a>
      <GridView articles={data} onlyImg={true} /> */}

      <HomeSection
        rssUrl="/api/feeder/default.rss"
        onlyImg={true}
        heading={"INDIA"}
        limit={6}
      />
      <div className="mt-10"></div>
      <HomeSection
        rssUrl="/api/news/international/feeder/default.rss"
        onlyImg
        heading={"WORLD"}
        limit={6}
      />

      <div className="mt-10"></div>
      <HomeSection
        rssUrl="/api/sport/feeder/default.rss"
        onlyImg
        heading={"SPORTS"}
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
