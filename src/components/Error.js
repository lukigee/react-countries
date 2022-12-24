import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5rem',
      }}
    >
      <Typography>...Ooops something went wrong!</Typography>
      <Typography>{error}</Typography>
    </Box>
  );
};
