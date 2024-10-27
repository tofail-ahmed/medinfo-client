import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserRegisterMutation } from "../redux/user/usersApi";
// import { BiSolidHide, MdVisibility } from 'react-icons/all';
import { useDispatch, useSelector } from "react-redux";
import { setMedInfoUserCred } from "../redux/user/userSlice";
import { BiSolidHide } from "react-icons/bi";
import { MdVisibility } from "react-icons/md";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkMode = useSelector((store) => store.theme.darkMode);
  const userData = useSelector((state) => state.medInfoUser.medInfoUserCred);
  const [createUser, { data, isLoading, error }] = useUserRegisterMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact:"",
    imgUrl:"",
    address:"",
    postalCode:""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    createUser(formData);
  };

  useEffect(() => {
    if (isLoading) alert("User registration in process, please wait...");
    if (data?.success) {
      dispatch(
        setMedInfoUserCred({
          id: data.data._id,
          name: data.data.name,
          email: data.data.email,
          role: data.data.role,
        })
      );
      alert("User registered successfully");
      navigate("/");
    }
    if (error?.status === 409) alert(error.data.message);
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
    <Container maxWidth="sm" className="min-h-screen">
      <Typography variant="h4" gutterBottom align="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {["name","imgUrl", "email", "password","contact","address","postalCode"].map((field, idx) => (
            <Grid item xs={12} key={field}>
              <TextField
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                type={
                  field === "password" && !showPassword ? "password" : "text"
                }
                fullWidth
                variant="outlined"
                value={formData[field]}
                onChange={handleChange}
                required
                // InputProps={textFieldStyles.InputProps}
                // InputLabelProps={textFieldStyles.InputLabelProps}
                // sx={textFieldStyles}
               {...textFieldStyles}
                InputProps={
                  field === "password" && {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          style={{
                            color: darkMode ? "white" : "black",
                            background: "transparent",
                          }}
                        >
                          {showPassword ? <BiSolidHide /> : <MdVisibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                }
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isLoading ? "Registering..." : "Register"}
            </Button>
            <p className="text-center text-sm font-semibold">
              Already registered?{" "}
              <NavLink to="/login" className="text-blue-600 font-bold">
                Login
              </NavLink>
            </p>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
