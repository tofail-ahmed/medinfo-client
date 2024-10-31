import React from 'react';
import Button from '@mui/material/Button';

function MyButton({ onClick, disabled, size, startIcon, endIcon,text,classNames }) {
  return (
    <Button
    className={classNames}
      variant="outlined"          // filled style
      color="primary"              // primary color (you can also set it to "secondary" or a custom color)
      onClick={onClick}            // function to handle click events
      disabled={disabled}          // disables the button when true
      size={size || "medium"}      // "small", "medium", or "large"
      startIcon={startIcon}        // icon displayed before the button text
      endIcon={endIcon}            // icon displayed after the button text
      sx={{
        borderRadius: 2,           // customizes the border radius
        fontWeight: 'bold',        // makes text bold
        padding: '8px 16px',       // custom padding
        textTransform: 'none',     // prevents text from being all uppercase
      }}
    >
      {text}
    </Button>
  );
}

export default MyButton;
