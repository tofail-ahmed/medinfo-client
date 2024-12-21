import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Typography } from '@mui/material';
import React from 'react'

const AppointmentModal = ({open,onClose}) => {

      const vaccineData = JSON.parse(localStorage.getItem("Vac-data"));


      // const [open, setOpen] = React.useState(false);

      // const handleClickOpen = () => {
      //   setOpen(true);
      // };
    
      // const handleClose = () => {
      //   setOpen(false);
      // };


  return (
      <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

<Grid  item xs={12} sm={6} md={5}
// sx={{
//       p:"10px"
// }}
>
          <Grid justifyItems={"center"} elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" color="secondary" gutterBottom>
              User Information
            </Typography>
            <Typography>Name: {vaccineData?.data?.name}</Typography>
            <Typography>Email: {vaccineData?.data?.email}</Typography>
            <Typography>Location: {vaccineData?.data?.location}</Typography>
            <Typography>Phone: {vaccineData?.data?.phone}</Typography>
            <Typography>Option: {vaccineData?.data?.option}</Typography>
          </Grid>
        </Grid>
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default AppointmentModal