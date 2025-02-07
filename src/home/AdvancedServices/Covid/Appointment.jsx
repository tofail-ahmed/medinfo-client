// import React, { useState } from "react";
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Grid,
//   Paper,
//   Typography,
//   Box,
// } from "@mui/material";

// const Appointment = () => {
//   const vaccineData = JSON.parse(localStorage.getItem("Vac-data"));
//   const existingData = JSON.parse(localStorage.getItem("Vac-data"));
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");

//   // Generate the next 7 days
//   const getNextSevenDays = () => {
//     const dates = [];
//     for (let i = 0; i < 7; i++) {
//       const date = new Date();
//       date.setDate(date.getDate() + i);
//       dates.push(date.toISOString().split("T")[0]); // Format as YYYY-MM-DD
//     }
//     return dates;
//   };

//   const workingHours = [
//     "9:00 AM",
//     "10:00 AM",
//     "11:00 AM",
//     "1:00 PM",
//     "2:00 PM",
//     "3:00 PM",
//     "4:00 PM",
//   ];

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   const handleTimeChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   const handleSubmit = () => {
//     alert(`Appointment scheduled for ${selectedDate} at ${selectedTime}`);
//     console.log(selectedDate,selectedTime);
//     // const updatedData = { ...existingData,  };
//     // console.log(updatedData)
//     // localStorage.setItem("Vac-data", JSON.stringify(updatedData));
//   };

//   const dates = getNextSevenDays();

//   return (
//     <Box sx={{ mt: 5, p: 2 }}>
//       <Typography
//         variant="h4"
//         align="center"
//         color="primary"
//         fontWeight="bold"
//         gutterBottom
//       >
//         Appointment Scheduling
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} sm={6} md={5}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6" color="secondary" gutterBottom>
//               User Information
//             </Typography>
//             <Typography>Name: {vaccineData?.data?.name}</Typography>
//             <Typography>Email: {vaccineData?.data?.email}</Typography>
//             <Typography>Location: {vaccineData?.data?.location}</Typography>
//             <Typography>Phone: {vaccineData?.data?.phone}</Typography>
//             <Typography>Option: {vaccineData?.data?.option}</Typography>
//           </Paper>
//         </Grid>

//         <Grid item xs={12} sm={6} md={5}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <FormControl component="fieldset" sx={{ mb: 3 }}>
//               <FormLabel component="legend" sx={{ fontWeight: "bold", mb: 1 }}>
//                 Select a Date
//               </FormLabel>
//               <RadioGroup value={selectedDate} onChange={handleDateChange}>
//                 {dates.map((date) => (
//                   <FormControlLabel
//                     key={date}
//                     value={date}
//                     control={<Radio />}
//                     label={date}
//                   />
//                 ))}
//               </RadioGroup>
//             </FormControl>

//             <FormControl component="fieldset">
//               <FormLabel component="legend" sx={{ fontWeight: "bold", mb: 1 }}>
//                 Select a Time
//               </FormLabel>
//               <RadioGroup value={selectedTime} onChange={handleTimeChange}>
//                 {workingHours.map((time) => (
//                   <FormControlLabel
//                     key={time}
//                     value={time}
//                     control={<Radio />}
//                     label={time}
//                   />
//                 ))}
//               </RadioGroup>
//             </FormControl>

//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mt: 3 }}
//               disabled={!selectedDate || !selectedTime}
//               onClick={handleSubmit}
//             >
//               Submit Appointment
//             </Button>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Appointment;
