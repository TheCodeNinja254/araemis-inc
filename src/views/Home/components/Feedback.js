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
        <Typography
          variant="body2"
          sx={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(1) }}>
          Hear about us from other customers we have had the please to work
          with. The pleasure is ours
        </Typography>
        <Grid spacing={2} container>
          {_feedback.map((r) => (
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} id={r.id}>
              <CommonCardLight elevation={0}>
                <CardMedia
                  sx={{ height: 80 }}
                  image={r.imageSrc}
                  title="green iguana"
                />
                <CardContent>
                  <Typography variant="body1" sx={{ fontSize: 12 }}>
                    <strong>{r.title}</strong>
                  </Typography>
                  <Typography sx={{ mt: 1, fontSize: 10 }} variant="body2">
                    {r.text}
                  </Typography>
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
