import { useState } from "react";

import { useNavigate } from "react-router-dom";
import useAuthStore from "../state/useAuthStore";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchInput}`);
    setSearchInput("");
  };

  const isUser = useAuthStore((state) => state.user);

  return (
    <div className="bg-pink-100 bg-opacity-40 blur-backdrop backdrop-blur-sm  fixed top-0 left-0 right-0 shadow-md z-[1000]">
      <div className="navbar bg-base-100x max-w-7xl mx-auto">
        <div className="flex-1">
          <a
            className="btn btn-ghost sm:text-3xl text-2xl"
            onClick={() => navigate("/")}
          >
            Daily News
          </a>
          {/* category */}
          <ul className="text-zinc-800 hover:text-zinc-950 flex gap-4 overflow-y-hidden bg-green-300x max-lg:hidden">
            <li
              className="hover:underline cursor-pointer decoration-4 underline-offset-4 decoration-gray-500"
              onClick={() => navigate("/read/music")}
            >
              Music
            </li>
            <li
              className="hover:underline cursor-pointer decoration-4 underline-offset-4 decoration-gray-500"
              onClick={() => navigate("/read/sports")}
            >
              Sports
            </li>
            <li
              className="hover:underline cursor-pointer decoration-4 underline-offset-4 decoration-gray-500"
              onClick={() => navigate("/read/international")}
            >
              international
            </li>
            <li
              className="hover:underline cursor-pointer decoration-4 underline-offset-4 decoration-gray-500"
              onClick={() => navigate("/read/science")}
            >
              Science
            </li>
            <li
              className="hover:underline cursor-pointer decoration-4 underline-offset-4 decoration-gray-500"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              More ...
            </li>
          </ul>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control max-lg:hidden">
            <form onSubmit={handleSubmit}>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="grow"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                  onClick={handleSubmit}
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </form>
          </div>
          {/* desktop profile section */}
          {isUser ? (
            <div className="dropdown dropdown-end max-lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ">
                  <img
                    alt="Profile"
                    src="https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {isUser.name}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => navigate("/savedArticles")}>
                    Saved Articles
                  </a>
                </li>
                <li>
                  <a onClick={() => navigate("/logout")}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-1 max-lg:hidden">
              <button className="btn" onClick={() => navigate("/signin")}>
                Signin
              </button>
              <button className="btn" onClick={() => navigate("/signup")}>
                Signup
              </button>
            </div>
          )}
        </div>

        {/* search for mobile */}
        <div
          className="btn btn-circle btn-ghost lg:hidden"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* Menu icon */}

        <label
          className="btn btn-circle swap swap-rotate lg:hidden"
          onClick={() => {
            // if (!document.getElementById('menu_icon_checkbox').checked){
            document.getElementById("my_modal_2").showModal();
            // }
          }}
        >
          <input type="checkbox" id="menu_icon_checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current z-50"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            // onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        {/* end icon menu */}
      </div>
    </div>
  );
};

export default Navbar;
