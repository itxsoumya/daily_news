const GridArticleCard = ({ mediaUrl, description, title, pubDate }) => {
    const formattedDate = (pubDate) => {
        const date = new Date(pubDate);
    
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
    
        const formattedDate = `${date.getDate()}-${
          monthNames[date.getMonth()]
        }-${date.getFullYear()}`;
    
        return formattedDate
      };
  return (
    <div className="m-2 shadow-lg rounded-md bg-zinc-100 border hover:shadow-2xl flex flex-col">
      <figure>
        <img src={mediaUrl} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-oswald text-2xl">
          
          {title}
        </h2>
        <p className="">{description}</p>
        <div className="card-actions ">
          <div className="grow">
            <div className="badge badge-neutral badge-outline ">
              {formattedDate(pubDate)}
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GridArticleCard;
