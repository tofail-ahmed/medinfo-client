import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useSuggestMedicineMutation } from '../redux/medicine/medicinesApi';
import { toast } from 'sonner';

const SuggestMed = () => {
  const [suggestMedDetails,{data,isLoading,error}]=useSuggestMedicineMutation()
  const [formData, setFormData] = useState({
    medicine_name: '',
    generic_name: '',
    company_name: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
// console.log(data)
if(isLoading){
  toast.info("Request on process, please wait...")
}
if(error){
  toast.info(`{error}`)
}
if(data){
  toast.success(data.message)
  console.log(data)
}
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form data submitted:', formData);
    // Add your form submission logic here
    suggestMedDetails(formData)
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <TextField
        label="Medicine Name"
        name="medicine_name"
        value={formData.medicine_name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Generic Name"
        name="generic_name"
        value={formData.generic_name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Company Name"
        name="company_name"
        value={formData.company_name}
        onChange={handleChange}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default SuggestMed;
