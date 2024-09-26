import Category from "./Category";

const MainMenu = () => {
  console.log("menuuuu");
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box bg-red-300x h-full">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div className="flex gap-5 mt-14">
          {/* <div className="btn grow btn-neutral">Sign In</div>
          <div className="btn grow">Sign Up</div> */}
        </div>

        <div className="flex flex-col bg-cyan-300x gap-1">
          <div className="avatar placeholder bg-red-400x mx-auto">
            <div className="bg-neutral text-neutral-content w-24 rounded-full">
              <span className="text-3xl">D</span>
            </div>
          </div>
          <div className="text-2xl  text-center break-words">John Doe</div>
          <div className="flex gap-2 mt-4 ">
            <button className="btn w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Liked Post
            </button>
            <div className="btn w-1/2">
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
        </div>

        <Category/>
    

      </div>
    </dialog>
  );
};

export default MainMenu;
