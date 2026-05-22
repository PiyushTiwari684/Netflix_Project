import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const toggleMode = () => setIsLogin((prev) => !prev);

  const getErrorMessage = (error) =>
    error?.response?.data?.message || error?.message || "Something went wrong";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      if (isLogin) {
        const res = await axios.post(
          `${API_END_POINT}/login`,
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setUser(res.data.user));
          navigate("/browse");
        }
      } else {
        const res = await axios.post(
          `${API_END_POINT}/register`,
          { fullName, email, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
          setIsLogin(true);
        }
      }
    } catch (error) {
      toast.error(getErrorMessage(error));
      console.error(error);
    } finally {
      dispatch(setLoading(false));
      setFullName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="banner"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      <form
        className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 p-8 rounded-lg w-full max-w-md text-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>
        <div className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-2 rounded bg-gray-150/10 border focus:h-14 transition-all duration-200 text-white outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          )}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 rounded bg-gray-150/10 border focus:h-14 transition-all duration-200 text-white outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              required
              minLength={6}
              className="w-full p-2 rounded bg-gray-150/10 border focus:h-14 transition-all duration-200 text-white outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold transition cursor-pointer disabled:opacity-60"
          >
            {isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}
          </button>
          <p>
            {isLogin ? "New to Netflix?" : "Already have an account?"}{" "}
            <span onClick={toggleMode} className="text-blue-600 cursor-pointer">
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
