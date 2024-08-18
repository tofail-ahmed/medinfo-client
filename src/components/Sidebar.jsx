
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-red-300">
      <div className="flex flex-col gap-10">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to={"/dashboard/alluser"}>All user</NavLink>
            <NavLink to={"/dashboard/admin"}>Admin</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
