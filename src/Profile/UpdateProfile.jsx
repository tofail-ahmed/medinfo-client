import React, { useState, useEffect } from 'react';
import { useSingleUserQuery, useUpdateUserMutation } from '../redux/user/usersApi';
import { useSelector } from 'react-redux';
import { TextField, Button, CircularProgress, Box, Grid } from '@mui/material';
// import CustomInput from '../components /CustomInput';

const UpdateProfile = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
  const id = userCred?.id?.toString();
  const { data, isLoading, error } = useSingleUserQuery(id);

  const [userData,{isLoading:updateUserLoading}]=useUpdateUserMutation()


  // Initialize form data with empty fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    imgUrl: '',
    address: '',
   postalCode:""
  });

// console.log(data?.data)


  // Update form data once data is fetched
  useEffect(() => {
    if (data) {
      setFormData({
        name: data.data.name || '',
        email: data.data.email || '',
        contact: data.data.contact || '',
        imgUrl: data.data.imgUrl || '',
        address: data.data.address || '',
        
        postalCode: data.data.postalCode || '',
        
      });
    }
  }, [data]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Updated data:", formData);
  
    try {
      // Assuming userData is a function that takes an object with {id, body} and returns the API response
      const response = await userData({ id, body: formData });
  // console.log(response?.data)
  // console.log(response)

      if (response.data.success===true) {
        // Display success alert
        alert(response.message || "User updated successfully!");
      }
      else {
        // Display alert for cases where the user was not updated (e.g., no changes made)
        alert(response.data.message || "No changes made to user data.");
      }
    } catch (error) {
      // Display error alert
      console.error("Error updating user:", error);
      alert("Failed to update user. Please try again.");
    }
  };
  
  if (isLoading || updateUserLoading ) return <CircularProgress />;
  if (error) return <div>Error loading user data...</div>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      justifyContent="top"
      p={2}
      sx={{
        bgcolor: darkMode ? "transparent" : "rgba(255, 255, 255, 0.8)", // transparent for dark mode, white with slight opacity for light mode
        color: darkMode ? "white" : "black",
      }}
    >
      <Box
      display="flex"
        m={4}
        sx={{
          fontWeight: "bold", // Options: 'bold', 'normal', 'light', or a numeric value like 700
          fontSize: "1.5rem", // You can use 'px', 'rem', etc.
          color: "#C026D3", // Use theme colors or specify hex values
        }}
      >
        {" "}
        Update Profile:  {"     "}
        <Box
          sx={{
            fontWeight: "bold", // Options: 'bold', 'normal', 'light', or a numeric value like 700
            fontSize: "1.5rem", // You can use 'px', 'rem', etc.
            color: "#10B981", // Use theme colors or specify hex values
          }}
        >
          {data?.data?.name}
        </Box>{" "}
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "100%", maxWidth: "600px" }}
      >
        <Grid container spacing={2}>
          {[
            { label: "Name", name: "name" },
            { label: "Email", name: "email", type: "email" },
            { label: "Contact", name: "contact", type: "tel" },
            { label: "Img URL", name: "imgUrl" },
            { label: "Address", name: "address" },
            
            { label: "Postal Code", name: "postalCode" },
        
          ].map((field, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                label={field.label}
                name={field.name}
                type={field.type || "text"}
                value={formData[field.name]}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    color: darkMode ? "white" : "black",
                    borderColor: darkMode ? "white" : "black",
                  },
                }}
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
          ))}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                color: darkMode ? "white" : "black",
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Update Profile
            </Button>
            {/* <CustomInput/> */}
          </Grid>
        </Grid>
      </Box>
      
    </Box>
  );
};

export default UpdateProfile;
