import React, { useState } from 'react';
import { useSingleUserQuery } from '../redux/user/usersApi';
import { useSelector } from 'react-redux';
import { TextField, Button, CircularProgress, Box } from '@mui/material';

const UpdateProfile = () => {
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
  const id = userCred?.id?.toString(); // Convert id to string if needed
  const { data, isLoading, error } = useSingleUserQuery(id);

  // State for form values
  const [formData, setFormData] = useState({
    name: data?.data?.name || '',
    email: data?.data?.email || '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to update profile using Redux action or API call
    console.log("Updated data:", formData);
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
        display="flex"
        flexDirection="column"
        maxWidth="400px"
        width="100%"
        gap={2}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          type="email"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Update Profile
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateProfile;
