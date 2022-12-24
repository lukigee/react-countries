import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1em',
        alignItems: 'center',
        paddingTop: '5rem',
      }}
    >
      <CircularProgress />
      <Typography>Loading data...</Typography>
    </Box>
  );
};
