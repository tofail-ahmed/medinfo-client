import React from 'react';
import TextField from '@mui/material/TextField';

const CustomInput = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  fullWidth = true,
  error = false,
  helperText = "",
  ...otherProps
}) => {
  return (
    <TextField
    m={2}
      label={label}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth={fullWidth}
      error={error}
      helperText={helperText}
      variant="outlined"
      {...otherProps} // Allows passing additional MUI props like 'size' or 'margin'
    />
  );
};

export default CustomInput;
