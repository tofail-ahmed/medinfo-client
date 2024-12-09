import React, { useState } from 'react';
import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Appointment = () => {
  const vaccineData = JSON.parse(localStorage.getItem("Vac-data"));
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Generate the next 7 days
  const getNextSevenDays = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
    }
    return dates;
  };

  const workingHours = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Appointment scheduled for ${selectedDate} at ${selectedTime}`);
  };

  const dates = getNextSevenDays();

  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl text-green-500 font-bold">This is Appointment Page</h1>
      <h1 className="text-3xl">Name: {vaccineData?.data?.name}</h1>
      <h1 className="text-3xl">Email: {vaccineData?.data?.email}</h1>
      <h1 className="text-3xl">Location: {vaccineData?.data?.location}</h1>
      <h1 className="text-3xl">Phone: {vaccineData?.data?.phone}</h1>
      <h1 className="text-3xl">Option: {vaccineData?.data?.option}</h1>

      <div className="mt-8">
        <FormControl component="fieldset">
          <FormLabel component="legend">Select a Date</FormLabel>
          <RadioGroup value={selectedDate} onChange={handleDateChange}>
            {dates.map((date) => (
              <FormControlLabel
                key={date}
                value={date}
                control={<Radio />}
                label={date}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className="mt-4">
          <FormLabel component="legend">Select a Time</FormLabel>
          <RadioGroup value={selectedTime} onChange={handleTimeChange}>
            {workingHours.map((time) => (
              <FormControlLabel
                key={time}
                value={time}
                control={<Radio />}
                label={time}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          className="mt-8"
          disabled={!selectedDate || !selectedTime}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Appointment;
