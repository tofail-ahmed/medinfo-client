import React, { useState } from 'react';
import { useSingleUserQuery } from '../redux/user/usersApi';
import { useSelector } from 'react-redux';
import { TextField, Button, CircularProgress, Box, Grid } from '@mui/material';

const UpdateProfile = () => {
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
  const id = userCred?.id?.toString();
  const { data, isLoading, error } = useSingleUserQuery(id);

  // Initial form state with eight fields
  const [formData, setFormData] = useState({
    name: data?.data?.name || '',
    email: data?.data?.email || '',
    phone: data?.data?.phone || '',
    address: data?.data?.address || '',
    city: data?.data?.city || '',
    country: data?.data?.country || '',
    postalCode: data?.data?.postalCode || '',
    occupation: data?.data?.occupation || '',
  });

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
      justifyContent="center" 
      bgcolor="background.default"
      p={3}
    >
      <h2>Update Profile</h2>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: '100%', maxWidth: '600px' }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              type="tel"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Postal Code"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
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
