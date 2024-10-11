import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toggleDarkMode } from "../redux/theme/themeslice";
import { clearMedInfoUserCred } from "../redux/user/userSlice";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useSelector((state) => state.medInfoUser.medInfoUserCred);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const darkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  const handleLogout = () => {
    dispatch(clearMedInfoUserCred());
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-green-600/30 mx-auto relative z-20">
      <div className="flex justify-between items-center mx-8">
        <span className="flex items-center justify-around gap-2">
          <NavLink to={"/"}>
            <img className="w-[50px]" src="/src/assets/medInfo.png" alt="Logo" />
          </NavLink>
          {/* <NavLink className="bg-green-400 rounded-md font-bold m-4 p-2" to={"/medCat"}>
            Category
          </NavLink> */}
        </span>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white bg-green-500 p-2 rounded-md"
          >
            Menu
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 justify-end">
          <NavLink className="bg-green-400 rounded-md font-bold m-4 p-2" to={"/medCat"}>
            Category
          </NavLink>
          {userData && userData.role === "admin" && (
            <NavLink className="bg-green-400 rounded-md font-bold m-4 p-2" to={"/dashboard"}>
              Dashboard
            </NavLink>
          )}
          {userData && userData.email ? (
            <div>
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
          {userData && userData.email && (
            <NavLink className="bg-green-400 rounded-md font-bold m-4 p-2" to={"/profile"}>
              {userData?.name.split(" ")[0]}
            </NavLink>
          )}
          <button onClick={darkModeHandler}>
            <div className="bg-green-400 rounded-md font-bold m-4 p-2">
              {darkMode ? "Light" : "Dark"}
            </div>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isDropdownOpen && (
        <div className="md:hidden bg-green-500 text-white p-4 w-64 absolute left-0 top-16 z-50">
          <NavLink className="block bg-green-400 rounded-md font-bold m-2 p-2" to={"/medCat"}>
            Category
          </NavLink>
          {userData && userData.role === "admin" && (
            <NavLink className="block bg-green-400 rounded-md font-bold m-2 p-2" to={"/dashboard"}>
              Dashboard
            </NavLink>
          )}
          {userData && userData.email ? (
            <NavLink
              className="block bg-green-400 rounded-md font-bold m-2 p-2"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink className="block bg-green-400 rounded-md font-bold m-2 p-2" to={"/login"}>
              Login
            </NavLink>
          )}
          {userData && userData.email && (
            <NavLink className="block bg-green-400 rounded-md font-bold m-2 p-2" to={"/profile"}>
              {userData?.name.split(" ")[0]}
            </NavLink>
          )}
          <button
            onClick={darkModeHandler}
            className="block bg-green-400 rounded-md font-bold m-2 p-2"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
