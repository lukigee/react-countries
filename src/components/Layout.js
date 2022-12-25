import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Typography, Toolbar, Box, Link } from '@mui/material';

export const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-beetwen',
        minHeight: '100vh',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'flex-start',
          bgcolor: '#28282a',
          color: '#fff',
          '&.MuiToolbar-root': { paddingLeft: '5rem' },
        }}
      >
        <Typography variant="h4"> Countries page</Typography>
      </Toolbar>
      <Box
        sx={{
          flex: 1,
          marginLeft: '5rem',
          marginRight: '5rem',
        }}
      >
        <Outlet />
      </Box>
      <Box
        component="footer"
        sx={{
          p: 2,
          bgcolor: '#ffc071',
          mt: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit">Your Website</Link> {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Box>
  );
};
