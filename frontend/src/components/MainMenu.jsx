import { useNavigate } from "react-router-dom";
import Category from "./Category";
import useAuthStore from "../state/useAuthStore";

const MainMenu = () => {
  const AuthUser = useAuthStore((state) => state.user);

  const navigate = useNavigate();

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box bg-red-300x h-full">
        <form
          method="dialog"
          onClick={() => {
            document.getElementById("menu_icon_checkbox").checked = false;
          }}
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div className="flex flex-col bg-cyan-300x gap-1 mt-14">
          {AuthUser ? (
            <>
              <div className="avatar placeholder bg-red-400x mx-auto">
                <div className="bg-neutral text-neutral-content w-24 rounded-full">
                  <span className="text-3xl">
                    {AuthUser.name[0].toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="text-2xl  text-center break-words">
                {AuthUser.name}
              </div>
              <div className="flex gap-2 mt-4 ">
                <button
                  className="btn w-1/2"
                  onClick={() => {
                    document.getElementById(
                      "menu_icon_checkbox"
                    ).checked = false;
                    document.getElementById("my_modal_2").close();
                    navigate("/savedArticles");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Saved Article
                </button>
                <div className="btn w-1/2" onClick={() => navigate("/logout")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    />
                  </svg>
                  Logout
                </div>
              </div>
            </>
          ) : (
            <div className="flex gap-3">
              <button
                className="btn btn-neutral grow"
                onClick={() => {
                  document.getElementById("menu_icon_checkbox").checked = false;
                  document.getElementById("my_modal_2").close();
                  navigate("/signup");
                }}
              >
                Sign Up
              </button>
              <button
                className="btn grow"
                onClick={() => {
                  document.getElementById("menu_icon_checkbox").checked = false;
                  document.getElementById("my_modal_2").close();
                  navigate("/signin");
                }}
              >
                Sign In
              </button>
            </div>
          )}
        </div>

        <Category />
      </div>
    </dialog>
  );
};

export default MainMenu;
