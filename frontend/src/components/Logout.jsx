import { useEffect } from "react";
import useAuthStore from "../state/useAuthStore";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()
  const setGlobalUser = useAuthStore((state) => state.setUser);
  const setjwtToken = useAuthStore((state) => state.setUser);

  const logout = async () => {
    try {
      localStorage.removeItem("jwtToken");
      setGlobalUser(null);
      setjwtToken(null);
    } catch (err) {
      console.log(err);
    }finally{
        navigate('/')
    }
  };

  useEffect(() => {
    logout();
  });
  return <div>Logout...</div>;
};

export default Logout;
