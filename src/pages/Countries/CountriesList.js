import * as React from 'react';
import { Grid } from '@mui/material';
import { CountryCard } from './CountryCard';

export const CountriesList = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid key={item.cca2} item xs={12} sm={6} md={3}>
          <CountryCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};
