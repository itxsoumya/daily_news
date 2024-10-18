import toast from "react-hot-toast";
import useFetchSavedNews from "../hooks/useFetchSavedNews";
import GridView from "./GridView";
import useAuthStore from "../state/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Skeleton from "./Skeleton";
import axios from "axios";

const SavedArticles = () => {
  const navigate = useNavigate();
  const AuthUser = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!AuthUser) {
      navigate("/");
    }
  }, [AuthUser, navigate]);

  const { data, setData, loading, error } = useFetchSavedNews(AuthUser);
  const handleRemoveArticle = async (articleID) => {
    try {
      const res = await axios.delete(
        "http://localhost:8080/api/users/deleteSavedArticle",
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
          },
          data: {
            articleID,
          },
        }
      );
      setData(res.data);
      toast.success("Successfully removed");
    } catch (err) {
      if (err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        console.log(err);
        toast.error("Some unknown error occured");
      }
    }
  };
  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    console.log(error);
    toast.error("could not fetch due to some internal error");
  }

  return (
    <div className="max-w-6xl mx-auto grow bg-white shadow-lg rounded-lg ">
      <span className="px-2 font-oswald text-3xl uppercase text-red-600 font-semibold">
        Saved Articles
      </span>

      <GridView
        articles={data}
        limit={null}
        onlyImg={false}
        handleRemoveArticle={handleRemoveArticle}
      />
    </div>
  );
};

export default SavedArticles;
