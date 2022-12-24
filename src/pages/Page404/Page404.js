import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import img404 from '../../assets/404.svg';

export const Page404 = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: 480,
          margin: 'auto',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h3" paragraph>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>

        <Box
          component="img"
          src={img404}
          sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />

        <Button to="/" size="large" variant="contained" component={Link}>
          Go to Home
        </Button>
      </Box>
    </>
  );
};
