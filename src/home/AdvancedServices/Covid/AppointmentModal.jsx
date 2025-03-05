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
import { useNavigate } from "react-router";

const AppointmentModal = ({ open, onClose }) => {
  const navigate=useNavigate()
  const vaccineData = JSON.parse(localStorage.getItem("Vac-data"));

  const handleConfirm = () => {
    alert("Your appointment has been confirmed! A detailed message will be sent to you soon...");
    onClose();
    navigate("/")
  };

  const handleDiscard = () => {
    alert("Your appointment has been discarded. Navigating to home page... ");
    onClose();
    navigate("/")
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Appointment Details</DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              User Information
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Name: {vaccineData?.data?.name || "N/A"}</Typography>
            <Typography>Email: {vaccineData?.data?.email || "N/A"}</Typography>
            <Typography>
              Location: {vaccineData?.data?.location || "N/A"}
            </Typography>
            <Typography>Phone: {vaccineData?.data?.phone || "N/A"}</Typography>
            <Typography>
              Option: {vaccineData?.data?.option || "N/A"}
            </Typography>
            <Typography>Date: {vaccineData?.date || "N/A"}</Typography>
            <Typography>Time: {vaccineData?.time || "N/A"}</Typography>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button sx={{ color: "green", fontWeight: "bold" }} onClick={handleConfirm}>
          Confirm Schedule?
        </Button>
        <Button sx={{ color: "red", fontWeight: "bold" }} onClick={handleDiscard} autoFocus>
          Discard?
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentModal;
