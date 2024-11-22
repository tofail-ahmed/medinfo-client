import React from "react";
import {
  useLatestAddedMedQuery,
  useLatestSoldMedQuery,
} from "../../redux/medicine/medicinesApi";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Loader from "../../ComponentsTemp/Loader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const LatestMed = () => {
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
  const navigate = useNavigate();

  // const {data,isLoading}=useLatestSoldMedQuery()
  const { data, isLoading, error } = useLatestAddedMedQuery();
  console.log(data?.data);
  console.log(error);

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

  const displayedData = data?.data
    .filter((medicine) => medicine.status === "approved")
    .slice(0, 12);
  console.log(displayedData.length);
  return (
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
                    "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
                  width: "60px", // Adjust the width
                  height: "30px", // Adjust the height
                  display: "flex", // Ensures the text is centered
                  alignItems: "center", // Vertical alignment
                  justifyContent: "center", // Horizontal alignment
                }}
                className="absolute left-8 bg-orange-500/90 text-xs text-white font-bold top-[40px]"
              >
                {medicine.discount*100}% OFF
              </span>
              <span
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
              </span>

              <Card
                sx={{
                  // position:"relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // Ensures all cards are the same height
                  backgroundColor: "rgba(9, 231, 235, 0.5)",
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
  );
};

export default LatestMed;
