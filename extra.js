//! 1. MUI sx styling---------
import { Typography } from '@mui/material';

function StyledText() {
  return (
    <Typography
      sx={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'primary.main',
        textAlign: 'center',
        padding: '10px',
        textTransform: 'uppercase',
      }}
    >
      Stylish Text
    </Typography>
  );
}

export default StyledText;
