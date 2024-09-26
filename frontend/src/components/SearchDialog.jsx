import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchDialog = () => {
  const [searchItem, setSearchItem] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_1").close();
    navigate(`/search/${searchItem}`);
    setSearchItem('')
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-xl font-oswald">
          Hello! Search Here ...
        </h3>
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2 my-4">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button
            type="submit"
            className="btn btn-neutral w-full font-oswaldx text-lg"
          >
            Search
          </button>
        </form>

        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default SearchDialog;
