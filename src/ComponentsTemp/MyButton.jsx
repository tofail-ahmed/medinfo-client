import React from 'react';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

function MyButton({ onClick, disabled, size, startIcon, endIcon, text, classNames }) {
  const darkMode = useSelector((store) => store.theme.darkMode);

  const buttonStyles = {
    borderRadius: 2,
    fontWeight: 'bold',
    padding: '8px 16px',
    textTransform: 'none',
    color: darkMode ? 'white' : 'black',
    borderColor: darkMode ? 'yellow' : 'black',
    '&:hover': {
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      borderColor: darkMode ? 'green' : 'black',
    },
    '&.Mui-disabled': {
      color: darkMode ? 'grey' : 'lightgrey',
      borderColor: darkMode ? 'grey' : 'lightgrey',
    },
    '&.Mui-focusVisible': {
      borderColor: darkMode ? 'white' : 'black',
    },
  };

  return (
    <Button
      className={classNames}
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      size={size || "medium"}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={buttonStyles}  // Applying the buttonStyles object directly here
    >
      {text}
    </Button>
  );
}

export default MyButton;
