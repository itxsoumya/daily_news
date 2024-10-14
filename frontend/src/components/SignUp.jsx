import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8080/api/users/signup", {
        name,
        email,
        password,
      });
      console.log(res.data);
      toast.dismiss();
      toast.success("Your account has been created successfully");

      navigate("/signin");
    } catch (err) {
      console.log(err);
      // toast.error(err.message)
      toast.error("Some unknown error occured");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex bg-red-100x  grow justify-center items-center font-sansx">
      <div className="flex justify-center self-center  ">
        <div className="p-12 sm:shadow-md sm:bg-gray-50 mx-auto rounded-lg w-100 bg-cyan-50x">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h3 className="font-semibold text-3xl text-gray-800 font-oswald ">
                Sign Up
              </h3>
              <p className="text-gray-500 text-sm">
                Please sign up for your account.
              </p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Name
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  type="text"
                  placeholder="enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  type=""
                  placeholder="mail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  type=""
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn w-full btn-neutral mt-6"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loading loading-spinner"></div>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </div>
            <div
              className="pt-5 text-center text-gray-400 text-sm link hover:text-sky-500"
              onClick={() => navigate("/signin")}
            >
              or Sign In
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
