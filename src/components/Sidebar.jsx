
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleDarkMode } from "../redux/theme/themeslice";


const Sidebar = () => {
  const dispatch=useDispatch();
  const darkMode=useSelector((state)=>state.theme.darkMode);
  const darkModeHnadler = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div className="bg-red-300/30   ">
      <div className="flex flex-col gap-10 justify-around">
      <button  onClick={darkModeHnadler} >
                <div className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"}>
                {darkMode ? "Light" :"Dark"}
                </div>
              </button>
            <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to={'/'}>Home</NavLink>
            <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to="/dashboard">Dashboard</NavLink>
            <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to={"/dashboard/alluser"}>All user</NavLink>
            <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to={"/dashboard/admin"}>Admin</NavLink>
            <NavLink className={"bg-green-400 rounded-md font-bold m-4 text-center p-2"} to={"/dashboard/addMedicine"}>Add Medicine</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
