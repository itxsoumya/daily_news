import useFetchTH from "../hooks/useFetchTH";
import Skeleton from "./Skeleton";
import GridView from "./GridView";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const HomeSection = memo(({ rssUrl, onlyImg, heading, limit }) => {
  const { data, loading, error } = useFetchTH(rssUrl);
  const navigate = useNavigate();
  if (loading) {
    return <Skeleton />;
  }
  if (error) {
    console.error(error);
  }

  return (
    <>
      <a className="m-2 link font-bold text-2xl text-red-600 uppercase">
        <span
          className="font-oswald text-3xl tooltip tooltip-bottom hover:underline"
          data-tip="Click To See More"
          onClick={() => navigate(`/read/${heading}`)}
        >
          {heading}
        </span>
      </a>
      <GridView articles={data} onlyImg={onlyImg} limit={limit} />
    </>
  );
});
export default HomeSection;
