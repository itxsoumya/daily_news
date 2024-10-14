import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Rough from "./components/Rough";
import Signin from "./components/Signin";
import { Routes } from "react-router-dom";
import ReadMore from "./components/ReadMore";
import SearchDialog from "./components/SearchDialog";
import SearchResult from "./components/SearchResult";
import MainMenu from "./components/MainMenu";
import Category from "./components/Category";
import CategoryWrapperForLargeScreen from "./components/CategoryWrapperForLargeScreen";
import NewsLetter from "./components/NewsLetter";
import SignUp from "./components/SignUp";
import { Toaster } from "react-hot-toast";
import { ToastBar } from "react-hot-toast";

const App = () => {
  console.log("[+] App COmponent");

  return (
    <div className="flex flex-col min-h-screen font-libre-baskerville">
      <Navbar />
      <SearchDialog/>
      <MainMenu/>
      <Toaster position="bottom-right"/>
      
      <CategoryWrapperForLargeScreen/>

      <div className="flex-grow text-lg p-4 pt-20 bg-green-200x flex">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/read/:topic" element={<ReadMore />} />
          <Route path="/search/:item" element={<SearchResult/>}/>
        </Routes>
      </div>

      {/* <NewsLetter/> */}

      <Footer />
    </div>
  );
};

export default App;
