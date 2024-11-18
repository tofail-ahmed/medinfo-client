import React from 'react'
import { useLatestMedQuery } from '../../redux/medicine/medicinesApi'
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import Loader from '../../ComponentsTemp/Loader'
import { useSelector } from 'react-redux'

const LatestMed = () => {
      const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);

      const {data,isLoading}=useLatestMedQuery()
      console.log(data?.data)


      // Set up media query breakpoints
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:900px) and (max-width:1199px)"
  );
  const isSmallScreen = useMediaQuery(
    "(min-width:600px) and (max-width:899px)"
  );

  

  const handleUpdate = (id) => {
    navigate(`/dashboard/updateMed/${id}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  const displayedData =data?.data.slice(0,12)
  return (
    <div>
      <div className="mx-10">
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {displayedData
            .filter((medicine) => medicine.status === "approved")
            .map((medicine, index) => (
              <Grid item xs={6}  md={4} lg={3} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%", // Ensures all cards are the same height
                    backgroundColor: "rgba(9, 231, 235, 0.5)",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    {" "}
                    {/* Fills remaining space */}
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {index + 1}. {medicine.medicine_name}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        <strong>Generic:</strong> {medicine.generic_name}
                      </Typography>

                      {medicine.homeImg && (
                        <CardMedia
                          component="img"
                          sx={{
                            width: "100%",
                            height: 140,
                            marginTop: 1,
                            borderRadius: 1,
                            borderColor: "green",
                            "&:hover": {
                              border: "3px solid #387F39",
                            },
                          }}
                          image={medicine.homeImg}
                          alt="medicine image"
                        />
                      )}

                      {/* <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                        <strong>Descriptions:</strong> {medicine.description}
                      </Typography> */}
                      { (isLargeScreen || isMediumScreen) &&
                        <Typography variant="body2" color="text.secondary">
                        {/* <strong>Actions:</strong> {medicine.actions} */}
                      </Typography>
                      }
                      <Typography variant="body2" color="text.secondary">
                        <strong>Total Sold:</strong> {medicine.sold}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {/* <strong>Available:</strong> {medicine.available} */}
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        <strong>Status:</strong> {medicine.status}
                      </Typography> */}

                      { (isLargeScreen || isMediumScreen) &&
                        <div>
                        
                        {/* <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                          Alternative Medicines
                        </Typography> */}
                        {/* <ul>
                          {medicine.alt_medicines.map((m, i) => (
                            <li key={i}>
                              {i + 1}. {m}
                            </li>
                          ))}
                        </ul> */}
                      </div>
                      }
                    </CardContent>
                  </Box>

                  {/* Buttons at the end of the card */}
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Button
                          onClick={() => navigate(`/medicine/${medicine._id}`)}
                          variant="outlined"
                          size="small"
                          fullWidth
                          sx={{
                            color: "#6366F1",
                            borderColor: "#6366F1",
                            "&:hover": {
                              backgroundColor: "#14919B",
                              borderColor: "#6366F1",
                              color: "#fff",
                            },
                          }}
                        >
                          Details
                        </Button>
                      </Grid>
                      {userCred?.role === "admin" && (
                        <Grid item xs={12}>
                          <Button
                            onClick={() => handleUpdate(medicine._id)}
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{
                              color: "green",
                              borderColor: "green",
                              "&:hover": {
                                backgroundColor: "lightgreen",
                                borderColor: "#387F39",
                              },
                            }}
                          >
                            Update
                          </Button>
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <Button
                          onClick={() =>
                            navigate(`/buyMedicine/${medicine._id}`)
                          }
                          variant="outlined"
                          size="small"
                          fullWidth
                          sx={{
                            color: "#22C55E",
                            borderColor: "#22C55E",
                            "&:hover": {
                              backgroundColor: "#059669",
                              borderColor: "#22C55E",
                              color: "#fff",
                            },
                          }}
                        >
                          Purchase Now
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {/* Toggle Button */}
        <Box mx={"auto"} width="30%" my={3}>
          {/* <Button
            variant="contained"
            onClick={() => setShowAll((prev) => !prev)}
            size="small"
            fullWidth
            sx={{
              color: "#110ACAea",
              borderColor: "#22C55E",
              // color: "#fff",
              "&:hover": {
                backgroundColor: "#059669",
                borderColor: "#22C55E",

                color: "#fff",
              },
            }}
          >
            {showAll ? "Show Less" : "See All"}
          </Button> */}
        </Box>
        </Grid>

        
      </div>
    </div>
  )
}

export default LatestMed