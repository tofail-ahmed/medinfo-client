import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Box
} from "@mui/material";
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../redux/user/usersApi";
import { MdVisibility } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setMedInfoUserCred } from "../redux/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((store) => store.theme.darkMode);

  // const userData=useSelector((state)=>state.medInfoUser.medInfoUserCred);
  // console.log(userData)
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const [loginUser, { data, isLoading, error }] = useUserLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  useEffect(() => {
    if (isLoading) {
      alert("User login in process, please wait...");
    }
    if (data && data.success) {
      const userCred = {
        id: data?.data._id,
        name: data?.data.name,
        email: data?.data.email,
        role: data?.data.role,
      };
      alert("User login successfully");
      // localStorage.setItem('user', JSON.stringify(userCred));
      dispatch(setMedInfoUserCred(userCred)); // Update the user state in Redux

      navigate("/");
    }
    if (error && error.status === 409) {
      alert(error.data.message);
    }
  }, [data, isLoading, error, dispatch, navigate]);

  // Common style props for TextFields
  const textFieldStyles = {
    InputProps: {
      sx: {
        color: darkMode ? "white" : "black", // Correctly apply text color inside the input
      },
    },
    sx: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: darkMode ? "yellow" : "black" },
        "&:hover fieldset": { borderColor: darkMode ? "green" : "black" },
        "&.Mui-focused fieldset": { borderColor: darkMode ? "white" : "black" },
        "& input": {
          color: darkMode ? "white" : "black", // Ensures input text color is applied at the input level
        },
      },
    },
    InputLabelProps: {
      style: { color: darkMode ? "red" : "black" }, // Label color
    },
  };

  return (
    <Container maxWidth="sm" className=" mb-12 min-h-screen">
      {/* <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography> */}
      
      <Grid
      sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"300"

      }}
      >
        <Box 
        component="img"
        src="/public/assets/login.png"
        sx={{height:150}}
        />
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              {...textFieldStyles}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"} // Toggle password visibility
              value={formData.password}
              onChange={handleChange}
              required
              {...textFieldStyles}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{
                        color: darkMode ? "white" : "black",
                        background: "transparent",
                      }}
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <BiSolidHide /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
            <p className="text-center text-sm font-semibold">
              Don&apos;t have an account?{" "}
              <NavLink
                className={"text-blue-600 text- font-bold"}
                to="/register"
              >
                Register
              </NavLink>
            </p>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
