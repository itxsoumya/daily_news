import toast from "react-hot-toast";
import useAuthStore from "../state/useAuthStore";
import axios from "axios";
import { useLocation } from "react-router-dom";

const GridArticleCard = ({
  mediaUrl,
  description,
  title,
  pubDate,
  articleUrl,
  handleRemoveArticle,
  articleID,
}) => {
  const AuthUser = useAuthStore((state) => state.user);
  const location = useLocation();
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

    return formattedDate;
  };

  const handleSaveItem = async () => {
    try {
      if (!AuthUser) {
        toast.error("Please Signin to save article");
        return;
      }

      const res = axios.post(
        "http://localhost:8080/api/users/saveArticle",
        {
          title,
          mediaUrl,
          description,
          pubDate,
          articleUrl,
          userId: AuthUser.id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
          },
        }
      );

      toast.success("Article saved successfully");
    } catch (err) {
      console.log(err);
      toast.error("Could not save this article due to some internal error");
    }
  };

  return (
    <div className="m-2 shadow-lg rounded-md bg-zinc-100 border hover:shadow-2xl flex flex-col">
      <figure>
        <img src={mediaUrl} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-oswald text-2xl hover:underline hover:cursor-pointer decoration-2">
          <a href={articleUrl}>{title}</a>
        </h2>
        <p className="">{description}</p>
        <div className="card-actions ">
          <div className="grow">
            <div className="badge badge-neutral badge-outline ">
              {formattedDate(pubDate)}
            </div>
          </div>
          {location.pathname != "/savedArticles" ? (
            <div className="tooltip" data-tip="Click To Save">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 cursor-pointer "
                onClick={() => handleSaveItem()}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          ) : (
            <div className="tooltip" data-tip="Click To Remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 cursor-pointer"
                onClick={() => {
                  handleRemoveArticle(articleID);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          )}

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
