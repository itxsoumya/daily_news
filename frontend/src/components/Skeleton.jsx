const Skeleton = () => {
  let sklList = [];

  for (let i = 0; i < 9; i++) {
    sklList.push(
      <div className="flex flex-col gap-4" key={i}>
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-32"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div className="bg-red-300x grow grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {sklList}
    </div>
  );
};

export default Skeleton;
