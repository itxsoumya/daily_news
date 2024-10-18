import { memo } from "react";

import GridArticleCard from "./GridArticleCard";

const GridView = memo(({ articles, onlyImg, limit, handleRemoveArticle }) => {
  if (onlyImg) {
    articles = articles.filter((e) => {
      if (e.mediaUrl) {
        return e;
      }
    });
  }

  if (limit) {
    articles = articles.slice(0, limit);
  }

  console.log(articles[0]);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2">
      {articles != null
        ? articles.map((i, index) => {
            return (
              <GridArticleCard
                title={i.title}
                description={i.description}
                pubDate={i.pubDate}
                key={index}
                mediaUrl={i.mediaUrl}
                articleUrl={i.link || i.articleUrl}
                handleRemoveArticle={handleRemoveArticle}
                articleID={i._id ? i._id : null}
              />
            );
          })
        : ""}
    </div>
  );
});

export default GridView;
