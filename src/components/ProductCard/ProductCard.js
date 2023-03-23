import React from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography
} from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { CommonCardLight } from '../../Styles/Home';

const ProductCard = ({ key, product }) => {
  return (
    <CommonCardLight elevation={0} key={key}>
      <CardMedia
        sx={{ height: 280 }}
        image={product.displayImage}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body1">
          <strong>{product.name}</strong>
        </Typography>
        <Typography sx={{ mt: 1 }} variant="body2">
          {product.companyName}
        </Typography>
        <Typography sx={{ mt: 1 }} variant="body2">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href={product.link}
          target="_blank"
          disableElevation
          sx={{
            borderRadius: 10,
            textTransform: 'capitalize'
          }}>
          Explore Solution <NavigateNext color="secondary" />
        </Button>
      </CardActions>
    </CommonCardLight>
  );
};

export default ProductCard;
