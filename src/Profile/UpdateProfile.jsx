import React, { useState, useEffect } from 'react';
import { useSingleUserQuery } from '../redux/user/usersApi';
import { useSelector } from 'react-redux';
import { TextField, Button, CircularProgress, Box, Grid } from '@mui/material';

const UpdateProfile = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
  const id = userCred?.id?.toString();
  const { data, isLoading, error } = useSingleUserQuery(id);

  // Initialize form data with empty fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    img: '',
    city: '',
    country: '',
    postalCode: '',
    occupation: '',
  });

  // Update form data once data is fetched
  useEffect(() => {
    if (data) {
      setFormData({
        name: data.data.name || '',
        email: data.data.email || '',
        phone: data.data.phone || '',
        img: data.data.img || '',
        city: data.data.city || '',
        country: data.data.country || '',
        postalCode: data.data.postalCode || '',
        occupation: data.data.occupation || '',
      });
    }
  }, [data]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated data:", formData);
    // Add logic to update profile (API call or Redux action)
  };

  if (isLoading) return <CircularProgress />;
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
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Img URL", name: "img" },
            { label: "City", name: "city" },
            { label: "Country", name: "country" },
            { label: "Postal Code", name: "postalCode" },
            { label: "Occupation", name: "occupation" },
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UpdateProfile;
