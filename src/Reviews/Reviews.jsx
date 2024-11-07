import { Box, Grid, Typography, Paper, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAllUserQuery } from "../redux/user/usersApi";
import Loader from "../ComponentsTemp/Loader";

const Reviews = () => {
      const [heightSet, setHeightSrt] = useState(); // Initial count for large screens
      const [fontSize, setFontSize] = useState(); // Initial count for large screens
      const [imgWidth,setImgWidth ] = useState(); // Initial count for large screens
      const [imgHeight,setImgHeight ] = useState(); // Initial count for large screens



  const { data, isLoading } = useAllUserQuery();
  const allUser = data?.data;

  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:900px) and (max-width:1199px)"
  );
  const isSmallScreen = useMediaQuery(
    "(min-width:600px) and (max-width:899px)"
  );

  useEffect(() => {
       
        if (isLargeScreen) setHeightSrt("400px"), setImgWidth("100px"),setImgHeight("100px"),setFontSize("16px");
        else if (isMediumScreen) setHeightSrt("400px"),setImgWidth("80px"),setImgHeight("80px"),setFontSize("14px");
        // else if (isSmallScreen) setDisplayCount(10);
        else setHeightSrt("300px"),setImgWidth("50px"),setImgHeight("50px"),setFontSize("12px"); // Default for extra-small screens
      
    }, [isLargeScreen, isMediumScreen, isSmallScreen]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "600",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#110ACB",
          marginBottom: "30px",
          marginTop: "30px",
          letterSpacing: "1.2px",
        }}
      >
        All Reviews
      </Typography>

      <Box sx={{ padding: "0 20px" }}>
        <Grid container spacing={3}>
          {allUser?.map((user, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#F3F4F6",
                  height:heightSet,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Ensure content is spaced correctly
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {user.imgUrl && (
                    <img
                      src={user.imgUrl}
                      alt={user.name}
                      style={{
                        width: imgWidth,
                        height: imgHeight,
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginBottom: "15px",
                      }}
                    />
                  )}
                </Box>
                <Box
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                        
                    fontSize: fontSize,
                    color: "#333",
                    lineHeight: "1.5",
                    textAlign: "center",
                  }}
                >
                  "{user.review}"
                </Typography>
                </Box>
             <Box sx={{ textAlign: "center" }}>
             <Typography
                  sx={{
                    fontSize: fontSize,
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "5px",
                    textAlign: "center",
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: fontSize,
                    color: "#555",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {user.email}
                </Typography>
             </Box>
                
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Reviews;
