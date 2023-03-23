import React, { useState } from 'react';
import { CardContent, Grid, Typography, useTheme } from '@mui/material';
import {
  CircularCard,
  CommonCard,
  CommonCardLight
} from '../../../Styles/Home';
import _ourProducts from '../../../_mockData/_ourProducts';
import ProductCard from '../../../components/ProductCard/ProductCard';
import getInitials from '../../../utils/getInitials';

const About = () => {
  const theme = useTheme();
  const [selectedProduct, setSelectedProduct] = useState(_ourProducts[0].name);
  const filteredProducts = _ourProducts.filter((product) =>
    product.name.includes(selectedProduct)
  );

  return (
    <CommonCard elevation={0} variant="outlined">
      <CardContent>
        <Grid spacing={2} container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <CommonCardLight elevation={0}>
              <CardContent>
                <Typography variant="h5" textAlign="center">
                  <strong>Our Gallery/Showcase</strong>
                </Typography>
                <Typography textAlign="center" variant="body2">
                  ...Our solutions
                </Typography>
              </CardContent>
            </CommonCardLight>

            <Typography
              variant="body2"
              textAlign="center"
              color="text.primary"
              sx={{
                marginBottom: theme.spacing(3),
                marginTop: theme.spacing(2)
              }}>
              We build and deliver from a wide array of solutions and
              technologies ranging from CryptoCurrency, Smart Contracts, Web
              Applications, dApps, Mobile Applications, API solutions, Machine
              Learning models, Fintech solutions, UI-UX reviews and delivery
              among others. Below is a showcase of some of our solutions built
              for Araemis or for clients.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {_ourProducts.map((p) => (
                <Grid item id={p.id} sx={3}>
                  <CircularCard
                    width="50"
                    height="50"
                    active={selectedProduct === p.name}
                    onClick={() => setSelectedProduct(p.name)}>
                    <Typography>{getInitials(p.name)}</Typography>
                  </CircularCard>
                  <Typography
                    sx={{ fontSize: 9 }}
                    color={theme.palette.secondary.contrastText}>
                    {p.shortName}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </CommonCard>
  );
};

export default About;
