import React from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import MyButton from "../ComponentsTemp/MyButton";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdOutlineAddTask } from "react-icons/md";
import { useSelector } from "react-redux";
import { BiSolidHide } from "react-icons/bi";
import { MdVisibility } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAddReviewMutation, useSingleUserQuery } from "../redux/user/usersApi";

const AddReview = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);

  const [reviewData, { isLoading: reviewLoading, data: addReviewData }] =
    useAddReviewMutation();

  const [showTextField, setShowTextField] = React.useState(false);
  const userData = useSelector((state) => state.medInfoUser.medInfoUserCred);

  const { data, isLoading, error } = useSingleUserQuery(userData?.id);



  const [formData, setFormData] = React.useState({
    review: "",
  });

  const handleButtonClick = () => {
    setShowTextField(!showTextField);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    reviewData({ id: userData.id, body: formData });
  };

  if (addReviewData?.success === true) {
    alert(addReviewData?.message);
  } else if (addReviewData?.success === false) {
    alert(addReviewData?.message);
  }

  const textFieldStyles = {
    InputProps: {
      sx: {
        color: darkMode ? "white" : "black",
      },
    },
    sx: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: darkMode ? "yellow" : "black" },
        "&:hover fieldset": { borderColor: darkMode ? "green" : "black" },
        "&.Mui-focused fieldset": { borderColor: darkMode ? "white" : "black" },
        "& input": {
          color: darkMode ? "white" : "black",
        },
      },
    },
    InputLabelProps: {
      style: { color: darkMode ? "red" : "black" },
    },
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

      {data?.data?.review ? (
       <div
       style={{
         padding: "16px",
         borderRadius: "8px",
         border: `1px solid ${darkMode ? "yellow" : "gray"}`,
         backgroundColor: darkMode ? "#333" : "#f5f5f5",
         color: darkMode ? "white" : "black",
         marginTop: "16px",
         fontSize: "1.1rem",
         lineHeight: "1.6",
       }}
     >
       {data?.data?.review}
     </div>
     
      ) : (
        showTextField && (
          <>
            <form onSubmit={handleSubmit}>
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
                      sx={{
                        width: { xs: "100%", lg: "auto" },
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </>
        )
      )}
    </div>
  );
};

export default AddReview;
