import React from 'react'
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
// import { TextField } from '@mui/material';
import { useSelector } from "react-redux";
import { BiSolidHide } from "react-icons/bi";
import { MdVisibility } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAddReviewMutation } from "../redux/user/usersApi";

const AddReview = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);

  const [reviewData, { isLoading: reviewLoading, data: addReviewData }] =
    useAddReviewMutation();

  const [showTextField, setShowTextField] = React.useState(false);
  const userData = useSelector((state) => state.medInfoUser.medInfoUserCred);
  // const [createUser, { data, isLoading, error }] = useUserRegisterMutation();

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
  // console.log(addReviewData)

  if (addReviewData?.success === true) {
    alert(addReviewData?.message);
  } else if (addReviewData?.success === false) {
    alert(addReviewData?.message);
  }

  const textFieldStyles = {
    InputProps: {
      sx: {
        color: darkMode ? "white" : "black", // Correctly apply text color inside the input
      },
    },
    sx: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: darkMode ? "yellow" : "black" },
        "&:hover fieldset": { borderColor: darkMode ? "green" : "black" },
        "&.Mui-focused fieldset": { borderColor: darkMode ? "white" : "black" },
        "& input": {
          color: darkMode ? "white" : "black", // Ensures input text color is applied at the input level
        },
      },
    },
    InputLabelProps: {
      style: { color: darkMode ? "red" : "black" }, // Label color
    },
  };

  if (reviewLoading) return <CircularProgress />;

  return (
    <div className="lg:py-32 py-12 lg:px-32 px-8">
      <div className={"flex justify-center items-center mx-auto p-8"}>
        <MyButton
          text={"Write review"}
          startIcon={<MdOutlineAddCircleOutline />}
          endIcon={<MdOutlineAddTask />}
          onClick={handleButtonClick}
        />
      </div>
      {showTextField && (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {["review"].map((field, idx) => (
              <Grid item xs={12} key={field}>
                <TextField
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  type={"text"}
                  fullWidth
                  variant="outlined"
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  multiline
                  rows={5}
                  {...textFieldStyles}
                />
                <Grid className="flex justify-end lg:m-0 my-2 ">
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
            ))}
          </Grid>
        </form>
      )}
    </div>
  );
};

export default AddReview