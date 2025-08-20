import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector} from "react-redux";
import { API_END_POINT } from "../utils/constants";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";
import Browse from "./Browse";

const Header = () => {

  
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store)=> store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user);

  const logoutHandler = async()=>{
       try {
          const res = await axios.get(`${API_END_POINT}/logout`)
          // console.log(res);
          if(res.data.message){
              toast.success(res.data.message);
          }

          dispatch(setUser(null));
          navigate("/");
       } catch (error) {
          console.log(error);
       }
  }
  const toggleHandler = ()=>{
     dispatch(setToggle())
  }
  
  return (
    <div className="fixed left-0 top-0 py-4  w-full z-100 bg-gradient-to-b px-5 from-black flex items-center justify-between">
      <img
        className="w-40 "
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex items-center ">
          <IoIosArrowDropdownCircle size="24px" color="white" />
          <h1 className="text-lg font-medium text-white">{user.fullName}</h1>
          <div className="ml-4">
            <button onClick={logoutHandler} className="bg-red-400 text-white px-4 py-2 cursor-pointer rounded-xl">
              Logout
            </button>
            <button onClick={toggleHandler} className="bg-red-400 text-white px-4 py-2 ml-2 cursor-pointer rounded-xl">
              {toggle ? "Browse" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
