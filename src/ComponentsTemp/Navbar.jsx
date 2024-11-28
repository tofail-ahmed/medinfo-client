import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { toggleDarkMode } from "../redux/theme/themeslice";
import { clearMedInfoUserCred } from "../redux/user/userSlice";
import { CgMenuGridR } from "react-icons/cg";
import { ImMenu3,ImMenu4  } from "react-icons/im";
import { useGetAssetsQuery } from "../redux/user/usersApi";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useSelector((state) => state.medInfoUser.medInfoUserCred);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);


const {data,isLoading}=useGetAssetsQuery();

const logo=data?.data.find(item => item.name === 'logo')



  const darkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  const handleLogout = () => {
    dispatch(clearMedInfoUserCred());
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div className="relative ">
      <div className="bg-green-600/30 backdrop-blur-sm mx-auto fixed top-0 z-20 w-full">
      <div className="flex justify-between items-center mx-8">
        <span className="flex items-center justify-around gap-2">
          <NavLink to={"/"}>
            <img className="w-[50px]" src={logo.imgUrl} alt="Logo" />
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
     <div>
     {isDropdownOpen && (
        
          <div className="md:hidden bg-lime-200/50 backdrop-blur-lg   text-white p-4 w-[30%] absolute  right-0 top-13 z-50 border-[1px] border-green-500 rounded-md" >
  <div className="">
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
    opacity: 0.9, // Add opacity
    backdropFilter: "blur(5px)", // Add blur effect
    "&:hover": {
      borderTopColor: "red", // Changes the border color on hover
      backdropFilter: "blur(10px)", // Adds blur effect on hover
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
        </div>
       
      )}
     </div>
    </div>
    </div>
  );
};

export default Navbar;
