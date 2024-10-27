import  { useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography, Container, InputAdornment, IconButton } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserRegisterMutation } from '../redux/user/usersApi';
import { BiSolidHide } from 'react-icons/bi';
import { MdVisibility } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setMedInfoUserCred } from '../redux/user/userSlice';

const RegisterTemp = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((store) => store.theme.darkMode);

  const userData=useSelector((state)=>state.medInfoUser.medInfoUserCred);
  console.log(userData)
 
const dispatch=useDispatch();
  const [createUser,{data,isLoading,error}]=useUserRegisterMutation();
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

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
    // console.log('Form submitted:', formData);
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
          const userCred = {
            id:data?.data._id,
            name: data?.data.name,
            email: data?.data.email,
            role: data?.data.role
          };
          alert("User registeres successfully");
          // localStorage.setItem('user', JSON.stringify(userCred));
          dispatch(setMedInfoUserCred(userCred));
          navigate("/");
        }
        if(error&&error.status===409){
              alert(error.data.message)
        }
      }, [data, isLoading,error]);
// console.log(data&&data.data)
      
  return (
    <Container maxWidth="sm" className="min-h-screen">
      <Typography variant="h4" gutterBottom align="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}
        
        >
          <Grid item xs={12}>
            <TextField
             
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
              InputProps={{
                style: {
                  color: darkMode ? "white" : "black",
                  borderColor: darkMode ? "white" : "black",
                }}}
                InputLabelProps={{
                  style: { color: darkMode ? "red" : "black" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: darkMode ? "yellow" : "black",
                    },
                    "&:hover fieldset": {
                      borderColor: darkMode ? "green" : "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: darkMode ? "white" : "black",
                    },
                  },
                }}
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
              InputProps={{
                style: {
                  color: darkMode ? "white" : "black",
                  borderColor: darkMode ? "white" : "black",
                }}}
                InputLabelProps={{
                  style: { color: darkMode ? "red" : "black" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: darkMode ? "yellow" : "black",
                    },
                    "&:hover fieldset": {
                      borderColor: darkMode ? "green" : "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: darkMode ? "white" : "black",
                    },
                  },
                }}
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
              InputProps={{
                style: {
                  color: darkMode ? "white" : "black",
                  borderColor: darkMode ? "white" : "black",
                }}}
                InputLabelProps={{
                  style: { color: darkMode ? "red" : "black" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: darkMode ? "yellow" : "black",
                    },
                    "&:hover fieldset": {
                      borderColor: darkMode ? "green" : "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: darkMode ? "white" : "black",
                    },
                  },
                }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <BiSolidHide /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
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

export default RegisterTemp;