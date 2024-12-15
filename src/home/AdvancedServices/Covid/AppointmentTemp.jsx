import {
  Box,
  Typography,
  Grid,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AppointmentModal from "./AppointmentModal";

const AppointmentTemp = () => {
  const vaccineData = JSON.parse(localStorage.getItem("Vac-data"));
  console.log(vaccineData);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const [openModal, setOpenModal] = useState();

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    console.log(selectedDate);
  };

  const getNextSevenDays = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
  };
  const dates = getNextSevenDays();

  const workingHours = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = () => {
    // Assuming selectedDate and selectedTime hold the selected values
    // alert(`Date: ${selectedDate} | Time: ${selectedTime}`);
    setOpenModal(true);
  };
  const handleCloseModal=()=>{
      setOpenModal(false)
  }

  return (
    <Box sx={{ mt: 5, p: 2 }}>
      <Typography variant="h4" align="center" color="red" fontWeight={"bold"}>
        Appointment Scheduling
      </Typography>

      <Grid align="center">
        <Grid
          sx={{
            width: "500px",
            // align:"left"
            p: 4,
          }}
        >
          <Paper
            sx={{
              p: 2,
            }}
          >
            <Typography
              align="center"
              color="green"
              variant="h5"
              fontWeight="bold"
            >
              {" "}
              User info
            </Typography>
            <Typography align="left">Name:{vaccineData?.data?.name}</Typography>
            <Typography align="left">
              Email:{vaccineData?.data?.email}
            </Typography>
            <Typography align="left">
              Location:{vaccineData?.data?.location}
            </Typography>
            <Typography align="left">
              Phone:{vaccineData?.data?.phone}
            </Typography>
            <Typography align="left">
              Type:{vaccineData?.data?.option}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid align="center">
        <Paper
          sx={
            {
              // width: "900px",
            }
          }
        >
          <Typography slign="center" fontWeight={"bold "} variant="h5">
            Select A Date
          </Typography>

          <RadioGroup
            value={selectedDate}
            onChange={handleDateChange}
            row
            sx={{ justifyContent: "center", marginTop: 2 }}
          >
            {dates.map((date) => (
              <FormControlLabel
                key={date}
                value={date}
                control={<Radio />}
                label={date}
              />
            ))}
          </RadioGroup>
          {selectedDate && (
            <>
              {" "}
              <Typography slign="center" fontWeight={"bold "} variant="h5">
                Select A Time For{" "}
                <span className="text-green-600 font-extrabold">
                  {selectedDate}
                </span>
              </Typography>
              <RadioGroup
                value={selectedTime}
                onChange={handleTimeChange}
                row
                sx={{ justifyContent: "center", marginTop: 2 }}
              >
                {workingHours.map((time) => (
                  <FormControlLabel
                    key={time}
                    value={time}
                    control={<Radio />}
                    label={time}
                  />
                ))}
              </RadioGroup>
            </>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={!selectedDate || !selectedTime}
            onClick={handleSubmit}
          >
            Submit Appointment
          </Button>
        </Paper>
      </Grid>
      {/* Modal Component */}
      <AppointmentModal
       open={openModal} 
      onClose={handleCloseModal} 
      />
    </Box>
  );
};
export default AppointmentTemp;
