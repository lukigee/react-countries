import * as React from 'react';
import {
  Box,
  Grid,
  Paper,
  Divider,
  CardMedia,
  CardContent,
  Hidden,
  Typography,
  Link,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Map } from './Map';

const styles = {
  container: { height: 'calc(100vh - 132px)', pt: 2 },
  leftGrid: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'light',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  cardMedia: {
    width: 360,
    backgroundPosition: 'inherit',
    boxShadow: '0.2rem -0.2rem 0rem #ddd1ee',
    borderRadius: '0.5rem',
    border: '2px solid #ddd1ee',
    paddingBottom: '5rem',
  },
  mapBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const CountryDetails = ({ data }) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Grid container component="main" sx={styles.container}>
      <Grid item xs={false} sm={false} md={5} sx={styles.leftGrid} />
      <Grid item xs={12} sm={12} md={7} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontWeight: 'bold' }}
                gutterBottom
                component="h2"
                variant="h5"
              >
                {data[0].name.common}
              </Typography>
              <Typography variant="body2">
                <strong>Capital: </strong>
                {data[0].capital.join()}
              </Typography>
              <Typography variant="body2">
                <strong> Continents: </strong>
                {data[0].continents.join()}
              </Typography>
              <Typography variant="body2">
                <strong>Currencies: </strong>
                {Object.values(data[0].currencies)
                  .map((currency) => currency.name)
                  .join(', ')}
              </Typography>
              <Typography variant="body2">
                <strong>Languages: </strong>
                {Object.values(data[0].languages).join(', ')}
              </Typography>
              <Typography variant="body2">
                <strong>Population: </strong>{' '}
                {data[0].population.toLocaleString()}
              </Typography>
            </CardContent>
            <Hidden lgDown>
              <CardMedia
                sx={styles.cardMedia}
                image={data[0].flags.png}
                title="Image title"
              />
            </Hidden>
          </Box>
        </Box>
        <Divider
          variant="fullWidth"
          sx={{ borderBottomWidth: 'medium', mb: 1 }}
        />
        <Box sx={styles.mapBox}>
          <Typography
            sx={{ fontWeight: 'bold' }}
            gutterBottom
            component="h2"
            variant="h5"
          >
            MAP
          </Typography>
          {matches ? (
            <Map {...data} />
          ) : (
            <Typography variant="body2" color="text.secondary" align="center">
              {'See on the '}
              <Link color="inherit" href={data[0].maps.openStreetMaps}>
                openStreetMaps
              </Link>
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
