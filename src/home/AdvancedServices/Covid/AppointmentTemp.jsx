import { Box, Typography, Grid, Paper, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";

const AppointmentTemp = () => {
  const vaccineData = JSON.parse(localStorage.getItem("Vac-data"));
  console.log(vaccineData);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();


  const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
      console.log(selectedDate)
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
          sx={{
            // width: "900px",
          }}
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
              {
                  selectedDate&&
                  <Typography slign="center" fontWeight={"bold "} variant="h5">
            Select A Time For <span className="text-green-600 font-extrabold">{selectedDate}</span>
          </Typography>
              }
        </Paper>
      </Grid>
    </Box>
  );
};
;
export default AppointmentTemp;
