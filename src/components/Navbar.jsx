import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { toggleDarkMode } from "../redux/theme/themeslice";
import { clearMedInfoUserCred } from "../redux/user/userSlice";
import { CgMenuGridR } from "react-icons/cg";
import { ImMenu3,ImMenu4  } from "react-icons/im";


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
          {/* <Button
            variant="contained"
            color="success"
            component={NavLink}
            to={"/medCat"}
            sx={{ margin: "0 1rem" }}
          >
            Category
          </Button> */}
        </span>

        {/* Mobile Toggle Button */}
        <div className="md:hidden ">
          <IconButton onClick={toggleDropdown} color="inherit" >
           <div className="text-3xl text-red-600">
           {
              isDropdownOpen?<ImMenu4 />:<ImMenu3 />
            }
           </div>
          
          </IconButton>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 justify-end py-2">
          <Button
            variant="contained"
            color="success"
            component={NavLink}
            to={"/medCat"}
            sx={{ margin: "0 1rem" }}
          >
            Category
          </Button>
      
          {userData && userData.role === "admin" && (
            <Button
              variant="contained"
              color="success"
              component={NavLink}
              to={"/dashboard"}
              sx={{ margin: "0 1rem" }}
            >
              Dashboard
            </Button>
          )}
          {userData && userData.email ? (
            <Button
              variant="contained"
              color="success"
              onClick={handleLogout}
              sx={{ margin: "0 1rem" }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              component={NavLink}
              to={"/login"}
              sx={{ margin: "0 1rem" }}
            >
              Login
            </Button>
          )}
          {userData && userData.email && (
            <Button
              variant="contained"
              color="success"
              component={NavLink}
              to={"/profile"}
              sx={{ margin: "0 1rem" }}
            >
              {userData?.name.split(" ")[0]}
            </Button>
          )}
          <Button
            variant="contained"
            color="success"
            onClick={darkModeHandler}
            sx={{ margin: "0 1rem" }}
          >
            {darkMode ? "Light" : "Dark"}
          </Button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isDropdownOpen && (
        <div className="md:hidden bg-green-500/10 backdrop-blur-sm  text-white p-4 w-[30%] absolute right-0 top-16 z-50 border-[1px] border-green-500 rounded-md" >
  <Button
  variant="contained"
  color="success"
  component={NavLink}
  to={"/medCat"}
  fullWidth
  sx={{
    margin: "0.5rem 0",
    borderTop: "2px solid transparent", // Transparent border to reserve space
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    "&:hover": {
      borderTopColor: "red", // Changes the border color on hover
      backdropFilter: "blur(5px)", // Adds blur effect on hover
    },
  }}
>
  Category
</Button>



          <Button
            variant="contained"
            color="success"
            component={NavLink}
            to={"/medCat"}
            fullWidth
            sx={{ margin: "0.5rem 0" }}
          >
            Test
          </Button>
          {userData && userData.role === "admin" && (
            <Button
              variant="contained"
              color="success"
              component={NavLink}
              to={"/dashboard"}
              fullWidth
              sx={{ margin: "0.5rem 0" }}
            >
              Dashboard
            </Button>
          )}
          {userData && userData.email ? (
            <Button
              variant="contained"
              color="success"
              onClick={handleLogout}
              fullWidth
              sx={{ margin: "0.5rem 0" }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              component={NavLink}
              to={"/login"}
              fullWidth
              sx={{ margin: "0.5rem 0" }}
            >
              Login
            </Button>
          )}
          {userData && userData.email && (
            <Button
              variant="contained"
              color="success"
              component={NavLink}
              to={"/profile"}
              fullWidth
              sx={{ margin: "0.5rem 0" }}
            >
              {userData?.name.split(" ")[0]}
            </Button>
          )}
          <Button
            variant="contained"
            color="success"
            onClick={darkModeHandler}
            fullWidth
            sx={{ margin: "0.5rem 0" }}
          >
            {darkMode ? "Light" : "Dark"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
