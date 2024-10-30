import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="text-2xl  font-oswal mt-4">Category</h1>

      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:min-w-max mt-4 ">
        <li >
          <a>News</a>
          <ul>
            <li>
              <a onClick={()=>navigate('/read/india')}>India</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/worlds')}>World</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/states')}>States</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/cities')}>Cities</a>
            </li>
          </ul>
        </li>
        <li>
          <a >Business</a>
          <ul>
            <li>
              <a onClick={()=>navigate('/read/industry')}>Industry</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/economy')}>Economy</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/agribusiness')}>Agri-Business</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/market')}>Market</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/budget')}>Budget</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Sports</a>
          <ul>
            <li>
              <a onClick={()=>navigate('/read/cricket')}>Cricket</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/football')}>Football</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/hockey')}>Hockey</a>
            </li>
            <li>
              <a onClick={()=>navigate('/read/entertainment')}>Entertainment</a>
              <ul>
                <li>
                  <a onClick={()=>navigate('/read/art')}>Art</a>
                </li>
                <li>
                  <a onClick={()=>navigate('/read/dance')}>Dance</a>
                </li>
                <li>
                  <a onClick={()=>navigate('/read/movies')}>Movies</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a>Company</a>
          <ul>
            <li>
              <a onClick={()=>navigate('/aboutus')}>About us</a>
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
