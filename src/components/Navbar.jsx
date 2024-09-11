import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleDarkMode } from "../redux/theme/themeslice";
// import { useState, useEffect } from "react";
// import { getUserCred } from "../utils/utils";
import {clearMedInfoUserCred} from "../redux/user/userSlice"
import Search from "../search/Search";



const Navbar = () => {
 
  const userData=useSelector((state)=>state.medInfoUser.medInfoUserCred)
  // console.log(userData)
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const darkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  const handleLogout = () => {
   
    dispatch(clearMedInfoUserCred());  
  };

 

  
  

  return (
    <div className="bg-red-300/30 mx-auto">
      <div className="flex justify-between items-center mx-8">
        <NavLink to={"/"}>
          <img className="w-[50px]" src="/src/assets/medInfo.png" alt="Logo" />
        </NavLink>
        {/* <NavLink className="bg-green-400 rounded-md font-bold m-4 p-2" to={"/contact"}>
          Contact
        </NavLink>
        <NavLink className="bg-green-400 rounded-md font-bold m-4 p-2" to={"/about"}>
          About
        </NavLink> */}
        <div className="flex items-center gap-2 justify-end">
        {userData && userData.role === "admin" && (
          <NavLink className="bg-green-400 rounded-md font-bold m-4 p-2" to={"/dashboard"}>
            Dashboard
          </NavLink>
        )}
        {/* <NavLink className="bg-green-400 rounded-md font-bold m-4 p-2" to={"/search"}>
          Search
        </NavLink> */}
        {userData && userData.email ? (
         
         <div >
           <NavLink
            className="bg-green-400 rounded-md font-bold m-4 p-2"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
          
         </div>
           
         
        ) : (
          <NavLink className="bg-green-400 rounded-md font-bold m-4 p-2" to={"/login"}>
            Login
          </NavLink>
        )}
        {
          userData && userData.email &&
        
        (<NavLink
          className="bg-green-400 rounded-md font-bold m-4 p-2"
          to={"/profile"}
        >
          {userData?.name.split(" ")[0]}
        </NavLink>)
        }
        <button onClick={darkModeHandler}>
          <div className="bg-green-400 rounded-md font-bold m-4 p-2">
            {darkMode ? "Light" : "Dark"}
          </div>
        </button>
        </div>
        
      </div>
      <div>
      <div>
     {/* <Search></Search> */}
     </div>
      </div>
    </div>
  );
};

export default Navbar;
