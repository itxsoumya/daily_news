import Category from "./Category";

const CategoryWrapperForLargeScreen = () => {
  return (
    <dialog id="my_modal_3" className=" bg-cyan-200x p-3 rounded-2xl glass">
      <div className="bg-red-200x  ">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <Category />
      </div>
    </dialog>
  );
};

export default CategoryWrapperForLargeScreen;
