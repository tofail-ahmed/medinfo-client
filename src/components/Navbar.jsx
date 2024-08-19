import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { toggleDarkMode } from "../redux/theme/themeslice";


const Navbar = () => {
  const dispatch=useDispatch();
  const darkMode=useSelector((state)=>state.theme.darkMode);
  const darkModeHnadler = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div className="bg-red-300/30 mx-auto">
      <div className="flex justify-around items-center ">
        <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to={"/"}>Home</NavLink>
        <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to={"/contact"}>Contact</NavLink>
        <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to={"/about"}>About</NavLink>
        <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to={"/dashboard"}>Dashboard</NavLink>
        <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to={"/search"}>Search</NavLink>
        <button  onClick={darkModeHnadler} >
                <div className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"}>
                {darkMode ? "Light" :"Dark"}
                </div>
              </button>
      </div>
    </div>
  )
}

export default Navbar