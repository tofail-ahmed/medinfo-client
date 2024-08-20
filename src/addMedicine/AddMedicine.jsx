import { TextField, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useCreateMedicineMutation } from "../redux/medicine/medicinesApi";

const AddMedicine = () => {
      const [createMedicine,{data,isLoading,error}]=useCreateMedicineMutation()

  const [medicineData, setMedicineData] = useState({
    medicine_name: "",
    generic_name: "",
    company_name: "",
    alt_medicines: [],
    description: "",
    doses: "",
    side_effects: [],
    actions: "",
    interactions: [],
    uses: [],
    sold: 0,
    warnings: [],
  });

  const handleChange = (e) => {
    setMedicineData({ ...medicineData, [e.target.name]: e.target.value });
  };
  // const handleChange = () => {
  //       setMedicineData({ ...medicineData });
  //     };

  const handleSubmit = (e) => {
    e.preventDefault();
    const altMedicinesArray = medicineData.alt_medicines
      .split(",")
      .map((item) => item.trim());
    const sideEffectsArray = medicineData.side_effects
      .split(",")
      .map((item) => item.trim());
    const interactionsArray = medicineData.interactions
      .split(",")
      .map((item) => item.trim());
    const usesArray = medicineData.uses.split(",").map((item) => item.trim());
    const warningsArray = medicineData.warnings
      .split(",")
      .map((item) => item.trim());

    // Log the data including alt_medicines as an array
//     console.log({
//       ...medicineData,
//       alt_medicines: altMedicinesArray,
//       side_effects: sideEffectsArray,
//       interactions: interactionsArray,
//       uses: usesArray,
//       warnings: warningsArray,
//     });
    const newMedicine={
      ...medicineData,
      alt_medicines: altMedicinesArray,
      side_effects: sideEffectsArray,
      interactions: interactionsArray,
      uses: usesArray,
      warnings: warningsArray,
    }
    createMedicine(newMedicine)
    console.log(newMedicine)
    
  };
  useEffect(() => {
      if (isLoading) {
        alert("Medicine adding in process, please wait...");
      }
      if (data && data.success) {
        alert("Medicine added successfully");
      }
      if(error&&error.status===409){
            alert(error.data.message)
      }
    }, [data, isLoading,error]);
  
  return (
    <div>
      <h1>Add New Medicine</h1>
      <form onSubmit={handleSubmit}>
        {/* <Grid item xs={12} sm={4} md={6} > */}
        <Grid container spacing={2} sx={{ my: 5 }} className=" ">
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              label="Medicine Name"
              variant="outlined"
              size="small"
              name="medicine_name"
              fullWidth
              value={medicineData.medicine_name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Company Name"
              variant="outlined"
              size="small"
              name="company_name"
              value={medicineData.company_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Generic Name"
              variant="outlined"
              size="small"
              name="generic_name"
              value={medicineData.generic_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Sold Count"
              variant="outlined"
              size="small"
              name="sold"
              type="number"
              value={medicineData.sold}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Alternative Medicines (comma-separated)"
              variant="outlined"
              size="small"
              name="alt_medicines"
              value={medicineData.alt_medicines}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Description"
              variant="outlined"
              size="small"
              name="description"
              multiline
              rows={4}
              value={medicineData.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Doses"
              variant="outlined"
              size="small"
              name="doses"
              value={medicineData.doses}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Side Effects (comma-separated)"
              variant="outlined"
              size="small"
              name="side_effects"
              value={medicineData.side_effects}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Actions"
              variant="outlined"
              size="small"
              name="actions"
              value={medicineData.actions}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Interactions (comma-separated)"
              variant="outlined"
              size="small"
              name="interactions"
              value={medicineData.interactions}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Uses (comma-separated)"
              variant="outlined"
              size="small"
              name="uses"
              value={medicineData.uses}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              sx={{
                maxWidth: "80%",
                mx: "auto",
                display: "block",
              }}
              fullWidth
              label="Warnings (comma-separated)"
              variant="outlined"
              size="small"
              name="warnings"
              value={medicineData.warnings}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Button
            sx={{
              maxWidth: {
                xs: "80%", // 80% for extra small screens and up (mobile)
                lg: "90%", // 90% for large screens and up (desktops)
              },
              mx: "auto",
              display: "block",
            }}
            type="submit"
            variant="contained"
            color="primary"
            id="fullWidth"
            fullWidth
          >
            Add Medicine
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default AddMedicine;
