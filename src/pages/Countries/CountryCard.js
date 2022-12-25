import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 345,
    padding: '1em',
    marginBottom: '0.5em',
    boxShadow: '0.3em 0.3em 0 #ddd1ee',
    borderRadius: '0.5em',
  },
  cardMedia: {
    border: '1px solid #ddd1ee',
    borderRadius: '0.5em',
    boxShadow: '0.2em 0.2em 0 #ddd1ee',
    transform: 'scale(0.8, 0.8)',
    width: 320,
    height: 180,
  },
};

export const CountryCard = ({ flagUrl: imageUrl, name, region }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageUrl}
        sx={styles.cardMedia}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Region: {region}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/countries/${name}`}>
          Find out more
        </Button>
      </CardActions>
    </Card>
  );
};
