import React, { useEffect } from 'react';
import { Container, Typography, Grid, TextField, Button, CircularProgress } from "@mui/material";
import MyButton from "../ComponentsTemp/MyButton";
import { MdOutlineAddCircleOutline, MdOutlineAddTask } from "react-icons/md";
import { useSelector } from "react-redux";
import { useAddReviewMutation, useSingleUserQuery } from "../redux/user/usersApi";

const AddReview = () => {
  const darkMode = useSelector((store) => store.theme.darkMode); // getting current mode

const [reviewData, { isLoading: reviewLoading, data: addReviewData }] = useAddReviewMutation();//review mutatoion data

  const [showTextField, setShowTextField] = React.useState(false);

  const [isEditMode, setIsEditMode] = React.useState(false);

  const userData = useSelector((state) => state.medInfoUser.medInfoUserCred);

  const { data, isLoading, error, refetch } = useSingleUserQuery(userData?.id);

  const [formData, setFormData] = React.useState({ review: "" });

  const handleButtonClick = () => {
    console.log("Write Review clicked"); // Debugging log
    setShowTextField(true);
    setIsEditMode(false);
    setFormData({ review: "" }); // Clear the form for new review
  };

  const handleEditClick = () => {
    console.log("Edit button clicked"); // Debugging log
    setShowTextField(true);
    setIsEditMode(true);
    setFormData({ review: data?.data?.review || "" }); // Load the existing review
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting review:", formData.review); // Debugging log
    reviewData({ id: userData.id, body: formData });
  };

  useEffect(() => {
    if (addReviewData?.success) {
      alert(addReviewData.message);
      refetch();
      setShowTextField(false);
    }
  }, [addReviewData, refetch]);

  const textFieldStyles = {
    InputProps: {
      sx: { color: darkMode ? "white" : "black" },
    },
    sx: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: darkMode ? "yellow" : "black" },
        "&:hover fieldset": { borderColor: darkMode ? "green" : "black" },
        "&.Mui-focused fieldset": { borderColor: darkMode ? "white" : "black" },
        "& input": { color: darkMode ? "white" : "black" },
      },
    },
    InputLabelProps: { style: { color: darkMode ? "red" : "black" } },
  };

  if (reviewLoading || isLoading) return <CircularProgress />;

  return (
    <div className="lg:py-32 py-12 lg:px-32 px-8">
      <div className="flex justify-center items-center mx-auto p-8">
        <MyButton
          text="Write review"
          startIcon={<MdOutlineAddCircleOutline />}
          endIcon={<MdOutlineAddTask />}
          onClick={handleButtonClick}
        />
      </div>

      {data?.data?.review && (
        <div style={{
          borderRadius: "8px",
          border: `1px solid ${darkMode ? "yellow" : "gray"}`,
          backgroundColor: darkMode ? "#333" : "#f5f5f5",
          color: darkMode ? "white" : "black",
          marginTop: "16px",
          marginBottom: "16px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
        }}>
          <span style={{
            width: "100%", padding: "16px", display: "flex",
            alignItems: "center", justifyContent: "center", textAlign: "start",
          }}>{data?.data?.review}</span>
          <Grid className="flex justify-end mt-4">
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditClick}
              sx={{ width: { xs: "100%", lg: "auto" }, margin: "2px" }}
            >
              Edit Review
            </Button>
          </Grid>
        </div>
      )}

      {/* Form should display when showTextField is true */}
      {showTextField && (
        <form onSubmit={handleSubmit} sx={{
            marginTop:"10px",
            marginBottom:"10px",
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Review"
                name="review"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.review}
                onChange={handleChange}
                required
                multiline
                rows={5}
                {...textFieldStyles}
              />
              <Grid className="flex justify-end lg:m-0 my-2">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: "100%", lg: "auto" } }}
                >
                  {isEditMode ? "Update Review" : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default AddReview;
