import { useParams } from "react-router-dom";
import useFetchSearch from "../hooks/useFetchSearch";
import GridArticleCard from "./GridArticleCard";
import Skeleton from "./Skeleton";

const SearchResult = () => {
  const { item } = useParams();

  const { data, loading, error } = useFetchSearch(item);
  if (loading) {
    return <Skeleton />;
  }
  if (error) {
    console.error(error);
    return <div>we have an error</div>;
  }
  console.log(data);
  console.log(data.articles[0]);
  return (
    <div className="max-w-6xl mx-auto grow bg-white shadow-lg rounded-lg ">
      Search for: {item}
      <div className="grid md:grid-cols-3 sm:grid-cols-2">
        {data != null
          ? data.articles.map((article, index) => (
              <GridArticleCard
                title={article.title}
                description={article.description}
                mediaUrl={article.urlToImage}
                pubDate={article.publishedAt}
                key={index}
                articleUrl={article.url}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default SearchResult;
