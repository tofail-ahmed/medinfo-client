import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const AppointmentModal = ({ open, onClose }) => {
  const vaccineData = JSON.parse(localStorage.getItem("Vac-data"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* Dialog Title */}
      <DialogTitle id="alert-dialog-title">Appointment Details</DialogTitle>

      {/* Dialog Content */}
      <DialogContent>
        {/* User Information Section */}
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              User Information
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Name: {vaccineData?.data?.name || "N/A"}</Typography>
            <Typography>Email: {vaccineData?.data?.email || "N/A"}</Typography>
            <Typography>Location: {vaccineData?.data?.location || "N/A"}</Typography>
            <Typography>Phone: {vaccineData?.data?.phone || "N/A"}</Typography>
            <Typography>Option: {vaccineData?.data?.option || "N/A"}</Typography>
          </Grid>

          {/* Vaccines List Section */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Selected Vaccines
            </Typography>
            {Object.keys(vaccineData)
              .filter((key) => !isNaN(key)) // Filter numeric keys for vaccines
              .map((key) => (
                <Typography key={key}>- {vaccineData[key]}</Typography>
              ))}
          </Grid>
        </Grid>
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions>
        <Button onClick={onClose}>Disagree</Button>
        <Button onClick={onClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentModal;
