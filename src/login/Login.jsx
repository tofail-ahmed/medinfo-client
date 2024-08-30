import  { useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { NavLink, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../redux/user/usersApi";
// import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { data, isLoading, error }] = useUserLoginMutation();

  // const darkMode = useSelector((state) => state.theme.darkMode);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    loginUser(formData);
  };
  useEffect(() => {
    if (isLoading) {
      alert("User login in process, please wait...");
    }
    if (data && data.success) {
      // console.log(data.data)
      const userCred={
        email:data?.data.email,
        role:data?.data.role
      }
      alert("User login successfully");
      localStorage.setItem('user',JSON.stringify(userCred));

      navigate("/");
    }
    if (error && error.status === 409) {
      alert(error.data.message);
    }
  }, [data, isLoading, error]);
  // console.log("data",data)
  //     console.log("isLoading",isLoading)
  //     console.log("error",error)
  return (
    <Container maxWidth="sm" className="min-h-screen">
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              sx={{}}
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
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
