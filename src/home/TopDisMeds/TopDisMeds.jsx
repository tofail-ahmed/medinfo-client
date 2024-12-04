import React, { useEffect, useState } from "react";
import { useTopDiscMedsQuery } from "../../redux/medicine/medicinesApi";
import Loader from "../../ComponentsTemp/Loader";

import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { CardContent, CardMedia, Grid, Typography, useMediaQuery,Card, Button } from "@mui/material";
import { Box } from "@mui/system";

const TopDisMeds = () => {
  const { data, isLoading, isError } = useTopDiscMedsQuery();
//   console.log(data?.data);
const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);

const navigate = useNavigate();

const [displayCount, setDisplayCount] = useState(12); // Initial count for large screens
// const [showAll, setShowAll] = useState(false); // Toggle between limited and full list

// Set up media query breakpoints
const isLargeScreen = useMediaQuery("(min-width:1200px)");
const isMediumScreen = useMediaQuery(
  "(min-width:900px) and (max-width:1199px)"
);
const isSmallScreen = useMediaQuery(
  "(min-width:600px) and (max-width:899px)"
);

useEffect(() => {
  
    if (isLargeScreen) setDisplayCount(12);
    else if (isMediumScreen) setDisplayCount(9);
    // else if (isSmallScreen) setDisplayCount(10);
    else setDisplayCount(10); // Default for extra-small screens
  
}, [isLargeScreen, isMediumScreen, isSmallScreen]);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log("Error Occured");
  }
  const displayedData =data?.data.slice(0, displayCount);
  return (
  <div className="my-24">
      <h1 className="text-center text-3xl text-red-700">Hot Deals</h1>
      <div>
      <div className="   mx-10">
        <Grid container spacing={6} sx={{ marginTop: 2 }}>
          {displayedData.map((medicine, index) => (
            <Grid
              sx={{ position: "relative" }}
              item
              xs={6}
              md={4}
              lg={3}
              key={index}
            >
              <span
                style={{
                  clipPath:
                    "polygon(0% 15%, 24% 23%, 15% 0%, 85% 0%, 77% 24%, 100% 15%, 100% 85%, 77% 76%, 85% 100%, 14% 100%, 23% 78%, 0% 85%)",
                  width: "40px", // Adjust the width
                  height: "40px", // Adjust the height
                  display: "flex", // Ensures the text is centered
                  alignItems: "center", // Vertical alignment
                  justifyContent: "center", // Horizontal alignment
                }}
                className="absolute left-8 bg-red-500/90 text-xs text-white font-bold top-[40px] text-center"
              >
                {medicine.discount*100}% OFF
              </span>
              {/* <span
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  width: "60px", // Adjust the width
                  height: "60px", // Adjust the height
                  display: "flex", // Ensures the text is centered
                  alignItems: "center", // Vertical alignment
                  justifyContent: "center", // Horizontal alignment
                }}
                className="absolute -right-6 bg-red-500/90 text-xs text-white font-bold top-[17px]"
              >
                New
              </span> */}

              <Card
                sx={{
                  // position:"relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // Ensures all cards are the same height
                  backgroundColor: "rgba(250, 100, 50, 0.5)",
                }}
              >
                {/* <span className="absolute right-0  bg-red-500 z-50 -top-[10px]">Latest</span> */}
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
                    {(isLargeScreen || isMediumScreen) && (
                      <Typography variant="body2" color="text.secondary">
                        {/* <strong>Actions:</strong> {medicine.actions} */}
                      </Typography>
                    )}
                    <Typography variant="body2" color="text.secondary">
                      <strong>Total Sold:</strong> {medicine.sold}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Date:</strong> {medicine.createdAt}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        <strong>Status:</strong> {medicine.status}
                      </Typography> */}

                    {(isLargeScreen || isMediumScreen) && (
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
                    )}
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
                        onClick={() => navigate(`/buyMedicine/${medicine._id}`)}
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
  </div>
  )
};

export default TopDisMeds;
