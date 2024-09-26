import useFetchTH from "../hooks/useFetchTH";
import Skeleton from "./Skeleton";
import GridView from "./GridView";
import { memo } from "react";

const HomeSection = memo(({ rssUrl, onlyImg, heading, limit }) => {
  // const rssUrl = "/api/news/national/feeder/default.rss";
  // const rssUrl = "/api/feeder/default.rss";

  const { data, loading, error } = useFetchTH(rssUrl);

  if (loading) {
    return <Skeleton />;
  }
  if (error) {
    console.error(error);
  }

  console.log("[+] Home component");

  return (
    <>
      <a className="m-2 link font-bold text-2xl text-red-600 uppercase">
        <span className="font-oswald text-3xl">
            {heading}
        </span>
      </a>
      <GridView articles={data} onlyImg={onlyImg} limit={limit} />
    </>
  );
});
export default HomeSection;
