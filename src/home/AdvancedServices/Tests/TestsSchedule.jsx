import React,{useState} from "react";
import { TextField, Button, Container, Typography, Box,Alert } from "@mui/material";


const TestsSchedule = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    testDate: "",
    testTime: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true)
  };

  return (
    <div className="mt-14">
      <h1 classsName="text-center text-4xl text-red-700 ">
        This is Flu Test Schedule Page
      </h1>
      <h1 classsName="text-center text-4xl text-red-700 ">
        Details coming soon...
      </h1>
      <Container maxWidth="sm">
      <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "background.paper" }}>
        <Typography variant="h5" gutterBottom>
          Schedule a Flu Test
        </Typography>
        {submitted && (
        <Alert severity="success" sx={{ mt: 2 }}>
          <Typography variant="body1">Flu Test Scheduled Successfully!</Typography>
          <Typography variant="body2">Name: {formData.name}</Typography>
          <Typography variant="body2">Email: {formData.email}</Typography>
          <Typography variant="body2">Date: {formData.testDate}</Typography>
          <Typography variant="body2">Time: {formData.testTime}</Typography>
        </Alert>
      )}
        <form 
        onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            // label="Test Date"
            name="testDate"
            type="date"
            value={formData.testDate}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            fullWidth
            // label="Test Time"
            name="testTime"
            type="time"
            value={formData.testTime}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
       
      </Box>
    </Container>
    </div>
  );
};

export default TestsSchedule;
