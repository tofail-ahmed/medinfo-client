import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="bg-emerald-300 mx-auto">
      <div className="flex justify-around items-center ">
        <NavLink>Home</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>About</NavLink>
      </div>
    </div>
  )
}

export default Navbar