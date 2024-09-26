const Category = () => {
  return (
    <div>
      <h1 className="text-2xl  font-oswal mt-4">Category</h1>

      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:min-w-max mt-4 ">
        <li >
          <a>News</a>
          <ul>
            <li>
              <a>India</a>
            </li>
            <li>
              <a>World</a>
            </li>
            <li>
              <a>States</a>
            </li>
            <li>
              <a>Cities</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Business</a>
          <ul>
            <li>
              <a>Industry</a>
            </li>
            <li>
              <a>Economy</a>
            </li>
            <li>
              <a>Agri-Business</a>
            </li>
            <li>
              <a>Market</a>
            </li>
            <li>
              <a>Budget</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Sports</a>
          <ul>
            <li>
              <a>Cricket</a>
            </li>
            <li>
              <a>Football</a>
            </li>
            <li>
              <a>Hockey</a>
            </li>
            <li>
              <a>Entertainment</a>
              <ul>
                <li>
                  <a>Art</a>
                </li>
                <li>
                  <a>Dance</a>
                </li>
                <li>
                  <a>Movies</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a>Company</a>
          <ul>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Privacy policy</a>
            </li>
            
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Category;
