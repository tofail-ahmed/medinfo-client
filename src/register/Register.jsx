import  { useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useUserRegisterMutation } from '../redux/user/usersApi';

const Register = () => {

  const [createUser,{data,isLoading,error}]=useUserRegisterMutation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
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
    console.log('Form submitted:', formData);
    // Here you can send formData to your backend or handle it as needed
  createUser(formData)
  
  // console.log("data",data)
  //     console.log("isLoading",isLoading)
  //     console.log("error",error)
  };
// console.log(formData)
      useEffect(() => {
        if (isLoading) {
          alert("User registration in process, please wait...");
        }
        if (data && data.success) {
          alert("User registered successfully");
        }
        if(error&&error.status===409){
              alert(error.data.message)
        }
      }, [data, isLoading,error]);

      
  return (
    <Container maxWidth="sm" className="min-h-screen">
      <Typography variant="h4" gutterBottom align="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
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
              {isLoading?"Registering":"Register"}
            </Button>
            <p className='text-center text-sm font-semibold'>Already registered? <NavLink className={"text-blue-600 text- font-bold"} to="/login">Login</NavLink></p>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
