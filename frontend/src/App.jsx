import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Navbar from "./components/Navbar";

import Signin from "./components/Signin";
import { Routes } from "react-router-dom";
import ReadMore from "./components/ReadMore";
import SearchDialog from "./components/SearchDialog";
import SearchResult from "./components/SearchResult";
import MainMenu from "./components/MainMenu";

import CategoryWrapperForLargeScreen from "./components/CategoryWrapperForLargeScreen";

import SignUp from "./components/SignUp";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import useAuthStore from "./state/useAuthStore";
import axios from "axios";
import { useEffect } from "react";
import Logout from "./components/Logout";
import SavedArticles from "./components/SavedArticles";

const App = () => {
  console.log("[+] App COmponent");

  const [loading, setLoading] = useState(true);
  const setGlobalUser = useAuthStore((state) => state.setUser);
  const setJwtToken = useAuthStore((state) => state.setToken);

  const checkIfUserExist = async () => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");

      if (jwtToken) {
        const res = await axios.post(
          "http://localhost:8080/api/users/authtoken",
          {},
          {
            headers: {
              Authorization: jwtToken,
            },
          }
        );

        setGlobalUser(res.data);
        setJwtToken(jwtToken);
      }
    } catch (err) {
      // console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkIfUserExist();
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="flex flex-col min-h-screen font-libre-baskerville">
      <Navbar />
      <SearchDialog />
      <MainMenu />
      <Toaster position="bottom-right" />

      <CategoryWrapperForLargeScreen />

      <div className="flex-grow text-lg p-4 pt-20 bg-green-200x flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/read/:topic" element={<ReadMore />} />
          <Route path="/search/:item" element={<SearchResult />} />
          <Route path="/savedArticles" element={<SavedArticles />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
