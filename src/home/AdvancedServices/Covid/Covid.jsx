import React, { useState } from "react";
import vaccine_img from "../../../../public/assets/vaccine_nurse.png";
import logo from "../../../../public/assets/medinfo.png";
import { GiLoveInjection } from "react-icons/gi";
import { TextField, Checkbox, FormControlLabel, Button, Select, MenuItem, InputLabel, FormControl, Typography, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router";


const Covid = () => {
      const navigate=useNavigate();
      const handleNavigation=()=>{
            navigate("/vaccination")
      }
      const [formData, setFormData] = useState(() => {
            // Load data from localStorage if not expired
            // const savedData = JSON.parse(localStorage.getItem("formData"));
            // if (savedData && savedData.expiration > Date.now()) {
            //   return savedData.data;
            // }
            return {
              location: "",
              option: "",
              name: "",
              email: "",
              phone: "",
              terms: false,
            };
          });

  const [errors, setErrors] = useState({
    location: "Location is required.",
    option: "Please select an option.",
    name: "Name is required.",
    email: "Email is required.",
    phone: "Phone is required.",
   
    terms: "You must accept the terms.",
  });

  const validate = (name, value) => {
    if (name === "location" && value.trim() === "") {
      return "Location is required.";
    }
    if (name === "option" && value === "") {
      return "Please select an option.";
    }
    if (name === "name" && value.trim() === "") {
      return "Name is required.";
    }
    if (name === "email") {
      if (value.trim() === "") return "Email is required.";
      if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format.";
    }
    if (name === "phone") {
      if (value.trim() === "") return "Phone is required.";
       // Validate at least 10 digits
  const digitsOnly = value.replace(/\D/g, ""); // Remove non-digit characters
  if (digitsOnly.length < 10) return "Phone must contain at least 10 digits.";
    }
    
    if (name === "terms" && !value) {
      return "You must accept the terms.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    const error = validate(name, fieldValue);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isSubmitDisabled = () => {
    if (!formData.location || !formData.option) return true;
    if (formData.option === "first") {
      return (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.terms ||
        errors.name ||
        errors.email ||
        errors.phone ||
        errors.terms
      );
    }
     else if (formData.option === "second") {
      return !formData.terms || errors.terms;
    }
    return false;
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    
      const expiration = Date.now() + .25 * 60 * 1000; // 30 minutes in milliseconds
      const dataToSave = { data: formData, expiration };
      
      try {
        localStorage.setItem("formData", JSON.stringify(dataToSave));
    
        // Verify the data was saved successfully
        const savedData = localStorage.getItem("formData");
        if (savedData && JSON.stringify(dataToSave) === savedData) {
          console.log("Form data saved successfully!");
          handleNavigation(); // Navigate only after successful save
        } else {
          console.error("Failed to save form data to localStorage.");
          alert("There was an error saving your data. Please try again.");
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        alert("An error occurred while saving your data. Please ensure your browser allows localStorage.");
      }
    };
    

  return (
    <div className="mt-20">
      {/* <h1 className="text-4xl text-center my-20 text-red-700 font-extrabold">
        This is covid emergency service page{" "}
      </h1> */}
      <div className=" bg-green-600  rounded-t-md flex justify-around items-center w-[70%]  mx-auto lg:h-[150px] h-[100px]">
        <h1 className=" text-white lg:text-3xl text-xl font-extrabold w-[50%]">
          Schedule Vaccination Appointments
        </h1>
        <span>
          <img
            className="w-[200px] lg:h-[150px] h-[100px] "
            src={vaccine_img}
            alt=""
          />
        </span>
      </div>
      <span className="flex justify-center items-center gap-[4px]">
            <span className="text-2xl font-bold " >
<GiLoveInjection/>
            </span>
            <button className="text-md lg:text-lg hover:text-blue-600 font-bold hover:underline">
            Get vaccination information, including records and appointments
            </button>
      </span>
      <div className=" bg-slate-100  my-12 rounded-t-md flex justify-around items-center w-[60%]  mx-auto lg:h-[120px] h-[100px]">
        
        <span>
          <img
            className="w-[200px] lg:h-[100px] h-[100px] "
            src={logo}
            alt=""
          />
        </span>
        <h1 className=" text-slate-900 lg:text-lg text-xs font-bold w-[60%]">
        Get your flu shot or any vaccine and get a coupon for 20% off your next purchase of $20 or more up to $100 as a myWalgreens member2
        </h1>
      </div>
      <div className="my-8 w-[70%] mx-auto">


        <form onSubmit={handleSubmit}>
        {/* Location Field */}
        <TextField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.location}
          helperText={errors.location}
        />

        {/* Select Option */}
        <FormControl fullWidth margin="normal" error={!!errors.option}>
          <InputLabel>Select an Option</InputLabel>
          <Select
            name="option"
            value={formData.option}
            onChange={handleChange}
          >
            <MenuItem value="">-- Select --</MenuItem>
            <MenuItem value="first">An Individual (All Options)</MenuItem>
            <MenuItem value="second">A Group (Flu & COVID-19 Only)</MenuItem>
          </Select>
          {errors.option && <Typography color="error">{errors.option}</Typography>}
        </FormControl>

        {/* Fields for First Option */}
        {formData.option === "first" && (
          <>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </>
        )}

        {/* Terms Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
          }
          label="Accept Terms and Conditions"
        />
        {errors.terms && <Typography color="error">{errors.terms}</Typography>}

        {/* Information for Second Option */}
        {formData.option === "second" && (
          <Alert severity="info" sx={{ my: 2 }}>
            <strong>Flu Shot:</strong> For ages 3+. <br />
            <strong>COVID-19 Vaccine:</strong> For ages 5+. 
            <br /> Patients aged 3-4 must be scheduled individually.
          </Alert>
        )}

        {/* Submit Button */}
        <Button
      //   onClick={handleNavigation}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitDisabled()}
        >
          Submit
        </Button>
      </form>

      </div>
    </div>
  );
};

export default Covid;
