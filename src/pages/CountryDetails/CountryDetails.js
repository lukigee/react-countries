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
import MapIcon from '@mui/icons-material/Map';
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
    width: 320,
    height: 180,
    boxShadow: '0.2rem 0.2rem 0rem #ddd1ee',
    borderRadius: '0.5rem',
    border: '2px solid #ddd1ee',
    paddingBottom: '5rem',
    transform: 'scale(1, 0.8)',
  },
  mapBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage:
      'linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)',
    flex: 1,
  },
};

export const CountryDetails = ({ data }) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Grid container component="main" sx={styles.container}>
      <Grid item xs={false} sm={false} md={5} sx={styles.leftGrid} />
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        sx={{ display: 'flex', flexDirection: 'column' }}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            mx: 1,
            mb: 1,
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
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 'medium' }} />
        <Box sx={styles.mapBox}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <MapIcon />
            <Typography
              sx={{ fontWeight: 'bold' }}
              gutterBottom
              component="h2"
              variant="h5"
            >
              MAP
            </Typography>
          </Box>
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
