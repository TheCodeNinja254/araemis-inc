import React from 'react';
import {
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme
} from '@mui/material';
import { CommonCard, CommonCardLight } from '../../../Styles/Home';
import _feedback from '../../../_mockData/_feedback';

const Feedback = () => {
  const theme = useTheme();

  return (
    <CommonCard>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(3) }}>
          <strong>What our customers say</strong>
        </Typography>
        <Grid spacing={2} container>
          {_feedback.map((r) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} id={r.id}>
              <CommonCardLight elevation={0}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={r.imageSrc}
                  title="green iguana"
                />
                <CardContent>
                  <Typography sx={{ mt: 2 }} variant="h4">
                    <strong>{r.title}</strong>
                  </Typography>
                  <Typography sx={{ mt: 1 }}>{r.text}</Typography>
                </CardContent>
              </CommonCardLight>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </CommonCard>
  );
};

export default Feedback;
