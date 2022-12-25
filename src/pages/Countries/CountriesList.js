import * as React from 'react';
import { Grid } from '@mui/material';
import { CountryCard } from './CountryCard';

export const CountriesList = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid key={item.cca2} item xs={12} md={6} lg={4} xl={3}>
          <CountryCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};
