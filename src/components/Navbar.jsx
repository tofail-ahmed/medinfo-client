import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="bg-emerald-300 mx-auto">
      <div className="flex justify-around items-center ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
    </div>
  )
}

export default Navbar